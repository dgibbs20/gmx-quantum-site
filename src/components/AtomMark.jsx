export default function AtomMark({ size = 32, glow = false, idSuffix = "" }) {
  const gradId = `atomGold${idSuffix}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={glow ? { filter: `drop-shadow(0 0 14px color-mix(in srgb, var(--color-gold) 55%, transparent))` } : undefined}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#f2d99b" />
          <stop offset="55%" stopColor="#c9a44c" />
          <stop offset="100%" stopColor="#93752f" />
        </linearGradient>
      </defs>
      <g stroke={`url(#${gradId})`} strokeWidth="4" strokeLinecap="round">
        <ellipse cx="50" cy="50" rx="46" ry="18" />
        <ellipse cx="50" cy="50" rx="46" ry="18" transform="rotate(60 50 50)" />
        <ellipse cx="50" cy="50" rx="46" ry="18" transform="rotate(120 50 50)" />
      </g>
      <circle cx="50" cy="50" r="8" fill={`url(#${gradId})`} />
    </svg>
  );
}
