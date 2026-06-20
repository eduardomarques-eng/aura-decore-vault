---
type: fornecedor
nome: "<% tp.file.title %>"
plataforma: 
pais_origem: 
prazo_entrega_dias: 0
pedido_minimo: 
forma_pagamento: 
confiabilidade: 
contato: 
url: 
produtos_ativos: 0
status: ativo
tags: [fornecedor, supply-chain]
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
---

# 🏭 Fornecedor: <% tp.file.title %>

## 📋 Dados Gerais

| Campo | Dado |
|-------|------|
| **Plataforma** | `= this.plataforma` |
| **País de origem** | `= this.pais_origem` |
| **Prazo de entrega** | `= this.prazo_entrega_dias` dias |
| **Pedido mínimo** | `= this.pedido_minimo` |
| **Pagamento** | `= this.forma_pagamento` |
| **Confiabilidade** | `= this.confiabilidade` /5 ⭐ |
| **Contato** | `= this.contato` |
| **URL** | `= this.url` |

---

## 📦 Produtos deste Fornecedor

```dataview
TABLE WITHOUT ID
  file.link as "Produto",
  preco_venda as "Preço Venda",
  custo as "Custo",
  estoque_atual as "Estoque",
  status as "Status"
FROM "Produtos"
WHERE fornecedor = this.nome
SORT file.name ASC
```

---

## 📝 Histórico & Avaliação

### Pontos Positivos
- 

### Pontos Negativos
- 

### Histórico de Pedidos

| Data | Pedido | Valor | Prazo Real | Qualidade |
|------|--------|-------|------------|-----------|
| | | R$ | dias | ⭐ /5 |

---

## 📎 Notas
> 
