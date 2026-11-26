import { ALL_PROMPTS } from "@/data/catalog";
import { PROMPTS_PER_ROUND } from "./tiers";

export const TIME_ZONE = "America/Toronto";
/** Sheet #1 is the launch day. */
export const LAUNCH_DAY = "2026-11-26";

/** Today's date (YYYY-MM-DD) in the game's time zone. */
export function todayKey(now = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TIME_ZONE, year: "numeric", month: "2-digit", day: "2-digit" }).format(now);
}

function dayIndex(day: string): number {
  return Math.round((Date.parse(day + "T00:00:00Z") - Date.parse(LAUNCH_DAY + "T00:00:00Z")) / 86_400_000);
}

export function sheetNumber(day: string): number {
  return dayIndex(day) + 1;
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

/** Walks a fresh shuffle of every prompt per cycle, so nothing repeats until the whole bank has been used. */
export function dailyPromptIds(day: string): string[] {
  const ids = ALL_PROMPTS.map((p) => p.id).sort();
  const perCycle = Math.floor(ids.length / PROMPTS_PER_ROUND);
  const idx = Math.max(0, dayIndex(day));
  const cycle = Math.floor(idx / perCycle);
  const slot = idx % perCycle;
  const rand = mulberry32(0x6d6563 + cycle * 7919);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  return ids.slice(slot * PROMPTS_PER_ROUND, slot * PROMPTS_PER_ROUND + PROMPTS_PER_ROUND);
}

/** Milliseconds until the next sheet unlocks (midnight in the game's time zone). */
export function msUntilNextDay(now = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: TIME_ZONE, hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h23" }).formatToParts(now);
  const get = (t: string) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  const elapsed = (get("hour") * 3600 + get("minute") * 60 + get("second")) * 1000;
  return 86_400_000 - elapsed;
}
