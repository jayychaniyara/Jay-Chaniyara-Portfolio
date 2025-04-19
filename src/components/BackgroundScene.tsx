
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleField() {
  const points = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.x = time * 0.05;
    points.current.rotation.y = time * 0.075;
  });

  const count = 2500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const x = (Math.random() - 0.5) * 25;
    const y = (Math.random() - 0.5) * 25;
    const z = (Math.random() - 0.5) * 25;
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
  }

  return (
    <points ref={points}>
      <pointsMaterial 
        attach="material"
        size={0.05}
        transparent={true}
        color="#8a2be2"
        sizeAttenuation={true}
        depthWrite={false}
      />
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>
    </points>
  );
}

const BackgroundScene = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-background/80 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
