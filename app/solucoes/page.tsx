import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Soluções de TI para PME em São Paulo",
  description:
    "Infraestrutura, segurança da informação, desenvolvimento, governança e suporte de TI para pequenas e médias empresas em São Paulo.",
  alternates: {
    canonical: "/solucoes",
  },
  openGraph: {
    title: "Soluções de TI para PME em São Paulo",
    description:
      "Infraestrutura, segurança, desenvolvimento, governança e suporte — consultoria técnica JR Technology Solutions.",
    url: "https://www.jrtechnologysolutions.com.br/solucoes/",
    locale: "pt_BR",
    type: "website",
  },
};

export default function SolucoesIndexPage() {
  return (
    <div className="border-b border-border bg-paper">
      <div className="mx-auto max-w-[800px] px-6 py-14 md:px-8 md:py-16">
        <Link
          href="/"
          className="mb-8 inline-block font-mono text-[11px] text-dimension transition-colors hover:text-ink"
        >
          ← Voltar ao início
        </Link>

        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.07em] text-signal">
          Soluções
        </span>

        <h1 className="mb-5 font-heading text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-[1.18] text-ink">
          Soluções de TI para empresas em São Paulo
        </h1>

        <p className="mb-10 max-w-[560px] text-[15px] leading-relaxed text-ink-2">
          A {site.name} atua em cinco pilares. Escolha o que combina com o
          momento da sua empresa — cada página aprofunda o diagnóstico e o que
          entregamos.
        </p>

        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/solucoes/${service.slug}`}
                className="group block rounded-md border border-border bg-white p-5 transition-colors hover:border-ink/30"
              >
                <span className="mb-1 block font-mono text-[11px] text-signal">
                  {service.kicker}
                </span>
                <span className="mb-2 block font-subheading text-[16px] font-semibold text-ink group-hover:underline">
                  {service.shortTitle}
                </span>
                <span className="block text-[13.5px] leading-relaxed text-ink-2">
                  {service.intro}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 rounded-md border border-border bg-white p-6">
          <p className="mb-4 text-[14px] leading-relaxed text-ink-2">
            Prefere começar pelo diagnóstico geral? Volte à home e fale
            direto conosco.
          </p>
          <Link
            href="/#contato"
            className="btn-ruler inline-flex min-h-11 items-center bg-ink px-6 text-[14px] font-medium text-paper transition-colors hover:bg-ink/90"
          >
            Solicitar diagnóstico
          </Link>
        </div>
      </div>
    </div>
  );
}
