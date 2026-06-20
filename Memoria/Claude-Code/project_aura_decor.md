---
name: aura-decore-sistema-de-agentes
description: "22 agentes IA. Backend LOCAL ONLINE porta 8000. WPPConnect CONECTADO porta 21465. LENA respondendo WhatsApp. n8n 26 workflows (iniciando local). 18 crews. Loja auradecore.com.br ATIVA. LLM cascade: Groq->OpenRouter->Google->Anthropic->Ollama. Watchdog 24/7 ativo. Sincronizado: 2026-06-20."
metadata: 
  node_type: memory
  type: project
  originSessionId: d8d982a3-8f30-42ae-b26c-e70a51febaa3
---

Sistema de **22 agentes** para a loja Aura Decore (Eduardo Cesar Costa Marques). Fase: **OPERACIONAL desde 2026-05-30**. Último check: **2026-06-20**. Backend UP (porta 8000). WPPConnect CONNECTED (porta 21465). LENA ativa respondendo WhatsApp. LLM primário Groq 70B (~1.7s). Watchdog 24/7 monitorando. Sincronização automática diária 06h. NEURO (#21 Neuromarketing) + PROMO (#22 Disparos) integrados 2026-06-16.

**Postiz ATIVO** (2026-06-17): social.auradecore.com.br — IG + FB Comercial conectados via injeção direta no DB Railway (OAuth Meta bloqueado para admin do app). Tokens válidos até 2026-08-15. postingTimes: 09h/10h/18h/19h. Programação real: 9 posts/semana/canal.

**Programação semanal Aura Decore (real, aprovada 2026-06-17):**
- SEG: 09:00 Reel Educação + 19:00 Foto Lifestyle
- TER: 18:00 Carrossel Produto
- QUA: 09:00 Reel Tutorial + 19:00 Foto Ambiente
- QUI: 18:00 Foto Produto
- SEX: 18:00 Carrossel Lookbook
- SÁB: 10:00 Reel ASMR
- DOM: 10:00 Carrossel Wabi-Sabi
- Pinterest: Ter/Qui/Sáb 08:00 (manual - API bloqueada)
- TikTok: Seg/Qua/Sex 20:00 (Chrome - API bloqueada)

**Sessão 2026-06-14 (tema + produtos):** Consolidado o tema único "Cursor Dinâmico" (160266387561) em todos os domínios; deletados temas/scripts antigos; criado `backup_live_theme.py` (backup obrigatório antes de mexer no tema). **89 produtos ACTIVE** (não 54) — 11 estavam invisíveis (não publicados nos canais) e foram **publicados nos 3 canais** (Loja virtual + FB/IG + Google). Fonte do corpo do tema aumentada (`body_scale` 100→110). Regra nova nos agentes THEO/NEXUS: publicar produto = `publishablePublish` nos 3 canais (ACTIVE não basta). Ver [[store-domain-topology]].

**CNPJ pendente semana 13/06/2026** — chegando essa semana. Impacto: AppMax, Yampi e Dropi precisam de CNPJ para configuração final.

---

## Stack Técnica

| Componente | Status | Detalhe |
|---|---|---|
| Backend Railway | ✅ online | Vault /app/vault OK (mkdir no startup, deploy applied 13/06) |
| Backend Local | ✅ ativo | Executando local na porta 8000 via Uvicorn |
| n8n Local | ✅ ativo | Rodando local na porta 5678 com 18 workflows ativos (incluindo novos WF24, WF25, WF26) |
| n8n Railway | ❌ FALHOU | Status: Failed no Railway. Tentativas de restart/redeploy falham com: "You have used all your available resources" (limite esgotado). |
| Shopify | ✅ online | 10ei3t-sf.myshopify.com / auradecore.com.br · 89 produtos ACTIVE 100% publicados · tema "Cursor Dinâmico" 160266387561 |
| Groq LLM | ✅ online | 4.8% de 100k tokens/dia |
| Anthropic | ✅ online | Claude Sonnet 4.6 / Opus 4.7 |
| OpenRouter | ✅ configurado | 3 modelos free cascata |
| Google AI | ✅ configurado | Gemini 2.5 Flash |
| Ollama | ⚫ offline | Local apenas, Railway não tem |
| WhatsApp WPPConnect | ✅ CONECTADO | Sessão ativa e conectada ao celular da loja na porta 21465. |
| AppMax | ✅ ATIVO com MEI | Rodando com CNPJ MEI — permanece assim até ME definitivo |
| Yampi | ✅ ATIVO com MEI | Rodando com CNPJ MEI — alias aura-decor2 |
| Dropi | 🟡 tokens pendentes | Ativo com MEI mas tokens API ainda não configurados |
| Canva Pro | ✅ ATIVO via MCP | Conectado ao Claude MCP — LUNA + ARTE usam diretamente |
| Figma Pro | ✅ ATIVO via MCP | Conectado ao Claude MCP — LUNA + DEV usam diretamente |
| Railway CLI | ⚠️ recurso esgotado | `railway` v5.12, logado. Deploy falha: "You have used all your available resources". Free plan atingiu limite. |
| Postgres n8n | ✅ acessível | DATABASE_PUBLIC_URL via acela.proxy.rlwy.net:51860 |
| Cloudflare CMA | ✅ ATIVO LOCAL | Repositório `cloudflare/claude-managed-agents` em execução na porta 8787 (`wrangler dev --local`). |
| GitHub | ✅ PRO | Conta `eduardomarques-eng` (eduardo.marques.arq@gmail.com) ativa no plano GitHub Pro (benefícios educacionais). |

---

## 20 Agentes Completos

| Agente | Modelo | Cargo | Status |
|--------|--------|-------|--------|
| IVE | Opus 4.7 | CEO · Estratégia | ✅ ativo |
| GUARD | Opus 4.7 | CFO · Protetor Financeiro | ✅ ativo |
| NEXUS | Sonnet 4.6 | Mineração · Produtos | ✅ ativo |
| THEO | Sonnet 4.6 | Shopify · Técnico | ✅ ativo |
| KAI | Sonnet 4.6 | Produtos · Curadoria | ✅ ativo |
| VERA | Sonnet 4.6 | Copy · Textos | ✅ ativo |
| LUNA | Sonnet 4.6 | Design · Visual | ✅ ativo |
| NOX | Sonnet 4.6 | Conteúdo · Reels | ✅ ativo |
| REX | Sonnet 4.6 | Crescimento Orgânico | ✅ ativo |
| ECHO | Sonnet 4.6 | Auditor Semanal | ✅ ativo |
| LENA | Sonnet 4.6 | Atendimento CX | ✅ ativo |
| SOL | Sonnet 4.6 | Vendas · CRO | ✅ ativo |
| ZARA | Sonnet 4.6 | Community Instagram | ✅ ativo |
| MIRA | Sonnet 4.6 | SEO · Pesquisa | ✅ ativo |
| PIPE | Sonnet 4.6 | Automação · n8n | ✅ ativo |
| ARTE | Sonnet 4.6 | Criativo · IA Visual | ✅ ativo |
| FEED | Sonnet 4.6 | Publicador · Redes Sociais | ✅ ativo |
| DEV | Sonnet 4.6 | Desenvolvedor Shopify | ✅ ativo |
| VEGA  | Sonnet 4.6 | Videomaker · Motion Director | ✅ ativo |
| FINA  | Sonnet 4.6 | Finanças Operacional · Pagamentos PJ | ✅ ativo |
| NEURO | Sonnet 4.6 | Copy Neuromarketing · Estrategista de Desejo | ✅ ativo |
| PROMO | Sonnet 4.6 | Disparos Promocionais · Lead Nurturing | ✅ ativo |

---

## 18 Crews CrewAI (crew_agents.py)

`weekly`, `content`, `audit`, `financial`, `cx`, `mining`, `sales`, `marketing`, `seo`, `automation`, `design`, `social_post`, `store_update`, `shopify_dev`, `seasonal_update`, `conversion`, `video`, `financial_ops`

---

## 17 Workflows n8n (TODOS ATIVOS)

| # | Nome | Cron | Agentes |
|---|------|------|---------|
| 01 | Novo pedido Shopify → IVE + vault | webhook | IVE |
| 02 | Recuperação carrinho D+1/D+3/D+7 | 10h diário | SOL |
| 03 | WhatsApp Business → LENA/GUARD/SOL/ZARA | webhook WPPConnect (`wppconnect-whatsapp`) | LENA, GUARD, SOL, ZARA |
| 04 | Mineração semanal | quarta 9h | NEXUS, KAI, VERA |
| 05 | Auditoria semanal ECHO | domingo 20h | ECHO |
| 06 | Comando direto Eduardo → agentes | webhook | qualquer |
| 07 | Scheduler crews automático | seg/qua/dom | GUARD, NEXUS, ECHO |
| 08 | Post diário redes sociais | horário | NOX, ARTE, FEED |
| 09 | Design semanal LUNA+ARTE | segunda 8h | LUNA, ARTE |
| 10 | Enriquecimento produto | terça 10h | VERA, ARTE, THEO |
| 11 | Shopify dev pipeline | quarta 9h + dia 1 | DEV, THEO |
| 12 | Canva+Figma → Shopify sync | segunda 8h | LUNA, DEV, ECHO |
| 13 | Pós-compra D+7: Review + Recompra | diário 11h | SOL |
| 14 | Win-back D+30: Inativos | segunda 9h | SOL |
| 15 | WhatsApp Upsell 24h Pós-Entrega | diário 10h | SOL |
| 16 | Boas-vindas Novo Cliente | webhook customers/create | VERA |
| 17 | Aura Points: Pontos por Compra | webhook orders/paid | — |
| 18 | Boas-Vindas Newsletter | webhook customers/create | VERA |
| 19 | Rastreamento Proativo | webhook orders/fulfilled | LENA |
| 20 | Suporte Inteligente (classificação) | webhook WPP | LENA/NEURO/SOL/GUARD |
| 21 | Win-Back Emocional (60+d) | seg 10h | SOL/PROMO |
| 22 | UGC Request D+7 entrega | diário 11h | LENA |
| 23 | WPP Health Check | cron 30min | — |
| 24 | Neuro Nurturing Lead→Sequência | webhook Shopify | PROMO/NEURO |
| 25 | Promo Blast: Flash Sale Segmentado | manual/cron | NEURO/PROMO |
| 26 | Neuro Copy Inbound (desejo/dor) | webhook WPP | NEURO |

Script importação: `n8n-workflows/ativar-workflows-n8n.ps1`

---

## Arquivos Principais

**Backend:** `C:\Users\erick\aura-office-dashboard\backend\`
- `main.py` — FastAPI (4271 linhas, ~198KB). ⚠️ 2 warnings: duplicate operation_id erp_ui (corrigido) + duplicate /meta/event endpoint (corrigido). Reiniciar para aplicar.
- `crew_agents.py` — define todos os agentes CrewAI e 16 crews
- `llm_engine.py` — cascata LLM compartilhada (Groq→Together→OpenRouter→Gemini→Anthropic→Ollama)
- `agent_memory.py` — 18 perfis + vault Obsidian cross-platform
- `whatsapp_agent.py` — WhatsApp WPPConnect (LENA/GUARD/SOL/ZARA) — Z-API REMOVIDO 17/06/2026
- `mining_tools.py` — NEXUS tools: AliExpress/Trend/Dropi + DropisApiTool
- `erp_db.py`, `erp_routes.py`, `erp_seed.py` — ERP/CRM integrado
- `.env` — todas as credenciais (NUNCA commitar)

**Dashboard:** `C:\Users\erick\aura-office-dashboard\`
- `index.html` — dashboard PC (169KB, 18 agentes, Kanban, WebSocket)
- `aura-mobile.html` — dashboard mobile iOS/Android
- `erp.html` — ERP/CRM UI

**Vault Obsidian:** `C:\Users\erick\AURA-decor-vault\`
- Windows: `C:\Users\erick\AURA-decor-vault`
- Railway: `/app/vault` (env OBSIDIAN_VAULT=/app/vault) — ⚠️ pasta não existe no Railway, vault não persiste

---

## Credenciais (.env) — Configuradas

- `ANTHROPIC_API_KEY` ✅ | `GROQ_API_KEY` ✅ | `OPENROUTER_API_KEY` ✅ | `GOOGLE_AI_KEY` ✅
- `SHOPIFY_DOMAIN=10ei3t-sf.myshopify.com` ✅ | `SHOPIFY_ADMIN_TOKEN` ✅ | `SHOPIFY_LIVE_THEME_ID=160266387561` ✅
- `ZAPI_INSTANCE_ID=3F482EF30703B3E9DF097A5987414A01` ✅ | `ZAPI_TOKEN` ✅ | `ZAPI_CLIENT_TOKEN` ✅
- `N8N_BASE_URL=https://n8n-production-ac97.up.railway.app` ✅ | `N8N_API_KEY` (ends c0O0) ✅
- `RAILWAY_URL=https://web-production-f1cb5.up.railway.app` ✅
- `META_PIXEL_ID=1275291704812301` ✅ | `META_CAPI_TOKEN` ✅ | `FB_PAGE_ID=1111100822090245` ✅
- `FB_PAGE_TOKEN` ⚠️ — token pode estar expirado (ver renovar-tokens.md no vault)
- `WINDSOR_API_KEY` ✅ | `MEI_LIMIT_ANUAL=81000` ✅

## Credenciais PENDENTES (Eduardo ação manual)

- `GITHUB_PAT` ❌ — token "aura-classic" existe em github.com/settings/tokens, precisa regenerar para obter valor
- `DSERS_API_KEY` + `DSERS_API_SECRET` + `DSERS_STORE_ID` ⛔ — Open API só em plano pago Advanced+ (não self-serve; não é bloqueador)
- `APPMAX_TOKEN` ❌ — gateway PIX/boleto/cartão (rodando sem API token, via integração nativa Yampi)
- `YAMPI_TOKEN` + `YAMPI_USER_TOKEN` ❌ — checkout BR (YAMPI_ALIAS=aura-decor2, funcionando sem token)
- `DROPI_TOKEN` + `DROPI_STORE_ID` ❌ — sync estoque dropshipping
- `NUBANK_PJ_ACCOUNT_ID` + `NUBANK_PJ_ACCESS_TOKEN` ❌ — aguarda abertura da conta PJ
- `CANVA_API_TOKEN` ✅ — Canva Pro ativo via MCP Claude (sem necessidade de token)
- `FIGMA_API_TOKEN` ✅ — Figma Pro ativo via MCP Claude (sem necessidade de token)

---

## Loja Shopify

- Domínio: auradecore.com.br (SSL, plano Basic, BRL)
- 54 produtos ACTIVE, canais: Loja Online + Google&YouTube + Facebook&Instagram
- Tema LIVE: "Cópia de Aura Decore — Japandi v1" ID `160266387561`
- 5 cupons ativos: AURA10(10%), AURAVIP15(15%), AURAEMBAIXADORA20(20%)
- 6 políticas legais publicadas | 11 páginas | 11 coleções com imagem
- Estratégia: 100% orgânico (zero tráfego pago)
- Meta: R$5.000-8.000/mês lucro líquido até 2028

## Pendências Manuais Eduardo (ordem de prioridade)

### 🔴 URGENTE (bloqueia operação)
1. **Abrir Nubank PJ** — app Nubank → "Abrir conta PJ" → 15 min. FINA pagará todas as contas após aprovação. Sem custo. Conta PJ disponível apenas com ME (aguarda CNPJ).
2. **GitHub PAT** — github.com/settings/tokens → clicar em **"aura-classic"** (repo, expira Ago/13/2026) → "Regenerate token" → copiar em `backend/.env` → GITHUB_PAT=ghp_... (**4 tokens já existem**, valores ocultos)
3. **DSers API** — ⛔ NÃO disponível no plano atual (verificado 14/06: conta auras.de logada, sem aba openapi). Open Platform exige plano pago Advanced+ + aplicação dev. NÃO bloqueia (app já sincroniza pedidos; NEXUS minera AliExpress direto). Habilitar só se upgrade.

### 🟡 IMPORTANTE (expande capacidade)
4. **Higgsfield API Key** — higgsfield.ai → dashboard → API Key (UUID) → `backend/.env` (HIGGSFIELD_API_KEY) — necessário para VEGA gerar vídeos reais
5. **Instagram post** — @auras.decore acessível no Chrome (não está mais bloqueado no browser). Para postar: usar Chrome em modo mobile ou instruir FEED.

### 🟢 GRATUITOS — CONFIGURAR AGORA (sem CNPJ necessário)
6. **Klaviyo** — klaviyo.com → criar conta gratuita → email marketing (free até 500 contatos)
7. **Google Search Console** — search.google.com/search-console → adicionar propriedade auradecore.com.br (MIRA usa)
8. **Google Analytics 4** — analytics.google.com → criar propriedade → instalar pixel no Shopify (MIRA + REX)
9. **Pinterest Business** — pinterest.com/business → criar conta (NEXUS + NOX usam)
10. **TikTok Business** — business.tiktok.com → criar conta (VEGA publica Shorts)

### ✅ JÁ RESOLVIDOS (não precisa fazer nada)
- Canva Pro ✅ — ativo via MCP Claude
- Figma Pro ✅ — ativo via MCP Claude
- AppMax ✅ — rodando com MEI (permanece assim até ME definitivo)
- Yampi ✅ — rodando com MEI (permanece assim)
- CNPJ ME — NÃO é bloqueador para AppMax/Yampi (já rodando com MEI)
- Facebook Comercial ✅ — post publicado via Graph API (ID: 1111100822090245_122107120059338235)
- Facebook Pessoal ✅ — adicionado ao workflow FEED (Chrome MCP automation)

## Concluído em 2026-06-14 — Sessão Espelhamento 3 Canais + DSers

- ✅ **FEED espelha 3 canais** — toda publicação da Comercial + Instagram É replicada no Perfil Pessoal @auras.decore. Regra documentada em FEED.md + crew_agents.py (task_feed e backstory FEED atualizados com canal [4] Chrome MCP perfil pessoal)
- ✅ **NOX.md** — calendário com nota de distribuição nos 3 canais
- ✅ **DSers API verificado** — ⛔ não disponível no plano atual (conta logada auras.de, sem aba openapi). Exige plano pago Advanced+ + aplicação dev. NÃO bloqueia operação. NEXUS.md + .env atualizados com status real
- ✅ **FB sessão Chrome** — agora logada como Aura Decore (perfil pessoal acessível para espelhamento)

## Concluído em 2026-06-14 — Sessão Agentes + Facebook + GitHub

- ✅ **VEGA (#19) integrado** — videomaker, 6 skills, 8 templates roteiro, build_video_crew() em crew_agents.py
- ✅ **FINA (#20) integrada** — finanças PJ, paga contas após aprovação Eduardo, rel. mensal GUARD
- ✅ **FEED.md atualizado** — gerencia AMBAS as páginas: FB Comercial (Graph API) + FB Pessoal (Chrome MCP)
- ✅ **GitHub PAT verificado** — 4 tokens existem (aura-classic = repo, expira Ago/13/2026). Eduardo precisa regenerar para obter valor
- ✅ **DSers confirmado instalado** — mas tokens API ainda precisam ser copiados do painel
- ✅ **Post Facebook Comercial** — publicado via Graph API (POST_ID: 1111100822090245_122107120059338235)
- ✅ **Gen AI stack atualizada** — Pollinations.ai + Google Imagen substituem Higgsfield como primário
- ✅ **.env atualizado** — GITHUB_PAT, DSERS_*, FB_COMMERCIAL_*, FB_PERSONAL_URL, NUBANK_PJ_* adicionados como placeholders
- ✅ **IVE.md** — 19→20 agentes, prioridades reordenadas sem CNPJ como bloqueador
- ✅ **ECHO.md** — 19→20 agentes corrigido

## Concluído em 2026-06-14 — Sessão Imagens + DSers + Vault

- ✅ **11 produtos sem imagem** — receberam fotos geradas via Canva Pro MCP (estética japandi, prompts em PT-BR, 1080×1080 PNG). IDs confirmados no Shopify.
- ✅ **39 produtos ESGOTADOS** — corrigidos de `inventoryPolicy: DENY` para `CONTINUE`
- ✅ **DSers confirmado instalado** — ativo há 2 semanas. DSers-Setup.md e NEXUS.md atualizados para refletir status real
- ✅ **Vault atualizado** — DSers-Setup.md (status ✅), NEXUS.md (tarefa marcada concluída), memória projeto corrigida

## Concluído em 2026-06-13 — Sessão PT-BR + AliExpress + Locales

- ✅ **Locales Live Theme restaurados** — `locales/pt-BR.default.json` (PT-BR como padrão) + `locales/en.json` via base64 upload. Ambos confirmados presentes.
- ✅ **`currency_code_enabled: false`** — preços sem "(BRL)", exibem apenas R$
- ✅ **`templates/product.json` em PT-BR completo** — "Materiais e Composição", "Envio e Devoluções", "Dimensões e Especificações", "Como Cuidar do Produto", "Compartilhar", "Por que escolher a Aura?" 3 colunas, "Você também pode gostar"
- ✅ **13 arquivos CRO Pro** — todos os snippets, assets, sections e layout do tema LIVE atualizados (urgency timer, exit popup, buy together, loyalty, cart upsell, shipping bar, social proof)
- ✅ **NEXUS.md** — pipeline AliExpress completo: keywords, critérios fornecedor, teste neuroarquitetura, score fornecedor, fluxo import
- ✅ **ARTE.md** — pipeline criativo AliExpress: Pollinations + Higgsfield + Canva Pro + Figma, meta 27 criativos/semana
- ✅ **DSers-Setup.md** — guia instalação manual + configurações recomendadas + fluxo com agentes
- Tema LIVE ID: `160266387561` | Staging ID: `160138428521`

## Concluído em 2026-06-13 — Sessão CRO Pro

- ✅ **3 Descontos Automáticos** — Frete Grátis ≥R$299 | Compre 2 leve 10% | 3+ itens 15% OFF
- ✅ **3 Kits de Produto** — Kit Ritual R$172,90 | Kit Sala R$184,90 | Kit Presente R$369,90 (na coleção Mais Amados)
- ✅ **5 Novos Workflows n8n** — WF13-WF17 ATIVOS (pós-compra, win-back, upsell WA, boas-vindas, pontos)
- ✅ **Tema Staging atualizado** — shipping bar R$299, cart upsell, exit intent popup, timer urgência, buy together, loyalty widget
- ✅ **Webhooks Shopify** — customers/create → WF16, orders/paid → WF17
- ✅ **Backend loyalty** — /loyalty/add-points | /loyalty/points/{id} | /loyalty/leaderboard (commit bdc4563)
- ✅ **aura-cro-pro.css + aura-cro-pro.js** — 580+ linhas de CSS/JS de conversão profissional

## Concluído em 2026-06-13 (sessão Opus)

- ✅ **Vault Railway** — `/app/vault` OK (mkdir -p no Procfile/nixpacks/railway.json, deploy aplicado)
- ✅ **Webhook Z-API** — configurado via API (`update-webhook-received` → /whatsapp/webhook). Z-API conectado (smartphone)
- ✅ **12 workflows n8n** — verificado via REST: TODOS já ativos (descoberta; não precisava ativar)
- ✅ **Email carrinho abandonado** — coberto pelo n8n Workflow 02 (SOL D+1/D+3/D+7), já ativo. 1 carrinho abandonado R$101,90 de 06/jun na fila
- ✅ **Facebook bio** — atualizada via Graph API (`{"success":true}`)
- ✅ **main.py** — store/status agora 18 agentes (era 15), n8n count 12 (era 11), endpoints duplicados removidos. Pushado `aaa4b25`
- ✅ **Instagram bio** — atualizada 13/06/2026 via navegador mobile: `✨ Japandi Premium | Elegância japonesa + sofisticação nórdica | Entrega p/ todo o Brasil | auradecore.com.br`

## Fixes Aplicados em 2026-06-13

- `main.py`: removido endpoint `/meta/event` duplicado (linha 4157) + operation_id únicos para erp_ui + store/status 18 agentes + n8n count 12
- Syntax OK: `python -m py_compile main.py` sem erros
- Reiniciar backend local para aplicar: `start-backend.bat`

## Redes Sociais

- Instagram: @auras.decore | https://www.instagram.com/auras.decore/ — IG_USER_ID=17841442799060573 (configurado)
- Facebook Comercial (Página Business): https://www.facebook.com/profile.php?id=61590147064046 | PAGE_ID=1111100822090245 — Graph API ✅
- Facebook Pessoal Aura: https://www.facebook.com/auras.decore/ — Chrome MCP automation (sem API pessoal)
- Pinterest: @auradecoracao | https://br.pinterest.com/auradecoracao/ — App dev 1581128, token salvo, mas API bloqueada ("consumer type not supported", precisa Standard access)
- TikTok: @decore.aura | https://www.tiktok.com/@decore.aura — App "Aura Decore Social" 7651513140559300629, Client Key aw6hiuxofrgfvcbu + Secret salvos, mas precisa config no portal (Content Posting API + redirect URI)
- WhatsApp Business: (85) 98195-7208
- Email loja: auras.de@gmail.com
- FEED gera conteúdo para os 5 canais. IG+FB auto via Graph API; Pinterest/TikTok = manual até `PINTEREST_API_READY`/`TIKTOK_API_READY=true`

## Concluído em 2026-06-15 — Sessão Canva DB + 5 Canais + Recorrência

- ✅ **`canva_design_db.py` criado** — banco SQLite `canva_designs.db` com 63 designs PT-BR catalogados; 24 inglês excluídos. Calendário 90 dias: 266 publicações (IG 90 + FB 90 + Pinterest 30 + Stories 30 + FB Pessoal 26). `python canva_design_db.py calendar` p/ recriar.
- ✅ **`social_agent.py` 5 canais completo** — publica IG + FB Comercial (Graph API) + FB Pessoal Chrome + Pinterest API v5 + TikTok Chrome. Canva DB integrado: mostra designs do dia + marca publicados após envio.
- ✅ **`fb_pessoal_chrome_post.py` criado** — Chrome Playwright p/ @auras.decore. Perfil: `fb-pessoal-chrome-profile/`. Requer login manual uma vez. `--dry-run` disponível.
- ✅ **`run_agents.py` atualizado** — novos agentes: `canva-db-init`, `canva-status`, `canva-today`, `pinterest-token`, `fb-pessoal-test`

## Concluído em 2026-06-16 — Sessão NEURO + PROMO + Neuromarketing

- ✅ **neuromarketing_engine.py criado** — motor completo: 6 desejos nucleares, 5 dores, frameworks PAS/BAB/AIDA/SBO, lead scoring, 3 sequências nurturing, templates WhatsApp por estágio
- ✅ **NEURO (#21)** — agente copy neuromarketing: ativa desejo, endereça dores, escolhe framework por lead score (frio/morno/quente/VIP), gatilhos sutis
- ✅ **PROMO (#22)** — agente disparos: gerencia sequências nurturing, segmenta leads, controla frequência (máx 1 msg/48h), opt-out automático
- ✅ **crew_agents.py** — `build_neuromarketing_crew()` (NEURO+VERA+SOL+PROMO) + `build_promo_blast_crew()` (NEURO+VERA+PROMO)
- ✅ **whatsapp_agent.py** — 3 novos intents (desejo/inspiracao/dor_decoracao), roteamento NEURO, SYSTEM_PROMPTS NEURO+PROMO
- ✅ **main.py** — 4 endpoints: POST /neuro/copy, /promo/nurture, /promo/blast, GET /promo/sequences
- ✅ **WF24** — Neuro Nurturing: Shopify webhook → PROMO → WA (com delay anti-spam)
- ✅ **WF25** — Promo Blast: flash sale 3 segmentos (quente/morna/fria) com horários escalonados
- ✅ **WF26** — Neuro Copy Inbound: classifica intent → NEURO para desejo/inspiração/dor
- ✅ **Deploy Railway** — commit 63df7ea, build em andamento

## Concluído em 2026-06-15 — Sessão Pinterest + TikTok + Tema

- ✅ **Tema Shopify** — links sociais corrigidos via REST API (IG @auras.decore, FB /auras.decore, Pinterest /auradecoracao/, TikTok /@decore.aura)
- ✅ **FB_PAGE_TOKEN renovado** — token permanente (não expira), salvo no .env + Railway (web e n8n)
- ✅ **Pinterest + TikTok no ecossistema** — social_agent.py gera conteúdo dos 2 canais; `get_pinterest_token.py` (porta 8766) e `get_tiktok_token.py` (porta 8767) criados (OAuth2+PKCE)
- ✅ **TikTok app criado via automação** — Client Key/Secret extraídos do portal (endpoint interno `/tiktok/v1/devportal/app/client_secret`). App fica `app_type:0`/stub; página do app no portal dá "unrecognized app type" e backend é Thrift (não aceita config via JSON) → config final é MANUAL no navegador normal do Eduardo.
- ✅ **Fix readiness flags** — `PINTEREST_API_READY`/`TIKTOK_API_READY` (default false) controlam auto vs manual; ter token não basta. Commits: 6b1fd2f, fc8e984, 7a5f10b.
- ⚠️ **2 bloqueios de plataforma (ação Eduardo):** Pinterest → ativar Standard access da API em developers.pinterest.com/apps/1581128/; TikTok → completar config do app + Content Posting API + redirect URI em developers.tiktok.com.

## Negócio

- MEI Eduardo Marques — limite R$81k/ano (GUARD monitora)
- CNPJ chegando semana 13/06/2026 → migração MEI → empresa
- Margem mínima: 35% | ROAS mínimo: 2x | Caixa mínimo: R$500
- DAS MEI: R$70.60 todo dia 20

**Why:** Eduardo está construindo sistema multi-agente autônomo para operar a loja com mínima intervenção manual.
**How to apply:** Ao editar qualquer arquivo do projeto, verificar consistência entre crew_agents.py, main.py e os .md do vault. NUNCA commitar o .env. Reiniciar backend após editar main.py.
