/**
 * pillState is the single source of truth that bridges GSAP (DOM/scroll
 * world) and React Three Fiber (WebGL world) without routing every scroll
 * tick through React state/re-renders.
 *
 * Flow:
 *   1. useScrollChoreography() builds a GSAP timeline pinned to ScrollTrigger
 *      and tweens the plain numbers below as scroll progresses.
 *   2. Pill.jsx reads these targets inside useFrame and damps the actual
 *      mesh transform toward them every frame (buttery, frame-rate
 *      independent, decoupled from GSAP's own update cadence).
 *   3. Mouse parallax is layered on top additively in Pill.jsx, so it
 *      never fights the scroll-driven targets.
 */
export const pillState = {
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  scale: { value: 1 },

  // 0 → hero glass, 1 → services translucent/tinted, 2 → portal solid gold.
  // Driving this as a single continuous float lets Pill.jsx cross-fade
  // material color/roughness/transmission smoothly instead of snapping.
  materialMix: { value: 0 },

  // Normalized -1..1 pointer position, smoothed in Experience.jsx.
  pointer: { x: 0, y: 0 },
};
