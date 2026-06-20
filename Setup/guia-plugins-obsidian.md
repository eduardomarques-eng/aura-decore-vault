# 🔌 Guia de Configuração de Plugins — Obsidian Aura Decore

> Guia completo para instalar e configurar todos os plugins do vault.
> Última atualização: 20/06/2026

---

## 🔴 Plugins CRÍTICOS (Instalar Primeiro)

### 1. Dataview
**Instalar:** Settings → Community Plugins → Browse → "Dataview" → Install → Enable

**Configuração:**
```
Settings → Dataview:
  ✅ Enable JavaScript Queries
  ✅ Enable Inline Queries  
  ✅ Enable Inline Field Highlighting
  Refresh Interval: 2500
  Date Format: dd/MM/yyyy
  Date + Time Format: dd/MM/yyyy HH:mm
```

> [!important] Sem o Dataview, o Dashboard e todos os templates com queries dinâmicas não funcionam.

---

### 2. Templater
**Instalar:** Community Plugins → "Templater" → Install → Enable

**Configuração:**
```
Settings → Templater:
  Template Folder Location: _TEMPLATES
  ✅ Trigger Templater on New File Creation
  ✅ Enable Folder Templates
```

**Folder Templates (configurar manualmente):**

| Pasta | Template |
|-------|---------|
| `Daily Notes/` | `_TEMPLATES/tp_daily_note.md` |
| `Produtos/` | `_TEMPLATES/tp_produto.md` |
| `Vendas/Leads/` | `_TEMPLATES/tp_lead.md` |
| `Workflows/` | `_TEMPLATES/tp_workflow.md` |
| `Agentes/` | `_TEMPLATES/tp_agente.md` |
| `Relatorios/` | `_TEMPLATES/tp_relatorio.md` |
| `Prompts/` | `_TEMPLATES/tp_prompt.md` |
| `Reunioes/` | `_TEMPLATES/tp_reuniao.md` |
| `Produtos/Fornecedores/` | `_TEMPLATES/tp_fornecedor.md` |

---

### 3. Tasks
**Instalar:** Community Plugins → "Tasks" → Install → Enable

**Configuração:**
```
Settings → Tasks:
  Global Filter: (deixar vazio)
  ✅ Use Filename as Default Date
  Date Format: YYYY-MM-DD
```

---

### 4. Obsidian Git
**Instalar:** Community Plugins → "Obsidian Git" → Install → Enable

**Configuração:**
```
Settings → Obsidian Git:
  ✅ Auto Backup after stop editing: 10 minutes
  ✅ Auto Pull Interval: 60 minutes  
  Commit Message: "vault-backup: {{date}}"
  ✅ Push on Backup
  ✅ Pull Updates on Startup
  ✅ Disable Push Notifications
```

**Setup inicial (se ainda não configurado):**
```bash
cd "C:\Users\erick\AURA-decor-vault"
git init
git remote add origin https://github.com/[seu-usuario]/aura-decore-vault.git
git add .
git commit -m "initial vault commit"
git push -u origin main
```

---

### 5. QuickAdd
**Instalar:** Community Plugins → "QuickAdd" → Install → Enable

**Configurar Macros:**

| Macro | Tipo | Ação |
|-------|------|------|
| 📝 Nova Daily Note | Template | Criar em `Daily Notes/` com `tp_daily_note` |
| 👤 Novo Lead | Template | Criar em `Vendas/Leads/` com `tp_lead` |
| 📦 Novo Produto | Template | Criar em `Produtos/` com `tp_produto` |
| ⚙️ Novo Workflow | Template | Criar em `Workflows/` com `tp_workflow` |
| 💡 Captura Rápida | Capture | Append em `00 - INBOX/inbox.md` |
| 📊 Novo Relatório | Template | Criar em `Relatorios/` com `tp_relatorio` |

**Como configurar QuickAdd Capture (Inbox Rápido):**
1. Settings → QuickAdd → Add Choice → "💡 Captura Rápida" → Type: Capture
2. File Path: `00 - INBOX/inbox.md`
3. ✅ Create file if it doesn't exist
4. Capture format: `- [ ] {{value}} — *{{DATE:DD/MM HH:mm}}*`
5. Assign hotkey: `Ctrl+Shift+I`

