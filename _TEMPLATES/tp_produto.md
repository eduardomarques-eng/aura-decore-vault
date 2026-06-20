---
type: produto
nome: "<% tp.file.title %>"
sku: 
categoria: 
subcategoria: 
fornecedor: 
plataforma_fornecedor: 
custo: 0
frete_fornecedor: 0
custo_embalagem: 0
preco_venda: 0
margem_percentual: 0
estoque_atual: 0
estoque_minimo: 5
status: ativo
peso_gramas: 0
destaque: false
shopify_id: 
dropi_id: 
tags: [produto, catalogo]
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
---

# 🏷️ <% tp.file.title %>

## 📸 Imagens do Produto
> Adicionar imagens abaixo:
![[]]

---

## 📝 Descrições

### Descrição Curta (E-commerce / Shopify)
> 

### Descrição Completa
> 

### Copy Instagram (por VERA)
> 

### Copy WhatsApp (para LENA usar)
> 

---

## 📐 Especificações Técnicas

| Atributo | Detalhe |
|----------|---------|
| Material | |
| Dimensões (CxLxA) | cm |
| Peso | g |
| Cor(es) | |
| Acabamento | |
| Origem | |
| Estilo | Japandi / Escandinavo / Minimalista |

---

## 💰 Precificação (Agente KAI)

| Item | Valor |
|------|-------|
| Custo unitário | R$ `= this.custo` |
| Frete do fornecedor | R$ `= this.frete_fornecedor` |
| Embalagem | R$ `= this.custo_embalagem` |
| **Custo total** | R$ `= this.custo + this.frete_fornecedor + this.custo_embalagem` |
| **Preço de venda** | R$ `= this.preco_venda` |
| **Margem bruta** | `= round((this.preco_venda - this.custo - this.frete_fornecedor - this.custo_embalagem) / this.preco_venda * 100, 1)`% |
| **Lucro por unidade** | R$ `= round(this.preco_venda - this.custo - this.frete_fornecedor - this.custo_embalagem, 2)` |

> [!warning] Margem mínima recomendada: **50%** (definido por GUARD)

---

## 📦 Fornecedor

| Campo | Dado |
|-------|------|
| Fornecedor | `= this.fornecedor` |
| Plataforma | `= this.plataforma_fornecedor` |
| Prazo de entrega | dias |
| Pedido mínimo | |
| Contato | |
| Link do produto | |

---

## 🛍️ Shopify

| Campo | Dado |
|-------|------|
| Shopify ID | `= this.shopify_id` |
| URL na loja | |
| Coleção | |
| Tags Shopify | |
| SEO Title | |
| SEO Description | |

---

## 📊 Performance de Vendas

```dataview
TABLE WITHOUT ID
  file.link as "Venda",
  date as "Data",
  quantidade as "Qtd",
  valor_total as "Valor"
FROM "Vendas"
WHERE contains(produtos, this.file.name)
SORT date DESC
LIMIT 15
```

---

## 📋 Checklist de Lançamento

- [ ] 📸 Fotos profissionais (ARTE gerou / próprias)
- [ ] ✍️ Descrição aprovada (VERA)
- [ ] 💰 Precificação validada (KAI + GUARD)
- [ ] 🛍️ Cadastrado no Shopify (THEO)
- [ ] 🏷️ Tags e coleção definidos
- [ ] 📱 Post de lançamento criado (NOX)
- [ ] 📅 Post agendado no calendário
- [ ] 💬 Copy WhatsApp para LENA
- [ ] 📌 Pin no Pinterest (REX)
- [ ] 📊 Pixel de conversão configurado

---

## 🔗 Notas Relacionadas
- Fornecedor: [[]]
- Campanha: [[]]
- Posts: [[]]
