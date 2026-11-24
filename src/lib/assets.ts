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
