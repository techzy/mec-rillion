"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { HowTo } from "./HowTo";

const LINKS = [
  { href: "/", label: "Daily drawing" },
  { href: "/packs", label: "Themed packs" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/account", label: "My account" },
];

export function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [howto, setHowto] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const show = () => setHowto(true);
    window.addEventListener("mec:howto", show);
    return () => window.removeEventListener("mec:howto", show);
  }, []);

  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <>
      <header className="topbar">
        <Link href="/" className="brand" aria-label="MEC-RILLION home">
          <Logo />
          MEC-RILLION
        </Link>
        <nav className="topnav" aria-label="Main">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
          <a href="#" onClick={(e) => { e.preventDefault(); setHowto(true); }}>How to play</a>
        </nav>
        <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </button>
      </header>
      {open && (
        <>
          <div className="drawer-backdrop" onClick={() => setOpen(false)} />
          <div className="drawer" role="dialog" aria-label="Menu">
            <button className="menu-btn close" aria-label="Close menu" onClick={() => setOpen(false)}>✕</button>
            <h2>OPEN A DRAWING</h2>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined}>
                {l.label}
              </Link>
            ))}
            <a href="#" onClick={(e) => { e.preventDefault(); setOpen(false); setHowto(true); }}>How to play</a>
          </div>
        </>
      )}
      {howto && <HowTo onClose={() => setHowto(false)} />}
    </>
  );
}
