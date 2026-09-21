export const site = {
  name: "Status Contabilidade",
  phone1: "(19) 3289-7123",
  phone2: "(19) 3289-5673",
  whatsapp: "5519999999999", // TODO: substituir pelo número real
  whatsappMessage:
    "Olá! Vim pelo site da Status Contabilidade e gostaria de conversar com um contador.",
  address: "Rua Agostinho Páttaro, 180, Barão Geraldo, Campinas/SP",
  cep: "13084-643",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+Agostinho+P%C3%A1ttaro+180+Bar%C3%A3o+Geraldo+Campinas",
  email: "contato@statuscontab.com.br", // TODO: confirmar e-mail definitivo
  years: 22,
};

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: string;
  hero: string;
  intro: string;
  items: string[];
  closing: string;
}

export const services: Service[] = [
  {
    slug: "abertura-de-empresas",
    title: "Abertura de empresas",
    short: "Do contrato social ao CNPJ ativo, sem idas e vindas aos órgãos.",
    icon: "rocket",
    hero: "Abrir empresa em Campinas sem burocracia desnecessária",
    intro:
      "A gente cuida de todo o processo legal: contrato social, registros nos órgãos federal, estadual e municipal, e a escolha do enquadramento tributário que faz sentido para o seu negócio desde o primeiro dia.",
    items: [
      "Elaboração do contrato social e de todos os documentos de abertura",
      "Registro na Junta Comercial e obtenção do CNPJ",
      "Alvarás e inscrições municipal e estadual",
      "Escolha do regime tributário: Simples Nacional, Lucro Presumido ou Real",
      "Orientação sobre o enquadramento certo para o seu faturamento",
    ],
    closing:
      "Você foca no negócio que está nascendo. Toda a parte legal fica com quem faz isso há 22 anos.",
  },
  {
    slug: "contabilidade",
    title: "Contabilidade completa",
    short: "Escrituração, balancetes e balanços com supervisão de contadores sêniores.",
    icon: "calculator",
    hero: "Contabilidade que você entende e pode usar para decidir",
    intro:
      "Escrituração organizada, balancetes mensais conferidos e balanço anual entregue no prazo. Mais do que cumprir obrigação, sua contabilidade vira uma leitura clara de como a empresa está indo.",
    items: [
      "Classificação e escrituração conforme os princípios contábeis vigentes",
      "Apuração e conciliação de balancetes mensais",
      "Balanço anual, DRE e demonstrações do patrimônio",
      "Guarda responsável dos livros: Diário, Razão, Lalur e demais registros",
      "Relatórios que explicam os números com clareza, sem juridiquês",
    ],
    closing:
      "Números conferidos todo mês, explicados de um jeito que ajuda você a decidir.",
  },
  {
    slug: "fiscal",
    title: "Departamento fiscal",
    short: "Apuração de tributos, guias e obrigações acessórias sem multa e sem susto.",
    icon: "file-check",
    hero: "Impostos calculados certo, pagos no dia, sem surpresas",
    intro:
      "Acompanhamos a legislação federal, estadual e municipal por você. Escrituramos os registros fiscais, calculamos os tributos e entregamos todas as declarações dentro do prazo.",
    items: [
      "Escrituração e digitação dos registros fiscais",
      "Cálculo dos tributos devidos, mensais e anuais",
      "Entrega das obrigações acessórias (SPED, DCTF, EFD e demais)",
      "Atendimento a agentes fiscais e participação em auditorias",
      "Alertas quando uma mudança de lei afeta a sua empresa",
    ],
    closing:
      "O Fisco muda as regras o tempo todo. A gente acompanha para você não precisar.",
  },
  {
    slug: "folha-e-rh",
    title: "Folha de pagamento e RH",
    short: "Admissão, folha, encargos e desligamento dentro da lei trabalhista.",
    icon: "users",
    hero: "Sua equipe bem cuidada, sua empresa protegida",
    intro:
      "Do processo de admissão ao desligamento, cuidamos da folha de pagamento, dos encargos sociais e das rotinas trabalhistas para você ter tranquilidade com quem trabalha com você.",
    items: [
      "Processo legal de admissão e desligamento",
      "Folha de pagamento automatizada e pontual",
      "Guias de recolhimento de encargos sociais (INSS, FGTS)",
      "Provisões e contabilização de férias e 13º salário",
      "Orientação trabalhista e previdenciária contínua",
    ],
    closing:
      "Gente é a parte mais importante e mais delicada do negócio. Aqui ela recebe atenção de verdade.",
  },
  {
    slug: "irpf",
    title: "Imposto de Renda Pessoa Física",
    short: "Sua declaração entregue no prazo, sem erro e sem dor de cabeça.",
    icon: "user-check",
    hero: "Seu IR declarado certo, sem malha fina",
    intro:
      "Organizamos seus rendimentos, deduções e bens, e entregamos a declaração dentro do prazo legal. Se você tem mais de uma fonte de renda, investimentos ou imóveis, cuidamos de cada detalhe.",
    items: [
      "Levantamento completo de rendimentos e deduções",
      "Declaração de bens, investimentos e imóveis",
      "Cálculo do melhor modelo: completo ou simplificado",
      "Entrega dentro do prazo, com recibo e comprovantes",
      "Apoio em caso de pendências ou malha fina",
    ],
    closing: "Você entrega os documentos. Nossa equipe cuida de todo o resto.",
  },
  {
    slug: "irpj",
    title: "Imposto de Renda Pessoa Jurídica",
    short: "Declaração anual da empresa com orientação tributária o ano inteiro.",
    icon: "building",
    hero: "O IRPJ da sua empresa em dia, o ano inteiro",
    intro:
      "Além da declaração anual dentro do prazo, orientamos sua empresa na aplicação dos dispositivos legais ao longo do ano, em sintonia com a área contábil.",
    items: [
      "Declaração anual de rendimentos da pessoa jurídica",
      "Orientação contínua sobre dispositivos legais vigentes",
      "Apuração alinhada com a contabilidade da empresa",
      "Atendimento às exigências do regulamento e do fisco",
      "Suporte em eventuais fiscalizações",
    ],
    closing: "Declaração no prazo é o básico. O valor está na orientação do dia a dia.",
  },
  {
    slug: "regularizacao",
    title: "Regularização de empresas",
    short: "Pendências resolvidas e certidões limpas para sua empresa voltar a operar tranquila.",
    icon: "shield-check",
    hero: "Empresa em dia com todos os órgãos",
    intro:
      "Resolvemos pendências perante os órgãos federal, estadual e municipal, e emitimos as certidões negativas que sua empresa precisa para licitações, crédito e contratos.",
    items: [
      "Diagnóstico completo da situação da empresa",
      "Regularização de pendências federais, estaduais e municipais",
      "Parcelamento de débitos quando necessário",
      "Certidões negativas para licitação e outros fins",
      "Encerramento de empresas com todos os baixas em dia",
    ],
    closing:
      "Pendência fiscal não some sozinha. A gente resolve e deixa tudo documentado.",
  },
];
