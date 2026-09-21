# Status Contabilidade — Design System

> Novo site institucional. Herda **as cores reais da marca** extraídas do logo e do
> banner do site atual: o **vermelho `#C00518`** é a identidade da Status, sobre base
> branca, com azuis como suporte. O verde-água `#30AFB8` que aparece no site atual é
> cor padrão do tema WordPress e **não faz parte da marca** — não usar.
>
> Tipografia editorial com **Lora** nos títulos e **Open Sans** nos textos.

---

## 1. Princípios

| Princípio | O que significa na prática |
|---|---|
| **Credibilidade primeiro** | Cada tela responde: "posso confiar meu CNPJ aqui?". Dados reais, selo CRC, 22 anos de mercado sempre visíveis. |
| **Humano, não corporativo frio** | Fotos reais da equipe, linguagem direta, espaçamento generoso, cantos suaves. |
| **Calma visual** | Base branca e arejada; o vermelho entra com precisão cirúrgica, nunca como grito. |
| **Editorial e polido** | Serif (Lora) conduz a hierarquia; detalhes refinados em vez de efeitos pesados. |
| **Movimento sutil** | Animações discretas que guiam o olhar. Nada decorativo. |

---

## 2. Paleta de cores

Extraída do logo (`favicon_status.png`) e do banner do site atual:

### 2.1 Cores da marca

| Token | Hex | Origem | Uso |
|---|---|---|---|
| `status-red` | `#C00518` | Onda do banner | Cor principal da marca: CTAs, destaques, ícones, elementos de ação |
| `status-red-deep` | `#BA2B25` | Elipse do logo | Variação quente: hover de CTAs, gradientes com `status-red` |
| `ink` | `#313B48` | Textos do site atual | Texto principal, headings, footer, seções escuras |
| `ocean` | `#08508C` | Links do site atual | Suporte: links informativos, badges, dados técnicos |
| `paper` | `#FFFFFF` | Base do site atual | Fundo principal — o site respira em branco |

### 2.2 Derivadas (tints e shades dos originais)

| Token | Hex | Uso |
|---|---|---|
| `red-50` | `#FDF0F1` | Fundo suave de blocos de CTA, chips, destaque leve |
| `red-100` | `#FADCE0` | Hover de chips, fundos de depoimento |
| `red-700` | `#8F0412` | Texto vermelho sobre fundo claro (contraste AA), active states |
| `ink-700` | `#46536A` | Texto secundário em ênfase |
| `ocean-50` | `#EBF1F8` | Fundos informativos, cards secundários |
| `ocean-600` | `#0A6AB5` | Hover de links informativos |

### 2.3 Neutros

| Token | Hex | Uso |
|---|---|---|
| `mist` | `#F9F9F9` | Fundo alternado de seções |
| `line` | `#E4E4E4` | Bordas, divisores, inputs |
| `slate` | `#555555` | Texto de apoio, legendas |
| `black` | `#000000` | Não usar em texto corrido; reservado |

### 2.4 Semânticas

| Token | Hex | Uso |
|---|---|---|
| `success` | `#1E8E5A` | Confirmações de formulário (única cor fora da marca; semântica exige distinção do vermelho) |
| `error` | `#C00518` (status-red) | Erros de validação |
| `info` | `#08508C` (ocean) | Avisos neutros |

### 2.5 Regras de uso do vermelho

- O vermelho da Status é forte: ele **marca** os pontos de ação. CTA principal por tela: **um**.
- Headlines são em `ink` (Lora). Vermelho no texto só em: eyebrow de seção, uma palavra em itálico de destaque, e números de prova social.
- Gradiente da marca (hero e faixas de impacto): `status-red` → `status-red-deep`, diagonal suave, com texto branco.
- ❌ Nunca vermelho em fundos de seção inteiros fora do hero/faixa de credibilidade.
- ❌ Nunca texto `status-red` puro em corpo pequeno sobre branco (usar `red-700`).
- ❌ Não usar o teal `#30AFB8` em nenhum lugar: é cor do tema antigo, não da marca.

---

## 3. Tipografia

Fontes via Google Fonts. **Nunca** usar Inter, Bebas Neue, Roboto, Poppins ou Lato.

| Papel | Fonte | Pesos | Fallback |
|---|---|---|---|
| Títulos / display | **Lora** | 400, 500, 600 + itálico | Georgia, serif |
| Textos / UI | **Open Sans** | 400, 600, 700 | system-ui, sans-serif |

