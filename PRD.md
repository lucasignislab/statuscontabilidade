# PRD — Novo site Status Contabilidade

| | |
|---|---|
| **Cliente** | Status Contabilidade (Barão Geraldo, Campinas — SP) |
| **Responsável** | Lucas Coelho — Designer Digital |
| **Data** | 21/09/2026 |
| **Versão** | 1.0 |
| **Prazo** | 2 a 3 semanas a partir do aceite |

---

## 1. Contexto e problema

A Status Contabilidade tem 22 anos de mercado, equipe qualificada e um portfólio completo de serviços. O site atual (`statuscontab.com.br`) é um WordPress com tema pronto (Flash by ThemeGrill) que transmite abandono e prejudica ativamente o negócio:

- Topo de todas as páginas com endereço falso de Nova York, telefone americano fictício e o e-mail `info@themegrill.com` (do fabricante do tema).
- Rodapé com "© 2013 Lexxa Internet" e "Powered by WordPress".
- Sem HTTPS — o navegador exibe "Não seguro".
- Apenas 3 páginas (Home, Serviços, Fale Conosco), com conteúdo raso.
- Nenhum canal de conversão: sem WhatsApp, sem formulário, sem CTA.
- Estrutura quebrada: texto "Empregos" solto na home, linhas de traços no conteúdo, ícones sociais apontando para o template.
- Nenhum blog ou área de conteúdo — zero captura de tráfego orgânico.

**Consequência:** o site destrói credibilidade, não aparece no Google para buscas locais e não gera nenhum lead. O ativo de 22 anos de reputação não é aproveitado.

## 2. Objetivos do projeto

| # | Objetivo | Métrica de sucesso |
|---|---|---|
| 1 | Restaurar credibilidade imediata da marca | Zero conteúdo placeholder; dados reais em 100% das páginas |
| 2 | Gerar leads pelo site | Botão de WhatsApp e formulário em todas as páginas; meta inicial: primeiros contatos orgânicos em 60 dias |
| 3 | Ranquear para buscas locais | Indexação de todas as páginas de serviço; presença no Google Maps (Business Profile) |
| 4 | Performance e segurança | HTTPS ativo; Core Web Vitals no verde (LCP < 2,5s) |
| 5 | Base para crescimento de conteúdo | Blog estruturado e publicável pelo cliente |

## 3. Público-alvo

- **Primário:** donos de pequenas e médias empresas de Campinas e região (comércio, prestadores de serviço, clínicas) que precisam de contador ou querem trocar o atual. Acessam majoritariamente pelo celular.
- **Secundário:** pessoas físicas buscando declaração de IR e MEIs querendo migrar para ME.

**Decisão que o site precisa facilitar:** *"Posso confiar meu CNPJ a esse escritório? Vou chamar no WhatsApp agora."*

## 4. Escopo

### 4.1 Páginas (sitemap)

| Página | URL | Conteúdo |
|---|---|---|
| Home | `/` | Hero com os 22 anos + CTA WhatsApp; resumo de serviços; prova social; números; CTA final |
| Quem Somos | `/quem-somos` | História, equipe, escritório, registro CRC |
| Abertura de Empresas | `/servicos/abertura-de-empresas` | Serviço + CTA |
| Serviços Contábeis | `/servicos/contabilidade` | Serviço + CTA |
| Serviços Fiscais | `/servicos/fiscal` | Serviço + CTA |
| Folha de Pagamento e RH | `/servicos/folha-e-rh` | Serviço + CTA |
| IR Pessoa Física | `/servicos/irpf` | Serviço + CTA |
| IR Pessoa Jurídica | `/servicos/irpj` | Serviço + CTA |
| Regularização de Empresas | `/servicos/regularizacao` | Serviço + CTA |
| Blog | `/blog` | Listagem + estrutura de artigos; 1 artigo inicial publicado |
| Fale Conosco | `/contato` | Formulário, WhatsApp, telefones, mapa, endereço |
| Política de Privacidade | `/privacidade` | LGPD |

### 4.2 Funcionalidades

| Funcionalidade | Descrição | Prioridade |
|---|---|---|
| Botão WhatsApp flutuante | Visível em todas as páginas, mobile e desktop, com mensagem pré-preenchida | P0 |
| Formulário de contato | Nome, e-mail, telefone, mensagem; envio para o e-mail da Status | P0 |
| CTAs contextuais | "Fale com um contador" ao final de cada página de serviço | P0 |
| SEO on-page | Title, meta description, H1 único e URL amigável por página | P0 |
| Schema LocalBusiness | Dados estruturados: endereço, telefone, horário, geo | P0 |
| Sitemap + robots.txt | Submissão ao Search Console | P0 |
| Blog | CMS para o cliente publicar artigos sem código | P1 |
| Analytics | GA4 + Search Console configurados | P1 |
| Banner de cookies | LGPD, com link para política de privacidade | P1 |
| Depoimentos | Seção de prova social na home (2–3 clientes) | P1 |

