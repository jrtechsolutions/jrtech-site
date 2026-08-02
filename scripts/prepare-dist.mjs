import { cpSync, existsSync, rmSync, renameSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");
const distDir = join(root, "dist");
const apiDir = join(root, "api");

if (!existsSync(outDir)) {
  console.error("Pasta out/ não encontrada. Rode `next build` antes.");
  process.exit(1);
}

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

renameSync(outDir, distDir);
cpSync(apiDir, join(distDir, "api"), { recursive: true });

console.log("dist/ pronta para upload no Plesk (site estático + api/).");
