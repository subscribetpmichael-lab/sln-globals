# SLN GLOBALS — Import / Export Business Website

React + Vite + Tailwind CSS v4 single-page marketing site for **SLN GLOBALS**
(proprietor Omkaram Sathwik Raju, Parkal, Hanumakonda — Telangana). Trading
three verticals: **Indian spices, packaged drinking water, pharmaceuticals**.
GSTIN 36OIFPS8030B1Z2 · commercial launch 20 October 2026.

## Run

```bash
npm install   # first time only
npm run dev   # dev server → http://localhost:5173
npm run build # production build → dist/
npm run preview
```

## Deploy — GitHub Pages (free)

Automated: push to `main` and the workflow (`.github/workflows/deploy.yml`)
builds with `/sln-globals/` base and publishes to Pages.
First time only: create a **public** repo `sln-globals` on GitHub, then
`git push -u origin main`, and set *Settings → Pages → Source: GitHub
Actions* (if not prompted automatically).

## Structure

- `src/data.js` — all site content in one place (products, origins, ports, certificates, company info)
- `src/index.css` — Tailwind theme (brand navy + amber accent), reusable classes (`btn-primary`, `eyebrow`, `dot-grid`, etc.)
- `src/components/`
  - `Navbar` — sticky glass nav with scroll-tracking active link + mobile menu
  - `Hero` — headline, live-route visual, shipping ticker, stats strip
  - `About` — story + "why choose us" grid + founder promise banner
  - `Products` — 6 category tabs × export listings with HS codes, packing, MOQ
  - `SourcingMap` — ⭐ STANDOUT: interactive rotating 3D-style globe (see below)
  - `Process` — 6-step export workflow cards
  - `Certificates` — IEC / FSSAI / APEDA / Spices Board / Udyam / GST cards + detail modal
  - `Contact` — quote-enquiry form (opens pre-filled email), info cards, WhatsApp
  - `Footer`

## The standout: Global Sourcing Globe (`SourcingMap.jsx`)

An **orthographic globe** (d3-geo + world-atlas 110m land data) with India
highlighted and 8 pulsing **origin clusters** (Kashmir, Punjab, Kutch, Nashik,
Konkan, Guntur, Coorg, Assam). Great-circle **sea lanes** with animated comet
streaks run from Nhava Sheva to 6 ports (New York, Felixstowe, Hamburg,
Jebel Ali, Singapore, Sydney).

Interactions (PC + mobile):

- **Drag to spin** — mouse rotates freely on both axes; on phones vertical
  page-scroll stays native (`touch-action: pan-y`) while a horizontal swipe
  spins the globe
- **Tap any country marker / chip / pill** — the globe animates ("flies") to
  that destination, shortest-path around the world
- **Auto-spin** when idle (respects `prefers-reduced-motion`), pauses while
  dragging
- Origin list chips swap the selected sourcing region's products, season,
  MOQ and exit port in the side panel

## Customising

1. Edit `src/data.js` — company name, phone/WhatsApp (`whatsapp` field),
   products, origins, certificates, stats.
2. The real GST certificate (`src/assets/sln-globals-gst.pdf`) is displayed
   in `Certificates.jsx` via viewer + download. Add further scanned licences
   to `src/assets/` and register them in that file's `FILES` map.
3. Brand colours live in `@theme` in `src/index.css` (`--color-brand-*`, `--color-accent-*`).
