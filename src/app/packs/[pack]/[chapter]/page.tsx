import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PACKS, packById } from "@/data/catalog";
import { Game } from "@/components/Game";

export function generateStaticParams() {
  return PACKS.flatMap((p) => p.chapters.map((_, i) => ({ pack: p.id, chapter: String(i + 1) })));
}

export async function generateMetadata({ params }: { params: Promise<{ pack: string; chapter: string }> }): Promise<Metadata> {
  const { pack, chapter } = await params;
  const p = packById(pack);
  return { title: p ? `${p.title} · Chapter ${chapter}` : "Pack" };
}

export default async function ChapterPage({ params }: { params: Promise<{ pack: string; chapter: string }> }) {
  const { pack: id, chapter: ch } = await params;
  const pack = packById(id);
  const chapter = Number(ch);
  if (!pack || !Number.isInteger(chapter) || chapter < 1 || chapter > pack.chapters.length) notFound();
  return (
    <Game
      key={`${pack.id}-${chapter}`}
      mode="pack"
      pack={pack.id}
      chapter={chapter}
      kicker={`${pack.title} · Chapter ${chapter}`}
      title={pack.title.toUpperCase()}
      subtitle={pack.tagline}
    />
  );
}
