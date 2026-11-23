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
  on-red-white: "#ffffff"
  on-red-blush: "#f3cfcd"
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
  lead:
    fontFamily: "Newsreader, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.5vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.4
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
  label:
    fontFamily: "-apple-system, BlinkMacSystemFont, Helvetica Neue, Segoe UI, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
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
  community-band:
    backgroundColor: "{colors.redshift-red}"
    textColor: "{colors.on-red-white}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 1rem + 2.5vw, 3rem)"
  research-plate:
    backgroundColor: "{colors.plate-white}"
    rounded: "{rounded.none}"
    padding: "4rem 0 0"
---

# Design System: Adrian Díaz Espinoza

## Overview

**Creative North Star: "The Annotated Plate"**

The site is built like an astronomical plate with handwritten notes beside it. The evidence (a figure, a measured result, a named role) is the plate, and everything else is annotation: smaller, quieter and set beside it, never competing with it. A visitor should be able to read the plate alone and understand the claim, then read the annotations to see how it was earned.

The system is flat, white and ruled, with one strong exception. Headings, research questions and the About lede are set in Newsreader, an editorial serif; data, roles and metadata stay in the platform sans. A two-column layout pins a portrait-and-identity sidebar beside a single document column. There are no shadows, radii, gradients or ornaments.

The voice is **editorial and bold**. Each research figure runs at full column width with its question set large above it and the summary as a caption below. Community leadership sits in a solid Redshift Red band, the page's single loud moment. Sections open with a large serif heading and no label above it.

**Key Characteristics:**
- Flat white surface; depth from hairline rules, never shadows.
- One accent, Redshift Red, shared with the portrait backdrop.
- Newsreader serif for headings, plates and the lede; system sans for body, roles and metadata.
- One Redshift Red band (Community) as the page's structural peak.
- Sticky identity sidebar plus one document column; collapses to a single column on mobile.
- Evidence (figures, numbers, roles) leads; metadata recedes into grey.

## Colors

A monochrome plate with one saturated red: ink on white, greys for annotation, and red reserved for emphasis.

