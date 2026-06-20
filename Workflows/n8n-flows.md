# 🔌 Workflows n8n — Aura Decore

> Pasta: `aura-office-dashboard/n8n-workflows/*.json` · Owner: PIPE · Cloud: n8n.cloud

## Como importar
1. Abrir n8n.cloud → projeto AURA
2. Workflows → Import from File → escolher JSON
3. Configurar credenciais (Shopify Admin Token, Z-API, AppMax)
4. Configurar variáveis de ambiente:
   - `SHOPIFY_DOMAIN` (ex: `auradecore.myshopify.com`)
   - `ZAPI_INSTANCE_ID`, `ZAPI_TOKEN`, `ZAPI_CLIENT_TOKEN`
   - `AURA_BACKEND_URL` (URL pública do main.py — Railway ou ngrok)
5. Ativar workflow (toggle "Active")

## Os 5 workflows

| # | Arquivo | Trigger | Cadência | Agente principal | Skills |
|---|---------|---------|----------|------------------|--------|
| 01 | `01-novo-pedido-shopify.json` | Webhook | tempo real | IVE | Order intake, vault log |
| 02 | `02-recuperacao-carrinho.json` | Cron diário 10h | D+1/D+3/D+7 | SOL | CRO recovery, cupons |
| 03 | `03-whatsapp-lena.json` | Webhook Z-API | tempo real | LENA (+ GUARD em reembolso) | HERO framework, escalação |
| 04 | `04-mineracao-semanal.json` | Cron seg 8h | semanal | NEXUS → KAI → VERA | Teste neuroarquitetura |
| 05 | `05-auditoria-domingo.json` | Cron dom 20h | semanal | ECHO (orquestra 15) | Kaizen + score |

## Dependências entre workflows

```
01 (novo pedido) ──► dispara fluxo CX se atraso (ainda manual)
                  └► alimenta dataset KAI/REX para análise

02 (recuperação) ──► usa cupons gerados por SOL/LENA
                  └► loga em vault Tarefas/recovery-*

03 (WhatsApp) ────► escalação automática para GUARD se reembolso
                  └► UGC vai pra ZARA

04 (mineração) ───► output vira tarefas no vault para IVE aprovar
                  └► alimenta ZARA/NOX com produtos novos

05 (auditoria) ───► score por agente vai pro dashboard
                  └► gaps viram tarefas automáticas
```

## Backlog (workflows futuros)

| # | Nome | Trigger | Agente |
|---|------|---------|--------|
| 06 | Pinterest auto-post diário | Cron 19h | NOX |
| 07 | DM Instagram → ZARA tria | Webhook IG | ZARA |
| 08 | SEO weekly report | Cron sex 18h | MIRA |
| 09 | Chargeback AppMax → GUARD | Webhook AppMax | GUARD |
| 10 | Estoque baixo Dropi → KAI | Webhook Dropi | KAI |
| 11 | Review novo → VERA agradece | Webhook Shopify | VERA |
| 12 | Bundle dinâmico checkout | Webhook Shopify | SOL |
| 13 | Email D+30 NPS | Cron diário | LENA |
| 14 | Trending check Pinterest | Cron sex 14h | NEXUS |

## Monitoramento

- Logs de execução: n8n.cloud → Executions tab
- Falhas alertam IVE via `/agent/exec` (workflow `error-handler-v3` planejado)
- PIPE roda `/store/status` diariamente para health-check geral
