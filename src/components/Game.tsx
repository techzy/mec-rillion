"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import type { PromptResult } from "@/lib/game/types";
import { MAX_SCORE, PROMPT_SECONDS, PROMPTS_PER_ROUND, formatTolerance, rankFor, tierInfo } from "@/lib/game/tiers";
import { Drawing } from "./Drawing";
import { Summary } from "./Summary";

export interface GameProps {
  mode: "daily" | "pack";
  pack?: string;
  chapter?: number;
  /** Shown on the intro screen. */
  title: string;
  subtitle: string;
  kicker: string;
}

interface Active {
  idx: number;
  text: string;
  deadline: number;
}

type Phase = "loading" | "intro" | "playing" | "reveal" | "done" | "error";

const REV = "ABCDEFG";

function storageKey(p: GameProps, day: string) {
  return p.mode === "daily" ? `mec:v1:daily:${day}` : `mec:v1:pack:${p.pack}:${p.chapter}`;
}

function readLocal<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

function writeLocal(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage unavailable: progress just isn't remembered */
  }
}

interface LocalDaily {
  results: PromptResult[];
  active?: { idx: number; text: string; startedAt: number } | null;
}

export function Game(props: GameProps) {
  const { mode, pack, chapter } = props;
  const [phase, setPhase] = useState<Phase>("loading");
  const [results, setResults] = useState<PromptResult[]>([]);
  const [best, setBest] = useState<PromptResult[]>([]);
  const [active, setActive] = useState<Active | null>(null);
  const [last, setLast] = useState<PromptResult | null>(null);
  const [guess, setGuess] = useState("");
  const [miss, setMiss] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const [meta, setMeta] = useState({ signedIn: false, username: null as string | null, day: "", sheet: 0 });
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const finishing = useRef(false);

  const api = useCallback(
    async (action: string, extra: Record<string, unknown> = {}) => {
      const res = await fetch("/api/play", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ action, mode, pack, chapter, ...extra }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || `request failed (${res.status})`);
      return json;
    },
    [mode, pack, chapter],
  );

  const score = results.reduce((s, r) => s + r.points, 0);
  const nextIdx = (rs: PromptResult[]) => {
    for (let i = 0; i < PROMPTS_PER_ROUND; i++) if (!rs.some((r) => r.idx === i)) return i;
    return -1;
  };

  // persist guest progress
  const saveLocal = useCallback(
    (rs: PromptResult[], act: LocalDaily["active"], day: string) => {
      if (meta.signedIn) return;
      if (mode === "daily") writeLocal(storageKey(props, day), { results: rs, active: act } satisfies LocalDaily);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [meta.signedIn, mode, pack, chapter],
  );

  const recordBest = useCallback(
    (r: PromptResult) => {
      if (mode !== "pack") return;
      setBest((prev) => {
        const cur = prev.find((p) => p.idx === r.idx);
        if (cur && cur.points >= r.points) return prev;
        const next = [...prev.filter((p) => p.idx !== r.idx), r].sort((a, b) => a.idx - b.idx);
        writeLocal(storageKey(props, ""), next);
        return next;
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mode, pack, chapter],
  );

  // ---- load ----
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const s = await api("state");
        if (cancelled) return;
        setMeta({ signedIn: s.signedIn, username: s.username, day: s.day, sheet: s.sheet });
        if (mode === "pack") {
          const localBest = readLocal<PromptResult[]>(storageKey(props, "")) ?? [];
          const merged = [...s.results];
          for (const lb of localBest) {
            const i = merged.findIndex((m: PromptResult) => m.idx === lb.idx);
            if (i < 0) merged.push(lb);
            else if (lb.points > merged[i].points) merged[i] = lb;
          }
          setBest(merged.sort((a: PromptResult, b: PromptResult) => a.idx - b.idx));
          setPhase("intro");
          return;
        }
        let rs: PromptResult[] = s.results;
        let act: Active | null = s.active ? { idx: s.active.idx, text: s.active.text, deadline: Date.now() + s.active.remainingMs } : null;
        if (!s.signedIn) {
          const local = readLocal<LocalDaily>(storageKey(props, s.day));
          rs = local?.results ?? [];
          if (local?.active) {
            const left = local.active.startedAt + PROMPT_SECONDS * 1000 - Date.now();
            if (left > 500) act = { idx: local.active.idx, text: local.active.text, deadline: Date.now() + left };
            else {
              const t = await api("timeout", { idx: local.active.idx });
              rs = [...rs.filter((r) => r.idx !== t.result.idx), t.result];
              writeLocal(storageKey(props, s.day), { results: rs, active: null });
            }
          }
        }
        if (cancelled) return;
        setResults(rs);
        if (act) {
          setActive(act);
          setPhase("playing");
        } else if (nextIdx(rs) === -1) setPhase("done");
        else setPhase("intro");
      } catch (e) {
        if (!cancelled) {
          setError((e as Error).message);
          setPhase("error");
        }
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api]);

  // ---- clock ----
  useEffect(() => {
    if (phase !== "playing") return;
    const t = setInterval(() => setNow(Date.now()), 100);
    return () => clearInterval(t);
  }, [phase]);

  const startPrompt = useCallback(
    async (idx: number, rs: PromptResult[]) => {
      setBusy(true);
      setMiss(null);
      setGuess("");
      try {
        const r = await api("start", { idx });
        if (r.status === "done") {
          const merged = [...rs.filter((x) => x.idx !== r.result.idx), r.result];
          setResults(merged);
          setLast(r.result);
          setPhase("reveal");
          return;
        }
        const act = { idx, text: r.text as string, deadline: Date.now() + (r.remainingMs as number) };
        setActive(act);
        setNow(Date.now());
        finishing.current = false;
        saveLocal(rs, { idx, text: act.text, startedAt: Date.now() - (PROMPT_SECONDS * 1000 - r.remainingMs) }, meta.day);
        setPhase("playing");
      } catch (e) {
        setError((e as Error).message);
        setPhase("error");
      } finally {
        setBusy(false);
      }
    },
    [api, saveLocal, meta.day],
  );

  const conclude = useCallback(
    (result: PromptResult) => {
      setResults((prev) => {
        const merged = [...prev.filter((x) => x.idx !== result.idx), result].sort((a, b) => a.idx - b.idx);
        saveLocal(merged, null, meta.day);
        return merged;
      });
      recordBest(result);
      setLast(result);
      setActive(null);
      setPhase("reveal");
    },
    [saveLocal, recordBest, meta.day],
  );

  const timeUp = useCallback(async () => {
    if (!active || finishing.current) return;
    finishing.current = true;
    try {
      const r = await api("timeout", { idx: active.idx });
      conclude(r.result);
    } catch (e) {
      setError((e as Error).message);
      setPhase("error");
    }
  }, [active, api, conclude]);

  const remaining = active ? Math.max(0, active.deadline - now) : 0;
  useEffect(() => {
    if (phase === "playing" && active && remaining <= 0) void timeUp();
  }, [phase, active, remaining, timeUp]);

  useEffect(() => {
    if (phase === "playing") inputRef.current?.focus();
  }, [phase, active?.idx]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const g = guess.trim();
    if (!g || !active || busy || finishing.current) return;
    setBusy(true);
    try {
      const r = await api("guess", { idx: active.idx, guess: g });
      if (r.status === "miss") {
        setMiss(g);
        setGuess("");
      } else {
        finishing.current = true;
        conclude(r.result);
      }
    } catch (err) {
      setError((err as Error).message);
      setPhase("error");
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  function next() {
    const n = nextIdx(results);
    if (n === -1) setPhase("done");
    else void startPrompt(n, results);
  }

  function begin() {
    if (mode === "pack") {
      setResults([]);
      void startPrompt(0, []);
    } else {
      const n = nextIdx(results);
      if (n === -1) setPhase("done");
      else void startPrompt(n, results);
    }
  }

  // ---- render ----
  const hud = (
    <div className="hud">
      <div className="hud-cell">
        <span className="label">Score</span>
        <div className="v">{score}<span className="muted" style={{ fontSize: 14 }}> / {MAX_SCORE}</span></div>
      </div>
      <div className="revs" aria-label="Progress">
        {Array.from({ length: PROMPTS_PER_ROUND }, (_, i) => {
          const r = results.find((x) => x.idx === i);
          const cur = active?.idx === i || (phase === "reveal" && last?.idx === i);
          return (
            <div
              key={i}
              className={`rev ${r ? "done" : ""} ${cur && !r ? "current" : ""}`}
              style={r ? { background: tierInfo(r.points).color } : undefined}
              title={r ? `${REV[i]}: ${r.points} pts` : `Prompt ${REV[i]}`}
            >
              {REV[i]}
            </div>
          );
        })}
      </div>
      <div className="hud-cell right">
        <span className="label">Tolerance</span>
        <div className="v">{formatTolerance(score)}</div>
      </div>
    </div>
  );

  if (phase === "loading") {
    return <div className="game center muted" style={{ paddingTop: 80 }}>unrolling the drawing…</div>;
  }

  if (phase === "error") {
    return (
      <div className="game center" style={{ paddingTop: 60 }}>
        <p className="display" style={{ fontSize: 28, color: "var(--red)" }}>DRAWING REJECTED</p>
        <p className="muted">{error}</p>
        <button className="btn" onClick={() => location.reload()}>RELOAD</button>
      </div>
    );
  }

  if (phase === "intro") {
    const bestScore = best.reduce((s, r) => s + r.points, 0);
    const resuming = mode === "daily" && results.length > 0;
    return (
      <div className="game intro">
        <p className="label kicker">{props.kicker}</p>
        <h1>{props.title}</h1>
        <p className="tagline">{props.subtitle}</p>
        <p className="rules">7 prompts · 25 seconds each · rarer answers hold tighter tolerance</p>
        <Drawing score={mode === "pack" ? bestScore : score} />
        <div className="cta">
          <button className="btn" onClick={begin} disabled={busy}>
            {resuming ? "▸ CONTINUE DRAWING" : mode === "pack" ? "▸ START CHAPTER" : "▸ START DRAFTING"}
          </button>
          <button className="btn ghost" onClick={() => window.dispatchEvent(new Event("mec:howto"))}>HOW TO PLAY</button>
        </div>
        {mode === "pack" && best.length > 0 && (
          <p className="muted">Best on this chapter: {bestScore} / {MAX_SCORE} ({best.length}/7 prompts)</p>
        )}
        <TitleBlock meta={meta} mode={mode} chapter={chapter} />
      </div>
    );
  }

  if (phase === "done") {
    return (
      <div className="game">
        <Summary
          results={results}
          mode={mode}
          sheet={meta.sheet}
          signedIn={meta.signedIn}
          hasUsername={!!meta.username}
          packTitle={mode === "pack" ? props.kicker : undefined}
          onReplay={mode === "pack" ? () => { setResults([]); setPhase("intro"); } : undefined}
        />
      </div>
    );
  }

  if (phase === "reveal" && last) {
    const info = tierInfo(last.points);
    const isLast = nextIdx(results) === -1;
    return (
      <div className="game">
        {hud}
        <div className="panel reveal" aria-live="polite">
          <p className="label">Prompt {REV[last.idx]} · {last.prompt}</p>
          <div className="stamp" style={{ color: info.color }}>{info.name}</div>
          {last.answer ? <p className="quote">“{last.answer}”</p> : <p className="quote muted">no answer</p>}
          <p className="pts">+{last.points} PTS · tolerance now {formatTolerance(score)} mm</p>
          <p className="flavor">{info.line}</p>
          <p className="gem-note">
            {last.points === 100 ? "You found the mec-rillion." : "The mec-rillion is still out there."}
            <br />
            <span style={{ fontSize: 12 }}>{last.accepted} answers were in spec for this one.</span>
          </p>
          <button className="btn" onClick={next} disabled={busy} autoFocus>
            {isLast ? "▸ ISSUE DRAWING" : "▸ NEXT PROMPT"}
          </button>
        </div>
      </div>
    );
  }

  // playing
  const secs = Math.ceil(remaining / 1000);
  const frac = Math.min(1, remaining / (PROMPT_SECONDS * 1000));
  return (
    <div className="game">
      {hud}
      <div className="panel prompt-card">
        <span className="label prompt-num">Prompt {active ? REV[active.idx] : ""} of G</span>
        <h2 className="prompt-text">{active?.text}</h2>
        <form onSubmit={submit} className="answer-row">
          <label htmlFor="guess" className="sr-only">Your answer</label>
          <input
            id="guess"
            ref={inputRef}
            className="answer-input"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="type one thing…"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
            maxLength={80}
            enterKeyHint="send"
          />
          <button className="btn" type="submit" disabled={busy || !guess.trim()}>DRAW</button>
        </form>
        <div className="miss" aria-live="assertive">
          {miss && (<><span className="x">✕</span>“{miss}”: not in spec. try again.</>)}
        </div>
        <div className={`timer ${secs <= 5 ? "low" : ""}`}>
          <div className="timer-track">
            <span className="timer-ext" style={{ left: 0 }} />
            <span className="timer-line" style={{ width: `${frac * 100}%` }} />
            <span className="timer-ext" style={{ left: `${frac * 100}%` }} />
          </div>
          <div className="timer-text">{secs} s</div>
        </div>
      </div>
      <p className="center muted" style={{ fontSize: 13, marginTop: 14 }}>
        Rank so far: <span className="hand" style={{ fontSize: 18 }}>{rankFor(score)}</span>
      </p>
    </div>
  );
}

function TitleBlock({ meta, mode, chapter }: { meta: { signedIn: boolean; username: string | null; day: string; sheet: number }; mode: string; chapter?: number }) {
  return (
    <div className="titleblock" style={{ marginTop: 28, textAlign: "left" }}>
      <div className="wide"><span className="label">Title</span><span className="v">MEC-RILLION</span></div>
      <div><span className="label">{mode === "daily" ? "Sheet" : "Chapter"}</span><span className="v">#{mode === "daily" ? meta.sheet : chapter}</span></div>
      <div><span className="label">Scale</span><span className="v">1:1</span></div>
      <div className="wide"><span className="label">Drawn by</span><span className="v">{meta.username ?? (meta.signedIn ? "unnamed engineer" : "guest")}</span></div>
      <div><span className="label">Date</span><span className="v">{meta.day}</span></div>
      <div><span className="label">Units</span><span className="v">mm</span></div>
      {!meta.signedIn && (
        <div className="full">
          <span className="v muted" style={{ fontSize: 12 }}>
            Playing as a guest: progress stays on this device. <Link href="/account">Sign in</Link> to get on the leaderboard.
          </span>
        </div>
      )}
    </div>
  );
}
