/**
 * Файлы фильмов лежат в GitHub Releases, а не в public/: в git нельзя класть
 * файлы больше 100 МБ, а у Vercel на бесплатном тарифе тот же потолок.
 * Ссылка отдаёт файл кусками, поэтому плеер на странице работает как обычно.
 *
 * Перезалить: ./scripts/convert-films.sh, затем
 *   gh release upload films-v1 public/media/films/*.mp4 --clobber
 */
const RELEASE =
  "https://github.com/JustBelieve9/balhash/releases/download/films-v1";

export type Film = {
  id: string;
  title: string;
  note: string;
  src: string;
  poster: string;
  /** Seconds, from ffprobe on the source. */
  duration: number;
  downloadName: string;
};

export const films: Film[] = [
  {
    id: "tuda",
    title: "Туда",
    note: "Дорога на озеро и четыре дня на берегу.",
    src: `${RELEASE}/tuda.mp4`,
    poster: "/media/films/tuda.jpg",
    duration: 1057,
    downloadName: "balkhash-film-1-tuda.mp4",
  },
  {
    id: "obratno",
    title: "Обратно",
    note: "Дождь на трассе, Караганда, Астана.",
    src: `${RELEASE}/obratno.mp4`,
    poster: "/media/films/obratno.jpg",
    duration: 775,
    downloadName: "balkhash-film-2-obratno.mp4",
  },
];

export const filmsNote =
  "Смонтированный фильм о поездке, двумя частями. Вместе получается чуть больше получаса.";
