# 📋 Tarefas — Semana 16–22/06/2026

> Atualizado em 2026-06-18 · Backend 8000 ONLINE · 22 agentes operacionais

---

## ✅ Concluído até hoje

- [x] **PIPE/DEV** — Correção e tratamento dos 15 workflows n8n locais e novos (WF24, WF25, WF26) em `ready-to-import/` com a URL correta do backend.
- [x] **DEV** — Clonagem do repositório `cloudflare/claude-managed-agents` para `scratch/claude-managed-agents`.
- [x] **DEV** — Instalação das dependências (npm install), build de assets (npm run build) e migração local do banco de dados D1 (npm run db:migrate) concluídos com sucesso.
- [x] **ECHO** — Verificação do status do token GitHub Pro e containers Azure ativos sob a conta Estácio.

- [x] **THEO/GUARD** — Gerar novo SHOPIFY_ADMIN_TOKEN no admin Shopify (Concluído e atualizado no Railway!)
- [x] **FEED** — Configurar FB_PAGE_TOKEN correto (OAuth re-autorizado com permissões de anúncios e pixel!)
- [x] **LENA** — Configurar ZAPI_INSTANCE_ID + ZAPI_TOKEN no .env + apontar webhook (Sincronizado no Railway!)

---

## 🔴 Crítico (bloqueadores manuais — Eduardo)

- [ ] **Railway** — Upgrade necessário. O Railway esgotou o limite de recursos gratuito ($5/mês). O n8n do Railway está em status `Failed` e não permite reinicialização.
- [x] **Espaço em disco C:** — Limpeza efetuada! Liberados ~3.9 GB no C: apagando instaladores em Downloads e arquivos `.zst` de vm_bundles do Claude.
- [x] **WhatsApp WPPConnect** — Conectado e pareado com sucesso com o celular da loja.
- [ ] **ECHO** — Conectar Windsor Shopify (OAuth em onboard.windsor.ai)
- [ ] **IVE** — Ativar email carrinho abandonado (HTML pronto em email-carrinho-abandonado.html)


---

## 🔄 Em Andamento esta semana

- [ ] **MIRA** — Keyword research: 20 keywords cauda longa japandi + Pinterest SEO
- [ ] **NOX** — Calendário conteúdo orgânico semana 24 (3 posts/dia)
- [ ] **VERA** — Copy produto destaque semana: vela âmbar + email D+3 cupom AURA10
- [ ] **LUNA** — Pack visual semanal: 3 thumbnails produto + 2 stories fundo
- [ ] **ARTE** — Gerar 5 imagens IA Japandi para posts semana (Pollinations flux)
- [ ] **SOL** — Ativar fluxo recovery carrinho D+1/D+3/D+7 (aguarda token Shopify)
- [ ] **KAI** — Avaliar 3 novos SKUs Habitoo para portfólio
- [ ] **NEXUS** — Minerar 5 produtos vencedores Japandi (Habitoo + AliExpress)
- [ ] **ZARA** — Roteiro de DMs para micro-influenciadores @japandihomedecor @minimalistahome
- [ ] **ECHO** — Auditoria semanal (domingo 20h) — relatório de saúde do sistema

---

## 📅 Próxima semana (16–22/06)

- [ ] **REX** — Estruturar primeira campanha Meta Ads awareness → conversão
- [x] **THEO** — Configurar Pixel Meta + eventos ViewContent/AddToCart/Purchase (Pixel injetado no tema + CAPI ativo!)
- [ ] **GUARD** — Relatório MEI Q2 + projeção de limite R$81k
- [ ] **SOL** — Primeira análise de carrinho abandonado com dados reais
- [x] **PIPE** — Importar e ativar todos os 18 workflows n8n localmente (todos ativos e rodando!)

---

## 📊 Métricas Semana

> Loja pública desde 30/05/2026 — aguardando primeiras vendas orgânicas

| Métrica | Meta S1 | Real |
|---|---|---|
| Seguidores IG | +100 | — |
| Posts publicados | 21 | — |
| Visitas loja | 500 | — |
| Conversão | 1.5% | — |
| Faturamento | R$ 500 | — |

---

## 🤖 Automações Ativas (schedulers em main.py)

| Scheduler | Horário | Agentes |
|---|---|---|
| `social_post_scheduler` | 9h / 14h / 19h | NOX+ARTE+VERA+FEED |
| `design_refresh_scheduler` | Seg 8h | LUNA+ARTE+VERA |
| `store_enrichment_scheduler` | Ter 10h | THEO+VERA+ARTE |
| `shopify_dev_scheduler` | Qua 9h | DEV+ARTE+VERA |
| `seasonal_update_scheduler` | Dia 1/mês | DEV+ARTE+VERA |
| `run_crew_weekly` | Dom 20h | IVE+REX+KAI+VERA+LUNA+NOX+ECHO |
| `autonomous_task_scheduler` | Diário | todos |
| `daily_report_scheduler` | 8h | IVE+ECHO |
