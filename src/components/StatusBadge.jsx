import { Lock } from "lucide-react";
import { statusStyles } from "../data/systems";

export default function StatusBadge({ status, size = "sm" }) {
  const s = statusStyles[status] ?? statusStyles.INTERNAL;
  const isLive = status === "LIVE";
  const isInternal = status === "INTERNAL";
  const textSize = size === "lg" ? "text-[11px]" : "text-[10px]";

  return (
    <span className={`inline-flex items-center gap-2 ${textSize} tracking-[0.14em] uppercase ${s.text}`}>
      {isInternal ? (
        <Lock size={11} strokeWidth={2} />
      ) : (
        <span className="relative flex h-1.5 w-1.5">
          {isLive && (
            <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${s.dot} opacity-60`} />
          )}
          <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${s.dot}`} />
        </span>
      )}
      {s.label}
    </span>
  );
}
