import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ImageReveal, Reveal, RevealStagger } from "@/components/motion";
import { site, whatsappLink } from "@/data/services";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "Conheça a Status Contabilidade: 22 anos de mercado em Barão Geraldo, Campinas, com equipe sênior e atendimento direto.",
};

const values = [
  {
    t: "Comprometimento",
    d: "Buscamos entender a necessidade de cada cliente antes de propor qualquer caminho. Nenhuma empresa é igual à outra.",
  },
  {
    t: "Qualidade com prazo",
    d: "Cumprir a obrigação é o começo. Entregamos com qualidade, segurança e rapidez, sempre dentro do prazo legal.",
  },
  {
    t: "Melhoria contínua",
    d: "Revisamos nossos processos o tempo todo para entregar mais resultado com menos custo para o cliente.",
  },
  {
    t: "Supervisão de perto",
    d: "Cada área é acompanhada por consultores técnicos sêniores, especializados no assunto que cuidam.",
  },
];

export default function QuemSomos() {
  return (
    <>
      <section className="relative pt-[72px]">
        <div className="relative overflow-hidden bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/escritorio.jpg"
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/35"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1200px] px-6 py-20 lg:px-12 lg:py-28">
            <Reveal>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-mist/70 transition-colors hover:text-white"
              >
                <ArrowLeft size={15} aria-hidden />
                Voltar para o início
              </Link>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-red-100">
                Quem somos
              </p>
              <h1 className="mt-3 max-w-[18ch] text-[clamp(2.25rem,4.5vw,3.5rem)] text-white">
                Há 22 anos, a contabilidade por trás das empresas de Campinas
              </h1>
              <p className="mt-6 max-w-[56ch] text-xl leading-relaxed text-mist/80">
                A Status Contabilidade nasceu em Barão Geraldo e cresceu junto com
                os negócios da região. São mais de duas décadas de trabalho ao lado
                de empresas que confiam seus números à nossa equipe.
              </p>
              <div className="mt-9">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Falar com um contador
                  <ArrowRight size={18} aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-24">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] text-ink max-w-[24ch]">
              Como trabalhamos todos os dias
            </h2>
            <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-slate">
              Nosso time reúne contadores e consultores especializados nas áreas
              contábil, fiscal, trabalhista e de gestão, com supervisão técnica
              sênior em cada entrega.
            </p>
          </Reveal>
          <RevealStagger className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-mist p-8">
                <h3 className="text-xl font-semibold text-ink">{v.t}</h3>
                <p className="mt-3 text-slate leading-relaxed">{v.d}</p>
              </div>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
          <ImageReveal
            src="/images/parceria.jpg"
            alt="Aperto de mãos entre cliente e contador da Status"
            className="rounded-2xl aspect-[4/3]"
          />
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] text-white">
              Parceria se constrói <em className="italic text-red-100">conversando</em>
            </h2>
            <p className="mt-5 text-mist/75 leading-relaxed max-w-[52ch]">
              Aqui você não é um número na carteira de clientes. Quando liga para a
              <span className="text-status-red font-semibold"> Status</span>, fala com quem conhece a sua empresa e o seu histórico. É assim
              que trabalhamos há 22 anos, e é assim que pretendemos continuar.
            </p>
            <div className="mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Conversar com a equipe
                <ArrowRight size={18} aria-hidden />
              </a>
              <p className="mt-6 text-sm text-mist/60">
                {site.address} · {site.phone1}
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
