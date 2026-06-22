# Equipe Aura Decore â€” 22 Agentes

> Atualizado em 2026-06-21 Â· Backend porta 8000 ONLINE Â· Mobile em `/mobile` Â· LLM cascade: Groq -> Claude -> Ollama Â· 22 agentes ativos

## Hierarquia

```
                        EDUARDO (Diretor)
                              â”‚
                            IVE â€” CEO (Opus 4.7)
                              â”‚
        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
       GUARD     ECHO     NEXUS         LENA         PIPE      ZARA
     (Opus 4.7) (Sonnet) (Sonnet)    (Sonnet)    (Sonnet)   (Sonnet)
     FinanÃ§as  Auditor   MineraÃ§Ã£o    Atend.       n8n      Community
        â”‚       â”‚           â”‚           â”‚           â”‚          â”‚
        â””â”€â”€â”€â”   â”‚           â–¼           â”‚           â”‚          â”‚
            â–¼   â–¼          KAI â”€â”€â–º VERA â”€â”€â–º LUNA â”€â”€â–º NOX     SOL
           REX  TODOS    (Sonnet) (Sonnet) (Sonnet) (Sonnet)  (Sonnet)
        (Sonnet)        Produtos  Copy     Design  Reels    Vendas/CRO
        Ads/ROAS           â”‚       â”‚         â”‚      â”‚           â”‚
                           â–¼       â–¼         â–¼      â–¼           â–¼
                          THEO    MIRA      KAI    ZARA       REX
                       (Sonnet)  (Sonnet)
                        Shopify   SEO
```

## Tabela de Agentes (22 total)

| ID | Nome | Modelo | Fallback | FunÃ§Ã£o | Score |
|----|------|--------|----------|--------|-------|
| ive | IVE | **Claude Opus 4.7** | llama3.2 | CEO Â· EstratÃ©gia | 9/10 |
| guard | GUARD | **Claude Opus 4.7** | llama3.2 | Protetor Financeiro Â· MEI | 9/10 |
| nexus | NEXUS | Claude Sonnet 4.6 | llama3.2 | MineraÃ§Ã£o Â· Produtos | 8/10 |
| echo | ECHO | Claude Sonnet 4.6 | llama3.2 | Auditor Â· Semanal | 10/10 |
| theo | THEO | Claude Sonnet 4.6 | llama3.2 | Shopify Â· TÃ©cnico | 8/10 |
| kai | KAI | Claude Sonnet 4.6 | llama3.2 | Curadoria Â· PortfÃ³lio | 7/10 |
| vera | VERA | Claude Sonnet 4.6 | llama3.2 | Copy Â· Textos | 9/10 |
| luna | LUNA | Claude Sonnet 4.6 | llama3.2 | Design Â· Visual | 8/10 |
| nox | NOX | Claude Sonnet 4.6 | llama3.2 | ConteÃºdo Â· Reels | 7/10 |
| rex | REX | Claude Sonnet 4.6 | llama3.2 | TrÃ¡fego Â· Meta Ads | 8/10 |
| lena | LENA | Claude Sonnet 4.6 | llama3.2 | Atendimento Â· CX | 8/10 |
| **sol** | **SOL** | **Claude Sonnet 4.6** | llama3.2 | **Vendas Â· CRO** | novo |
| **zara** | **ZARA** | **Claude Sonnet 4.6** | llama3.2 | **Community Â· Engagement** | novo |
| **mira** | **MIRA** | **Claude Sonnet 4.6** | llama3.2 | **SEO Â· Pesquisa** | novo |
| **pipe** | **PIPE** | **Claude Sonnet 4.6** | llama3.2 | **AutomaÃ§Ã£o Â· n8n** | novo |
| **arte** | **ARTE** | **Claude Sonnet 4.6** | llama3.2 | **Criativo Â· GeraÃ§Ã£o de Imagens IA** | novo |
| **feed** | **FEED** | **Claude Sonnet 4.6** | llama3.2 | **Publicador Â· Redes Sociais** | novo |
| **dev** | **DEV** | **Claude Sonnet 4.6** | â€” | **Desenvolvedor Â· Shopify Sazonal** | novo |
| **vega** | **VEGA** | **Claude Sonnet 4.6** | llama3.2 | **Videomaker Â· Motion Director** | novo |
| **fina** | **FINA** | **Claude Sonnet 4.6** | llama3.2 | **FinanÃ§as Operacional Â· Pagamentos PJ** | novo |
| **neuro** | **NEURO** | **Claude Sonnet 4.6** | llama3.2 | **Copy Neuromarketing Â· Estrategista de Desejo** | novo |
| **promo** | **PROMO** | **Claude Sonnet 4.6** | llama3.2 | **Disparos Promocionais Â· Lead Nurturing** | novo |

