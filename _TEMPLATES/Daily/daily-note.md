---
data: <% tp.date.now("YYYY-MM-DD") %>
dia_semana: <% tp.date.now("dddd", 0, "pt-BR") %>
tipo: daily
tags: [daily, aura-decore]
---

# <% tp.date.now("DD/MM/YYYY — dddd") %>

## Resumo do Dia

> ✍️ Escreva aqui o contexto do dia

---

## Tarefas do Dia

```tasks
not done
scheduled on <% tp.date.now("YYYY-MM-DD") %>
sort by priority
```

## Tarefas em Atraso

```tasks
not done
due before <% tp.date.now("YYYY-MM-DD") %>
sort by due
```

---

## Agentes — Status Hoje

```dataview
TABLE status, ultima_acao, prioridade
FROM "Agentes"
WHERE tipo = "agente"
SORT prioridade DESC
```

---

## Leads Ativos

```dataview
TABLE telefone, status, agente_responsavel, ultima_mensagem
FROM "Atendimento/Leads"
WHERE status = "ativo" OR status = "quente"
SORT file.mtime DESC
LIMIT 10
```

---

## Métricas do Dia

| Métrica | Valor |
|---|---|
| Mensagens WhatsApp | — |
| Pedidos Shopify | — |
| Posts publicados | — |
| Leads novos | — |

---

## Notas / Decisões

- 

---

## Log de Atividade

```dataview
TABLE rows.file.link AS "Atividade"
FROM "Logs"
WHERE contains(file.name, "<% tp.date.now("YYYY-MM-DD") %>")
```
