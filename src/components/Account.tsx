"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { getBrowserClient } from "@/lib/supabase/client";
import { MAX_SCORE } from "@/lib/game/tiers";

interface Stats {
  sheets: number;
  total: number;
  bestSheet: number;
  streak: number;
  bestStreak: number;
  gems: number;
  packPrompts: number;
  packPoints: number;
}

function torontoToday() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
}

function computeStats(daily: { day: string; points: number | null }[], packs: { points: number }[]): Stats {
  const byDay = new Map<string, number>();
  let gems = 0;
  for (const r of daily) {
    byDay.set(r.day, (byDay.get(r.day) ?? 0) + (r.points ?? 0));
    if (r.points === 100) gems++;
  }
  for (const r of packs) if (r.points === 100) gems++;
  const days = [...byDay.keys()].sort();
  const toNum = (d: string) => Math.round(Date.parse(d + "T00:00:00Z") / 86_400_000);
  let best = 0;
  let run = 0;
  let prev: number | null = null;
  for (const d of days) {
    const n = toNum(d);
    run = prev !== null && n === prev + 1 ? run + 1 : 1;
    best = Math.max(best, run);
    prev = n;
  }
  const today = toNum(torontoToday());
  const current = prev !== null && (prev === today || prev === today - 1) ? run : 0;
  return {
    sheets: days.length,
    total: [...byDay.values()].reduce((a, b) => a + b, 0),
    bestSheet: Math.max(0, ...byDay.values()),
    streak: current,
    bestStreak: best,
    gems,
    packPrompts: packs.length,
    packPoints: packs.reduce((s, r) => s + r.points, 0),
  };
}

export function Account() {
  const supabase = getBrowserClient();
  const params = useSearchParams();
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [username, setUsername] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [msg, setMsg] = useState<string | null>(params.get("error") ? "That sign-in link was invalid or expired. Request a new one." : null);
  const [busy, setBusy] = useState(false);
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      if (!data.user) return;
      const [{ data: prof }, { data: daily }, { data: packs }] = await Promise.all([
        supabase.from("profiles").select("username").eq("id", data.user.id).maybeSingle(),
        supabase.from("daily_results").select("day, points").eq("user_id", data.user.id),
        supabase.from("pack_results").select("points").eq("user_id", data.user.id),
      ]);
      setUsername(prof?.username ?? null);
      setNameInput(prof?.username ?? "");
      setStats(computeStats(daily ?? [], packs ?? []));
    })();
  }, [supabase]);

  async function sendLink(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim(),
      options: { emailRedirectTo: `${location.origin}/auth/callback?next=/account` },
    });
    setBusy(false);
    if (error) setMsg(error.message);
    else setSent(true);
  }

  async function saveName(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    const name = nameInput.trim();
    if (!/^[A-Za-z0-9_]{3,20}$/.test(name)) {
      setMsg("Usernames are 3–20 letters, numbers or underscores.");
      return;
    }
    setBusy(true);
    setMsg(null);
    const { error } = username
      ? await supabase.from("profiles").update({ username: name }).eq("id", user.id)
      : await supabase.from("profiles").insert({ id: user.id, username: name });
    setBusy(false);
    if (error) setMsg(error.code === "23505" ? "That username is taken." : error.message);
    else {
      setUsername(name);
      setMsg("Saved. Your name is on the drawings now.");
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    location.href = "/";
  }

  if (user === undefined) return <p className="muted">checking credentials…</p>;

  if (!user) {
    return (
      <div style={{ maxWidth: 560 }}>
        <h1 className="page-title">SIGN IN</h1>
        <p className="page-sub">Save your daily drawings, keep a streak and get on the leaderboard. We email you a one-time link; no password.</p>
        {sent ? (
          <div className="notice">
            Link sent to <strong>{email}</strong>. Open it on this device to finish signing in. Check spam if it does not show up in a minute.
          </div>
        ) : (
          <form className="form" onSubmit={sendLink}>
            <label>
              <span className="label">Email</span>
              <input className="answer-input" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" />
            </label>
            <button className="btn" disabled={busy}>{busy ? "SENDING…" : "EMAIL ME A LINK"}</button>
          </form>
        )}
        {msg && <p className="notice">{msg}</p>}
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">{username ? username.toUpperCase() : "WELCOME ABOARD"}</h1>
      <p className="page-sub">Signed in as {user.email}</p>

      {!username && <div className="notice">Pick a username so your scores appear on the leaderboard.</div>}
      <form className="form" onSubmit={saveName}>
        <label>
          <span className="label">Username</span>
          <input className="answer-input" value={nameInput} onChange={(e) => setNameInput(e.target.value)} maxLength={20} placeholder="e.g. torque_wrench" />
        </label>
        <button className="btn small" disabled={busy} style={{ justifySelf: "start" }}>{username ? "UPDATE" : "SAVE USERNAME"}</button>
      </form>
      {msg && <p className="notice">{msg}</p>}

      {stats && (
        <div className="stat-grid">
          <Stat label="Current streak" value={stats.streak} />
          <Stat label="Best streak" value={stats.bestStreak} />
          <Stat label="Sheets drawn" value={stats.sheets} />
          <Stat label="Daily points" value={stats.total} />
          <Stat label="Best sheet" value={`${stats.bestSheet}/${MAX_SCORE}`} />
          <Stat label="Gems found" value={stats.gems} />
          <Stat label="Pack prompts" value={stats.packPrompts} />
          <Stat label="Pack points" value={stats.packPoints} />
        </div>
      )}

      <div className="actions" style={{ justifyContent: "flex-start" }}>
        <Link href="/" className="btn">TODAY&apos;S SHEET</Link>
        <Link href="/leaderboard" className="btn ghost">LEADERBOARD</Link>
        <button className="btn ghost" onClick={signOut}>SIGN OUT</button>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="hud-cell">
      <span className="label">{label}</span>
      <div className="v">{value}</div>
    </div>
  );
}
