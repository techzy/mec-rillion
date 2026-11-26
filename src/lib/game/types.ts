export type Tier = 10 | 15 | 30 | 60 | 85 | 100;
export const TIER_VALUES: Tier[] = [10, 15, 30, 60, 85, 100];

export interface Answer {
  name: string;
  tier: Tier;
  /** Every accepted spelling, already normalized for matching. */
  keys: string[];
}

export interface Prompt {
  id: string;
  text: string;
  answers: Answer[];
  /** Words ignored on both sides when matching (e.g. "gear" in "spur gear"). */
  strip: string[];
}

export interface Pack {
  id: string;
  title: string;
  tagline: string;
  stamp: string;
  chapters: Prompt[][];
}

/** What the client learns about one finished prompt. */
export interface PromptResult {
  idx: number;
  prompt: string;
  answer: string | null;
  points: number;
  accepted: number;
}

export type Mode = "daily" | "pack";
