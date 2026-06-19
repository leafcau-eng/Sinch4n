"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { useMouseParallax } from "@/hooks/useMouseParallax";

function PhotoCard({
  colorMapUrl,
  depthMapUrl,
}: {
  colorMapUrl: string;
  depthMapUrl: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useMouseParallax();

  const [colorMap, depthMap] = useLoader(THREE.TextureLoader, [
    colorMapUrl,
    depthMapUrl,
  ]);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const t = state.clock.elapsedTime;

    meshRef.current.rotation.y += delta * 0.035;

    const targetRotationX = mouse.y * 0.18;
    const targetRotationY = mouse.x * 0.26;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotationX,
      0.035
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      meshRef.current.rotation.y + targetRotationY * 0.06,
      0.035
    );

    const breathe = 1 + Math.sin(t * 0.4) * 0.015;
    meshRef.current.scale.setScalar(breathe);
  });

  return (
    <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.45}>
      <mesh ref={meshRef}>
        <planeGeometry args={[4.5, 6, 200, 200]} />
        <meshStandardMaterial
          map={colorMap}
          displacementMap={depthMap}
          displacementScale={0.5}
          roughness={0.5}
          metalness={0.2}
          side={THREE.DoubleSide}
          transparent
          opacity={0.6}
          emissive={new THREE.Color("#00f5ff")}
          emissiveIntensity={0.08}
        />
      </mesh>
    </Float>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight position={[3, 2, 3]} intensity={1.4} color="#00f5ff" />
      <pointLight position={[-3, -2, -2]} intensity={0.9} color="#7b2fff" />
      <pointLight position={[0, 0, 5]} intensity={0.4} color="#ffffff" />
    </>
  );
}

export default function HeroPhotoCard({
  colorMapUrl,
  depthMapUrl,
}: {
  colorMapUrl: string;
  depthMapUrl: string;
}) {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <SceneLights />
        <PhotoCard colorMapUrl={colorMapUrl} depthMapUrl={depthMapUrl} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
