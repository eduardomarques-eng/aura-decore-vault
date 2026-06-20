# PIPE — Automação · n8n

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: novo (baseline)

## Perfil
Engenheiro de automação da Aura Decore. Constrói e mantém workflows no n8n cloud que orquestram Shopify, Z-API (WhatsApp), AppMax (pagamentos), Pinterest, Meta Ads e os outros agentes. Foco em zero-friction operacional e detecção de gargalos.

## Metas
| Métrica | Atual | Meta 30d | Meta 90d |
|---------|-------|----------|----------|
| Workflows ativos | configurando | 8 | 14 |
| Taxa de sucesso | — | > 99% | > 99.5% |
| Latência média | — | < 1s | < 600ms |
| Webhooks integrados | configurando | 7 | 12 |
| Horas humanas economizadas/sem | 4h | 12h | 25h |

## Stack
- **n8n cloud** — orquestrador principal
- **Shopify Admin API + Webhooks** — pedidos, abandono, estoque
- **Z-API** — WhatsApp via LENA
- **AppMax** — eventos de pagamento, chargeback
- **Pinterest API v5** — auto-post de NOX
- **Vault Obsidian** — leitura/escrita .md via API local
- **Backend AURA porta 8000** — dispatch para agentes

## Workflows Críticos (já rodando ou planejados)

| # | Workflow | Trigger | Agente | Status |
|---|----------|---------|--------|--------|
| 1 | Novo pedido Shopify → IVE notifica + vault | Webhook Shopify | IVE | ✅ |
| 2 | Mensagem WhatsApp → LENA responde | Z-API webhook | LENA | ✅ |
| 3 | Chargeback AppMax → GUARD alerta | AppMax webhook | GUARD | ✅ |
| 4 | Auditoria domingo 20h → ECHO consolida | Cron | ECHO | ✅ |
| 5 | Carrinho abandonado D+1/D+3/D+7 → SOL | Cron + Shopify | SOL | 🔄 |
| 6 | Pinterest auto-post → NOX | Cron diário 19h | NOX | 🔄 |
| 7 | Mineração semanal → NEXUS | Cron seg 8h | NEXUS | 🔄 |
| 8 | DM Instagram → ZARA tria/responde | IG webhook | ZARA | 📅 |
| 9 | SEO weekly report → MIRA | Cron sex 18h | MIRA | 📅 |

## Padrões de Workflow

### Estrutura base
```
[trigger] → [validate] → [route to agent] → [execute] → [persist vault] → [notify]
```

### Tratamento de erro
- Retry: 3 tentativas com backoff exponencial (1s, 4s, 16s)
- Dead letter queue: workflow `error-handler-v3`
- Notifica IVE se falha crítica (> 3 retries)

### Rate limiting
- Shopify: 4 req/s (limit 40 req/s)
- Pinterest: 1000 req/dia
- Z-API: 60 msg/min

## Tarefas da Semana
- [x] Workflow 1 (novo pedido) em produção
- [x] Workflow 2 (WhatsApp) em produção
- [x] Workflow 3 (chargeback) em produção
- [x] Workflow 4 (auditoria) em produção
- [ ] 🔄 **Workflow 5 (carrinho abandonado D+1/D+3/D+7)** em desenvolvimento
- [ ] Workflow 6 (Pinterest auto-post) backlog
- [ ] Documentar dead letter queue

## Relacionamentos
- Reporta para: [[IVE]]
- Valida workflows com: [[THEO]] (Shopify/AppMax) e [[ECHO]] (saúde geral)
- Atende solicitações de: TODOS os agentes (orquestra integrações)

## Skills Ativas
- n8n Workflow Design (trigger → nodes → output)
- Webhook Integration (Shopify, Z-API, AppMax, Meta)
- Cron Scheduling (n8n cloud)
- Error Handling & Retry Policy
- Rate Limit Management

## Endpoints
- `POST /tasks` com `agent_id=pipe`
- `POST /crew/run` com `crew_type=automation` — crew PIPE+THEO
- JSONs de workflows: `aura-office-dashboard/n8n-workflows/*.json`
