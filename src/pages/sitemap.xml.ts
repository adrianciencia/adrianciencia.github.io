import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { research } from '../data/research';

// Generated from the content collections so new pages are listed automatically.
export const GET: APIRoute = async ({ site }) => {
  const news = (await getCollection('news')).filter((entry) => !entry.data.draft);
  const community = await getCollection('community');
  const work = await getCollection('work');

  const paths = [
    '/',
    ...research.map((item) => `/research/${item.id}/`),
    ...news.map((entry) => `/news/${entry.id}/`),
    ...community.map((entry) => `/community/${entry.id}/`),
    ...work.map((entry) => `/work/${entry.id}/`),
  ];

  const urls = paths.map((path) => `  <url>\n    <loc>${new URL(path, site)}</loc>\n  </url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
