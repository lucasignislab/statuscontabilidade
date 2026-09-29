"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  [
    "A gente começa ouvindo",
    "Antes de indicar um caminho, entendemos a empresa, sua rotina e o que precisa ser resolvido.",
    "/images/equipe-reuniao.jpg",
    "Equipe reunida para entender as necessidades de um cliente",
  ],
  [
    "Prazo é compromisso",
    "Cada obrigação é acompanhada de perto para chegar certa e dentro do prazo legal.",
    "/images/assinatura-contrato.jpg",
    "Profissional conferindo um documento antes da assinatura",
  ],
  [
    "Todo processo pode melhorar",
    "Revisamos nossa forma de trabalhar para entregar mais resultado e reduzir custos para o cliente.",
    "/images/planejamento.jpg",
    "Equipe analisando informações durante um planejamento",
  ],
  [
    "Sempre tem alguém responsável",
    "Cada área tem supervisão de consultores técnicos sêniores, especializados no assunto.",
    "/images/equipe-contadores.jpg",
    "Contadores trabalhando juntos no escritório",
  ],
] as const;

function activateChapter(
  activeIndex: number,
  chapters: HTMLElement[],
  images: HTMLElement[]
) {
  chapters.forEach((chapter, index) => {
    gsap.to(chapter, {
      opacity: index === activeIndex ? 1 : 0.38,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
  });

  images.forEach((image, index) => {
    if (index !== activeIndex) {
      gsap.to(image, {
        autoAlpha: 0,
        duration: 0.25,
        ease: "power2.out",
        overwrite: true,
      });
      return;
    }

    gsap.fromTo(
      image,
      { autoAlpha: 0, clipPath: "inset(8% 0 8% 0)", scale: 1.04 },
      {
        autoAlpha: 1,
        clipPath: "inset(0% 0 0% 0)",
        scale: 1,
        duration: 0.75,
        ease: "power3.out",
        overwrite: true,
      }
    );
  });
}

function addDesktopMotion(
  section: HTMLElement,
  progress: HTMLSpanElement | null,
  chapters: HTMLElement[],
  images: HTMLElement[]
) {
  activateChapter(0, chapters, images);

  chapters.forEach((chapter, index) => {
    ScrollTrigger.create({
      trigger: chapter,
      start: "top 58%",
      end: "bottom 42%",
      onEnter: () => activateChapter(index, chapters, images),
      onEnterBack: () => activateChapter(index, chapters, images),
    });
  });

  if (!progress) return;

  gsap.fromTo(
    progress,
    { scaleY: 0 },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top 45%",
        end: "bottom 55%",
        scrub: true,
      },
    }
  );
}

function addMobileMotion(chapters: HTMLElement[]) {
  chapters.forEach((chapter) => {
    gsap.fromTo(
      chapter,
      { opacity: 0.55, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        scrollTrigger: { trigger: chapter, start: "top 82%", once: true },
      }
    );
  });
}

function DesktopGallery() {
  return (
    <div className="hidden lg:block">
      <div className="sticky top-28 h-[min(68vh,660px)] overflow-hidden rounded-2xl bg-mist">
        {principles.map(([, , image], index) => (
          <div
            key={image}
            data-work-image
            aria-hidden
            className={`absolute inset-0 ${index === 0 ? "opacity-100" : "invisible opacity-0"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>
        ))}
        <div className="absolute bottom-7 left-7 right-7 z-10 flex items-end justify-between text-white">
          <p className="max-w-[20ch] text-sm font-semibold leading-snug">
            Um trabalho feito de perto, por pessoas que conhecem sua empresa.
          </p>
          <span className="text-xs font-bold tracking-[0.14em]">STATUS</span>
        </div>
      </div>
    </div>
  );
}

function PrincipleChapter({ index }: { index: number }) {
  const [title, description, image, alt] = principles[index];

  return (
    <article
      data-work-chapter
      className="border-b border-line py-10 first:pt-0 last:border-b-0 lg:flex lg:min-h-[48vh] lg:flex-col lg:justify-center lg:border-b-0 lg:py-16 lg:pl-12"
    >
      <div className="mb-7 aspect-[4/3] overflow-hidden rounded-2xl bg-mist lg:hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>
      <p className="text-sm font-bold tabular-nums text-red-700">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="mt-3 max-w-[18ch] !text-left text-[clamp(1.65rem,2.8vw,2.35rem)] text-ink">
        {title}
      </h3>
      <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-slate">
        {description}
      </p>
    </article>
  );
}

export function WorkPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      const chapters = gsap.utils.toArray<HTMLElement>("[data-work-chapter]");
      const images = gsap.utils.toArray<HTMLElement>("[data-work-image]");
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(chapters, { opacity: 1 });
        return;
      }

      const mediaQuery = gsap.matchMedia();
      mediaQuery.add("(min-width: 1024px)", () =>
        addDesktopMotion(sectionRef.current!, progressRef.current, chapters, images)
      );
      mediaQuery.add("(max-width: 1023px)", () => addMobileMotion(chapters));

      return () => mediaQuery.revert();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-paper py-16 lg:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="max-w-[720px]">
          <h2 className="max-w-[20ch] text-[clamp(2rem,3.8vw,3.25rem)] text-ink">
            Como trabalhamos todos os dias
          </h2>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-slate">
            Nosso time reúne especialistas nas áreas contábil, fiscal,
            trabalhista e de gestão. O cuidado com cada empresa começa antes de
            qualquer entrega.
          </p>
        </div>

        <div className="mt-14 lg:mt-20 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(340px,0.9fr)] lg:gap-20">
          <DesktopGallery />

          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 hidden w-px overflow-hidden bg-line lg:block">
              <span
                ref={progressRef}
                className="block h-full w-full origin-top bg-status-red"
              />
            </div>

            {principles.map(([title], index) => (
              <PrincipleChapter key={title} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
