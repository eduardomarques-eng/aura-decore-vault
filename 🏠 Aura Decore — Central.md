# 🏠 Aura Decore — Central de Operações
> Atualizado: 2026-06-20 | Fase: **OPERACAO ATIVA** | Meta: R$5.000-8.000/mes lucro liquido ate 2028 | Dominio: **auradecore.com.br**

---

## ⚡ Stack Técnica — Status

| Componente | Status | Detalhe |
|---|---|---|
| Shopify | ✅ LIVE | `10ei3t-sf.myshopify.com` → `auradecore.com.br` — 89 produtos, 11 coleções |
| Domínio customizado | ✅ CONFIGURADO | `auradecore.com.br` com SSL |
| Backend FastAPI | OK RAILWAY + LOCAL | `web-production-f1cb5.up.railway.app` · porta 8000 · 20 agentes |
| Dashboard PC | ✅ LOCAL | `index.html` + `aura-mobile.html` |
| CrewAI | ✅ OK | 18 crews — cascata LLM: Groq→OpenRouter→Google AI→Anthropic→Ollama |
| Groq llama-3.3-70b | ✅ KEY OK | Primário: chat IVE + crews operacionais |
| Anthropic Claude | ✅ KEY OK | IVE/GUARD Opus 4.7 · demais Sonnet 4.6 |
| OpenRouter | ✅ KEY OK | Fallback camada 2 |
| Google AI | ✅ KEY OK | Fallback camada 3 |
| Ollama llama3.2 | OK LOCAL | Fallback local ativo |
| n8n Local | OK | n8n LOCAL (0/0 workflows ativos · porta 5678) |
| n8n Railway | ❌ FALHOU | Limite de recursos esgotado no Railway |
| Cloudflare CMA | ✅ ATIVO LOCAL | Repositório `cloudflare/claude-managed-agents` em execução na porta 8787 |
| Z-API WhatsApp | ✅ CONECTADO | Instância `3F482EF30703B3E9DF097A5987414A01` |
| WPPConnect | [OK] CONNECTED | Sessao `aura-decore` · porta 21465 |
| Facebook Page Token | ✅ LONGA DURAÇÃO | Nunca expira · PAGE token |
| Instagram | ✅ CONECTADO | `@auras.decore` · publish OK |
| Meta Pixel | ✅ CONFIGURADO | ID `1275291704812301` |
| Meta CAPI | ✅ CONFIGURADO | Token ativo |
| Meta Business | ✅ CONFIGURADO | ID `967628666176736` |
| Railway (deploy público) | ⚠️ LIMITE EXCEDIDO | Deploy falha com erro de limite de recursos para redeploys. |
| ERP/CRM | ✅ ATIVO | SQLite `aura_erp.db` · 22 rotas · `/erp-ui` |


---

## 👑 Equipe — 22 Agentes ATIVOS

| Agente | Papel | Modelo | Status |
|---|---|---|---|
| **IVE** | CEO · Estratégia · Orquestra tudo | Opus 4.7 | 🟢 ATIVO |
| **GUARD** | CFO · MEI R$81k · ROAS · Chargebacks | Opus 4.7 | 🟢 ATIVO |
| **THEO** | Shopify · Pixel · PageSpeed · AppMax | Sonnet 4.6 | 🟢 ATIVO |
| **KAI** | Produtos · Margem · Dropi/Habitoo | Sonnet 4.6 | 🟢 ATIVO |
| **VERA** | Copy · Email · SEO copy · Headlines | Sonnet 4.6 | 🟢 ATIVO |
| **LUNA** | Design · Briefing visual · Brand kit | Sonnet 4.6 | 🟢 ATIVO |
| **NOX** | Conteúdo · Reels · Calendário IG | Sonnet 4.6 | 🟢 ATIVO |
| **REX** | Crescimento orgânico · Pinterest · SEO | Sonnet 4.6 | 🟢 ATIVO |
| **ECHO** | Auditor · Score agentes · Health check | Sonnet 4.6 | 🟢 ATIVO |
| **LENA** | CX · Atendimento WhatsApp · Framework HERO | Sonnet 4.6 | 🟢 ATIVO |
| **NEXUS** | Mineração · Tendências · Fornecedores | Sonnet 4.6 | 🟢 ATIVO |
| **SOL** | CRO · Recovery carrinho · Upsell | Sonnet 4.6 | 🟢 ATIVO |
| **ZARA** | Community · DMs · UGC · Micro-inf. | Sonnet 4.6 | 🟢 ATIVO |
| **MIRA** | SEO · Keywords · Search Console | Sonnet 4.6 | 🟢 ATIVO |
| **PIPE** | Automação · n8n · Webhooks · Vault | Sonnet 4.6 | 🟢 ATIVO |
| **ARTE** | Geração imagens IA · Pollinations | Sonnet 4.6 | 🟢 ATIVO |
| **FEED** | Publisher FB+IG · agendamento | Sonnet 4.6 | 🟢 ATIVO |
| **DEV** | Dev pipeline · Shopify themes · código | Sonnet 4.6 | 🟢 ATIVO |
| **VEGA** | Videomaker · Motion Director | Sonnet 4.6 | 🟢 ATIVO |
| **FINA** | Finanças Operacional · Pagamentos PJ | Sonnet 4.6 | 🟢 ATIVO |
| **NEURO** | Copy Neuromarketing · Estrategista de Desejo | Sonnet 4.6 | 🟢 ATIVO |
| **PROMO** | Disparos Promocionais · Lead Nurturing | Sonnet 4.6 | 🟢 ATIVO |

