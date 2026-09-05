import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function HeroCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  // Load 6 textures for the cube faces
  // Using high-quality placeholder URLs for different event types
  const textures = useTexture([
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1505236858219-8373dd707522?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ]);

  useFrame((_state: any, delta: number) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  // Calculate target scale
  const scale = hovered ? 1.1 : 1;

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <directionalLight position={[-10, -10, -5]} intensity={1} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={new THREE.Vector3(scale, scale, scale)}
      >
        <boxGeometry args={[4.5, 4.5, 4.5]} />
        {textures.map((texture: THREE.Texture, index: number) => (
          <meshStandardMaterial 
            key={index} 
            attach={`material-${index}`} 
            map={texture} 
            roughness={0.2}
            metalness={0.1}
          />
        ))}
      </mesh>
    </>
  );
}
