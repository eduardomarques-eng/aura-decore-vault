# Equipe Aura Decore — 22 Agentes

> Atualizado em 2026-06-21 · Backend porta 8000 ONLINE · Mobile em `/mobile` · LLM cascade: Groq -> Claude -> Ollama · 22 agentes ativos

## Hierarquia

```
                        EDUARDO (Diretor)
                              │
                            IVE — CEO (Opus 4.7)
                              │
        ┌─────────┬────────┬──┴────────┬──────────────┬─────────┐
       GUARD     ECHO     NEXUS         LENA         PIPE      ZARA
     (Opus 4.7) (Sonnet) (Sonnet)    (Sonnet)    (Sonnet)   (Sonnet)
     Finanças  Auditor   Mineração    Atend.       n8n      Community
        │       │           │           │           │          │
        └───┐   │           ▼           │           │          │
            ▼   ▼          KAI ──► VERA ──► LUNA ──► NOX     SOL
           REX  TODOS    (Sonnet) (Sonnet) (Sonnet) (Sonnet)  (Sonnet)
        (Sonnet)        Produtos  Copy     Design  Reels    Vendas/CRO
        Ads/ROAS           │       │         │      │           │
                           ▼       ▼         ▼      ▼           ▼
                          THEO    MIRA      KAI    ZARA       REX
                       (Sonnet)  (Sonnet)
                        Shopify   SEO
```

## Tabela de Agentes (22 total)

| ID | Nome | Modelo | Fallback | Função | Score |
|----|------|--------|----------|--------|-------|
| ive | IVE | **Claude Opus 4.7** | llama3.2 | CEO · Estratégia | 9/10 |
| guard | GUARD | **Claude Opus 4.7** | llama3.2 | Protetor Financeiro · MEI | 9/10 |
| nexus | NEXUS | Claude Sonnet 4.6 | llama3.2 | Mineração · Produtos | 8/10 |
| echo | ECHO | Claude Sonnet 4.6 | llama3.2 | Auditor · Semanal | 10/10 |
| theo | THEO | Claude Sonnet 4.6 | llama3.2 | Shopify · Técnico | 8/10 |
| kai | KAI | Claude Sonnet 4.6 | llama3.2 | Curadoria · Portfólio | 7/10 |
| vera | VERA | Claude Sonnet 4.6 | llama3.2 | Copy · Textos | 9/10 |
| luna | LUNA | Claude Sonnet 4.6 | llama3.2 | Design · Visual | 8/10 |
| nox | NOX | Claude Sonnet 4.6 | llama3.2 | Conteúdo · Reels | 7/10 |
| rex | REX | Claude Sonnet 4.6 | llama3.2 | Tráfego · Meta Ads | 8/10 |
| lena | LENA | Claude Sonnet 4.6 | llama3.2 | Atendimento · CX | 8/10 |
| **sol** | **SOL** | **Claude Sonnet 4.6** | llama3.2 | **Vendas · CRO** | novo |
| **zara** | **ZARA** | **Claude Sonnet 4.6** | llama3.2 | **Community · Engagement** | novo |
| **mira** | **MIRA** | **Claude Sonnet 4.6** | llama3.2 | **SEO · Pesquisa** | novo |
| **pipe** | **PIPE** | **Claude Sonnet 4.6** | llama3.2 | **Automação · n8n** | novo |
| **arte** | **ARTE** | **Claude Sonnet 4.6** | llama3.2 | **Criativo · Geração de Imagens IA** | novo |
| **feed** | **FEED** | **Claude Sonnet 4.6** | llama3.2 | **Publicador · Redes Sociais** | novo |
| **dev** | **DEV** | **Claude Sonnet 4.6** | — | **Desenvolvedor · Shopify Sazonal** | novo |
| **vega** | **VEGA** | **Claude Sonnet 4.6** | llama3.2 | **Videomaker · Motion Director** | novo |
| **fina** | **FINA** | **Claude Sonnet 4.6** | llama3.2 | **Finanças Operacional · Pagamentos PJ** | novo |
| **neuro** | **NEURO** | **Claude Sonnet 4.6** | llama3.2 | **Copy Neuromarketing · Estrategista de Desejo** | novo |
| **promo** | **PROMO** | **Claude Sonnet 4.6** | llama3.2 | **Disparos Promocionais · Lead Nurturing** | novo |

