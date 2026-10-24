"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { pillState } from "@/lib/pillState";

// Pulled from tailwind.config.js's `gold` scale so the WebGL material and
// the HTML/UI accent color are always exactly the same hue.
const GOLD_SOFT = new THREE.Color("#ecd49a"); // Act 1 — hero glass warmth
const GOLD = new THREE.Color("#d4ac56"); // Act 2/3 — services core
const CREAM = new THREE.Color("#f6efe0"); // Act 4 — portal, brightest

export default function Pill() {
  const group = useRef();
  const shellRef = useRef();
  const coreRef = useRef();

  const coreColors = useMemo(() => [GOLD_SOFT, GOLD, CREAM], []);
  const scratchColor = useMemo(() => new THREE.Color(), []);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    // Frame-rate independent exponential damp (equivalent to drei's
    // `damp` helper) — keeps motion identical on a 60Hz and a 144Hz screen.
    const d = 1 - Math.pow(0.0015, delta);

    // ---- Scroll-driven transform: chase GSAP's targets -----------------
    g.position.x = THREE.MathUtils.lerp(g.position.x, pillState.position.x, d);
    g.position.z = THREE.MathUtils.lerp(g.position.z, pillState.position.z, d);

    // y gets a gentle idle float layered on top so it's never static,
    // even while scroll is paused — this is the "gently bobbing" feel.
    const idleBob = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    g.position.y = THREE.MathUtils.lerp(
      g.position.y,
      pillState.position.y + idleBob,
      d
    );

    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, pillState.rotation.x, d);
    g.rotation.z = THREE.MathUtils.lerp(g.rotation.z, pillState.rotation.z, d);
    // y-rotation also gets a slow constant auto-spin on top of the
    // scroll-mapped target, so it reads as "alive" rather than a scrubber.
    g.rotation.y = THREE.MathUtils.lerp(
      g.rotation.y,
      pillState.rotation.y + state.clock.elapsedTime * 0.15,
      d
    );

    const targetScale = pillState.scale.value;
    g.scale.setScalar(THREE.MathUtils.lerp(g.scale.x, targetScale, d));

    // ---- Mouse parallax: small ADDITIVE tilt, layered after the scroll
    // target so it never fights or desyncs the GSAP choreography. Disabled
    // entirely on touch devices since pillState.pointer stays at {0,0}
    // there (see Experience.jsx).
    g.rotation.x += pillState.pointer.y * 0.12;
    g.rotation.z += -pillState.pointer.x * 0.12;
    g.position.x += pillState.pointer.x * 0.15;

    // ---- Material cross-fade across the 3 acts (hero → services → portal)
    const mix = pillState.materialMix.value; // continuous 0..2
    if (coreRef.current) {
      const a = THREE.MathUtils.clamp(mix, 0, 1);
      const b = THREE.MathUtils.clamp(mix - 1, 0, 1);
      scratchColor
        .copy(coreColors[0])
        .lerp(coreColors[1], a)
        .lerp(coreColors[2], b);
      coreRef.current.material.color.lerp(scratchColor, 0.08);
      coreRef.current.material.emissiveIntensity = THREE.MathUtils.lerp(
        coreRef.current.material.emissiveIntensity,
        0.3 + mix * 0.2,
        0.05
      );
    }
    if (shellRef.current) {
      // Services act (mix≈1): shell goes more frosted/translucent.
      // Portal act (mix≈2): shell goes denser/more solid-gloss.
      const targetTransmission = mix > 1.5 ? 0.35 : mix > 0.5 ? 0.65 : 0.92;
      shellRef.current.material.transmission = THREE.MathUtils.lerp(
        shellRef.current.material.transmission,
        targetTransmission,
        0.04
      );
    }
  });

  return (
    <group ref={group} dispose={null}>
      {/* Outer glass shell — carries the "glossy glass capsule" read */}
      <mesh ref={shellRef} castShadow receiveShadow>
        <capsuleGeometry args={[0.62, 1.1, 16, 48]} />
        <meshPhysicalMaterial
          color="#fff7e6"
          roughness={0.06}
          metalness={0}
          transmission={0.92}
          thickness={1.4}
          ior={1.45}
          chromaticAberration={0.02}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.4}
        />
      </mesh>

      {/* Inner "medicine" core — visible through the glass, carries the
          brand gold and is what actually cross-fades with scroll */}
      <mesh ref={coreRef} scale={0.6}>
        <capsuleGeometry args={[0.62, 1.1, 16, 48]} />
        <meshPhysicalMaterial
          color="#d4ac56"
          roughness={0.25}
          metalness={0.35}
          clearcoat={0.6}
          emissive="#d4ac56"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Fine gold dust drifting around the pill for premium ambient detail */}
      <Sparkles
        count={40}
        scale={[2.4, 2.4, 2.4]}
        size={1.6}
        speed={0.25}
        color="#ecd49a"
        opacity={0.6}
      />
    </group>
  );
}
