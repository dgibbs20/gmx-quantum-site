import { Link } from "react-router-dom";
import { ArrowRight, FileCheck2, Rocket, Scale } from "lucide-react";
import StatusBadge from "../components/StatusBadge";
import Button from "../components/Button";
import PropulsionPodScene from "../components/PropulsionPodScene";
import { systems } from "../data/systems";

const data = systems.find((s) => s.name === "AetherCore");

const facts = [
  {
    icon: FileCheck2,
    title: "Patent granted, not pending",
    body: "A USPTO non-provisional utility patent has been granted on the architecture, carrying a full 20-year term.",
  },
  {
    icon: Scale,
    title: "Filed pro bono, on merit",
    body: "The filing was handled by Perkins Coie LLP through their TALA pro bono program for early-stage technology.",
  },
  {
    icon: Rocket,
    title: "Targeting federal partnership",
    body: "SAM.gov registration and DARPA SBIR funding pathways have been identified as the next targets for the program.",
  },
];

export default function AetherCore() {
  return (
    <>
      {/* Hero — asymmetric, 3D propulsion pod render right */}
      <section className="relative overflow-hidden border-b border-line-gold">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-sm italic text-gold">{data.code}</span>
              <span className="text-ivory-dim/40">/</span>
              <span className="text-eyebrow !text-[11px] !text-ivory-dim">{data.category}</span>
            </div>

            <h1 className="mt-6 max-w-lg font-display text-5xl font-normal leading-[1.08] tracking-tight text-ivory sm:text-6xl">
              AetherCore
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-dim">
              A patent-granted multi-propulsion jet engine architecture —
              GMX Quantum's entry into aerospace hardware.
            </p>

            <div className="mt-8">
              <StatusBadge status={data.status} size="lg" />
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-line-gold pt-8">
              {data.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-eyebrow !text-[10px] !text-ivory-dim">{stat.label}</dt>
                  <dd className="mt-2 font-display text-xl text-ivory">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden items-center justify-center lg:flex">
            <PropulsionPodScene className="h-[420px] w-full max-w-lg" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-eyebrow">Overview</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal text-ivory">
          Hardware held to the same bar as the software.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
          AetherCore is built around a specific idea: most of what slows a
          flight down is the atmosphere itself. The architecture is
          designed to carry an aircraft above it, then bring it back down
          — internal modeling targets cutting long-haul flight time by
          roughly 70%, pending real-world validation.
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
          AetherCore is GMX Quantum's propulsion program: a multi-propulsion
          jet engine architecture, protected by an issued U.S. patent. Full
          technical detail is intentionally kept out of public materials
          while the program pursues federal and commercial partnerships —
          what's below is the verified record, not a pitch.
        </p>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.title}>
              <f.icon size={22} className="text-gold" strokeWidth={1.75} />
              <h3 className="mt-4 font-display text-base font-normal text-ivory">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory-dim">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line-gold bg-navy-raised">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-normal text-ivory">
              Partnership and funding inquiries
            </h2>
            <p className="mt-2 max-w-md text-ivory-dim">
              For federal, defense, or commercial aerospace conversations —
              reach the team directly.
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary">
            Contact GMX Quantum <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}

