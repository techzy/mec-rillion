import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PACKS, packById } from "@/data/catalog";
import { ChapterBests } from "@/components/ChapterBests";

export function generateStaticParams() {
  return PACKS.map((p) => ({ pack: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ pack: string }> }): Promise<Metadata> {
  const { pack } = await params;
  return { title: packById(pack)?.title ?? "Pack" };
}

export default async function PackPage({ params }: { params: Promise<{ pack: string }> }) {
  const { pack: id } = await params;
  const pack = packById(id);
  if (!pack) notFound();
  return (
    <div>
      <p className="label"><Link href="/packs">Themed packs</Link> / {pack.stamp}</p>
      <h1 className="page-title">{pack.title.toUpperCase()}</h1>
      <p className="page-sub">{pack.tagline}</p>
      <div className="chapter-list">
        {pack.chapters.map((ch, i) => (
          <Link key={i} href={`/packs/${pack.id}/${i + 1}`} className="panel chapter">
            <span className="num">{i + 1}</span>
            <span>
              <span className="display" style={{ fontSize: 20 }}>CHAPTER {i + 1}</span>
              <span className="topics" style={{ display: "block" }}>{ch.map((p) => p.text.replace(/^Name (a|an) /, "")).join(" · ")}</span>
            </span>
            <ChapterBests pack={pack.id} chapter={i + 1} />
          </Link>
        ))}
      </div>
    </div>
  );
}
