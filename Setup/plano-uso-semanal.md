# 📅 Plano de Uso Semanal — Aura Decore

> Rotina otimizada para máxima produtividade com Obsidian + Notion + n8n.
> Atualizado: 20/06/2026

---

## ⏰ Rotina Diária (Todo Dia)

| Horário | Ação | Ferramenta | Duração |
|---------|------|-----------|---------|
| 08:00 | ☀️ Abrir Obsidian → Criar Daily Note (Ctrl+Shift+D) | Obsidian | 5 min |
| 08:05 | 📊 Revisar Dashboard Notion (leads, estoque, posts) | Notion | 10 min |
| 08:15 | 🫀 Verificar saúde do n8n (heartbeat no Dashboard) | Notion | 2 min |
| 08:20 | 📬 Processar Inbox do Obsidian | Obsidian | 5 min |
| 08:30 | 🎯 Definir 3 prioridades do dia na Daily Note | Obsidian | 5 min |
| 09:00-12:00 | 💪 **Bloco de Trabalho Focado** (conteúdo, produtos, vendas) | Ambos | 3h |
| 12:00 | 📋 Quick review: tarefas pendentes | Obsidian | 5 min |
| 14:00-17:00 | 💪 **Bloco de Trabalho 2** (operações, atendimento) | Ambos | 3h |
| 17:00 | 💬 Revisar conversas da Lena do dia | Obsidian | 10 min |
| 17:30 | ✅ Preencher revisão do dia na Daily Note | Obsidian | 5 min |
| 22:00 | 📊 **[AUTOMÁTICO]** Relatório diário gerado pelo n8n | n8n | Auto |

---

## 📋 Rotina Semanal

### Segunda-feira — 📋 Planejamento + Design

| Hora | Ação | Agentes |
|------|------|---------|
| 08:00 | Criar Weekly Note | — |
| 08:30 | Revisar OKRs e metas da semana | IVE |
| 09:00 | ⚙️ **[AUTO]** Crew `design` executa (8h) | LUNA + ARTE + VERA |
| 09:00 | ⚙️ **[AUTO]** Crew `financial` executa (8h) | GUARD + REX |
| 10:00 | Organizar Kanban de vendas no Notion | — |
| 14:00 | Processar leads da semana anterior | SOL |

### Terça-feira — 🔍 SEO + Loja

| Hora | Ação | Agentes |
|------|------|---------|
| 10:00 | ⚙️ **[AUTO]** Crew `seo` executa | MIRA + VERA + THEO |
| 10:00 | ⚙️ **[AUTO]** Crew `store_update` executa | THEO + VERA + ARTE |
| 14:00 | Revisar keywords e otimizar listings Shopify | MIRA, THEO |
| 16:00 | Atualizar catálogo de produtos no Notion | KAI |

### Quarta-feira — ⛏️ Mineração + Produtos

| Hora | Ação | Agentes |
|------|------|---------|
| 09:00 | ⚙️ **[AUTO]** Crew `mining` executa | NEXUS + KAI + VERA |
| 11:00 | Revisar produtos minerados e decidir importações | KAI, IVE |
| 14:00 | Contato com fornecedores | KAI |
| 16:00 | Atualizar fichas de produto no Obsidian | — |

### Quinta-feira — 📦 Operações

| Hora | Ação | Agentes |
|------|------|---------|
| 09:00 | Verificar alertas de estoque (automático) | n8n |
| 10:00 | Revisar logística e prazos de entrega | — |
| 14:00 | Processos operacionais (embalagem, envio) | — |
| 16:00 | Atualizar SOPs se necessário | — |

### Sexta-feira — 🤖 Automação + Tech

| Hora | Ação | Agentes |
|------|------|---------|
| 09:00 | Manutenção n8n: verificar workflows, erros | PIPE |
| 10:00 | Melhorar prompts e System Prompts dos agentes | — |
| 14:00 | Testar integrações (Obsidian ↔ Notion ↔ n8n) | PIPE |
| 16:00 | Atualizar Biblioteca de Prompts no Notion | — |

