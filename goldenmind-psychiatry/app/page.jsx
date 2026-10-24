"use client";

import { useRef } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Experience from "@/components/Experience";
import { useScrollChoreography } from "@/components/useScrollChoreography";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Services from "@/components/sections/Services";
import Portal from "@/components/sections/Portal";

export default function Home() {
  // This ref is the ScrollTrigger pin/scrub boundary — the whole choreography
  // timeline runs from this element's "top top" to its "bottom bottom".
  const containerRef = useRef(null);
  useScrollChoreography(containerRef);

  return (
    <SmoothScroll>
      {/* Single persistent WebGL layer, fixed behind every section below */}
      <Experience />

      <main ref={containerRef} className="relative">
        <Hero />
        <Philosophy />
        <Services />
        <Portal />
      </main>
    </SmoothScroll>
  );
}
