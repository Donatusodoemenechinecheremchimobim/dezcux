"use client";

import { useEffect, useState } from "react";

/**
 * Tracks whether the viewport is at/under the mobile breakpoint.
 * Used for one-off imperative decisions (camera fov/position, DPR cap,
 * pointer-events) that live outside GSAP's own matchMedia blocks —
 * e.g. inside <Canvas> where we configure three.js directly.
 *
 * Section-level, scroll-driven responsiveness should instead use
 * gsap.matchMedia() inside useScrollChoreography — see that file for why.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mql.matches);

    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
