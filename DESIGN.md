---
name: Adrian Díaz Espinoza
description: Personal academic site of an observational astrophysicist and community builder
colors:
  redshift-red: "#a51d1d"
  redshift-red-deep: "#741515"
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
  card:
    backgroundColor: "{colors.plate-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
  primary-action:
    backgroundColor: "{colors.redshift-red}"
    textColor: "{colors.plate-white}"
    rounded: "{rounded.none}"
    padding: "0 2rem"
    height: "3rem"
  primary-action-hover:
    backgroundColor: "{colors.redshift-red-deep}"
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
- **Redshift Red** (#a51d1d): the single accent. **Redshift Red Deep** (#741515) is its hover state on the primary action only. It matches the portrait background, which ties the photograph to the type system. It marks roles and dates, the "Astrophysicist" line, card and link hover, text selection and the focus outline. It is never a background surface. Contrast on white is about 7.4:1.

### Neutral
- **Ink** (#171717): body text, headings, and links at rest.
- **Graphite** (#666666): secondary text such as the italic research question, nav links, roles and the sidebar status line (5.7:1 on white).
- **Slate Annotation** (#767676): the faintest legible text, used for the footer and link underlines at rest. At 4.5:1 it sits exactly on the AA floor, so never lighten it.
- **Plate White** (#ffffff): the only surface, and the text colour on the red skip link.
- **Hairline** (#e3e3e3): every divider and border on white (`1px solid`).

### Named Rules
**The One Red Rule.** Redshift Red is the only hue on the page apart from the research figures. Never add a second accent. Express emphasis through size, weight or more red, not another colour.

**The Accent-Only Rule.** Redshift Red is a voice, not a surface: roles, dates, hover and focus. No section, card or block is filled with it. The one exception is the primary action button (e.g. "Apply now"), and only for something the visitor can do now.

**The Annotation Floor Rule.** No text is lighter than Slate Annotation (#767676).

## Typography

**Display Font:** Newsreader (self-hosted variable WOFF2, weights 400–500, roman and italic; falls back to Georgia)
**Body Font:** system sans (-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, sans-serif)

**Character:** an editorial serif for anything that states or asks something (name, bio, section headings, research questions, entry titles) against a neutral instrument-like sans for evidence and annotation (summaries, roles, metadata). Newsreader runs at 500 with light negative tracking; the sans keeps 600 for roles and small headings. `font-synthesis: none` prevents faux weights. Greek letters (α, κ) fall back to Georgia inside serif runs.

### Hierarchy
- **Section** (Newsreader 500, clamp 2–2.75rem, 1.05): section h2s. It's the largest type on the page.
- **Plate** (Newsreader 500, clamp 1.625–2.125rem, 1.12): research questions-as-titles.
- **Name** (Newsreader 500, 2.125rem, 1.05): the sidebar h1. The given name sits on its own line above the surnames, and the two surnames ("Díaz Espinoza") never break apart, anywhere on the site. Below 560px it scales from 1.5rem up to 1.875rem so the surnames fit at 320px.
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
- **Homepage order:** News (one featured item and a short dated list; hidden when empty), then Research (two-column grid), Community (2×2, or a lead card plus three across once Derívate has evidence), Other work (a ruled list), then the footer invitation. Every card opens a page: `/research/<id>/`, `/news/<id>/`, `/community/<id>/`, `/work/<id>/`.
- **Project pages** (`/research/<id>/`) share the homepage shell through one layout. The article holds the full research plate. On phones inner pages show no byline at all (no photo or name); the top-bar name identifies the site. Desktop keeps the full sidebar.
- **Phone image strips:** below 560px, card images and the featured news image use a 2:1 strip to shorten the scroll.
- **Card grid:** two equal columns (gap 1.5rem); Community switches to the lead-card variant only once Derívate has an `evidence` line. One column below 560px. Cards in a row stretch to equal height, and the footer line sits at the bottom.
- **Section rhythm:** sections are separated by a top hairline, with 3rem above the heading and 4rem below the content. Lists are hairline-ruled rows with 0.75rem vertical padding.
- **Breakpoints:**
  - 860px: single column. On the homepage the sidebar becomes a compact intro: a square 6.5rem portrait beside the name and role, the bio full-width below, the status condensed to one line (credential · location), then the social icons and handle on one row. The bio and the featured news fit on the first screen of a 360–390px phone. Inner pages show no sidebar at all on phones. The header splits so only the nav row stays pinned.
  - 560px: tighter navigation and type.
  - 35rem: detailed lists stack.
- **Touch:** every standalone link (nav, sidebar links, figure links) has at least a 2.75rem (44px) tap height. Inline links in running text are exempt.
- **Spacing scale:** 0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4 and 6rem (`--space-1` to `--space-9`). Always use the tokens.

## Elevation & Depth

Fully flat. There are no box-shadows, layered surfaces or blur anywhere. Depth and grouping come only from the hairline rule (1px #e3e3e3) and from greyscale value: ink sits forward, Graphite and Slate Annotation recede. The sticky header separates itself with a bottom hairline, not a shadow.

### Named Rules
**The Ruled Plate Rule.** Separation is always a hairline or whitespace, never a shadow or a tinted card. Never stack two hairlines within one rhythm step: a list that ends in a rule is not followed by a section or footer rule.

### Images
- Every raster image ships resized WebP sources (`sources` + `sizes` in the data files) at about 1× and 2× its largest display width. The original PNG or JPG stays as the `src` fallback and as the "Open full figure" target. Figures keep explicit width and height so nothing shifts while they load.

## Shapes

Square everything: zero radius on images, figures, rules and focus rings. The portrait is shown square (1:1, cropped from the 2:3 photo with `object-position: 50% 30%` so the face sits in the visual centre) with a hairline border. Arrows (↗) mark external links and are `aria-hidden`. Lines and rectangles are the system's only geometry, like the frame and grid of a photographic plate.

## Components

### Links
- **Text link:** inherits ink and has a 1px underline in Slate Annotation, offset 0.22em. On hover, both text and underline turn Redshift Red over 140ms.
- **Focus:** a 2px solid Redshift Red outline, offset 3px, on every link.
- **External link:** label followed by ↗ (`aria-hidden`), with visually hidden "(opens …)" text. On entry pages an entry's main external link is an action button (see Entry page); in lists and body text it stays an inline link.

### Skip link
- The first focusable element on the page: "Skip to content", hidden above the viewport until focused. It then appears top-left in Redshift Red with white sans 600 text, a 44px tap height and a 2px ink focus outline. It moves focus to the document column.

### Sidebar credential
- The highest degree and institution ("MSc in Astronomy, University of Wisconsin–Madison") opens the status block in ink, sans 500, above the Graphite research status and location.
- Below 860px the homepage status condenses to one Graphite line (credential · location). The research status hides there because the bio already names JWST, and the social icons and handle share one row. This keeps the featured news on the first screen of a 360–390px phone.

### Social links
- A row of five 20px filled glyphs in the sidebar: email, GitHub, LinkedIn, Instagram and X. They're Graphite and turn Redshift Red on hover or focus, each inside a 44px tap target. The shared handle (@adrianciencia) follows them in sans 0.875rem: below the row on desktop (the sidebar is too narrow), on the same row on phones.
- The glyphs are inline SVG in `SocialIcon.astro` (Simple Icons, CC0; the envelope is drawn to match), never icon fonts or emoji. Each link's accessible name includes the platform and handle.

### Navigation
- Sticky 4rem white header with a bottom hairline. The name (wordmark) sits left, in Newsreader 500 / 1.125rem.
- Nav links (News when there is published news, Research, Community, Other work, plus Writing and Photography when they have content) point at `/#section`, so they work from every page. On entry and project pages the current section's link gets `aria-current` and shows in ink with a 2px red underline.
- Links are Graphite, Meta size, weight 500, no underline, each with a 44px tap height. On hover or focus they turn Redshift Red and gain a 1px underline.
- On the phone homepage the top-bar name is hidden (the sidebar's large name is the identity there), so the pinned nav row is the first thing on screen. On inner pages it stays as the site name and home link. Desktop is unchanged.
- Below 860px the header splits: the wordmark scrolls away with the page and only the nav row (about 45px, white, bottom hairline) stays pinned, at every phone width. Anchor targets (sections, cards, Other work rows, footer) offset 4rem to clear it. The wordmark keeps a 44px tap height.

### Featured item
- The top of News, using the card frame at a larger scale: a 3:2 image beside a Plate-size serif title, then the meta: the date line in red sans 600 (optional label such as "Applications close", date and time), with format · place on the next line in Graphite 400, and the summary in serif. On phones the text sits above the image. Without an image it runs text-only at full width. It stacks on phones. Never a carousel.
- **Slot rules:** drafts never reach the homepage. A published event must have a `format` and a `link` (how to join), or the build fails, so the slot can never show "to be confirmed". `location` is a place, never a status.

### News list
- Ruled rows with a short date (Meta, tabular) in a 6.5rem left column, then a sans 600 title and a Graphite summary. Up to three rows.

### Card (signature)
- One card for research, community and other work: a closed 1px hairline frame (#e3e3e3) with 1.5rem padding, square corners, no fill and no shadow, like a mounted plate. On hover or focus the frame darkens to ink and the title turns red.
- Inside, in order: an optional 3:2 image flush with the frame's top and sides (its credit, e.g. "Illustration", goes in the footer line, never between image and title); the Entry-size serif title; an optional red role line; the summary in Newsreader 1.0625rem ink (every card states its point the same way); and an optional footer line in sans 500 ink (research status, or a community/work `evidence` line such as "Since 2021 · 40 students").
- **Images:** commissioned illustrations fill the frame (`cover`, credited "Illustration" in the footer line). Scientific figures are shown whole (`contain`, 0.75rem inset) so no axis labels are cut, with no caption.
- **No "Read more":** the frame and the stretched title link signal the click. The title link covers the whole card, so each card is one click target and one tab stop, and focus draws a 2px red outline around it. Each card has an id (`research-<id>`, `community-<id>`, `work-<id>`) so "back" links return to it.
- **Lead card:** the first Community card (Derívate) becomes a lead only once it has an `evidence` line. It then spans the full row, with a Plate-size title and a 1.1875rem summary capped at 38rem, and the rest sit three across beneath it. Until then all four cards sit 2×2, so a large card never holds the least content.
- **Key figure:** a research card without an illustration leads with its result as one number in the image slot. The number is sans 500, clamp 2–2.75rem, tabular figures, with a Graphite 0.875rem label beneath and a hairline below, and it turns red on hover. In reading order it follows the title. Thumbnails of full plots are not used; the figure lives on the project page.
- Illustrations are commissioned in the site's two-colour style and always labelled; real figures live on project pages.

### Entry page
- News, community and other-work pages share one template: "← back" link (to the exact card), serif Section-size title, a red meta line (date · format · place, or role), an optional image, the Markdown body at 1.0625rem, an optional external link, and Previous/Next links within the collection. Each entry's Markdown file is its page; a comment block in each file's frontmatter lists what a good write-up covers.

- Markdown subheads inside an entry are Entry-size serif (not section size); bullet markers are Graphite and numbered markers ink 600, so red stays reserved for the deadline, the action and "Now".
- **Main action:** when an entry has a link (apply, visit), it appears right under the meta line. Only events (primary actions) repeat it in a closing row at the end, in two lines: the button first on the left edge with the deadline beside it, then one quiet Graphite line with the flyer download (file type and size) · "Questions?" email. Event pages then end on the © line only: the site's generic footer invitation is dropped so the email isn't repeated. On event pages any image sits after the timeline so the facts and dates stay together.
- **Primary action:** for events (apply, register), the action is a filled Redshift Red button with white sans 600 text, square, 3rem tall, deepening to #741515 on hover, with a 2px ink focus ring. Other entries (e.g. "Visit Derívate") use the outlined secondary style. The action also closes the article in a ruled row with a one-line note such as the deadline.
- **Deadlines:** an item with `closedLabel` treats its date as a deadline that ends at midnight Peru time. Once it has passed, the label switches (e.g. "Applications closed 6 December 2026"), the action and closing row are withdrawn, and a plain 600-weight sentence takes the button's place. The site rebuilds daily (scheduled deploy at 06:00 UTC) so this happens on time.
- **External links:** actions and body links that leave the site carry visually hidden "(opens Google Forms)"-style text; the ↗ is `aria-hidden`.
- **Key facts:** an optional one-column ruled ledger under the header, on the timeline's grid: an 11rem label column (Graphite 0.875rem) and the value (sans 500 ink), one rule per row. Facts and timeline read as one table, and labels stack above values on phones. Keep it to about five rows and don't repeat facts in the body. When facts are present, the red meta line shows only the date.
- **Timeline:** an optional ruled list of dated steps (date column 11rem, tabular), worked out at build time. Past steps are Slate Annotation (with hidden "(done)" text). The step under way is red and 600 with a "· Now" flag, or the next one with "· Next" if nothing is under way. Later steps are ink. Dates use `<time datetime>`, and the list keeps `role="list"` so Safari still announces it. On phones the date stacks above the step.
### Research plate (signature)
- A serif question title and an italic serif annotation, followed by the figure at full column width.
- **Plate caption:** a hairline-topped annotation line directly under the figure. It carries the plate number ("Plate 1", Newsreader italic, ink), the status in Meta Graphite, and "Open full figure ↗" pushed to the right with a 44px tap height. Plate numbers are captions below the evidence, never labels above a heading.
- **Readout (phones only):** when a figure's values are too small to read at phone width, a ruled two-column table of its key values (label, then value in tabular figures) sits above the caption. It's hidden above 560px, where the figure itself is legible.
- Then the takeaway (Newsreader roman, 1.1875rem, ink): one plain-English sentence stating the result, followed by the sans technical summary.

### Footer
- Entry pages are a deliberately narrow article: structural blocks (header, facts, timeline, image, closing row, footer) share `--entry-width: 44rem`, and running text stays at the 38rem reading measure. A full-column (52.5rem) version was tried and rejected. On entry pages the footer aligns to the 44rem entry column, so every block shares one right edge (running text stays at the narrower reading measure on purpose).
- Every page except an open event ends with one quiet invitation line (Graphite, sans 0.875rem, capped at 38rem) naming reasons to write, with the email as its only link (ink, 500, red underline), then the © line in Slate Annotation. A hairline sits above it. It replaces a separate Contact section: the sidebar already carries the email and social icons, and the footer keeps a way to write at the end of long phone scrolls.

### Other work list
- A ruled list instead of cards. Each row has a serif title at 1.1875rem that opens the item's page (the link covers the row), then a Graphite role line and an optional sans summary. When any item has a `year`, a 6.5rem year column appears on the left. The last row drops its rule because the footer's rule closes the list.

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
- **Don't** add shadows, rounded corners, gradients, tinted card fills, or red-filled sections (the primary action button is the only red fill). Card frames are hairline only.
- **Don't** introduce a second accent hue.
- **Don't** set text lighter than #767676.
- **Don't** put any label or eyebrow above a heading.
- **Don't** stack two hairlines in one gap.
