import { ArrowRight, Mic, Globe2, Moon } from "lucide-react";
import Button from "../components/Button";
import StatusBadge from "../components/StatusBadge";
import { systems } from "../data/systems";
import diaryLogo from "../assets/diary/diary-logo.png";
import screenshotHome from "../assets/diary/screenshot-home.jpg";
import screenshotCompanion from "../assets/diary/screenshot-companion.jpg";
import screenshotJourney from "../assets/diary/screenshot-journey.jpg";

const data = systems.find((s) => s.name === "diAry");

const facts = [
  {
    icon: Mic,
    text: "AI Transcription turns voice, handwriting, and photo capture into a real entry automatically.",
  },
  {
    icon: Globe2,
    text: "Localized, not translated — 29 languages, each transcreated against real, live competitor listings.",
  },
  {
    icon: Moon,
    text: "A complete dark and light mode pass across every screen, not a single inverted stylesheet.",
  },
];

const screenshots = [
  { src: screenshotHome, alt: "diAry home screen with recent journal entries" },
  { src: screenshotCompanion, alt: "diAry AI Companion reflection screen" },
  { src: screenshotJourney, alt: "diAry Emotional Journey mood trend and AI reflection screen" },
];

export default function Diary() {
  return (
    <>
      {/* Hero — real wordmark instead of typed text */}
      <section className="border-b border-line-gold">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-display text-sm italic text-gold">{data.code}</span>
            <span className="text-ivory-dim/40">/</span>
            <span className="text-eyebrow !text-[11px] !text-ivory-dim">{data.category}</span>
          </div>

          <img src={diaryLogo} alt="diAry" className="mt-8 h-16 w-auto sm:h-20" />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ivory-dim">
            An AI journal that gives people somewhere to put what they don't
            say out loud — live on the App Store and Google Play in 177
            countries.
          </p>

          <div className="mt-8">
            <StatusBadge status={data.status} size="lg" />
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-line-gold pt-8 sm:grid-cols-3">
            {data.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-eyebrow !text-[10px] !text-ivory-dim">{stat.label}</dt>
                <dd className="mt-2 font-display text-xl text-ivory">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Synopsis + screenshots */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-eyebrow">Overview</p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ivory-dim">
          diAry removes the blank-page problem from journaling. Talk, write,
          or capture a photo, and the AI Transcription layer turns it into a
          real entry — then reflects it back with context, not generic
          affirmations.
        </p>

        <div className="mt-14 grid grid-cols-3 gap-5 sm:gap-8">
          {screenshots.map((s, i) => (
            <div
              key={s.alt}
              className={`overflow-hidden rounded-2xl border border-line-gold-bright shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] ${
                i === 1 ? "sm:-translate-y-6" : ""
              }`}
            >
              <img src={s.src} alt={s.alt} className="w-full" />
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-x-10 gap-y-8 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.text} className="flex gap-3">
              <f.icon size={20} className="mt-0.5 shrink-0 text-gold" strokeWidth={1.75} />
              <p className="text-sm leading-relaxed text-ivory-dim">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA out to diAry's own site */}
      <section className="border-t border-line-gold bg-navy-raised">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-normal text-ivory">See diAry for yourself</h2>
            <p className="mt-2 max-w-md text-ivory-dim">
              Download links and the full product story live on diAry's own site.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button
              href="https://diary.gmxquantum.com/"
              target="_blank"
              rel="noreferrer"
              variant="primary"
            >
              Visit diAry <ArrowRight size={16} />
            </Button>
            <Button
              href="https://diary.gmxquantum.com/blog/"
              target="_blank"
              rel="noreferrer"
              variant="ghost"
            >
              Read the blog
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
