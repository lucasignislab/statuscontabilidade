import type { Metadata } from "next";
import { ArrowRight, Calculator, Check, Rocket } from "lucide-react";
import StatusBadge from "@/components/ui/StatusBadge";
import Alert from "@/components/ui/Alert";
import Accordion from "@/components/ui/Accordion";
import Tabs from "@/components/ui/Tabs";

export const metadata: Metadata = {
  title: "Design System",
  description:
    "Documentação viva do site Status Contabilidade: cores, tipografia, espaçamento, motion e componentes. Fonte da verdade: globals.css e os componentes em produção.",
  robots: { index: false, follow: false },
};

/* ---------------- dados ---------------- */

const GRADES = ["050","100","200","300","400","500","600","700","800","900","950"] as const;

const families = [
  {
    name: "Status Red",
    cssVar: "status",
    role: "Marca · ações primárias",
    anchor: "600",
    desc: "O vermelho do logotipo, estendido para o digital. CTAs, destaques de texto, chips de ícone e estados ativos. Escala derivada em OKLCH a partir da âncora #C00518.",
    hex: {
      "050": "#FFF0ED", "100": "#FFE0DC", "200": "#FFBAB0", "300": "#FC958B",
      "400": "#E26960", "500": "#CA3D38", "600": "#C00518", "700": "#950006",
      "800": "#710000", "900": "#4F0000", "950": "#2D0000",
    } as Record<string, string>,
    inUse: { "050": "red-50", "100": "red-100", "600": "status-red", "700": "red-700" } as Record<string, string>,
  },
  {
    name: "Ink",
    cssVar: "ink",
    role: "Texto · superfícies escuras",
    anchor: "800",
    desc: "Azul-petróleo profundo no lugar do preto puro. Títulos, texto principal, footer e overlays de imagem. Âncora #313B48 no grau 800.",
    hex: {
      "050": "#F5F6F7", "100": "#E9E9EB", "200": "#D0D3D6", "300": "#B2B6BC",
      "400": "#8F949C", "500": "#707780", "600": "#58606A", "700": "#434D58",
      "800": "#313B48", "900": "#1B232E", "950": "#090F17",
    } as Record<string, string>,
    inUse: { "700": "ink-700", "800": "ink" } as Record<string, string>,
  },
  {
    name: "Ocean",
    cssVar: "ocean",
    role: "Suporte · links",
    anchor: "600",
    desc: "Azul de apoio herdado do site antigo, com papel único: links em texto corrido e contextos informativos. Âncora #08508C no grau 600.",
    hex: {
      "050": "#EFF7FF", "100": "#DFEBF9", "200": "#B8D6F7", "300": "#94BAE3",
      "400": "#6A98C8", "500": "#4479B0", "600": "#08508C", "700": "#174E81",
      "800": "#0A3862", "900": "#012444", "950": "#000E25",
    } as Record<string, string>,
    inUse: { "050": "ocean-50", "500": "ocean-600", "600": "ocean" } as Record<string, string>,
  },
  {
    name: "Neutral",
    cssVar: "neutral",
    role: "Superfícies · divisórias",
    anchor: "050",
    desc: "Papel, névoa e linha. Escala quente e sem croma que estrutura o layout sem poluir. Âncora #F9F9F9 (mist) no grau 050; o branco puro (paper) fica acima da escala, reservado ao fundo principal.",
    hex: {
      "050": "#F9F9F9", "100": "#E9E9E9", "200": "#D2D2D2", "300": "#B6B6B6",
      "400": "#949494", "500": "#767676", "600": "#5F5F5F", "700": "#4C4C4C",
      "800": "#373737", "900": "#232323", "950": "#0E0E0E",
    } as Record<string, string>,
    inUse: { "050": "mist", "100": "line", "600": "slate" } as Record<string, string>,
  },
];

