import type { Series, VideoClip } from "@/content/media.generated";
import { seriesTitles } from "@/content/series-titles";
import { formatDate, formatDuration, formatFrames } from "./format";

/** Named series keep their name; the rest fall back to the time of day. */
export function seriesTitle(group: Series) {
  if (seriesTitles[group.id]) return seriesTitles[group.id];
  return group.undated ? "Из общего альбома" : group.partOfDay;
}

export function seriesMedium(group: Series) {
  return group.count > 1 ? `Серия, ${formatFrames(group.count)}` : "Один кадр";
}

export function seriesLabel(group: Series) {
  // Кадры без EXIF: даты и времени нет, придумывать их не станем.
  if (group.undated) {
    return {
      heading: "Дата неизвестна",
      title: seriesTitle(group),
      medium: seriesMedium(group),
    };
  }

  return {
    heading: formatDate(group.date),
    title: seriesTitle(group),
    medium: seriesMedium(group),
    detail: group.time,
  };
}

export function videoLabel(clip: VideoClip) {
  return {
    heading: formatDate(clip.date),
    title: clip.partOfDay,
    medium: `Видео, ${formatDuration(clip.duration)}`,
    detail: clip.time,
  };
}

export const seriesZip = (group: Series) => `/media/zip/${group.id}.zip`;
