import StatusBadge from "./StatusBadge";

export default function ProductHero({ code, category, name, tagline, status, stats }) {
  return (
    <section className="relative border-b border-line-gold">
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-display text-sm italic text-gold">{code}</span>
          <span className="text-ivory-dim/40">/</span>
          <span className="text-eyebrow !text-[11px] !text-ivory-dim">{category}</span>
        </div>

        <h1 className="mt-6 max-w-2xl font-display text-5xl font-normal leading-[1.08] tracking-tight text-ivory sm:text-6xl">
          {name}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-dim">{tagline}</p>

        <div className="mt-8">
          <StatusBadge status={status} size="lg" />
        </div>

        {stats?.length > 0 && (
          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line-gold pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-eyebrow !text-[10px] !text-ivory-dim">{stat.label}</dt>
                <dd className="mt-2 font-display text-xl text-ivory">{stat.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
