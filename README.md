# GMX Quantum — Corporate Site

React + Vite + Tailwind CSS v4, React Router. Navy + gold, "we build with emotional intelligence" positioning throughout.

## Run it locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Deploy to Vercel, Netlify, Cloudflare Pages, or your existing AWS setup. Since this uses client-side routing, your host needs a rewrite rule sending all paths to `index.html`.

## Before this goes fully live

1. **Contact form** (`src/pages/Contact.jsx`) — currently just confirms locally on submit. Needs a real endpoint.
2. **App Store / Google Play links** — not added yet, send the real URLs when ready.
3. **Company name check** — Company page uses "Gibbs-McGlaston Holding Corp" per how it was referred to in chat; confirm this is the correct public-facing legal name.
4. **Founder page** (`src/pages/Founder.jsx`) — placeholder bio + photo circle. Send real bio text and a headshot to finish it.

## Structure

```
src/
  data/systems.js         <- single source of truth for the 4 systems
  components/
    AtomMark.jsx           the logo mark, hand-built SVG (no vector file exists)
    CircuitDiagram.jsx     homepage hero graphic — chip + branching wires to each page, clickable nodes
    GrainLayer.jsx          film grain + vignette, mounted once at the app root
    Nav.jsx / Footer.jsx / Button.jsx / StatusBadge.jsx / SystemsManifest.jsx / ProductHero.jsx
  pages/                  Home, Diary, FussBudget, AetherCore, Company, Founder, Contact, NotFound
```

## Design system

- **Colors:** navy background, metallic gold gradient accent, mint-green reserved only for "LIVE" status
- **Type:** Fraunces (display, serif), Inter (body) — loaded via Google Fonts in `index.html`
- **Homepage hero:** the atom mark rendered as a circuit-board "chip," with gold wire traces branching to labeled nodes for each page — diAry/Fuss Budget/AetherCore as filled gold tags (the portfolio), Founder/Contact as smaller outlined tags (secondary). Nodes are real links. Hidden below `lg` breakpoint in favor of plain hero copy.
- **Motif:** every product numbered (No. 01, No. 02...) in an editorial portfolio list on the home page