### 3.1 Escala

| Token | Tamanho | Fonte | Uso |
|---|---|---|---|
| `display` | clamp(2.75rem, 6vw, 4.5rem) | Lora 500 | Hero da home |
| `h1` | clamp(2.25rem, 4.5vw, 3.5rem) | Lora 500 | Título de página |
| `h2` | clamp(1.75rem, 3vw, 2.5rem) | Lora 500 | Seções |
| `h3` | 1.375rem | Lora 600 | Cards, subseções |
| `h4` | 1.125rem | Lora 600 | Blocos menores |
| `lead` | 1.25rem / 1.6 | Open Sans 400 | Parágrafo de abertura |
| `body` | 1rem / 1.65 | Open Sans 400 | Texto corrido |
| `small` | 0.875rem / 1.5 | Open Sans 400 | Legendas, meta |
| `label` | 0.75rem, +0.12em, uppercase | Open Sans 700 | Eyebrows, etiquetas |

### 3.2 Regras

- Headlines em Lora, `ink`, `letter-spacing: -0.01em`, `line-height: 1.15`.
- Itálico Lora em `status-red` reservado para **uma palavra de ênfase** por headline (humaniza o título).
- Corpo em Open Sans, `line-height` 1.65, medida máxima de `65ch`.
- Eyebrow acima de todo H2 de seção: `(label)` em `status-red`, ex: `NOSSOS SERVIÇOS`.

---

## 4. Espaçamento e grid

- Base de **8px** (4px para micro-ajustes).
- Container: `max-width: 1200px`, padding lateral `24px` (mobile) / `48px` (desktop).
- Seções: `padding: 96px 0` desktop, `64px 0` mobile. Alternar `paper` ↔ `mist`.
- Grid de 12 colunas desktop; cards de serviço em 3 colunas → 1 coluna no mobile.

## 5. Formas

| Elemento | Valor |
|---|---|
| Botões | `border-radius: 999px` (pílula) |
| Cards | `border-radius: 16px` |
| Inputs | `border-radius: 10px` |
| Imagens | `border-radius: 16px` |
| Ícones | estilo outline, traço 1.5px, cantos arredondados (Lucide) |

## 6. Sombras e profundidade

Sombras suaves tingidas de `ink`, nunca pretas:

| Nível | Valor | Uso |
|---|---|---|
| `sm` | `0 1px 3px rgba(49,59,72,.08)` | Cards em repouso |
| `md` | `0 8px 24px rgba(49,59,72,.10)` | Hover de card, header com scroll |
| `lg` | `0 16px 48px rgba(49,59,72,.14)` | Modais, bloco de CTA |
| `red-glow` | `0 8px 24px rgba(192,5,24,.25)` | Hover do CTA principal |

Divisores em `line` de 1px; sem bordas duras.

## 7. Componentes

### 7.1 Botões

**Primário (conversão)**
- `background: status-red`, texto branco, pílula, padding `16px 32px`
- Hover: `status-red-deep` + `translateY(-2px)` + sombra `red-glow`
- Label curto e verbal: "Falar no WhatsApp", "Pedir diagnóstico gratuito"

**Secundário**
- Fundo transparente, borda 1.5px `ink`, texto `ink`
- Hover: fundo `mist`, borda `status-red`, texto `status-red`

**Terciário (link)**
- Texto `ocean` com sublinhado animado da esquerda para a direita

### 7.2 Card de serviço

- Fundo `paper`, radius 16px, sombra `sm`, borda `line`
- Ícone Lucide em círculo `red-50` com glyph `status-red`
- Título Lora 600 + 2 linhas de descrição + link "Saiba mais →" em `red-700`
- Hover: sombra `md`, ícone ganha fundo `red-100`

### 7.3 Hero (home)

- Fundo `paper` com mancha/gradiente suave `red-50`; opção de faixa inferior em gradiente `status-red` → `status-red-deep` (eco da onda do banner original, reinterpretada de forma limpa)
- Headline Lora grande em `ink`, uma palavra em itálico `status-red`
- Subhead Open Sans em `slate`, CTA primário + secundário
- Foto real da equipe à direita, radius 16px

### 7.4 Bloco de credibilidade (home)

