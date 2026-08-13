import type { ReactNode } from "react";

/**
 * Set exactly like a gallery wall label: each fact on its own line, small,
 * left aligned, generous leading.
 */
export function WallLabel({
  heading,
  title,
  medium,
  detail,
  action,
  className = "",
}: {
  heading: string;
  title: string;
  medium: string;
  detail?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <figcaption className={`label mt-5 text-muted ${className}`}>
      <div className="text-foreground">{heading}</div>
      <div>
        <em>{title}</em>
      </div>
      <div>{medium}</div>
      {detail && <div className="tabular">{detail}</div>}
      {action && <div className="mt-2">{action}</div>}
    </figcaption>
  );
}
