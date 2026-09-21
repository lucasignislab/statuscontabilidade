"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Building2,
  Calculator,
  FileCheck2,
  Rocket,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import type { Service } from "@/data/services";
import { whatsappLink } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

const icons: Record<string, React.ReactNode> = {
  rocket: <Rocket size={22} strokeWidth={1.5} aria-hidden />,
  calculator: <Calculator size={22} strokeWidth={1.5} aria-hidden />,
  "file-check": <FileCheck2 size={22} strokeWidth={1.5} aria-hidden />,
  users: <Users size={22} strokeWidth={1.5} aria-hidden />,
  "user-check": <UserCheck size={22} strokeWidth={1.5} aria-hidden />,
  building: <Building2 size={22} strokeWidth={1.5} aria-hidden />,
  "shield-check": <ShieldCheck size={22} strokeWidth={1.5} aria-hidden />,
};

/**
 * Faixas de serviço: cada card entra lateralmente no scroll,
 * alternando direita/esquerda, com imagem de fundo temática.
 */
export default function ServiceBands({ services }: { services: Service[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const bands = ref.current!.querySelectorAll<HTMLElement>("[data-band]");
      bands.forEach((band) => {
        const dir = band.dataset.dir === "right" ? 1 : -1;
        gsap.fromTo(
          band,
          { opacity: 0, x: dir * 96 },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: band, start: "top 88%", once: true },
          }
        );
        const img = band.querySelector("img");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              duration: 1.4,
              ease: "power3.out",
              scrollTrigger: { trigger: band, start: "top 88%", once: true },
            }
          );
        }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="mt-12 space-y-6">
      {services.map((s, i) => {
        const fromRight = i % 2 === 1;
        return (
          <Link
            key={s.slug}
            href={`/servicos/${s.slug}`}
            data-band
            data-dir={fromRight ? "right" : "left"}
            className="group relative block overflow-hidden rounded-2xl shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt=""
              aria-hidden
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${
                fromRight
                  ? "from-ink/85 via-ink/75 to-ink/70 lg:from-ink/40 lg:via-ink/70 lg:to-ink/95"
                  : "from-ink/85 via-ink/75 to-ink/70 lg:from-ink/95 lg:via-ink/70 lg:to-ink/40"
              }`}
              aria-hidden
            />
            <div
              className={`relative flex min-h-[260px] lg:min-h-[300px] items-center p-8 lg:p-12 ${
                fromRight ? "lg:justify-end lg:text-right" : ""
              }`}
            >
              <div className="max-w-[480px]">
                <span className="icon-chip !bg-status-red !text-white">{icons[s.icon]}</span>
                <h3
                  className="mt-5 text-2xl lg:text-3xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {s.title}
                </h3>
                <p className="mt-2 text-white/80 leading-relaxed">{s.short}</p>
                <span
                  className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-100 ${
                    fromRight ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  Saiba mais
                  <ArrowRight
                    size={15}
                    className={`transition-transform group-hover:translate-x-1 ${
                      fromRight ? "lg:rotate-180 lg:group-hover:-translate-x-1" : ""
                    }`}
                    aria-hidden
                  />
                </span>
              </div>
            </div>
          </Link>
        );
      })}

      {/* CTA final */}
      <div
        data-band
        data-dir={services.length % 2 === 1 ? "right" : "left"}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-status-red to-status-red-deep shadow-red-glow"
      >
        <div className="relative flex flex-col sm:flex-row sm:items-center gap-6 p-8 lg:p-12">
          <div className="flex-1">
            <h3
              className="text-2xl lg:text-3xl font-semibold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Não sabe por onde começar?
            </h3>
            <p className="mt-2 text-white/85 max-w-[52ch]">
              Conte o momento da sua empresa e nossa equipe indica o melhor caminho.
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-status-red transition-transform hover:-translate-y-0.5 self-start"
          >
            Pedir orientação
            <ArrowRight size={15} aria-hidden />
          </a>
        </div>
      </div>
    </div>
  );
}
