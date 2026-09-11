import { cpSync, existsSync, rmSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");
const apiDir = join(root, "api");

const SITE_URL = "https://www.jrtechnologysolutions.com.br";

const SERVICE_SLUGS = [
  "infraestrutura",
  "seguranca",
  "desenvolvimento",
  "governanca",
  "suporte-gestao-ti",
];

if (!existsSync(outDir)) {
  console.error("Pasta out/ não encontrada. Rode `next build` antes.");
  process.exit(1);
}

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

renameSync(outDir, distDir);
cpSync(apiDir, join(distDir, "api"), { recursive: true });

const today = new Date().toISOString().split("T")[0];

const serviceUrls = SERVICE_SLUGS.map(
  (slug) => `  <url>
    <loc>${SITE_URL}/solucoes/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
).join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
${serviceUrls}
  <url>
    <loc>${SITE_URL}/politica-de-privacidade/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

writeFileSync(join(distDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(join(distDir, "robots.txt"), robots, "utf8");

console.log("dist/ pronta para upload no Plesk (site estático + api/).");
console.log("  ✓ sitemap.xml");
console.log("  ✓ robots.txt");
