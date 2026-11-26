"use client";
import { TIERS } from "@/lib/game/tiers";

export function HowTo({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="howto-title" onClick={onClose}>
      <div className="modal panel" onClick={(e) => e.stopPropagation()}>
        <h2 id="howto-title">HOW TO PLAY</h2>
        <ol>
          <li>7 prompts a day. Same drawing for everyone.</li>
          <li>25 seconds to name one thing.</li>
          <li>Common answers come off the shelf. Rare answers hold tighter tolerance.</li>
          <li>The pick that feels clever? The whole class thought of it too.</li>
          <li>Every point tightens your tolerance. 700 points is ±0.001 mm.</li>
          <li>One drawing per day. No revisions.</li>
        </ol>
        <p className="label">Grades</p>
        <div className="tier-list">
          {[10, 15, 30, 60, 85, 100].map((t) => (
            <div key={t}>
              <span style={{ color: TIERS[t].color }}>{TIERS[t].name}</span>
              <span>{t} pts</span>
            </div>
          ))}
        </div>
        <p className="muted" style={{ fontSize: 13 }}>
          Wrong or unknown answers cost nothing; keep trying until the clock runs out. Typos and plurals are forgiven.
        </p>
        <button className="btn small" onClick={onClose}>GOT IT</button>
      </div>
    </div>
  );
}
