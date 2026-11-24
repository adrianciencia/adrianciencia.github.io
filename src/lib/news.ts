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

const dayMonthFormat = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

/** "16 Dec 2026", or "18 Nov – 6 Dec 2026" for a range. */
export function formatDateRange(start: Date, end?: Date): string {
  const year = start.getUTCFullYear();
  if (!end) return `${dayMonthFormat.format(start)} ${year}`;
  const endYear = end.getUTCFullYear();
  if (year === endYear && start.getUTCMonth() === end.getUTCMonth()) {
    return `${start.getUTCDate()}–${dayMonthFormat.format(end)} ${endYear}`;
  }
  const startPart = year === endYear ? dayMonthFormat.format(start) : `${dayMonthFormat.format(start)} ${year}`;
  return `${startPart} – ${dayMonthFormat.format(end)} ${endYear}`;
}

// Peru does not observe daylight saving, so its offset is fixed.
const PERU_OFFSET_MS = 5 * 60 * 60 * 1000;

/** True once the whole deadline day has ended in Peru (UTC−5), as of build time. */
export function deadlinePassed(date: Date): boolean {
  return Date.now() >= date.getTime() + DAY_MS + PERU_OFFSET_MS;
}

/** The date line for a news item: its label (or closed label, once past), the date, and the time while open. */
export function datedLine(entry: { date: Date; dateLabel?: string; closedLabel?: string; time?: string }): string {
  const closed = Boolean(entry.closedLabel) && deadlinePassed(entry.date);
  const label = closed ? entry.closedLabel : entry.dateLabel;
  const line = [label, formatDate(entry.date)].filter(Boolean).join(' ');
  return entry.time && !closed ? `${line}, ${entry.time}` : line;
}

export type TimelineStep = {
  when: string;
  /** ISO date for the step's start, for <time datetime>. */
  datetime: string;
  label: string;
  state: 'past' | 'now' | 'next' | 'upcoming';
};

/** Marks each step as past, happening now, the next one, or upcoming, as of build time. */
export function timelineSteps(steps: { date: Date; end?: Date; label: string }[]): TimelineStep[] {
  const now = Date.now();
  const startOfToday = now - (now % DAY_MS);
  let nextFound = false;
  return steps.map((step) => {
    const finished = (step.end ?? step.date).getTime() < startOfToday;
    const started = step.date.getTime() <= startOfToday;
    let state: TimelineStep['state'];
    if (finished) state = 'past';
    else if (nextFound) state = 'upcoming';
    else state = started ? 'now' : 'next';
    if (!finished) nextFound = true;
    return {
      when: formatDateRange(step.date, step.end),
      datetime: step.date.toISOString().slice(0, 10),
      label: step.label,
      state,
    };
  });
}
