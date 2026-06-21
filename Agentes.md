# 🏠 Aura Decore — Central de Operações
> Atualizado: 2026-06-21 | Fase: **OPERACAO ATIVA** | Meta: R$5.000-8.000/mes lucro liquido ate 2028 | Dominio: **auradecore.com.br**

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
| n8n Local | OK | n8n Azure (22/22 workflows ativos · n8n.auradecore.com.br) |
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
3. **n8n cloud** — Transferir 15 workflows do local para `aura-refugio.app.n8n.cloud` para rodar 24/7 sem PC ligado

# Antigravity — Integracao com o Ecossistema AURA

> Atualizado em: 2026-06-21 | Status: SINCRONIZADO

## O que e o Antigravity
O **Antigravity** e o assistente de IA da Google DeepMind (par de programacao com IA) que tem
**acesso direto** ao ecossistema AURA via filesystem e API.

## Estado Atual dos Servicos (2026-06-21 01:11)

| Servico | Porta | Status | Detalhe |
|---|---|---|---|
| Backend FastAPI | 8000 | ONLINE | 20 agentes, LLM cascade ativo |
| WPPConnect | 21465 | ONLINE | Sessao: CONNECTED |
| Ollama | 11434 | ONLINE | llama3.2 fallback local |
| n8n | 5678 | ONLINE | 22/22 workflows ativos |

## Acesso configurado

| Recurso | O que acessa | Status |
|---|---|---|
| `filesystem` | AURA-decor-vault + projeto aura-office-dashboard | Configurado |
| `backend API` | http://localhost:8000 — 22 agentes, crews, tasks | Ativo |
| `wppconnect` | http://localhost:21465 — WhatsApp sessao aura-decore | Ativo |

## Caminhos do Ecossistema

```
C:\Users\erick\AURA-decor-vault\                <- Vault Obsidian (agentes, tarefas, metricas)
C:\Users\erick\aura-office-dashboard\           <- Projeto principal (backend, workflows, scripts)
C:\Users\erick\aura-office-dashboard\backend\  <- FastAPI (main.py, agentes, LLM engine)
C:\Users\erick\wppconnect-server\               <- Servidor WhatsApp local
```

## Portas do Ecossistema

| Servico | Porta | Funcao |
|---|---|---|
| Backend principal | 8000 | Chat IVE, crews, tasks API, webhook LENA |
| WPPConnect | 21465 | WhatsApp Business — LENA atende aqui |
| Obsidian REST API | 27123 | Leitura/escrita no vault (se plugin ativo) |
| n8n local | 5678 | Automacao de workflows |
| Ollama | 11434 | LLM local (fallback) |

## Como usar o Antigravity com os agentes

### API de Agentes (backend porta 8000)
```python
import httpx, asyncio

async def acionar_agente(agent_id: str, message: str):
    async with httpx.AsyncClient(timeout=60) as hc:
        r = await hc.post("http://localhost:8000/agent/exec",
            json={"agent_id": agent_id, "message": message})
        return r.json()

async def disparar_crew(crew_type: str, context: str):
    async with httpx.AsyncClient(timeout=120) as hc:
        r = await hc.post("http://localhost:8000/crew/run",
            json={"crew_type": crew_type, "context": context})
        return r.json()
```

### Fluxo Recomendado (2026)
```
Antigravity (decisao/codigo)
     |
     v
Backend FastAPI (http://localhost:8000) 
     |--- /agent/exec -> executa agente especifico
     |--- /crew/run   -> dispara crew multi-agente  
     |--- /tasks      -> cria tarefa no vault Kanban
     v
AURA-decor-vault (documentacao sincronizada automaticamente)
     v
Shopify / Instagram / Meta Ads / WhatsApp
```

## Scripts Uteis

| Script | Funcao |
|---|---|
| `watchdog_aura.py` | Guardiao 24/7 — reinicia backend e WPPConnect se caírem |
| `diagnostico_aura.py` | Diagnostico completo de todos os servicos |
| `sync_full_system.py` | Este script — sincronizacao completa |
| `start_aura.bat` | Iniciar todos os servicos com verificacao |
| `INICIAR-WATCHDOG-24h.bat` | Iniciar o watchdog com um clique |
| `CONFIGURAR-AUTOSTART-WATCHDOG.bat` | Registrar watchdog no Task Scheduler |

## LLM Strategy (cascata automatica)
1. **Groq** (Llama 3.3 70B) — primario, ~1.7s, gratuito 100k tokens/dia
2. **OpenRouter** (meta-llama + deepseek free) — fallback gratuito
3. **Google AI** (Gemini 2.5 Flash) — 1500 req/dia gratuito
4. **Anthropic** (Sonnet 4.6) — com creditos
5. **Ollama** (llama3.2 local) — sempre disponivel, offline
6. **Fallback texto fixo** — "Nossa equipe responde em breve"

## Nota Importante
- OPENAI_API_KEY NAO e necessaria — cascata propria nao usa OpenAI
- CREWAI_TELEMETRY_OPT_OUT=true — sempre definir
- Eduardo autorizou autonomia total para postar e executar sem confirmacao

# Memory Index — Aura Decore
> Ultima sincronizacao: 2026-06-21 01:11 | Semana 25/2026

## Status do Sistema (2026-06-21)
- Backend FastAPI: ONLINE porta 8000 — 20 agentes ativos
- WPPConnect sessao 'aura-decore' CONECTADA ao WhatsApp
- n8n LOCAL ATIVO porta 5678 (22/22 workflows ativos)
- Ollama llama3.2: ONLINE porta 11434
- LLM primario: Groq llama-3.3-70b (resposta ~1.7s)
- Watchdog 24/7: watchdog_aura.py (reinicia servicos automaticamente)

