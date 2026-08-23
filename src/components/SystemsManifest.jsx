import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { systems } from "../data/systems";
import StatusBadge from "./StatusBadge";

export default function SystemsManifest() {
  return (
    <div>
      {systems.map((s, i) => {
        const row = (
          <div
            className={`group grid grid-cols-[64px_1fr_auto] items-center gap-4 py-8 transition-colors sm:grid-cols-[90px_1fr_auto_auto] ${
              s.route ? "cursor-pointer" : ""
            } border-t border-line-gold ${i === systems.length - 1 ? "border-b" : ""}`}
          >
            <span className="font-display text-[13px] italic text-gold">{s.code}</span>

            <div className="min-w-0">
              <p className="font-display text-xl font-normal text-ivory sm:text-2xl">{s.name}</p>
              <p className="mt-1.5 max-w-md text-sm text-ivory-dim">{s.tagline}</p>
            </div>

            <span className="hidden text-eyebrow !text-[10px] !text-ivory-dim sm:block">
              {s.category}
            </span>

            <div className="flex items-center gap-4">
              <StatusBadge status={s.status} />
              {s.route && (
                <ArrowUpRight
                  size={16}
                  className="hidden text-ivory-dim/50 transition-colors group-hover:text-gold sm:block"
                />
              )}
            </div>
          </div>
        );

        return s.route ? (
          <Link key={s.code} to={s.route} aria-label={`View ${s.name}`}>
            {row}
          </Link>
        ) : (
          <div key={s.code}>{row}</div>
        );
      })}
    </div>
  );
}
