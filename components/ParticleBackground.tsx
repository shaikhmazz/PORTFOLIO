"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"

function Particles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!)
  
  // Generate random positions
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Create a sphere distribution
      const r = 10 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      p[i * 3 + 2] = r * Math.cos(phi)
    }
    return p
  }, [count])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.y -= delta / 10
      points.current.rotation.x -= delta / 15
    }
  })

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <Particles />
      </Canvas>
    </div>
  )
}
