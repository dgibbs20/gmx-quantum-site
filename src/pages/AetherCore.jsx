import { Link } from "react-router-dom";
import { ArrowRight, FileCheck2, Rocket, Scale } from "lucide-react";
import ProductHero from "../components/ProductHero";
import Button from "../components/Button";
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
      <ProductHero
        code={data.code}
        category={data.category}
        name={data.name}
        tagline="A patent-granted multi-propulsion jet engine architecture — GMX Quantum's entry into aerospace hardware."
        status={data.status}
        stats={data.stats}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-eyebrow">Overview</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal text-ivory">
          Hardware held to the same bar as the software.
        </h2>
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
