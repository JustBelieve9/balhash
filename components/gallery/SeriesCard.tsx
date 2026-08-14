"use client";

import Image from "next/image";
import type { Series } from "@/content/media.generated";
import { asset } from "@/lib/asset";
import { WallLabel } from "./WallLabel";
import { StackSheets } from "./StackSheets";
import { seriesLabel } from "@/lib/series";

/**
 * A series reads as a stack of prints: two blank sheets sit behind the cover
 * and shift out a little when the pointer is over it, so it is obvious the
 * cover opens into more frames. Single photographs get no stack.
 */
export function SeriesCard({
  group,
  onOpen,
}: {
  group: Series;
  onOpen: (group: Series) => void;
}) {
  const cover = group.frames[0];
  const stacked = group.count > 1;
  const label = seriesLabel(group);

  return (
    <figure>
      <button
        type="button"
        onClick={() => onOpen(group)}
        data-cursor={stacked ? "Открыть" : "Смотреть"}
        aria-label={`${label.title}. ${label.medium}`}
        className="group relative block w-full cursor-none text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
      >
        {stacked && <StackSheets />}
        <Image
          src={asset(cover.thumb)}
          alt=""
          width={cover.width}
          height={cover.height}
          sizes="(max-width: 768px) 100vw, 45vw"
          className="relative h-auto w-full"
        />
      </button>
      <WallLabel {...label} />
    </figure>
  );
}