### Sábado — 📊 Análise

| Hora | Ação | Agentes |
|------|------|---------|
| 09:00 | Revisar métricas da semana (Notion Dashboard) | — |
| 10:00 | Criar/gerar relatório semanal | IVE, ECHO |
| 11:00 | Analisar ROI de campanhas de marketing | GUARD |
| 14:00 | Preencher Controle Financeiro da semana | FINA |

### Domingo — 💡 Estratégia + Reset

| Hora | Ação | Agentes |
|------|------|---------|
| 10:00 | Estudar tendências de decoração | NEXUS |
| 14:00 | Brainstorm de ideias para próxima semana | — |
| 18:00 | ⚙️ **[AUTO]** Crew `audit` executa | ECHO |
| 20:00 | ⚙️ **[AUTO]** Crew `weekly` executa | 9 agentes |
| 21:00 | Revisar auditoria e planejar ajustes | ECHO, IVE |

---

## 📆 Rotina Mensal

| Semana | Foco | Ações |
|--------|------|-------|
| **Semana 1** | 💰 Fechamento | Fechar financeiro mês anterior, definir metas do mês, gerar relatório mensal |
| **Semana 2** | 📦 Produtos | Revisar catálogo, descontinuar produtos fracos, planejar novos lançamentos |
| **Semana 3** | 📱 Marketing | Analisar ROI de campanhas, ajustar estratégia de conteúdo, planejar promoções |
| **Semana 4** | ⚙️ Tech & Manutenção | Atualizar n8n, revisar todos os workflows, backup completo, revisar agentes |

---

## 🔄 Automações que Rodam Sozinhas (24/7)

| Workflow | Frequência | O que faz |
|----------|-----------|-----------|
| 🫀 Heartbeat | A cada 30min | Monitora saúde do n8n, alerta se crítico |
| 🧹 Limpeza | Diário 3h | Limpa execuções antigas, libera memória |
| 📊 Relatório Diário | Diário 22h | Compila métricas e envia resumo |
| 🤖 Lena WhatsApp | 24/7 (webhook) | Atende clientes no WhatsApp |
| 📦 Alerta Estoque | Diário 9h | Verifica estoque baixo e notifica |
| 🛒 Recovery Carrinho | Diário 10h | Recuperação de carrinhos D+1/D+3/D+7 |
| 📱 Social Post | 3x/dia | Publica conteúdo nas redes |
| ⛏️ Mineração | Semanal (seg 8h) | Encontra novos produtos vencedores |
| 🔍 Auditoria | Semanal (dom 20h) | Score de todos os agentes |

---

## ⚡ Atalhos Rápidos (Obsidian)

| Ação | Atalho |
|------|--------|
| Nova Daily Note | `Ctrl+Shift+D` |
| Novo Lead | `Ctrl+Shift+L` |
| Captura Rápida (Inbox) | `Ctrl+Shift+I` |
| Abrir Dashboard | `Ctrl+Shift+H` |
| Novo Produto | `Ctrl+Shift+P` |
| Command Palette | `Ctrl+P` |
| Busca Global | `Ctrl+Shift+F` |

---

## 📌 Regras de Ouro

1. **Morning Block**: Sempre comece o dia pelo Obsidian (Daily Note) → Notion (Dashboard)
2. **Inbox Zero**: Processe o Inbox do Obsidian pelo menos 1x ao dia
3. **Weekly Review**: Todo domingo à noite, revise a semana e planeje a próxima
4. **Monthly Close**: Na primeira semana de cada mês, feche o financeiro
5. **Automate First**: Se você faz algo mais de 3x, crie um workflow no n8n
6. **Document Everything**: Se não está no Obsidian ou Notion, não existe
7. **Trust but Verify**: Confie nos agentes mas revise seus outputs regularmente
