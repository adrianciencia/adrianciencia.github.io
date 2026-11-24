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
      // Where it happens (a room, a city, "Online"). Not for status like "to be confirmed".
      location: z.string().optional(),
      // How it runs, e.g. "Fortnightly, online". Required for published events.
      format: z.string().optional(),
      image: z.string().optional(),
      imageAlt: z.string().default(''),
      // For events this is how to join; required once the event is published.
      link: z
        .object({
          label: z.string(),
          href: z.string(),
        })
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
