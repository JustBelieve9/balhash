/**
 * Фильмы лежат в public/, а не в GitHub Releases, хотя релиз и снимал бы
 * ограничение на размер. Причина: релиз отдаёт вложения как
 * application/octet-stream с content-disposition: attachment, и Safari такое
 * встроенным плеером не проигрывает - показывает чёрный прямоугольник с
 * перечёркнутым play. Chrome содержимое угадывает, Safari принципиально нет.
 *
 * Поэтому файлы ужаты под лимит git (100 МиБ) и раздаются сайтом как video/mp4.
 * См. scripts/convert-films.sh.
 */
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
    note: "Дорога на озеро.",
    src: "/media/films/tuda.mp4",
    poster: "/media/films/tuda.jpg",
    duration: 775,
    downloadName: "balkhash-film-1-tuda.mp4",
  },
  {
    id: "obratno",
    title: "Обратно",
    note: "От озера домой через Караганду и Астану.",
    src: "/media/films/obratno.mp4",
    poster: "/media/films/obratno.jpg",
    duration: 1057,
    downloadName: "balkhash-film-2-obratno.mp4",
  },
];

export const filmsNote =
  "Смонтированный фильм о поездке, двумя частями. Вместе получается чуть больше получаса.";
