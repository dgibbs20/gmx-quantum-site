import { Link } from "react-router-dom";
import AtomMark from "./AtomMark";

const primary = [
  { label: "diAry", to: "/diary", top: 130 },
  { label: "Fuss Budget", to: "/fuss-budget", top: 250 },
  { label: "AetherCore", to: "/aethercore", top: 370 },
  { label: "Aitherium", to: "/aitherium", top: 490 },
];

const secondary = [
  { label: "Founder", to: "/founder", top: 70 },
  { label: "Contact", to: "/contact", top: 550 },
];

export default function CircuitDiagram() {
  return (
    <div className="relative hidden h-[600px] w-[700px] lg:block">
      <svg width="700" height="600" viewBox="0 0 700 600" fill="none" className="absolute inset-0">
        <defs>
          <linearGradient id="wireGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c9a44c" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#c9a44c" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        <g stroke="#ffffff0d" strokeWidth="1">
          <path d="M540 30 L540 90 L640 90" />
          <path d="M560 520 L560 460 L660 460 L660 560" />
          <circle cx="540" cy="30" r="2.5" fill="#ffffff1f" />
          <circle cx="660" cy="560" r="2.5" fill="#ffffff1f" />
        </g>

        <path d="M158 235 L220 235 L220 130 L480 130" stroke="url(#wireGrad)" strokeWidth="1.5" />
        <path d="M158 278 L245 278 L245 250 L480 250" stroke="url(#wireGrad)" strokeWidth="1.5" />
        <path d="M158 322 L245 322 L245 370 L480 370" stroke="url(#wireGrad)" strokeWidth="1.5" />
        <path d="M158 365 L220 365 L220 490 L480 490" stroke="url(#wireGrad)" strokeWidth="1.5" />

        <path d="M158 205 L190 205 L190 70 L440 70" stroke="#c9a44c59" strokeWidth="1" />
        <path d="M158 395 L190 395 L190 550 L440 550" stroke="#c9a44c59" strokeWidth="1" />

        <g fill="var(--color-gold)">
          <circle cx="158" cy="235" r="3" />
          <circle cx="158" cy="278" r="3" />
          <circle cx="158" cy="322" r="3" />
          <circle cx="158" cy="365" r="3" />
          <circle cx="158" cy="205" r="2" opacity="0.6" />
          <circle cx="158" cy="395" r="2" opacity="0.6" />
        </g>
      </svg>

      <div
        className="absolute left-10 top-1/2 flex h-[150px] w-[118px] -translate-y-1/2 items-center justify-center rounded-lg border border-line-gold-bright bg-gradient-to-br from-[#10151f] to-[#0a0d15]"
        style={{ boxShadow: "0 0 40px -6px color-mix(in srgb, var(--color-gold) 25%, transparent), inset 0 0 20px rgba(0,0,0,0.4)" }}
      >
        <AtomMark size={46} idSuffix="Chip" />
        <span className="absolute bottom-2.5 left-0 right-0 text-center text-[6.5px] tracking-[0.16em] text-gold/85">
          GMX QUANTUM
        </span>
      </div>

      {primary.map((t) => (
        <Link
          key={t.label}
          to={t.to}
          className="absolute -translate-y-1/2 whitespace-nowrap rounded-[3px] bg-gradient-to-b from-[#e7c37e] to-[#c9a44c] px-4 py-2.5 font-display text-sm font-medium text-[#181205] shadow-[0_6px_18px_-6px_rgba(0,0,0,0.5)] transition-transform hover:scale-105"
          style={{ top: t.top, left: 480 }}
        >
          {t.label}
        </Link>
      ))}

      {secondary.map((t) => (
        <Link
          key={t.label}
          to={t.to}
          className="absolute -translate-y-1/2 whitespace-nowrap rounded-[3px] border border-line-gold-bright px-3.5 py-[7px] text-[11px] font-medium tracking-[0.04em] text-ivory-dim transition-colors hover:border-gold hover:text-gold"
          style={{ top: t.top, left: 440 }}
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}
