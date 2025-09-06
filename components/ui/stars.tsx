"use client";

import { useEffect, useRef } from "react";

export default function FloatingElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // Create stars
    const stars: {
      x: number;
      y: number;
      radius: number;
      brightness: number;
      speed: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }[] = [];
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        brightness: Math.random() * 0.5 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 0.05,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    let animationFrameId: number;
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.01;

      // Clear canvas completely for transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        // Move stars slowly downward
        star.y += star.speed * 0.1;

        // Reset star if it goes off screen
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Calculate twinkling effect
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);

        // Create gradient for star
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.radius * 2);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.brightness * twinkle})`);
        gradient.addColorStop(0.5, `rgba(200, 220, 255, ${star.brightness * twinkle * 0.7})`);
        gradient.addColorStop(1, "rgba(100, 150, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw occasional shooting stars
      if (Math.random() < 0.001) {
        drawShootingStar(ctx, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to draw a shooting star
  const drawShootingStar = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const x = Math.random() * width;
    const y = Math.random() * height * 0.3;
    const length = 50 + Math.random() * 100;
    const angle = Math.PI / 4 + Math.random() * (Math.PI / 8);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - length * Math.cos(angle), y + length * Math.sin(angle));

    const gradient = ctx.createLinearGradient(
      x,
      y,
      x - length * Math.cos(angle),
      y + length * Math.sin(angle)
    );
    gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
    gradient.addColorStop(0.5, "rgba(200, 220, 255, 0.8)");
    gradient.addColorStop(1, "rgba(100, 150, 255, 0)");

    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
