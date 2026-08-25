import headshot from "../assets/founder/derrick-headshot.jpg";

export default function Founder() {
  return (
    <section className="border-b border-line-gold">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <p className="text-eyebrow">Founder</p>

        <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <img
            src={headshot}
            alt="Derrick K. Gibbs-McGlaston"
            className="h-32 w-32 shrink-0 rounded-full border border-line-gold-bright object-cover"
          />
          <div>
            <h1 className="font-display text-4xl font-normal tracking-tight text-ivory sm:text-5xl">
              Derrick K. Gibbs-McGlaston
            </h1>
            <p className="mt-2 text-eyebrow !text-ivory-dim">Founder &amp; CEO, GMX Quantum LLC</p>
          </div>
        </div>

        <div className="mt-14 border-t border-line-gold pt-10">
          <p className="text-eyebrow">Background</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            Derrick K. Gibbs-McGlaston is a solo technical founder — he
            designs, builds, and ships every product in the GMX Quantum
            portfolio himself, across software and hardware. The portfolio
            includes a USPTO-granted utility patent for a multi-propulsion
            aerospace architecture, an AI journaling app live in 177
            countries and 29 languages, an AI financial companion built for
            both consumers and institutions, and a proprietary AI trading
            research program.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            Before GMX Quantum, he spent close to fifteen years building
            arts and creative programs from the ground up — choirs, bands,
            dance teams, a drama department, and a concert series — growing
            the work into one of the most respected programs of its kind in
            the state across multiple campuses, alongside a recording
            project that reached No. 2 on Amazon's charts. He holds a
            degree in Business Administration and Marketing and is
            completing a B.A.T. in AI &amp; Robotics with a 4.1 GPA and Phi
            Theta Kappa honors.
          </p>

          <p className="mt-10 text-eyebrow">Why GMX Quantum</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            Every product in the portfolio started as something Derrick
            needed personally, not a market he spotted from the outside.
            diAry began as a private way to process his own thoughts when
            he didn't have anyone else to talk to. Fuss Budget came out of
            his own struggle with financial literacy. AetherCore was
            sparked mid-flight, wanting a faster way to get where he was
            going. Aitherium started because he wanted to learn to trade —
            and ended up building the system himself instead.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            That's the throughline behind "we build with emotional
            intelligence." It's not a slogan — it's just how the portfolio
            actually got built, one real gap at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