**Score crew**: baseline pós-lançamento (ECHO calculará após primeiras semanas operacionais).
**Novos (2026-05-27)**: ARTE, FEED e DEV (desenvolvedor Shopify com atualização sazonal automática).
**Novos (2026-06-14)**: VEGA (Videomaker & Motion Director) + FINA (Finanças PJ & Assinaturas).
**Novos (2026-06-16)**: NEURO (Copy Neuromarketing) + PROMO (Disparos Promocionais & Nurturing).
**Modelos**: IVE e GUARD em Opus 4.7 (decisões críticas). Demais em Sonnet 4.6 (operação).
LUNA foi migrada de Haiku → Sonnet em 2026-05-20.

## Crews CrewAI (20 disponíveis)

| Crew | Agentes | Quando usar |
|------|---------|-------------|
| `weekly` | IVE+REX+KAI+VERA+LUNA+NOX+ECHO | Auditoria semanal domingo 20h |
| `content` | VERA+LUNA+NOX | Produzir conteúdo de 1 produto |
| `audit` | THEO+REX+ECHO | Auditoria técnica pontual |
| `financial` | GUARD+REX | Análise ROAS/MEI/margem |
| `cx` | LENA | Resolver ticket de cliente |
| `mining` | NEXUS+KAI+VERA | Minerar 3 produtos vencedores |
| `sales` | SOL+VERA+REX | Recuperar carrinho + email CRO + retargeting |
| `marketing` | NOX+VERA+ZARA | Calendário IG semanal + captions + engagement |
| `seo` | MIRA+VERA+THEO | Keyword + copy SEO + implementação técnica |
| `automation` | PIPE+THEO | Desenhar workflow n8n com validação técnica |
| **`design`** | **LUNA+ARTE+VERA** | **Criativo visual completo: briefing + imagem + copy** |
| **`social_post`** | **NOX+ARTE+VERA+FEED** | **Post diário redes sociais (3x/dia) — espelha FB Pessoal a partir de agora** |
| **`store_update`** | **THEO+VERA+ARTE** | **Enriquecimento de produtos: HTML + fotos** |
| **`product_images`** | **KAI+ARTE+LUNA+THEO** | **🚨 MISSÃO DIÁRIA: 5–7 produtos/dia com 1 capa profissional + 2 lifestyle + fotos fornecedor até 54 produtos 100% atualizados** |
| **`shopify_dev`** | **DEV+ARTE+VERA** | **Sprint dev: CSS sazonal + hero + deploy** (quarta 9h) |
| **`seasonal_update`** | **DEV+ARTE+VERA** | **Troca sazonal completa** (dia 1 de cada mês) |
| **`conversion`** | **DEV+SOL+VERA** | **Auditoria CRO + implementação** |
| **`video`** | **VEGA+LUNA+VERA+NOX** | **Reel/Story/Ads completo com briefing, assets e publicação** |
| **`neuromarketing`** | **NEURO+VERA+SOL+PROMO** | **Copy de neuromarketing personalizado + oferta para lead** |
| **`promo_blast`** | **NEURO+VERA+PROMO** | **Campanha de flash sale em massa por WhatsApp / email** |

## Como acionar (API · porta 8000)

```bash
# Chat direto com IVE (orquestra os outros)
POST http://localhost:8000/chat
{"message": "Execute a auditoria semanal"}

# Disparar crew específica
POST http://localhost:8000/crew/run
{"crew_type": "sales", "context": "26 carrinhos abandonados esta semana"}

# Criar tarefa para agente específico (vai pro vault como Kanban)
POST http://localhost:8000/tasks
{"title": "Recuperação carrinho D+3", "agent_id": "sol", "execute_now": true}

# Execução direta sem criar tarefa
POST http://localhost:8000/agent/exec
{"agent_id": "mira", "message": "Pesquisar 5 keywords cauda longa japandi"}

# Dashboard PC
http://localhost:8000/index.html

# Dashboard mobile (executivo)
http://localhost:8000/mobile
```

## Windsor.ai — Analytics Unificado (integrado 2026-06-03)

| Endpoint | Dados | Agentes |
|----------|-------|---------|
| `GET /windsor/status` | Conectores ativos e pendentes | IVE |
| `GET /windsor/metrics?days=7` | Resumo consolidado (Shopify + IG + FB + GSC) | ECHO, GUARD |
| `GET /windsor/campaigns` | Meta Ads: campanhas, spend, ROAS | GUARD, SOL |
| `GET /windsor/social?days=7` | Instagram + Facebook Orgânico | REX, FEED, ZARA |
| `GET /windsor/seo?days=30` | Search Console + keywords | MIRA, REX |
| `GET /windsor/agent-brief/{id}` | Brief Windsor formatado por agente | qualquer agente |

**Conectados (2026-06-04):**
- `facebook` — Meta Ads Aura Decore (ativo quando campanhas rodarem)
- `facebook_organic` — Insights da Pagina Facebook
- `instagram` — Instagram Aura Decore (conta business)
- `instagram_public` — Instagram @aura_decoracao (publico)

