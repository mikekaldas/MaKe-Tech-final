import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: '#020617', margin: 0, padding: 0, overflow: 'hidden', position: 'relative' }}>
      
      {/* Safe-Mode 3D Layer */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={2} />
          
          {/* Hologram Wireframe Sphere */}
          <mesh>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial color="#0ea5e9" wireframe={true} />
          </mesh>
          
          <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
        </Canvas>
      </div>

      {/* Text Layer */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', color: 'white', fontFamily: 'sans-serif', pointerEvents: 'none' }}>
        <div style={{ border: '1px solid rgba(14, 165, 233, 0.3)', backgroundColor: 'rgba(14, 165, 233, 0.1)', color: '#38bdf8', padding: '6px 16px', borderRadius: '50px', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '24px' }}>
          Core Systems Online
        </div>
        
        <h1 style={{ fontSize: '3rem', fontWeight: '800', letterSpacing: '-0.05em', margin: '0 0 16px 0' }}>
          MaKe <span style={{ color: '#0ea5e9' }}>Technologies</span>
        </h1>
        
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
          Tracking Software & Hardware Analytics
        </p>
      </div>
      
    </div>
  );
}
