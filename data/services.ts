import { site } from "@/data/content";
import type { PhotoHeroPos } from "@/components/solucoes/PhotoHero";

export type IncludeItem = {
  title: string;
  description: string;
  stack?: string[];
};

export type OutcomeItem = {
  title: string;
  description: string;
};

export type ProofImage = {
  kind: "image";
  src: string;
  alt: string;
  caption?: string;
  captionDot?: boolean;
  title?: string;
  text?: string;
};

export type ProofMarquee = {
  kind: "marquee";
  title?: string;
  lead?: string;
  items: Array<{
    src: string;
    alt: string;
    url: string;
    title: string;
    description: string;
  }>;
};

export type ProofVisual = ProofImage | ProofMarquee;

export type ProcessStep = {
  title: string;
  description: string;
};

export type CompareBlock = {
  title: string;
  lead: string;
  before: { label: string; items: string[] };
  after: { label: string; items: string[] };
};

export type FrameworkItem = {
  name: string;
  tag: string;
  description: string;
};

export type StructureDiagram = {
  top: string;
  middle: Array<{ title: string; sub: string }>;
  result: string;
};

export type ChatMessage = {
  from: "client" | "jr";
  time: string;
  text: string;
};

export type ServicePage = {
  slug: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  intro: string;
  hubSummary: string;
  heroImage: string;
  heroAlt: string;
  heroObjectPosition: PhotoHeroPos;
  compare: CompareBlock;
  includes?: IncludeItem[];
  includesTitle?: string;
  includesLead?: string;
  outcomes?: OutcomeItem[];
  proof?: ProofVisual;
  processSteps?: ProcessStep[];
  processTitle?: string;
  processLead?: string;
  frameworks?: FrameworkItem[];
  frameworksTitle?: string;
  frameworksLead?: string;
  structure?: StructureDiagram;
  structureTitle?: string;
  structureLead?: string;
  flowSteps?: string[];
  flowTitle?: string;
  flowLead?: string;
  flowNote?: string;
  chatMock?: ChatMessage[];
  chatTitle?: string;
  chatLead?: string;
  chatBar?: string;
  coverItems?: IncludeItem[];
  coverTitle?: string;
  coverLead?: string;
  monitorItems?: string[];
  monitorTitle?: string;
  monitorLead?: string;
  /** Quando false, omite o CTA final (ex.: página enxuta igual ao protótipo). */
  showFinalCta?: boolean;
};

