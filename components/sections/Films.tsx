"use client";

import { useState } from "react";
import Image from "next/image";
import type { Film, FilmPart } from "@/content/films";
import { films, filmsNote, filmDuration } from "@/content/films";
import { DownloadLink } from "@/components/gallery/DownloadLink";
import { FadeIn } from "@/components/chrome/FadeIn";
import { asset } from "@/lib/asset";
import { formatDuration } from "@/lib/format";

/**
 * Каждая часть - отдельный ролик минут на 4-6, чтобы уложиться в лимит git на
 * файл и всё равно получить приличный битрейт. Вертикальный кадр, ширина под
 * читаемый размер, а не растянут во всю секцию.
 */
function PartItem({ film, part }: { film: Film; part: FilmPart }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      {playing ? (
        <video
          src={part.src}
          poster={asset(part.poster)}
          controls
          autoPlay
          playsInline
          className="h-auto w-full bg-foreground"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          data-cursor="Смотреть"
          aria-label={`Смотреть: ${film.title}, часть ${part.part}`}
          className="relative block w-full cursor-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <Image
            src={asset(part.poster)}
            alt=""
            width={1080}
            height={1920}
            sizes="(max-width: 768px) 50vw, 30vw"
            className="h-auto w-full"
          />
        </button>
      )}
      <figcaption className="label mt-4 text-muted">
        <div className="text-foreground">Часть {part.part}</div>
        <div className="tabular">{formatDuration(part.duration)}</div>
        <div className="mt-2">
          <DownloadLink href={part.src} name={part.downloadName} />
        </div>
      </figcaption>
    </figure>
  );
}

function FilmBlock({ film }: { film: Film }) {
  return (
    <div>
      <h3 className="text-[16px] font-medium md:text-[18px]">{film.title}</h3>
      <p className="label mt-2 text-muted">
        <em>{film.note}</em>
        <span className="tabular"> · {formatDuration(filmDuration(film))}</span>
      </p>
      <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6">
        {film.parts.map((part) => (
          <PartItem key={part.part} film={film} part={part} />
        ))}
      </div>
    </div>
  );
}

export function Films() {
  return (
    <section
      id="film"
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32"
    >
      <h2 className="text-[22px] font-normal tracking-[-0.01em] md:text-[30px]">
        Фильм
      </h2>
      <p className="mt-5 max-w-[52ch] text-base leading-[1.8] text-muted">
        {filmsNote}
      </p>
      <div className="mt-12 space-y-16 md:mt-20 md:space-y-24">
        {films.map((film) => (
          <FadeIn key={film.id}>
            <FilmBlock film={film} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
