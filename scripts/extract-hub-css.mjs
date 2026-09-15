import fs from "fs";

const html = fs.readFileSync(
  "c:/Users/paulo.junior/Downloads/hub-solucoes-v3.html",
  "utf8",
);
const m = html.match(/<style>([\s\S]*?)<\/style>/);
if (m) {
  const css = m[1];
  fs.writeFileSync(
    "c:/Projetos/jrtech-sitenovo/_ref-stripped/hub-styles.css",
    css,
  );
  const lines = css
    .split("\n")
    .filter((l) => /marquee|tech|pill|keyframes|cards-grid|sol-card/.test(l));
  console.log(lines.join("\n"));
}
