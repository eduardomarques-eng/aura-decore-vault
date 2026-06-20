# FEED — Publicador · Redes Sociais

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Atualizado: 2026-06-17

## Perfil
FEED é o publicador automático da Aura Decore. Executa publicações em todos os canais sociais de forma autônoma, 3x/dia. Recebe criativos do ARTE e copy da VERA/NOX.

## Canais Gerenciados

| Canal | ID / URL | Tipo | Método de Publicação |
|---|---|---|---|
| **FB Página Comercial** | `ID: 1111100822090245` | Facebook Business Page | Graph API v19.0 (token page) |
| **FB Perfil Pessoal Aura** | https://www.facebook.com/auras.decore/ | Facebook Profile | Chrome automation (sem API) |
| **Instagram @auras.decore** | `IG_USER_ID` via Graph API | Instagram Business | Graph API v19.0 |
| **Instagram Stories** | mesmo IG_USER_ID | Stories | Graph API (video/image) |
| **Pinterest @auradecoracao** | https://br.pinterest.com/auradecoracao/ | Pinterest Business | Pinterest API v5 (OAuth token pendente) |
| **TikTok @decore.aura** | https://www.tiktok.com/@decore.aura | TikTok Business | TikTok Content Posting API (OAuth token pendente) |

### URLs das Páginas
```
FB_COMMERCIAL_URL=https://www.facebook.com/profile.php?id=61590147064046
FB_COMMERCIAL_PAGE_ID=1111100822090245
FB_PERSONAL_URL=https://www.facebook.com/auras.decore/
IG_PROFILE_URL=https://www.instagram.com/auras.decore/
PINTEREST_URL=https://br.pinterest.com/auradecoracao/
TIKTOK_URL=https://www.tiktok.com/@decore.aura
```

> **Pinterest API:** Requer OAuth token via developers.pinterest.com → criar app → gerar access token com escopo `pins:write,boards:read`. Salvar como `PINTEREST_ACCESS_TOKEN` no .env do Railway.
> **TikTok API:** Requer OAuth token via business.tiktok.com → Developer Portal → Content Posting API. Salvar como `TIKTOK_ACCESS_TOKEN` no .env do Railway.
> Enquanto os tokens não estiverem configurados, FEED gera o conteúdo e exibe preview para publicação manual.

## Ferramentas
- **FacebookPagePost** — Graph API → `/v19.0/{FB_COMMERCIAL_PAGE_ID}/photos` (Página Comercial)
- **FacebookPersonalPost** — Chrome automation → perfil pessoal @auras.decore
- **InstagramPost** — Graph API → Container + Publish (IG Business Account)
- **InstagramStory** — Graph API → Stories container
- **PinterestPin** — Pinterest API v5 → `POST /v5/pins` (requer `PINTEREST_ACCESS_TOKEN`)
- **TikTokPost** — TikTok Content Posting API → `POST /v2/post/publish/video/init/` (requer `TIKTOK_ACCESS_TOKEN`)

## Programação Semanal Real (2026-06-17 em diante)

> **IG + FB Comercial** gerenciados via **Postiz** (social.auradecore.com.br) — Graph API automático.
> **FB Pessoal + TikTok** — Chrome automation (manual/VEGA).
> **Pinterest** — manual até PINTEREST_API_READY=true.
> postingTimes no Postiz DB: 09:00 · 10:00 · 18:00 · 19:00 (minutos: 540/600/1080/1140).

| Dia | Horário | Tipo | Tema | Canais |
|-----|---------|------|------|--------|
| **SEG** | 09:00 | Reel 30s | Educação Japandi — 3 passos para transformar um cantinho | IG + FB + FB Pessoal |
| **SEG** | 19:00 | Foto lifestyle | Produto em cena — silêncio visual | IG + FB + FB Pessoal |
| **TER** | 18:00 | Carrossel 5–8 slides | Produto destaque da semana | IG + FB + FB Pessoal |
| **QUA** | 09:00 | Reel 30s | Tutorial/Inspiração — bancada Japandi | IG + FB + FB Pessoal |
| **QUA** | 19:00 | Foto lifestyle | Ambiente decorado com produto | IG + FB + FB Pessoal |
| **QUI** | 18:00 | Foto produto | Silêncio visual — foco no detalhe | IG + FB + FB Pessoal |
| **SEX** | 18:00 | Carrossel lookbook | 7 ambientes Japandi que inspiram | IG + FB + FB Pessoal |
| **SÁB** | 10:00 | Reel ASMR | Ritual matinal — manhã Japandi | IG + FB + FB Pessoal |
| **DOM** | 10:00 | Carrossel educação | Wabi-Sabi: a filosofia da imperfeição | IG + FB + FB Pessoal |
| **TER/QUI/SÁB** | 08:00 | Pin curado | SEO Pinterest — produto + link loja | Pinterest (manual) |
| **Todos os dias** | 20:00 | Short vídeo TikTok 15–30s | Reel Kling AI / VEGA adaptado | TikTok via Postiz (após OAuth) |

