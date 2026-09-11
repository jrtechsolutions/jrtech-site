export const site = {
  name: "JR Technology Solutions",
  description:
    "TI para pequenas e médias empresas em São Paulo — diagnóstico, implementação e acompanhamento em infraestrutura, segurança e desenvolvimento. Fale diretamente com o responsável técnico.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.jrtechnologysolutions.com.br",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "contato@jrtechnologysolutions.com.br",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511973802744",
  phoneDisplay: "(11) 97380-2744",
} as const;

export const nav = {
  links: [
    { label: "Soluções", href: "/solucoes" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  cta: "Solicitar diagnóstico",
} as const;

export const hero = {
  kicker: "Consultoria técnica · São Paulo",
  title: "Organizamos, protegemos e evoluímos a tecnologia da sua empresa",
  subtitle:
    "Infraestrutura, segurança e soluções digitais para empresas que precisam de uma tecnologia mais organizada, segura e preparada para crescer.",
  primaryCta: "Solicitar diagnóstico",
} as const;

export const problema = {
  kicker: "Problema",
  title: "Sua empresa cresceu. Sua tecnologia acompanhou?",
  items: [
    {
      tag: "P.01",
      title: "Tecnologia sem planejamento",
      description:
        "Ambientes crescendo sem organização geram custos e riscos.",
      hover: "warn" as const,
    },
    {
      tag: "P.02",
      title: "Falta de segurança",
      description: "Dados e sistemas precisam estar protegidos.",
      hover: "lock-open" as const,
    },
    {
      tag: "P.03",
      title: "Processos manuais",
      description: "Automação pode reduzir desperdícios.",
      hover: "progress" as const,
    },
    {
      tag: "P.04",
      title: "Dependência de pessoas específicas",
      description:
        "Documentação e organização trazem previsibilidade.",
      hover: "doc-stable" as const,
    },
  ],
} as const;

export const solucoes = {
  kicker: "Soluções",
  title: "Como podemos ajudar sua empresa",
  items: [
    {
      tag: "S.01",
      title: "Infraestrutura e Cloud",
      description: "Organização, disponibilidade e desempenho.",
      includes: [
        "servidores",
        "redes",
        "cloud",
        "monitoramento",
        "backups",
      ],
      hover: "uptime" as const,
      href: "/solucoes/infraestrutura",
    },
    {
      tag: "S.02",
      title: "Suporte e Gestão de TI",
      description: "Sua tecnologia funcionando sem improvisos.",
      includes: ["suporte", "manutenção", "acompanhamento", "melhorias"],
      hover: "response" as const,
      href: "/solucoes/suporte-gestao-ti",
    },
    {
      tag: "S.03",
      title: "Segurança da Informação",
      description: "Redução de riscos digitais.",
      includes: [
        "boas práticas",
        "controle de acesso",
        "proteção de dados",
        "segurança preventiva",
      ],
      hover: "scan" as const,
      href: "/solucoes/seguranca",
    },
    {
      tag: "S.04",
      title: "Governança de Tecnologia",
      description: "Tecnologia organizada para crescer.",
      includes: ["documentação", "processos", "planejamento", "gestão"],
      hover: "processes" as const,
      href: "/solucoes/governanca",
    },
    {
      tag: "S.05",
      title: "Desenvolvimento",
      description: "Soluções digitais sob medida.",
      includes: ["sites", "sistemas", "integrações", "automações"],
      hover: "build" as const,
      href: "/solucoes/desenvolvimento",
    },
  ],
} as const;

export const comoTrabalhamos = {
  kicker: "Como trabalhamos",
  title: "Tecnologia começa com diagnóstico",
  steps: [
    {
      num: "01",
      title: "Diagnóstico",
      description: "Entendemos seu ambiente, problemas e objetivos.",
    },
    {
      num: "02",
      title: "Planejamento",
      description: "Definimos prioridades e soluções.",
    },
    {
      num: "03",
      title: "Implementação",
      description: "Executamos as melhorias.",
    },
    {
      num: "04",
      title: "Evolução",
      description: "Acompanhamos o crescimento.",
    },
  ],
} as const;

export const projetos = {
  kicker: "Projetos",
  title: "Projetos desenvolvidos",
  items: [
    {
      type: "pattern" as const,
      thumbLabel: "fatiadelei.com.br",
      category: "Desenvolvimento",
      title: "Fatia de Lei",
      description:
        "E-commerce completo para loja de doces, com catálogo de produtos, painel administrativo para gestão de receitas e estoque, e pagamento integrado via API do PicPay. Desenvolvido do zero, do frontend ao backend.",
      link: {
        href: "https://fatiadelei.com.br",
        label: "↗ fatiadelei.com.br",
      },
    },
    {
      type: "image" as const,
      image: "/grafana-thumbnail.jpg",
      imageAlt:
        "Painel Grafana de monitoramento de infraestrutura de TI da JR Technology Solutions",
      objectPosition: "object-top" as const,
      fit: "object-cover" as const,
      category: "Infraestrutura",
      title: "Ambiente de monitoramento",
      description:
        "Ambiente de monitoramento interno com Grafana + Prometheus — métricas de CPU, memória, disco e rede em tempo real, com alertas automáticos configurados via Docker.",
    },
  ],
} as const;

export const diferencial = {
  kicker: "Diferencial",
  title: "Tecnologia com visão de negócio",
  blocks: [
    {
      num: "01",
      title: "Diagnóstico antes de qualquer proposta",
      text: "Antes de recomendar qualquer solução, entendemos o ambiente. Nenhuma implementação sem diagnóstico prévio.",
    },
    {
      num: "02",
      title: "Segurança como critério, não como serviço extra",
      text: "Boas práticas de segurança entram no planejamento de toda implementação — não são vendidas separadas depois que o problema aparece.",
    },
    {
      num: "03",
      title: "Você fala diretamente com quem executa",
      text: "Sem intermediários, sem terceirização da sua causa. Quem te atende é quem resolve.",
    },
  ],
} as const;

export const tecnologias = {
  kicker: "Tecnologias",
  title: "Tecnologias utilizadas",
  categories: [
    {
      label: "Infraestrutura",
      items: [
        { name: "Linux", use: "servidores e ambientes de produção" },
        { name: "Docker", use: "ambientes isolados e replicáveis" },
        { name: "Cloud", use: "AWS / Azure / GCP conforme necessidade" },
        { name: "Redes", use: "configuração e segmentação" },
      ],
    },
    {
      label: "Desenvolvimento",
      items: [
        { name: "Aplicações Web", use: "sistemas sob medida" },
        { name: "APIs", use: "integrações entre sistemas" },
        { name: "Banco de Dados", use: "modelagem e otimização" },
      ],
    },
    {
      label: "Monitoramento",
      items: [
        { name: "Dashboards", use: "Grafana + Prometheus" },
        { name: "Métricas", use: "coleta e análise contínua" },
        { name: "Alertas", use: "notificações automáticas" },
      ],
    },
    {
      label: "Segurança",
      items: [
        { name: "Hardening", use: "redução de superfície de ataque" },
        { name: "Controle de acesso", use: "políticas e permissões" },
        { name: "Boas práticas", use: "frameworks e compliance" },
      ],
    },
  ],
} as const;

export const sobre = {
  kicker: "SOBRE",
  titleLine1: "Experiência técnica.",
  titleLine2: "Atenção de verdade.",
  paragraphs: [
    "A JR Technology Solutions nasceu da experiência prática em infraestrutura, cloud, segurança da informação e desenvolvimento de sistemas. Com mais de um ano de operação em São Paulo, atuamos diretamente com pequenas e médias empresas que precisam de tecnologia mais organizada, segura e preparada para crescer.",
    "Aqui, você não fala com um vendedor para ser repassado a um técnico. Quem entende o seu problema é quem resolve — com diagnóstico real, planejamento honesto e acompanhamento contínuo.",
  ],
  stats: [
    { value: "+1 ano", label: "de operação" },
    { value: "100%", label: "atendimento direto" },
    { value: "0", label: "terceirizações" },
  ],
} as const;

export const ctaFinal = {
  kicker: "Contato",
  title: "Vamos entender o momento da sua tecnologia?",
  text: "Prefere uma conversa rápida? Fale diretamente pelo WhatsApp.",
  whatsappCta: "Falar com um especialista",
  formIntro: "Ou prefere enviar os dados antes? Preencha abaixo e retorno em até 24h.",
  details: [
    {
      key: "phone",
      label: "Telefone",
      value: "(11) 97380-2744",
      href: "tel:+5511973802744",
    },
    {
      key: "email",
      label: "E-mail",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      key: "location",
      label: "Localização",
      value: "São Paulo",
    },
    {
      key: "hours",
      label: "Horário",
      value: "Seg – Sex: 8:00 às 18:00",
    },
  ],
  form: {
    kicker: "Formulário — Diagnóstico",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "seu@email.com",
    company: "Empresa",
    companyPlaceholder: "Nome da empresa",
    message: "Mensagem",
    messagePlaceholder: "Conte brevemente o que você precisa...",
    submit: "Enviar mensagem",
    success: "Mensagem enviada com sucesso. Entraremos em contato em breve.",
    error: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
  },
} as const;

export const faq = {
  kicker: "Dúvidas",
  title: "Perguntas frequentes",
  intro: "Tire suas dúvidas antes de solicitar o diagnóstico.",
  items: [
    {
      question: "Como funciona o diagnóstico inicial?",
      answer:
        "Uma conversa de 30-40 minutos (presencial ou remota) pra entender seu ambiente atual, os problemas que você já percebe e os que ainda não apareceram. Você recebe um resumo por escrito com as prioridades identificadas — sem custo, sem compromisso.",
    },
    {
      question: "Vocês atendem empresas fora de São Paulo?",
      answer:
        "O diagnóstico e boa parte do trabalho de infraestrutura, segurança e desenvolvimento podem ser feitos remotamente. Para visitas presenciais, o foco atual é São Paulo capital e região.",
    },
    {
      question: "Qual o prazo médio de um projeto?",
      answer:
        "Varia conforme o escopo definido no diagnóstico. Um ajuste pontual de infraestrutura pode levar poucos dias; um projeto de desenvolvimento sob medida costuma levar algumas semanas. O prazo específico só é definido depois do diagnóstico.",
    },
    {
      question: "Preciso trocar minha infraestrutura atual?",
      answer:
        "Na maioria dos casos, não. O diagnóstico avalia o que já existe e prioriza ajustes e organização antes de qualquer substituição.",
    },
  ],
} as const;

export const footer = {
  privacyLabel: "Política de privacidade",
  privacyHref: "/politica-de-privacidade",
  locationNote: "Consultoria de TI em São Paulo",
} as const;
