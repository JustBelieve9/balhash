const MONTHS = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

/** "2026-08-08" -> "8 августа 2026" */
export function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

/** "2026-08-08" -> "8 августа" */
export function formatDayMonth(date: string) {
  const [, month, day] = date.split("-").map(Number);
  return `${day} ${MONTHS[month - 1]}`;
}

/** 4.6 -> "0:05" */
export function formatDuration(seconds: number) {
  const total = Math.round(seconds);
  const min = Math.floor(total / 60);
  const sec = total % 60;
  return `${min}:${String(sec).padStart(2, "0")}`;
}

const FRAME_FORMS: [string, string, string] = ["кадр", "кадра", "кадров"];

/** 8 -> "8 кадров" */
export function formatFrames(count: number) {
  const mod100 = count % 100;
  const mod10 = count % 10;
  let form = FRAME_FORMS[2];
  if (mod100 < 11 || mod100 > 14) {
    if (mod10 === 1) form = FRAME_FORMS[0];
    else if (mod10 >= 2 && mod10 <= 4) form = FRAME_FORMS[1];
  }
  return `${count} ${form}`;
}
