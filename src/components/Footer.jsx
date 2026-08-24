import { Link } from "react-router-dom";
import AtomMark from "./AtomMark";
import { systems } from "../data/systems";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line-gold bg-navy-raised">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <AtomMark size={26} idSuffix="Footer" />
              <span className="font-display text-[17px] font-medium text-ivory">GMX Quantum</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory-dim">
              We build with emotional intelligence. Software and hardware,
              built with real people in mind.
            </p>
            <p className="mt-6 text-eyebrow !text-ivory-dim !text-[10px]">
              GMX Quantum LLC — a subsidiary of Gibbs-McGlaston Holding Corp.
            </p>
          </div>

          <div>
            <p className="text-eyebrow !text-[10px] !text-ivory-dim">Portfolio</p>
            <ul className="mt-4 space-y-2.5">
              {systems.map((s) => (
                <li key={s.code}>
                  {s.route ? (
                    <Link to={s.route} className="text-sm text-ivory-dim hover:text-gold">
                      {s.name}
                    </Link>
                  ) : (
                    <span className="text-sm text-ivory-dim/50">{s.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-eyebrow !text-[10px] !text-ivory-dim">Company</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/company" className="text-sm text-ivory-dim hover:text-gold">
                  About
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-sm text-ivory-dim hover:text-gold">
                  Founder
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-ivory-dim hover:text-gold">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="mailto:admin@gmxquantum.com"
                  className="text-sm text-ivory-dim hover:text-gold"
                >
                  admin@gmxquantum.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line-gold pt-6 text-xs text-ivory-dim/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} GMX Quantum LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
