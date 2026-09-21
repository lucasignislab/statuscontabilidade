import type { Metadata } from "next";
import { ArrowRight, Calculator, Rocket } from "lucide-react";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Guia visual do site Status Contabilidade: cores, tipografia, botões, cards, formulários e componentes.",
  robots: { index: false, follow: false },
};

const brandColors = [
  { name: "Status Red", hex: "#C00518", token: "status-red", usage: "Cor da marca. CTAs, destaques e detalhes.", text: "text-white" },
  { name: "Status Red Deep", hex: "#BA2B25", token: "status-red-deep", usage: "Hover de botões e estados ativos.", text: "text-white" },
  { name: "Red 700", hex: "#8F0412", token: "red-700", usage: "Links e textos de ação sobre fundo claro.", text: "text-white" },
  { name: "Red 100", hex: "#FADCE0", token: "red-100", usage: "Hover de chips e superfícies leves.", text: "text-ink" },
  { name: "Red 50", hex: "#FDF0F1", token: "red-50", usage: "Fundo de chips de ícone e cards de destaque.", text: "text-ink" },
];

const neutralColors = [
  { name: "Ink", hex: "#313B48", token: "ink", usage: "Títulos e texto principal.", text: "text-white" },
  { name: "Ink 700", hex: "#46536A", token: "ink-700", usage: "Labels e texto secundário forte.", text: "text-white" },
  { name: "Slate", hex: "#555555", token: "slate", usage: "Parágrafos e texto de apoio.", text: "text-white" },
  { name: "Paper", hex: "#FFFFFF", token: "paper", usage: "Fundo principal.", text: "text-ink" },
  { name: "Mist", hex: "#F9F9F9", token: "mist", usage: "Fundo alternado de seções.", text: "text-ink" },
  { name: "Line", hex: "#E4E4E4", token: "line", usage: "Bordas, hairlines e divisores.", text: "text-ink" },
];

const supportColors = [
  { name: "Ocean", hex: "#08508C", token: "ocean", usage: "Links em texto corrido.", text: "text-white" },
  { name: "Ocean 600", hex: "#0A6AB5", token: "ocean-600", usage: "Hover de links.", text: "text-white" },
  { name: "Ocean 50", hex: "#EBF1F8", token: "ocean-50", usage: "Superfícies informativas.", text: "text-ink" },
];

