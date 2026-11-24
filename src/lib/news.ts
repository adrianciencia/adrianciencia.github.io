import { getCollection, type CollectionEntry } from 'astro:content';

type NewsEntry = CollectionEntry<'news'>;

const RECENT_WINDOW_DAYS = 60;
const LIST_LIMIT = 3;
const DAY_MS = 24 * 60 * 60 * 1000;

const dateFormat = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const monthFormat = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatDate = (date: Date) => dateFormat.format(date);
export const formatMonth = (date: Date) => monthFormat.format(date);

/**
 * Picks the featured item and the short news list at build time.
 * Featured: the soonest upcoming event, else the newest item from the last
 * 60 days, else nothing. Drafts never reach the homepage; the schema already
 * guarantees every published event has a format and a way to join.
 */
export async function getNews(): Promise<{ featured?: NewsEntry; list: NewsEntry[] }> {
  const now = Date.now();
  const startOfToday = now - (now % DAY_MS);
  const entries = await getPublishedNews();

  const upcomingEvent = entries
    .filter((entry) => entry.data.kind === 'event' && entry.data.date.getTime() >= startOfToday)
    .at(-1);
  const recentItem = entries.find(
    (entry) => entry.data.date.getTime() <= now && now - entry.data.date.getTime() <= RECENT_WINDOW_DAYS * DAY_MS,
  );
  const featured = upcomingEvent ?? recentItem;
  const list = entries.filter((entry) => entry !== featured).slice(0, LIST_LIMIT);

  return { featured, list };
}

/** Published news, newest first. */
export async function getPublishedNews(): Promise<NewsEntry[]> {
  return (await getCollection('news'))
    .filter((entry) => !entry.data.draft)
    .sort((first, second) => second.data.date.getTime() - first.data.date.getTime());
}
