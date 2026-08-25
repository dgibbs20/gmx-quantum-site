const principles = [
  "Start with a real person's problem, not a hypothetical one.",
  "Real historical data over synthetic, every time it's available.",
  "Systems don't crash silently when data is missing or stale.",
  "No placeholder implementations ship as if they were finished work.",
  "Every modification is logged — the change history is part of the product.",
  "Financial reporting is held to 100% accuracy, no rounding the process.",
];

export default function Company() {
  return (
    <>
      <section className="border-b border-line-gold">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-eyebrow">Company</p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl font-normal leading-[1.08] tracking-tight text-ivory sm:text-6xl">
            One holding company. Independent systems underneath.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            GMX Quantum LLC is the technology subsidiary of Gibbs-McGlaston
            Holding Corp, operating alongside Gibbs-McGlaston Media Group LLC.
            Each system in the portfolio — software or hardware — is built,
            validated, and held on its own record, with the same idea behind
            every one of them: build with emotional intelligence, for real people.
          </p>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line-gold pt-8 sm:grid-cols-4">
            <div>
              <dt className="text-eyebrow !text-[10px] !text-ivory-dim">Systems Built</dt>
              <dd className="mt-2 font-display text-xl text-ivory">4</dd>
            </div>
            <div>
              <dt className="text-eyebrow !text-[10px] !text-ivory-dim">Patent</dt>
              <dd className="mt-2 font-display text-xl text-ivory">USPTO, Granted</dd>
            </div>
            <div>
              <dt className="text-eyebrow !text-[10px] !text-ivory-dim">Live Reach</dt>
              <dd className="mt-2 font-display text-xl text-ivory">177 Countries</dd>
            </div>
            <div>
              <dt className="text-eyebrow !text-[10px] !text-ivory-dim">Built By</dt>
              <dd className="mt-2 font-display text-xl text-ivory">Solo Founder</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-b border-line-gold">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-eyebrow">Why</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-normal text-ivory">
            Not one big idea. Several real ones.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            GMX Quantum's technology subsidiary has shipped four independent
            systems — consumer software live in 177 countries, a B2C and
            B2B financial platform, a USPTO-granted hardware patent, and a
            proprietary AI trading research program — architected and built
            by one person.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            It would be simpler to point to one unifying technology thesis.
            That's not what this is. An AI journal, a financial companion,
            a patent-granted jet engine, and an internal research program
            don't share a market or a tech stack — they share a person who
            builds with the same care regardless of what the problem is.
            The range is the point, not a distraction from it.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            Every system in the portfolio starts from a real person's
            problem, not a hypothetical one, and gets built to the same
            standard whether it ships to consumers, partners, or nobody
            outside the company yet.
          </p>
          <p className="mt-10 max-w-2xl font-display text-2xl italic text-gold">
            "We build with emotional intelligence. Everything is built with
            real people in mind."
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-eyebrow">Structure</p>
            <h2 className="mt-3 font-display text-2xl font-normal text-ivory">
              How the company is organized
            </h2>
            <div className="mt-8 space-y-6 border-l border-line-gold pl-6">
              <div>
                <p className="text-eyebrow !text-[10px] !text-ivory-dim">Parent</p>
                <p className="mt-1 font-display text-lg text-ivory">Gibbs-McGlaston Holding Corp</p>
              </div>
              <div>
                <p className="text-eyebrow !text-[10px] !text-ivory-dim">Subsidiary — Technology</p>
                <p className="mt-1 font-display text-lg text-ivory">GMX Quantum LLC</p>
                <p className="mt-1 text-sm text-ivory-dim">
                  Software and hardware systems — diAry, Fuss Budget, AetherCore, and Aitherium.
                </p>
              </div>
              <div>
                <p className="text-eyebrow !text-[10px] !text-ivory-dim">Subsidiary — Media</p>
                <p className="mt-1 font-display text-lg text-ivory">Gibbs-McGlaston Media Group LLC</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-eyebrow">How we build</p>
            <h2 className="mt-3 font-display text-2xl font-normal text-ivory">
              Working principles, day to day
            </h2>
            <ul className="mt-8 space-y-4">
              {principles.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-ivory-dim">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
