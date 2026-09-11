import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { site } from "@/data/content";
import {
  getServiceBySlug,
  getServiceSlugs,
  services,
  serviceWhatsAppMessage,
} from "@/data/services";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `/solucoes/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://www.jrtechnologysolutions.com.br/solucoes/${service.slug}/`,
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const waHref = `https://wa.me/${site.whatsapp}?text=${serviceWhatsAppMessage}`;
  const others = services.filter((item) => item.slug !== service.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    description: service.metaDescription,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      areaServed: {
        "@type": "City",
        name: "São Paulo",
      },
    },
    areaServed: {
      "@type": "City",
      name: "São Paulo",
    },
    url: `https://www.jrtechnologysolutions.com.br/solucoes/${service.slug}/`,
  };

  return (
    <div className="border-b border-border bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-[720px] px-6 py-14 md:px-8 md:py-16">
        <Link
          href="/#solucoes"
          className="mb-8 inline-block font-mono text-[11px] text-dimension transition-colors hover:text-ink"
        >
          ← Todas as soluções
        </Link>

        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.07em] text-signal">
          {service.kicker}
        </span>

        <h1 className="mb-5 font-heading text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-[1.18] text-ink">
          {service.title}
        </h1>

        <p className="mb-8 text-[15px] leading-relaxed text-ink-2">
          {service.intro}
        </p>

        <div className="mb-10 space-y-4 text-[15px] leading-relaxed text-ink-2">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <h2 className="mb-4 font-subheading text-lg font-semibold text-ink">
          O que inclui
        </h2>
        <ul className="mb-10 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-ink-2">
          {service.includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h2 className="mb-4 font-subheading text-lg font-semibold text-ink">
          Resultado esperado
        </h2>
        <ul className="mb-12 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-ink-2">
          {service.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="rounded-md border border-border bg-white p-6">
          <h2 className="mb-2 font-subheading text-base font-semibold text-ink">
            Quer um diagnóstico deste pilar?
          </h2>
          <p className="mb-5 text-[14px] leading-relaxed text-ink-2">
            Conversa de 30–40 minutos, presencial em São Paulo ou remota — sem
            custo e sem compromisso. Você fala direto com quem executa.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <TrackedWhatsAppLink
              href={waHref}
              location={`service_${service.slug}`}
              className="btn-ruler inline-flex min-h-11 items-center justify-center bg-ink px-6 text-[14px] font-medium text-paper transition-colors hover:bg-ink/90"
            >
              Falar no WhatsApp
            </TrackedWhatsAppLink>
            <Link
              href="/#contato"
              className="inline-flex min-h-11 items-center justify-center px-2 text-[14px] text-ink-2 underline-offset-2 transition-colors hover:text-ink hover:underline"
            >
              Ou enviar pelo formulário
            </Link>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <h2 className="mb-5 font-subheading text-base font-semibold text-ink">
            Outras soluções
          </h2>
          <ul className="flex flex-col gap-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/solucoes/${item.slug}`}
                  className="font-body text-[14.5px] text-ink-2 underline-offset-2 transition-colors hover:text-ink hover:underline"
                >
                  {item.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
