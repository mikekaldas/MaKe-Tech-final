import React, { useEffect, useRef } from 'react';

const LandingPage = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(columns).fill(0);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;
      drops.forEach((drop, x) => {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, x * fontSize, drop * fontSize);
        drops[x] = drop >= canvas.height / fontSize ? 0 : drop + 1;
      });
    };
    const interval = setInterval(draw, 100);
    return () => clearInterval(interval);
  }, []);

  const handleLabDoorClick = () => {
    alert('You clicked the lab door!');  // Replace this with actual navigation or functionality.
  };

  return (
    <div>
      <canvas ref={canvasRef} width={800} height={600} style={{ display: 'block', margin: '0 auto' }} />
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <div style={{
          display: 'inline-block',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'lightblue',
          position: 'relative',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'white',
            position: 'absolute',
            top: 0,
            left: 0,
            transition: 'transform 0.5s',
            transform: 'scale(1)',
          }} 
            onClick={() => {
              // Animation code for opening mouth revealing logo
              alert('Logo Revealed!');  // Replace this with actual logo reveal.
            }}>
          </div>
        </div>
        <button onClick={handleLabDoorClick} style={{ marginTop: 20, padding: '10px 20px', fontSize: '16px' }}>
          Open Lab Door
        </button>
      </div>
    </div>
  );
};

export default LandingPage;