**Score crew**: baseline pÃ³s-lanÃ§amento (ECHO calcularÃ¡ apÃ³s primeiras semanas operacionais).
**Novos (2026-05-27)**: ARTE, FEED e DEV (desenvolvedor Shopify com atualizaÃ§Ã£o sazonal automÃ¡tica).
**Novos (2026-06-14)**: VEGA (Videomaker & Motion Director) + FINA (FinanÃ§as PJ & Assinaturas).
**Novos (2026-06-16)**: NEURO (Copy Neuromarketing) + PROMO (Disparos Promocionais & Nurturing).
**Modelos**: IVE e GUARD em Opus 4.7 (decisÃµes crÃ­ticas). Demais em Sonnet 4.6 (operaÃ§Ã£o).
LUNA foi migrada de Haiku â†’ Sonnet em 2026-05-20.

## Crews CrewAI (20 disponÃ­veis)

| Crew | Agentes | Quando usar |
|------|---------|-------------|
| `weekly` | IVE+REX+KAI+VERA+LUNA+NOX+ECHO | Auditoria semanal domingo 20h |
| `content` | VERA+LUNA+NOX | Produzir conteÃºdo de 1 produto |
| `audit` | THEO+REX+ECHO | Auditoria tÃ©cnica pontual |
| `financial` | GUARD+REX | AnÃ¡lise ROAS/MEI/margem |
| `cx` | LENA | Resolver ticket de cliente |
| `mining` | NEXUS+KAI+VERA | Minerar 3 produtos vencedores |
| `sales` | SOL+VERA+REX | Recuperar carrinho + email CRO + retargeting |
| `marketing` | NOX+VERA+ZARA | CalendÃ¡rio IG semanal + captions + engagement |
| `seo` | MIRA+VERA+THEO | Keyword + copy SEO + implementaÃ§Ã£o tÃ©cnica |
| `automation` | PIPE+THEO | Desenhar workflow n8n com validaÃ§Ã£o tÃ©cnica |
| **`design`** | **LUNA+ARTE+VERA** | **Criativo visual completo: briefing + imagem + copy** |
| **`social_post`** | **NOX+ARTE+VERA+FEED** | **Post diÃ¡rio redes sociais (3x/dia) â€” espelha FB Pessoal a partir de agora** |
| **`store_update`** | **THEO+VERA+ARTE** | **Enriquecimento de produtos: HTML + fotos** |
| **`product_images`** | **KAI+ARTE+LUNA+THEO** | **ðŸš¨ MISSÃƒO DIÃRIA: 5â€“7 produtos/dia com 1 capa profissional + 2 lifestyle + fotos fornecedor atÃ© 54 produtos 100% atualizados** |
| **`shopify_dev`** | **DEV+ARTE+VERA** | **Sprint dev: CSS sazonal + hero + deploy** (quarta 9h) |
| **`seasonal_update`** | **DEV+ARTE+VERA** | **Troca sazonal completa** (dia 1 de cada mÃªs) |
| **`conversion`** | **DEV+SOL+VERA** | **Auditoria CRO + implementaÃ§Ã£o** |
| **`video`** | **VEGA+LUNA+VERA+NOX** | **Reel/Story/Ads completo com briefing, assets e publicaÃ§Ã£o** |
| **`neuromarketing`** | **NEURO+VERA+SOL+PROMO** | **Copy de neuromarketing personalizado + oferta para lead** |
| **`promo_blast`** | **NEURO+VERA+PROMO** | **Campanha de flash sale em massa por WhatsApp / email** |

## Como acionar (API Â· porta 8000)

```bash
# Chat direto com IVE (orquestra os outros)
POST http://localhost:8000/chat
{"message": "Execute a auditoria semanal"}

# Disparar crew especÃ­fica
POST http://localhost:8000/crew/run
{"crew_type": "sales", "context": "26 carrinhos abandonados esta semana"}

# Criar tarefa para agente especÃ­fico (vai pro vault como Kanban)
POST http://localhost:8000/tasks
{"title": "RecuperaÃ§Ã£o carrinho D+3", "agent_id": "sol", "execute_now": true}

# ExecuÃ§Ã£o direta sem criar tarefa
POST http://localhost:8000/agent/exec
{"agent_id": "mira", "message": "Pesquisar 5 keywords cauda longa japandi"}

# Dashboard PC
http://localhost:8000/index.html

# Dashboard mobile (executivo)
http://localhost:8000/mobile
```

## Windsor.ai â€” Analytics Unificado (integrado 2026-06-03)

