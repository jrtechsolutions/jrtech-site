export const site = {
  name: "JR Technology Solutions",
  description:
    "Infraestrutura, segurança e soluções digitais para empresas que precisam de uma tecnologia mais organizada, segura e preparada para crescer.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://jrtechnologysolutions.com.br",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
    "contato@jrtechnologysolutions.com.br",
  whatsapp:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511973802744",
  phoneDisplay: "(11) 97380-2744",
} as const;

export const nav = {
  links: [
    { label: "Soluções", href: "#solucoes" },
    { label: "Projetos", href: "#projetos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ],
  cta: "Solicitar diagnóstico",
} as const;

export const hero = {
  kicker: "JR Technology Solutions",
  title: "Organizamos, protegemos e evoluímos a tecnologia da sua empresa",
  subtitle:
    "Infraestrutura, segurança e soluções digitais para empresas que precisam de uma tecnologia mais organizada, segura e preparada para crescer.",
  primaryCta: "Solicitar diagnóstico",
  secondaryCta: "Conhecer soluções",
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
    },
    {
      tag: "S.02",
      title: "Suporte e Gestão de TI",
      description: "Sua tecnologia funcionando sem improvisos.",
      includes: ["suporte", "manutenção", "acompanhamento", "melhorias"],
      hover: "response" as const,
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
    },
    {
      tag: "S.04",
      title: "Governança de Tecnologia",
      description: "Tecnologia organizada para crescer.",
      includes: ["documentação", "processos", "planejamento", "gestão"],
      hover: "processes" as const,
    },
    {
      tag: "S.05",
      title: "Desenvolvimento",
      description: "Soluções digitais sob medida.",
      includes: ["sites", "sistemas", "integrações", "automações"],
      hover: "build" as const,
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
      thumb: "FATIA DE LEI",
      category: "Desenvolvimento",
      title: "Fatia de Lei",
      description: "Sistema web para gerenciamento operacional.",
    },
    {
      thumb: "MONITORAMENTO",
      category: "Infraestrutura",
      title: "Ambiente de monitoramento",
      description: "Docker, Grafana, Prometheus, Alertas.",
    },
    {
      thumb: "SOB MEDIDA",
      category: "Sistemas",
      title: "Soluções personalizadas",
      description: "Aplicações desenvolvidas conforme necessidade.",
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
    "A JR Technology Solutions nasceu da experiência prática em infraestrutura, cloud, segurança da informação e desenvolvimento de sistemas. Com mais de um ano de operação, atuamos diretamente com empresas que precisam de tecnologia mais organizada, segura e preparada para crescer.",
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
  text: "Solicite um diagnóstico ou converse com um especialista. Avaliamos o cenário atual e indicamos os próximos passos com objetividade.",
  whatsappCta: "Enviar mensagem",
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
    subtitle: "Preencha os dados e retornamos com o próximo passo.",
    name: "Nome",
    namePlaceholder: "Seu nome",
    email: "E-mail",
    emailPlaceholder: "seu@email.com",
    company: "Empresa",
    companyPlaceholder: "Nome da empresa",
    message: "Mensagem",
    messagePlaceholder: "Conte brevemente o que você precisa...",
    submit: "Solicitar diagnóstico",
    success: "Mensagem enviada com sucesso. Entraremos em contato em breve.",
    error: "Não foi possível enviar sua mensagem. Tente novamente mais tarde.",
  },
} as const;

export const footer = {
  privacyLabel: "Política de privacidade",
  privacyHref: "/politica-de-privacidade",
} as const;
