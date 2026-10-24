"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useIsMobile } from "@/lib/useIsMobile";
import { pillState } from "@/lib/pillState";
import Pill from "./Pill";
import Loader from "./Loader";

/**
 * This is ONE persistent, fixed, full-viewport <Canvas> sitting behind the
 * entire page (z-index below the HTML sections) — not a separate canvas per
 * section. The pill "travels" between sections purely because
 * useScrollChoreography moves it through 3D space as the user scrolls past
 * each section's HTML, which is what makes the hand-off between sections
 * feel seamless rather than like four different widgets.
 *
 * pointer-events-none is critical: it lets every click/scroll pass straight
 * through to the HTML content stacked on top.
 */
export default function Experience() {
  const isMobile = useIsMobile();
  const pointerTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Mouse parallax is desktop-only by design: touch devices don't have a
    // hover pointer, and leaving pillState.pointer at {0,0} there means
    // Pill.jsx's parallax math is simply a no-op on mobile — no extra
    // branching needed inside the render loop itself.
    if (isMobile) {
      pillState.pointer.x = 0;
      pillState.pointer.y = 0;
      return;
    }

    const handlePointerMove = (e) => {
      pointerTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    // Smooth the raw pointer reading into pillState so parallax never jitters.
    let raf;
    const smooth = () => {
      pillState.pointer.x +=
        (pointerTarget.current.x - pillState.pointer.x) * 0.06;
      pillState.pointer.y +=
        (pointerTarget.current.y - pillState.pointer.y) * 0.06;
      raf = requestAnimationFrame(smooth);
    };
    smooth();

    window.addEventListener("pointermove", handlePointerMove);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(raf);
    };
  }, [isMobile]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        shadows
        dpr={isMobile ? [1, 1.5] : [1, 2]} // cap pixel ratio on mobile GPUs
        camera={{
          fov: isMobile ? 42 : 32,
          position: [0, 0, isMobile ? 5.5 : 6.5],
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0b0a08"]} />
        <fog attach="fog" args={["#0b0a08", 6, 14]} />

        {/* Warm gold-tinted lighting rig, matched to the brand palette */}
        <ambientLight intensity={0.5} color="#f6efe0" />
        <directionalLight
          position={[3, 4, 2]}
          intensity={1.4}
          color="#ecd49a"
          castShadow
        />
        <pointLight position={[-3, -1, 2]} intensity={6} color="#d4ac56" />
        <pointLight position={[0, 2.5, -2]} intensity={3} color="#fff7e6" />

        <Suspense fallback={<Loader />}>
          <Pill />
          <Environment preset="studio" environmentIntensity={0.6} />
        </Suspense>
      </Canvas>
    </div>
  );
}