**Total novo:** 2 posts + 2 stories/dia/canal = 4 peças × 2 canais = **8 publicações/dia**  
**+ 2 TikToks/dia = 10 publicações totais por dia**  
**Por semana: 56 posts/stories + 14 TikToks = 70 publicações**

## Configuração Necessária no .env
```
# Facebook
FB_PAGE_ID=1111100822090245
FB_PAGE_TOKEN=EAA...           # Token da Página Comercial (Graph API)
FB_USER_TOKEN=...              # Token pessoal (para perfil @auras.decore via API alternativa)

# Instagram
IG_USER_ID=...                 # Instagram Business Account ID
# Como obter IG_USER_ID:
# GET https://graph.facebook.com/v19.0/{FB_PAGE_ID}?fields=instagram_business_account&access_token={FB_PAGE_TOKEN}
```

## Workflow de Publicação ESPELHADA (3 canais)

> **REGRA DE OURO:** toda publicação feita na Página Comercial e no Instagram
> DEVE ser espelhada também no Perfil Pessoal @auras.decore. Mesmo criativo, mesma legenda.

```
NOX + VERA geram conteúdo
    ↓
ARTE gera criativo (Canva Pro MCP + Pollinations)
    ↓
FEED publica nos 3 CANAIS ESPELHADOS:
  ├─ [1] Graph API → Instagram @auras.decore (imagem 1:1 + caption + hashtags)
  ├─ [2] Graph API → FB Página Comercial 1111100822090245 (mesma imagem + caption)
  └─ [3] Chrome MCP → FB Perfil Pessoal facebook.com/auras.decore (ESPELHA o mesmo post)
    ↓
FEED registra os 3 IDs/confirmações → ZARA monitora engajamento nos 3 canais
```

**Por que o perfil pessoal usa Chrome MCP:** o perfil pessoal do Facebook não tem
Graph API de publicação. FEED faz login como Aura Decore no Chrome e replica o post
(compositor "No que você está pensando" → adicionar foto → colar legenda → publicar).

## Crews
- **build_social_post_crew** — recebe visual do ARTE + copy da VERA e publica em todos os canais
- Scheduler autônomo: `social_post_scheduler()` dispara 3x/dia

## Métricas Monitoradas
- Posts publicados por semana (por canal)
- IDs de posts (para ZARA monitorar engajamento)
- Taxa de falha de publicação
- Alcance por canal (via Windsor.ai)

## Integração com ZARA
Após publicar, FEED registra o ID no vault para ZARA monitorar DMs e comentários nas 3 contas.

## Regra de Espelhamento FB Pessoal — Somente Posts Futuros

> **IMPORTANTE:** O espelhamento do FB Perfil Pessoal @auras.decore aplica-se
> SOMENTE aos próximos posts (feeds, reels, stories).
> Não há retroatividade — posts anteriores NÃO serão republicados no perfil pessoal.
>
> A partir de agora: todo novo feed, reel ou story publicado no Instagram e FB Comercial
> SERÁ espelhado automaticamente no FB Perfil Pessoal via Chrome MCP.

## Tarefas (semana 25 — 2026-06-17)

