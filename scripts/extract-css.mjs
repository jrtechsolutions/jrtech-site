import fs from "fs";

const html = fs.readFileSync(
  "c:/Users/paulo.junior/Downloads/infra-v9.html",
  "utf8",
);
const m = html.match(/<style>([\s\S]*?)<\/style>/);
if (!m) {
  console.log("no style");
  process.exit(1);
}
fs.writeFileSync(
  "c:/Projetos/jrtech-sitenovo/_ref-stripped/infra-styles.css",
  m[1],
);
console.log("wrote", m[1].length, "chars");
