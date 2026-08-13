"use client";

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

const QUERY = "(pointer: fine)";

/** True only where there is a real pointer; false during SSR and on touch. */
function usePointerFine() {
  const subscribe = useCallback((notify: () => void) => {
    const query = window.matchMedia(QUERY);
    query.addEventListener("change", notify);
    return () => query.removeEventListener("change", notify);
  }, []);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}

/**
 * Works carry no visible hover chrome. Instead the pointer itself becomes a
 * small circle naming the action. Disabled on touch, where the caption links
 * do the same job.
 */
export function ViewCursor() {
  const fine = usePointerFine();
  const reduce = useReducedMotion();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const spring = { stiffness: 220, damping: 26, mass: 0.4 };
  const left = useSpring(x, reduce ? { duration: 0 } : spring);
  const top = useSpring(y, reduce ? { duration: 0 } : spring);
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!fine) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      const hit = target?.closest<HTMLElement>("[data-cursor]");
      setLabel(hit?.dataset.cursor ?? null);
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [fine, x, y]);

  if (!fine) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 flex h-20 w-20 items-center justify-center rounded-full bg-foreground text-background"
      style={{ left, top, translateX: "-50%", translateY: "-50%" }}
      animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.6 }}
      transition={{ duration: 0.18, ease: "linear" }}
    >
      <span className="label">{label}</span>
    </motion.div>
  );
}
