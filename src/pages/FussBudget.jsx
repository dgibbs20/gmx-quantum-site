import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Gauge, Building2, Lock } from "lucide-react";
import ProductHero from "../components/ProductHero";
import Button from "../components/Button";
import { systems } from "../data/systems";

const data = systems.find((s) => s.name === "Fuss Budget");

const pillars = [
  {
    icon: MessageCircle,
    title: "Sage, the companion",
    body: "A conversational AI that explains a financial picture in plain language — and can take real actions, but only through a propose-then-confirm flow, never a silent write.",
  },
  {
    icon: Gauge,
    title: "Safe-to-Spend & Comfort Level",
    body: "Two hero metrics replace a wall of numbers: what's actually safe to spend today, and a five-tier read on overall financial comfort.",
  },
  {
    icon: Lock,
    title: "The math stays out of the LLM",
    body: "A hard rule in how it's built: language models never calculate money. Dedicated engines calculate; Sage only explains the result.",
  },
  {
    icon: Building2,
    title: "Built for individuals and institutions",
    body: "A consumer subscription and a licensed B2B version for churches, schools, nonprofits, and credit unions to offer their own communities.",
  },
];

export default function FussBudget() {
  return (
    <>
      <ProductHero
        code={data.code}
        category={data.category}
        name={data.name}
        tagline='"Calm about money. Confident about life." An AI financial companion built on the rule that the math is never left to the model.'
        status={data.status}
        stats={data.stats}
      />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-eyebrow">Overview</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal text-ivory">
          Money software that explains itself.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
          Fuss Budget is built around a companion, Sage, that translates a
          person's real financial position into two numbers that actually
          mean something day to day. Underneath, six dedicated engines
          handle every calculation — Sage's job is to explain them, never
          to invent them.
        </p>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {pillars.map((f) => (
            <div key={f.title} className="flex gap-4">
              <f.icon size={22} className="mt-1 shrink-0 text-gold" strokeWidth={1.75} />
              <div>
                <h3 className="font-display text-base font-normal text-ivory">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-dim">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line-gold bg-navy-raised">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-normal text-ivory">
              In development — not yet public
            </h2>
            <p className="mt-2 max-w-md text-ivory-dim">
              Reach out for early access or B2B licensing conversations ahead of launch.
            </p>
          </div>
          <Button as={Link} to="/contact" variant="primary">
            Get in touch <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  );
}
