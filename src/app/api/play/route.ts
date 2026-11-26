import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { matchGuess } from "@/lib/game/match";
import { ANSWER_WINDOW_MS, buildResult, isExpired, promptAt, remainingMs, resolveRound, writeSecret, type ResolvedRound } from "@/lib/game/server";
import type { PromptResult } from "@/lib/game/types";
import { promptById } from "@/data/catalog";
import { PROMPTS_PER_ROUND } from "@/lib/game/tiers";

export const dynamic = "force-dynamic";

type Body = {
  action?: "state" | "start" | "guess" | "timeout";
  mode?: "daily" | "pack";
  pack?: string;
  chapter?: number;
  idx?: number;
  guess?: string;
};

interface DailyRow {
  idx: number;
  prompt_id: string;
  started_at: string;
  answer: string | null;
  points: number | null;
}

function bad(msg: string, status = 400) {
  return NextResponse.json({ error: msg }, { status });
}

function rowResult(row: DailyRow): PromptResult | null {
  const prompt = promptById(row.prompt_id);
  if (!prompt) return null;
  return buildResult(prompt, row.idx, row.answer, row.points ?? 0);
}

export async function POST(req: NextRequest) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return bad("invalid json");
  }
  if (body.mode !== "daily" && body.mode !== "pack") return bad("bad mode");
  const round = resolveRound({ mode: body.mode, pack: body.pack, chapter: body.chapter });
  if (!round) return bad("unknown pack or chapter", 404);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  switch (body.action) {
    case "state":
      return state(round, supabase, user?.id ?? null);
    case "start":
      return start(round, body.idx, supabase, !!user);
    case "guess":
      return guess(round, body.idx, body.guess, supabase, !!user);
    case "timeout":
      return finish(round, body.idx, null, 0, supabase, !!user);
    default:
      return bad("bad action");
  }
}

type Sb = Awaited<ReturnType<typeof createClient>>;

async function state(round: ResolvedRound, supabase: Sb, userId: string | null) {
  const base = {
    signedIn: !!userId,
    username: null as string | null,
    day: round.day,
    sheet: round.sheet,
    total: PROMPTS_PER_ROUND,
    results: [] as PromptResult[],
    active: null as null | { idx: number; text: string; remainingMs: number },
  };
  if (!userId) return NextResponse.json(base);

  const { data: profile } = await supabase.from("profiles").select("username").eq("id", userId).maybeSingle();
  base.username = profile?.username ?? null;

  if (round.mode === "daily") {
    const { data } = await supabase
      .from("daily_results")
      .select("idx, prompt_id, started_at, answer, points")
      .eq("user_id", userId)
      .eq("day", round.day)
      .order("idx");
    for (const row of (data ?? []) as DailyRow[]) {
      if (row.points === null && !isExpired(row.started_at)) {
        const prompt = promptById(row.prompt_id);
        if (prompt) base.active = { idx: row.idx, text: prompt.text, remainingMs: remainingMs(row.started_at) };
        continue;
      }
      const r = rowResult(row);
      if (r) base.results.push(r);
    }
  } else {
    const { data } = await supabase
      .from("pack_results")
      .select("idx, prompt_id, answer, points")
      .eq("user_id", userId)
      .eq("pack_id", round.pack!)
      .eq("chapter", round.chapter!)
      .order("idx");
    for (const row of data ?? []) {
      const prompt = promptById(row.prompt_id);
      if (prompt && round.promptIds[row.idx] === row.prompt_id) base.results.push(buildResult(prompt, row.idx, row.answer, row.points));
    }
  }
  return NextResponse.json(base);
}

async function start(round: ResolvedRound, idx: unknown, supabase: Sb, signedIn: boolean) {
  const prompt = promptAt(round, idx);
  if (!prompt) return bad("bad prompt index");
  const i = Number(idx);
  if (round.mode === "daily" && signedIn) {
    const { data, error } = await supabase.rpc("daily_start", { p_secret: writeSecret(), p_day: round.day, p_idx: i, p_prompt: prompt.id });
    if (error || !data) return bad("could not start prompt", 500);
    const row = data as DailyRow;
    if (row.points !== null) return NextResponse.json({ status: "done", result: rowResult(row) });
    return NextResponse.json({ status: "ok", idx: i, text: prompt.text, remainingMs: remainingMs(row.started_at) });
  }
  return NextResponse.json({ status: "ok", idx: i, text: prompt.text, remainingMs: ANSWER_WINDOW_MS });
}

async function guess(round: ResolvedRound, idx: unknown, raw: unknown, supabase: Sb, signedIn: boolean) {
  const prompt = promptAt(round, idx);
  if (!prompt) return bad("bad prompt index");
  if (typeof raw !== "string" || !raw.trim() || raw.length > 80) return bad("bad guess");
  const hit = matchGuess(prompt, raw);
  if (!hit) return NextResponse.json({ status: "miss" });
  return finish(round, idx, hit.name, hit.tier, supabase, signedIn);
}

async function finish(round: ResolvedRound, idx: unknown, answer: string | null, points: number, supabase: Sb, signedIn: boolean) {
  const prompt = promptAt(round, idx);
  if (!prompt) return bad("bad prompt index");
  const i = Number(idx);

  if (signedIn && round.mode === "daily") {
    const { data, error } = await supabase.rpc("daily_answer", { p_secret: writeSecret(), p_day: round.day, p_idx: i, p_answer: answer, p_points: points });
    if (error || !data || (data as DailyRow).idx === null) return bad("prompt was not started", 409);
    const row = data as DailyRow;
    const result = rowResult(row);
    return NextResponse.json({ status: row.answer ? "hit" : "timeout", result });
  }
  if (signedIn && round.mode === "pack") {
    const { error } = await supabase.rpc("pack_record", {
      p_secret: writeSecret(),
      p_pack: round.pack,
      p_chapter: round.chapter,
      p_idx: i,
      p_prompt: prompt.id,
      p_answer: answer,
      p_points: points,
    });
    if (error) return bad("could not save", 500);
  }
  return NextResponse.json({ status: answer ? "hit" : "timeout", result: buildResult(prompt, i, answer, points) });
}
