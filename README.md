# CCEG Website

Marketing site for the Centre for Citizenship, Enterprise & Governance, built with [Astro](https://astro.build). Implements the "Crimson" design (`design/_src-site-red.html`) from the CCEG Claude Design project.

## Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `http://localhost:4321`        |
| `npm run build`   | Production build to `./dist/`                |
| `npm run preview` | Preview the production build locally         |

## Structure

```
src/
  layouts/BaseLayout.astro   # <head>, fonts, ambient background, page shell
  components/                # One component per page section
  pages/index.astro          # Home page
  styles/global.css          # Design tokens, base styles, shared keyframes
public/                      # favicon, robots.txt (copied verbatim to dist)
design/                      # Reference design artboards
```

## Conventions

- Design tokens (colors, fonts, spacing) are CSS custom properties in `src/styles/global.css` — use `var(--red)`, `var(--pad)`, etc., never hard-coded values.
- Section-specific styles are scoped `<style>` blocks in each component. Shared `@keyframes` live in `global.css` (scoped keyframes get renamed by Astro).
- The site ships zero JavaScript except the mobile nav toggle in `SiteHeader.astro`.
- All animations have `prefers-reduced-motion` fallbacks.

## Deploying

`npm run build` produces a fully static site in `dist/` — deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages). Update `site` in `astro.config.mjs` to the production domain before go-live so canonical URLs and the sitemap are correct.
