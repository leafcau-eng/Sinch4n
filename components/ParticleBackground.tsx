"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMouseParallax } from "@/hooks/useMouseParallax";

// ─── Particle Field ───────────────────────────────────────────────
// 1200 particles, split cyan + purple untuk depth visual yang lebih kaya
function ParticleField() {
  const cyanRef = useRef<THREE.Points>(null);
  const purpleRef = useRef<THREE.Points>(null);

  const cyanPositions = useMemo(() => {
    const count = 700;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 22;
    }
    return pos;
  }, []);

  const purplePositions = useMemo(() => {
    const count = 500;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 18;
    }
    return pos;
  }, []);

  useFrame(() => {
    // Cyan particles drift downward
    if (cyanRef.current) {
      const attr = cyanRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      for (let i = 1; i < arr.length; i += 3) {
        arr[i] -= 0.002;
        if (arr[i] < -11) arr[i] = 11;
      }
      attr.needsUpdate = true;
    }
    // Purple particles drift upward (counter motion)
    if (purpleRef.current) {
      const attr = purpleRef.current.geometry.attributes
        .position as THREE.BufferAttribute;
      const arr = attr.array as Float32Array;
      for (let i = 1; i < arr.length; i += 3) {
        arr[i] += 0.0015;
        if (arr[i] > 11) arr[i] = -11;
      }
      attr.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={cyanRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[cyanPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#00f5ff" size={0.022} transparent opacity={0.55} />
      </points>
      <points ref={purpleRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[purplePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#7b2fff" size={0.018} transparent opacity={0.45} />
      </points>
    </>
  );
}

// ─── Center Orb ───────────────────────────────────────────────────
// Wireframe icosahedron di tengah layar sebagai focal point utama
function CenterOrb() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (outerRef.current) {
      outerRef.current.rotation.x += 0.003;
      outerRef.current.rotation.y += 0.005;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= 0.004;
      innerRef.current.rotation.y -= 0.003;
    }
    // Subtle breathe scale
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.04);
    }
  });

  return (
    <group position={[0, 0, -1]}>
      {/* Soft glow core */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshPhongMaterial
          color="#003366"
          emissive="#001a44"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Inner wireframe — tight, fast */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial
          color="#00f5ff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>

      {/* Outer wireframe — loose, slow */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial
          color="#7b2fff"
          wireframe
          transparent
          opacity={0.07}
        />
      </mesh>
    </group>
  );
}

// ─── Backdrop Sphere ──────────────────────────────────────────────
// Wireframe sphere besar di belakang sebagai atmospheric backdrop
function BackdropSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0004;
  });

  return (
    <mesh ref={ref} position={[0, 0, -6]}>
      <sphereGeometry args={[6, 18, 18]} />
      <meshBasicMaterial
        color="#00f5ff"
        wireframe
        transparent
        opacity={0.025}
      />
    </mesh>
  );
}

// ─── Torus Ring ───────────────────────────────────────────────────
// Ring yang mengelilingi center orb, rotate pada sumbu X
function TorusRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.3) * 0.1;
    ref.current.rotation.z += 0.004;
  });

  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <torusGeometry args={[2.2, 0.008, 8, 80]} />
      <meshBasicMaterial color="#00f5ff" transparent opacity={0.2} />
    </mesh>
  );
}

// ─── Second Torus (tilted) ────────────────────────────────────────
function TorusRing2() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = Math.PI / 4 + Math.sin(t * 0.25) * 0.08;
    ref.current.rotation.z -= 0.003;
  });

  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <torusGeometry args={[2.8, 0.005, 8, 90]} />
      <meshBasicMaterial color="#7b2fff" transparent opacity={0.12} />
    </mesh>
  );
}

// ─── Floating Tetrahedrons ────────────────────────────────────────
function FloatingTetrahedrons() {
  const groupRefs = useRef<THREE.Mesh[]>([]);
  const basePositions = useMemo(
    () => [
      [-3.5, 2.2, -3],
      [3.2, -1.2, -4],
      [-2.5, -2.5, -3],
      [4.2, 2.5, -5],
      [0.5, 3.2, -4],
      [-4, -0.5, -5],
      [3.8, 0.8, -3],
    ] as [number, number, number][],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    groupRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.007;
      mesh.position.y = basePositions[i][1] + Math.sin(t * 0.8 + i * 1.2) * 0.35;
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
          <tetrahedronGeometry args={[0.13]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#7b2fff" : "#00f5ff"}
            wireframe
            transparent
            opacity={0.45}
          />
        </mesh>
      ))}
    </>
  );
}

// ─── Lights ───────────────────────────────────────────────────────
function SceneLights() {
  return (
    <>
      <pointLight position={[0, 0, 2]} color="#00f5ff" intensity={3} distance={12} />
      <pointLight position={[-3, 2, -1]} color="#7b2fff" intensity={1.5} distance={10} />
      <ambientLight color="#000020" intensity={2} />
    </>
  );
}

// ─── Mouse Camera ─────────────────────────────────────────────────
function MouseFollowCamera() {
  const mouse = useMouseParallax();

  useFrame(({ camera }) => {
    camera.position.x += (mouse.x * 0.6 - camera.position.x) * 0.03;
    camera.position.y += (-mouse.y * 0.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Export ───────────────────────────────────────────────────────
export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <SceneLights />
        <BackdropSphere />
        <ParticleField />
        <CenterOrb />
        <TorusRing />
        <TorusRing2 />
        <FloatingTetrahedrons />
        <MouseFollowCamera />
      </Canvas>
    </div>
  );
}
