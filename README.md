# CCEG Website

Marketing site for the Centre for Citizenship, Enterprise & Governance, built with [Astro](https://astro.build). Implements the "Crimson" design (`design/_src-site-red.html`) from the CCEG Claude Design project.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `http://localhost:4321`        |
| `npm run build`   | Production build to `./dist/`                |
| `npm run preview` | Preview the production build locally         |

## Two editions

The site ships two parallel versions of the landing page:

- **Crimson** (dark) — `/` — layout `BaseLayout.astro`, components in `src/components/`, tokens in `src/styles/global.css`.
- **Blush** (light pink) — `/blush/` — layout `BlushLayout.astro`, components in `src/components/blush/`, tokens in `src/styles/blush.css`.

They share nothing but the fonts, so each can evolve independently.

## Structure

```
src/
  layouts/BaseLayout.astro   # Crimson: <head>, fonts, ambient background, page shell
  layouts/BlushLayout.astro  # Blush: light shell, same enhancement script
  components/                # Crimson: one component per page section
  components/blush/          # Blush: header/menu, hero, process, stats, CTA, footer
  pages/index.astro          # Crimson home page
  pages/blush/index.astro    # Blush home page
  styles/global.css          # Crimson design tokens, base styles, shared keyframes
  styles/blush.css           # Blush design tokens, base styles, shared keyframes
public/                      # favicon, robots.txt (copied verbatim to dist)
design/                      # Reference design artboards (incl. design/canvas/ blush exploration)
```

## Conventions

- Design tokens (colors, fonts, spacing) are CSS custom properties in `src/styles/global.css` — use `var(--red)`, `var(--pad)`, etc., never hard-coded values.
- Section-specific styles are scoped `<style>` blocks in each component. Shared `@keyframes` live in `global.css` (scoped keyframes get renamed by Astro).
- The site ships zero JavaScript except the mobile nav toggle in `SiteHeader.astro`.
- All animations have `prefers-reduced-motion` fallbacks.

## Deploying

`npm run build` produces a fully static site in `dist/` — deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Update `site` in `astro.config.mjs` to the production domain before go-live so canonical URLs and the sitemap are correct.
