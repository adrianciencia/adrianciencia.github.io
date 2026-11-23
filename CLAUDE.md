# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — local dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — preview the production build
- `npx astro check` — type-check `.astro`/`.ts` files (not wired into a script; requires `@astrojs/check`)

There is no test suite or linter. Verify changes with `npm run build`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` on Node 24 and publishes `dist/` to GitHub Pages at https://adrianciencia.github.io. Every commit to `main` goes live.

## Architecture

Astro 5 static site (`output: 'static'`, strict TS) — a single-page personal academic site for an astrophysicist.

**Content is data, the page is the template.** All site content lives in typed arrays in `src/data/*.ts`, each declared with `satisfies <Type>[]` against the types in `src/types/content.ts`. `src/pages/index.astro` imports every data module and renders all sections (About, Research, Publications, Community, Building, Writing, Photography, Archive) in one file. To change content, edit the data file; to change presentation, edit `index.astro` / `global.css`. Adding a field means updating the type in `src/types/content.ts` first.

**Sections hide themselves when empty.** Rendering is conditional on data: Publications renders only if `publications.length > 0`; Writing and Photography render (and appear in `TopNav` via `showWriting`/`showPhotography` props) only when they have entries; optional fields (`href`, `role`, `status`, figure `src`) are guarded so placeholder items without links render as plain text. Community items are split by `category` (`feature` → single highlighted item, `initiative` → list, `outreach` → single item).

**Writing** is the only Astro content collection (`src/content.config.ts`): Markdown files in `src/content/writing/` with a zod schema (`title`, `summary`, `type`, `date`, `draft`, `featured`). Drafts are filtered out in `index.astro`. There are currently no per-post pages — entries are only listed on the homepage.

**Layout:** `TopNav` (anchor links to section ids) + `ProfileSidebar` (sticky, from `profile` data) + `.document-column`. Section `id`s in `index.astro` must stay in sync with `TopNav` links.

**Styling:** a single plain-CSS file, `src/styles/global.css`, driven by design tokens on `:root` (colors, type scale, `--space-1…9`, layout widths). Use the tokens rather than raw values. No CSS framework, no component-scoped styles.

**Static assets/SEO:** images live in `public/images/` and are referenced by absolute path from data files (with explicit `width`/`height`). SEO metadata, Open Graph tags and JSON-LD `Person` schema are hand-written in the `<head>` of `index.astro`; `public/sitemap.xml` and `robots.txt` are maintained by hand.
