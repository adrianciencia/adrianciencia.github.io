import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { contact, profile } from '../data/profile';
import { research } from '../data/research';

// A plain-text map of the site for LLMs (llmstxt.org), generated from the same data as the pages.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const line = (title: string, path: string, note?: string) => `- [${title}](${url(path)})${note ? `: ${note}` : ''}`;

  const news = (await getCollection('news'))
    .filter((entry) => !entry.data.draft)
    .sort((first, second) => second.data.date.getTime() - first.data.date.getTime());
  const byOrder = (first: { data: { order: number } }, second: { data: { order: number } }) =>
    first.data.order - second.data.order;
  const community = (await getCollection('community')).sort(byOrder);
  const work = (await getCollection('work')).sort(byOrder);

  const sections = [
    `# ${profile.name}`,
    `> ${profile.title}. ${profile.bio}`,
    [
      `- ${profile.credential}`,
      `- Current: ${profile.currentStatus}`,
      `- Based in ${profile.location}`,
      `- Email: ${contact.email}`,
      ...profile.links.filter((link) => link.icon !== 'email').map((link) => `- ${link.label}: ${link.href}`),
    ].join('\n'),
    ['## Research', ...research.map((item) => line(item.title, `/research/${item.id}/`, item.question))].join('\n'),
    news.length && ['## News', ...news.map((entry) => line(entry.data.title, `/news/${entry.id}/`, entry.data.summary))].join('\n'),
    [
      '## Community',
      ...community.map((entry) =>
        line(entry.data.title, `/community/${entry.id}/`, [entry.data.role, entry.data.summary].filter(Boolean).join('. ')),
      ),
    ].join('\n'),
    ['## Other work', ...work.map((entry) => line(entry.data.title, `/work/${entry.id}/`, entry.data.summary))].join('\n'),
  ];

  return new Response(`${sections.filter(Boolean).join('\n\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
