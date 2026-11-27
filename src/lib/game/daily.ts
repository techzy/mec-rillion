import { EASY_PROMPT_IDS, NICHE_PROMPT_IDS } from "@/data/catalog";
import { PROMPTS_PER_ROUND } from "./tiers";

export const TIME_ZONE = "America/Toronto";
/** Sheet #1 is the launch day. */
export const LAUNCH_DAY = "2026-11-26";
/** From this day on, every sheet mixes in easy prompts. Earlier sheets keep their original prompts. */
export const MIXED_FROM_DAY = "2026-11-28";
/** How many easy prompts each mixed sheet gets, and where they sit (0-based). */
const EASY_SLOTS = [0, 2, 5];

/** Today's date (YYYY-MM-DD) in the game's time zone. */
export function todayKey(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

function daysBetween(from: string, to: string): number {
  return Math.round((Date.parse(to + "T00:00:00Z") - Date.parse(from + "T00:00:00Z")) / 86_400_000);
}

export function sheetNumber(day: string): number {
  return daysBetween(LAUNCH_DAY, day) + 1;
}

function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Takes `count` ids for day `idx` from a pool, walking a fresh shuffle of the
 * whole pool each cycle so nothing repeats until the pool has been used up.
 */
function draw(pool: string[], count: number, idx: number, salt: number): string[] {
  const ids = [...pool].sort();
  const perCycle = Math.floor(ids.length / count);
  const cycle = Math.floor(idx / perCycle);
  const slot = idx % perCycle;
  const rand = mulberry32(salt + cycle * 7919);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids.slice(slot * count, slot * count + count);
}

export function dailyPromptIds(day: string): string[] {
  const mixedIdx = daysBetween(MIXED_FROM_DAY, day);
  if (mixedIdx < 0) {
    // Original rotation (niche prompts only), kept so launch-week sheets never change.
    return draw(NICHE_PROMPT_IDS, PROMPTS_PER_ROUND, Math.max(0, daysBetween(LAUNCH_DAY, day)), 0x6d6563);
  }
  const easy = draw(EASY_PROMPT_IDS, EASY_SLOTS.length, mixedIdx, 0x65617379);
  const niche = draw(NICHE_PROMPT_IDS, PROMPTS_PER_ROUND - EASY_SLOTS.length, mixedIdx, 0x6e696368);
  const out: string[] = [];
  for (let i = 0; i < PROMPTS_PER_ROUND; i++) out.push(EASY_SLOTS.includes(i) ? easy.shift()! : niche.shift()!);
  return out;
}
