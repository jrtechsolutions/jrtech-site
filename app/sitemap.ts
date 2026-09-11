import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.jrtechnologysolutions.com.br";
  const lastModified = new Date();

  const serviceEntries: MetadataRoute.Sitemap = getServiceSlugs().map(
    (slug) => ({
      url: `${baseUrl}/solucoes/${slug}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
    {
      url: `${baseUrl}/politica-de-privacidade/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
