"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pillState } from "@/lib/pillState";

gsap.registerPlugin(ScrollTrigger);

/**
 * Builds one master, scrubbed GSAP timeline pinned to `containerRef`
 * (the element wrapping all four sections). Scroll position 0→1 across
 * that container is divided into four acts — Hero / Philosophy /
 * Services / Portal — each act tweening pillState's plain numbers.
 * Pill.jsx damps toward these every frame, so motion stays smooth even
 * though the timeline itself only updates on scroll.
 *
 * Responsive strategy: gsap.matchMedia() builds a *different* timeline
 * per breakpoint rather than scaling one timeline's numbers. On desktop
 * the pill weaves left/right between text columns; on mobile it stays
 * horizontally centered (x pinned to 0) and only changes scale/y/rotation,
 * since the Canvas sits full-bleed behind the text there (see Experience.jsx
 * and page.jsx) and must never drift under a line of copy.
 */
export function useScrollChoreography(containerRef) {
  useEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)",
      },
      (context) => {
        const { isDesktop } = context.conditions;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1, // 1s of lag = buttery catch-up, not a hard 1:1 jump
          },
        });

        // --- Act 1 · Hero — pill enters, settles, slow idle spin --------
        tl.set(pillState.position, { x: 0, y: -0.6, z: -1 })
          .set(pillState.rotation, { x: 0.6, y: -0.8, z: 0 })
          .set(pillState.scale, { value: 0.6 })
          .to(
            pillState.position,
            { x: 0, y: 0.1, z: 0, duration: 1, ease: "none" },
            0
          )
          .to(
            pillState.rotation,
            { x: 0, y: Math.PI * 1.2, z: 0.1, duration: 1, ease: "none" },
            0
          )
          .to(pillState.scale, { value: 1, duration: 1, ease: "none" }, 0);

        // --- Act 2 · Philosophy — pill scales down, slides beside copy --
        tl.to(
          pillState.position,
          {
            x: isDesktop ? 2.4 : 0,
            y: -0.1,
            z: -0.6,
            duration: 1,
            ease: "none",
          },
          1
        )
          .to(
            pillState.rotation,
            { y: Math.PI * 2.4, z: -0.15, duration: 1, ease: "none" },
            1
          )
          .to(pillState.scale, { value: 0.62, duration: 1, ease: "none" }, 1);

        // --- Act 3 · Services — crosses to the other side, material shifts
        tl.to(
          pillState.position,
          {
            x: isDesktop ? -2.4 : 0,
            y: 0.05,
            z: 0.2,
            duration: 1,
            ease: "none",
          },
          2
        )
          .to(
            pillState.rotation,
            { y: Math.PI * 3.6, z: 0.12, duration: 1, ease: "none" },
            2
          )
          .to(pillState.scale, { value: 0.72, duration: 1, ease: "none" }, 2)
          .to(
            pillState.materialMix,
            { value: 1, duration: 1, ease: "none" },
            2
          );

        // --- Act 4 · Portal — settles dead center above the CTA ---------
        tl.to(
          pillState.position,
          { x: 0, y: -0.15, z: 0.4, duration: 1, ease: "none" },
          3
        )
          .to(
            pillState.rotation,
            { y: Math.PI * 4.4, z: 0, duration: 1, ease: "none" },
            3
          )
          .to(pillState.scale, { value: 0.92, duration: 1, ease: "none" }, 3)
          .to(
            pillState.materialMix,
            { value: 2, duration: 1, ease: "none" },
            3
          );

        return () => tl.scrollTrigger?.kill();
      }
    );

    return () => mm.revert();
  }, [containerRef]);
}
