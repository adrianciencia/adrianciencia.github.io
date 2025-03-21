import { defineCollection, z } from 'astro:content';

// Define the schema for blog posts
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Define the schema for photography
const photographyCollection = defineCollection({
  type: 'data', // Using data collection type
  schema: z.object({
    src: z.string(),
    alt: z.string(),
    caption: z.string(),
    title: z.string().optional(),
    date: z.string(),
    location: z.string(),
    category: z.string(),
    featured: z.boolean().optional().default(false),
    equipment: z.string().optional(),
    exposure: z.string().optional(),
    description: z.string().optional(),
    related: z.array(z.string()).optional(),
    processing: z.string().optional(),
  }),
});

// Define the schema for projects
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    link: z.string().optional(),
    github: z.string().optional(),
    date: z.string(),
    featured: z.boolean().optional().default(false),
    technologies: z.array(z.string()).optional(),
  }),
});

// Export the collections
export const collections = {
  blog: blogCollection,
  photography: photographyCollection,
  projects: projectsCollection,
};