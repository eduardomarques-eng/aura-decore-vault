---
type: weekly
semana: <% tp.date.now("W") %>
periodo: "<% tp.date.now("DD/MM") %> - <% tp.date.now("DD/MM", 6) %>"
meta_faturamento: 0
faturamento_real: 0
energia_media: 
tags: [weekly, planejamento]
created: <% tp.date.now("YYYY-MM-DD") %>
---

# 📅 Semana <% tp.date.now("W") %> — <% tp.date.now("DD/MM") %> a <% tp.date.now("DD/MM", 6) %>

---

## 🎯 Objetivos da Semana

### Prioridade Máxima (DEVE ser feito)
1. [ ] 
2. [ ] 
3. [ ] 

### Importante (DEVERIA ser feito)
1. [ ] 
2. [ ] 

### Bônus (PODERIA ser feito)
1. [ ] 

---

## 📊 Metas Semanais

| Métrica | Meta | Seg | Ter | Qua | Qui | Sex | Sab | Dom | **Total** |
|---------|------|-----|-----|-----|-----|-----|-----|-----|-----------|
| Faturamento | R$ | | | | | | | | R$ |
| Leads | | | | | | | | | |
| Conversões | | | | | | | | | |
| Posts | 21 | | | | | | | | |
| Carrinhos recup. | | | | | | | | | |

---

## 🤖 Crews Agendadas

| Dia | Crew | Horário | Status |
|-----|------|---------|--------|
| Seg | `design` | 8h | [ ] |
| Seg | `financial` | 8h | [ ] |
| Ter | `seo` + `store_update` | 10h | [ ] |
| Qua | `mining` | 9h | [ ] |
| Qui | — | — | — |
| Sex | — | — | — |
| Sab | — | — | — |
| Dom | `audit` | 18h | [ ] |
| Dom | `weekly` | 20h | [ ] |

---

## 📋 Daily Notes da Semana

```dataview
TABLE WITHOUT ID
  file.link as "Dia",
  foco_do_dia as "Foco",
  energia as "Energia"
FROM "Daily Notes"
WHERE semana = <% tp.date.now("W") %>
SORT date ASC
```

---

## ✅ Revisão Semanal (Preencher Domingo)

### O que funcionou bem?
- 

### O que não funcionou?
- 

### Lições aprendidas
- 

### Ajustes para próxima semana
- 

---

**← Semana <% tp.date.now("W", -7) %>** · **Semana <% tp.date.now("W", 7) %> →**
