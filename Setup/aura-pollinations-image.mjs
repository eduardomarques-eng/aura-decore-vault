#!/usr/bin/env node
// aura-pollinations-image.mjs — Geração de imagens FREE da Aura Decore via Pollinations.ai
// Sem API key, sem billing, sem limite de quota. Modelo flux. Node 18+ (fetch nativo).
//
// Engine de imagem GRATUITA do Hub Central (substitui Gemini enquanto o billing não está ativo).
//
// USO:
//   node aura-pollinations-image.mjs "prompt da cena" saida.png [--ar 9:16|4:5|2:3|1:1] [--seed N] [--no-dna]
//
// EXEMPLOS:
//   node aura-pollinations-image.mjs "vela ambar acendendo em canto japandi, fumaca suave" capa.png --ar 9:16
//   node aura-pollinations-image.mjs "vaso ceramica wabi-sabi com flores secas" pin.png --ar 2:3

import { writeFileSync } from "node:fs";

const AURA_DNA =
  "japandi minimalist interior, serene sophisticated cozy premium, warm earthy palette terracotta #B8793A sand #EDE5D8 off-white #F5F0EB sage green #7A9076, natural golden side light, lots of negative space, wabi-sabi natural materials, magazine quality photography, calm atmosphere";

const RATIOS = {
  "9:16": [1080, 1920],
  "4:5":  [1080, 1350],
  "2:3":  [1000, 1500],
  "1:1":  [1080, 1080],
  "16:9": [1920, 1080],
};

function parseArgs(argv) {
  const a = { prompt: null, out: "aura-image.png", ar: "4:5", seed: Math.floor(Math.random() * 1e6), dna: true };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--ar") a.ar = argv[++i];
    else if (argv[i] === "--seed") a.seed = argv[++i];
    else if (argv[i] === "--no-dna") a.dna = false;
    else rest.push(argv[i]);
  }
  a.prompt = rest[0];
  if (rest[1]) a.out = rest[1];
  return a;
}

async function main() {
  const { prompt, out, ar, seed, dna } = parseArgs(process.argv.slice(2));
  if (!prompt) {
    console.error('Uso: node aura-pollinations-image.mjs "prompt" saida.png [--ar 9:16] [--seed N] [--no-dna]');
    process.exit(1);
  }
  const [w, h] = RATIOS[ar] || RATIOS["4:5"];
  const full = dna ? `${prompt}, ${AURA_DNA}` : prompt;
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(full)}` +
    `?width=${w}&height=${h}&model=flux&nologo=true&seed=${seed}`;

  const res = await fetch(url);
  if (!res.ok) {
    console.error(`❌ HTTP ${res.status}: ${await res.text().catch(() => "")}`);
    process.exit(1);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1000) {
    console.error("❌ Resposta muito pequena, provável erro do serviço.");
    process.exit(1);
  }
  writeFileSync(out, buf);
  console.log(`✅ Imagem salva: ${out}  (${ar} ${w}x${h}, seed ${seed}, Pollinations/flux)`);
}

main().catch((e) => { console.error("❌", e.message); process.exit(1); });
