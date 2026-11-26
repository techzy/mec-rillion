import { ALL_PROMPTS, PACKS } from "../src/data/catalog";
import { dailyPromptIds } from "../src/lib/game/daily";
import { matchGuess } from "../src/lib/game/match";

let problems = 0;
const ids = new Set<string>();
for (const pk of PACKS) {
  for (const [ci, ch] of pk.chapters.entries()) {
    if (ch.length !== 7) { console.log(`${pk.id} chapter ${ci + 1} has ${ch.length} prompts`); problems++; }
  }
}
for (const pr of ALL_PROMPTS) {
  if (ids.has(pr.id)) { console.log("dup id", pr.id); problems++; }
  ids.add(pr.id);
  const seen = new Map<string, string>();
  for (const a of pr.answers) for (const k of a.keys) {
    if (seen.has(k) && seen.get(k) !== a.name) { console.log(`${pr.id}: key "${k}" in both "${seen.get(k)}" and "${a.name}"`); problems++; }
    seen.set(k, a.name);
  }
  // every canonical name must resolve to itself
  for (const a of pr.answers) {
    const m = matchGuess(pr, a.name);
    if (m?.name !== a.name) { console.log(`${pr.id}: "${a.name}" resolves to "${m?.name}"`); problems++; }
  }
  for (const junk of ["qwertyuiop", "zzzz", "asdfghjkl", "xyzzy", "banana bread"]) {
    const m = matchGuess(pr, junk);
    if (m) { console.log(`${pr.id}: junk "${junk}" matched "${m.name}"`); problems++; }
  }
  if (!pr.answers.some((a) => a.tier === 100)) { console.log(`${pr.id}: no 100-tier gem`); problems++; }
}
console.log(`${PACKS.length} packs, ${ALL_PROMPTS.length} prompts, ${ALL_PROMPTS.reduce((n, p) => n + p.answers.length, 0)} answers`);
const days = new Set<string>();
for (let d = 0; d < 10; d++) {
  const day = new Date(Date.UTC(2026, 10, 26 + d)).toISOString().slice(0, 10);
  const got = dailyPromptIds(day);
  got.forEach((g) => days.add(g));
  if (d < 2) console.log(day, got.join(", "));
}
console.log("unique prompts over first 10 days:", days.size);
console.log(problems ? `${problems} problems` : "OK");
process.exit(problems ? 1 : 0);
