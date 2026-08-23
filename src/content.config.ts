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

export const collections = { writing };
