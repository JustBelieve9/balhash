import type { ReactNode } from "react";

/** A titled leg of the trip: heading, one line of context, then the work. */
export function Part({
  id,
  index,
  title,
  note,
  children,
}: {
  id: string;
  index: string;
  title: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32"
    >
      <p className="label text-muted">{index}</p>
      <h2 className="mt-4 text-[22px] font-normal tracking-[-0.01em] md:text-[30px]">
        {title}
      </h2>
      <p className="mt-5 max-w-[52ch] text-base leading-[1.8] text-muted">
        {note}
      </p>
      <div className="mt-12 md:mt-20">{children}</div>
    </section>
  );
}
