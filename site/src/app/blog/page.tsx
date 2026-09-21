import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ImageReveal, Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos da Status Contabilidade sobre abertura de empresas, impostos e gestão para pequenos negócios de Campinas.",
};

export default function Blog() {
  return (
    <section className="pt-[72px] bg-mist min-h-[70vh]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-24">
        <Reveal>
          <h1 className="text-[clamp(2.25rem,4.5vw,3.5rem)] text-ink">
            Respostas diretas para <em className="italic text-status-red">dúvidas reais</em>
          </h1>
          <p className="mt-5 text-xl text-slate max-w-[56ch]">
            O que explicamos todos os dias no escritório, escrito com calma para
            você ler quando quiser.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Link
            href="/blog/simples-nacional-ou-lucro-presumido"
            className="group mt-12 grid gap-0 lg:grid-cols-2 overflow-hidden rounded-2xl bg-paper border border-line shadow-sm hover:shadow-md transition-shadow"
          >
            <ImageReveal
              src="/images/assinatura-contrato.jpg"
              alt="Documentos de uma empresa sobre a mesa"
              className="aspect-[16/10] lg:aspect-auto lg:h-full"
            />
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-widest text-status-red">
                Impostos
              </p>
              <h2 className="mt-3 text-[clamp(1.5rem,2.6vw,2.1rem)] text-ink leading-snug">
                Simples Nacional ou Lucro Presumido: qual é melhor para a sua empresa?
              </h2>
              <p className="mt-4 text-slate leading-relaxed">
                A escolha do regime tributário muda quanto sua empresa paga de imposto
                todo mês. Entenda a diferença entre os dois e os sinais de que está na
                hora de revisar.
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-red-700">
                Ler o artigo
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
          </Link>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-12 text-slate">
            Novos artigos em breve. Tem uma dúvida que você gostaria de ver por aqui?{" "}
            <Link href="/contato" className="link-underline">
              Envie para nossa equipe
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
