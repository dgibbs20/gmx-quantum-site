import AtomMark from "../components/AtomMark";

export default function Founder() {
  return (
    <section className="border-b border-line-gold">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <p className="text-eyebrow">Founder</p>

        <div className="mt-8 flex flex-col items-start gap-8 sm:flex-row sm:items-center">
          <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-line-gold-bright bg-navy-raised">
            <AtomMark size={40} idSuffix="Founder" />
          </div>
          <div>
            <h1 className="font-display text-4xl font-normal tracking-tight text-ivory sm:text-5xl">
              Derrick K. Gibbs-McGlaston
            </h1>
            <p className="mt-2 text-eyebrow !text-ivory-dim">Founder &amp; CEO, GMX Quantum LLC</p>
          </div>
        </div>

        <div className="mt-14 border-t border-line-gold pt-10">
          <p className="text-eyebrow">Bio — placeholder</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ivory-dim">
            This is where your story goes, in your words — background, what
            led you here, and however much of the personal side you want
            public. Send it over and this becomes the real page.
          </p>
        </div>
      </div>
    </section>
  );
}
