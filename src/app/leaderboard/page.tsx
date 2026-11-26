import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { sheetNumber, todayKey } from "@/lib/game/daily";

export const metadata: Metadata = { title: "Leaderboard" };
export const dynamic = "force-dynamic";

const BOARDS = {
  today: { label: "Today", fn: "leaderboard_daily", col: "PROMPTS", key: "answered" },
  alltime: { label: "All-time", fn: "leaderboard_alltime", col: "SHEETS", key: "days" },
  packs: { label: "Packs", fn: "leaderboard_packs", col: "PROMPTS", key: "prompts" },
} as const;

type Row = { username: string; score: number; answered?: number; days?: number; prompts?: number };

export default async function LeaderboardPage({ searchParams }: { searchParams: Promise<{ board?: string }> }) {
  const { board: raw } = await searchParams;
  const board = (raw && raw in BOARDS ? raw : "today") as keyof typeof BOARDS;
  const cfg = BOARDS[board];
  const supabase = await createClient();
  const day = todayKey();
  const { data, error } = board === "today" ? await supabase.rpc(cfg.fn, { p_day: day }) : await supabase.rpc(cfg.fn);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  let me: string | null = null;
  if (user) {
    const { data: p } = await supabase.from("profiles").select("username").eq("id", user.id).maybeSingle();
    me = p?.username ?? null;
  }
  const rows = (data ?? []) as Row[];

  return (
    <div>
      <h1 className="page-title">LEADERBOARD</h1>
      <p className="page-sub">
        {board === "today" && `Sheet #${sheetNumber(day)} · ${day}. Resets at midnight Eastern.`}
        {board === "alltime" && "Every daily point ever drawn."}
        {board === "packs" && "Sum of each player's best score on every themed-pack prompt."}
      </p>
      <nav className="tabs" aria-label="Leaderboards">
        {(Object.keys(BOARDS) as (keyof typeof BOARDS)[]).map((b) => (
          <Link key={b} href={b === "today" ? "/leaderboard" : `/leaderboard?board=${b}`} aria-current={b === board ? "page" : undefined}>
            {BOARDS[b].label}
          </Link>
        ))}
      </nav>
      {error && <p className="notice">Could not load the leaderboard right now.</p>}
      {!error && rows.length === 0 && <p className="muted">No drawings issued yet. Be the first.</p>}
      {rows.length > 0 && (
        <div className="panel" style={{ padding: "4px 12px", overflowX: "auto" }}>
          <table className="board">
            <thead>
              <tr>
                <th>#</th>
                <th>ENGINEER</th>
                <th className="r">{cfg.col}</th>
                <th className="r">SCORE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.username} className={r.username === me ? "me" : undefined}>
                  <td className="rank">{i + 1}</td>
                  <td>{r.username}</td>
                  <td className="r">{r[cfg.key]}</td>
                  <td className="r display" style={{ fontSize: 20 }}>{r.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {!user && (
        <p className="notice">
          Want your name up here? <Link href="/account">Sign in with your email</Link>; no password needed.
        </p>
      )}
    </div>
  );
}
