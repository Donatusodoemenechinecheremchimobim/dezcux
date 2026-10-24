# Goldenmind Psychiatry — 3D motion site

## 1. Setup

```bash
npx create-next-app@latest goldenmind-psychiatry --js --tailwind --eslint --app --src-dir=false --import-alias "@/*"
cd goldenmind-psychiatry

npm install three @react-three/fiber @react-three/drei gsap lenis
```

Then drop in the files from this project (overwriting the scaffold's
`app/`, and adding `components/` + `lib/`). `tailwindcss`/`postcss`/
`autoprefixer` are already installed by `create-next-app --tailwind`;
if you're wiring Tailwind in manually instead, also run:

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npm run dev
```

## 2. A note on the color palette

`https://goldd-orpin.vercel.app/#portal` renders client-side, so a plain
fetch only returns metadata (page title, meta description) — not computed
CSS. Rather than guess at exact hex values, `tailwind.config.js` defines a
close-match **gold-on-obsidian** palette built from the brand name itself
(`ink` #0b0a08 background, `gold` 400/500 #d4ac56 / #c89a3f accents, `cream`
#f6efe0 text). Every color used in the 3D lighting, materials, and UI pulls
from these same tokens, so if you open the reference site's DevTools and
grab exact hex codes, you only need to update them in one place
(`tailwind.config.js`) — `Pill.jsx` and `Experience.jsx` currently hardcode
the same hex strings for WebGL materials (Tailwind classes can't reach into
Three.js props), so update both when you swap values.

## 3. Architecture at a glance

- **One persistent `<Canvas>`** (`Experience.jsx`), `fixed inset-0`, behind
  all HTML content, `pointer-events-none` so clicks/scroll pass through.
  The pill is never re-mounted per section — it travels continuously.
- **`lib/pillState.js`** is a plain mutable object, not React state. GSAP
  writes target numbers into it; `Pill.jsx` reads it inside `useFrame` and
  damps toward it every frame. This keeps scroll-driven 3D motion off the
  React render cycle entirely — critical for 60fps scroll-jacking.
- **`useScrollChoreography.js`** is the single GSAP ScrollTrigger timeline
  (`scrub: 1`) that maps the whole page's scroll range to four acts
  (Hero → Philosophy → Services → Portal), each tweening `pillState`.
- **`SmoothScroll.jsx`** wires Lenis's eased scroll into GSAP's own ticker
  so ScrollTrigger and the smooth-scroll never drift out of sync.
- **Mobile responsiveness** happens at two levels:
  1. `gsap.matchMedia()` inside `useScrollChoreography.js` builds a
     genuinely different timeline below 768px (pill's `x` stays pinned to
     `0` instead of swinging ±2.4 between text columns).
  2. `useIsMobile.js` drives one-off imperative Canvas config in
     `Experience.jsx` (camera `fov`/position, capped `dpr`) that lives
     outside GSAP's reach.
  Each section also gets a `max-md:` scrim (`bg-ink/55` + `backdrop-blur`)
  behind its text block, since on mobile the full-bleed Canvas sits behind
  the copy rather than beside it — this guarantees legibility regardless of
  where the pill currently is.

## 4. Where to go next

- Swap the procedural capsule geometry for a sculpted glTF if you want a
  fully custom pill silhouette — `Pill.jsx`'s `<capsuleGeometry>` can be
  replaced with `useGLTF()` without touching the choreography.
- `Environment preset="studio"` is a placeholder HDRI; a custom-baked HDRI
  in the gold/cream tones will read even more premium.
- Add `@react-three/postprocessing` (Bloom + Vignette) for an extra layer
  of glow around the pill's gold core if you want to push the "soft-
  rendered, high-end" feel further.
