---
cssclass: dashboard
tags: [dashboard, aura-decore]
atualizado: 2026-06-21
---

# 🏠 AURA DECORE — Centro de Controle

> Atualizado automaticamente via Dataview · [[Agentes/_INDEX|Ver stack técnico]]
> Infra: **VM Azure `20.246.5.1` · ZERO Railway · Ollama llama3.2 online**

---

## ⚙️ Status do Sistema (2026-06-21)

| Serviço | Endpoint | Status |
|---|---|---|
| Backend FastAPI + 22 Agentes | `http://aura-backend:8000` (interno) | ✅ ONLINE |
| n8n Workflows | `https://n8n.auradecore.com.br` | ✅ 22/22 ATIVOS |
| WPPConnect (LENA) | `https://wpp.auradecore.com.br` | ✅ CONNECTED |
| Postiz (FEED) | `https://social.auradecore.com.br` | ✅ ATIVO |
| Ollama llama3.2 | `http://ollama:11434` (interno) | ✅ ONLINE |
| Traefik SSL | `https://auradecore.com.br` | ✅ UP |

**LLM Cascade:** Groq 70B ✅ → Anthropic Sonnet/Opus ✅ → Ollama ✅

**Pendências:**
- [ ] DNS A `backend.auradecore.com.br → 20.246.5.1` (Hostinger)
- [ ] `TOGETHER_API_KEY` no `.env` da VM (grátis em api.together.ai)
- [ ] `GITHUB_TOKEN` no `.env` → libera sync n8n↔Obsidian (WF-MEM01/02/03)

---

## 🔗 Tarefas por Agente

```dataview
TABLE WITHOUT ID
  upper(key) AS "Agente",
  length(rows) AS "Total",
  length(filter(rows.status, (s) => s = "concluido")) AS "Concluídas",
  length(filter(rows.status, (s) => s != "concluido")) AS "Abertas"
FROM "Tarefas"
WHERE agent
GROUP BY agent
SORT length(rows) DESC
```

## 📊 Tarefas por Status

```dataview
TABLE WITHOUT ID key AS "Status", length(rows) AS "Qtd"
FROM "Tarefas"
WHERE agent
GROUP BY status
SORT length(rows) DESC
```

---

## 📋 Tarefas de Hoje

```tasks
not done
(scheduled on today) OR (due on today)
sort by priority
group by tags
```

---

## ⏳ Tarefas em Atraso

```tasks
not done
due before today
sort by due
limit 5
```

---

## 👥 Leads Ativos

```dataview
TABLE telefone, status AS "Status", temperatura AS "Temp", ultima_mensagem AS "Última msg"
FROM "Atendimento/Leads"
WHERE status != "fechado" AND status != "perdido"
SORT ultima_mensagem DESC
LIMIT 8
```

---

## 📣 Conteúdo para Publicar

```dataview
TABLE canal, data_publicacao AS "Data", status
FROM "Conteudo-Social" OR "Conteudo/Copys"
WHERE status = "aprovado" OR status = "programado"
SORT data_publicacao ASC
LIMIT 6
```

---

## 🤖 Agentes — Status Diários

```dataview
TABLE file.mtime AS "Última atualização"
FROM "Agentes"
WHERE contains(file.path, "diario")
SORT file.mtime DESC
LIMIT 8
```

---

## 🏃 Sprints e Tarefas por Agente

```dataview
TASK
FROM "Sprints" OR "Tarefas"
WHERE !completed
GROUP BY file.link
SORT priority DESC
LIMIT 20
```

---

## ⚡ Quick Actions

```button
name ➕ Novo Lead
type note(Atendimento/Leads/novo-lead) template
action _TEMPLATES/Leads/lead-template
```

```button
name 📋 Nova Tarefa
type command
action QuickAdd: Adicionar Tarefa
```

```button
name 📊 Relatório do Dia
type note(Relatorios/relatorio-hoje) template
action _TEMPLATES/Agentes/relatorio-agente
```

---

## 🤖 Roster — 22 Agentes (Dataview)

```dataview
TABLE cargo AS "Função", superior AS "Superior", atualizado AS "Atualizado"
FROM "Agentes"
WHERE file.name = "perfil" AND agente
SORT agente ASC
```

---
*Dashboard mantido por Claude Code · Vault: AURA-decor-vault · Azure VM 20.246.5.1 · 2026-06-21*
