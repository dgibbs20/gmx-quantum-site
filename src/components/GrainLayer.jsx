export default function GrainLayer() {
  return (
    <div className="grain-layer" aria-hidden="true">
      <svg>
        <filter id="grainFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grainFilter)" />
      </svg>
      <div className="vignette" />
    </div>
  );
}
