import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O que já construímos | JR Tech",
  description:
    "Projetos reais, no ar, atendendo clientes de verdade — não conceito, não mockup.",
  alternates: {
    canonical: "/projetos",
  },
  openGraph: {
    title: "O que já construímos | JR Tech",
    description:
      "Projetos reais, no ar, atendendo clientes de verdade — não conceito, não mockup.",
    url: "https://www.jrtechnologysolutions.com.br/projetos/",
    locale: "pt_BR",
    type: "website",
  },
};

const projects = [
  {
    name: "Fatia de Lei",
    category: "E-commerce",
    subtitle: "E-commerce para confeitaria com identidade própria",
    url: "https://www.fatiadelei.com.br",
    urlLabel: "fatiadelei.com.br",
    image: "/projeto-fatia-de-lei.png",
    imageAlt: "Captura da página inicial do e-commerce Fatia de Lei",
    context:
      "A Fatia de Lei é uma confeitaria com um conceito específico — fatias de bolo e torta com nomes inspirados no universo jurídico, criada por uma advogada que uniu as duas paixões. Antes do sistema, a venda dependia de pedido manual, sem um canal profissional que desse conta do volume e passasse a identidade da marca.",
    built:
      "E-commerce completo com catálogo de produtos, sistema de pedidos com prazo definido (janela semanal de encomendas), e pagamento integrado via InfinityPay — do clique em “comprar” até a confirmação, sem intervenção manual.",
    result:
      "Pedido deixou de depender de mensagem trocada por WhatsApp e virou processo automatizado, com checkout e confirmação de pagamento instantâneos — menos erro de anotação, mais tempo pra confeitaria focar na produção.",
  },
  {
    name: "Adega do Kinho",
    category: "E-commerce + PDV",
    subtitle: "Loja de bebidas com venda online, presencial e estoque unificados",
    url: "https://www.adegadokinho.com.br",
    urlLabel: "adegadokinho.com.br",
    image: "/projeto-adega-do-kinho.png",
    imageAlt: "Captura da página inicial do e-commerce Adega do Kinho",
    context:
      "Uma adega/loja de bebidas e narguilé que vende tanto online quanto no balcão físico — o risco real aqui é estoque desincronizado: vender algo no PDV que já tinha sido vendido no site (ou vice-versa), gerando promessa que não pode ser cumprida.",
    built:
      "Sistema único cobrindo três frentes — catálogo e checkout online (com combos promocionais), PDV para venda presencial, e controle de estoque compartilhado entre os dois canais. Uma venda em qualquer um dos dois atualiza a disponibilidade no outro, em tempo real.",
    result:
      "Fim da divergência entre “o que o sistema diz que tem” e “o que realmente tem na loja” — o dono vende com confiança em qualquer canal, sem checar estoque em dois lugares diferentes.",
  },
  {
    name: "Pratoo",
    category: "SaaS",
    subtitle: "Plataforma de gestão para empresas de buffet e eventos",
    url: "https://www.pratooapp.com.br",
    urlLabel: "pratooapp.com.br",
    image: "/projeto-pratoo.png",
    imageAlt: "Captura da página pública de apresentação do Pratoo",
    context:
      "Empresas de buffet lidam com uma operação com muitas frentes ao mesmo tempo — cardápio, estoque, produção do evento, vendas, financeiro — normalmente espalhadas em planilhas separadas ou sistemas que não conversam entre si.",
    built:
      "SaaS multi-tenant (atende várias empresas de buffet na mesma plataforma, cada uma com seus dados isolados) com módulos de Usuários, Estoque, Cardápios, Vendas, Clientes, Produção de Buffet (PCP), Financeiro e Compras — tudo integrado. Estrutura modular: cada cliente escolhe e paga só pelos módulos que usa.",
    result:
      "Em uso real por uma operação de buffet de grande porte, com dados financeiros, agenda de eventos e informações de clientes rodando na plataforma no dia a dia — não é um projeto piloto, é ferramenta de trabalho.",
    observation:
      "A captura mostra a página pública de apresentação do produto — o painel interno não é exibido aqui por conter dados reais de clientes.",
  },
] as const;

export default function ProjetosPage() {
  return (
    <div className="border-b border-border bg-paper">
      <section className="border-b border-border">
        <div className="site-container py-14 md:py-16">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.07em] text-signal">
            Projetos
          </span>
          <h1 className="mb-5 max-w-[640px] font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.16] text-ink">
            O que já construímos
          </h1>
          <p className="max-w-[520px] text-[15.5px] leading-relaxed text-ink-2">
            Projetos reais, no ar, atendendo clientes de verdade — não conceito,
            não mockup.
          </p>
        </div>
      </section>

      {projects.map((project, index) => (
        <section
          key={project.name}
          className={
            index < projects.length - 1
              ? "border-b border-border py-14 md:py-16"
              : "py-14 md:py-16"
          }
        >
          <div className="site-container">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:items-start">
              <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-border bg-[#F4F7F9] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E3E9EE]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E3E9EE]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E3E9EE]" />
                  <span className="ml-2 truncate font-mono text-[10px] text-dimension">
                    {project.urlLabel}
                  </span>
                </div>
                <div className="bg-white">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    width={1600}
                    height={1000}
                    className="h-auto w-full"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    priority={index === 0}
                  />
                </div>
              </div>

              <div>
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.06em] text-signal">
                  {project.category}
                </span>
                <h2 className="mb-1 font-heading text-[clamp(1.4rem,2.5vw,1.85rem)] font-bold text-ink">
                  {project.name}
                </h2>
                <p className="mb-6 text-[14.5px] text-ink-2">{project.subtitle}</p>

                <div className="space-y-5">
                  <Block title="O contexto" text={project.context} />
                  <Block title="O que foi construído" text={project.built} />
                  <Block title="Resultado" text={project.result} />
                  {"observation" in project && project.observation ? (
                    <p className="text-[13px] leading-relaxed text-dimension">
                      {project.observation}
                    </p>
                  ) : null}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center font-mono text-[13px] text-ink underline-offset-2 transition-colors hover:text-signal hover:underline"
                >
                  ↗ {project.urlLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-border py-12 md:py-14">
        <div className="site-container">
          <p className="mb-4 text-[14.5px] text-ink-2">
            Quer algo parecido para a sua empresa?
          </p>
          <Link
            href="/#contato"
            className="btn-ruler inline-flex min-h-11 items-center bg-ink px-6 text-[14px] font-medium text-paper transition-colors hover:bg-ink/90"
          >
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </div>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <h3 className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.06em] text-dimension">
        {title}
      </h3>
      <p className="text-[14px] leading-relaxed text-ink-2">{text}</p>
    </div>
  );
}
