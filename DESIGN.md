---
name: Adrian Díaz Espinoza
description: Personal academic site of an observational astrophysicist and community builder
colors:
  redshift-red: "#a51d1d"
  ink: "#171717"
  graphite: "#666666"
  slate-annotation: "#767676"
  plate-white: "#ffffff"
  hairline: "#e3e3e3"
typography:
  name:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "2.125rem"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  section:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(2rem, 1.5rem + 1.4vw, 2.75rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  plate:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.625rem, 1.3rem + 1vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  entry:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  bio:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.45
  annotation:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.45
  wordmark:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.6
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  role:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.4
  meta:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  none: "0px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  "9": "6rem"
components:
  text-link:
    textColor: "{colors.ink}"
  text-link-hover:
    textColor: "{colors.redshift-red}"
  nav-link:
    textColor: "{colors.graphite}"
    typography: "{typography.meta}"
  nav-link-hover:
    textColor: "{colors.redshift-red}"
  role-entry-title:
    textColor: "{colors.ink}"
    typography: "{typography.entry}"
  role-entry-role:
    textColor: "{colors.graphite}"
    typography: "{typography.role}"
  card:
    backgroundColor: "{colors.plate-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1rem 0 0"
  research-plate:
    backgroundColor: "{colors.plate-white}"
    rounded: "{rounded.none}"
    padding: "4rem 0 0"
---

# Design System: Adrian Díaz Espinoza

## Overview

**Creative North Star: "The Annotated Plate"**

The site is built like an astronomical plate with handwritten notes beside it. The evidence (a figure, a measured result, a named role) is the plate, and everything else is annotation: smaller, quieter and set beside it, never competing with it. A visitor should be able to read the plate alone and understand the claim, then read the annotations to see how it was earned.

The system is flat, white and ruled, with one strong exception. Headings, research questions and the sidebar bio are set in Newsreader, an editorial serif; data, roles and metadata stay in the platform sans. A two-column layout pins a portrait-and-identity sidebar beside a single document column. There are no shadows, radii, gradients or ornaments.

The voice is **editorial and bold**. Each research figure runs at full column width with its question set large above it and the summary as a caption below. The homepage reads like a blog front page: every News, Research, Community and Other work item is a card that opens its own page. Sections open with a large serif heading and no label above it.

**Key Characteristics:**
- Flat white surface; depth from hairline rules, never shadows.
- One accent, Redshift Red, shared with the portrait backdrop.
- Newsreader serif for headings, plates and the bio; system sans for body, roles and metadata.
- Two-column grids of hairline-framed cards; red appears as accent (roles, dates, hover), never as a surface.
- Sticky identity sidebar plus one document column; collapses to a single column on mobile.
- Evidence (figures, numbers, roles) leads; metadata recedes into grey.

## Colors

A monochrome plate with one saturated red: ink on white, greys for annotation, and red reserved for emphasis.

### Primary
- **Redshift Red** (#a51d1d): the single accent. It matches the portrait background, which ties the photograph to the type system. It marks roles and dates, the "Astrophysicist" line, card and link hover, text selection and the focus outline. It is never a background surface. Contrast on white is about 7.4:1.

### Neutral
- **Ink** (#171717): body text, headings, and links at rest.
- **Graphite** (#666666): secondary text such as the italic research question, nav links, roles and the sidebar status line (5.7:1 on white).
- **Slate Annotation** (#767676): the faintest legible text, used for the footer and link underlines at rest. At 4.5:1 it sits exactly on the AA floor, so never lighten it.
- **Plate White** (#ffffff): the only surface, and the text colour on the red skip link.
- **Hairline** (#e3e3e3): every divider and border on white (`1px solid`).

### Named Rules
**The One Red Rule.** Redshift Red is the only hue on the page apart from the research figures. Never add a second accent. Express emphasis through size, weight or more red, not another colour.

**The Accent-Only Rule.** Redshift Red is a voice, not a surface: roles, dates, hover and focus. No section, card or block is filled with it.

**The Annotation Floor Rule.** No text is lighter than Slate Annotation (#767676).

## Typography

**Display Font:** Newsreader (self-hosted variable WOFF2, weights 400–500, roman and italic; falls back to Georgia)
**Body Font:** system sans (-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, sans-serif)

**Character:** an editorial serif for anything that states or asks something (name, bio, section headings, research questions, entry titles) against a neutral instrument-like sans for evidence and annotation (summaries, roles, metadata). Newsreader runs at 500 with light negative tracking; the sans keeps 600 for roles and small headings. `font-synthesis: none` prevents faux weights. Greek letters (α, κ) fall back to Georgia inside serif runs.

### Hierarchy
- **Section** (Newsreader 500, clamp 2–2.75rem, 1.05): section h2s. It's the largest type on the page.
- **Plate** (Newsreader 500, clamp 1.625–2.125rem, 1.12): research questions-as-titles.
- **Name** (Newsreader 500, 2.125rem, 1.05): the sidebar h1, capped at 9ch so it stacks; 1.875rem below 560px.
- **Bio** (Newsreader 400, 1.0625rem, 1.45, ink): the two-sentence statement in the sidebar under the role line. It's the site's only self-description; there is no About section.
- **Entry** (Newsreader 500, 1.5rem, 1.15): card titles (research, community, other work).
- **Annotation** (Newsreader 400, 1.1875rem, 1.45): italic and Graphite for the plain-question line under each research title; roman and ink for the takeaway under each figure.
- **Wordmark** (Newsreader 500, 1.125rem): the name in the top bar.
- **Body** (sans 400, 1rem, 1.6): summaries, descriptions and list titles (600 for titles), capped at 38rem (about 75 characters).
- **Role** (sans 600, 0.875rem): role lines on cards and entry pages, in Redshift Red.
- **Meta** (sans 400, 0.8125rem): statuses, nav links, sidebar links and figure links.

### Named Rules
**The Plate-Scale Rule.** Inside a research plate, the question is the largest text, and status lines stay at Meta size.

**The No-Kicker Rule.** No label sits above a heading. Each section opens with its serif heading alone. The homepage has no About section; the sidebar bio carries the self-description. The page has no uppercase text at all; the sidebar's "Links" heading is visually hidden.

**The Serif States, Sans Proves Rule.** Claims and questions are set in serif; numbers, roles and metadata are set in sans.

## Layout

- **Container:** `min(73rem, 100% − 2 × gutter)`, with a fluid gutter of `clamp(1.6875rem, 7.5vw − 2.875rem, 3rem)`.
- **Desktop grid:** a 16rem sidebar beside a document column of at most 52.5rem, with a fluid gap of `clamp(3.5rem, 5vw, 4.5rem)` and 4rem top / 6rem bottom padding.
  - The sidebar sticks below the 4rem header and goes static when the viewport is shorter than 52rem.
- **Research plates:** stacked at every width. The question header comes first (max 40rem), then the figure at full column width (tall figures capped at 34rem), then the summary and status as a caption. Plates are separated by one hairline with 4rem on either side.
- **Homepage order:** News (one featured item and a short dated list; hidden when empty), then Research (two-column grid), Community (lead card plus three across), Other work (two-column grid), then Contact. Every card opens a page: `/research/<id>/`, `/news/<id>/`, `/community/<id>/`, `/work/<id>/`.
- **Project pages** (`/research/<id>/`) share the homepage shell through one layout. The article holds the full research plate. On phones the sidebar shrinks to a byline (small portrait, name, role).
- **Card grid:** two equal columns (gap 1.5rem); Community uses the lead-card variant. One column below 560px. Cards in a row stretch to equal height, and the footer line sits at the bottom.
- **Section rhythm:** sections are separated by a top hairline, with 3rem above the heading and 4rem below the content. Lists are hairline-ruled rows with 0.75rem vertical padding.
- **Breakpoints:**
  - 860px: single column. The sidebar becomes a compact intro: a 6.5rem portrait beside the name and role; the bio full-width below, then status; links in one row with the "Links" label hidden. The bio and the start of News fit on the first screen of a 390×844 phone.
  - 560px: tighter navigation and type.
  - 35rem: detailed lists stack.
  - 360px: header no longer sticky.
- **Touch:** every standalone link (nav, sidebar links, figure links) has at least a 2.75rem (44px) tap height. Inline links in running text are exempt.
- **Spacing scale:** 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4 and 6rem (`--space-1` to `--space-9`). Always use the tokens.

## Elevation & Depth

Fully flat. There are no box-shadows, layered surfaces or blur anywhere. Depth and grouping come only from the hairline rule (1px #e3e3e3) and from greyscale value: ink sits forward, Graphite and Slate Annotation recede. The sticky header separates itself with a bottom hairline, not a shadow.

### Named Rules
**The Ruled Plate Rule.** Separation is always a hairline or whitespace, never a shadow or a tinted card. Never stack two hairlines within one rhythm step: a list that ends in a rule is not followed by a section or footer rule.

### Images
- Every raster image ships resized WebP sources (`sources` + `sizes` in the data files) at about 1× and 2× its largest display width. The original PNG or JPG stays as the `src` fallback and as the "Open full figure" target. Figures keep explicit width and height so nothing shifts while they load.

## Shapes

Square everything: zero radius on images, figures, rules and focus rings. The portrait is a 2:3 rectangle with a hairline border. Arrows (↗) mark external links and are `aria-hidden`. Lines and rectangles are the system's only geometry, like the frame and grid of a photographic plate.

## Components

### Links
- **Text link:** inherits ink and has a 1px underline in Slate Annotation, offset 0.22em. On hover, both text and underline turn Redshift Red over 140ms.
- **Focus:** a 2px solid Redshift Red outline, offset 3px, on every link.
- **External link:** label followed by ↗. On entry pages it closes the article as an ink link with a red underline; in lists it sits inline at Meta size.

### Skip link
- The first focusable element on the page: "Skip to content", hidden above the viewport until focused. It then appears top-left in Redshift Red with white sans 600 text, a 44px tap height and a 2px ink focus outline. It moves focus to the document column.

### Navigation
- Sticky 4rem white header with a bottom hairline. The name (wordmark) sits left, in Newsreader 500 / 1.125rem.
- Nav links (News when there is published news, Research, Community, Other work, Contact, plus Writing and Photography when they have content) point at `/#section`, so they work from every page. On entry and project pages the current section's link gets `aria-current` and shows in ink with a 2px red underline.
- Links are Graphite, Meta size, weight 500, no underline, each with a 44px tap height. On hover or focus they turn Redshift Red and gain a 1px underline.
- On mobile the links wrap left-aligned under the wordmark. Below 360px the header stops being sticky so a two-row nav doesn't eat the screen.

### Featured item
- The top of News, using the card frame at a larger scale: a 3:2 image beside a Plate-size serif title, then a red meta line (date · format · place), and the summary in serif. Without an image it runs text-only at full width. It stacks on phones. Never a carousel.
- **Slot rules:** drafts never reach the homepage. A published event must have a `format` and a `link` (how to join), or the build fails, so the slot can never show "to be confirmed". `location` is a place, never a status.

### News list
- Ruled rows with a short date (Meta, tabular) in a 6.5rem left column, then a sans 600 title and a Graphite summary. Up to three rows.

### Card (signature)
- One card for research, community and other work: a closed 1px hairline frame (#e3e3e3) with 1.5rem padding, square corners, no fill and no shadow, like a mounted plate. On hover or focus the frame darkens to ink and the title turns red.
- Inside, in order: an optional 3:2 image flush with the frame's top and sides; the Entry-size serif title; an optional red role line; the summary in Newsreader 1.0625rem ink (every card states its point the same way); and an optional footer line in sans 500 ink (research status, or a community/work `evidence` line such as "Since 2021 · 40 students").
- **Images:** commissioned illustrations fill the frame (`cover`, captioned "Illustration"). Scientific figures are shown whole (`contain`, 0.75rem inset) so no axis labels are cut, with no caption.
- **No "Read more":** the frame and the stretched title link signal the click. The title link covers the whole card, so each card is one click target and one tab stop, and focus draws a 2px red outline around it. Each card has an id (`research-<id>`, `community-<id>`, `work-<id>`) so "back" links return to it.
- **Lead card:** the first Community card (Derívate) spans the full row, with a Plate-size title and a 1.1875rem summary capped at 38rem. The rest sit three across beneath it (a six-column grid; ordinary cards span two).
- Illustrations are commissioned in the site's two-colour style and always labelled; real figures live on project pages.

### Entry page
- News, community and other-work pages share one template: "← back" link (to the exact card), serif Section-size title, a red meta line (date · format · place, or role), an optional image, the Markdown body at 1.0625rem, an optional external link, and Previous/Next links within the collection. Each entry's Markdown file is its page; a comment block in each file's frontmatter lists what a good write-up covers.

### Research plate (signature)
- A serif question title and an italic serif annotation, followed by the figure at full column width.
- **Plate caption:** a hairline-topped annotation line directly under the figure. It carries the plate number ("Plate 1", Newsreader italic, ink), the status in Meta Graphite, and "Open full figure ↗" pushed to the right with a 44px tap height. Plate numbers are captions below the evidence, never labels above a heading.
- **Readout (phones only):** when a figure's values are too small to read at phone width, a ruled two-column table of its key values (label, then value in tabular figures) sits above the caption. It's hidden above 560px, where the figure itself is legible.
- Then the takeaway (Newsreader roman, 1.1875rem, ink): one plain-English sentence stating the result, followed by the sans technical summary.

### Ruled list (news list, writing, sidebar links)
- Rows have hairlines above and below and 0.75rem vertical padding.
- Each row has a 600-weight sans title at 1rem and a Meta description in Graphite.

## Do's and Don'ts

### Do:
- **Do** let the evidence (figure, number or named role) be the largest element in its block, with annotation at Meta size or smaller.
- **Do** use Redshift Red (#a51d1d) as the only accent: roles, dates, hover, focus and selection.
- **Do** separate content with a single 1px #e3e3e3 hairline or a spacing token from 0.25 to 6rem.
- **Do** keep every corner square and every surface Plate White.
- **Do** set headings, questions and the bio in Newsreader, and evidence and metadata in the sans.
- **Do** cap running text at 38rem (about 75 characters) and keep the 2px Redshift Red focus outline on everything interactive.

### Don't:
- **Don't** add shadows, rounded corners, gradients, tinted card fills, or red-filled sections. Card frames are hairline only.
- **Don't** introduce a second accent hue.
- **Don't** set text lighter than #767676.
- **Don't** put any label or eyebrow above a heading.
- **Don't** stack two hairlines in one gap.
