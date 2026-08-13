import Image from "next/image";
import type { Series } from "@/content/media.generated";
import { WallLabel } from "@/components/gallery/WallLabel";
import { DownloadLink } from "@/components/gallery/DownloadLink";
import { FadeIn } from "@/components/chrome/FadeIn";
import { seriesLabel } from "@/lib/series";

/** One photograph, full width, with its label under it. Nothing else. */
export function Opening({ group }: { group: Series }) {
  const frame = group.frames[0];
  const label = seriesLabel(group);
  // Nearly every frame is a phone portrait. Hung full width it would be taller
  // than the viewport, so a portrait print gets a narrower wall.
  const portrait = frame.height > frame.width;

  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-32 md:px-16 md:pb-48">
      <FadeIn>
        <figure className={portrait ? "max-w-[560px]" : ""}>
          <Image
            src={frame.src}
            alt=""
            width={frame.width}
            height={frame.height}
            priority
            sizes="(max-width: 768px) 100vw, 560px"
            className="h-auto w-full"
          />
          <WallLabel
            {...label}
            action={
              <DownloadLink href={frame.src} name={frame.downloadName} />
            }
          />
        </figure>
      </FadeIn>
    </section>
  );
}
