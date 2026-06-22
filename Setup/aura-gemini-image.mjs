#!/usr/bin/env node
// aura-gemini-image.mjs — Geração de imagens da Aura Decore via Google Gemini
// Modelo: gemini-2.5-flash-image ("Nano Banana"). Node 18+ (fetch nativo).
//
// Integração ao Hub Central de Redes Sociais — engine PRIMÁRIA de imagens.
// Conta: eduardo.marques.arq@gmail.com
//
// SETUP (uma vez):
//   1. Acesse https://aistudio.google.com/apikey (logado como eduardo.marques.arq@gmail.com)
//   2. "Create API key" → copie a chave
//   3. Defina a variável de ambiente (PowerShell):
//        setx GEMINI_API_KEY "SUA_CHAVE_AQUI"
//      (reabra o terminal depois)
//
// USO:
//   node aura-gemini-image.mjs "prompt da cena" saida.png [--ar 4:5|9:16|2:3|1:1] [--no-dna]
//
// EXEMPLOS:
//   node aura-gemini-image.mjs "vela âmbar acendendo em canto japandi, fumaça suave" reel-frame.png --ar 9:16
//   node aura-gemini-image.mjs "vaso cerâmica wabi-sabi com flores secas em estante" pin.png --ar 2:3

import { writeFileSync } from "node:fs";

const MODEL = "gemini-2.5-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// DNA visual da Aura Decore — anexado a todo prompt (a menos que --no-dna)
const AURA_DNA = [
  "Estilo Japandi minimalista, sereno, sofisticado, acolhedor e premium.",
  "Paleta: terracota #B8793A, terracota claro #D4A574, areia #EDE5D8, off-white #F5F0EB, verde sálvia #7A9076.",
  "Luz natural dourada lateral e difusa (nunca flash), muito espaço negativo, materialidade natural, wabi-sabi.",
  "Fotografia de interiores de altíssima qualidade, atmosfera calma, qualidade de revista.",
].join(" ");

const RATIO_HINT = {
  "9:16": "Enquadramento vertical 9:16 (1080x1920), Reel/Story/TikTok.",
  "4:5":  "Enquadramento vertical 4:5 (1080x1350), feed Instagram.",
  "2:3":  "Enquadramento vertical 2:3 (1000x1500), Pin do Pinterest.",
  "1:1":  "Enquadramento quadrado 1:1 (1080x1080), feed.",
  "16:9": "Enquadramento horizontal 16:9, banner.",
};

function parseArgs(argv) {
  const a = { prompt: null, out: null, ar: "4:5", dna: true };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--ar") { a.ar = argv[++i]; }
    else if (argv[i] === "--no-dna") { a.dna = false; }
    else rest.push(argv[i]);
  }
  a.prompt = rest[0];
  a.out = rest[1] || "aura-image.png";
  return a;
}

async function main() {
  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    console.error("❌ GEMINI_API_KEY não definida. Veja o bloco SETUP no topo deste arquivo.");
    process.exit(1);
  }
  const { prompt, out, ar, dna } = parseArgs(process.argv.slice(2));
  if (!prompt) {
    console.error('Uso: node aura-gemini-image.mjs "prompt" saida.png [--ar 4:5] [--no-dna]');
    process.exit(1);
  }

  const fullPrompt = [
    prompt,
    dna ? AURA_DNA : "",
    RATIO_HINT[ar] || "",
    "Texto em português, se houver. Sem marca d'água.",
  ].filter(Boolean).join(" ");

  const res = await fetch(`${ENDPOINT}?key=${key}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: fullPrompt }] }],
    }),
  });

  if (!res.ok) {
    console.error(`❌ HTTP ${res.status}: ${await res.text()}`);
    process.exit(1);
  }

  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const img = parts.find((p) => p.inlineData?.data);
  if (!img) {
    console.error("❌ Resposta sem imagem. Conteúdo:", JSON.stringify(data).slice(0, 500));
    process.exit(1);
  }

  writeFileSync(out, Buffer.from(img.inlineData.data, "base64"));
  console.log(`✅ Imagem salva: ${out}  (${ar}, modelo ${MODEL})`);
}

main().catch((e) => { console.error("❌", e.message); process.exit(1); });
