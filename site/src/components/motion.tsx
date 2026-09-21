"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Fade-up simples ao entrar na viewport. Uma vez só. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Entrada escalonada dos filhos (cards). */
export function RevealStagger({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current!.children,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Headline que revela palavra por palavra. `accent` marca a palavra em itálico vermelho (entra por último). */
export function SplitHeadline({
  text,
  accent,
  className = "",
  accentClass = "italic text-status-red",
  as: Tag = "h1",
}: {
  text: string;
  accent?: string;
  className?: string;
  accentClass?: string;
  as?: "h1" | "h2";
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  const words = text.split(" ").map((w) => ({
    word: w,
    isAccent: accent ? w.replace(/[.,!?]/g, "").toLowerCase() === accent.toLowerCase() : false,
  }));
  // reordena: palavra de destaque por último na animação
  const order = [...words].sort((a, b) => Number(a.isAccent) - Number(b.isAccent));

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const inners = ref.current!.querySelectorAll(".split-inner");
      gsap.fromTo(
        inners,
        { yPercent: 110 },
        { yPercent: 0, duration: 0.7, stagger: 0.08, ease: "power4.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {order.map((w, i) => (
        <span key={i} className="split-wrap">
          <span
            className={`split-inner ${w.isAccent ? accentClass : ""}`}
            style={w.isAccent ? { fontFamily: "var(--font-display)" } : undefined}
          >
            {w.word}
          </span>
          {i < order.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

/** Contador animado no scroll. */
export function CountUp({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      ref.current.textContent = `${value}${suffix}`;
      return;
    }
    const ctx = gsap.context(() => {
      const obj = { n: 0 };
      gsap.to(obj, {
        n: value,
        duration: 1.6,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = `${Math.round(obj.n)}${suffix}`;
        },
      });
    });
    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/** Reveal de imagem: clip-path abre de baixo para cima + scale. */
export function ImageReveal({
  src,
  alt,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const img = ref.current!.querySelector("img");
      gsap.fromTo(
        ref.current,
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "power4.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
        }
      );
      if (img) {
        gsap.fromTo(
          img,
          { scale: 1.08 },
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={`w-full h-full object-cover ${imgClassName}`} loading="lazy" />
    </div>
  );
}
