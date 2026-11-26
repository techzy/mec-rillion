"use client";
import { useEffect, useState } from "react";

/** Shows the best score this device has on record for a chapter. */
export function ChapterBests({ pack, chapter }: { pack: string; chapter: number }) {
  const [best, setBest] = useState<number | null>(null);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(`mec:v1:pack:${pack}:${chapter}`);
      if (raw) setBest((JSON.parse(raw) as { points: number }[]).reduce((s, r) => s + r.points, 0));
    } catch {
      /* ignore */
    }
  }, [pack, chapter]);
  return (
    <span className="best">
      {best === null ? "PLAY ▸" : (<>BEST<b>{best}</b></>)}
    </span>
  );
}
