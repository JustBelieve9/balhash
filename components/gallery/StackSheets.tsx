import Image from "next/image";
import type { Frame } from "@/content/media.generated";
import { asset } from "@/lib/asset";

/**
 * Серия лежит веером: за обложкой видны следующие кадры, развёрнутые как карты
 * в руке. При наведении веер раскрывается шире, и сразу видно, что под обложкой
 * не одна фотография.
 *
 * Разворот вокруг нижнего края, поэтому кадры выглядывают верхними углами.
 * Берём максимум два: три и больше на маленькой плитке превращаются в кашу.
 *
 * Углы приходят через CSS-переменные, а не инлайновым transform: иначе
 * hover-состояние не смогло бы его перебить.
 */
// Углы намеренно небольшие: карточки стоят в плотной сетке, и размашистый
// веер полез бы на соседей. Лёгкий наклон плюс уменьшение даёт нужный эффект.
const LAYERS = [
  {
    rest: "rotate(-3.5deg) scale(0.975)",
    open: "rotate(-7deg) scale(0.96) translateY(-1.5%)",
  },
  {
    rest: "rotate(2.5deg) scale(0.985)",
    open: "rotate(5.5deg) scale(0.97) translateY(-1%)",
  },
];

export function StackSheets({ frames }: { frames: Frame[] }) {
  const behind = frames.slice(0, LAYERS.length);
  if (!behind.length) return null;

  return (
    <>
      {behind
        .map((frame, index) => ({ frame, layer: LAYERS[index] }))
        .reverse()
        .map(({ frame, layer }) => (
          <span
            key={frame.id}
            aria-hidden
            style={
              {
                "--rest": layer.rest,
                "--open": layer.open,
              } as React.CSSProperties
            }
            className="absolute inset-0 origin-bottom overflow-hidden border border-line bg-background transition-transform duration-500 ease-out [transform:var(--rest)] group-hover:[transform:var(--open)]"
          >
            <Image
              src={asset(frame.thumb)}
              alt=""
              fill
              sizes="(max-width: 768px) 50vw, 30vw"
              className="object-cover"
            />
          </span>
        ))}
    </>
  );
}
