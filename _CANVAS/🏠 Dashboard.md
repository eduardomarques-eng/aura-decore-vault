---
type: dashboard
tags: [dashboard, homepage, central]
cssclass: dashboard
---

# 🏠 Aura Decore — Central de Comando v2.0

> 📅 `= date(today)` · **Fase:** OPERAÇÃO ATIVA · **Meta:** R$5.000-8.000/mês lucro líquido · **Domínio:** [auradecore.com.br](https://auradecore.com.br)

---

## ⚡ Quick Actions

> 📝 [[_TEMPLATES/tp_daily_note|+ Daily Note]] · 👤 [[_TEMPLATES/tp_lead|+ Novo Lead]] · 📦 [[_TEMPLATES/tp_produto|+ Novo Produto]] · ⚙️ [[_TEMPLATES/tp_workflow|+ Workflow]] · 📊 [[_TEMPLATES/tp_relatorio|+ Relatório]] · 🚀 [[_TEMPLATES/tp_crew|+ Nova Crew]] · 💬 [[_TEMPLATES/tp_prompt|+ Novo Prompt]] · 🏭 [[_TEMPLATES/tp_fornecedor|+ Fornecedor]] · 📝 [[_TEMPLATES/tp_reuniao|+ Reunião]]

---

## 🔥 Tarefas Urgentes

```dataview
TASK
FROM ""
WHERE !completed AND (contains(text, "🔴") OR contains(tags, "#urgente"))
SORT file.ctime DESC
LIMIT 10
```

## 📋 Tarefas em Andamento

```dataview
TASK
FROM ""
WHERE !completed AND contains(text, "[/]") = false
LIMIT 15
```

---

## 👑 Equipe — 22 Agentes IA

```dataview
TABLE WITHOUT ID
  file.link as "Agente",
  papel as "Papel",
  modelo as "Modelo",
  status as "Status"
FROM "Agentes"
WHERE type = "agente"
SORT file.name ASC
```

## 🚀 Crews Ativas

```dataview
TABLE WITHOUT ID
  file.link as "Crew",
  agentes as "Agentes",
  cadencia as "Cadência",
  status as "Status"
FROM ""
WHERE type = "crew"
SORT file.name ASC
```

---

## 📬 Leads Recentes (Últimos 7 dias)

```dataview
TABLE WITHOUT ID
  file.link as "Lead",
  origem as "Origem",
  interesse as "Interesse",
  status as "Status",
  valor_estimado as "R$ Est.",
  atendido_por as "Atendente"
FROM "Vendas/Leads"
WHERE date(created) >= date(today) - dur(7 days)
SORT created DESC
LIMIT 10
```

## 📦 Produtos com Estoque Crítico

```dataview
TABLE WITHOUT ID
  file.link as "Produto",
  estoque_atual as "Estoque",
  estoque_minimo as "Mínimo",
  status as "Status"
FROM "Produtos"
WHERE estoque_atual <= estoque_minimo AND status = "ativo"
SORT estoque_atual ASC
```

---

## ⚙️ Workflows n8n Ativos

```dataview
TABLE WITHOUT ID
  file.link as "Workflow",
  workflow_id as "ID",
  trigger as "Trigger",
  frequencia as "Frequência",
  agente_principal as "Agente",
  status as "Status"
FROM "Workflows"
WHERE type = "workflow" AND status = "ativo"
SORT workflow_id ASC
```

---

## 📊 Relatórios Recentes

```dataview
TABLE WITHOUT ID
  file.link as "Relatório",
  periodo as "Período",
  tipo_relatorio as "Tipo",
  responsavel as "Responsável"
FROM "Relatorios"
WHERE type = "relatorio"
SORT created DESC
LIMIT 5
```

---

## 🔗 Links Rápidos

| 🛍️ Loja & Sistemas | 🤖 Ferramentas IA | 📱 Redes Sociais |
|---|---|---|
| [🌐 auradecore.com.br](https://auradecore.com.br) | [⚙️ n8n Local](http://localhost:5678) | [📸 Instagram](https://www.instagram.com/auras.decore/) |
| [🖥️ Dashboard Local](http://localhost:8000) | [🔌 Backend FastAPI](http://localhost:8000/docs) | [📘 Facebook](https://www.facebook.com/profile.php?id=61590147064046) |
| [📦 Shopify Admin](https://10ei3t-sf.myshopify.com/admin) | [🧠 ERP Local](http://localhost:8000/erp-ui) | [💬 WhatsApp](https://wa.me/5585981957208) |

---

## ⚠️ Stack Técnica — Status Atual

| Componente | Status | Detalhe |
|---|---|---|
| Shopify | ✅ LIVE | `auradecore.com.br` — 89 produtos |
| Backend FastAPI | ✅ LOCAL | porta 8000 · 20 agentes |
| CrewAI | ✅ OK | 13 crews — cascata LLM |
| n8n Local | ⚙️ | `n8n start` na porta 5678 |
| Z-API WhatsApp | ✅ | Instância conectada |
| WPPConnect | ✅ | Sessão `aura-decore` |
| Instagram | ✅ | `@auras.decore` |
| Meta Pixel + CAPI | ✅ | Configurados |
| ERP SQLite | ✅ | 22 rotas |

---

## 📁 Mapa do Vault

| Pasta | Conteúdo | Template |
|-------|----------|----------|
| 📥 [[00 - INBOX]] | Ideias e capturas rápidas | — |
| 📅 [[Daily Notes]] | Diário operacional | `tp_daily_note` |
| 🎯 [[Estrategia]] | Branding, posicionamento, OKRs | — |
| 📦 [[Produtos]] | Catálogo, fornecedores, precificação | `tp_produto`, `tp_fornecedor` |
| 📱 [[Marketing]] | Conteúdo, campanhas, SEO, métricas | — |
| 💰 [[Vendas]] | Leads, clientes, propostas | `tp_lead` |
| ⚙️ [[Operacoes]] | Estoque, logística, processos | — |
| 🤖 [[Agentes]] | 22 agentes IA + crews | `tp_agente`, `tp_crew` |
| 🔌 [[Workflows]] | Automações n8n | `tp_workflow` |
| 💬 [[Prompts]] | Biblioteca de prompts | `tp_prompt` |
| 📊 [[Relatorios]] | Relatórios periódicos | `tp_relatorio` |
| 📚 [[Conhecimento]] | Decoração, negócios, tech | — |
| 📝 [[Reunioes]] | Atas e follow-ups | `tp_reuniao` |
| 💵 [[Financeiro]] | Custos, assinaturas, controle MEI | — |
| 📜 [[Logs]] | Activity logs, erros | — |

---

> *Central atualizada em 20/06/2026 · Próxima revisão: Domingo à noite (ECHO audit)*
