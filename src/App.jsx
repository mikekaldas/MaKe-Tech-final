import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Environment, Stars } from '@react-three/drei';

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      
      {/* 3D Background Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            
            <Float speed={2} rotationIntensity={2} floatIntensity={2}>
              <Sphere args={[1.4, 100, 100]} position={[0, 0, -1]}>
                <MeshDistortMaterial 
                  color="#0ea5e9" 
                  speed={4} 
                  distort={0.4} 
                  roughness={0.1}
                  metalness={0.8}
                />
              </Sphere>
            </Float>

            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Environment preset="city" />
          </Suspense>
        </Canvas>
      </div>

      {/* MaKe Technologies Content Layer */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', color: 'white', padding: '0 20px', fontFamily: 'sans-serif' }}>
        
        <div style={{ border: '1px solid rgba(14, 165, 233, 0.3)', backgroundColor: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', padding: '6px 16px', borderRadius: '50px', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '24px' }}>
          Systems Online // v3.0
        </div>
        
        <h1 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.05em', margin: '0 0 16px 0' }}>
          MaKe <span style={{ color: '#0ea5e9' }}>Technologies</span>
        </h1>
        
        <p style={{ maxWidth: '500px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '40px', letterSpacing: '0.05em' }}>
          Developing high-precision metrics software and custom tracking hardware engineered for elite performance.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button style={{ padding: '16px 32px', backgroundColor: '#0ea5e9', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', fontSize: '12px' }}>
            Initialize Hardware
          </button>
          <button style={{ padding: '16px 32px', backgroundColor: 'rgba(15, 23, 42, 0.8)', color: 'white', border: '1px solid #334155', borderRadius: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', fontSize: '12px' }}>
            Software Lab
          </button>
        </div>

      </div>
    </div>
  );
}
