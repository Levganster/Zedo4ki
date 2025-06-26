import { Canvas } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Group } from 'three'

function MushroomModel() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF('/Mushroom.glb')

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8
    }
  })

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} rotation={[0, 0, 0.2]}>
      <primitive object={scene} scale={0.08} />
    </group>
  )
}

export default function RotatingMushroom() {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32">
      <Canvas camera={{ position: [0, 1, 6], fov: 10 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <MushroomModel />
      </Canvas>
    </div>
  )
}

useGLTF.preload('/Mushroom.glb') 