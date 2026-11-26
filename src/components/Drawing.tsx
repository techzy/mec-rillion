import { formatTolerance, toleranceMm } from "@/lib/game/tiers";

/**
 * A shaft drawn in elevation with its diameter callout. As the score rises the
 * tolerance tightens and the limit band in DETAIL A closes up.
 */
export function Drawing({ score, label = "Ø25" }: { score: number; label?: string }) {
  const tol = toleranceMm(score);
  // log scale: ±1 mm → 52 px band, ±0.001 mm → 2 px band
  const band = 2 + 50 * ((Math.log10(tol) + 3) / 3);
  const cy = 88;
  return (
    <svg className="drawing" viewBox="0 0 620 190" role="img" aria-label={`Shaft drawn to ${label} ${formatTolerance(score)} millimetres`}>
      <g fill="none" stroke="var(--line)" strokeWidth="1.6" strokeLinejoin="round">
        {/* shaft: two steps with chamfers */}
        <path d="M40 66 L46 60 L180 60 L180 52 L330 52 L330 60 L380 60 L386 66 L386 110 L380 116 L330 116 L330 124 L180 124 L180 116 L46 116 L40 110 Z" />
        <line x1="180" y1="60" x2="180" y2="116" />
        <line x1="330" y1="60" x2="330" y2="116" />
        {/* keyway */}
        <rect x="215" y="52" width="80" height="10" rx="5" strokeWidth="1.2" />
      </g>
      {/* centre line */}
      <line x1="24" y1={cy} x2="402" y2={cy} stroke="var(--ink-faint)" strokeWidth="1" strokeDasharray="18 4 3 4" />
      {/* diameter dimension */}
      <g stroke="var(--ink)" strokeWidth="1" fill="var(--ink)">
        <line x1="255" y1="52" x2="255" y2="20" stroke="var(--ink-faint)" />
        <line x1="255" y1="124" x2="255" y2="160" stroke="var(--ink-faint)" />
        <line x1="255" y1="34" x2="255" y2="52" />
        <path d="M255 52 l-4 -10 h8 z" />
        <line x1="255" y1="124" x2="255" y2="146" />
        <path d="M255 124 l-4 10 h8 z" />
      </g>
      <text x="262" y="30" fill="var(--ink)" fontSize="15" fontFamily="var(--font-body)">
        {label} <tspan fill="var(--hi)">{formatTolerance(score)}</tspan>
      </text>
      {/* detail circle */}
      <circle cx="330" cy="56" r="14" fill="none" stroke="var(--hi)" strokeWidth="1.2" strokeDasharray="3 3" />
      <path d="M342 48 Q 400 20 440 40" fill="none" stroke="var(--hi)" strokeWidth="1" />
      {/* DETAIL A: limit band */}
      <g transform="translate(440 18)">
        <rect x="0" y="0" width="160" height="140" fill="rgba(7,43,80,0.6)" stroke="var(--line)" strokeWidth="1.2" />
        <rect x="14" y={70 - band / 2} width="132" height={band} fill="rgba(255,226,122,0.18)" />
        <line x1="14" y1={70 - band / 2} x2="146" y2={70 - band / 2} stroke="var(--hi)" strokeWidth="1.4" />
        <line x1="14" y1={70 + band / 2} x2="146" y2={70 + band / 2} stroke="var(--hi)" strokeWidth="1.4" />
        <line x1="14" y1="70" x2="146" y2="70" stroke="var(--ink-faint)" strokeDasharray="6 3" />
        <text x="80" y="128" fill="var(--ink-dim)" fontSize="11" textAnchor="middle" fontFamily="var(--font-body)" letterSpacing="2">DETAIL A</text>
        <text x="80" y="18" fill="var(--ink-dim)" fontSize="11" textAnchor="middle" fontFamily="var(--font-body)">±{tol.toFixed(3)} mm</text>
      </g>
    </svg>
  );
}
