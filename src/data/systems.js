export const systems = [
  {
    code: "No. 01",
    name: "diAry",
    category: "Consumer Software",
    tagline: "AI journaling that gives people somewhere to put what they don't say out loud.",
    status: "LIVE",
    route: "/diary",
    stats: [
      { label: "Countries", value: "177" },
      { label: "Languages", value: "29" },
      { label: "Platforms", value: "iOS · Android" },
    ],
  },
  {
    code: "No. 02",
    name: "Fuss Budget",
    category: "Consumer & B2B Software",
    tagline: "An AI financial companion that explains money instead of just tracking it.",
    status: "IN DEVELOPMENT",
    route: "/fuss-budget",
    stats: [
      { label: "Engines", value: "6" },
      { label: "Model", value: "B2C + B2B" },
      { label: "Companion", value: "Sage" },
    ],
  },
  {
    code: "No. 03",
    name: "AetherCore",
    category: "Aerospace Hardware",
    tagline: "A patent-granted multi-propulsion jet engine architecture.",
    status: "PATENTED",
    route: "/aethercore",
    stats: [
      { label: "Patent", value: "USPTO, Utility" },
      { label: "Term", value: "20 Years" },
      { label: "Track", value: "SBIR-eligible" },
    ],
  },
  {
    code: "No. 04",
    name: "Aitherium",
    category: "Proprietary Research",
    tagline: "Internal AI research program. Not publicly disclosed.",
    status: "INTERNAL",
    route: "/aitherium",
    stats: [
      { label: "Structure", value: "Unified Core" },
      { label: "Domains", value: "4" },
      { label: "Access", value: "Internal Only" },
    ],
  },
];

export const statusStyles = {
  LIVE: { dot: "bg-mint", text: "text-mint", label: "Live" },
  "IN DEVELOPMENT": { dot: "bg-gold", text: "text-gold", label: "In Development" },
  PATENTED: { dot: "bg-ivory", text: "text-ivory", label: "Patented" },
  INTERNAL: { dot: "bg-ivory-dim", text: "text-ivory-dim", label: "Internal" },
};
