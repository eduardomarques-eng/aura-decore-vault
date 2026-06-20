---
tipo: automacao
sistema: manutencao-diaria
responsaveis: ECHO, PIPE, DEV, THEO
frequencia: diaria-08h
---

# 🔧 Sistema de Manutenção Automática do Dashboard

## Como Funciona

O dashboard da Aura Decore se auto-mantém diariamente sem intervenção manual.

### Camadas de Automação

```
08h00 BRT (diário)
    ↓
dashboard_maintenance_scheduler() — asyncio task dentro do FastAPI
    ↓
run_daily_maintenance() — health check de 8 endpoints
    ↓
ECHO analisa → PIPE corrige endpoints → DEV corrige código → THEO atualiza loja
    ↓
Relatório salvo em Vault/Relatorios/Manutencao/
    ↓
Broadcast WebSocket → dashboard atualiza em tempo real
    ↓
DNA dos agentes atualizado com aprendizados
```

## Endpoints de Manutenção

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/dashboard/status` | GET | Status rápido (sem rede) — lê do vault |
| `/dashboard/health` | GET | Health check completo de todos os endpoints |
| `/dashboard/maintain` | POST | Executa ciclo completo de manutenção |
| `/cron/daily-maintenance` | GET | Para chamada externa (n8n, curl, etc.) |

## Checks Automáticos (8 endpoints)

| Check | Endpoint | Responsável |
|-------|----------|-------------|
| Backend online | `/health` | PIPE |
| 20 agentes carregados | `/agents` | DEV |
| Kaizen respondendo | `/agents/kaizen` | DEV |
| Loja atualizada | `/store/status` | THEO |
| SSE eventos ativo | `/events` | PIPE |
| Terminal streaming | `/terminal/stream` | PIPE |
| Integração social | `/social/status` | FEED |
| Log de atividade | `/activity/log` | ECHO |

## Score de Saúde

| Score | Status | Ação |
|-------|--------|------|
| ≥ 8.0/10 | ✅ Saudável | Normal |
| 5.0–7.9 | ⚠️ Degradado | PIPE+DEV acionados em 2h |
| < 5.0 | 🔴 Crítico | IVE notificado imediatamente |

## Configuração n8n (Workflow de Backup)

Além do scheduler interno, configure no n8n como redundância:

**Nó: Schedule Trigger**
- Cron: `0 11 * * *` (11h UTC = 08h BRT)

**Nó: HTTP Request**
- URL: `https://web-production-f1cb5.up.railway.app/cron/daily-maintenance`
- Método: GET
- Timeout: 30s

**Nó: IF (condicional)**
- Condição: `{{ $json.score }} < 7`
- Se verdadeiro: acionar PIPE + DEV via outros nós

## Relatórios Gerados

Cada ciclo gera um arquivo em:
```
Vault/Relatorios/Manutencao/manutencao-YYYY-MM-DD.md
```

Contém: score, health checks, fixes aplicados, agentes acionados.

## Botão Manual no Dashboard

O dashboard tem o botão **🔧 manutenção** nos Quick Commands que dispara o ciclo completo manualmente quando necessário.

## Agentes e suas Responsabilidades

### ECHO — Auditor (Responsável Principal)
- Roda o health check às 08h
- Analisa o score e distribui tarefas
- Gera relatório final para IVE

### PIPE — Automação
- Reinicia endpoints SSE se offline
- Verifica 17 workflows n8n
- Monitora webhooks (Z-API, Meta Graph API)

### DEV — Desenvolvedor  
- Analisa logs do Railway por erros
- Aplica patches de código quando necessário
- Mantém `agent_kaizen.py` e `dashboard_maintenance.py` atualizados

### THEO — Técnico Shopify
- Mantém `/store/status` com dados frescos
- Verifica 89 produtos ACTIVE nos 3 canais
- Monitora tema live ID 160266387561

---
*Criado automaticamente — Aura Decore Maintenance System · 2026-06-15*
