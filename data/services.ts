import { site } from "@/data/content";

export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  intro: string;
  paragraphs: string[];
  includes: string[];
  outcomes: string[];
};

export const services: ServicePage[] = [
  {
    slug: "infraestrutura",
    title: "Infraestrutura e Cloud para empresas em São Paulo",
    shortTitle: "Infraestrutura e Cloud",
    metaTitle: "Infraestrutura de TI e Cloud para PME em São Paulo",
    metaDescription:
      "Organização de servidores, redes, cloud (AWS/Azure/GCP), monitoramento e backups para pequenas e médias empresas em São Paulo.",
    kicker: "Solução · Infraestrutura",
    intro:
      "Ambientes estáveis, monitorados e preparados para crescer — sem improvisos que viram custo e risco depois.",
    paragraphs: [
      "A JR Technology Solutions organiza a infraestrutura de TI de pequenas e médias empresas em São Paulo: servidores, redes, ambientes cloud e rotinas de backup. O ponto de partida é um diagnóstico do que já existe — na maioria dos casos o caminho é ajustar e documentar, não trocar tudo.",
      "Trabalhamos com Linux, Docker e provedores cloud (AWS, Azure ou GCP) conforme a necessidade real do negócio. Monitoramento com métricas e alertas entra no desenho para você saber o que está acontecendo antes que vire incidente.",
    ],
    includes: [
      "Servidores e ambientes de produção",
      "Redes e segmentação",
      "Cloud (AWS / Azure / GCP)",
      "Monitoramento e alertas",
      "Backups e restauração testada",
    ],
    outcomes: [
      "Menos indisponibilidade e surpresas",
      "Ambiente documentado e reproduzível",
      "Custo de infraestrutura alinhado ao uso real",
    ],
  },
  {
    slug: "seguranca",
    title: "Segurança da informação para PME em São Paulo",
    shortTitle: "Segurança da Informação",
    metaTitle: "Segurança da informação para empresas em São Paulo",
    metaDescription:
      "Controle de acesso, proteção de dados, hardening e boas práticas de segurança da informação para pequenas e médias empresas.",
    kicker: "Solução · Segurança",
    intro:
      "Segurança como critério do projeto — não como serviço extra depois que o problema aparece.",
    paragraphs: [
      "Ajudamos empresas em São Paulo a reduzir riscos digitais com controle de acesso, proteção de dados e hardening do ambiente. Em vez de um pacote genérico, o diagnóstico mostra onde estão as falhas mais relevantes para o seu tamanho e operação.",
      "Boas práticas entram no planejamento de infraestrutura e desenvolvimento. Assim a segurança acompanha o crescimento da empresa, sem depender só de ferramentas pontuais.",
    ],
    includes: [
      "Controle de acesso e permissões",
      "Proteção de dados e backups seguros",
      "Hardening de servidores e serviços",
      "Boas práticas e orientação contínua",
    ],
    outcomes: [
      "Menos superfície de ataque",
      "Acesso organizado por função",
      "Rotinas preventivas em vez de remendo",
    ],
  },
  {
    slug: "desenvolvimento",
    title: "Desenvolvimento de sistemas sob medida em São Paulo",
    shortTitle: "Desenvolvimento",
    metaTitle: "Desenvolvimento de sistemas sob medida — São Paulo",
    metaDescription:
      "Sites, sistemas web, e-commerce, APIs e integrações sob medida para empresas que precisam de soluções digitais alinhadas ao negócio.",
    kicker: "Solução · Desenvolvimento",
    intro:
      "Sistemas e integrações feitos sob medida — do diagnóstico ao acompanhamento.",
    paragraphs: [
      "Desenvolvemos sites, sistemas web, e-commerce, APIs e integrações para empresas em São Paulo e região. O projeto começa entendendo o processo atual: o que é manual, o que trava e o que precisa conversar com outros sistemas.",
      "Exemplos do que já entregamos incluem e-commerce completo com painel administrativo e pagamento via API, além de integrações entre ambientes. Código e infraestrutura caminham juntos quando o projeto exige.",
    ],
    includes: [
      "Sites e aplicações web",
      "Sistemas sob medida",
      "E-commerce e painéis administrativos",
      "APIs e integrações",
      "Automações de processo",
    ],
    outcomes: [
      "Menos trabalho manual repetitivo",
      "Fluxos alinhados ao jeito da empresa",
      "Base técnica preparada para evoluir",
    ],
  },
  {
    slug: "governanca",
    title: "Governança de tecnologia para empresas em São Paulo",
    shortTitle: "Governança de Tecnologia",
    metaTitle: "Governança de TI e processos para PME em São Paulo",
    metaDescription:
      "Documentação, processos e planejamento de tecnologia para empresas que precisam de previsibilidade sem burocracia inútil.",
    kicker: "Solução · Governança",
    intro:
      "Tecnologia organizada para crescer — com documentação e processos que alguém consegue seguir.",
    paragraphs: [
      "Governança de TI para PME em São Paulo significa sair da dependência de “só uma pessoa sabe como funciona”. Documentamos ambientes, definimos processos e planejamos melhorias com prioridade clara.",
      "O objetivo não é burocracia: é previsibilidade. Quando a operação muda de mão ou a empresa cresce, a tecnologia continua entendível e gerenciável.",
    ],
    includes: [
      "Documentação de ambiente e acessos",
      "Processos de mudança e suporte",
      "Planejamento de melhorias",
      "Gestão contínua da tecnologia",
    ],
    outcomes: [
      "Menos dependência de pessoas específicas",
      "Decisões com base no que está documentado",
      "Prioridades claras para o próximo ciclo",
    ],
  },
  {
    slug: "suporte-gestao-ti",
    title: "Suporte e gestão de TI para PME em São Paulo",
    shortTitle: "Suporte e Gestão de TI",
    metaTitle: "Suporte e gestão de TI para empresas em São Paulo",
    metaDescription:
      "Manutenção, acompanhamento e melhorias contínuas na tecnologia da sua empresa — atendimento direto com quem executa.",
    kicker: "Solução · Suporte",
    intro:
      "Sua tecnologia funcionando sem improvisos — com acompanhamento contínuo.",
    paragraphs: [
      "Oferecemos suporte e gestão de TI para pequenas e médias empresas em São Paulo: manutenção, acompanhamento e melhorias no dia a dia. Você fala diretamente com o responsável técnico — sem fila de “abrir chamado e esperar repasse”.",
      "O acompanhamento evita que pequenos problemas virem parada. Quando algo precisa de projeto maior, o diagnóstico já está feito e o caminho fica mais claro.",
    ],
    includes: [
      "Suporte técnico contínuo",
      "Manutenção preventiva",
      "Acompanhamento do ambiente",
      "Melhorias priorizadas",
    ],
    outcomes: [
      "Resposta direta com quem resolve",
      "Menos apagar incêndio",
      "Evolução contínua do ambiente",
    ],
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
