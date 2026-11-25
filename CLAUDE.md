# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev`: local dev server (shows draft news, with a draft note)
- `npm run build`: static build to `dist/`
- `npm run preview`: preview the production build
- `npx astro check`: type-check `.astro`/`.ts` files (not wired into a script; requires `@astrojs/check`)

There is no test suite or linter. Verify changes with `npm run build`.

## Deployment

`.github/workflows/deploy.yml` runs `npm ci && npm run build` on Node 24 and publishes `dist/` to GitHub Pages at https://adrianciencia.github.io. It runs on every push to `main` (every commit to `main` goes live) and on a daily cron at 06:00 UTC, because deadlines, "closed" states and timeline progress are computed at build time.

## Architecture

Astro 5 static site (`output: 'static'`, strict TS), the personal academic site of an astrophysicist. English only, no client-side JavaScript except the GoatCounter analytics script (`BaseLayout.astro`, production only; click events via `data-goatcounter-click`). A homepage of sections links to one page per item.

**Content lives in two places:**
- Typed arrays in `src/data/*.ts`, each declared with `satisfies <Type>[]` against `src/types/content.ts`: `profile.ts` (name, bio, credential, social links, contact email), `research.ts` (research items with figure, readout, key figure) and `photography.ts`. `publications.ts` is currently empty and not imported anywhere. Adding a field means updating the type first.
- Content collections in `src/content.config.ts` (Markdown, zod schemas): `news`, `community`, `work`, `writing`. `community` and `work` share one schema (`title`, `summary`, `role`, `evidence`, `year`, `order`, `link`); the Markdown body is the item's page. `news` items are `kind: event | news`; published events must have `format` and `link` (enforced by `superRefine`). Drafts (`draft: true`) are built only in dev.

**Pages:**
- `src/pages/index.astro` renders the sections: News, Research, Community & Public Science, Writing, Photography, Other work. Writing and Photography (and their `TopNav` links) render only when they have entries; News only when there is something to feature or list.
- `research/[id].astro` (from `src/data/research.ts`), and `news/`, `community/`, `work/[id].astro` (from collections). The three collection pages share `src/components/EntryPage.astro` (title, meta, action button, facts ledger, timeline, image, body, closing row, previous/next pager).
- Homepage section ids (`news`, `research`, `community`, `other-work`, `writing`, `photography`) must stay in sync with the links in `src/components/TopNav.astro`.
- `sitemap.xml.ts` and `llms.txt.ts` are generated from the same data and collections, so new items are listed automatically. `public/robots.txt` is hand-written.

**News logic** (`src/lib/news.ts`, all evaluated at build time): `getNews()` picks the featured item (the soonest upcoming event, else the newest item from the last 60 days) and up to 3 others. `datedLine()` swaps `dateLabel` for `closedLabel` once `deadlinePassed()` (end of the day in Peru, UTC−5). Closed events drop their action link. `timelineSteps()` marks steps past/now/next/upcoming.

**Layout:** `BaseLayout.astro` holds the `<head>` (description, canonical, Open Graph/Twitter, optional JSON-LD, Google site verification), `TopNav`, `ProfileSidebar` and the footer. The homepage passes a schema.org `Person` (`personSchema` in `index.astro`). The `footerInvitation` prop drops the contact invitation on open event pages, which have their own closing row.

**Images:** in `public/images/{profile,research,news}/`, referenced by site-root path with explicit `width`/`height`. `src/lib/assets.ts` checks files at build time: `findResearchCover(id)` uses `/images/research/<id>-cover.<ext>` if it exists, and `responsiveSrcset()` builds a srcset from sibling `-600/-1100/-1536.webp` files when present. News share previews use a `-share.jpg` copy of the flyer when one exists.

**Styling:** one plain-CSS file, `src/styles/global.css`, driven by tokens on `:root` (colors, type scale, `--space-1…9`, `--measure: 38rem`, `--entry-width: 44rem`). Use the tokens rather than raw values. No CSS framework, no component-scoped styles. Breakpoints are 860px (sidebar collapses; inner pages hide the byline) and 560px.

## Design and product context

`DESIGN.md` (design system "The Annotated Plate", with sidecar `.impeccable/design.json`) and `PRODUCT.md` (audiences, positioning, constraints) are the source of truth for visual and content decisions. Key rules: Redshift Red (#a51d1d) is the only accent hue; square corners, hairline rules, no shadows; serif (Newsreader) for headings and claims, sans for metadata. Never invent facts, numbers or claims in site copy; ask instead. The comment block at the top of each community/work Markdown file is a write-up guide and never renders.
