import React, { useRef, useEffect } from "react";

export default function SphericalWeb({ width = "100%", height = "100%", points = 220, connectDist = 0.22 }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0, down: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // ✅ fix null error
    const ctx = canvas.getContext("2d");
    if (!ctx) return; // ✅ handle missing context

    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    ctx.scale(DPR, DPR);

    // generate points on a sphere using Fibonacci lattice
    const n = points;
    const pts: { x: number; y: number; z: number }[] = [];
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2; // -1..1
      const r = Math.sqrt(1 - y * y);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i; // golden angle
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      pts.push({ x, y, z });
    }

    let rotX = 0.4;
    let rotY = 0.7;
    let speed = 0.0015;

    const onResize = () => {
      if (!canvas) return;
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    window.addEventListener("resize", onResize);

    const onMove = (e: PointerEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.current.x = x * 2;
      mouse.current.y = y * 2;
    };
    window.addEventListener("pointermove", onMove);

    function project(p: { x: number; y: number; z: number }, scale = 1.4) {
      const distance = 3;
      const z = p.z + distance;
      const perspective = 1 / z;
      return {
        x: (p.x * perspective * w * scale) / 2 + w / 2,
        y: (p.y * perspective * h * scale) / 2 + h / 2,
        z: z,
        perspective,
      };
    }

    function rotate(p: { x: number; y: number; z: number }, ax: number, ay: number) {
      let y = p.y * Math.cos(ax) - p.z * Math.sin(ax);
      let z = p.y * Math.sin(ax) + p.z * Math.cos(ax);
      let x = p.x;
      let x2 = x * Math.cos(ay) + z * Math.sin(ay);
      let z2 = -x * Math.sin(ay) + z * Math.cos(ay);
      return { x: x2, y, z: z2 };
    }

    function draw(t: number) {
      rafRef.current = requestAnimationFrame(draw);

      const targetY = mouse.current.x * 0.8;
      const targetX = mouse.current.y * 0.5;
      rotY += (targetY - rotY) * 0.02 + speed;
      rotX += (targetX - rotX) * 0.02;

      ctx.clearRect(0, 0, w, h);

      const projected = pts.map((p) => {
        const rp = rotate(p, rotX, rotY);
        return project(rp);
      });

      const grad = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.05, w / 2, h / 2, Math.max(w, h));
      grad.addColorStop(0, "rgba(10,12,20,0.0)");
      grad.addColorStop(1, "rgba(10,12,20,0.6)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const screenDist = Math.sqrt(dx * dx + dy * dy) / Math.max(w, h);
          const avgPersp = (a.perspective + b.perspective) * 0.5;
          if (screenDist < connectDist * (1.0 / avgPersp)) {
            const alpha = Math.max(0, 0.14 - screenDist * 2.2);
            ctx.strokeStyle = `rgba(180,220,255,${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const depth = 1 - Math.min(0.9, Math.max(0, (p.z - 1.5) / 2.5));
        const size = 1.2 + depth * 2.2;
        ctx.beginPath();
        ctx.fillStyle = `rgba(200,230,255,${0.7 * depth + 0.15})`;
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
    };
  }, [points, connectDist]);

  return (
    <div style={{ width, height, position: "relative", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block", background: "#06070a" }}
      />
    </div>
  );
}
