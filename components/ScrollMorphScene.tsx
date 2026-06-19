"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsapConfig";

const vertexShader = `
  uniform sampler2D uTextureB;
  uniform float uProgress;
  uniform float uDisplacementStrength;

  varying vec2 vUv;

  void main() {
    vUv = uv;

    vec4 depthSample = texture2D(uTextureB, uv);
    float depth = depthSample.r;

    vec3 displaced = position + normal * depth * uProgress * uDisplacementStrength;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTextureA;
  uniform sampler2D uTextureB;
  uniform float uProgress;

  varying vec2 vUv;

  void main() {
    vec4 colorA = texture2D(uTextureA, vUv);
    vec4 colorB = texture2D(uTextureB, vUv);

    vec4 finalColor = mix(colorA, colorB, uProgress);

    gl_FragColor = finalColor;
  }
`;

function MorphPlane({
  textureAUrl,
  textureBUrl,
  progressRef,
}: {
  textureAUrl: string;
  textureBUrl: string;
  progressRef: { current: number };
}) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const [textureA, textureB] = useLoader(THREE.TextureLoader, [
    textureAUrl,
    textureBUrl,
  ]);

  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.uProgress.value = progressRef.current;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[3.2, 4.2, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={{
          uTextureA: { value: textureA },
          uTextureB: { value: textureB },
          uProgress: { value: 0 },
          uDisplacementStrength: { value: 1.4 },
        }}
      />
    </mesh>
  );
}

export default function ScrollMorphScene({
  textureAUrl,
  textureBUrl,
}: {
  textureAUrl: string;
  textureBUrl: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef({ current: 0 });

  useEffect(() => {
    registerGsap();
    if (!sectionRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        progressRef.current.current = self.progress;
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative h-screen w-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.2} />
        <pointLight position={[-3, -2, -3]} intensity={0.5} color="#8888ff" />
        <MorphPlane
          textureAUrl={textureAUrl}
          textureBUrl={textureBUrl}
          progressRef={progressRef.current}
        />
      </Canvas>
    </div>
  );
}
