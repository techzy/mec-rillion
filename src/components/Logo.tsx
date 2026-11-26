/** A small gear-in-a-dimension-box mark. */
export function Logo({ size = 28 }: { size?: number }) {
  const teeth = Array.from({ length: 10 }, (_, i) => i * 36);
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="16" cy="16" r="8" />
        <circle cx="16" cy="16" r="3" />
        {teeth.map((a) => (
          <rect key={a} x="14.6" y="4.2" width="2.8" height="4" transform={`rotate(${a} 16 16)`} />
        ))}
      </g>
    </svg>
  );
}
