import { matchKey } from "@/lib/game/match";
import { TIER_VALUES, type Prompt, type Tier } from "@/lib/game/types";

/**
 * Compact authoring format. One answer per line:
 *   <tier> <Canonical name> | alias | alias
 * Tiers: 10 off the shelf, 15 textbook, 30 shop floor, 60 precision, 85 deep spec, 100 the mec-rillion.
 */
export function p(id: string, text: string, body: string, strip: string[] = []): Prompt {
  const answers = body
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const m = line.match(/^(\d+)\s+(.+)$/);
      if (!m) throw new Error(`Bad answer line in ${id}: ${line}`);
      const tier = Number(m[1]) as Tier;
      if (!TIER_VALUES.includes(tier)) throw new Error(`Bad tier in ${id}: ${line}`);
      const names = m[2].split("|").map((s) => s.trim()).filter(Boolean);
      const keys = Array.from(new Set(names.map((n) => matchKey(n, strip)).filter(Boolean)));
      return { name: names[0], tier, keys };
    });
  return { id, text, answers, strip };
}
