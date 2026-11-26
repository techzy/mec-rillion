import type { Answer, Prompt } from "./types";

/** Lowercase, strip accents/punctuation, collapse spaces, drop a leading article. */
export function normalize(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/^(a|an|the) /, "")
    .replace(/\s+/g, " ");
}

function stripWords(s: string, strip: string[]): string {
  if (!strip.length) return s;
  const kept = s.split(" ").filter((w) => !strip.includes(w));
  return kept.length ? kept.join(" ") : s;
}

function singular(w: string): string {
  if (w.length > 4 && w.endsWith("ies")) return w.slice(0, -3) + "y";
  if (w.length > 4 && /(ches|shes|sses|xes)$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && w.endsWith("s") && !w.endsWith("ss") && !w.endsWith("us") && !w.endsWith("is")) return w.slice(0, -1);
  return w;
}

/** Canonical comparison key: stripped, singularized, spaces removed. */
export function matchKey(s: string, strip: string[] = []): string {
  const n = stripWords(normalize(s), strip);
  return n.split(" ").map(singular).join("");
}

function levenshtein(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      cur.push(v);
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

function allowedTypos(len: number): number {
  if (len >= 9) return 2;
  if (len >= 5) return 1;
  return 0;
}

/** Returns the matched answer, or null if the guess is not on the list. */
export function matchGuess(prompt: Prompt, guess: string): Answer | null {
  const key = matchKey(guess, prompt.strip);
  if (!key) return null;
  for (const a of prompt.answers) if (a.keys.includes(key)) return a;

  const budget = allowedTypos(key.length);
  if (budget === 0) return null;
  let best: Answer | null = null;
  let bestDist = budget + 1;
  for (const a of prompt.answers) {
    for (const k of a.keys) {
      const max = Math.min(budget, allowedTypos(k.length));
      if (max === 0) continue;
      const d = levenshtein(key, k, max);
      if (d <= max && d < bestDist) {
        bestDist = d;
        best = a;
      }
    }
  }
  return best;
}
