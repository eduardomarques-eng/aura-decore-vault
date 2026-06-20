---
name: feedback-criativos-ptbr-multicanal
description: Regras permanentes sobre criativos Aura Decore — idioma PT-BR obrigatório e publicação em 5 canais
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 06dd2287-8dac-445e-b03c-c5dcb6b7cbd6
---

# Regra: Criativos 100% em Português Brasil

Todo criativo visual (imagens, vídeos, carrosséis, pins, reels, stories, banners, anúncios) gerado para a Aura Decore DEVE ter textos, legendas, headlines, CTAs e todo conteúdo escrito em **Português Brasil**.

**Why:** Eduardo (Ive, CEO) já sinalizou isso antes e NÃO quer repetir. É regra permanente. Designs com texto em inglês são inaceitáveis.

**How to apply:** Ao usar Canva MCP (`generate-design`), sempre especificar no prompt: "All text, headlines, copy and CTAs must be in Brazilian Portuguese (PT-BR)." E verificar o título salvo — se vier em inglês, é sinal de que o design pode ter texto em inglês e deve ser revisado ou regenerado.

---

# Regra: 4 Canais de Publicação nos Workflows dos Agentes

Os agentes de social media (Luna, Vega, Nox, social_agent.py, n8n workflows) DEVEM considerar publicação em todos os 4 canais ativos:

1. **Facebook Comercial** — @auradecore via Graph API (FB_PAGE_TOKEN / META_ACCESS_TOKEN)
2. **Facebook Pessoal** — @auras.decore via Chrome MCP (publicação manual/automação Chrome)
3. **Instagram** — @auradecore via Graph API (mesma token do FB Comercial)
4. **Pinterest** — @auradecoracao via API (quando PINTEREST_API_READY=true) ou manual
5. **TikTok** — @decore.aura via Chrome MCP (quando TIKTOK_API_READY=true) ou manual

**Why:** Eduardo quer que os workflows dos agentes considerem todos os canais, não apenas IG+FB Comercial.

**How to apply:** Ao criar ou atualizar agentes, workflows n8n, scripts de publicação ou calendários de conteúdo — sempre incluir os 5 canais acima. FB Pessoal e TikTok usam Chrome MCP quando API não disponível.

---

# Regra: Calendário com Dias Espaçados (Marketing Neurológico)

Eduardo aprovou todas as imagens geradas e quer usá-las para recorrência. O calendário de publicações DEVE ter dias espaçados estrategicamente para fixação de marca por repetição (princípio: 7+ exposições antes da compra).

**Why:** Marketing neurológico exige repetição estratégica — não publicação diária de tudo de uma vez. Espaçamento cria antecipação e memorização.

**How to apply:** Ver arquivo `marketing_neurologico_aura.md` para o calendário completo. Cada série temática tem frequência definida. Não aglomerar publicações — respeitar o espaçamento de dias.

---

---

# Regra: Caption Profissional Alternado + Música + Hashtags (2026-06-17)

Eduardo pediu (17/06/2026): legendas alternando entre **profissional** e **humanizado**, com:
- CTA no final com site `auradecore.com.br`
- 8-12 hashtags magnéticas atuais
- Emojis sutis
- Música ambiente sugerida em stories/reels
- FB Pessoal @auras.decore espelhado em todos os posts

**Formato Profissional (posts ímpares):**
```
[corpo da legenda]

✨ Conheça nossa coleção completa em auradecore.com.br
🛍️ Frete grátis acima de R$299 · Entrega para todo o Brasil

#auradecore #decoracaojapandi [8-12 hashtags]
```

**Formato Humanizado (posts pares):**
```
[corpo da legenda]

↳ Ver mais no link da bio 🌿

#auradecore #decoracaojapandi [8-12 hashtags]
```

**Stories:** corpo + `🎵 Música: "nome" — artista` + hashtags base.

**Why:** Eduardo quer profissionalismo + variedade + autenticidade. Posts muito similares cansam o feed.

**How to apply:** Script `update-captions-week25.cjs` aplica o padrão em lote ao DB Postiz. O publisher `aura-publisher.cjs` aplica dinamicamente em posts futuros via `enhanceCaption()`.

---

Links relacionados: [[project_aura_decor]]
