import fs from "fs";
import path from "path";

const dir = "c:/Users/paulo.junior/Downloads";
const out = "c:/Projetos/jrtech-sitenovo/public";

const jobs = [
  { file: "infra-v9.html", outName: "hero-infraestrutura.png" },
  { file: "seguranca-v1.html", outName: "hero-seguranca.png" },
  { file: "desenvolvimento-v1.html", outName: "hero-desenvolvimento.png" },
  { file: "governanca-v1.html", outName: "hero-governanca.png" },
  { file: "suporte-v1.html", outName: "hero-suporte.png" },
  { file: "sobre-page-v2.html", outName: "hero-sobre.png" },
];

function findDataImages(html) {
  const re = /data:image\/(png|jpeg|jpg|webp);base64,([A-Za-z0-9+/=\s]+)/gi;
  const imgs = [];
  let m;
  while ((m = re.exec(html))) {
    const b64 = m[2].replace(/\s+/g, "");
    imgs.push({
      ext: m[1] === "jpeg" || m[1] === "jpg" ? "jpg" : m[1],
      b64,
      len: b64.length,
      index: m.index,
    });
  }
  return imgs;
}

for (const job of jobs) {
  const fp = path.join(dir, job.file);
  if (!fs.existsSync(fp)) {
    console.log("MISSING", job.file);
    continue;
  }
  const html = fs.readFileSync(fp, "utf8");
  const imgs = findDataImages(html);
  if (!imgs.length) {
    console.log("NO IMAGES", job.file);
    continue;
  }
  imgs.sort((a, b) => b.len - a.len);
  const best = imgs[0];
  const buf = Buffer.from(best.b64, "base64");
  fs.writeFileSync(path.join(out, job.outName), buf);
  console.log(job.outName, buf.length, "from", job.file, "candidates", imgs.length);
}

const proj = path.join(dir, "projetos-v1.html");
if (fs.existsSync(proj)) {
  const html = fs.readFileSync(proj, "utf8");
  const imgs = findDataImages(html).sort((a, b) => b.len - a.len);
  console.log(
    "projetos images",
    imgs.length,
    imgs.slice(0, 8).map((i) => Math.round(i.len / 1024) + "KB"),
  );
  // Skip logo (~138KB raw ~100KB decoded). Project shots are larger.
  const candidates = imgs.filter((i) => i.len > 200_000).slice(0, 3);
  const names = [
    "projeto-fatia-de-lei.png",
    "projeto-adega-do-kinho.png",
    "projeto-pratoo.png",
  ];
  candidates.forEach((c, i) => {
    const name = names[i];
    const buf = Buffer.from(c.b64, "base64");
    // detect real format from magic bytes
    let final = name;
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      final = name.replace(/\.png$/, ".jpg");
    }
    fs.writeFileSync(path.join(out, final), buf);
    console.log("wrote", final, buf.length);
  });
}
