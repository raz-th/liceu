'use client';
import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
      // alert('useEffect runs');
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function drawStars() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 400; i++) {
        const x = rand(0, canvas.width);
        const y = rand(0, canvas.height);
        const r = rand(0.2, 1.1);
        const op = rand(0.25, 0.9);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();
      }

      for (let i = 0; i < 20; i++) {
        const x = rand(0, canvas.width);
        const y = rand(0, canvas.height * 0.65);
        const r = rand(1.4, 2.4);
        const op = rand(0.65, 1.0);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,230,255,${op})`;
        ctx.fill();
      }

      for (let i = 0; i < 50; i++) {
        const x = rand(0, canvas.width);
        const y = rand(0, canvas.height);
        const r = rand(0.2, 0.7);
        const op = rand(0.1, 0.3);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180,200,255,${op})`;
        ctx.fill();
      }
    }

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // alert(`canvas size: ${canvas.width} ${canvas.height}`); 
      drawStars();
    }

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas ref={canvasRef} className={"canvas"} />
  );
}