### Primary
- **Redshift Red** (#a51d1d): the single accent. It matches the portrait background, which ties the photograph to the type system. It fills the Community band and appears on the "Astrophysicist" role line, link hover, text selection and the focus outline. Contrast on white is about 7.4:1.

### Neutral
- **Ink** (#171717): body text, headings, and links at rest.
- **Graphite** (#666666): secondary text such as the italic research question, nav links, roles and sidebar descriptors (5.7:1 on white).
- **Slate Annotation** (#767676): the faintest legible text, used for the footer and link underlines at rest. At 4.5:1 it sits exactly on the AA floor, so never lighten it.
- **Plate White** (#ffffff): the page surface, and the text colour inside the red band.
- **Red-Band Blush** (#f3cfcd): secondary text, roles and link underlines inside the red band (5.2:1 on Redshift Red).
- **Hairline** (#e3e3e3): every divider and border on white (`1px solid`). Inside the band, dividers are white at 30% opacity.

### Named Rules
**The One Red Rule.** Redshift Red is the only hue on the page apart from the research figures. Never add a second accent. Express emphasis through size, weight or more red, not another colour.

**The One Band Rule.** Only one section is set on solid red: Community. A second band would cancel the first.

**The Annotation Floor Rule.** No text is lighter than Slate Annotation (#767676) on white, or Red-Band Blush on red.

## Typography

**Display Font:** Newsreader (self-hosted variable WOFF2, weights 400–500, roman and italic; falls back to Georgia)
**Body Font:** system sans (-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, sans-serif)

**Character:** an editorial serif for anything that states or asks something (name, section headings, research questions, the About lede, entry titles) against a neutral instrument-like sans for evidence and annotation (summaries, roles, metadata). Newsreader runs at 500 with light negative tracking; the sans keeps 600 for roles and small headings. `font-synthesis: none` prevents faux weights. Greek letters (α, κ) fall back to Georgia inside serif runs.

### Hierarchy
- **Section** (Newsreader 500, clamp 2–2.75rem, 1.05): section h2s. It's the largest type on the page.
- **Plate** (Newsreader 500, clamp 1.625–2.125rem, 1.12): research questions-as-titles.
- **Name** (Newsreader 500, 2.125rem, 1.05): the sidebar h1, capped at 9ch so it stacks; 1.875rem below 560px.
- **Lead** (Newsreader 400, clamp 1.375–1.625rem, 1.4): the first About paragraph only, capped at 30em; 1.25rem on phones.
- **Entry** (Newsreader 500, 1.5rem, 1.15): titles in role entries (Derívate, Entre Físicos, Mindari).
- **Annotation** (Newsreader 400, 1.1875rem, 1.45): italic and Graphite for the plain-question line under each research title; roman and ink for the takeaway under each figure.
- **Wordmark** (Newsreader 500, 1.125rem): the name in the top bar.
- **Body** (sans 400, 1rem, 1.6): summaries, descriptions and list titles (600 for titles), capped at 38rem (about 75 characters).
- **Role** (sans 600, 0.875rem): role lines in role entries.
- **Meta** (sans 400, 0.8125rem): statuses, nav links, sidebar links and figure links.
- **Label** (sans 600, 0.75rem, 0.08em tracking, uppercase, Graphite): the sidebar "Links" list heading only.

### Named Rules
**The Plate-Scale Rule.** Inside a research plate, the question is the largest text, and status lines stay at Meta size.

**The No-Kicker Rule.** No label sits above a heading. Each section opens with its serif heading alone. About is the only exception: it has a visually hidden heading and opens with the Lead paragraph instead. The sidebar "Links" label heads a list, not a heading, so it's allowed.

**The Serif States, Sans Proves Rule.** Claims and questions are set in serif; numbers, roles and metadata are set in sans.

## Layout

- **Container:** `min(73rem, 100% − 2 × gutter)`, with a fluid gutter of `clamp(1.6875rem, 7.5vw − 2.875rem, 3rem)`.
- **Desktop grid:** a 16rem sidebar beside a document column of at most 52.5rem, with a fluid gap of `clamp(3.5rem, 5vw, 4.5rem)` and 4rem top / 6rem bottom padding.
  - The sidebar sticks below the 4rem header and goes static when the viewport is shorter than 52rem.
- **Research plates:** stacked at every width. The question header comes first (max 40rem), then the figure at full column width (tall figures capped at 34rem), then the summary and status as a caption. Plates are separated by one hairline with 4rem on either side.
- **Role entries:** a two-column grid (11rem role column beside the title and body); on phones the role drops below the title.
- **Community band:** solid red, padded `clamp(1.5rem, 1rem + 2.5vw, 3rem)`; it bleeds to the screen edges below 860px. The section after it drops its top rule.
- **Section rhythm:** sections are separated by a top hairline, with 3rem above the heading and 4rem below the content. Lists are hairline-ruled rows with 0.75rem vertical padding.
- **Breakpoints:**
  - 860px: single column. The sidebar becomes a compact intro: a 6.5rem portrait beside the name, role, descriptor and mission; status below; links in one row with the "Links" label hidden. The About lede reaches the first screen on a 390×844 phone.
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
- **External link:** label followed by ↗. In role entries it is sans 500 at 0.875rem and inherits the entry colour (ink on white, white on red); in lists it sits inline at Meta size.

### Skip link
- The first focusable element on the page: "Skip to content", hidden above the viewport until focused. It then appears top-left in Redshift Red with white sans 600 text, a 44px tap height and a 2px ink focus outline. It moves focus to the document column.

### Navigation
- Sticky 4rem white header with a bottom hairline. The name (wordmark) sits left, in Newsreader 500 / 1.125rem.
- Nav links (Research, Community, Building, Archive, Contact, plus Writing and Photography when they have content) are Graphite, Meta size, weight 500, no underline, each with a 44px tap height. On hover or focus they turn Redshift Red and gain a 1px underline.
- On mobile the links wrap left-aligned under the wordmark. Below 360px the header stops being sticky so a two-row nav doesn't eat the screen.

### Research plate (signature)
- A serif question title and an italic serif annotation, followed by the figure at full column width. Below it come the takeaway (Newsreader roman, 1.1875rem, ink): one plain-English sentence stating the result. Then the sans technical summary and a Meta status line.
- "Open full figure ↗" sits under every figure at all widths, with a 44px tap height.

### Role entry
- One format for community leadership and building. The role sits in the left column (sans 600, Graphite or Red-Band Blush), and to its right are the serif title, a body description and an external link (↗).
- Hairlines separate the rows. In the building list, the last row has no closing rule.

### Community band (signature)
- A Redshift Red section with white serif heading and titles, Blush roles and rules at 30% white. Links inside it use a Blush underline that turns white on hover, and focus rings are white. Earlier outreach closes the band as a single sentence.

### Contact close
- The page ends on a "Get in touch" section with a serif section heading, one body sentence naming reasons to write, and the email address in plain text at Entry size (Newsreader 1.5rem) with a Redshift Red underline. A hairline and the footer follow.

### Ruled list (archive, writing, links)
- Rows have hairlines above and below and 0.75rem vertical padding.
- Each row has a 600-weight sans title at 1rem and a Meta description in Graphite.

## Do's and Don'ts

### Do:
- **Do** let the evidence (figure, number or named role) be the largest element in its block, with annotation at Meta size or smaller.
- **Do** use Redshift Red (#a51d1d) as the only accent, once structurally (the Community band) and otherwise for hover, focus, selection and the role line.
- **Do** separate content with a single 1px #e3e3e3 hairline or a spacing token from 0.25 to 6rem.
- **Do** keep every corner square; Plate White everywhere except the one red band.
- **Do** set headings, questions and the lede in Newsreader, and evidence and metadata in the sans.
- **Do** cap running text at 38rem (about 75 characters) and keep the 2px Redshift Red focus outline on everything interactive.

### Don't:
- **Don't** add shadows, rounded corners, gradients or tinted cards, or a second coloured band.
- **Don't** introduce a second accent hue.
- **Don't** set text lighter than #767676.
- **Don't** put any label or eyebrow above a heading.
- **Don't** stack two hairlines in one gap.
