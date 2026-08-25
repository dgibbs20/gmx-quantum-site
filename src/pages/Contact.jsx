import { useState } from "react";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import Button from "../components/Button";

const inputClass =
  "w-full border border-line-gold bg-navy px-4 py-3 text-sm text-ivory placeholder:text-ivory-dim/60 focus:border-gold focus:outline-none";

// Formspree endpoint — sign up free at formspree.io, create a form pointed
// at admin@gmxquantum.com, and drop the real endpoint ID in here. Until
// then this will fail with a clear error instead of silently pretending
// to work.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
              href="mailto:admin@gmxquantum.com"
              className="flex items-center gap-3 font-display text-lg text-ivory hover:text-gold"
            >
              <Mail size={20} className="text-gold" />
              admin@gmxquantum.com
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory-dim">
              For product press, partnership, B2B licensing, or investment
              inquiries, email directly or use the form — either reaches the
              same inbox.
            </p>

            <div className="mt-8 border-t border-line-gold pt-6">
              <p className="text-eyebrow !text-[10px] !text-ivory-dim">Media, Social &amp; Public Relations</p>
              <a
                href="mailto:alphonso@gibbsmcglaston.com"
                className="mt-3 flex items-center gap-3 text-sm text-ivory hover:text-gold"
              >
                <Mail size={16} className="text-gold" />
                alphonso@gibbsmcglaston.com
              </a>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory-dim">
                For brand assets, social collaborations, media, or public relations requests.
              </p>
            </div>
          </div>

          <div className="border border-line-gold bg-navy-raised p-8">
            {status === "sent" ? (
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
                {status === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong sending that — try again, or email
                    admin@gmxquantum.com directly.
                  </p>
                )}
                <Button as="button" type="submit" variant="primary" disabled={status === "sending"}>
                  {status === "sending" ? (
                    <>
                      Sending <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message <ArrowRight size={16} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
