"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { PromptResult } from "@/lib/game/types";
import { MAX_SCORE, formatTolerance, rankFor, tierInfo } from "@/lib/game/tiers";
import { Drawing } from "./Drawing";

const REV = "ABCDEFG";

function msUntilTorontoMidnight(): number {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Toronto", hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h23" }).formatToParts(new Date());
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  return 86_400_000 - (get("hour") * 3600 + get("minute") * 60 + get("second")) * 1000;
}

function hms(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
}

export function Summary({
  results,
  mode,
  sheet,
  signedIn,
  hasUsername,
  packTitle,
  onReplay,
}: {
  results: PromptResult[];
  mode: "daily" | "pack";
  sheet: number;
  signedIn: boolean;
  hasUsername: boolean;
  packTitle?: string;
  onReplay?: () => void;
}) {
  const sorted = [...results].sort((a, b) => a.idx - b.idx);
  const score = sorted.reduce((s, r) => s + r.points, 0);
  const [left, setLeft] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (mode !== "daily") return;
    const tick = () => setLeft(msUntilTorontoMidnight());
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [mode]);

  const shareText = [
    mode === "daily" ? `MEC-RILLION · Sheet #${sheet}` : `MEC-RILLION · ${packTitle}`,
    sorted.map((r) => tierInfo(r.points).emoji).join(""),
    `${score}/${MAX_SCORE} · ${formatTolerance(score)} mm · ${rankFor(score)}`,
    "https://mec-rillion.lifeofjeso.ca",
  ].join("\n");

  async function share() {
    try {
      if (navigator.share && /Mobi|Android/i.test(navigator.userAgent)) {
        await navigator.share({ text: shareText });
        return;
      }
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* user cancelled or clipboard blocked */
    }
  }

  return (
    <div className="summary">
      <p className="label center">{mode === "daily" ? `Sheet #${sheet} · issued` : `${packTitle} · issued`}</p>
      <h2 className="page-title center">{rankFor(score)}</h2>
      <Drawing score={score} />
      <div className="totals">
        <div className="hud-cell"><span className="label">Score</span><div className="v">{score}<span className="muted" style={{ fontSize: 14 }}> / {MAX_SCORE}</span></div></div>
        <div className="hud-cell"><span className="label">Tolerance</span><div className="v">{formatTolerance(score)}</div></div>
        <div className="hud-cell"><span className="label">Gems found</span><div className="v">{sorted.filter((r) => r.points === 100).length}</div></div>
      </div>

      <table className="bom">
        <thead>
          <tr>
            <th>REV</th>
            <th>PROMPT</th>
            <th>YOUR PART</th>
            <th className="hide-sm">THE MEC-RILLION</th>
            <th style={{ textAlign: "right" }}>PTS</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((r) => {
            const info = tierInfo(r.points);
            return (
              <tr key={r.idx}>
                <td>{REV[r.idx]}</td>
                <td>{r.prompt}</td>
                <td>
                  {r.answer ?? <span className="muted">—</span>}
                  <div className="tier-tag" style={{ color: info.color }}>{info.name}</div>
                </td>
                <td className="hide-sm gem">{r.gems.join(" · ")}</td>
                <td className="n" style={{ color: info.color }}>{r.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="actions">
        <button className="btn" onClick={share}>{copied ? "COPIED ✓" : "SHARE RESULT"}</button>
        {onReplay && <button className="btn ghost" onClick={onReplay}>REDRAW CHAPTER</button>}
        <Link className="btn ghost" href={mode === "daily" ? "/leaderboard" : "/leaderboard?board=packs"}>LEADERBOARD</Link>
        {mode === "daily" ? <Link className="btn ghost" href="/packs">THEMED PACKS</Link> : <Link className="btn ghost" href="/packs">ALL PACKS</Link>}
      </div>

      {mode === "daily" && left !== null && (
        <p className="center muted">Next sheet in <span className="display" style={{ fontSize: 22, color: "var(--ink)" }}>{hms(left)}</span></p>
      )}

      {!signedIn && (
        <div className="notice">
          This score is saved on this device only. <Link href="/account">Sign in with your email</Link> to save future drawings and get on the leaderboard.
        </div>
      )}
      {signedIn && !hasUsername && (
        <div className="notice">
          Your score is saved, but you need a username to show on the leaderboard. <Link href="/account">Pick one</Link>.
        </div>
      )}
    </div>
  );
}
