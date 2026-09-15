import type { Metadata } from "next";
import Link from "next/link";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { PhotoHero } from "@/components/solucoes/PhotoHero";
import { site } from "@/data/content";
import { serviceWhatsAppMessage } from "@/data/services";

export const metadata: Metadata = {
  title: "Tecnologia não precisa ser complicada. Precisa funcionar. | JR Tech",
  description:
    "A JR Technology Solutions ajuda empresas a estruturar, proteger, desenvolver e evoluir sua tecnologia, conectando infraestrutura, segurança, sistemas, automação e gestão de TI.",
  alternates: {
    canonical: "/sobre",
  },
  openGraph: {
    title:
      "Tecnologia não precisa ser complicada. Precisa funcionar. | JR Tech",
    description:
      "A JR Technology Solutions ajuda empresas a estruturar, proteger, desenvolver e evoluir sua tecnologia.",
    url: "https://www.jrtechnologysolutions.com.br/sobre/",
    locale: "pt_BR",
    type: "website",
  },
};

const journey = [
  {
    n: "01",
    title: "O anúncio",
    text: "Uma pastelaria procurava alguém pra estruturar a rede e conectar as impressoras ao sistema de pedidos.",
  },
  {
    n: "02",
    title: "A virada",
    text: "Aquele serviço específico não se concretizou, mas abriu os olhos para algo maior: um mercado real, mal atendido, bem diante de mim.",
  },
  {
    n: "03",
    title: "A decisão",
    text: "Com a experiência que eu já tinha em infraestrutura, ficou claro que dava pra ir além de rede e impressora. Segurança, desenvolvimento, suporte contínuo. Foi daí que nasceu a JR Technology Solutions.",
  },
] as const;

const principles = [
  {
    n: "01",
    title: "Entender antes de implementar",
    text: "Não começamos oferecendo tecnologia. Primeiro entendemos o problema.",
  },
  {
    n: "02",
    title: "Segurança desde o início",
    text: "Segurança não deve ser um remendo colocado depois.",
  },
  {
    n: "03",
    title: "Tecnologia precisa gerar resultado",
    text: "Uma solução tecnicamente excelente que não resolve o problema do negócio não é uma boa solução.",
  },
  {
    n: "04",
    title: "Tudo precisa ser sustentável",
    text: "Documentação, organização e processos são tão importantes quanto a tecnologia.",
  },
  {
    n: "05",
    title: "Transparência",
    text: "O cliente precisa entender o que está sendo feito, por que, e qual resultado esperar.",
  },
] as const;

const formacao = [
  { curso: "Técnico em Redes", inst: "SENAI" },
  { curso: "Ciência da Computação", inst: "UNIP" },
  { curso: "Pós-graduação em Segurança da Informação", inst: "SENAC" },
  { curso: "MBA em Gestão de Tecnologia da Informação", inst: "FIAP" },
] as const;

const stats = [
  { num: "+1 ano", desc: "de operação" },
  { num: "100%", desc: "atendimento direto" },
  { num: "0", desc: "terceirizações" },
  { num: "3", desc: "sistemas em produção" },
] as const;

const audience = [
  "Empresas de serviços",
  "Pequenas e médias empresas",
  "Negócios em crescimento",
  "Empresas com processos manuais",
  "Empresas sem uma estrutura interna de TI",
  "Empresas que precisam profissionalizar sua infraestrutura",
] as const;

