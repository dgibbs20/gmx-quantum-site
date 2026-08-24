import { Link } from "react-router-dom";
import { ArrowRight, Layers, Radar, ShieldCheck, GitBranch } from "lucide-react";
import { systems } from "../data/systems";
import aitheriumLogo from "../assets/aitherium/aitherium-logo.jpg";
import screenshotPortfolio from "../assets/aitherium/screenshot-portfolio.jpg";
import screenshotBacktest from "../assets/aitherium/screenshot-backtest.jpg";

const data = systems.find((s) => s.name === "Aitherium");

const facts = [
  {
    icon: Layers,
    title: "One core, several domains",
    body: "A single reasoning core coordinates specialized modules across separate market domains, rather than one model trying to do everything at once.",
  },
  {
    icon: Radar,
    title: "Real data, every domain",
    body: "Every module is developed and evaluated against real historical and live market data — coverage spans crypto, equities, forex, and derivatives.",
  },
  {
    icon: ShieldCheck,
    title: "Nothing ships on a hunch",
    body: "No hypothesis is treated as a final answer. Every idea is tested against real data before it's trusted, and most don't survive that test.",
  },
  {
    icon: GitBranch,
    title: "Kept internal by design",
    body: "Architecture and methodology stay out of public materials while the research continues — what's here is the interface, not the mechanism.",
  },
];

const screenshots = [
  { src: screenshotPortfolio, alt: "Aitherium command center interface concept — portfolio and asset-class coverage view" },
  { src: screenshotBacktest, alt: "Aitherium command center interface concept — historical evaluation view" },
];

export default function Aitherium() {
  return (
    <>
      {/* Hero — Aitherium's own chrome/blue identity, not GMX Quantum navy/gold */}
      <section className="relative overflow-hidden border-b border-[#5ec8f5]/15">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 500px at 50% -10%, rgba(94,200,245,0.14), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-sm italic text-[#7fd4f7]">{data.code}</span>
            <span className="text-[#5ec8f5]/30">/</span>
            <span className="text-eyebrow !text-[11px] !text-[#8da3b3]">{data.category}</span>
          </div>

          <img
            src={aitheriumLogo}
            alt="Aitherium — The Divine Core"
            className="mt-8 h-40 w-auto mix-blend-lighten sm:h-48"
          />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#8da3b3]">
            An internal AI research program — not a public product. A
            unified reasoning core coordinating specialized modules across
            live market domains, held to the same validation discipline as
            everything else in the portfolio.
          </p>

          <div className="mt-8">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[#8da3b3]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="11" width="14" height="9" rx="1.5" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
              Internal
            </span>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-[#5ec8f5]/15 pt-8 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-eyebrow !text-[10px] !text-[#8da3b3]">{stat.label}</dt>
                <dd className="mt-2 font-display text-xl text-[#eaf3fa]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-eyebrow !text-[#5ec8f5]">Overview</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal text-[#eaf3fa]">
          A command core, not a single model.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8da3b3]">
          Aitherium is a research program built around a central AI core
          that oversees a set of specialized modules, each scoped to its
          own market domain. The interface below is a coverage and
          research view — instrument classes and data feeds the system
          works with, not a public trading product or an investment
          offering.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8da3b3]">
          Every module is developed the same way: a hypothesis is proposed,
          tested against real data, and either earns its place or is
          discarded. Technical detail is intentionally kept out of public
          materials while the program continues — what's shown here is the
          interface, not the methodology.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 sm:gap-8">
          {screenshots.map((s) => (
            <div
              key={s.alt}
              className="overflow-hidden rounded-2xl border border-[#5ec8f5]/25 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7),0_0_40px_-18px_rgba(94,200,245,0.35)]"
            >
              <img src={s.src} alt={s.alt} className="w-full" />
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-[#8da3b3]/60">
          Interface concept renders of the internal research console — illustrative, not live data.
        </p>

        <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {facts.map((f) => (
            <div key={f.title} className="flex gap-4">
              <f.icon size={22} className="mt-1 shrink-0 text-[#5ec8f5]" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-base font-normal text-[#eaf3fa]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8da3b3]">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — stays in Aitherium's own register, still routes back into the site's contact flow */}
      <section className="border-t border-[#5ec8f5]/15 bg-[#070c16]">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-normal text-[#eaf3fa]">
              Not open for public access
            </h2>
            <p className="mt-2 max-w-md text-[#8da3b3]">
              Aitherium isn't distributed or offered publicly. For anything
              beyond what's shown here, reach the team directly.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#5ec8f5]/40 px-7 py-3.5 text-[13px] font-medium tracking-[0.02em] text-[#eaf3fa] transition-colors hover:border-[#5ec8f5] hover:text-[#5ec8f5]"
          >
            Contact GMX Quantum <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
