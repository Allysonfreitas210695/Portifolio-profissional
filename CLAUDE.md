# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Next.js dev server at http://localhost:3000
- `npm run build` — production build
- `npm start` — serve the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`)

There is no test framework configured.

## Architecture

Single-page personal portfolio (pt-BR) built with **Next.js 16 App Router**, **React 19**, **Tailwind CSS 4**, **Framer Motion**, and **TypeScript**. The React Compiler is enabled in `next.config.ts` (`reactCompiler: true`) — do not add manual `useMemo` / `useCallback` for memoization unless profiling shows a need.

### Composition

`src/app/page.tsx` is the only route and assembles a fixed vertical sequence of section components from `src/components/`: `Navbar → Hero → (Trust Bar inline) → ProjectsSlider → About → Services → Experience → Education → (Contact CTA inline) → footer`. The contact CTA and footer live inline inside `page.tsx`, not as separate components. Section anchors (`id="contato"`, etc.) drive the navbar's smooth-scroll navigation.

### Styling system

Tailwind v4 is configured **entirely in CSS** via `@theme` in `src/app/globals.css` — there is no `tailwind.config.js`. Color tokens follow Material-style semantic naming (`background`, `surface-container-low/…/highest`, `on-surface`, `on-surface-variant`, `primary`, `secondary`, `outline-variant`) and font families are exposed as `font-headline` (Space Grotesk), `font-body` (Manrope), `font-label` (Inter). Fonts are loaded in `src/app/layout.tsx` via `next/font/google` and injected as CSS variables on `<html>`.

Custom utilities defined in `globals.css` (used across components): `glass-card`, `ambient-shadow`, `text-gradient` (shimmer animation), `text-mask`, `mesh-gradient`, `grainy-overlay` (applied to `<body>`), `bento-inner-shadow`. The site is dark-mode only (`className="dark"` is hard-coded on `<html>`).

### SEO / metadata

All SEO is driven by Next.js file conventions in `src/app/`:
- `layout.tsx` — global `metadata` export (OpenGraph, Twitter, robots, icons). `metadataBase` is `https://allysonfreitas.dev`; update it if the deploy URL changes.
- `icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx` — dynamic image generation via `next/og`.
- `sitemap.ts`, `robots.ts`, `manifest.ts` — generated route handlers.

When adding new top-level pages/sections, update `sitemap.ts` and consider whether `opengraph-image.tsx` needs adjusting.

### Path alias

`@/*` → `./src/*` (see `tsconfig.json`). Use it for all intra-project imports.

### Lint / format conventions

- `simple-import-sort` is enforced as an error — let it auto-fix on save rather than hand-ordering imports.
- Prettier uses `printWidth: 100`, double quotes, semicolons, trailing commas. `prettier-plugin-tailwindcss` auto-sorts class names.
