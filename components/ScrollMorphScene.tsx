"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsapConfig";

// ─── Vertex Shader ────────────────────────────────────────────────
// Displacement tetap sama — scroll morph dari foto A ke B
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

// ─── Fragment Shader ──────────────────────────────────────────────
// Alpha berdasarkan brightness — area gelap jadi transparan
// Efek: background shader/particle keliatan di balik foto
// mix-blend-mode screen dikerjain di level CSS
const fragmentShader = `
  uniform sampler2D uTextureA;
  uniform sampler2D uTextureB;
  uniform float uProgress;
  uniform float uAlphaThreshold;
  uniform float uEdgeSoftness;

  varying vec2 vUv;

  void main() {
    vec4 colorA = texture2D(uTextureA, vUv);
    vec4 colorB = texture2D(uTextureB, vUv);

    // Mix warna antara 2 foto berdasarkan scroll progress
    vec4 finalColor = mix(colorA, colorB, uProgress);

    // Luminance (brightness) pixel
    float luma = dot(finalColor.rgb, vec3(0.299, 0.587, 0.114));

    // Alpha = 0 di area gelap, 1 di area terang
    // Threshold bisa di-tune — sekarang 0.08 = area sangat gelap hilang
    float alpha = smoothstep(uAlphaThreshold, uAlphaThreshold + uEdgeSoftness, luma);

    // Edge vignette — tepi foto fade out biar tidak kotak
    vec2 center = vUv - 0.5;
    float edgeDist = length(center * vec2(1.0, 0.75));
    float edgeFade = smoothstep(0.52, 0.28, edgeDist);

    // Sedikit boost warna biar tidak pudar
    vec3 boosted = finalColor.rgb * 1.15;

    // Cyan tint subtle di highlight — efek hologram
    float highlightMask = smoothstep(0.7, 1.0, luma);
    boosted = mix(boosted, boosted + vec3(0.0, 0.08, 0.12), highlightMask * (1.0 - uProgress));
    boosted = mix(boosted, boosted + vec3(0.04, 0.02, 0.10), highlightMask * uProgress);

    gl_FragColor = vec4(boosted, alpha * edgeFade);
  }
`;

// ─── Morph Plane ──────────────────────────────────────────────────
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
          uAlphaThreshold: { value: 0.08 },
          uEdgeSoftness: { value: 0.35 },
        }}
        transparent={true}
        depthWrite={false}
      />
    </mesh>
  );
}

// ─── Scene Lights ─────────────────────────────────────────────────
function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 3]} intensity={1.0} color="#ffffff" />
      <pointLight position={[-3, -2, -3]} intensity={0.4} color="#00f5ff" />
      <pointLight position={[0, 0, 4]} intensity={0.3} color="#7b2fff" />
    </>
  );
}

// ─── Export ───────────────────────────────────────────────────────
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
      {/* Canvas: alpha true + transparent background */}
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,          // background canvas transparan
          premultipliedAlpha: false,
        }}
        style={{
          background: "transparent",
          mixBlendMode: "screen", // area gelap foto = transparan, highlight = visible
        }}
        dpr={[1, 2]}
      >
        <SceneLights />
        <MorphPlane
          textureAUrl={textureAUrl}
          textureBUrl={textureBUrl}
          progressRef={progressRef.current}
        />
      </Canvas>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-xs tracking-widest text-cyan-400/40 uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-cyan-400/40 to-transparent animate-pulse" />
      </div>
    </div>
  );
}
