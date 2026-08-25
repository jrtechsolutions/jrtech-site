import type { MetadataRoute } from "next";
import { site } from "@/data/content";

const BASE = site.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${BASE}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/politica-de-privacidade/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