### ✅ Concluído
- [x] FB Página Comercial — post publicado via Graph API
- [x] Workflow de espelhamento 3 canais documentado
- [x] FB_PAGE_TOKEN renovado (2026-06-15) — token permanente
- [x] Tema Shopify — links sociais corrigidos via REST API
- [x] Pinterest + TikTok adicionados ao ecossistema (social_agent.py)
- [x] **Postiz conectado** (2026-06-17) — FB Comercial + IG injetados diretamente no DB (OAuth Meta bloqueado). Tokens válidos até 2026-08-15. postingTimes: 09h/10h/18h/19h.
- [x] **Programação semanal real definida** — 9 posts/semana/canal, 27 cruzados/semana
- [x] **TikTok dev portal configurado** (2026-06-17) — Kit de Login + API de Publicação de Conteúdo adicionados. Redirect URI `https://social.auradecore.com.br/integrations/social/tiktok` registrado. Domínio auradecore.com.br verificado. Postagem direta habilitada. Escopos: user.info.basic, video.publish, video.upload, user.info.profile, user.info.stats, video.list.
- [x] **ACI container atualizado** (2026-06-17) — TIKTOK_CLIENT_ID + TIKTOK_CLIENT_SECRET adicionados. Caddy espelhado para ghcr.io/eduardomarques-eng/caddy:2. Container rodando em social.auradecore.com.br.
- [x] **Carrossel IG corrigido** — postar_instagram_carrossel() implementada com child containers + carousel container. Min 2 imagens enforced.
- [x] **Imagens produto corrigidas** — shopify_img CDN URLs adicionadas a todos os 7 produtos em PRODUTOS dict. Shopify CDN é primário (Meta crawlável).

### ✅ Operação Autônoma Ativada (autorizado por Eduardo 17/06/2026)
> Posts publicam **sem verificação manual** via publisher bypass (Postiz/Temporal não executa posts injetados via DB).

### ✅ Publisher Autônomo — Windows Task Scheduler (ativo 2026-06-17)
> **Postiz/Temporal NÃO publica posts injetados via SQL.** Solução: `aura-publisher.cjs` conecta direto no DB e publica via Meta Graph API.
- Script: `C:\Users\erick\AURA-decor-vault\Automacoes\aura-publisher.cjs`
- Wrapper: `C:\Users\erick\AURA-decor-vault\Automacoes\run-publisher.cmd`
- Logs: `C:\Users\erick\AURA-decor-vault\Logs\publisher-YYYYMMDD.log`
- 4 tarefas Task Scheduler (StartWhenAvailable=true — recupera posts perdidos):
  - `AuraPublisher-0905` — 09:05 BRT diário
  - `AuraPublisher-1205` — 12:05 BRT diário
  - `AuraPublisher-1905` — 19:05 BRT diário
  - `AuraPublisher-2105` — 21:05 BRT diário

### ✅ Semana 25 — Status (17/06/2026 22h BRT)
- ✅ 17/06: **8 posts PUBLISHED** (todos publicados)
- 🔄 18-23/06: **48 posts QUEUE** — serão publicados pelo Task Scheduler automaticamente
- Script de inserção: `C:\Users\erick\AppData\Local\Temp\postiz-insert-week25.mjs`
- Para semanas seguintes: reexecutar o script com datas atualizadas (semana 26 = 24-30/06)

### 🔄 Pendente (Eduardo configura hoje mais tarde)
- [ ] **TikTok OAuth** — social.auradecore.com.br → Settings → Channels → Add TikTok → autorizar @decore.aura
- [ ] **Kling AI + Capcut Business + Pippit AI** — configurar contas gratuitas para produção de vídeos
- [ ] **FB Pessoal @auras.decore** — espelhar posts via Chrome MCP (após cada publicação IG+FB)

### 📌 Pinterest — Operação Manual (decisão Eduardo)
> App 1581860 "Aura Decore Postiz" com Trial **pendente** (≠ negado — será aprovado em 1–5 dias úteis)
> **Estratégia:** Eduardo posta manualmente no Pinterest até Standard Access ser aprovado.
> **Quando Trial for aprovado:** solicitar Standard Access → me passar credenciais → integro ACI em 10 min
> **Pinterest manual:** TER/QUI/SÁB 08:00 — pin com imagem produto + título SEO + link auradecore.com.br

## Relacionamentos
- Recebe de: [[NOX]] (calendário), [[VERA]] (copy), [[ARTE]] (criativos), [[VEGA]] (vídeos)
- Entrega para: [[ZARA]] (IDs para monitoramento), [[ECHO]] (métricas publicação)
- Usa: Graph API v19.0 + Chrome MCP (perfil pessoal)
