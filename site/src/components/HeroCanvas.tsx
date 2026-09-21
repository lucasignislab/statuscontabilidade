"use client";

import { useEffect, useRef } from "react";

/**
 * Gradiente vivo do hero: manchas suaves em tons de vermelho/rosa da marca
 * que respiram lentamente sobre o fundo branco. Eco moderno da onda do
 * banner original, sem peso de WebGL.
 */
export default function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;

    const blobs = [
      { x: 0.82, y: 0.2, r: 0.55, color: "rgba(192,5,24,0.10)", dx: 0.012, dy: 0.008, t: 0 },
      { x: 0.65, y: 0.75, r: 0.45, color: "rgba(186,43,37,0.07)", dx: -0.009, dy: 0.011, t: 2 },
      { x: 0.15, y: 0.85, r: 0.5, color: "rgba(250,220,224,0.5)", dx: 0.007, dy: -0.01, t: 4 },
    ];

    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const b of blobs) {
        const t = time * 0.00012 + b.t;
        const x = (b.x + Math.sin(t) * b.dx * 10) * w;
        const y = (b.y + Math.cos(t * 1.2) * b.dy * 10) * h;
        const r = b.r * Math.max(w, h) * (1 + Math.sin(t * 0.8) * 0.06);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, b.color);
        g.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }
    };

    const loop = (time: number) => {
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduced) {
      draw(0);
    } else {
      raf = requestAnimationFrame(loop);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
