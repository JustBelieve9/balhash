import type { Series } from "@/content/media.generated";
import { films } from "@/content/films";
import { formatDayMonth, formatFrames, formatDuration } from "@/lib/format";
import { seriesTitle } from "@/lib/series";

type Row = {
  key: string;
  date: string;
  time: string;
  sortKey: string;
  title: string;
  kind: string;
};

/**
 * Reverse-chronological index of everything on the page. Stacked rows on
 * phones, four aligned columns from md up.
 */
export function Archive({ series }: { series: Series[] }) {
  const rows: Row[] = series
    .map((group) => ({
      key: group.id,
      date: group.undated ? "" : formatDayMonth(group.date),
      time: group.time,
      sortKey: group.undated ? "" : `${group.date}${group.time}`,
      title: seriesTitle(group),
      kind: group.count > 1 ? formatFrames(group.count) : "один кадр",
    }))
    .sort((a, b) => b.sortKey.localeCompare(a.sortKey));

  return (
    <section
      id="archive"
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32"
    >
      <h2 className="text-[22px] font-normal tracking-[-0.01em] md:text-[30px]">
        Архив
      </h2>

      <ul className="mt-12 md:mt-16">
        {films.map((film) => (
          <li
            key={film.id}
            className="label grid grid-cols-1 gap-1 border-t border-line py-4 text-muted md:grid-cols-12 md:gap-6"
          >
            <span className="md:col-span-4">Фильм</span>
            <span className="text-foreground md:col-span-5">{film.title}</span>
            <span className="tabular md:col-span-3">
              {formatDuration(film.duration)}
            </span>
          </li>
        ))}
        {rows.map((row) => (
          <li
            key={row.key}
            className="label grid grid-cols-1 gap-1 border-t border-line py-4 text-muted md:grid-cols-12 md:gap-6"
          >
            <span className="tabular md:col-span-2">{row.date}</span>
            <span className="tabular md:col-span-2">{row.time}</span>
            <span className="text-foreground md:col-span-5">{row.title}</span>
            <span className="md:col-span-3">{row.kind}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
