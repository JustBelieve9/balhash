"use client";

import { useState } from "react";
import { site } from "@/content/site";

/**
 * Static, not sticky, 72px. Six links do not fit one line on a phone, so below
 * md they collapse behind a plain text toggle that reveals a stacked list. No
 * overlay, no animation: it is a menu, not an event.
 */
export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="mx-auto max-w-[1280px] px-6 md:px-16">
      <div className="flex h-[72px] items-center justify-between gap-6 md:h-20">
        <a href="#top" className="label text-foreground">
          {site.wordmark}
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="label text-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="label -mr-2 min-h-11 px-2 text-muted md:hidden"
        >
          {open ? "Закрыть" : "Меню"}
        </button>
      </div>

      {open && (
        <nav className="pb-6 md:hidden">
          <ul>
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="label flex min-h-11 items-center border-t border-line text-muted"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
