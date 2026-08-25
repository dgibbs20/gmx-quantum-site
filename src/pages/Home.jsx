import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SystemsManifest from "../components/SystemsManifest";
import Button from "../components/Button";
import CircuitDiagram from "../components/CircuitDiagram";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line-gold">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-10 px-6 py-20 sm:py-28">
          <div>
            <p className="text-eyebrow">GMX Quantum LLC</p>
            <h1 className="mt-7 max-w-lg font-display text-5xl font-normal leading-[1.08] tracking-tight text-ivory sm:text-6xl">
              We build with <em className="gold-text font-medium not-italic">emotional intelligence.</em>
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ivory-dim">
              Everything we make is built with real people in mind — an AI
              journal, a financial companion, a patented jet engine, an AI
              trading research program. Different problems. Same care.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button as={Link} to="/company" variant="primary">
                Company Overview <ArrowRight size={16} />
              </Button>
              <Button as={Link} to="/contact" variant="ghost">
                Contact
              </Button>
            </div>
          </div>

          <CircuitDiagram />
        </div>
      </section>

      {/* Systems manifest */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-4">
          <p className="text-eyebrow">The Portfolio</p>
          <h2 className="mt-3 font-display text-3xl font-normal text-ivory">
            Every venture, independently held.
          </h2>
        </div>
        <SystemsManifest />
      </section>

      {/* Method */}
      <section className="border-t border-line-gold bg-navy-raised">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-eyebrow">Method</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-normal text-ivory">
            Not one thing. One method, applied several places.
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {[
              {
                n: "01",
                t: "Start with a real person's problem",
                d: "Not a hypothetical, not a spec sheet — an actual thing someone is going through.",
              },
              {
                n: "02",
                t: "Build the whole thing",
                d: "Software or hardware, it ships end-to-end. No demo standing in for the real product.",
              },
              {
                n: "03",
                t: "Hold every system to the same bar",
                d: "Live for a year or just beginning — nothing here gets a lower standard.",
              },
            ].map((step) => (
              <div key={step.n} className="border-t border-gold pt-5">
                <span className="font-display text-sm italic text-gold">{step.n}</span>
                <h3 className="mt-3 font-display text-lg font-normal text-ivory">{step.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-dim">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-normal text-ivory sm:text-4xl">
          Building something and want to talk?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-ivory-dim">
          Partnerships, press, or investment inquiries — reach the team directly.
        </p>
        <div className="mt-8 flex justify-center">
          <Button as={Link} to="/contact" variant="primary">
            Contact GMX Quantum <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
