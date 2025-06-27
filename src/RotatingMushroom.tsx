import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

function MushroomModel() {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/Z.glb");

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, 0.1, 0]}>
      <group ref={groupRef}>
        <primitive object={scene} scale={0.7} />
      </group>
    </group>
  );
}

export default function RotatingMushroom() {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-cyan-400/10 rounded-full blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/5 via-transparent to-purple-400/5 rounded-full blur-2xl" />

      <div className="absolute -top-2 -left-2 w-3 h-3 border-t border-l border-purple-400/30" />
      <div className="absolute -top-2 -right-2 w-3 h-3 border-t border-r border-purple-400/30" />
      <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b border-l border-purple-400/30" />
      <div className="absolute -bottom-2 -right-2 w-3 h-3 border-b border-r border-purple-400/30" />

      <div className="absolute top-0 left-1/2 w-0.5 h-0.5 bg-purple-400/50 rounded-full transform -translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-purple-400/50 rounded-full transform -translate-x-1/2 animate-pulse" />
      <div className="absolute left-0 top-1/2 w-0.5 h-0.5 bg-purple-400/50 rounded-full transform -translate-y-1/2 animate-pulse" />
      <div className="absolute right-0 top-1/2 w-0.5 h-0.5 bg-purple-400/50 rounded-full transform -translate-y-1/2 animate-pulse" />

      <div className="absolute inset-2 border border-purple-400/15 rounded-full animate-pulse" />
      <div
        className="absolute inset-4 border border-cyan-400/10 rounded-full"
        style={{ animationDelay: "0.5s" }}
      />

      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />

      <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/5 backdrop-blur-xs">
        <Canvas camera={{ position: [0, 1, 6], fov: 10 }}>
          {/* Основное окружающее освещение */}
          <ambientLight intensity={0.4} color="#ffffff" />

          {/* Главный направленный свет */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={5}
            color="#ffffff"
            castShadow
          />

          {/* Цветные акцентные огни */}
          <pointLight position={[-3, 2, 3]} intensity={1} color="#22d3ee" />
          <pointLight position={[3, -2, 3]} intensity={1} color="#a855f7" />
          <pointLight position={[0, 3, -2]} intensity={0.8} color="#3b82f6" />

          {/* Подсветка снизу */}
          <pointLight position={[0, -3, 2]} intensity={0.6} color="#f59e0b" />

          <MushroomModel />
        </Canvas>
      </div>

      <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/5 via-cyan-400/5 to-blue-400/5 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}

useGLTF.preload("/Mushroom.glb");