const roles = [
  { group: "Background", items: [
    { token: "background.canvas", resolves: "paper", hex: "#FFFFFF", usage: "Fundo principal das páginas." },
    { token: "background.subtle", resolves: "mist", hex: "#F9F9F9", usage: "Alternância de seções." },
    { token: "background.inverse", resolves: "ink", hex: "#313B48", usage: "Footer, faixas de autoridade, overlays." },
    { token: "background.brand", resolves: "status-red", hex: "#C00518", usage: "CTA final, FAB do WhatsApp." },
  ]},
  { group: "Text", items: [
    { token: "text.primary", resolves: "ink", hex: "#313B48", usage: "Títulos e texto principal." },
    { token: "text.secondary", resolves: "slate", hex: "#555555", usage: "Parágrafos e texto de apoio." },
    { token: "text.tertiary", resolves: "ink-700", hex: "#46536A", usage: "Labels e metadados." },
    { token: "text.inverse", resolves: "mist", hex: "#F9F9F9", usage: "Texto sobre fundos escuros." },
    { token: "text.brand", resolves: "status-red", hex: "#C00518", usage: "A palavra Status, ênfases em itálico." },
    { token: "text.link", resolves: "ocean", hex: "#08508C", usage: "Links em texto corrido." },
  ]},
  { group: "Action", items: [
    { token: "action.primary.default", resolves: "status-red", hex: "#C00518", usage: "Botão primário em repouso." },
    { token: "action.primary.hover", resolves: "status-red-deep", hex: "#BA2B25", usage: "Hover do primário (+ sobe 2px)." },
    { token: "action.secondary.default", resolves: "ink", hex: "#313B48", usage: "Botão outline." },
    { token: "action.secondary.hover", resolves: "status-red", hex: "#C00518", usage: "Hover do outline (borda e texto)." },
    { token: "action.on-primary", resolves: "white", hex: "#FFFFFF", usage: "Texto sobre ação primária." },
  ]},
  { group: "Border", items: [
    { token: "border.default", resolves: "line", hex: "#E4E4E4", usage: "Cards, inputs, hairlines." },
    { token: "border.focus", resolves: "status-red", hex: "#C00518", usage: "Foco de inputs e :focus-visible." },
    { token: "border.brand-subtle", resolves: "red-100", hex: "#FADCE0", usage: "Cards de destaque em red-50." },
  ]},
];

/* ratios calculados em sRGB conforme WCAG 2.1 */
const contrastText = [
  { name: "text.primary", hex: "#313B48", color: "#313B48" },
  { name: "text.secondary", hex: "#555555", color: "#555555" },
  { name: "text.brand", hex: "#C00518", color: "#C00518" },
  { name: "text.link", hex: "#08508C", color: "#08508C" },
  { name: "text.inverse", hex: "#F9F9F9", color: "#F9F9F9" },
];
const contrastBg = [
  { name: "paper", hex: "#FFFFFF", ratios: ["11.35", "7.46", "6.41", "8.28", "1.05"] },
  { name: "mist", hex: "#F9F9F9", ratios: ["10.78", "7.08", "6.09", "7.86", "1.00"] },
  { name: "red-50", hex: "#FDF0F1", ratios: ["10.22", "6.71", "5.77", "7.48", "1.05"] },
  { name: "ink", hex: "#313B48", ratios: ["1.00", "1.52", "1.77", "1.59", "10.78"] },
  { name: "status-red", hex: "#C00518", ratios: ["1.77", "1.16", "1.00", "1.49", "6.09"] },
];

const typeScale = [
  { name: "display", sample: "Cuidamos da sua contabilidade", spec: "Lora 500 · clamp(2.5rem, 5.5vw, 4.25rem) · lh 1.15 · -0.01em", cls: "text-[clamp(2.5rem,5.5vw,4.25rem)] text-ink", serif: true },
  { name: "heading.page", sample: "Contabilidade que você entende", spec: "Lora 500 · clamp(1.9rem, 3.4vw, 2.6rem) · lh 1.15", cls: "text-[clamp(1.9rem,3.4vw,2.6rem)] text-ink", serif: true },
  { name: "heading.card", sample: "Departamento fiscal", spec: "Open Sans 600 · 1.25rem · lh 1.3", cls: "text-xl font-semibold text-ink", serif: false },
  { name: "body.large", sample: "Há 22 anos cuidando de empresas de Campinas e região.", spec: "Open Sans 400 · 1.25rem · lh 1.65", cls: "text-xl text-slate", serif: false },
  { name: "body.medium", sample: "Guias, folha e declarações entregues antes do prazo, todo mês.", spec: "Open Sans 400 · 1rem · lh 1.65 · máx. 62ch", cls: "text-slate", serif: false },
  { name: "label", sample: "SERVIÇOS", spec: "Open Sans 700 · 0.75rem · uppercase · +0.12em", cls: "label-field !mb-0", serif: false },
];

const spaces = [
  { token: "space.100", px: 8, usage: "Gap entre ícone e texto" },
  { token: "space.150", px: 12, usage: "Gap interno de listas" },
  { token: "space.200", px: 16, usage: "Padding de chips, gaps de cards" },
  { token: "space.300", px: 24, usage: "Gap horizontal do header" },
  { token: "space.400", px: 32, usage: "Padding de cards (p-7/p-8)" },
  { token: "space.600", px: 48, usage: "Respiro entre blocos" },
  { token: "space.800", px: 80, usage: "Padding vertical de seção (mobile)" },
  { token: "space.1000", px: 96, usage: "Padding vertical de seção (desktop)" },
];

