---
date: <% tp.date.now("YYYY-MM-DD") %>
type: daily
semana: <% tp.date.now("W") %>
dia: <% tp.date.now("dddd") %>
energia: 
foco_do_dia: 
tags: [daily, aura-decore]
---

# 🌅 Daily Note — <% tp.date.now("DD/MM/YYYY") %> (<% tp.date.now("dddd") %>)

> **Semana** <% tp.date.now("W") %> · **Meta Mensal:** R$5.000-8.000 lucro líquido

---

## 🎯 Foco Principal do Dia
> 

## 📋 Tarefas do Dia

### 🔴 Urgente & Importante
- [ ] 

### 🟡 Importante (não urgente)
- [ ] 

### 🟢 Se der tempo
- [ ] 

---

## 📊 Painel de Indicadores

| Métrica | Valor | Meta |
|---------|-------|------|
| 💰 Faturamento do dia | R$ | R$ |
| 👤 Leads recebidos | | 5+ |
| 🛒 Vendas fechadas | | |
| 📱 Posts publicados | | 3 |
| 🤖 Conversas da Lena | | |
| 🔄 Carrinhos recuperados | | |
| ⭐ Ticket médio | R$ | R$ |

---

## 🤖 Status dos Agentes (Auto-update)

```dataview
TABLE WITHOUT ID
  file.link as "Agente",
  papel as "Papel",
  modelo as "Modelo"
FROM "Agentes"
WHERE type = "agente" AND status = "ativo"
SORT file.name ASC
```

## 📬 Leads de Hoje

```dataview
TABLE WITHOUT ID
  file.link as "Lead",
  origem as "Origem",
  interesse as "Interesse",
  status as "Status",
  valor_estimado as "Valor"
FROM "Vendas/Leads"
WHERE data_contato = date(today)
SORT file.ctime DESC
```

## ⚙️ Execuções n8n Hoje

```dataview
LIST
FROM "Workflows"
WHERE type = "execucao" AND date = date(today)
SORT file.ctime DESC
```

---

## 💡 Ideias & Insights
- 

## 📞 Interações Importantes
| Quem | Canal | Assunto | Follow-up |
|------|-------|---------|-----------|
| | | | |

## 📝 Notas do Dia


---

## ✅ Revisão do Fim do Dia

| Pergunta | Resposta |
|----------|----------|
| O que funcionou bem? | |
| O que pode melhorar? | |
| Algum bloqueador? | |
| Energia (1-10) | |
| Foco mantido? (S/N) | |

---

**← [[<% tp.date.now("YYYY-MM-DD", -1) %>]]** · **[[<% tp.date.now("YYYY-MM-DD", 1) %>]] →**