function Swatch({ name, hex, token, usage, text }: (typeof brandColors)[number]) {
  return (
    <div className="card-service overflow-hidden !rounded-2xl hover:!transform-none">
      <div className={`h-24 flex items-end p-4 ${text}`} style={{ background: hex }}>
        <span className="text-sm font-bold">{hex}</span>
      </div>
      <div className="p-4">
        <p className="font-bold text-ink text-[0.95rem]">{name}</p>
        <p className="text-xs font-mono text-slate mt-0.5">--color-{token}</p>
        <p className="text-sm text-slate mt-2">{usage}</p>
      </div>
    </div>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">{kicker}</p>
      <h2 className="mt-2 text-3xl text-ink">{title}</h2>
    </Reveal>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="pt-[72px]">
      {/* Cabeçalho */}
      <section className="bg-mist border-b border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">Status Contabilidade</p>
            <h1 className="mt-3 text-[clamp(2.2rem,4.5vw,3.4rem)] text-ink max-w-[18ch]">
              Design System <em className="italic text-status-red">do projeto</em>
            </h1>
            <p className="mt-4 text-slate max-w-[60ch]">
              Referência viva de cor, tipografia e componentes usados no site. Tudo que
              aparece aqui é código real: o que você vê é o que está em produção.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cores */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20 space-y-14">
          <div>
            <SectionTitle kicker="01 · Cor" title="Marca" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {brandColors.map((c) => <Swatch key={c.token} {...c} />)}
            </div>
          </div>
          <div>
            <SectionTitle kicker="01 · Cor" title="Neutros" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {neutralColors.map((c) => <Swatch key={c.token} {...c} />)}
            </div>
          </div>
          <div>
            <SectionTitle kicker="01 · Cor" title="Suporte" />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {supportColors.map((c) => <Swatch key={c.token} {...c} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Tipografia */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionTitle kicker="02 · Tipografia" title="Duas famílias, dois papéis" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card-service p-8 hover:!transform-none">
              <p className="label-field !mb-3">Títulos · Lora</p>
              <p className="text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Contabilidade com critério e <em className="italic text-status-red">proximidade</em>
              </p>
              <p className="mt-5 text-sm text-slate">
                Serifada, peso 500, itálico para ênfase em vermelho. Aplicada em h1 a h4.
                Tracking -0.01em, line-height 1.15.
              </p>
              <p className="mt-4 text-xs font-mono text-slate">font-family: var(--font-display)</p>
            </div>
            <div className="card-service p-8 hover:!transform-none">
              <p className="label-field !mb-3">Texto · Open Sans</p>
              <p className="text-lg text-ink leading-relaxed">
                Cada guia, folha e declaração entregue antes do prazo, explicada em
                linguagem que qualquer empresário entende.
              </p>
              <p className="mt-5 text-sm text-slate">
                Sem serifa humanista, peso 400 para parágrafos e 600/700 para rótulos e
                botões. Line-height 1.65 para leitura confortável.
              </p>
              <p className="mt-4 text-xs font-mono text-slate">font-family: var(--font-sans)</p>
            </div>
          </div>

          <div className="mt-10 card-service p-8 hover:!transform-none">
            <p className="label-field !mb-6">Escala</p>
            <div className="space-y-6">
              <div>
                <h1 className="text-[clamp(2.2rem,4.5vw,3.4rem)] text-ink">Título de página · clamp(2.2rem, 4.5vw, 3.4rem)</h1>
              </div>
              <hr className="divider" />
              <div>
                <h2 className="text-[clamp(1.9rem,3.4vw,2.6rem)] text-ink">Título de seção · clamp(1.9rem, 3.4vw, 2.6rem)</h2>
              </div>
              <hr className="divider" />
              <div>
                <h3 className="text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>Título de card · text-xl, Open Sans 600</h3>
              </div>
              <hr className="divider" />
              <div>
                <p className="text-slate max-w-[62ch]">
                  Corpo de texto · 1rem, Open Sans 400, cor Slate. Largura máxima de 62
                  caracteres por linha para manter o ritmo de leitura em telas largas.
                </p>
              </div>
              <hr className="divider" />
              <div>
                <p className="label-field !mb-0">Rótulo · 0.75rem, 700, uppercase, tracking 0.12em</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botões e links */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionTitle kicker="03 · Ações" title="Botões e links" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card-service p-8 hover:!transform-none space-y-6">
              <div>
                <p className="label-field">Primário · .btn-primary</p>
                <button className="btn-primary">Agendar conversa <ArrowRight size={16} aria-hidden /></button>
                <p className="mt-3 text-sm text-slate">Pill vermelho. Hover: sobe 2px, ganha brilho vermelho e fundo deep.</p>
              </div>
              <hr className="divider" />
              <div>
                <p className="label-field">Secundário · .btn-secondary</p>
                <button className="btn-secondary">Conhecer a equipe</button>
                <p className="mt-3 text-sm text-slate">Outline ink. Hover: borda e texto ficam vermelhos.</p>
              </div>
            </div>
            <div className="card-service p-8 hover:!transform-none space-y-6">
              <div>
                <p className="label-field">Link em texto · .link-underline</p>
                <p className="text-slate">
                  Você pode <a href="#links" className="link-underline">falar com um contador</a> antes
                  de decidir qualquer coisa.
                </p>
                <p className="mt-3 text-sm text-slate">Ocean com sublinhado que desliza da esquerda no hover.</p>
              </div>
              <hr className="divider" />
              <div>
                <p className="label-field">Link de navegação</p>
                <p className="text-ink font-semibold text-[0.95rem] hover:text-status-red transition-colors cursor-pointer">
                  Quem somos
                </p>
                <p className="mt-3 text-sm text-slate">Ink 600, hover em Status Red, transição de 200ms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionTitle kicker="04 · Componentes" title="Cards, chips e formulários" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="label-field">Card de serviço · .card-service + .icon-chip</p>
              <div className="card-service p-7 flex flex-col group cursor-pointer">
                <span className="icon-chip"><Calculator size={22} aria-hidden /></span>
                <h3 className="mt-5 text-xl font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>Contabilidade completa</h3>
                <p className="mt-2 text-slate text-[0.95rem] leading-relaxed flex-1">
                  Escrituração, balancetes e balanços com supervisão de contadores sêniores.
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-700">
                  Saiba mais
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
              <p className="mt-3 text-sm text-slate">Hover: sobe 4px, sombra média, chip fica Red 100.</p>
            </div>
            <div>
              <p className="label-field">Card destaque horizontal</p>
              <div className="card-service p-8 flex flex-col sm:flex-row sm:items-center gap-6 group cursor-pointer">
                <span className="icon-chip shrink-0"><Rocket size={22} aria-hidden /></span>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>Abertura de empresas</h3>
                  <p className="mt-2 text-slate leading-relaxed max-w-[58ch]">
                    Do contrato social ao CNPJ ativo, sem idas e vindas aos órgãos.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-700 shrink-0">
                  Saiba mais <ArrowRight size={15} aria-hidden />
                </span>
              </div>
              <p className="mt-3 text-sm text-slate">Variação full-width usada para o serviço principal da Home.</p>
            </div>
          </div>

          <div className="mt-10 card-service p-8 hover:!transform-none">
            <p className="label-field !mb-6">Formulário · .label-field + .input-field</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="ds-nome" className="label-field">Nome</label>
                <input id="ds-nome" className="input-field" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="ds-email" className="label-field">E-mail</label>
                <input id="ds-email" className="input-field" type="email" placeholder="voce@empresa.com.br" />
              </div>
            </div>
            <p className="mt-4 text-sm text-slate">
              Foco: borda Status Red com anel de 2px a 35% de opacidade. Raio de 10px.
            </p>
          </div>
        </div>
      </section>

      {/* Elevação e movimento */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionTitle kicker="05 · Profundidade e movimento" title="Sombras e animações" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "shadow-sm", desc: "Cards em repouso", cls: "shadow-sm" },
              { name: "shadow-md", desc: "Hover de cards, imagens", cls: "shadow-md" },
              { name: "shadow-lg", desc: "Menu suspenso do header", cls: "shadow-lg" },
              { name: "shadow-red-glow", desc: "Hover do CTA e FAB", cls: "shadow-red-glow" },
            ].map((s) => (
              <div key={s.name} className={`bg-paper border border-line rounded-2xl p-6 ${s.cls}`}>
                <p className="font-mono text-xs text-ink">{s.name}</p>
                <p className="mt-2 text-sm text-slate">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 card-service p-8 hover:!transform-none">
            <p className="label-field !mb-4">Princípios de animação</p>
            <ul className="space-y-3 text-slate text-[0.95rem] max-w-[62ch]">
              <li><strong className="text-ink">Reveal on scroll:</strong> conteúdo sobe 24px com fade, 600ms, easing suave (GSAP).</li>
              <li><strong className="text-ink">Split text:</strong> títulos de página entram palavra por palavra, com máscara de overflow.</li>
              <li><strong className="text-ink">Microinterações:</strong> setas deslizam 4px, botões sobem 2px. Nada além de 250ms.</li>
              <li><strong className="text-ink">Acessibilidade:</strong> <code className="text-xs font-mono">prefers-reduced-motion</code> desativa todas as animações.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
