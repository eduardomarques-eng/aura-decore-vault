# NOX — Calendário Editorial · Social Media Director

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: 7/10 · Atualizado: 2026-06-14

## Perfil
Diretor de conteúdo e calendário editorial da Aura Decore. Cria posts, stories, coordena Reels com VEGA, estrutura calendário semanal com base no Social Media Hub. Trabalha integrado com VEGA (vídeo), LUNA (visual), VERA (copy) e FEED (publicação).

## Métricas de Conteúdo (jun/2026)
- Stories vaso cerâmica: **340 views** (acima da média)
- Engajamento semanal: **+22%**
- Frequência posts: 2/dia (meta: 3/dia com VEGA)
- Total vídeos semana: 0 → meta 15/semana com VEGA integrado

## Tarefas (semana 25 — 2026-06-17)

### ✅ Concluído
- [x] 5 posts para feed (semana 24)
- [x] Integração VEGA definida — NOX agenda, VEGA produz vídeo
- [x] Calendário semanal real definido (9 posts/semana com horários fixos)
- [x] Postiz conectado — IG + FB Comercial via Graph API automático
- [x] TikTok dev portal configurado — produtos, redirect URI, escopos, postagem direta ativa
- [x] ACI container com TIKTOK_CLIENT_ID/SECRET — Postiz pronto para OAuth TikTok
- [x] Bug carrossel corrigido — mínimo 2 imagens enforced + Shopify CDN como fonte primária
- [x] **Calendário editorial semana 25 completo** (17–23/06) — copy neuromarketing todos os 9 posts
- [x] 2 designs Canva Pro gerados: Vaso Cerâmica feed + Carrossel 5 slides base

### 🔄 Em andamento / Próximos
- [x] **14 roteiros TikTok semana 25** — prontos em `AURA-decor-vault/Social/semana-25-tiktok-roteiros.md` (Kling AI + Capcut + Pippit)
- [x] **Design Canva QUI** — Bandeja Mármore `DAHM0Rj1lpo` ([editar](https://www.canva.com/d/glQO2fmqm2ERH_4))
- [ ] **Gerar 3 designs Canva** restantes: Lookbook 7 slides (SEX 18h), Wabi-Sabi carrossel (DOM 10h), Reel cover (SEG 09h) — quota Canva renova por sessão
- [ ] **Produzir vídeos TikTok** com Kling AI + Capcut Business + Pippit AI (Eduardo configura contas hoje)
- [ ] **TikTok OAuth no Postiz** — social.auradecore.com.br → Settings → Channels → Add TikTok (Eduardo configura hoje) → após OAuth, rodar script de inserção semana 25
- [ ] **Pinterest Standard Access** — quando Trial app 1581860 aprovado (1–5 dias úteis), solicitar Standard Access → me passar App ID + Secret → ACI update em 10 min
- [ ] **Semana 26** (24–30/06) — adaptar `postiz-insert-week25.mjs` com novas datas e novo calendário editorial

## Padrão Obrigatório — Todo Conteúdo

> **REGRA FIXA (Eduardo 17/06/2026):** cada post/story/reel/TikTok DEVE ter:
> - 🎵 **Música ambiente** — calma, moderna, japandi/lofi (indicar no briefing do VEGA)
> - ✍️ **Copy magnética** — gatilho neuromarketing, frase que para o scroll, linguagem sensorial
> - **#️⃣ Hashtags atuais e magnéticas** — 8–12 por post (nicho + volume médio + produto + trending + marca)
>
> Nunca entregar criativo sem os três elementos.

## Cadência Diária Real (a partir de 17/06/2026 — ordem Eduardo)

| Horário | Tipo | Canal | Ferramenta |
|---------|------|-------|------------|
| **09:00** | Post feed (produto/lifestyle) | IG + FB Comercial | Postiz automático ✅ |
| **12:00** | Story (teaser/CTA) | IG + FB Comercial | Postiz automático ✅ |
| **16:00–19:00** | Post feed (educação/lookbook) | IG + FB Comercial | Postiz automático ✅ |
| **20:00** | TikTok vídeo curto | TikTok @decore.aura | Postiz (após OAuth) |
| **21:00** | Story (engajamento/poll) | IG + FB Comercial | Postiz automático ✅ |

**FB Pessoal @auras.decore** — espelha via Chrome MCP após publicação IG+FB.

**Total por dia:** 2 posts + 2 stories = 4 peças × 2 canais = 8 publicações + 2 TikTok  
**Por semana:** 14 posts + 14 stories + 14 TikToks = 42 publicações

## Pipeline de Vídeos (Kling AI + Capcut Business + Pippit AI)
> Eduardo vai configurar contas gratuitas. Até lá, VEGA produz roteiros e thumbnails.
- **Kling AI:** Reels 15–30s com prompts visuais japandi (texto → vídeo IA)
- **Capcut Business:** edição final, legendas automáticas, transições elegantes
- **Pippit AI:** variações de produto / slideshow automático para stories
- **Integração Postiz:** quando configurados, vídeos agendados diretamente

## ✅ Semana 25 — AGENDADA (17–23/06/2026)
**56 posts inseridos no Postiz DB:**
- 2 posts/dia × 7 dias × 2 canais = 28 posts
- 2 stories/dia × 7 dias × 2 canais = 28 stories
- Copy neuromarketing completo em cada post
- Imagens Shopify CDN permanentes vinculadas
- Script: `C:\Users\erick\AppData\Local\Temp\postiz-insert-week25.mjs`

**Pinterest** (manual — TER/QUI/SÁB 08:00): Pin curado com imagem do produto + título SEO + link loja → API pendente (criar novo app + Standard Access)

## Roteiro Atual (Reel Vela Âmbar — em mãos do VEGA)
- **Hook (0-3s)**: "Você ainda usa decoração genérica?"
- **Desenvolvimento (3-25s)**: Transformação do ambiente com vela âmbar
- **CTA (25-30s)**: Link na bio + desconto exclusivo

## Relacionamentos
- Dirige calendário: [[VEGA]] (vídeo), [[LUNA]] (visual), [[VERA]] (copy), [[FEED]] (publicação)
- Reporta para: [[IVE]]
- Informa: [[REX]] (versão ads dos Reels), [[ECHO]] (métricas conteúdo)

## Social Media Hub — Scripts Base
1. Um Minuto de Paz | 2. Segredo das Casas Bonitas | 3. Unboxing ASMR
4. Antes vs Depois Japandi | 5. 3 Erros na Decoração | 6. O Que é Japandi
7. Canto de Leitura | 8. Por Que Seu Lar Parece Vazio
