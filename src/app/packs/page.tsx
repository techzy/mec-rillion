import Link from "next/link";
import type { Metadata } from "next";
import { PACKS } from "@/data/catalog";

export const metadata: Metadata = { title: "Themed packs" };

export default function PacksPage() {
  return (
    <div>
      <h1 className="page-title">THEMED PACKS</h1>
      <p className="page-sub">Pick a discipline. Each chapter is 7 prompts, 25 seconds each. Replay as often as you like; your best run counts.</p>
      <div className="pack-grid">
        {PACKS.map((pk) => (
          <Link key={pk.id} href={`/packs/${pk.id}`} className="panel pack-card">
            <span className="stamp-sm">{pk.stamp}</span>
            <h3>{pk.title}</h3>
            <p>{pk.tagline}</p>
            <div className="meta">
              <span>{pk.chapters.length} CHAPTERS</span>
              <span>{pk.chapters.flat().length} PROMPTS ▸</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
