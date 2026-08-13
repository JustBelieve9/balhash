import { chronicle } from "@/content/story";
import { formatDate } from "@/lib/format";
import { FadeIn } from "@/components/chrome/FadeIn";

export function Chronicle() {
  return (
    <section
      id="chronicle"
      className="mx-auto max-w-[1280px] px-6 py-24 md:px-16 md:py-32"
    >
      <h2 className="text-[22px] font-normal tracking-[-0.01em] md:text-[30px]">
        Хроника
      </h2>
      <div className="mt-12 max-w-[52ch] md:mt-16">
        {chronicle.map((day) => (
          <FadeIn key={day.date}>
            <article className="border-t border-line py-8 md:py-10">
              <p className="label tabular text-muted">{formatDate(day.date)}</p>
              <h3 className="mt-3 text-[16px] font-medium md:text-[18px]">
                {day.title}
              </h3>
              <div className="mt-3 space-y-3 text-base leading-[1.8] text-muted">
                {day.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