### 4.3 Fora de escopo (v1)

- Área logada de clientes / portal de documentos
- Produção recorrente de artigos (orçada à parte)
- Reformulação completa de logo (apenas adaptação se necessário)
- Versão em outros idiomas

## 5. Conteúdo

- **Textos de serviços:** o conteúdo do site atual é a base (RH/pessoal, consultoria, contábil, IRPJ, fiscal). Lucas reescreve e adapta para a web; a Status só revisa.
- **Fotos:** reais do escritório e da equipe (mini ensaio orientado por Lucas, com celular).
- **Prova social:** 2–3 depoimentos com nome e empresa.
- **Artigo inicial do blog:** sugestão: *"Simples Nacional ou Lucro Presumido: qual é melhor para a sua empresa em 2026?"*

## 6. Stack técnica

| Camada | Escolha | Motivo |
|---|---|---|
| Framework | Next.js + TypeScript | SSG = velocidade e SEO; sem plugins quebrando |
| Estilo | Tailwind CSS | Desenvolvimento rápido e consistente |
| CMS (blog) | Sanity ou Payload | Cliente publica sem programador |
| Hospedagem | Vercel | CDN, HTTPS automático, custo zero no início |
| Formulários | Resend ou Formspree | Entrega direta no e-mail da Status |
| Métricas | GA4 + Search Console + Microsoft Clarity | Medição e comportamento do visitante |

## 7. SEO

**Local (prioridade máxima):**
- Palavras-chave alvo: `contabilidade em Campinas`, `contador Barão Geraldo`, `abertura de empresa Campinas`, `escritório contábil Campinas`.
- Uma keyword principal por página de serviço.
- NAP consistente (nome, endereço, telefone) em site, Business Profile e diretórios.
- Orientação para ativação/otimização do Google Business Profile.

**Técnico:**
- HTTPS, sitemap.xml, robots.txt, redirects das URLs antigas, alt text em imagens, Core Web Vitals no verde.

**Conteúdo (pós-lançamento):**
- Pautas sugeridas: MEI vs ME, Simples Nacional, Reforma Tributária 2026, "quanto custa abrir empresa em Campinas".

## 8. Cronograma

| Semana | Entrega |
|---|---|
| 1 | Reunião de alinhamento · recebimento dos materiais · organização dos textos · direção visual · aprovação do layout da home |
| 2 | Desenvolvimento de todas as páginas · WhatsApp e formulário funcionando · SEO aplicado · versão de testes para revisão |
| 3 | Rodada de ajustes · testes mobile/desktop · domínio e HTTPS · site no ar + Search Console |

**Dependência crítica:** materiais do cliente (seção 9) recebidos na semana 1. Atrasos deslocam o cronograma proporcionalmente.

## 9. Materiais necessários do cliente

- ✓ Logo em boa resolução (PNG/SVG, fundo transparente)
- ✓ Fotos reais do escritório e da equipe
- ✓ Dados oficiais: razão social, nº CRC, endereço, telefones, e-mail definitivo
- ✓ Número de WhatsApp que receberá os leads
- ✓ Acessos ao painel do domínio e à hospedagem atual
- ✓ Links de perfis sociais (ou autorização para criar)
- ✓ 2–3 depoimentos de clientes (nome + empresa)

## 10. Investimento

| Condição | Valor |
|---|---|
| À vista | R$ 2.000 |
| Parcelado | 2× R$ 1.100 (entrada + entrega) |

**Incluído:** design, desenvolvimento, SEO local, HTTPS, Analytics, blog estruturado com 1 artigo, treinamento de uso, 30 dias de suporte pós-lançamento.

**Não incluído:** domínio (~R$ 40/ano), hospedagem (a partir de R$ 0), artigos recorrentes (orçamento à parte).

## 11. Critérios de aceite

- [ ] Todas as páginas do sitemap publicadas, sem nenhum conteúdo placeholder
- [ ] Dados reais (endereço, telefones, e-mail) em 100% do site
- [ ] HTTPS ativo e cadeado em todos os navegadores
- [ ] Botão de WhatsApp abrindo conversa com mensagem pré-preenchida
- [ ] Formulário entregando e-mail de teste com sucesso
- [ ] Sitemap submetido e páginas indexando no Search Console
- [ ] LCP < 2,5s no PageSpeed (mobile) para home e uma página de serviço
- [ ] Revisão final aprovada pela Status