---

### 6. Calendar
**Instalar:** Community Plugins → "Calendar" → Install → Enable

**Configuração:**
```
Settings → Calendar:
  ✅ Show Week Number
  Start Week On: Monday
  Words Per Dot: 250
  Note Folder: Daily Notes
  Note Format: YYYY-MM-DD
```

---

### 7. Homepage
**Instalar:** Community Plugins → "Homepage" → Install → Enable

**Configuração:**
```
Settings → Homepage:
  Homepage: _CANVAS/🏠 Dashboard
  Open on Startup: ✅
  Open Mode: Replace all open notes
```

---

## 🟡 Plugins IMPORTANTES

### 8. Periodic Notes
**Configuração:**
```
Daily Notes:
  Format: YYYY-MM-DD
  Folder: Daily Notes
  Template: _TEMPLATES/tp_daily_note.md

Weekly Notes:
  Format: YYYY-[W]WW
  Folder: Daily Notes
  Template: _TEMPLATES/tp_weekly_note.md
```

### 9. Metadata Menu
- Permite editar frontmatter visualmente
- Configurar fileClasses para cada `type:` (produto, lead, workflow, etc.)

### 10. Kanban
- Criar boards para pipeline de vendas, pipeline de conteúdo
- Recomendado: criar `_CANVAS/Kanban-Vendas.md` e `_CANVAS/Kanban-Conteudo.md`

### 11. Buttons
- Permite criar botões de ação inline (ex: "Marcar como fechado", "Enviar follow-up")

### 12. Style Settings
- Instalar junto com o tema **Minimal Theme** para customização visual avançada

---

## 🟢 Plugins ÚTEIS

### 13. Iconize
- Adicionar ícones às pastas (🤖 Agentes, 📦 Produtos, 💰 Vendas, etc.)

### 14. Excalidraw
- Desenhos, fluxogramas visuais, moodboards

### 15. DB Folder
- Transformar pastas em databases visuais tipo Notion

### 16. Omnisearch
- Busca full-text muito mais rápida que a busca nativa

### 17. Linter
- Padronização automática de formatação markdown

### 18. Advanced URI
- URLs customizadas para abrir notas específicas (usado pelo n8n)
- Formato: `obsidian://advanced-uri?vault=AURA-decor-vault&filepath=...`

### 19. Local REST API
- API REST para integração com n8n
- Port: 27123
- Gerar API Key nas configurações
- ⚠️ Necessário para integração n8n ↔ Obsidian

### 20. Minimal Theme (Tema, não plugin)
**Instalar:** Settings → Appearance → Themes → Browse → "Minimal"
- Tema limpo e profissional
- Combina com Style Settings para customização

---

## ⌨️ Hotkeys Recomendadas

| Ação | Hotkey |
|------|--------|
| QuickAdd: Captura Rápida | `Ctrl+Shift+I` |
| QuickAdd: Novo Lead | `Ctrl+Shift+L` |
| QuickAdd: Novo Produto | `Ctrl+Shift+P` |
| Abrir Dashboard | `Ctrl+Shift+H` |
| Abrir Daily Note (hoje) | `Ctrl+Shift+D` |
| Command Palette | `Ctrl+P` |
| Busca Global | `Ctrl+Shift+F` |
| Toggle Sidebar | `Ctrl+B` |

---

## 📋 Ordem de Instalação Recomendada

1. ✅ Dataview
2. ✅ Templater  
3. ✅ Tasks
4. ✅ Calendar
5. ✅ Periodic Notes
6. ✅ Homepage
7. ✅ QuickAdd
8. ✅ Obsidian Git
9. ✅ Metadata Menu
10. ✅ Kanban
11. ✅ Buttons
12. ✅ Style Settings + Minimal Theme
13. ✅ Iconize
14. ✅ Local REST API
15. ✅ Advanced URI
16. ✅ Omnisearch
17. ✅ Linter
18. ✅ DB Folder
19. ✅ Excalidraw

> Após instalar todos, **reinicie o Obsidian** e verifique o Dashboard.
