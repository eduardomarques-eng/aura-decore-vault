# Sistema de Agentes Aura Decore — Arquitetura Completa
**Implementado:** 2026-05-27

## Novos Módulos

### command_center.py
- Eduardo envia ordem em linguagem natural → POST /command
- IVE decompõe em tarefas por agente (LLM Groq)
- GUARD valida impacto financeiro e riscos (LLM Groq)
- Eduardo confirma → POST /command/{id}/confirm
- Agentes executam simultaneamente com logging no vault
- Arquivo salvo em Decisoes/cmd-{id}-{data}.md

### daily_report.py
- Relatório diário automático às 21h BRT (00h UTC)
- Coleta todas as tasks do dia + comandos + logs do vault
- IVE gera relatório executivo com: resumo, feito, métricas, problemas, decisões, plano amanhã
- Salvo em Relatorios/Diarios/{data}.md + Semanais/semana-{ano}-W{num}.md
- POST /report/daily (disparo manual) | GET /report/daily (último) | GET /report/status (rápido)

### autonomous_tasks.py
- 15 tarefas autônomas, uma por agente, com horários BRT:
  * DEV: 7h health check | ECHO+NEXUS: 8h | VERA: 8h30 | KAI+ARTE: 9h-9h30 | THEO+SOL: 10h-11h
  * LUNA+NOX: segundas 8h-9h | ZARA: terças 9h | LENA+PIPE: quartas 10h-14h | MIRA: quintas 9h | REX: sextas 17h
- GET /autonomous/tasks (lista) | POST /autonomous/run/{task_id} (disparo manual)
- Cada tarefa autônoma ativa o ciclo LLM → resultado → log vault

### agent_memory.py
- Perfis completos dos 15 agentes no vault Obsidian
- log_agent_activity(): diário automático após cada task
- log_learning(): registro de aprendizados
- read_agent_memory(): memória injetada no system prompt antes de cada LLM call
- initialize_vault(): chamado no startup, cria estrutura completa

## Endpoints Novos
POST /command                → Eduardo cria ordem
POST /command/{id}/confirm   → Confirma e executa
POST /command/{id}/cancel    → Cancela
GET  /command/{id}           → Detalhes
GET  /commands               → Lista histórico
POST /report/daily           → Gera relatório agora
GET  /report/daily           → Último relatório
GET  /report/status          → Status rápido do dia
GET  /report/history         → Histórico 7 dias
GET  /autonomous/tasks       → Lista 15 tarefas autônomas
POST /autonomous/run/{id}    → Dispara tarefa manualmente

## Schedulers Ativos
1. agent_activity_loop — presença dos agentes no escritório
2. interaction_loop — interações espontâneas
3. metrics_loop — métricas em tempo real
4. social_post_scheduler — posts 9h/14h/19h
5. design_refresh_scheduler — segunda 8h
6. store_enrichment_scheduler — terça 10h
7. shopify_dev_scheduler — quarta 9h
8. seasonal_update_scheduler — dia 1 mês 7h
9. daily_report_scheduler — 21h BRT (NOVO)
10. autonomous_task_scheduler — monitora 15 horários (NOVO)

## Groq Limite — Opções de Crescimento
- A: Groq Dev Tier /mo → 500k TPD
- B: OpenRouter pay-per-use
- C: Together AI similar ao Groq
- D: Múltiplas contas Groq (fallback)
- E: Anthropic Claude API (chave existe, verificar créditos)
- F: Reduzir tokens (prompts menores)
Cascade atual: groq/70b → groq/8b → anthropic → ollama → fallback

## Próximos Passos
- [ ] FB_PAGE_TOKEN para publicação no Instagram/Facebook
- [ ] Antropic API verificar créditos (mostra offline)
- [ ] Mecanismo de inter-comunicação entre agentes (vault compartilhado)
- [ ] Dashboard visual do Command Center no frontend
- [ ] Notificação WhatsApp (Z-API) para relatório das 21h
