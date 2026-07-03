# Kabul — Chocolate Superstore

A Next.js (App Router) site for Kabul, a chocolate superstore built around
Afghan flavor heritage — saffron, pistachio, rosewater, hazelnut — with a
Three.js hero animation.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- react-three-fiber + drei (Three.js) for the hero animation
- Framer Motion for scroll/entry animation

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. First build will fetch the Fraunces and Manrope
fonts from Google Fonts, so make sure you have an internet connection.

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.tsx      – fonts, metadata, root shell
  page.tsx         – assembles the 4 sections
  globals.css       – tokens, lattice-divider utility, reduced-motion handling
components/
  Hero.tsx          – headline + nav, wraps HeroScene
  HeroScene.tsx      – Three.js: gold-foil truffle, seal ring, orbiting hazelnuts
  Collections.tsx     – 4-item product category grid
  Heritage.tsx         – brand story split section
  CTAFooter.tsx         – bulk order CTA + footer
```

## Design tokens

Colors, fonts and the lattice-pattern motif are defined in
`tailwind.config.ts` and `app/globals.css`. Swap in real product photography
by replacing the gradient `swatch` classes in `Collections.tsx` and the
placeholder panel in `Heritage.tsx`.

## Notes

- The 3D scene is client-only (`dynamic(..., { ssr: false })`) since Three.js
  needs the browser.
- Phone numbers, address and social links in `Hero.tsx` and `CTAFooter.tsx`
  are placeholders — update with real details before shipping.
