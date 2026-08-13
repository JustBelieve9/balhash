/**
 * Human names for photo series, keyed by the id in content/media.generated.ts.
 *
 * Only series whose contents were actually checked are named here. Everything
 * else falls back to the time of day taken from the file timestamp, so no label
 * on the page claims something the photograph does not show. Add entries freely:
 * nothing else needs to change.
 */
export const seriesTitles: Record<string, string> = {
  // Первая часть, озеро
  "s-IMG_2493": "Степь из окна",
  "s-IMG_2560": "Бирюзовая вода",

  // Вторая часть, дорога назад и Астана
  "s-IMG_2640": "Указатель на Караганду",
  "s-IMG_2649": "Остановка у знака",
  "s-IMG_2668": "Зеркало в отеле",
  "s-IMG_2674": "Мурал с соколом",
  "s-IMG_2726": "Мост",
  "s-IMG_2810": "Астана на закате",
  "s-IMG_2833": "Лифт",
};