export const services: ServicePage[] = [
  {
    slug: "infraestrutura",
    shortTitle: "Infraestrutura e Cloud",
    metaTitle: "Infraestrutura e Cloud para empresas em São Paulo | JR Tech",
    metaDescription:
      "Ambientes estáveis, monitorados e preparados para crescer. Trabalhamos com Linux, Docker e provedores cloud conforme a necessidade real do negócio.",
    kicker: "Solução · Infraestrutura",
    title: "Infraestrutura e Cloud para empresas em São Paulo",
    intro:
      "Ambientes estáveis, monitorados e preparados para crescer. Trabalhamos com Linux, Docker e provedores cloud conforme a necessidade real do negócio.",
    hubSummary:
      "Ambientes estáveis e monitorados, com cloud alinhada ao uso real.",
    heroImage: "/hero-infraestrutura.jpg",
    heroAlt:
      "Especialista JR acompanhando migração de servidor para nuvem, com painéis de monitoramento Grafana",
    heroObjectPosition: "infraestrutura",
    showFinalCta: false,
    compare: {
      title: "Sem estrutura técnica ou com a JR? Veja o que muda de verdade",
      lead: "Não é só sobre cloud — é sobre como infraestrutura organizada muda o dia a dia da sua empresa.",
      before: {
        label: "Sem estrutura técnica",
        items: [
          "Sem documentação — tudo depende de uma pessoa só conhecer o ambiente de verdade.",
          "Você descobre o problema quando o sistema já parou, não antes.",
          "Backup configurado, mas nunca testado se a restauração funciona de verdade.",
          "Expansão exige comprar hardware com meses de antecedência.",
          "Hardware dimensionado pro pico de demanda fica ocioso o resto do tempo.",
        ],
      },
      after: {
        label: "Com a JR",
        items: [
          "Ambiente documentado e organizado — qualquer técnico consegue dar manutenção, não só quem construiu.",
          "Alertas antes do problema virar incidente — menos tempo de operação parada, menos vendas perdidas.",
          "Restauração testada e validada periodicamente — recuperação em horas se algo der errado, não a semanas.",
          "Recursos sob demanda, em minutos — sua empresa cresce sem apostar em previsão incerta.",
          "Você paga pela capacidade que usa — sobra orçamento pra investir no negócio, não em servidor parado.",
        ],
      },
    },
  },
  {
    slug: "seguranca",
    shortTitle: "Segurança da Informação",
    metaTitle:
      "Segurança como critério do projeto, não como serviço extra | JR Tech",
    metaDescription:
      "Boas práticas de segurança entram no planejamento desde o início — controle de acesso, proteção de dados e hardening antes que o problema apareça, não depois.",
    kicker: "Solução · Segurança",
    title: "Segurança como critério do projeto, não como serviço extra",
    intro:
      "Boas práticas de segurança entram no planejamento desde o início — controle de acesso, proteção de dados e hardening antes que o problema apareça, não depois.",
    hubSummary:
      "Proteção em camadas desde o planejamento, não depois do incidente.",
    heroImage: "/hero-seguranca.jpg",
    heroAlt:
      "Especialista JR monitorando alertas de segurança da informação em painel SIEM",
    heroObjectPosition: "seguranca",
    processTitle: "Como respondemos a um incidente",
    processLead:
      "Um processo estruturado, não improviso — cada etapa documentada do momento da detecção até a normalização do ambiente.",
    processSteps: [
      {
        title: "Identificação",
        description:
          "Ameaça detectada e classificada automaticamente pelos alertas do sistema de monitoramento.",
      },
      {
        title: "Investigação",
        description:
          "Análise da origem, do método e do impacto real do incidente antes de qualquer ação.",
      },
      {
        title: "Contenção",
        description:
          "IP ou acesso suspeito bloqueado e regras de segurança aplicadas imediatamente.",
      },
      {
        title: "Erradicação",
        description:
          "Remoção completa da ameaça e dos artefatos deixados no ambiente.",
      },
      {
        title: "Recuperação",
        description:
          "Sistema normalizado, monitorado e documentado após o incidente.",
      },
    ],
    includesTitle: "O que fazemos para melhorar a segurança da sua empresa",
    includesLead:
      "Não é um produto único — é um conjunto de práticas aplicadas de forma contínua.",
    includes: [
      {
        title: "Controle de acesso",
        description:
          "Políticas e permissões por perfil — cada pessoa vê e altera só o que precisa para o próprio trabalho, reduzindo o risco de erro ou uso indevido.",
      },
      {
        title: "Proteção de dados",
        description:
          "Criptografia e rotina de backup testada, não apenas configurada e esquecida — validamos periodicamente que a restauração funciona de verdade.",
      },
      {
        title: "Boas práticas e compliance",
        description:
          "Frameworks reconhecidos de segurança, adaptados ao porte real da empresa — não um checklist genérico de multinacional que não se aplica ao seu contexto.",
      },
      {
        title: "Hardening preventivo",
        description:
          "Redução da superfície de ataque antes do incidente acontecer, não como resposta emergencial depois que o problema já causou dano.",
      },
    ],
    compare: {
      title: "Sem cuidado com segurança ou com a JR? Veja o que muda",
      lead: "A diferença aparece antes do incidente acontecer — ou depois, quando já é tarde.",
      before: {
        label: "Sem cuidado com segurança",
        items: [
          "Sem controle de quem acessa o quê — qualquer pessoa vê qualquer sistema.",
          "Você descobre o incidente quando o dano já aconteceu.",
          "Backup e plano de recuperação nunca testados de verdade.",
          "Vulnerabilidades só corrigidas depois de já terem sido exploradas.",
        ],
      },
      after: {
        label: "Com a JR",
        items: [
          "Controle de acesso por perfil — cada pessoa vê e altera só o que precisa para o trabalho.",
          "Detecção em tempo real com alertas — resposta em minutos, não depois do estrago feito.",
          "Plano de resposta a incidente testado, documentado e pronto pra ser executado.",
          "Hardening preventivo reduz a superfície de ataque antes que alguém tente explorá-la.",
        ],
      },
    },
  },
  {
    slug: "desenvolvimento",
    shortTitle: "Desenvolvimento",
    metaTitle: "Sistemas e integrações sob medida | JR Tech",
    metaDescription:
      "Do diagnóstico ao acompanhamento — sistemas construídos para o processo real do seu negócio, com React, Node.js e automações que eliminam trabalho manual repetitivo.",
    kicker: "Solução · Desenvolvimento",
    title: "Sistemas e integrações sob medida",
    intro:
      "Do diagnóstico ao acompanhamento — sistemas construídos para o processo real do seu negócio, com React, Node.js e automações que eliminam trabalho manual repetitivo.",
    hubSummary:
      "Sistemas e integrações feitos para o processo real da empresa.",
    heroImage: "/hero-desenvolvimento.jpg",
    heroAlt:
      "Especialista JR desenvolvendo sistemas web, APIs e automações",
    heroObjectPosition: "desenvolvimento",
    proof: {
      kind: "marquee",
      title: "O que já construímos",
      lead: "Projetos reais, no ar, atendendo clientes de verdade.",
      items: [
        {
          src: "/projeto-fatia-de-lei.png",
          alt: "Captura da página inicial do e-commerce Fatia de Lei",
          url: "fatiadelei.com.br",
          title: "Fatia de Lei",
          description:
            "E-commerce completo com catálogo, painel administrativo para gestão de receitas e estoque, e pagamento integrado.",
        },
        {
          src: "/projeto-adega-do-kinho.png",
          alt: "Captura da página inicial do e-commerce Adega do Kinho",
          url: "adegadokinho.com.br",
          title: "Adega do Kinho",
          description:
            "E-commerce de bebidas com catálogo de produtos, sistema de combos e carrinho de compras.",
        },
        {
          src: "/grafana-thumbnail.jpg",
          alt: "Painel Grafana de monitoramento interno da JR",
          url: "monitoramento interno",
          title: "Ambiente de monitoramento",
          description:
            "Grafana + Prometheus — métricas de CPU, memória, disco e rede em tempo real.",
        },
      ],
    },
    includesTitle: "O que inclui",
    includesLead:
      "Cada projeto usa o que faz sentido pro seu caso — não empacotamos tudo por padrão.",
    includes: [
      {
        title: "Aplicações web",
        description:
          "Sistemas sob medida construídos com React/Next.js no frontend e Node.js no backend — do zero ou evoluindo o que já existe.",
        stack: ["React", "Next.js", "Node.js"],
      },
      {
        title: "APIs e integrações",
        description:
          "Conectando sistemas que hoje não conversam entre si — pagamentos (Mercado Pago), comunicação (WhatsApp via n8n) e outros serviços externos.",
        stack: ["REST APIs", "n8n", "WhatsApp", "Mercado Pago"],
      },
      {
        title: "Banco de dados",
        description:
          "Modelagem pensada para o volume e uso real da operação, não só para funcionar no primeiro teste.",
        stack: ["PostgreSQL"],
      },
      {
        title: "Automação de processos",
        description:
          "Fluxos que hoje exigem alguém copiando dados de um sistema pro outro viram automáticos — pedido, estoque, financeiro e notificação em sequência.",
        stack: ["n8n", "Workflows"],
      },
      {
        title: "Infraestrutura para produção",
        description:
          "Deploy em cloud (AWS ou servidores próprios), com o ambiente monitorado desde o primeiro dia — não só quando algo já deu errado.",
        stack: ["AWS", "Hetzner", "Docker"],
      },
    ],
    compare: {
      title: "Processo manual ou sistema sob medida? Veja o que muda",
      lead: "A diferença aparece no tempo que sobra pra tocar o negócio, não pra operar planilha.",
      before: {
        label: "Processo manual",
        items: [
          "Processo rodando em planilha, WhatsApp pessoal e anotação manual espalhada.",
          "Alguém copiando dado de um sistema pro outro à mão, todo dia.",
          "Sistema genérico comprado pronto, que não encaixa no seu processo real.",
          "Pagamento e comunicação com cliente resolvidos manualmente, um por um.",
        ],
      },
      after: {
        label: "Com a JR",
        items: [
          "Sistema único, sob medida, que organiza pedido, estoque e financeiro num só lugar.",
          "Automação (n8n) faz a ponte entre sistemas — sem cópia manual de dado.",
          "Construído em cima do seu processo real, não adaptado à força a um template.",
          "Pagamento (Mercado Pago) e notificação (WhatsApp) integrados e automáticos.",
        ],
      },
    },
  },
  {
    slug: "governanca",
    shortTitle: "Governança de Tecnologia",
    metaTitle:
      "Governança de TI é a base para segurança, eficiência e crescimento | JR Tech",
    metaDescription:
      "Processos, pessoas e tecnologia organizados de forma que a empresa não dependa de uma pessoa só saber como tudo funciona.",
    kicker: "Solução · Governança",
    title: "Governança de TI é a base para segurança, eficiência e crescimento",
    intro:
      "Processos, pessoas e tecnologia organizados de forma que a empresa não dependa de uma pessoa só saber como tudo funciona.",
    hubSummary:
      "Documentação e processos que sobrevivem à troca de equipe.",
    heroImage: "/hero-governanca.jpg",
    heroAlt:
      "Especialista JR analisando painel de governança de TI, riscos e conformidade",
    heroObjectPosition: "governanca",
    processTitle: "Como trabalhamos",
    processLead:
      "Cinco etapas, nesta ordem — não pulamos o diagnóstico pra já sair implementando.",
    processSteps: [
      {
        title: "Mapear processos",
        description:
          "Levantamento completo do que existe hoje — sistemas, acessos e responsáveis — antes de qualquer mudança.",
      },
      {
        title: "Revisar políticas",
        description:
          "Atualização de políticas de segurança, controle de acesso, backup e uso de recursos.",
      },
      {
        title: "Avaliar riscos",
        description:
          "Identificação e classificação de riscos por impacto e probabilidade, com prioridades claras.",
      },
      {
        title: "Garantir conformidade",
        description:
          "Alinhamento com frameworks reconhecidos — ISO 27001, LGPD — não um checklist decorativo.",
      },
      {
        title: "Melhorar continuamente",
        description:
          "Revisão periódica documentada — governança não é um projeto que termina e é esquecido.",
      },
    ],
    frameworksTitle: "Frameworks que aplicamos",
    frameworksLead:
      "Não inventamos processo do zero — usamos referências reconhecidas, adaptadas ao porte real da sua empresa.",
    frameworks: [
      {
        name: "ISO 27001",
        tag: "Segurança da informação",
        description:
          "Padrão internacional de gestão de segurança da informação — controles reconhecidos globalmente.",
      },
      {
        name: "LGPD",
        tag: "Proteção de dados",
        description:
          "Conformidade com a lei brasileira de proteção de dados pessoais.",
      },
      {
        name: "ITIL",
        tag: "Gestão de serviços de TI",
        description:
          "Boas práticas para operação, suporte e melhoria contínua de serviços de TI.",
      },
      {
        name: "COBIT",
        tag: "Governança de TI",
        description:
          "Alinhamento entre decisões de tecnologia e objetivos reais do negócio.",
      },
      {
        name: "PMBOK",
        tag: "Gestão de projetos",
        description:
          "Metodologia para planejamento e execução de projetos de tecnologia.",
      },
    ],
    structureTitle: "Estrutura de governança que implementamos",
    structureLead:
      "Estratégia, processos e tecnologia conectados — não decisões isoladas.",
    structure: {
      top: "Comitê de TI",
      middle: [
        { title: "Estratégia", sub: "Alinhamento de negócio" },
        { title: "Processos", sub: "Gestão e controle" },
        { title: "Tecnologia", sub: "Infraestrutura e sistemas" },
      ],
      result: "Resultados — Segurança · Eficiência · Conformidade",
    },
    compare: {
      title: "Sem governança ou com a JR? Veja o que muda",
      lead: "A diferença aparece antes da auditoria, não durante ela.",
      before: {
        label: "Sem governança",
        items: [
          "Decisões de TI dependem da memória de uma pessoa, sem registro.",
          "Conformidade descoberta que está faltando só na hora da auditoria.",
          "Riscos não mapeados — ninguém sabe a real exposição da empresa.",
          "Tecnologia decidida isoladamente, sem ligação com a estratégia do negócio.",
        ],
      },
      after: {
        label: "Com a JR",
        items: [
          "Processos documentados e alinhados a frameworks reconhecidos (ISO 27001, ITIL).",
          "Conformidade acompanhada continuamente — auditoria não traz surpresa.",
          "Matriz de riscos mantida atualizada, com prioridades claras de ação.",
          "Estrutura de governança conecta estratégia, processos e tecnologia.",
        ],
      },
    },
  },
  {
    slug: "suporte-gestao-ti",
    shortTitle: "Suporte e Gestão de TI",
    metaTitle: "Sua tecnologia funcionando sem improvisos | JR Tech",
    metaDescription:
      "Tecnologia que mantém seu negócio sempre online — suporte com quem já conhece seu ambiente, não um protocolo genérico de central de atendimento.",
    kicker: "Solução · Suporte",
    title: "Sua tecnologia funcionando sem improvisos",
    intro:
      "Tecnologia que mantém seu negócio sempre online — suporte com quem já conhece seu ambiente, não um protocolo genérico de central de atendimento.",
    hubSummary:
      "Acompanhamento contínuo com quem já conhece seu ambiente.",
    heroImage: "/hero-suporte.jpg",
    heroAlt: "Especialista JR atendendo chamado de suporte técnico",
    heroObjectPosition: "suporte",
    flowTitle: "Como funciona um chamado",
    flowLead:
      "Cada chamado segue o mesmo fluxo, com prazo definido por prioridade — não uma fila genérica onde tudo espera igual.",
    flowNote:
      "Chamados críticos têm resposta em até 2 horas. Você acompanha o status em tempo real, sem precisar ficar cobrando por atualização.",
    flowSteps: [
      "Chamado aberto",
      "Classificado por prioridade",
      "Em atendimento",
      "Resolvido",
    ],
    chatTitle: "Um atendimento real, sem enrolação",
    chatLead: "Direto com quem resolve — sem escalonamento por níveis de atendimento.",
    chatBar: "Suporte JR · online",
    chatMock: [
      {
        from: "client",
        time: "10:24",
        text: "Olá, meu sistema não está acessando o banco de dados, pode me ajudar?",
      },
      {
        from: "jr",
        time: "10:27",
        text: "Olá! Vou verificar aqui. Já identifiquei o problema e estou aplicando a correção. Em alguns minutos já estará funcionando.",
      },
      {
        from: "client",
        time: "10:28",
        text: "Perfeito, obrigado!",
      },
    ],
    coverTitle: "O que cobrimos",
    coverLead:
      "Suporte não é só “consertar quando quebra” — é gestão contínua de cinco frentes.",
    coverItems: [
      {
        title: "Infraestrutura",
        description:
          "Servidores, redes e ambientes cloud monitorados continuamente — não só quando algo já parou.",
      },
      {
        title: "Segurança",
        description:
          "Firewall, backup e proteção contra ameaças (EDR) fazendo parte da rotina, não uma ação isolada.",
      },
      {
        title: "Usuários",
        description:
          "Gestão de acessos e permissões organizada — sem depender de planilha solta ou memória de alguém.",
      },
      {
        title: "Sistemas",
        description:
          "Aplicações e plataformas que a empresa usa no dia a dia, com suporte de quem já conhece o ambiente.",
      },
      {
        title: "Projetos",
        description:
          "Implantação de novos sistemas com acompanhamento durante toda a transição, não só na entrega.",
      },
    ],
    monitorTitle: "Monitoramento contínuo",
    monitorLead:
      "Serviços críticos observados em tempo real — se algo cair, a gente sabe antes do seu cliente perceber.",
    monitorItems: [
      "Web Server",
      "API",
      "Banco de Dados",
      "Automação (n8n)",
      "Monitoramento (Grafana)",
      "Uptime Kuma",
    ],
    compare: {
      title: "Suporte reativo ou com a JR? Veja o que muda",
      lead: "A diferença aparece no dia em que algo dá errado — ou antes disso.",
      before: {
        label: "Suporte reativo",
        items: [
          "Chamado aberto num grupo de WhatsApp, sem prioridade nem prazo definido.",
          "Cada atendimento parte do zero, com alguém que não conhece seu ambiente.",
          "Você descobre que o backup falhou quando precisa restaurar algo.",
          "Suporte reativo — só aparece quando o cliente reclama.",
        ],
      },
      after: {
        label: "Com a JR",
        items: [
          "Chamado classificado por prioridade, com tempo de resposta definido.",
          "Atendimento com quem já conhece sua infraestrutura, sistemas e histórico.",
          "Backups e serviços críticos monitorados continuamente, em tempo real.",
          "Acompanhamento contínuo — tarefas de manutenção rodando antes de virar problema.",
        ],
      },
    },
  },
];

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((service) => service.slug === slug);
}

export function getServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export const serviceWhatsAppMessage = encodeURIComponent(
  `Olá! Vim pelo site da ${site.name} e quero solicitar um diagnóstico.`,
);
