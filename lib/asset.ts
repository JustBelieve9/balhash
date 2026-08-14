const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/**
 * Префикс для ссылок, которые Next.js не обрабатывает сам: href у скачивания,
 * poster у видео. На GitHub Pages сайт лежит в подпапке, и без этого такие
 * ссылки уезжают в корень домена.
 *
 * Внешние адреса (фильмы и архивы в GitHub Releases) остаются как есть.
 */
export function asset(path: string) {
  if (!path.startsWith("/")) return path;
  return `${BASE}${path}`;
}
