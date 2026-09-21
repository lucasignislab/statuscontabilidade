import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Reveal, RevealStagger } from "@/components/motion";
import { services, whatsappLink } from "@/data/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} em Campinas`,
    description: service.short,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-[72px]">
        <div className="relative overflow-hidden bg-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.image}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/35"
            aria-hidden
          />
          <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12 py-20 lg:py-28">
            <Reveal>
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-mist/70 hover:text-white transition-colors"
              >
                <ArrowLeft size={15} aria-hidden />
                Todos os serviços
              </Link>
              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-red-100">
                {service.title}
              </p>
              <h1 className="mt-3 text-[clamp(2.25rem,4.5vw,3.5rem)] text-white max-w-[18ch]">
                {service.hero}
              </h1>
              <p className="mt-6 text-xl text-mist/80 max-w-[56ch] leading-relaxed">
                {service.intro}
              </p>
              <div className="mt-9">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Falar com um contador
                  <ArrowRight size={18} aria-hidden />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-14">
          <div>
            <Reveal>
              <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)] text-ink">
                O que está incluído
              </h2>
            </Reveal>
            <RevealStagger className="mt-8 space-y-5">
              {service.items.map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-status-red">
                    <Check size={14} strokeWidth={2.5} aria-hidden />
                  </span>
                  <p className="text-ink leading-relaxed">{item}</p>
                </div>
              ))}
            </RevealStagger>
            <Reveal>
              <p className="mt-10 text-lg text-ink font-medium italic" style={{ fontFamily: "var(--font-display)" }}>
                {service.closing}
              </p>
            </Reveal>
          </div>

          <aside className="lg:pt-16">
            <Reveal>
              <div className="rounded-2xl bg-ink text-paper p-8 sticky top-24">
                <h3 className="text-xl text-white">Pronto para conversar?</h3>
                <p className="mt-3 text-mist/75 text-[0.95rem]">
                  Conte o que sua empresa precisa. Respondemos no mesmo dia útil.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 w-full justify-center text-sm"
                >
                  Chamar no WhatsApp
                </a>
                <Link href="/contato" className="mt-4 block text-center text-sm text-mist/70 hover:text-white transition-colors">
                  Prefiro enviar uma mensagem
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <Reveal>
            <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] text-ink">Veja também</h2>
          </Reveal>
          <RevealStagger className="mt-8 grid gap-6 sm:grid-cols-3">
            {others.map((s) => (
              <Link key={s.slug} href={`/servicos/${s.slug}`} className="card-service overflow-hidden group !p-0">
                <div className="h-36 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-700">
                    Saiba mais
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>
    </>
  );
}
