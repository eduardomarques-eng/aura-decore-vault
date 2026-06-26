---
tipo: manutencao-diaria
data: 2026-06-26
score: 7.5/10
status: degradado
responsaveis: ECHO, PIPE, DEV, THEO
---

# ⚠️ Relatório de Manutenção — 2026-06-26

**Score Dashboard:** 7.5/10 (6/8 checks passing)
**Status:** DEGRADADO
**Horário:** 2026-06-26 11:00

## 📊 Health Checks

| Componente | Status | Descrição | HTTP |
|------------|--------|-----------|------|
| backend_health | ✅ | Backend FastAPI online | 200 |
| agents_endpoint | ❌ | 20 agentes carregados | 500 |
| kaizen_endpoint | ✅ | Sistema Kaizen respondendo | 200 |
| store_status | ✅ | Dados da loja atualizados | 200 |
| events_sse | ❌ | SSE de eventos ativo | 0 |
| terminal_stream | ✅ | Terminal streaming ok (via health) | 200 |
| social_status | ✅ | Integração social ok | 200 |
| activity_log | ✅ | Log de atividade ok | 200 |

## 🔧 Ações Executadas

- DETECTADO: agents_endpoint falhou (20 agentes carregados) — registrado para DEV/PIPE
- DETECTADO: events_sse falhou (SSE de eventos ativo) — registrado para DEV/PIPE
- AÇÃO PIPE: SSE /events offline — verificar EventSource no Railway

## 👥 Agentes Responsáveis

| Agente | Papel |
|--------|-------|
| ECHO | Auditor diário — roda health check e gera relatório |
| PIPE | Mantém endpoints, webhooks e workflows n8n ativos |
| DEV | Detecta bugs no dashboard e propõe correções de código |
| THEO | Atualiza dados da loja (produtos, estoque, pedidos) no dashboard |

## 📅 Próximo Ciclo
Amanhã às 08h00 (automático via Railway cron)

---
*Gerado automaticamente — Aura Decore Maintenance System*
