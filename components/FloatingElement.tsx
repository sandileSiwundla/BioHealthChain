import React, { useRef, useEffect } from "react";

const SphericalWeb = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const points: { x: number; y: number; z: number }[] = [];
    const totalPoints = 180;
    const radius = 300;

    for (let i = 0; i < totalPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
      });
    }

    let angle = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);

      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      const projected: { x: number; y: number }[] = [];
      for (let p of points) {
        const x = p.x * cosA - p.z * sinA;
        const z = p.x * sinA + p.z * cosA;
        const scale = 500 / (500 + z);
        projected.push({
          x: x * scale,
          y: p.y * scale,
        });
      }

      ctx.strokeStyle = "black";
      ctx.lineWidth = 1.5;

      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          // connect only if points are close enough to reduce clutter
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < 120) {
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.restore();
      angle += 0.002;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" style={{ background: "transparent" }} />;
};

export default SphericalWeb;
