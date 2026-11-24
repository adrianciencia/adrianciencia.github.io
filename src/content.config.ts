import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/writing',
  }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    type: z.enum(['essay', 'research-note', 'guide', 'article']),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/news',
  }),
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      kind: z.enum(['event', 'news']),
      date: z.coerce.date(),
      // What the date means, e.g. "Applications close". Shown before the date.
      dateLabel: z.string().optional(),
      // Time of day shown after the date while it is open, e.g. "11:59 p.m. Peru time".
      time: z.string().optional(),
      // Set when the date is a deadline: once it has passed, this replaces the date label and the
      // action link is withdrawn, e.g. "Applications closed".
      closedLabel: z.string().optional(),
      // Where it happens (a room, a city, "Online"). Not for status like "to be confirmed".
      location: z.string().optional(),
      // How it runs, e.g. "Fortnightly, online". Required for published events.
      format: z.string().optional(),
      image: z.string().optional(),
      imageAlt: z.string().default(''),
      // A printable flyer: offered as a download and used as the share preview image.
      flyer: z.string().optional(),
      // For events this is how to join; required once the event is published.
      link: z
        .object({
          label: z.string(),
          href: z.string(),
        })
        .optional(),
      // Key facts shown as a summary under the title, e.g. { label: "Cost", value: "Free" }.
      facts: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
      // Dated steps shown as a timeline; `end` makes a range. Past steps fade, the next one is highlighted.
      timeline: z
        .array(z.object({ date: z.coerce.date(), end: z.coerce.date().optional(), label: z.string() }))
        .optional(),
      draft: z.boolean().default(false),
    })
    .superRefine((entry, context) => {
      if (entry.kind !== 'event' || entry.draft) return;
      if (!entry.format) {
        context.addIssue({ code: 'custom', path: ['format'], message: 'Published events need a format.' });
      }
      if (!entry.link) {
        context.addIssue({ code: 'custom', path: ['link'], message: 'Published events need a link for how to join.' });
      }
    }),
});

// Community and other work share one shape: a card on the homepage and a page
// whose body is the Markdown content.
const entrySchema = z.object({
  title: z.string(),
  // Optional: leave it out rather than repeat the title.
  summary: z.string().optional(),
  role: z.string().optional(),
  // One concrete line of proof, e.g. "Since 2021 · 40 students mentored". Shown on the card when set.
  evidence: z.string().optional(),
  // Year or range shown in the Other work list, e.g. "2019" or "2020–2022".
  year: z.string().optional(),
  order: z.number(),
  link: z
    .object({
      label: z.string(),
      href: z.string(),
    })
    .optional(),
});

const community = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/community' }),
  schema: entrySchema,
});

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: entrySchema,
});

export const collections = { writing, news, community, work };
