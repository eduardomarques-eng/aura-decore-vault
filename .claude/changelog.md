# changelog.md — Histórico de Mudanças Aura Decore

> Formato: `[AAAA-MM-DD] CATEGORIA — descrição`. Mais recente no topo.

## 2026-06

- `[2026-06-21] SEGURANCA` — 🚨 Segredos em plaintext versionados detectados e destrackeados: FB_PAGE_TOKEN, senha Postgres Railway, chave/auth n8n, token Windsor. Arquivos: aura-publisher.cjs, check-stories.cjs, start-n8n.cmd, start-all.cmd, run-publisher.cmd, Logs/*, _INDEX.md (token redigido). `.gitignore` ampliado. **ROTAÇÃO DE TOKENS PENDENTE (Eduardo).**
- `[2026-06-21] AGENTES` — Realinhado `.claude/agents/` à fonte canônica `Agentes/_INDEX.md`: 11 papéis errados (incl. OTTO inexistente) → 22 agentes corretos (espelhos leves). CLAUDE.md + stack.md + settings.json corrigidos com infra real (backend :8000, store 10ei3t-sf, cascata LLM Groq→Anthropic→Ollama).
- `[2026-06-21] FIX` — `Agentes/_INDEX.md` deduplicado (bloco "Estado Atual" repetido 22× → 1; 391→178 linhas).
- `[2026-06-21] ESTRUTURA` — Criada estrutura completa `.claude` (cérebro do projeto): CLAUDE.md, rules, stack, agents, skills, hooks, memory, workflows, prompts, examples.
- `[2026-06-21] LOWTICKET` — Motor Low Ticket ATIVADO. Ciclo 1 completo. TOP 5 SKUs (150un). 4 bundles prontos.
- `[2026-06-21] HUB` — Hub Central de Redes Sociais ativado. Eduardo único publicador 2×/dia. 6 agentes de conteúdo (MIRA·LUNA·VEGA·NOX·VERA·IVE).
- `[2026-06-21] CONTEUDO` — Semana 26 (22–28/06) 100% entregue: 7 pacotes + 23 imgs Pollinations + 17 cards Notion.
- `[2026-06-17] POLITICA` — Eduardo autorizou publicação autônoma; SOBRESCRITO p/ redes sociais (21/06): Eduardo é o único publicador.
- `[2026-06] INFRA` — Migração ZERO Railway → 8 containers Azure VM 20.246.5.1. Backend HEALTHY.
- `[2026-06] AUTOMACAO` — 22 workflows n8n ativos. WF26→/agent/exec e WF24→/obsidian/log-metrics corrigidos (fix PUT 400).
- `[2026-06] SOCIAL` — Postiz self-host na Azure ACI. Bypass via aura-publisher.cjs (Task Scheduler) por falha de execução do Temporal.

## Pendências Registradas

- `[ ]` DNS backend.auradecore.com.br
- `[ ]` TikTok OAuth
- `[ ]` Primeira venda real (atual: 0 vendas reais; 1 pedido expirado)
- `[ ]` Migração Google Cloud (Q3/2026)

## Convenções de Categoria

`ESTRUTURA` `INFRA` `AUTOMACAO` `CONTEUDO` `LOWTICKET` `SOCIAL` `SEGURANCA` `POLITICA` `HUB` `KAIZEN`
