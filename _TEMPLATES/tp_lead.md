---
type: lead
nome: "<% tp.file.title %>"
telefone: 
email: 
origem: 
canal: 
interesse: 
produtos_interesse: []
status: novo
valor_estimado: 0
data_contato: <% tp.date.now("YYYY-MM-DD") %>
proximo_followup: 
atendido_por: Lena
score: 0
tags: [lead, vendas]
created: <% tp.date.now("YYYY-MM-DD") %>
notion_synced: false
---

# 👤 Lead: <% tp.file.title %>

## 📋 Dados do Contato

| Campo | Dado |
|-------|------|
| **Nome** | `= this.nome` |
| **Telefone** | `= this.telefone` |
| **Email** | `= this.email` |
| **Origem** | `= this.origem` |
| **Canal** | `= this.canal` |
| **Data 1° contato** | `= this.data_contato` |
| **Atendido por** | `= this.atendido_por` |

---

## 🎯 Interesse & Qualificação

| Campo | Dado |
|-------|------|
| **Produto(s)** | `= this.interesse` |
| **Valor estimado** | R$ `= this.valor_estimado` |
| **Urgência** | |
| **Orçamento declarado** | |
| **Decisor?** | Sim / Não |
| **Lead Score** | `= this.score` /10 |

### Critérios de Score (GUARD)
- [ ] Tem orçamento definido (+2)
- [ ] Precisa com urgência (+2)
- [ ] É decisor (+2)
- [ ] Engajou mais de 1x (+1)
- [ ] Pediu proposta (+2)
- [ ] Interesse em produto de alto ticket (+1)

---

## 📊 Funil de Vendas

```
  ┌─ Novo ─────── Contatado ─────── Qualificado ─┐
  │                                                │
  │    Proposta Enviada ──── Negociando            │
  │         │                    │                  │
  │    ✅ Fechado            ❌ Perdido             │
  └────────────────────────────────────────────────┘
```

**Status atual:** `= this.status` · **Próximo follow-up:** `= this.proximo_followup`

---

## 💬 Histórico de Interações

### <% tp.date.now("DD/MM/YYYY HH:mm") %> — Primeiro Contato
- **Canal:** `= this.canal`
- **Agente:** `= this.atendido_por`
- **Resumo:** 
- **Tom do cliente:** Interessado / Curioso / Urgente / Frio
- **Próxima ação:** 

---

## 📎 Conversas Salvas (via n8n)

```dataview
LIST
FROM "Agentes/LENA"
WHERE contains(cliente, this.nome)
SORT file.ctime DESC
```

---

## 💰 Proposta (se aplicável)

| Item | Valor |
|------|-------|
| Produto(s) | |
| Valor total | R$ |
| Desconto aplicado | % |
| Cupom usado | |
| Frete | R$ |
| Forma de pagamento | |

---

## 📝 Notas Internas
> Anotações que só a equipe vê (não o cliente)


---

## ✅ Checklist de Follow-up (SOL)

- [ ] Mensagem de boas-vindas enviada
- [ ] Catálogo/link enviado
- [ ] Follow-up D+1 (se não respondeu)
- [ ] Follow-up D+3 (com oferta/cupom)
- [ ] Follow-up D+7 (última tentativa)
- [ ] Resultado registrado (fechou / perdido / adiado)

---

## 🔗 Relacionados
- Proposta: [[]]
- Venda: [[]]
- Produto: [[]]
