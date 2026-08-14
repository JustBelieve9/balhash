/**
 * Фон страницы: несколько крупных размытых пятен, очень медленно плывущих.
 *
 * Цвета взяты у самой поездки - бирюза воды, песок берега, сумеречная синь.
 * Пятна сильно размыты и разведены по углам, поэтому под фотографиями всегда
 * остаётся почти чистый белый: цвет живёт по краям экрана, а не под кадрами.
 *
 * Движение отключается при prefers-reduced-motion (правило в globals.css).
 */
const BLOBS = [
  {
    className: "-left-[18vw] -top-[22vh] h-[70vh] w-[70vw] bg-[#1FC2B0]/25",
    animation: "drift-a 34s",
  },
  {
    className: "-right-[22vw] top-[18vh] h-[65vh] w-[62vw] bg-[#C89B5A]/22",
    animation: "drift-b 44s",
  },
  {
    className: "bottom-[-25vh] left-[22vw] h-[68vh] w-[66vw] bg-[#6E86B8]/22",
    animation: "drift-c 39s",
  },
];

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {BLOBS.map((blob) => (
        <span
          key={blob.className}
          className={`absolute rounded-full blur-[90px] will-change-transform ${blob.className}`}
          style={{ animation: `${blob.animation} ease-in-out infinite alternate` }}
        />
      ))}
    </div>
  );
}
