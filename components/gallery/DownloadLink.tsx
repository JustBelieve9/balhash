/**
 * Downloads are plain text links, not buttons: the page has no accent colour
 * and nothing should compete with the photographs. Vertical padding keeps the
 * touch target at 44px on phones without showing any chrome.
 */
import { asset } from "@/lib/asset";

export function DownloadLink({
  href,
  name,
  children = "Скачать",
  className = "",
}: {
  href: string;
  name?: string;
  children?: string;
  className?: string;
}) {
  return (
    <a
      href={asset(href)}
      // Empty string still sets the attribute, so a link without an explicit
      // file name (the series archives) also downloads instead of navigating.
      download={name ?? ""}
      className={`label inline-flex min-h-11 items-center text-muted underline decoration-line underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground ${className}`}
    >
      {children}
    </a>
  );
}
