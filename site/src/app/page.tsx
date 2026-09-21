import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import ServiceBands from "@/components/ServiceBands";
import {
  CountUp,
  ImageReveal,
  Reveal,
  RevealStagger,
  SplitHeadline,
} from "@/components/motion";
import { services, site, whatsappLink } from "@/data/services";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink pt-[72px]">
        <img
          src="/images/equipe-contadores.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/35"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12 py-24 lg:py-36">
          <SplitHeadline
            text="Cuidamos da sua contabilidade para você cuidar do seu negócio."
            accent="negócio"
            accentClass="italic text-red-100"
            className="text-[clamp(2.5rem,5.5vw,4.25rem)] text-white max-w-[20ch]"
          />
          <Reveal delay={0.5}>
            <p className="mt-6 text-xl text-mist/80 max-w-[56ch] leading-relaxed">
              Há {site.years} anos em Barão Geraldo, a <span className="text-red-100 font-semibold">Status</span> Contabilidade atende
              empresas de Campinas e região com uma equipe que conhece cada cliente
              pelo nome.
            </p>
          </Reveal>
          <Reveal delay={0.65}>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Falar com um contador
                <ArrowRight size={18} aria-hidden />
              </a>
              <Link
                href="/servicos/abertura-de-empresas"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/60 px-8 py-4 text-[0.95rem] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Quero abrir minha empresa
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.8}>
            <p className="mt-8 flex items-center gap-2 text-sm text-mist/70">
              <MapPin size={16} className="text-red-100" aria-hidden />
              {site.address}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CREDIBILIDADE */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20 grid gap-12 md:grid-cols-3 items-center">
          <Reveal>
            <div>
              <p className="text-[clamp(3.5rem,7vw,5.5rem)] leading-none text-white" style={{ fontFamily: "var(--font-display)" }}>
                <CountUp value={site.years} />
                <span className="italic" style={{ color: "#FADCE0" }}> anos</span>
              </p>
              <p className="mt-3 text-mist/70">de mercado em Campinas</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border-l border-white/15 pl-6">
              <p className="text-lg text-white font-semibold">Equipe sênior, supervisão direta</p>
              <p className="mt-2 text-mist/70 text-[0.95rem]">
                Cada área é acompanhada por consultores técnicos especializados. Nada passa sem revisão.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="border-l border-white/15 pl-6">
              <p className="text-lg text-white font-semibold">Atendimento pelo nome</p>
              <p className="mt-2 text-mist/70 text-[0.95rem]">
                Você fala com quem cuida da sua empresa, não com uma central. Telefone e WhatsApp diretos.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-20 lg:py-24">
          <Reveal>
            <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] text-ink max-w-[22ch]">
              Tudo que a sua empresa precisa, <em className="italic text-status-red">em um só lugar</em>
            </h2>
            <p className="mt-4 text-slate max-w-[62ch]">
              Da abertura do CNPJ ao imposto de renda, você resolve toda a vida fiscal e
              contábil da empresa com o mesmo time.
            </p>
          </Reveal>

          <ServiceBands services={services} />
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-20 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
          <ImageReveal
            src="/images/planejamento.jpg"
            alt="Contadores da Status revisando documentos de um cliente"
            className="rounded-2xl shadow-md aspect-[4/3]"
          />
          <div>
            <Reveal>
              <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] text-ink">
                Contabilidade que você <em className="italic text-status-red">entende</em>
              </h2>
              <p className="mt-4 text-slate max-w-[52ch]">
                Nosso compromisso é simples: cumprir cada obrigação com qualidade e
                rapidez, e explicar o que os números significam para o seu negócio.
              </p>
            </Reveal>
            <RevealStagger className="mt-8">
              {[
                {
                  t: "Diagnóstico sem custo",
                  d: "Analisamos a situação da sua empresa e mostramos onde está o risco e onde está a economia.",
                },
                {
                  t: "Rotina organizada",
                  d: "Guias, folha e declarações entregues antes do prazo, todo mês, sem você precisar cobrar.",
                },
                {
                  t: "Resposta quando você precisa",
                  d: "Dúvida de última hora? Você liga ou chama no WhatsApp e fala com quem resolve.",
                },
              ].map((item) => (
                <div key={item.t} className="border-t border-line py-6 first:border-t-0 first:pt-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-ink">{item.t}</h3>
                  <p className="mt-1 text-slate text-[0.95rem] max-w-[52ch]">{item.d}</p>
                </div>
              ))}
            </RevealStagger>
          </div>
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="bg-mist">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-20 lg:py-24 grid lg:grid-cols-2 gap-14 items-center">
          <div className="order-2 lg:order-1">
            <Reveal>
              <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] text-ink max-w-[20ch]">
                Conteúdo que ajuda antes mesmo de <em className="italic text-status-red">virar cliente</em>
              </h2>
              <p className="mt-4 text-slate max-w-[52ch]">
                No blog da <span className="text-status-red font-semibold">Status</span>, respondemos as dúvidas que ouvimos todos os dias no
                escritório, começando pela escolha que trava a maioria dos novos
                empresários.
              </p>
              <Link href="/blog" className="link-underline mt-6 inline-flex items-center gap-1.5">
                Ler no blog
                <ArrowRight size={16} aria-hidden />
              </Link>
            </Reveal>
          </div>
          <Link href="/blog" className="order-1 lg:order-2 group">
            <ImageReveal
              src="/images/equipe-reuniao.jpg"
              alt="Notebook com indicadores financeiros de uma empresa"
              className="rounded-2xl shadow-md aspect-[4/3] transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(120deg, #C00518 0%, #BA2B25 100%)" }}>
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-20 lg:py-24 text-center">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3rem)] text-white max-w-[24ch] mx-auto">
              Sua empresa merece um contador que <em className="italic">atende o telefone</em>
            </h2>
            <p className="mt-4 text-white/85 max-w-[52ch] mx-auto">
              Converse agora com a nossa equipe pelo WhatsApp. O primeiro diagnóstico é por nossa conta.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-status-red font-bold text-[0.95rem] px-8 py-4 rounded-full transition-transform hover:-translate-y-0.5 shadow-lg"
              >
                Falar com um contador
                <ArrowRight size={18} aria-hidden />
              </a>
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 border-[1.5px] border-white/70 text-white font-semibold text-[0.95rem] px-8 py-4 rounded-full transition-colors hover:bg-white/10"
              >
                Enviar uma mensagem
              </Link>
            </div>
            <p className="mt-8 text-sm text-white/70">
              {site.phone1} · {site.phone2}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
