import { opening } from "@/content/story";

/**
 * No image, no full screen. The trip is set as a text block in the top third
 * and the whitespace under it does the rest.
 */
export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[1280px] px-6 pt-16 pb-32 md:px-16 md:pt-24 md:pb-48">
      <p className="label text-muted">ПОЕЗДКА</p>
      <h1 className="mt-6 max-w-[16ch] text-[clamp(28px,3vw,46px)] font-light leading-[1.15] tracking-[-0.02em]">
        Балхаш
        <br />
        <em>Шторм и штиль</em>
      </h1>
      <p className="label tabular mt-6 text-muted">4-11 августа 2026</p>
      <p className="mt-10 max-w-[52ch] text-base leading-[1.8] text-muted">
        {opening}
      </p>
    </section>
  );
}
