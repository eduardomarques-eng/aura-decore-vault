---
type: agente
nome: "<% tp.file.title %>"
papel: 
modelo: 
temperatura: 0.7
max_tokens: 4096
versao: 1.0
status: ativo
canais: []
crew: 
workflows: []
cascata_llm: ["Groq llama-3.3-70b", "OpenRouter", "Google AI", "Anthropic", "Ollama"]
tags: [agente, ia, automacao]
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
---

# 🤖 Agente: <% tp.file.title %>

> **Papel:** `= this.papel` · **Modelo:** `= this.modelo` · **Status:** `= this.status`

---

## 🎯 Missão & Personalidade

**Objetivo principal:**
> 

**Personalidade / Tom de voz:**
> 

**Regra de ouro:**
> 

---

## 📋 System Prompt (v`= this.versao`)

```
[Colar system prompt completo aqui]
```

---

## 🧠 Knowledge Base

### Documentos de referência
- [[]]

### Dados dinâmicos (via n8n)
| Fonte | Descrição | Refresh |
|-------|-----------|---------|
| | | |

---

## ⚙️ Configuração Técnica

| Parâmetro | Valor |
|-----------|-------|
| **Modelo primário** | `= this.modelo` |
| **Cascata LLM** | `= this.cascata_llm` |
| **Temperatura** | `= this.temperatura` |
| **Max Tokens** | `= this.max_tokens` |
| **Canais ativos** | `= this.canais` |
| **Crew** | `= this.crew` |
| **Workflows n8n** | `= this.workflows` |

### Ferramentas (Tools) disponíveis

| Tool | Descrição | Endpoint |
|------|-----------|----------|
| | | |

---

## 🔗 Integrações

| Sistema | Tipo | Detalhe |
|---------|------|---------|
| Backend FastAPI | API | `/agent/exec` |
| n8n | Workflow | |
| Obsidian Vault | Log | |
| Notion | Sync | |

---

## 📊 Métricas de Performance

| Métrica | Esta Semana | Mês |
|---------|-------------|-----|
| Execuções | | |
| Tempo médio resposta | s | s |
| Taxa de sucesso | % | % |
| Erros | | |
| Score ECHO | /100 | /100 |

---

## 📂 Memória e Conexões
- 👤 [[Agentes/<% tp.file.title %>/perfil|Perfil de Configuração]]
- 📔 [[Agentes/<% tp.file.title %>/diario|Diário de Atividades]]
- 🧠 [[Agentes/<% tp.file.title %>/aprendizados|Aprendizados e Insights]]
- 🧬 [[Agentes/<% tp.file.title %>/kaizen-dna|Kaizen DNA]]

## 📋 Quadro de Tarefas Dinâmico (Dataview)

### ⏳ Tarefas Pendentes
```dataview
TABLE status AS "Status", priority AS "Prioridade", created_at AS "Criado"
FROM "Tarefas"
WHERE lower(agent) = lower("<% tp.file.title %>") AND status != "concluido"
SORT created_at DESC
```

### ✅ Tarefas Concluídas
```dataview
TABLE completed_at AS "Concluído", priority AS "Prioridade"
FROM "Tarefas"
WHERE lower(agent) = lower("<% tp.file.title %>") AND status = "concluido"
SORT completed_at DESC
LIMIT 10
```

## 📈 Histórico de Execuções Recentes

```dataview
TABLE WITHOUT ID
  file.link as "Log",
  date as "Data",
  status as "Status",
  duracao as "Duração"
FROM "Logs"
WHERE contains(agente, this.nome)
SORT date DESC
LIMIT 10
```


---

## 🐛 Problemas Conhecidos

| Problema | Impacto | Workaround |
|----------|---------|------------|
| | | |

---

## 💡 Melhorias Planejadas

- [ ] 
- [ ] 
- [ ] 

---

## 📝 Changelog

### v1.0 — <% tp.date.now("DD/MM/YYYY") %>
- Versão inicial do agente

---

## 🔗 Relacionados
- Crew: [[]]
- Workflows: [[]]
- Escalação para: [[]]
