export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "JR Technology Solutions",
    image: "https://www.jrtechnologysolutions.com.br/logo-original.png",
    url: "https://www.jrtechnologysolutions.com.br",
    telephone: "+5511973802744",
    email: "contato@jrtechnologysolutions.com.br",
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "São Paulo",
    },
    description:
      "Consultoria e implementação de TI para pequenas e médias empresas — infraestrutura, segurança da informação, desenvolvimento e governança de tecnologia.",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Infraestrutura e Cloud" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Segurança da Informação",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Desenvolvimento de Sistemas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Governança de Tecnologia",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Suporte e Gestão de TI",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