const radii = [
  { token: "radius.input", px: "10px", usage: "Inputs e campos de formulário", cls: "rounded-[10px]" },
  { token: "radius.card", px: "16px", usage: "Cards, faixas de serviço, menu suspenso", cls: "rounded-2xl" },
  { token: "radius.pill", px: "999px", usage: "Botões, icon-chips, FAB", cls: "rounded-full" },
];

const motions = [
  { token: "duration.micro", ms: "200ms", easing: "ease", usage: "Hover de links, setas, cores" },
  { token: "duration.hover", ms: "250ms", easing: "ease", usage: "Elevação de cards e botões" },
  { token: "duration.reveal", ms: "600ms", easing: "power3.out", usage: "Fade-up de conteúdo no scroll (GSAP)" },
  { token: "duration.band", ms: "900ms", easing: "power3.out", usage: "Faixas de serviço entrando pela lateral" },
  { token: "duration.image", ms: "1200ms", easing: "power3.out", usage: "Zoom-out de imagens e clip-path" },
];

const shadows = [
  { token: "shadow-sm", value: "0 1px 3px rgba(49,59,72,.08)", usage: "Cards em repouso", cls: "shadow-sm" },
  { token: "shadow-md", value: "0 8px 24px rgba(49,59,72,.10)", usage: "Hover de cards, imagens", cls: "shadow-md" },
  { token: "shadow-lg", value: "0 16px 48px rgba(49,59,72,.14)", usage: "Menu suspenso do header", cls: "shadow-lg" },
  { token: "shadow-red-glow", value: "0 8px 24px rgba(192,5,24,.25)", usage: "Hover do CTA, FAB", cls: "shadow-red-glow" },
];

const layers = [
  { token: "z.base", value: 0, usage: "Conteúdo em fluxo" },
  { token: "z.header", value: 40, usage: "Header fixo com blur" },
  { token: "z.fab", value: 50, usage: "Botão flutuante do WhatsApp" },
];

const roadmap = [
  { name: "Modal", desc: "Diálogo com scrim e trap de foco para confirmações importantes." },
  { name: "Tooltip", desc: "Dicas flutuantes para termos fiscais nas páginas de serviço." },
  { name: "Data Table", desc: "Tabelas de prazos e obrigações com ordenação." },
  { name: "Pagination", desc: "Paginação do blog quando o acervo de artigos crescer." },
];

const faqDemo = [
  {
    q: "Quanto tempo leva para abrir uma empresa?",
    a: "Em Campinas, o prazo médio fica entre 5 e 10 dias úteis, dependendo da Junta Comercial e da prefeitura. Cuidamos de todo o processo e avisamos você a cada etapa concluída.",
  },
  {
    q: "Posso trocar de contador a qualquer momento?",
    a: "Sim. A troca é simples: pedimos a documentação ao contador anterior, fazemos a transferência de responsabilidade no CRC e sua rotina fiscal não para um dia sequer.",
  },
  {
    q: "Vocês atendem empresas fora de Campinas?",
    a: "Atendemos. Todo o trabalho pode ser feito de forma digital, com reuniões por videochamada e documentos trocados com segurança. O atendimento próximo continua o mesmo.",
  },
];

const tabsDemo = [
  {
    label: "Simples Nacional",
    content:
      "Regime para empresas com faturamento de até R$ 4,8 milhões ao ano. Unifica oito tributos em uma guia única e costuma ser a porta de entrada de novos negócios.",
  },
  {
    label: "Lucro Presumido",
    content:
      "Indicado para empresas que faturam acima do limite do Simples ou que têm margens altas. Impostos calculados sobre uma margem presumida definida por lei.",
  },
  {
    label: "Lucro Real",
    content:
      "Obrigatório para alguns setores e vantajoso para margens apertadas. Imposto calculado sobre o lucro efetivo, com escrituração completa e mais obrigações acessórias.",
  },
];

/* ---------------- helpers ---------------- */

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-700">{children}</p>
  );
}

function SectionHead({ id, index, title, desc }: { id: string; index: string; title: string; desc?: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <Kicker>{index}</Kicker>
      <h2 className="mt-2 text-3xl text-ink">{title}</h2>
      {desc && <p className="mt-3 text-slate max-w-[68ch]">{desc}</p>}
    </div>
  );
}

function badge(ratio: string) {
  const r = parseFloat(ratio);
  if (r >= 7) return <span className="inline-block rounded-full bg-green-100 px-2 py-0.5 text-[0.7rem] font-bold text-green-800">AAA {ratio}</span>;
  if (r >= 4.5) return <span className="inline-block rounded-full bg-green-50 px-2 py-0.5 text-[0.7rem] font-bold text-green-700">AA {ratio}</span>;
  return <span className="inline-block rounded-full bg-red-50 px-2 py-0.5 text-[0.7rem] font-bold text-red-700">falha {ratio}</span>;
}