- Faixa `ink` com texto branco: "22 anos de mercado" em Lora grande, selo CRC, contadores (empresas atendidas, clientes ativos)
- Números dos contadores em `status-red` sobre o fundo escuro? Não: usar branco com detalhe `red-100`. Vermelho sobre `ink` falha em contraste.

### 7.5 Formulário

- Labels em `label` (Open Sans 700 uppercase pequeno)
- Inputs com borda `line`, radius 10px, foco com anel `status-red` 2px
- Erros em `status-red` com mensagem amigável em `small`
- Submit = botão primário

### 7.6 WhatsApp flutuante

- Círculo 56px, `status-red`, ícone WhatsApp branco, fixo bottom-right, sombra `red-glow`
- Pulso sutil a cada 6s (apenas no mobile, onde a conversão acontece)

### 7.7 Header

- Fundo `paper` com blur ao rolar, borda inferior `line`
- Logo (vermelho original) à esquerda, nav em Open Sans 600 `ink`, CTA "Fale conosco" (secundário) à direita

### 7.8 Footer

- Fundo `ink`, texto `mist`/`slate`, NAP completo, links de serviço, redes sociais reais

## 8. Motion

### 8.1 Decisões de stack

| Tecnologia | Decisão | Motivo |
|---|---|---|
| **GSAP + ScrollTrigger** | ✅ Usar | Coreografa todas as entradas; leve (~45kb), sem impacto relevante no LCP |
| **Three.js** | ❌ Não usar | 150–600kb de JS contra a meta de LCP < 2,5s; público acessa do celular e quer contato, não WebGL |
| Gradiente animado no hero | ✅ Canvas 2D ou CSS | O "uau" do hero: malha suave em `red-50`/`status-red` que respira (eco da onda do banner), ~2kb |
| **Lenis (smooth scroll)** | ⚠️ Opcional | Testar ao final; cortar se afetar performance |
| Micro-interações | CSS puro | Hovers, sublinhados, pulso do WhatsApp não precisam de JS |

Filosofia: GSAP coreografa a entrada de tudo, CSS cuida dos hovers, nada anima sem motivo. O site deve parecer caro, não ocupado.

### 8.2 Títulos

| Elemento | Animação | Spec |
|---|---|---|
| Headline do hero | Reveal palavra por palavra (split manual) | `yPercent 100→0`, `power4.out`, stagger 0.08s; a palavra em itálico vermelho entra por último |
| H2 de seções | Reveal no scroll | `y: 40→0`, `power3.out`, ScrollTrigger |
| Eyebrows | Fade antecipado | 100ms antes do título, guiando o olhar |

### 8.3 Textos

| Elemento | Animação | Spec |
|---|---|---|
| Parágrafos `lead` | Fade-up | Opacity + `y: 24→0`, 600ms (sem split letra a letra em texto corrido) |
| Contadores ("22 anos") | Count-up no scroll | Momento de impacto do bloco de credibilidade |
| Depoimentos | Crossfade + slide sutil | Troca entre depoimentos |

### 8.4 Imagens

| Elemento | Animação | Spec |
|---|---|---|
| Fotos da equipe/escritório | Clip-path reveal + scale | Imagem "abre" de baixo para cima, scale 1.05→1 |
| Fotos grandes (home, Quem Somos) | Parallax leve | `yPercent ±8`, scrub |
| Cards de serviço | Entrada com stagger | 80ms entre cards; hover lift é CSS |

### 8.5 Regras globais

- ScrollTrigger: `start: "top 85%"`, `once: true` (anima uma vez só)
- `prefers-reduced-motion`: desativa tudo
- Nenhuma animação bloqueia a leitura do conteúdo principal

## 9. Tom de voz

- Direto e humano: "Cuidamos da sua contabilidade para você cuidar do seu negócio."
- Verbos de ação nos CTAs; evitar jargão fiscal sem explicação.
- Primeira pessoa do plural ("nós") ao falar da Status; segunda ("você") ao falar com o visitante.
- Proibido: clichês de template ("soluções completas e personalizadas para sua empresa").

## 10. Acessibilidade

- Contraste mínimo AA: `ink` e `slate` sobre `paper`; texto vermelho pequeno sempre em `red-700`.
- Vermelho nunca como única forma de indicar estado (erro vem acompanhado de ícone e mensagem).
- Foco visível em todos os interativos (anel `status-red` 2px).
- Todo ícone interativo com `aria-label`.
- Alvos de toque ≥ 44px no mobile.