**Pendente conectar:**
- `shopify` → receita, pedidos, ticket medio (GUARD/ECHO/SOL)
  - Store: `10ei3t-sf.myshopify.com` | Secret: configurado no .env
  - Link OAuth: https://onboard.windsor.ai/token_login?access_token=cxgWoHigM3wxkaFeycWeCY8JFCLW8H86tUBaVbEUmV&next=/app/shopify
- `searchconsole` → keywords SEO (MIRA) — PRIORIDADE MEDIA
- `googleanalytics4` → sessoes, usuarios (MIRA/REX) — PRIORIDADE MEDIA

**Setup:** `WINDSOR_API_KEY` + `SHOPIFY_API_SECRET` configurados no `.env`

## LLM Strategy (cascata automática)

1. **Groq** (Llama 3.3 70B) — primário, gratuito, rápido
2. **Anthropic** (Opus 4.7 para IVE/GUARD, Sonnet 4.6 demais) — se Groq falhar
3. **Ollama** (llama3.2 local) — se Anthropic falhar (sem créditos/offline)
4. **smart_fallback** (palavras-chave) — último recurso

## Relacionamentos Críticos

- **IVE** orquestra todos → recebe escala apenas do Diretor Eduardo
- **GUARD** tem veto financeiro sobre REX/KAI/THEO/LENA/SOL
- **ECHO** audita todos semanalmente e gera score
- **NEXUS → KAI → VERA → LUNA → NOX** = pipeline de produto novo
- **SOL → VERA → LENA** = pipeline de recuperação de venda
- **MIRA → VERA → THEO** = pipeline de SEO
- **PIPE** orquestra workflows automatizados que disparam outros agentes
- **ZARA + LENA** = front de relacionamento (comunidade + atendimento)
- **LENA → GUARD** = qualquer reembolso > R$200 precisa aprovação
- **DEV → ARTE + VERA** = pipeline de atualização Shopify sazonal
- **ARTE + FEED** = pipeline visual → publicação autônoma
- **VEGA → LUNA → VERA → NOX → REX** = pipeline completo de vídeo (briefing → assets → copy → publicação → ads)
- **FINA → GUARD → Eduardo** = pipeline financeiro (rastrear → validar → aprovar pagamento)
- **KAI → ARTE → LUNA → THEO** = 🚨 pipeline diário de imagens produto (prioridade → gerar → aprovar → subir Shopify)

## Estado Atual (2026-06-21)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **22/22 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-21 12:05)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **22/22 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-21 12:00)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **22/22 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-21 01:11)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-21 00:21)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** (offline)
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-20 23:56)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-20 23:34)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-20 23:07)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-20 22:56)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-20 14:12)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-20 14:11)

> **Fase operacional** — loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: — (sem campanhas pagas — organico ativo)
- CAC: — (organico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE · 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **0/0 ATIVOS** (offline)
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-20 07:49)

> **Fase operacional** — loja pública desde 30/05/2026. Crescimento orgânico ativo.
> 20 agentes configurados. Aguardando primeiras vendas. 1º Reel VEGA em produção.
> **🚨 Missão Diária Ativa:** KAI → ARTE → LUNA → THEO atualizando imagens de produto (5–7/dia).

- Faturamento: — (primeiras vendas orgânicas pendentes)
- ROAS: — (sem campanhas pagas — Pixel validação pendente)
- CAC: — (orgânico, sem custo)
- MEI acumulado: — / R$81.000 (GUARD monitorando)
- Portfólio: **89 produtos ACTIVE · 100% publicados** nos 3 canais (Loja virtual + FB/IG + Google) ✅ (corrigido 2026-06-14: 11 estavam invisíveis)
- Imagens: **~0/89 com pacote profissional completo** (1 img/produto) → missão diária KAI→ARTE→LUNA→THEO
- Tema live: **"Aura Decore - Cursor Dinâmico" (160266387561)** · fonte do corpo aumentada (body_scale 110)
- Próxima auditoria ECHO: domingo 15/06 às 20h (WF05 automático)
- Workflows n8n: **17 ATIVOS** no Railway
- **20 agentes operacionais** · 15 tarefas ativas semana 24
- Backend: http://localhost:8000 | Dashboard: http://localhost:8000/index.html
- Facebook: FB Comercial (Graph API ✅) + FB Pessoal @auras.decore (Chrome MCP — próximos posts)
- Pendências Eduardo: GitHub PAT "aura-classic" regenerar · Nubank PJ abrir (após CNPJ ME)
