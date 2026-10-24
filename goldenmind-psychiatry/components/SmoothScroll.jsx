"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps the page in Lenis-driven smooth scroll and keeps GSAP's
 * ScrollTrigger perfectly in sync with it. This is the standard
 * Lenis + GSAP integration pattern:
 *   - Lenis intercepts native scroll and emits its own eased "scroll" events.
 *   - ScrollTrigger is told to recalc on every Lenis tick.
 *   - GSAP's ticker drives Lenis's rAF loop instead of a second rAF,
 *     so both stay on the exact same frame clock (no drift / jitter).
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: !prefersReducedMotion,
      touchMultiplier: 1.1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Keep ScrollTrigger's measurements honest if fonts/images/3D canvas
    // change document height after first paint.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const resizeObserver = new ResizeObserver(refresh);
    resizeObserver.observe(document.body);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener("load", refresh);
      resizeObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}
