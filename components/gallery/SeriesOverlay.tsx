"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Series } from "@/content/media.generated";
import { DownloadLink } from "./DownloadLink";
import { asset } from "@/lib/asset";
import { seriesLabel, seriesZip } from "@/lib/series";
import { formatFrames } from "@/lib/format";

/**
 * Opening a series is walking into another white room, not putting a dark
 * lightbox over this one: same background, same type, just the frames of one
 * series and a way out.
 */
export function SeriesOverlay({
  group,
  onClose,
}: {
  group: Series;
  onClose: () => void;
}) {
  const reduce = useReducedMotion();
  const label = seriesLabel(group);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={label.title}
      // Закрывается кликом куда угодно. Ссылки и кнопки внутри исключены,
      // иначе скачивание закрывало бы серию прямо под рукой.
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("a, button")) return;
        onClose();
      }}
      className="fixed inset-0 z-40 cursor-zoom-out overflow-y-auto bg-background/97 backdrop-blur-sm"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: "linear" }}
    >
      <div className="mx-auto max-w-[1280px] px-6 py-10 md:px-16 md:py-16">
        <div className="flex items-start justify-between gap-8">
          <div className="label text-muted">
            <div className="text-foreground">{label.heading}</div>
            <div>
              <em>{label.title}</em>
            </div>
            <div>{label.medium}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            autoFocus
            className="label -mr-2 min-h-11 px-2 text-muted transition-colors hover:text-foreground"
          >
            Закрыть
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-14 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
          {group.frames.map((frame, index) => (
            <figure key={frame.id}>
              <Image
                src={asset(frame.thumb)}
                alt=""
                width={frame.width}
                height={frame.height}
                sizes="(max-width: 768px) 50vw, 30vw"
                className="h-auto w-full border border-line"
              />
              <figcaption className="label mt-4 flex items-center justify-between gap-4 text-muted">
                <span className="tabular">
                  {index + 1} / {group.count}
                </span>
                <DownloadLink href={frame.src} name={frame.downloadName} />
              </figcaption>
            </figure>
          ))}
        </div>

        {group.count > 1 && (
          <div className="mt-16 border-t border-line pt-6 md:mt-24">
            <DownloadLink href={seriesZip(group)}>
              {`Скачать серию, ${formatFrames(group.count)}`}
            </DownloadLink>
          </div>
        )}
      </div>
    </motion.div>
  );
}
