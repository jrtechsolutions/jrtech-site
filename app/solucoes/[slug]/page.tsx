import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageContent } from "@/components/solucoes/ServicePageContent";
import {
  getServiceBySlug,
  getServiceSlugs,
} from "@/data/services";
import { site } from "@/data/content";

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

export default function ServiceSlugPage({ params }: PageProps) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.shortTitle,
    serviceType: service.shortTitle,
    description: service.intro,
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      areaServed: { "@type": "City", name: "São Paulo" },
    },
    areaServed: { "@type": "City", name: "São Paulo" },
    url: `https://www.jrtechnologysolutions.com.br/solucoes/${service.slug}/`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicePageContent service={service} />
    </>
  );
}
