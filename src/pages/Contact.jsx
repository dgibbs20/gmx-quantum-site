import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import Button from "../components/Button";

const inputClass =
  "w-full border border-line-gold bg-navy px-4 py-3 text-sm text-ivory placeholder:text-ivory-dim/60 focus:border-gold focus:outline-none";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="border-b border-line-gold">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-eyebrow">Contact</p>
        <h1 className="mt-6 max-w-2xl font-display text-5xl font-normal leading-[1.08] tracking-tight text-ivory sm:text-6xl">
          Reach the team directly.
        </h1>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <a
              href="mailto:hello@gmxquantum.com"
              className="flex items-center gap-3 font-display text-lg text-ivory hover:text-gold"
            >
              <Mail size={20} className="text-gold" />
              hello@gmxquantum.com
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory-dim">
              For product press, partnership, B2B licensing, or investment
              inquiries, email directly or use the form — either reaches the
              same inbox.
            </p>
          </div>

          <div className="border border-line-gold bg-navy-raised p-8">
            {sent ? (
              <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
                <p className="font-display text-xl text-ivory">Message received.</p>
                <p className="mt-2 text-sm text-ivory-dim">
                  We'll get back to you at the address you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <input required placeholder="Name" className={inputClass} name="name" />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className={inputClass}
                    name="email"
                  />
                </div>
                <input placeholder="Company (optional)" className={inputClass} name="company" />
                <textarea
                  required
                  placeholder="What are you reaching out about?"
                  rows={5}
                  className={inputClass}
                  name="message"
                />
                <Button as="button" type="submit" variant="primary">
                  Send message <ArrowRight size={16} />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
