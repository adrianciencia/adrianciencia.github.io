import { existsSync } from 'node:fs';
import { join } from 'node:path';

/** True when a site-root path such as `/images/a.png` exists in `public/`. */
export function publicAssetExists(path: string): boolean {
  return existsSync(join(process.cwd(), 'public', path));
}

/** Finds `/images/research/<id>-cover.<ext>` if the illustration has been added. */
export function findResearchCover(id: string): string | undefined {
  return ['webp', 'png', 'jpg', 'jpeg']
    .map((extension) => `/images/research/${id}-cover.${extension}`)
    .find(publicAssetExists);
}

/** A srcset built from resized `.webp` siblings (`name-600.webp`, …) when they exist. */
export function responsiveSrcset(path: string): string | undefined {
  const base = path.replace(/\.[a-z]+$/i, '');
  const sources = [600, 1100, 1536]
    .map((width) => ({ width, src: `${base}-${width}.webp` }))
    .filter((source) => publicAssetExists(source.src));
  return sources.length ? sources.map((source) => `${source.src} ${source.width}w`).join(', ') : undefined;
}