| Endpoint | Dados | Agentes |
|----------|-------|---------|
| `GET /windsor/status` | Conectores ativos e pendentes | IVE |
| `GET /windsor/metrics?days=7` | Resumo consolidado (Shopify + IG + FB + GSC) | ECHO, GUARD |
| `GET /windsor/campaigns` | Meta Ads: campanhas, spend, ROAS | GUARD, SOL |
| `GET /windsor/social?days=7` | Instagram + Facebook OrgÃ¢nico | REX, FEED, ZARA |
| `GET /windsor/seo?days=30` | Search Console + keywords | MIRA, REX |
| `GET /windsor/agent-brief/{id}` | Brief Windsor formatado por agente | qualquer agente |

**Conectados (2026-06-04):**
- `facebook` â€” Meta Ads Aura Decore (ativo quando campanhas rodarem)
- `facebook_organic` â€” Insights da Pagina Facebook
- `instagram` â€” Instagram Aura Decore (conta business)
- `instagram_public` â€” Instagram @aura_decoracao (publico)

**Pendente conectar:**
- `shopify` â†’ receita, pedidos, ticket medio (GUARD/ECHO/SOL)
  - Store: `10ei3t-sf.myshopify.com` | Secret: configurado no .env
  - Link OAuth: https://onboard.windsor.ai/token_login?access_token=***REDACTED-ROTACIONAR***&next=/app/shopify
- `searchconsole` â†’ keywords SEO (MIRA) â€” PRIORIDADE MEDIA
- `googleanalytics4` â†’ sessoes, usuarios (MIRA/REX) â€” PRIORIDADE MEDIA

**Setup:** `WINDSOR_API_KEY` + `SHOPIFY_API_SECRET` configurados no `.env`

## LLM Strategy (cascata automÃ¡tica)

1. **Groq** (Llama 3.3 70B) â€” primÃ¡rio, gratuito, rÃ¡pido
2. **Anthropic** (Opus 4.7 para IVE/GUARD, Sonnet 4.6 demais) â€” se Groq falhar
3. **Ollama** (llama3.2 local) â€” se Anthropic falhar (sem crÃ©ditos/offline)
4. **smart_fallback** (palavras-chave) â€” Ãºltimo recurso

## Relacionamentos CrÃ­ticos

- **IVE** orquestra todos â†’ recebe escala apenas do Diretor Eduardo
- **GUARD** tem veto financeiro sobre REX/KAI/THEO/LENA/SOL
- **ECHO** audita todos semanalmente e gera score
- **NEXUS â†’ KAI â†’ VERA â†’ LUNA â†’ NOX** = pipeline de produto novo
- **SOL â†’ VERA â†’ LENA** = pipeline de recuperaÃ§Ã£o de venda
- **MIRA â†’ VERA â†’ THEO** = pipeline de SEO
- **PIPE** orquestra workflows automatizados que disparam outros agentes
- **ZARA + LENA** = front de relacionamento (comunidade + atendimento)
- **LENA â†’ GUARD** = qualquer reembolso > R$200 precisa aprovaÃ§Ã£o
- **DEV â†’ ARTE + VERA** = pipeline de atualizaÃ§Ã£o Shopify sazonal
- **ARTE + FEED** = pipeline visual â†’ publicaÃ§Ã£o autÃ´noma
- **VEGA â†’ LUNA â†’ VERA â†’ NOX â†’ REX** = pipeline completo de vÃ­deo (briefing â†’ assets â†’ copy â†’ publicaÃ§Ã£o â†’ ads)
- **FINA â†’ GUARD â†’ Eduardo** = pipeline financeiro (rastrear â†’ validar â†’ aprovar pagamento)
- **KAI â†’ ARTE â†’ LUNA â†’ THEO** = ðŸš¨ pipeline diÃ¡rio de imagens produto (prioridade â†’ gerar â†’ aprovar â†’ subir Shopify)

## Estado Atual (2026-06-21)

> **Fase operacional** â€” loja publica desde 30/05/2026. Sistema 100% online.
> Backend UP (porta 8000). WPPConnect UP (porta 21465). LENA atendendo WhatsApp.
> LLM primario: Groq 70B (~1.7s resposta). Watchdog 24/7 ativo.
> 22 agentes configurados. Aguardando primeiras vendas pagas.

- Faturamento: pendente (aguardando campanha paga)
- ROAS: â€” (sem campanhas pagas â€” organico ativo)
- CAC: â€” (organico, sem custo)
- MEI acumulado: â€” / R$81.000 (GUARD monitorando)
- Portfolio: **89 produtos ACTIVE Â· 100% publicados**
- Tema live: **"Aura Decore - Cursor Dinamico" (160266387561)**
- Workflows n8n: **22/22 ATIVOS** porta 5678
- Backend: http://localhost:8000 | WPPConnect: http://localhost:21465
- Sincronizado com: Antigravity IDE + Claude Code (2026-06-21 15:38)
