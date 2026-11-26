import "server-only";
import { packById, promptById } from "@/data/catalog";
import type { Prompt, PromptResult } from "./types";
import { dailyPromptIds, sheetNumber, todayKey } from "./daily";
import { PROMPTS_PER_ROUND, PROMPT_SECONDS } from "./tiers";

export const ANSWER_WINDOW_MS = PROMPT_SECONDS * 1000;
/** Server-side grace for network lag, must match the 28 s window in the database functions. */
const SERVER_WINDOW_MS = 28_000;

export interface RoundRef {
  mode: "daily" | "pack";
  pack?: string;
  chapter?: number;
}

export interface ResolvedRound {
  mode: "daily" | "pack";
  day: string;
  sheet: number;
  pack?: string;
  chapter?: number;
  promptIds: string[];
}

export function resolveRound(ref: RoundRef): ResolvedRound | null {
  const day = todayKey();
  if (ref.mode === "daily") {
    return { mode: "daily", day, sheet: sheetNumber(day), promptIds: dailyPromptIds(day) };
  }
  const pack = ref.pack ? packById(ref.pack) : undefined;
  const chapter = Number(ref.chapter);
  if (!pack || !Number.isInteger(chapter) || chapter < 1 || chapter > pack.chapters.length) return null;
  return { mode: "pack", day, sheet: sheetNumber(day), pack: pack.id, chapter, promptIds: pack.chapters[chapter - 1].map((p) => p.id) };
}

export function promptAt(round: ResolvedRound, idx: unknown): Prompt | null {
  const i = Number(idx);
  if (!Number.isInteger(i) || i < 0 || i >= PROMPTS_PER_ROUND) return null;
  return promptById(round.promptIds[i]) ?? null;
}

export function buildResult(prompt: Prompt, idx: number, answerName: string | null, points: number): PromptResult {
  return {
    idx,
    prompt: prompt.text,
    answer: answerName,
    points,
    accepted: prompt.answers.length,
  };
}

export function remainingMs(startedAt: string): number {
  return Math.max(0, ANSWER_WINDOW_MS - (Date.now() - Date.parse(startedAt)));
}

export function isExpired(startedAt: string): boolean {
  return Date.now() - Date.parse(startedAt) > SERVER_WINDOW_MS;
}

export function writeSecret(): string {
  const s = process.env.GAME_WRITE_SECRET;
  if (!s) throw new Error("GAME_WRITE_SECRET is not set");
  return s;
}
