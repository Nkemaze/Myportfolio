import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Animated code particles
function CodeParticles({ count = 200 }) {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = mouse.y * 0.1;
      ref.current.position.x = mouse.x * 0.5;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00ffff"
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Rotating tech cube
function TechCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + mouse.y * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + mouse.x * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial
          color="#00ffff"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh>
        <boxGeometry args={[2.1, 2.1, 2.1]} />
        <meshBasicMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

// Orbiting rings
function OrbitingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.3;
      ring2Ref.current.rotation.z = t * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.4;
      ring3Ref.current.rotation.z = t * 0.2;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[3.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[4, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
      </mesh>
    </>
  );
}

const ThreeScene = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-muted/20" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-mono text-sm tracking-wider">
            Interactive
          </span>
          <h2 className="section-title mt-4">
            <span className="gradient-text">3D Showcase</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Move your mouse to interact with the 3D elements
          </p>
        </motion.div>

        <div className="h-[500px] md:h-[600px] rounded-2xl overflow-hidden glass-card">
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <TechCube />
            <OrbitingRings />
            <CodeParticles />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default ThreeScene;