## Projetos e Contextos

- [Aura Decore — sistema de agentes](project_aura_decor.md)
  22 agentes ATIVOS. LENA respondendo WhatsApp via webhook /whatsapp/webhook.
  Semana 25/2026: Backend UP, WPPConnect UP, LLM OK (Groq 70B primario).
  n8n: n8n LOCAL ATIVO porta 5678 (22/22 workflows ativos). n8n Railway OFFLINE (limite recursos).
  TikTok OAuth pendente. Pinterest manual.

- [Topologia de dominios e temas da loja](store_domain_topology.md)
  1 loja: auradecore.com.br. Tema live "Cursor Dinamico" 160266387561.
  89 produtos ACTIVE 100% publicados. Publicar = publishablePublish.

- [Postiz self-host na Azure](project_postiz_selfhost.md)
  social.auradecore.com.br ATIVO (Azure ACI). BYPASS: /social/publish-due no FastAPI.
  Tokens validos ate 2026-08-15. TikTok OAuth pendente. Azure containers ativos.

- [Criativos PT-BR + 5 canais](feedback_criativos_ptbr_multicanal.md)
  TODO criativo OBRIGATORIAMENTE em PT-BR. 5 canais. Captions ALTERNANDO profissional/humanizado.
  CTA + auradecore.com.br + 8-12 hashtags + musica em stories.

- [Publicacao autonoma sem verificacao](feedback_postagem_autonoma.md)
  Eduardo autorizou (17/06/2026): programar e postar sem pedir confirmacao. Executar direto.

- [Musica + copy + hashtags](feedback_musica_copy_hashtags.md)
  TODO conteudo SEMPRE com musica ambiente calma/moderna + copy neuromarketing + hashtags atuais.

## Regras para Antigravity/Claude Code (2026-06-21)
1. Backend rodando em http://localhost:8000 — USE para acionar agentes
2. LENA atendendo WhatsApp via /whatsapp/webhook — NAO interrompa
3. LLM cascade: Groq -> OpenRouter -> Google AI -> Anthropic -> Ollama
4. Eduardo autorizou autonomia total — executar e reportar, nao pedir confirmacao
5. Watchdog em watchdog_aura.py — reinicia servicos se caírem
6. CREWAI_TELEMETRY_OPT_OUT=true — sempre definir antes de imports
7. OPENAI_API_KEY nao necessaria — usar apenas LLM cascade proprio

## Comandos Uteis (API Backend)
```bash
# Status dos agentes
GET http://localhost:8000/health

# Acionar agente especifico
POST http://localhost:8000/agent/exec
{"agent_id": "ive", "message": "execute auditoria semanal"}

# Disparar crew
POST http://localhost:8000/crew/run
{"crew_type": "content", "context": "produto: vaso japandi"}

# Webhook LENA (simular mensagem WhatsApp)
POST http://localhost:8000/whatsapp/webhook
{"from": "5511999999@c.us", "body": "Bom dia!", "type": "chat", "fromMe": false}

# Status WPPConnect
GET http://localhost:21465/api/aura-decore/status-session
```

# 📁 Índice do Setup — Aura Decore

> Todos os guias e recursos de configuração do sistema.
> Atualizado: 20/06/2026

---

## 📋 Guias de Configuração

| # | Guia | Descrição | Status |
|---|------|-----------|--------|
| 1 | [[guia-plugins-obsidian]] | Instalação e config de 20 plugins | 📄 Pronto |
| 2 | [[guia-notion-workspace]] | Setup completo do workspace Notion | 📄 Pronto |
| 3 | [[guia-n8n-otimizacao]] | Otimização n8n (local + Railway) | 📄 Pronto |
| 4 | [[guia-integracao-completa]] | Integração Obsidian ↔ Notion ↔ n8n | 📄 Pronto |
| 5 | [[plano-uso-semanal]] | Rotina diária, semanal e mensal | 📄 Pronto |

---

## 🛠️ Scripts e Ferramentas

| Recurso | Descrição |
|---------|-----------|
| [[n8n-autostart.bat]] | Script de auto-start do n8n com variáveis otimizadas |

---

## 📦 Templates Disponíveis

| Template | Pasta Alvo | Atalho |
|----------|-----------|--------|
| `tp_daily_note` | `Daily Notes/` | `Ctrl+Shift+D` |
| `tp_weekly_note` | `Daily Notes/` | — |
| `tp_produto` | `Produtos/` | `Ctrl+Shift+P` |
| `tp_lead` | `Vendas/Leads/` | `Ctrl+Shift+L` |
| `tp_workflow` | `Workflows/` | — |
| `tp_agente` | `Agentes/` | — |
| `tp_crew` | `Agentes/` | — |
| `tp_relatorio` | `Relatorios/` | — |
| `tp_prompt` | `Prompts/` | — |
| `tp_fornecedor` | `Produtos/Fornecedores/` | — |
| `tp_reuniao` | `Reunioes/` | — |

---

## 🔗 Ordem de Implementação

1. ✅ Estrutura de pastas do Obsidian
2. ✅ Templates criados
3. ✅ Dashboard v2.0 criado
4. ⬜ Instalar plugins do Obsidian (manual — seguir guia)
5. ⬜ Configurar Notion workspace (manual — seguir guia)
6. ⬜ Configurar n8n otimizado (seguir guia)
7. ⬜ Configurar integrações (seguir guia)
8. ⬜ Testar end-to-end
