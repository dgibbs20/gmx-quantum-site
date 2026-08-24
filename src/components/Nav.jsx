import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AtomMark from "./AtomMark";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/diary", label: "diAry" },
  { to: "/fuss-budget", label: "Fuss Budget" },
  { to: "/aethercore", label: "AetherCore" },
  { to: "/aitherium", label: "Aitherium" },
  { to: "/company", label: "Company" },
  { to: "/founder", label: "Founder" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="glass-nav sticky top-0 z-50 border-b border-line-gold">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <AtomMark size={28} idSuffix="Nav" />
          <span className="font-display text-[17px] font-medium tracking-tight text-ivory">
            GMX Quantum
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `text-eyebrow !text-[11px] transition-colors ${
                  isActive ? "!text-gold" : "!text-ivory-dim hover:!text-ivory"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden rounded-full border border-line-gold-bright px-6 py-2.5 text-[11px] tracking-[0.1em] text-ivory uppercase transition-colors hover:border-gold hover:text-gold lg:block"
        >
          Contact
        </NavLink>

        <button
          className="text-ivory lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line-gold bg-navy lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
            {[...links, { to: "/contact", label: "Contact" }].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-eyebrow !text-xs border-b border-line-gold py-4 last:border-0 ${
                    isActive ? "!text-gold" : "!text-ivory-dim"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
