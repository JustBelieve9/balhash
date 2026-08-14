"use client";

import { useState } from "react";
import Image from "next/image";
import type { Film } from "@/content/films";
import { films, filmsNote } from "@/content/films";
import { DownloadLink } from "@/components/gallery/DownloadLink";
import { FadeIn } from "@/components/chrome/FadeIn";
import { asset } from "@/lib/asset";
import { formatDuration } from "@/lib/format";

/**
 * The films are the edited version of the trip, so they get the widest slot on
 * the page. Vertical 9:16, held to a readable width rather than stretched.
 */
function FilmItem({ film }: { film: Film }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure>
      {playing ? (
        <video
          src={film.src}
          poster={asset(film.poster)}
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
          aria-label={`Смотреть фильм: ${film.title}`}
          className="relative block w-full cursor-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <Image
            src={asset(film.poster)}
            alt=""
            width={1080}
            height={1920}
            sizes="(max-width: 768px) 100vw, 45vw"
            className="h-auto w-full"
          />
        </button>
      )}
      <figcaption className="label mt-5 text-muted">
        <div className="text-foreground">{film.title}</div>
        <div>
          <em>{film.note}</em>
        </div>
        <div className="tabular">{formatDuration(film.duration)}</div>
        <div className="mt-2">
          <DownloadLink href={film.src} name={film.downloadName} />
        </div>
      </figcaption>
    </figure>
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
      <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-20 md:mt-20 md:grid-cols-2 md:gap-x-24">
        {films.map((film) => (
          <FadeIn key={film.id}>
            <FilmItem film={film} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