export default function SobrePage() {
  const waHref = `https://wa.me/${site.whatsapp}?text=${serviceWhatsAppMessage}`;

  return (
    <div className="border-b border-border bg-paper">
      <PhotoHero
        kicker="Sobre"
        title="Tecnologia não precisa ser complicada. Precisa funcionar."
        intro="A JR Technology Solutions ajuda empresas a estruturar, proteger, desenvolver e evoluir sua tecnologia, conectando infraestrutura, segurança, sistemas, automação e gestão de TI."
        imageSrc="/hero-sobre.jpg"
        imageAlt="Fundador da JR Technology Solutions em ambiente de escritório"
        objectPosition="sobre"
        overlayVariant="sobre"
        showCtas={false}
      />

      <section className="border-b border-border py-14 md:py-16">
        <div className="site-container">
          <h2 className="mb-8 font-subheading text-lg font-semibold text-ink">
            Como começou
          </h2>
          <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {journey.map((item) => (
              <li key={item.n}>
                <span className="mb-2 block font-mono text-[12px] text-signal">
                  {item.n}
                </span>
                <h3 className="mb-2 font-subheading text-[15.5px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-2">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-16">
        <div className="mx-auto max-w-[680px] px-6 md:px-8">
          <h2 className="mb-5 font-subheading text-lg font-semibold text-ink">
            Quem está por trás
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-2">
            <p>
              Quem atende você é quem executa. Não existe vendedor te passando
              pra um técnico depois.
            </p>
            <p>
              Além dos clientes da consultoria, também atuo como analista de
              infraestrutura em outra operação. Isso significa que o que eu
              recomendo pros meus clientes é testado na prática, no dia a dia de
              quem lida com ambiente de produção real, não só em teoria.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-16">
        <div className="site-container">
          <h2 className="mb-8 font-subheading text-lg font-semibold text-ink">
            Como pensamos
          </h2>
          <ol className="space-y-6">
            {principles.map((item) => (
              <li key={item.n} className="flex gap-4">
                <span className="mt-0.5 font-mono text-[12px] text-signal">
                  {item.n}
                </span>
                <div>
                  <h3 className="mb-1 font-subheading text-[15.5px] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-relaxed text-ink-2">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-16">
        <div className="site-container">
          <h2 className="mb-6 font-subheading text-lg font-semibold text-ink">
            Formação
          </h2>
          <ul className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {formacao.map((item) => (
              <li
                key={item.curso}
                className="rounded-md border border-border bg-white px-4 py-4"
              >
                <p className="font-subheading text-[14.5px] font-semibold text-ink">
                  {item.curso}
                </p>
                <p className="mt-1 font-mono text-[11px] text-dimension">
                  {item.inst}
                </p>
              </li>
            ))}
          </ul>
          <p className="max-w-[640px] text-[14px] leading-relaxed text-ink-2">
            Experiência profissional em infraestrutura, redes e suporte
            corporativo, com atuação também em segurança, sistemas e tecnologia
            aplicada aos negócios.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-ink py-12 md:py-14">
        <div className="site-container">
          <ul className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((item) => (
              <li key={item.desc}>
                <p className="font-heading text-[clamp(1.5rem,3vw,2rem)] font-bold text-paper">
                  {item.num}
                </p>
                <p className="mt-1 font-mono text-[11px] text-[#8E9DB0]">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-16">
        <div className="site-container">
          <h2 className="mb-2 font-subheading text-lg font-semibold text-ink">
            Para quem fazemos
          </h2>
          <p className="mb-6 max-w-[520px] text-[14.5px] text-ink-2">
            Empresas que precisam organizar sua tecnologia para crescer.
          </p>
          <ul className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {audience.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-white px-4 py-3 text-[14px] text-ink-2"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="max-w-[560px] text-[14px] leading-relaxed text-ink-2">
            Se a tecnologia da sua empresa cresceu sem planejamento, nós podemos
            ajudar a colocar essa estrutura no lugar.
          </p>
        </div>
      </section>

      <section className="border-b border-border py-12 md:py-14">
        <div className="site-container">
          <p className="mb-4 max-w-[520px] text-[14.5px] leading-relaxed text-ink-2">
            Quer ver isso funcionando na prática? Temos sistemas reais em
            produção, atendendo clientes de verdade.
          </p>
          <Link
            href="/projetos"
            className="inline-flex font-mono text-[13px] text-ink underline-offset-2 transition-colors hover:text-signal hover:underline"
          >
            Ver projetos →
          </Link>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="site-container">
          <div className="rounded-md border border-border bg-white p-6 md:p-8">
            <h2 className="mb-2 font-heading text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold text-ink">
              Sua empresa não precisa de mais tecnologia.
            </h2>
            <p className="mb-6 max-w-[560px] text-[14.5px] leading-relaxed text-ink-2">
              Precisa da tecnologia certa. Vamos entender onde sua empresa está,
              identificar o que precisa ser melhorado e construir o próximo
              passo.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/#contato"
                className="btn-ruler inline-flex min-h-11 items-center justify-center bg-ink px-6 text-[14px] font-medium text-paper transition-colors hover:bg-ink/90"
              >
                Falar com a JR Tech
              </Link>
              <TrackedWhatsAppLink
                href={waHref}
                location="sobre_cta"
                className="inline-flex min-h-11 items-center justify-center px-2 text-[14px] text-ink-2 underline-offset-2 transition-colors hover:text-ink hover:underline"
              >
                Falar no WhatsApp
              </TrackedWhatsAppLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
