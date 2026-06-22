# CLAUDE.md — Arquivo Mestre Aura Decore
> Cérebro técnico, estratégico e operacional. Leia SEMPRE antes de agir.
> **Fonte da verdade dos agentes:** `Agentes/_INDEX.md` (canônico). `.claude/agents/` são espelhos leves.

## DNA da Empresa

**Nome**: Aura Decore · **Nicho**: Decoração **Japandi** (minimalismo japonês + aconchego escandinavo)
**Modelo**: E-commerce Shopify + Low Ticket · **URL**: auradecore.com.br
**Persona**: Ana Clara (ver `@memory/persona-ana-clara.md`)
**Fase**: Operacional desde 30/05/2026. Loja 100% online. Aguardando primeiras vendas pagas.

## Infraestrutura REAL

| Componente | Valor |
|-----------|-------|
| Backend API | http://localhost:8000 (porta 8000) |
| Dashboard PC / Mobile | /index.html · /mobile |
| WhatsApp | WPPConnect porta 21465 (LENA) |
| n8n | porta 5678 · 22/22 workflows ATIVOS |
| Shopify store | `10ei3t-sf.myshopify.com` |
| Tema live | "Aura Decore - Cursor Dinâmico" (160266387561) |
| Portfólio | 89 produtos ACTIVE · 100% publicados |
| Analytics | Windsor.ai (FB, IG orgânico + público; Shopify/GSC/GA4 pendentes) |
| Sync | Antigravity IDE + Claude Code + GitHub |

## Cascata de LLM (automática)

1. **Groq** (Llama 3.3 70B) — primário, grátis, ~1.7s
2. **Anthropic** — Opus 4.7 (IVE/GUARD), Sonnet 4.6 (demais)
3. **Ollama** (llama3.2 local) — offline/sem créditos
4. **smart_fallback** (palavras-chave) — último recurso

## Os 22 Agentes (resumo — detalhe em `Agentes/_INDEX.md`)

| ID | Função | Modelo |
|----|--------|--------|
| IVE | CEO · Estratégia | Opus 4.7 |
| GUARD | Protetor Financeiro · MEI | Opus 4.7 |
| NEXUS | Mineração · Produtos | Sonnet 4.6 |
| ECHO | Auditor · Semanal | Sonnet 4.6 |
| THEO | Shopify · Técnico | Sonnet 4.6 |
| KAI | Curadoria · Portfólio | Sonnet 4.6 |
| VERA | Copy · Textos | Sonnet 4.6 |
| LUNA | Design · Visual | Sonnet 4.6 |
| NOX | Conteúdo · Reels | Sonnet 4.6 |
| REX | Tráfego · Meta Ads | Sonnet 4.6 |
| LENA | Atendimento · CX | Sonnet 4.6 |
| SOL | Vendas · CRO | Sonnet 4.6 |
| ZARA | Community · Engagement | Sonnet 4.6 |
| MIRA | SEO · Pesquisa | Sonnet 4.6 |
| PIPE | Automação · n8n | Sonnet 4.6 |
| ARTE | Criativo · Imagens IA | Sonnet 4.6 |
| FEED | Publicador · Redes | Sonnet 4.6 |
| DEV | Dev Shopify Sazonal | Sonnet 4.6 |
| VEGA | Videomaker · Motion | Sonnet 4.6 |
| FINA | Finanças PJ · Pagamentos | Sonnet 4.6 |
| NEURO | Copy Neuromarketing | Sonnet 4.6 |
| PROMO | Disparos · Nurturing | Sonnet 4.6 |

### Pipelines críticos
- **IVE** orquestra todos → escala só do Diretor Eduardo
- **GUARD** tem veto financeiro sobre REX/KAI/THEO/LENA/SOL
- **ECHO** audita todos (domingo 20h, WF05) e gera score
- Produto novo: **NEXUS→KAI→VERA→LUNA→NOX**
- Venda: **SOL→VERA→LENA** · SEO: **MIRA→VERA→THEO**
- Imagens diárias: **KAI→ARTE→LUNA→THEO** · Publicação: **ARTE→FEED**
- Vídeo: **VEGA→LUNA→VERA→NOX→REX** · Financeiro: **FINA→GUARD→Eduardo**

## Crews CrewAI (20) — ver `Agentes/_INDEX.md`
`weekly` `content` `audit` `financial` `cx` `mining` `sales` `marketing` `seo` `automation` `design` `social_post` `store_update` `product_images` `shopify_dev` `seasonal_update` `conversion` `video` `neuromarketing` `promo_blast`

## Como acionar (API porta 8000)
```
POST /chat              {"message": "..."}                         # IVE orquestra
POST /crew/run          {"crew_type": "sales", "context": "..."}   # crew específica
POST /agent/exec        {"agent_id": "mira", "message": "..."}     # agente direto
POST /tasks             {"title": "...", "agent_id": "sol"}        # tarefa Kanban
```

## Regras Globais Obrigatórias

1. **TODO conteúdo em PT-BR.** Prompts internos de IA podem ser em EN (qualidade do modelo).
2. **Publicação de redes**: Eduardo é o publicador/aprovador final (FEED prepara).
3. **Imagens**: Pollinations.ai sequencial (1 req, `Start-Sleep 8`). Higgsfield (key pendente).
4. **Captions**: alternar profissional/humanizado + CTA + auradecore.com.br + 8-12 hashtags + música.
5. **n8n PUT**: só `name`/`nodes`/`connections`/`settings` (extras → 400).
6. **Vault**: SEMPRE `C:\Users\erick\AURA-decor-vault` (nunca OneDrive legado).
7. **Segredos**: NUNCA em arquivos versionados. Só em `.env` (gitignored) / Key Vault. Ver `@ports.txt`.
8. **GUARD**: teto MEI R$81.000; reembolso > R$200 precisa aprovação.

## Loop Engineering + Kaizen
```
PLAN → BUILD → MEASURE → LEARN → OPTIMIZE → (PLAN)
```
Auditoria ECHO: domingo 20h (WF05). Mínimo 1 Kaizen/ciclo. Score por agente.

## Conectores
`@agents/` · `@skills/` · `@hooks/` · `@memory/` · `@workflows/` · `@rules.md` · `@stack.md` · `@gotchas.md` · `Agentes/_INDEX.md` (canônico)
