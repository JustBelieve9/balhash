"use client";

import { useState } from "react";
import type { Series } from "@/content/media.generated";
import { SeriesCard } from "./SeriesCard";
import { SeriesOverlay } from "./SeriesOverlay";
import { FadeIn } from "@/components/chrome/FadeIn";

export function SeriesGrid({ series }: { series: Series[] }) {
  const [open, setOpen] = useState<Series | null>(null);

  return (
    <>
      {/* Плотнее, чем классическая галерейная развеска: серий много, и главное
          тут - охватить их взглядом. Зазор оставлен такой, чтобы наклонённый
          веер не залезал на соседей. */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-14">
        {series.map((group) => (
          <FadeIn key={group.id}>
            <SeriesCard group={group} onOpen={setOpen} />
          </FadeIn>
        ))}
      </div>

      {/* Mounted plainly rather than through AnimatePresence: the overlay only
          needs to fade in, and an exit animation is one more thing that can
          leave a dialog stuck over the page. */}
      {open && (
        <SeriesOverlay
          key={open.id}
          group={open}
          onClose={() => setOpen(null)}
        />
      )}
    </>
  );
}
