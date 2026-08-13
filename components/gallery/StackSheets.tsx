/**
 * Two blank sheets behind a cover, so a folder of frames reads as a stack of
 * prints rather than a single picture. Expects a `group` ancestor for hover.
 */
export function StackSheets() {
  return (
    <>
      <span
        aria-hidden
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-line bg-background transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3"
      />
      <span
        aria-hidden
        className="absolute inset-0 translate-x-0.5 translate-y-0.5 border border-line bg-background transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5"
      />
    </>
  );
}
