import { downloadNote, placeNote } from "@/content/story";
import { films } from "@/content/films";
import { DownloadLink } from "@/components/gallery/DownloadLink";
import { formatFrames } from "@/lib/format";

export function Download({ photoCount }: { photoCount: number }) {
  return (
    <section
      id="download"
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32"
    >
      <h2 className="text-[22px] font-normal tracking-[-0.01em] md:text-[30px]">
        Скачать
      </h2>
      <div className="mt-8 max-w-[52ch] space-y-4 text-base leading-[1.8] text-muted">
        <p>{downloadNote}</p>
        <p>
          В архиве {formatFrames(photoCount)} и фильм двумя частями.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-start gap-2">
        <DownloadLink href="/media/zip/all-photos.zip">
          Скачать все фото одним архивом
        </DownloadLink>
        {films.map((film) => (
          <DownloadLink
            key={film.id}
            href={film.src}
            name={film.downloadName}
          >
            {`Скачать фильм: ${film.title.toLowerCase()}`}
          </DownloadLink>
        ))}
      </div>
      <p className="mt-16 max-w-[52ch] border-t border-line pt-6 text-base leading-[1.8] text-muted">
        {placeNote}
      </p>
    </section>
  );
}
