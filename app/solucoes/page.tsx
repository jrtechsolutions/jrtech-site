import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  Code2,
  Headset,
  Server,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Soluções de TI para empresas em São Paulo | JR Tech",
  description:
    "A JR Technology Solutions atua em cinco pilares. Escolha o que combina com o momento da sua empresa — cada página aprofunda o diagnóstico.",
  alternates: {
    canonical: "/solucoes",
  },
  openGraph: {
    title: "Soluções de TI para empresas em São Paulo | JR Tech",
    description:
      "A JR Technology Solutions atua em cinco pilares. Escolha o que combina com o momento da sua empresa — cada página aprofunda o diagnóstico.",
    url: "https://www.jrtechnologysolutions.com.br/solucoes/",
    locale: "pt_BR",
    type: "website",
  },
};

const TECH_ITEMS = [
  "Linux",
  "Docker",
  "AWS",
  "Azure",
  "GCP",
  "Grafana",
  "Prometheus",
  "PostgreSQL",
  "APIs REST",
  "Redes e Firewall",
  "CI/CD",
  "Backups automatizados",
];

const ICONS: Record<string, LucideIcon> = {
  infraestrutura: Server,
  seguranca: Shield,
  desenvolvimento: Code2,
  governanca: ClipboardList,
  "suporte-gestao-ti": Headset,
};

export default function SolucoesIndexPage() {
  const loop = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div className="border-b border-border bg-paper">
      <section className="border-b border-border">
        <div className="site-container py-14 md:py-16">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.07em] text-signal">
            Soluções
          </span>
          <h1 className="mb-5 max-w-[720px] font-heading text-[clamp(1.75rem,4vw,2.5rem)] font-bold leading-[1.16] text-ink">
            Soluções de TI para empresas em São Paulo
          </h1>
          <p className="max-w-[560px] text-[15.5px] leading-relaxed text-ink-2">
            A {site.name} atua em cinco pilares. Escolha o que combina com o
            momento da sua empresa — cada página aprofunda o diagnóstico e o que
            entregamos.
          </p>
        </div>
      </section>

      <section className="border-b border-border pb-12 pt-2 md:pb-14">
        <div className="site-container">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.05em] text-dimension">
            Tecnologias que usamos nessas soluções
          </p>
          <div className="relative overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-12 bg-gradient-to-r from-paper to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-12 bg-gradient-to-l from-paper to-transparent"
            />
            <div className="animate-tech-marquee flex w-max gap-3.5 hover:[animation-play-state:paused]">
              {loop.map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-white px-[18px] py-2.5"
                >
                  <span
                    className="h-[5px] w-[5px] shrink-0 rounded-full bg-signal"
                    aria-hidden="true"
                  />
                  <span className="font-subheading text-[13px] font-semibold text-ink">
                    {tech}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-14 md:py-16">
        <div className="site-container">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = ICONS[service.slug] ?? Server;
              return (
                <li key={service.slug}>
                  <Link
                    href={`/solucoes/${service.slug}`}
                    className="group flex h-full flex-col rounded-md border border-border bg-white p-6 transition-colors hover:border-ink/30"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-[#fff1e4] text-signal transition-colors group-hover:bg-ink group-hover:text-paper">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <span className="mb-2 block font-mono text-[11px] text-signal">
                      {service.kicker}
                    </span>
                    <h2 className="mb-2 font-subheading text-[17px] font-semibold text-ink">
                      {service.shortTitle}
                    </h2>
                    <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-ink-2">
                      {service.hubSummary}
                    </p>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-ink transition-transform group-hover:translate-x-0.5">
                      Ver solução
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="py-14 md:py-16">
        <div className="site-container">
          <div className="rounded-md border border-border bg-white p-6 md:p-8">
            <p className="mb-5 max-w-[520px] text-[14.5px] leading-relaxed text-ink-2">
              Prefere começar pelo diagnóstico geral? Volte à home e fale direto
              conosco.
            </p>
            <Link
              href="/#contato"
              className="btn-ruler inline-flex min-h-11 items-center bg-ink px-6 text-[14px] font-medium text-paper transition-colors hover:bg-ink/90"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