---

## 🚀 Crews — 13 Disponíveis

| Crew | Agentes | Quando |
|---|---|---|
| `weekly` | IVE+GUARD+THEO+KAI+VERA+LUNA+NOX+REX+ECHO | Domingo 20h (n8n wf-05) |
| `financial` | GUARD + REX | Segunda 8h (n8n wf-07) |
| `mining` | NEXUS + KAI + VERA | Quarta 9h (n8n wf-04) |
| `audit` | THEO + REX + ECHO | Domingo 18h (n8n wf-05) |
| `content` | VERA + LUNA + NOX | 3× dia (n8n wf-08) |
| `sales` | SOL + VERA + REX | Recovery D+1/D+3/D+7 (n8n wf-02) |
| `marketing` | NOX + VERA + ZARA | Sob demanda |
| `seo` | MIRA + VERA + THEO | Terça 10h (n8n wf-10) |
| `cx` | LENA (+GUARD/SOL se escalado) | Webhook WhatsApp (n8n wf-03) |
| `automation` | PIPE + THEO | Sob demanda |
| `design` | LUNA + ARTE + VERA | Segunda 8h (n8n wf-09) |
| `social_post` | NOX + ARTE + VERA + FEED | 9h/14h/19h (n8n wf-08) |
| `store_update` | THEO + VERA + ARTE | Terça 10h (n8n wf-10) |

---

## 📋 Tarefas Semana 16–22 Jun 2026

### Em Execução
- [/] `DEV` — Configurações locais integradas de agentes (FastAPI backend + Wrangler dev local CMA)
- [ ] `MIRA` — Keyword research: 20 keywords cauda longa japandi + Pinterest SEO
- [ ] `NOX` — Calendário conteúdo orgânico semana 24 (3 posts/dia)
- [ ] `VERA` — Copy produto destaque semana: vela âmbar + email D+3 cupom AURA10
- [ ] `LUNA` — Pack visual semanal: 3 thumbnails produto + 2 stories fundo
- [ ] `ARTE` — Geração imagens IA Japandi para posts semana
- [ ] `SOL` — Ativar fluxo recovery carrinho D+1/D+3/D+7 (aguarda token Shopify)
- [ ] `KAI` — Avaliar 3 novos SKUs Habitoo para portfólio
- [ ] `NEXUS` — Mineração 5 produtos vencedores Japandi (Habitoo + AliExpress)
- [ ] `ZARA` — Roteiro de DMs para micro-influenciadores @japandihomedecor
- [ ] `ECHO` — Auditoria semanal (domingo 20h) — relatório de saúde do sistema

### Pendentes / Bloqueadores (Ação Eduardo)
- [ ] **Railway** — Fazer upgrade do plano para reativar n8n em nuvem (atualmente offline por limite de recursos)
- [ ] **Windsor** — Conectar Windsor Shopify (OAuth em onboard.windsor.ai)
- [ ] **E-mail** — Ativar e-mail de carrinho abandonado (HTML em email-carrinho-abandonado.html)

### Concluídas ✅
- [x] **PIPE/DEV** — n8n local ativado com todos os 18 workflows (incluindo novos WF24, WF25, WF26) rodando localmente na porta 5678.
- [x] **DEV** — Cloudflare CMA clonado e rodando localmente (`npx wrangler dev --local`) na porta 8787.
- [x] **THEO/GUARD** — Gerado novo SHOPIFY_ADMIN_TOKEN e atualizado no Railway.
- [x] **FEED** — Token de Página Facebook configurado e validado.
- [x] **LENA** — Sincronizado ZAPI_INSTANCE_ID + ZAPI_TOKEN no .env.
- [x] **DEV** — Limpeza do disco C: realizada (liberados ~3.9 GB) deletando bundles compactados do Claude e temporários.
- [x] **THEO** — Pixel Meta + Eventos CAPI ativos e injetados no tema Shopify live.

---

## 🔗 Links Rápidos

| Recurso | URL |
|---|---|
| Loja pública | https://auradecore.com.br |
| Dashboard local | https://localhost:8000 |
| Backend Railway | https://web-production-f1cb5.up.railway.app |
| n8n local | http://localhost:5678 |
| ERP local | https://localhost:8000/erp-ui |
| Instagram | https://www.instagram.com/auras.decore/ |
| Facebook | https://www.facebook.com/profile.php?id=61590147064046 |
| WhatsApp Business | https://wa.me/5585981957208 |

---

## ⚠️ Pendências Manuais (Eduardo)

1. **Ativar email carrinho abandonado** — HTML pronto em `aura-office-dashboard/email-carrinho-abandonado.html`
2. **Trocar 2 banners home** — `editorial_banner_1` e `aura_video_cta` ainda usam fotos Pexels genéricas
3. **Bio redes sociais** — Instagram + Facebook ainda com bio padrão
4. **n8n cloud** — Transferir 15 workflows do local para `aura-refugio.app.n8n.cloud` para rodar 24/7 sem PC ligado
