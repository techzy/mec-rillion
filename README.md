# MEC-RILLION

A daily mechanical-engineering word game: 7 prompts a day, 25 seconds each, and rarer answers score more. Live at https://mec-rillion.lifeofjeso.ca.

## Stack
- Next.js 16 (App Router) on Vercel
- Supabase: magic-link auth, Postgres for results and leaderboards

## Modes
- **Daily drawing** (`/`): the same 7 prompts for everyone, rotating at midnight America/Toronto. One attempt per day. From 2026-11-27 on, each sheet has 3 broad prompts from the First Year pack (slots A, C and F) and 4 niche ones.
- **Themed packs** (`/packs`): First Year (3 chapters of broad, easier prompts) plus 5 niche packs × 2 chapters × 7 prompts. You can replay, and your best score per prompt counts.

## Scoring
Every answer has a tier: 10 off the shelf, 15 textbook, 30 shop floor, 60 precision, 85 deep spec, 100 one in a mec-rillion. 700 points is ±0.001 mm.

## Editing prompts
Prompts live in `src/data/packs/*.ts` in a compact format, one answer per line:

```
<tier> <Canonical name> | alias | alias
```

The optional `strip` list holds words ignored on both sides when matching (e.g. `["gear"]`, so that "spur" matches "Spur gear"). Matching also forgives case, punctuation, plurals and small typos.

Run `npm run check-data` after editing. It catches duplicate aliases, answers that don't resolve to themselves, junk guesses that match, and prompts with no 100-point gem.

The daily rotation (`src/lib/game/daily.ts`) draws easy prompts from the First Year pack and niche prompts from everything else, walking a fresh shuffle of each pool per cycle, so adding prompts makes repeats rarer. Sheets from before 2026-11-27 are frozen; `check-data` fails if they change.

## Security model
Guesses are scored on the server (`src/app/api/play/route.ts`), and answer lists never reach the browser. Results are written through `SECURITY DEFINER` Postgres functions that require `GAME_WRITE_SECRET`, which only the server knows. Players can read only their own rows, and leaderboards are exposed through read-only functions.

## Env
See `.env.example`. `GAME_WRITE_SECRET` must equal `private.app_secret.secret` in the database.
