/**
 * Фильмы лежат в public/, а не в GitHub Releases, хотя релиз и снимал бы
 * ограничение на размер. Причина: релиз отдаёт вложения как
 * application/octet-stream с content-disposition: attachment, и Safari такое
 * встроенным плеером не проигрывает - показывает чёрный прямоугольник с
 * перечёркнутым play. Chrome содержимое угадывает, Safari принципиально нет.
 *
 * Каждый фильм разбит на 3 части: лимит git (100 МиБ) действует на файл, а не
 * на весь фильм, и бюджет байт на минуту считается от длины части. Целиком
 * (13-17 минут) видео влезало только в 600-850 кбит/с - заметно ниже
 * комфортного минимума. Частями по 4-6 минут то же ограничение даёт
 * 2000-2900 кбит/с. См. scripts/convert-films.sh.
 */
export type FilmPart = {
  part: number;
  src: string;
  poster: string;
  /** Seconds, from ffprobe on the encoded file. */
  duration: number;
  downloadName: string;
};

export type Film = {
  id: string;
  title: string;
  note: string;
  parts: FilmPart[];
};

export const films: Film[] = [
  {
    id: "tuda",
    title: "Туда",
    note: "Дорога на озеро.",
    parts: [
      {
        part: 1,
        src: "/media/films/tuda-1.mp4",
        poster: "/media/films/tuda-1.jpg",
        duration: 258,
        downloadName: "balkhash-film-1-tuda-1.mp4",
      },
      {
        part: 2,
        src: "/media/films/tuda-2.mp4",
        poster: "/media/films/tuda-2.jpg",
        duration: 258,
        downloadName: "balkhash-film-1-tuda-2.mp4",
      },
      {
        part: 3,
        src: "/media/films/tuda-3.mp4",
        poster: "/media/films/tuda-3.jpg",
        duration: 258,
        downloadName: "balkhash-film-1-tuda-3.mp4",
      },
    ],
  },
  {
    id: "obratno",
    title: "Обратно",
    note: "От озера домой через Караганду и Астану.",
    parts: [
      {
        part: 1,
        src: "/media/films/obratno-1.mp4",
        poster: "/media/films/obratno-1.jpg",
        duration: 352,
        downloadName: "balkhash-film-2-obratno-1.mp4",
      },
      {
        part: 2,
        src: "/media/films/obratno-2.mp4",
        poster: "/media/films/obratno-2.jpg",
        duration: 352,
        downloadName: "balkhash-film-2-obratno-2.mp4",
      },
      {
        part: 3,
        src: "/media/films/obratno-3.mp4",
        poster: "/media/films/obratno-3.jpg",
        duration: 352,
        downloadName: "balkhash-film-2-obratno-3.mp4",
      },
    ],
  },
];

export const filmsNote =
  "Смонтированный фильм о поездке, двумя частями. Каждая часть поделена ещё на три ролика.";

export const filmDuration = (film: Film) =>
  film.parts.reduce((total, part) => total + part.duration, 0);
