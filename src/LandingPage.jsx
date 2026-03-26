import React, { useEffect, useRef } from 'react';

export default function LandingPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set full screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Matrix effect
    const characters = '01アイウエオ';
    const fontSize = 20;
    let y = 0;

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';
      
      for (let i = 0; i < canvas.width; i += fontSize) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(char, i, y);
      }
      y = y > canvas.height ? 0 : y + fontSize;
    };

    const timer = setInterval(draw, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, background: '#000', overflow: 'hidden' }}>
      <canvas 
        ref={canvasRef} 
        style={{ display: 'block', width: '100%', height: '100%' }}
      />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#0f0',
        fontSize: '24px',
        fontFamily: 'monospace',
        zIndex: 10
      }}>
        MaKe Technologies
      </div>
      <button style={{
        position: 'absolute',
        bottom: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '15px 40px',
        fontSize: '16px',
        background: 'transparent',
        color: '#0f0',
        border: '2px solid #0f0',
        cursor: 'pointer',
        zIndex: 10
      }}>
        CURRENT DEVELOPMENT
      </button>
    </div>
  );
}
