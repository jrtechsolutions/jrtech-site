import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = "c:/Projetos/jrtech-sitenovo/public";

/** Focal point X as fraction of width (person's face). */
const foci = {
  "hero-infraestrutura": 0.22,
  "hero-seguranca": 0.2,
  "hero-desenvolvimento": 0.2,
  "hero-governanca": 0.24,
  "hero-suporte": 0.22,
  "hero-sobre": 0.32,
};

const outW = 900;
const outH = 1200; // 3:4 — matches tall mobile hero better

for (const [base, focusX] of Object.entries(foci)) {
  const input = path.join(dir, `${base}.jpg`);
  const meta = await sharp(input).metadata();
  const srcW = meta.width;
  const srcH = meta.height;

  // Take tallest possible crop with 3:4 ratio from source
  const cropH = srcH;
  const cropW = Math.round(cropH * (outW / outH));
  let left = Math.round(focusX * srcW - cropW / 2);
  left = Math.max(0, Math.min(left, srcW - cropW));
  const top = 0;

  const outPath = path.join(dir, `${base}-mobile.jpg`);
  await sharp(input)
    .extract({ left, top, width: cropW, height: cropH })
    .resize(outW, outH, { fit: "cover", position: "top" })
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(outPath);

  console.log(
    `${base}-mobile.jpg`,
    `crop=${cropW}x${cropH}@${left},0`,
    `→ ${outW}x${outH}`,
    `${Math.round(fs.statSync(outPath).size / 1024)}KB`,
  );
}
