export const PROMPT_SECONDS = 25;
export const PROMPTS_PER_ROUND = 7;
export const MAX_SCORE = PROMPTS_PER_ROUND * 100;

export interface TierInfo {
  name: string;
  line: string;
  color: string;
  emoji: string;
}

export const TIERS: Record<number, TierInfo> = {
  0: { name: "NO PART", line: "Out of time. The drawing stays blank.", color: "var(--miss)", emoji: "⬛" },
  10: { name: "OFF THE SHELF", line: "The answer everyone blurts out.", color: "var(--t10)", emoji: "⬜" },
  15: { name: "TEXTBOOK", line: "Felt clever. So did the whole class.", color: "var(--t15)", emoji: "🟫" },
  30: { name: "SHOP FLOOR", line: "Solid. Someone has actually built one.", color: "var(--t30)", emoji: "🟦" },
  60: { name: "PRECISION", line: "Now we're holding tolerance.", color: "var(--t60)", emoji: "🟩" },
  85: { name: "DEEP SPEC", line: "Straight out of an appendix table.", color: "var(--t85)", emoji: "🟨" },
  100: { name: "ONE IN A MEC-RILLION", line: "The gem. Nobody else drew this.", color: "var(--t100)", emoji: "⚙️" },
};

export function tierInfo(points: number): TierInfo {
  return TIERS[points] ?? TIERS[0];
}

/** Score 0 → ±1.000 mm, every point tightens it, 700 → ±0.001 mm. */
export function toleranceMm(score: number): number {
  const s = Math.max(0, Math.min(MAX_SCORE, score));
  return Math.pow(10, (-3 * s) / MAX_SCORE);
}

export function formatTolerance(score: number): string {
  return `±${toleranceMm(score).toFixed(3)}`;
}

const RANKS: [number, string][] = [
  [700, "GAUGE BLOCK"],
  [600, "METROLOGY LAB"],
  [500, "PRECISION GRIND"],
  [400, "TOOLROOM"],
  [300, "SHOP FLOOR"],
  [200, "HACKSAW SPECIAL"],
  [100, "ROUGH CUT"],
  [1, "FLAME CUT"],
  [0, "SCRAP BIN"],
];

export function rankFor(score: number): string {
  for (const [min, name] of RANKS) if (score >= min) return name;
  return "SCRAP BIN";
}
