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

    meshRef.current.rotation.y += delta * 0.05;

    const targetRotationX = mouse.y * 0.25;
    const targetRotationY = mouse.x * 0.35;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      targetRotationX,
      0.05
    );

    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      meshRef.current.rotation.y + targetRotationY * 0.1,
      0.05
    );
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <planeGeometry args={[3, 4, 256, 256]} />
        <meshStandardMaterial
          map={colorMap}
          displacementMap={depthMap}
          displacementScale={0.6}
          roughness={0.5}
          metalness={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1.2} />
      <pointLight position={[-3, -2, -3]} intensity={0.5} color="#8888ff" />
    </>
  );
}

export default function ThreeScene({
  colorMapUrl = "https://i.ibb.co.com/ksf232R1/file-0000000066d071f58ad62c9d9efd993f.png",
  depthMapUrl = "https://i.ibb.co.com/6VPGgRD/file-00000000dbbc71fab99aec964e0b4894.png",
}: {
  colorMapUrl?: string;
  depthMapUrl?: string;
}) {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
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