/* ---------------- página ---------------- */

export default function DesignSystemPage() {
  return (
    <main className="pt-[72px]">
      {/* HERO */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-100">
            Documentação viva · v1.0
          </p>
          <h1 className="mt-3 text-[clamp(2.2rem,4.5vw,3.4rem)] text-white max-w-[20ch]">
            <span className="text-status-red">Status</span> Design System
          </h1>
          <p className="mt-5 text-mist/75 max-w-[62ch] text-lg leading-relaxed">
            Guia oficial de estilo e biblioteca de componentes do site. Tipografia
            editorial serifada, vermelho cirúrgico e muito espaço em branco. Esta página
            é renderizada com os próprios tokens do projeto: o que você vê é o que está
            em produção.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-4">
            {[
              ["4", "famílias de cor"],
              ["44", "tons em escala (4 × 11)"],
              ["15", "color roles semânticos"],
              ["10", "componentes documentados"],
            ].map(([n, label]) => (
              <div key={label} className="bg-ink px-6 py-5">
                <p className="text-3xl text-white" style={{ fontFamily: "var(--font-display)" }}>{n}</p>
                <p className="mt-1 text-sm text-mist/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMÁRIO */}
      <nav className="bg-mist border-b border-line" aria-label="Sumário">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
          {[
            ["#introducao", "Introdução"],
            ["#cor", "Cor"],
            ["#roles", "Color Roles"],
            ["#contraste", "Contraste"],
            ["#tipografia", "Tipografia"],
            ["#espacamento", "Espaçamento"],
            ["#shape", "Shape"],
            ["#motion", "Motion"],
            ["#sombras", "Sombras"],
            ["#zindex", "Z-Index"],
            ["#botoes", "Botões"],
            ["#form", "Formulários"],
            ["#cards", "Cards"],
            ["#badge", "Badge"],
            ["#alertas", "Alertas"],
            ["#faq", "FAQ"],
            ["#tabs", "Tabs"],
            ["#roadmap", "Roadmap"],
          ].map(([href, label]) => (
            <a key={href} href={href} className="text-ink-700 hover:text-status-red transition-colors">
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* INTRODUÇÃO */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead id="introducao" index="00 · Introdução" title="Introdução ao estilo" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="card-service p-8 hover:!transform-none">
              <h3 className="text-xl text-ink">Editorial serifado</h3>
              <p className="mt-3 text-slate text-[0.95rem]">
                Lora conduz os títulos com contraste alto e itálico vermelho nos momentos
                de ênfase. Open Sans cuida da leitura longa. A dupla passa credibilidade
                sem parecer escritório de advocacia nem startup genérica.
              </p>
            </div>
            <div className="card-service p-8 hover:!transform-none">
              <h3 className="text-xl text-ink">Vermelho cirúrgico</h3>
              <p className="mt-3 text-slate text-[0.95rem]">
                O vermelho da marca aparece em poucos lugares e sempre com função:
                ação principal, a palavra <span className="text-status-red font-semibold">Status</span> e
                ênfases de título. Nunca como enfeite de fundo.
              </p>
            </div>
            <div className="card-service p-8 hover:!transform-none">
              <h3 className="text-xl text-ink">Espaço que respira</h3>
              <p className="mt-3 text-slate text-[0.95rem]">
                Seções com 80 a 96px de respiro vertical, texto limitado a 62 caracteres
                por linha e uma única linha divisória por vez. O luxo aqui é o vazio
                bem colocado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COR */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20 space-y-16">
          <SectionHead
            id="cor"
            index="01 · Cor"
            title="Famílias de cor"
            desc="Fonte da verdade: @theme em globals.css. Quatro famílias com 11 tons cada (050–950), derivadas matematicamente em OKLCH a partir das cores-âncora. O marcador vermelho indica a âncora; a etiqueta indica o token legado em uso no site."
          />
          {families.map((f) => (
            <div key={f.name}>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-2xl text-ink">{f.name}</h3>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-red-700">{f.role}</p>
                <p className="text-xs font-mono text-slate">anchor · {f.anchor}</p>
              </div>
              <p className="mt-2 text-slate max-w-[68ch] text-[0.95rem]">{f.desc}</p>
              <p className="mt-1 text-xs font-mono text-slate">Variáveis CSS: --color-{f.cssVar}-{"{grau}"}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                {GRADES.map((g) => {
                  const hex = f.hex[g];
                  const isAnchor = g === f.anchor;
                  const lightText = ["600","700","800","900","950"].includes(g);
                  const needsBorder = ["050","100","200"].includes(g);
                  return (
                    <div key={g} className="card-service overflow-hidden !rounded-2xl hover:!transform-none">
                      <div
                        className={`relative h-16 flex items-end p-2.5 ${lightText ? "text-white" : "text-ink"}`}
                        style={{ background: hex, border: needsBorder ? "1px solid var(--color-line)" : undefined }}
                      >
                        <span className="text-[0.7rem] font-bold">{hex}</span>
                        {isAnchor && (
                          <span className="absolute top-2 right-2 rounded-full bg-status-red px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">
                            âncora
                          </span>
                        )}
                      </div>
                      <div className="p-2.5">
                        <p className="text-xs font-bold text-ink">{g}</p>
                        {f.inUse[g] && (
                          <p className="mt-0.5 text-[0.65rem] font-mono text-status-red">em uso · {f.inUse[g]}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COLOR ROLES */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="roles"
            index="02 · Cor"
            title="Color Roles (tokens semânticos)"
            desc="Componentes consomem roles, nunca a cor crua. Cada role aponta para um token de família — trocar a família troca o site inteiro."
          />
          <div className="mt-10 space-y-10">
            {roles.map((g) => (
              <div key={g.group}>
                <h3 className="text-lg font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>
                  {g.group} <span className="text-slate font-normal text-sm">· {g.items.length} tokens</span>
                </h3>
                <div className="mt-4 overflow-x-auto rounded-2xl border border-line">
                  <table className="w-full text-sm min-w-[640px]">
                    <thead>
                      <tr className="bg-mist text-left">
                        <th className="px-4 py-3 font-bold text-ink-700">Token</th>
                        <th className="px-4 py-3 font-bold text-ink-700">Resolve para</th>
                        <th className="px-4 py-3 font-bold text-ink-700">Amostra</th>
                        <th className="px-4 py-3 font-bold text-ink-700">Uso</th>
                      </tr>
                    </thead>
                    <tbody>
                      {g.items.map((it) => (
                        <tr key={it.token} className="border-t border-line">
                          <td className="px-4 py-3 font-mono text-xs text-ink">{it.token}</td>
                          <td className="px-4 py-3 font-mono text-xs text-slate">→ {it.resolves} · {it.hex}</td>
                          <td className="px-4 py-3">
                            <span className="inline-block h-6 w-10 rounded-md border border-line" style={{ background: it.hex }} />
                          </td>
                          <td className="px-4 py-3 text-slate">{it.usage}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRASTE */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="contraste"
            index="03 · Cor"
            title="Matriz de contraste"
            desc="Razões calculadas em sRGB conforme WCAG 2.1. AA exige ≥ 4.5 para texto normal; AAA, ≥ 7. Todos os pares usados em produção passam em AA ou AAA."
          />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-line bg-paper">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="bg-mist text-left">
                  <th className="px-4 py-3 font-bold text-ink-700">Texto \ Fundo</th>
                  {contrastBg.map((b) => (
                    <th key={b.name} className="px-4 py-3">
                      <span className="inline-flex items-center gap-2 font-bold text-ink-700">
                        <span className="h-4 w-4 rounded border border-line" style={{ background: b.hex }} />
                        {b.name}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {contrastText.map((t, i) => (
                  <tr key={t.name} className="border-t border-line">
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-2 font-mono text-xs text-ink">
                        <span className="h-4 w-4 rounded border border-line" style={{ background: t.color }} />
                        {t.name}
                      </span>
                    </td>
                    {contrastBg.map((b, j) => (
                      <td key={b.name} className="px-4 py-3">{badge(contrastBg[j].ratios[i])}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-slate max-w-[68ch]">
            Pares marcados como falha não são usados para texto. Ex.: texto ink nunca
            aparece sobre fundo ink; nesses casos o role muda para text.inverse.
          </p>
        </div>
      </section>

      {/* TIPOGRAFIA */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="tipografia"
            index="04 · Tipografia"
            title="Duas famílias, dois papéis"
            desc="Lora (serifada) para títulos e momentos de marca. Open Sans para tudo que se lê por mais de três segundos."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card-service p-8 hover:!transform-none">
              <p className="label-field !mb-3">font-family.heading</p>
              <p className="text-[clamp(1.8rem,3vw,2.6rem)] text-ink leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                Aa Bb Cc Çç — 0123
              </p>
              <p className="mt-4 text-sm text-slate">
                Lora, peso 500 (itálico para ênfase em vermelho). Tracking -0.01em,
                line-height 1.15. Aplicada automaticamente em h1–h4.
              </p>
              <p className="mt-4 text-xs font-mono text-slate">--font-display: "Lora", Georgia, serif</p>
            </div>
            <div className="card-service p-8 hover:!transform-none">
              <p className="label-field !mb-3">font-family.body</p>
              <p className="text-2xl text-ink">Aa Bb Cc Çç — 0123</p>
              <p className="mt-4 text-sm text-slate">
                Open Sans, pesos 400 (texto), 600 (títulos de card, navegação) e 700
                (botões, labels). Line-height 1.65 para leitura confortável.
              </p>
              <p className="mt-4 text-xs font-mono text-slate">--font-sans: "Open Sans", system-ui, sans-serif</p>
            </div>
          </div>

          <div className="mt-10 card-service p-8 hover:!transform-none">
            <p className="label-field !mb-6">Composições tipográficas</p>
            <div className="space-y-8">
              {typeScale.map((t) => (
                <div key={t.name}>
                  <p className={t.cls} style={t.serif ? undefined : undefined}>{t.sample}</p>
                  <p className="mt-2 text-xs font-mono text-slate">
                    typography.{t.name} · {t.spec}
                  </p>
                  <hr className="divider mt-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ESPAÇAMENTO */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="espacamento"
            index="05 · Espaçamento"
            title="Grid de 8px"
            desc="Todo padding, margin e gap do site é múltiplo de 4, com a escala de 8 dominando. As barras abaixo estão em tamanho real."
          />
          <div className="mt-10 card-service p-8 hover:!transform-none space-y-5">
            {spaces.map((s) => (
              <div key={s.token} className="flex items-center gap-4">
                <span className="w-28 shrink-0 font-mono text-xs text-ink">{s.token}</span>
                <span className="block h-5 rounded-sm bg-status-red" style={{ width: s.px }} aria-hidden />
                <span className="font-mono text-xs text-slate shrink-0">{s.px}px</span>
                <span className="text-sm text-slate hidden sm:inline">{s.usage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHAPE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="shape"
            index="06 · Shape"
            title="Radius e borda"
            desc="Três raios apenas. Cantos de 16px dão o tom amigável; pills marcam tudo que é clicável de imediato."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {radii.map((r) => (
              <div key={r.token} className="card-service p-6 hover:!transform-none text-center">
                <div className={`mx-auto h-24 w-full max-w-[200px] border-2 border-status-red bg-red-50 ${r.cls}`} aria-hidden />
                <p className="mt-5 font-mono text-xs text-ink">{r.token} · {r.px}</p>
                <p className="mt-2 text-sm text-slate">{r.usage}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate">
            Bordas: 1px em line para estrutura, 1.5px em ink para o botão outline, 2px
            para o anel de foco.
          </p>
        </div>
      </section>

      {/* MOTION */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="motion"
            index="07 · Motion"
            title="Duração e easing"
            desc="Microinterações em até 250ms; revelações de conteúdo entre 600 e 1200ms via GSAP. prefers-reduced-motion desativa tudo."
          />
          <div className="mt-10 card-service p-8 hover:!transform-none space-y-5">
            {motions.map((m) => (
              <div key={m.token} className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="w-36 shrink-0 font-mono text-xs text-ink">{m.token}</span>
                <span className="font-mono text-xs font-bold text-status-red shrink-0">{m.ms}</span>
                <span className="font-mono text-xs text-slate shrink-0">{m.easing}</span>
                <span className="text-sm text-slate">{m.usage}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 card-service p-8 hover:!transform-none">
            <p className="label-field !mb-4">Princípios</p>
            <ul className="space-y-3 text-slate text-[0.95rem] max-w-[62ch]">
              <li><strong className="text-ink">Reveal on scroll:</strong> conteúdo sobe 24px com fade, uma vez só.</li>
              <li><strong className="text-ink">Split text:</strong> títulos de página entram palavra por palavra com máscara.</li>
              <li><strong className="text-ink">Faixas de serviço:</strong> entram pela lateral, alternando esquerda e direita.</li>
              <li><strong className="text-ink">Nada pula:</strong> transform e opacity apenas; layout nunca se move.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOMBRAS + Z-INDEX */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20 grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHead id="sombras" index="08 · Elevação" title="Sombras" desc="Todas tingidas de ink; o brilho vermelho é exclusivo de ações da marca." />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {shadows.map((s) => (
                <div key={s.token} className={`bg-paper border border-line rounded-2xl p-5 ${s.cls}`}>
                  <p className="font-mono text-xs text-ink">{s.token}</p>
                  <p className="mt-2 text-sm text-slate">{s.usage}</p>
                  <p className="mt-2 font-mono text-[0.65rem] text-slate/70 break-all">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHead id="zindex" index="09 · Camadas" title="Z-Index" desc="Três níveis bastam. Conteúdo, header e o FAB do WhatsApp." />
            <div className="mt-8 space-y-3">
              {layers.map((l) => (
                <div key={l.token} className="card-service !rounded-xl px-5 py-4 flex items-center gap-4 hover:!transform-none">
                  <span className="font-mono text-xs text-ink w-20">{l.token}</span>
                  <span className="font-mono text-sm font-bold text-status-red">{l.value}</span>
                  <span className="text-sm text-slate">{l.usage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOTÕES */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="botoes"
            index="10 · Componentes"
            title="Button"
            desc="Anatomia: radius pill · padding 16px × 32px · Open Sans 700 · 0.95rem · transição de 200ms."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card-service p-8 hover:!transform-none space-y-8">
              <div>
                <p className="label-field">button.primary</p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="btn-primary">Agendar conversa <ArrowRight size={16} aria-hidden /></button>
                  <button className="btn-primary opacity-50 cursor-not-allowed" disabled>Desabilitado</button>
                </div>
                <p className="mt-3 text-sm text-slate">
                  default status-red → hover status-red-deep + sobe 2px + red-glow.
                  Usado em CTAs de WhatsApp e envio de formulário.
                </p>
              </div>
              <hr className="divider" />
              <div>
                <p className="label-field">button.secondary</p>
                <div className="flex flex-wrap items-center gap-4">
                  <button className="btn-secondary">Conhecer a equipe</button>
                  <button className="btn-secondary opacity-50 cursor-not-allowed" disabled>Desabilitado</button>
                </div>
                <p className="mt-3 text-sm text-slate">
                  Outline ink 1.5px → hover: borda e texto em status-red sobre mist.
                  Usado no header e em ações secundárias.
                </p>
              </div>
            </div>
            <div className="card-service p-8 hover:!transform-none space-y-8">
              <div>
                <p className="label-field">button.on-dark (faixas e footer)</p>
                <div className="rounded-2xl bg-ink p-6">
                  <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-status-red transition-transform hover:-translate-y-0.5">
                    Pedir orientação <ArrowRight size={15} aria-hidden />
                  </button>
                </div>
                <p className="mt-3 text-sm text-slate">
                  Sobre vermelho ou ink, o botão inverte: fundo branco, texto status-red.
                </p>
              </div>
              <hr className="divider" />
              <div>
                <p className="label-field">link.underline</p>
                <p className="text-slate">
                  Você pode <a href="#botoes" className="link-underline">falar com um contador</a> antes de decidir.
                </p>
                <p className="mt-3 text-sm text-slate">
                  Ocean com sublinhado que desliza da esquerda em 400ms. Apenas em texto corrido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIOS */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="form"
            index="11 · Componentes"
            title="Form Field"
            desc="Anatomia: radius 10px · padding 14px × 16px · border line 1px · foco com borda status-red e anel de 2px a 35%."
          />
          <div className="mt-10 card-service p-8 hover:!transform-none">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="ds-nome" className="label-field">Default</label>
                <input id="ds-nome" className="input-field" placeholder="Seu nome" />
              </div>
              <div>
                <label htmlFor="ds-email" className="label-field">Com placeholder</label>
                <input id="ds-email" className="input-field" type="email" placeholder="voce@empresa.com.br" />
              </div>
              <div>
                <label htmlFor="ds-focus" className="label-field">Foco (experimente clicar)</label>
                <input id="ds-focus" className="input-field" placeholder="Borda vermelha + anel" />
              </div>
              <div>
                <label htmlFor="ds-disabled" className="label-field">Desabilitado</label>
                <input id="ds-disabled" className="input-field opacity-50 cursor-not-allowed" placeholder="Indisponível" disabled />
              </div>
            </div>
            <p className="mt-5 text-sm text-slate">
              Labels usam typography.label: 0.75rem, peso 700, uppercase, tracking 0.12em
              em ink-700. Placeholder em slate.
            </p>
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="cards"
            index="12 · Componentes"
            title="Card e faixa de serviço"
            desc="Anatomia do card: surface paper · border line · radius 16px · shadow-sm → hover shadow-md + sobe 4px em 250ms."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div>
              <p className="label-field">card.default + icon-chip</p>
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
              <p className="mt-3 text-sm text-slate">icon-chip: 52px, pill, red-50 → red-100 no hover do card.</p>
            </div>
            <div>
              <p className="label-field">band.service (exclusivo da Home)</p>
              <div className="group relative block overflow-hidden rounded-2xl shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/svc-abertura.jpg" alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/40" aria-hidden />
                <div className="relative flex min-h-[220px] items-center p-8">
                  <div className="max-w-[380px]">
                    <span className="icon-chip !bg-status-red !text-white"><Rocket size={20} aria-hidden /></span>
                    <h3 className="mt-4 text-2xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>Abertura de empresas</h3>
                    <p className="mt-2 text-white/80 text-[0.95rem]">Do contrato social ao CNPJ ativo, sem idas e vindas aos órgãos.</p>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate">Imagem temática + gradiente ink 95→40%. Entra pela lateral no scroll.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BADGE */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="badge"
            index="13 · Componentes"
            title="StatusBadge"
            desc="Selo semântico para prazos e status de obrigações. Anatomia: radius pill · padding 4px × 12px · label 0.75rem 700 · dot de 6px na cor forte da variante."
          />
          <div className="mt-10 card-service p-8 hover:!transform-none">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge variant="success">Certidão emitida</StatusBadge>
              <StatusBadge variant="warning">Vence em 5 dias</StatusBadge>
              <StatusBadge variant="error">DAS em atraso</StatusBadge>
              <StatusBadge variant="info">Em processamento</StatusBadge>
              <StatusBadge variant="neutral">Arquivado</StatusBadge>
            </div>
            <div className="mt-8 overflow-x-auto rounded-2xl border border-line">
              <table className="w-full text-sm min-w-[560px]">
                <thead>
                  <tr className="bg-mist text-left">
                    <th className="px-4 py-3 font-bold text-ink-700">Variante</th>
                    <th className="px-4 py-3 font-bold text-ink-700">Fundo</th>
                    <th className="px-4 py-3 font-bold text-ink-700">Texto e dot</th>
                    <th className="px-4 py-3 font-bold text-ink-700">Uso</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["success", "success-50", "success-700", "Obrigação entregue, certidão limpa"],
                    ["warning", "warning-50", "warning-700", "Prazo se aproximando"],
                    ["error", "red-50", "red-700", "Atraso, pendência crítica"],
                    ["info", "ocean-50", "ocean", "Em andamento, contexto neutro"],
                    ["neutral", "mist", "ink-700", "Estado inativo ou arquivado"],
                  ].map(([v, bg, fg, uso]) => (
                    <tr key={v} className="border-t border-line">
                      <td className="px-4 py-3 font-mono text-xs text-ink">{v}</td>
                      <td className="px-4 py-3 font-mono text-xs text-slate">{bg}</td>
                      <td className="px-4 py-3 font-mono text-xs text-slate">{fg}</td>
                      <td className="px-4 py-3 text-slate">{uso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-slate">
              As famílias success e warning são funcionais e novas no sistema
              (--color-success-*/--color-warning-*). Error consome a escala status; info, a escala ocean.
            </p>
          </div>
        </div>
      </section>

      {/* ALERTAS */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="alertas"
            index="14 · Componentes"
            title="Alert / Toast"
            desc="Feedback de formulário e avisos de prazo. Anatomia: radius 16px · padding 16px · ícone 20px na cor forte · fundo 50 + borda 100 da variante. A versão toast reusa os mesmos tokens fixada no topo."
          />
          <div className="mt-10 space-y-4 max-w-[720px]">
            <Alert variant="success" title="Mensagem enviada">
              Recebemos seus dados. Um contador da nossa equipe responde no mesmo dia útil.
            </Alert>
            <Alert variant="warning" title="Prazo se aproximando">
              A DAS do Simples Nacional vence no dia 20. Envie o faturamento do mês até sexta-feira.
            </Alert>
            <Alert variant="error" title="Documento obrigatório">
              O preenchimento deste campo é necessário para concluir o envio.
            </Alert>
            <Alert variant="info" title="Balanço disponível">
              O balancete de agosto já está disponível para download na sua área.
            </Alert>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="faq"
            index="15 · Componentes"
            title="FAQ Accordion"
            desc="Uma pergunta aberta por vez. Abertura por grid-rows 0fr → 1fr em 250ms, pergunta ativa em status-red, chevron gira 180°. Experimente clicar."
          />
          <div className="mt-10 max-w-[820px]">
            <Accordion items={faqDemo} />
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="bg-mist border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="tabs"
            index="16 · Componentes"
            title="Tabs"
            desc="Navegação por abas para comparar regimes e cenários. Item ativo em status-red com indicador de 2px que desliza em 150ms. Experimente trocar de aba."
          />
          <div className="mt-10 card-service p-8 hover:!transform-none">
            <Tabs tabs={tabsDemo} />
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-paper">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 py-16 lg:py-20">
          <SectionHead
            id="roadmap"
            index="17 · Roadmap"
            title="Próximos componentes"
            desc="Componentes planejados que consumirão os roles semânticos já definidos."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((r) => (
              <div key={r.name} className="card-service p-6 hover:!transform-none">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-red-50 text-status-red">
                  <Check size={15} strokeWidth={2.5} aria-hidden />
                </span>
                <h3 className="mt-4 font-semibold text-ink" style={{ fontFamily: "var(--font-sans)" }}>{r.name}</h3>
                <p className="mt-2 text-sm text-slate">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
