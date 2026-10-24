"use client";

export default function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshBasicMaterial color="#d4ac56" transparent opacity={0.4} />
    </mesh>
  );
}
