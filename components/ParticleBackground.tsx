"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMouseParallax } from "@/hooks/useMouseParallax";

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 800;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;

    for (let i = 1; i < arr.length; i += 3) {
      arr[i] -= 0.003;
      if (arr[i] < -10) arr[i] = 10;
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f5ff"
        size={0.025}
        transparent
        opacity={0.5}
      />
    </points>
  );
}

function GlowingOrb() {
  const orbRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (orbRef.current) orbRef.current.rotation.y += 0.002;
    if (wireRef.current) {
      wireRef.current.rotation.x += 0.003;
      wireRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={[2, 0.5, -2]}>
      <mesh ref={orbRef}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhongMaterial
          color="#003366"
          emissive="#001133"
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>
    </group>
  );
}

function FloatingTetrahedrons() {
  const groupRefs = useRef<THREE.Mesh[]>([]);
  const basePositions = useMemo(
    () => [
      [-3, 2, -3],
      [3, -1, -4],
      [-2, -2, -3],
      [4, 2, -5],
      [0, 3, -4],
    ] as [number, number, number][],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    groupRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.007;
      mesh.position.y = basePositions[i][1] + Math.sin(t + i) * 0.3;
    });
  });

  return (
    <>
      {basePositions.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          ref={(el) => {
            if (el) groupRefs.current[i] = el;
          }}
        >
          <tetrahedronGeometry args={[0.15]} />
          <meshBasicMaterial
            color="#7b2fff"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}
    </>
  );
}

function SceneLights() {
  return (
    <>
      <pointLight position={[2, 2, 2]} color="#00f5ff" intensity={2} distance={10} />
      <ambientLight color="#000020" intensity={2} />
    </>
  );
}

function MouseFollowCamera() {
  const mouse = useMouseParallax();

  useFrame(({ camera }) => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.03;
    camera.position.y += (-mouse.y * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <SceneLights />
        <ParticleField />
        <GlowingOrb />
        <FloatingTetrahedrons />
        <MouseFollowCamera />
      </Canvas>
    </div>
  );
}
