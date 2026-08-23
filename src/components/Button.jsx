const base =
  "inline-flex items-center gap-2 px-7 py-3.5 text-[13px] font-medium tracking-[0.02em] transition-all font-body";

const variants = {
  primary:
    "bg-gradient-to-b from-[#f0d38f] to-[#c9a44c] text-[#181205] hover:brightness-105 shadow-[0_8px_24px_-8px_rgba(201,164,76,0.45)]",
  ghost: "border border-line-gold-bright text-ivory hover:border-gold hover:text-gold",
};

export default function Button({ as: Tag = "a", variant = "primary", className = "", ...props }) {
  return <Tag className={`${base} ${variants[variant]} ${className}`} {...props} />;
}
