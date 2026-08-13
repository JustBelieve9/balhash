import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 py-16 md:grid-cols-3 md:px-16 md:py-20">
        <p className="label text-foreground">{site.wordmark}</p>
        <p className="label text-muted">Балхаш, Казахстан</p>
        <p className="label tabular text-muted">Август 2026</p>
      </div>
    </footer>
  );
}
