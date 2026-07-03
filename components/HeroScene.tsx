"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  Float,
  Torus,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

function GoldTruffle() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.18;
      meshRef.current.rotation.x += delta * 0.04;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.9}>
      <mesh ref={meshRef} castShadow>
        <icosahedronGeometry args={[1.35, 6]} />
        <MeshDistortMaterial
          color="#D4A24C"
          emissive="#93672E"
          emissiveIntensity={0.15}
          metalness={0.9}
          roughness={0.22}
          distort={0.22}
          speed={1.1}
        />
      </mesh>
    </Float>
  );
}

function SealRing() {
  const ringRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.12;
      ringRef.current.rotation.x = Math.PI / 2.4;
    }
  });
  return (
    <group ref={ringRef}>
      <Torus args={[2.05, 0.03, 16, 100]}>
        <meshStandardMaterial
          color="#F1DDA8"
          metalness={1}
          roughness={0.25}
        />
      </Torus>
    </group>
  );
}

function Hazelnuts() {
  const groupRef = useRef<THREE.Group>(null);
  const nuts = useMemo(
    () =>
      new Array(6).fill(0).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2.9 + (i % 2) * 0.3;
        return {
          x: Math.cos(angle) * radius,
          z: Math.sin(angle) * radius,
          y: Math.sin(angle * 2) * 0.4,
          scale: 0.18 + (i % 3) * 0.05,
        };
      }),
    []
  );

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.09;
    }
  });

  return (
    <group ref={groupRef}>
      {nuts.map((n, i) => (
        <mesh key={i} position={[n.x, n.y, n.z]} scale={n.scale} castShadow>
          <sphereGeometry args={[1, 24, 24]} />
          <meshStandardMaterial color="#6B3A22" roughness={0.6} metalness={0.05} />
        </mesh>
      ))}
    </group>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 5, 4]} intensity={80} color="#F1DDA8" />
      <pointLight position={[-5, -2, -3]} intensity={30} color="#93372F" />
      <spotLight
        position={[0, 6, 2]}
        angle={0.5}
        penumbra={0.8}
        intensity={40}
        color="#E8C275"
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.4, 6.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <Lights />
      <GoldTruffle />
      <SealRing />
      <Hazelnuts />
      <Environment preset="city" />
    </Canvas>
  );
}
