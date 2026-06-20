# 🔗 Guia de Integração — Obsidian ↔ Notion ↔ n8n

> Como conectar as 3 ferramentas para um sistema autônomo e coeso.
> Última atualização: 20/06/2026

---

## 🏗️ Arquitetura da Integração

```
┌─────────────────────────────────────────────────────────────┐
│                    ENTRADAS DE DADOS                         │
│  WhatsApp (Z-API/WPPConnect) · Instagram · Shopify · Site   │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────┐
│                 n8n — MOTOR CENTRAL                          │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────────┐ │
│  │ Agente     │  │ Heartbeat  │  │ Sync Bidirecional      │ │
│  │ LENA       │  │ 🫀 30min   │  │ Obsidian ↔ Notion      │ │
│  └─────┬──────┘  └─────┬──────┘  └───────────┬────────────┘ │
│        │               │                     │               │
└────────┼───────────────┼─────────────────────┼──────────────┘
         │               │                     │
    ┌────┴────┐    ┌─────┴─────┐    ┌─────────┴──────────┐
    ▼         ▼    ▼           ▼    ▼                    ▼
┌────────┐ ┌────────┐  ┌──────────┐  ┌──────────────────────┐
│OBSIDIAN│ │NOTION  │  │OBSIDIAN  │  │NOTION               │
│Lead    │ │CRM DB  │  │Dashboard │  │Dashboard             │
│Note    │ │Update  │  │Update    │  │Status Update         │
└────────┘ └────────┘  └──────────┘  └──────────────────────┘
```

---

## 1️⃣ Integração n8n → Obsidian

### Método Recomendado: GitHub API (mais estável)

O n8n escreve no repositório GitHub do vault, e o Obsidian Git sincroniza automaticamente a cada 10 minutos.

**Fluxo:**
```
n8n → GitHub API (criar/editar arquivo) → GitHub Repo → Obsidian Git (auto-pull) → Vault
```

**Configuração no n8n:**

1. **Criar credencial GitHub:**
   - Settings → Credentials → New → GitHub
   - Personal Access Token com permissão `repo`

2. **Node HTTP Request para criar arquivo:**
```
Method: PUT
URL: https://api.github.com/repos/{owner}/{repo}/contents/{path}
Headers:
  Authorization: Bearer {github_token}
  Accept: application/vnd.github.v3+json
Body (JSON):
{
  "message": "n8n: novo lead - {{$json.nome}}",
  "content": "{{$json.content_base64}}",
  "branch": "main"
}
```

3. **Code Node para preparar conteúdo (antes do HTTP):**
```javascript
const nome = $input.first().json.nome;
const telefone = $input.first().json.telefone || '';
const origem = $input.first().json.origem || 'WhatsApp';
const interesse = $input.first().json.interesse || '';
const hoje = new Date().toISOString().split('T')[0];

const markdown = `---
type: lead
nome: "${nome}"
telefone: "${telefone}"
origem: "${origem}"
interesse: "${interesse}"
status: novo
valor_estimado: 0
data_contato: ${hoje}
atendido_por: Lena
tags: [lead, vendas, auto-n8n]
created: ${hoje}
notion_synced: false
---

# 👤 Lead: ${nome}

## 📋 Dados do Contato
| Campo | Dado |
|-------|------|
| **Nome** | ${nome} |
| **Telefone** | ${telefone} |
| **Origem** | ${origem} |
| **Data contato** | ${hoje} |
| **Atendido por** | Lena |

## 🎯 Interesse
${interesse}

## 💬 Primeira Interação
- **Canal:** ${origem}
- **Resumo:** Contato inicial via ${origem}
- **Próxima ação:** Follow-up em 24h

---
*Nota criada automaticamente pelo n8n em ${new Date().toISOString()}*
`;

const content_base64 = Buffer.from(markdown).toString('base64');
const safeName = nome.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-');
const path = `Vendas/Leads/${hoje}-${safeName}.md`;

return [{
  json: {
    nome,
    telefone,
    origem,
    interesse,
    content_base64,
    path,
    commit_message: `n8n: novo lead - ${nome}`
  }
}];
```

### Método Alternativo: Local REST API (se n8n roda local)

Se o n8n roda no mesmo PC que o Obsidian:

```
URL: http://127.0.0.1:27123/vault/Vendas/Leads/{nome}.md
Method: PUT
Headers:
  Authorization: Bearer {obsidian_api_key}
  Content-Type: text/markdown
Body: [conteúdo markdown do lead]
```

---

## 2️⃣ Integração n8n → Notion

### Workflow: Lead Novo → Notion CRM

**Node Notion (criar página na database CRM):**

```json
{
  "resource": "databasePage",
  "operation": "create",
  "databaseId": "SEU_DATABASE_ID_CRM",
  "properties": {
    "Nome": {
      "title": [{ "text": { "content": "={{$json.nome}}" } }]
    },
    "Status": {
      "select": { "name": "Novo" }
    },
    "Origem": {
      "select": { "name": "={{$json.origem}}" }
    },
    "Valor Estimado": {
      "number": "={{$json.valor_estimado || 0}}"
    },
    "Telefone": {
      "phone_number": "={{$json.telefone}}"
    },
    "Data do Contato": {
      "date": { "start": "={{$json.data_contato}}" }
    },
    "Atendido por": {
      "select": { "name": "Lena" }
    },
    "Prioridade": {
      "select": { "name": "={{$json.valor_estimado > 300 ? '🔴 Alta' : '🟢 Baixa'}}" }
    }
  }
}
```

---

## 3️⃣ Workflow Completo: Lead WhatsApp → Obsidian + Notion

```
[Webhook Z-API] → [Code: Extrair dados] → [Split]
                                              ├→ [GitHub API: Criar nota Obsidian]
                                              └→ [Notion API: Criar no CRM]
                                              └→ [IF valor > 500: Notificar Erick via WhatsApp]
```

---

## 4️⃣ Workflow: Relatório Diário Automático

**Trigger:** Cron todo dia às 22:00

```
[Cron 22h]
    → [Notion API: Query CRM - leads de hoje]
    → [Notion API: Query Financeiro - movimentações de hoje]
    → [Code: Compilar relatório]
    → [Split]
        ├→ [GitHub API: Append na Daily Note do Obsidian]
        ├→ [Notion API: Criar página em Relatórios]
        └→ [WhatsApp Z-API: Enviar resumo para Erick]
```

**Code Node para compilar relatório:**

```javascript
const leads = $('Query Leads').first().json;
const financeiro = $('Query Financeiro').first().json;
const hoje = new Date().toLocaleDateString('pt-BR');

const resumo = `
## 📊 Resumo Automático — ${hoje}

### 👤 Leads
- Novos: ${leads.results?.length || 0}
- Qualificados: ${leads.results?.filter(l => l.properties?.Status?.select?.name === 'Qualificado').length || 0}

### 💰 Financeiro
- Receitas: R$ ${financeiro.receitas || 0}
- Despesas: R$ ${financeiro.despesas || 0}
- Saldo: R$ ${(financeiro.receitas || 0) - (financeiro.despesas || 0)}

### 🤖 Automação
- Workflows executados: ${$env.WORKFLOW_COUNT || 'N/A'}
- Erros: 0
- Status: ✅ Operacional

---
*Gerado automaticamente pelo n8n às ${new Date().toLocaleTimeString('pt-BR')}*
`;

return [{ json: { resumo, resumo_base64: Buffer.from(resumo).toString('base64') } }];
```

---

## 5️⃣ Workflow: Sync Produto Notion → Obsidian

**Trigger:** Notion Trigger (quando produto é criado/atualizado)

```
[Notion Trigger: Database "Catálogo"]
    → [Code: Mapear propriedades → frontmatter]
    → [GitHub API: Criar/atualizar nota em Produtos/]
```

---

## 6️⃣ Workflow: Alerta Estoque Baixo

**Trigger:** Cron diário às 09:00

```
[Cron 09h]
    → [Notion API: Query Catálogo WHERE estoque < 5 AND status = "Ativo"]
    → [IF: Resultados > 0]
        → [Code: Formatar lista]
        → [Split]
            ├→ [WhatsApp: Alerta para Erick]
            └→ [GitHub API: Criar nota de alerta no Obsidian]
```

---

## 7️⃣ Heartbeat → Notion Dashboard

**Trigger:** Cron a cada 30 min (combinar com Heartbeat)

Adicionar ao final do workflow Heartbeat:

```
[Check Memória] → [Notion API: Atualizar bloco no Dashboard]
```

O bloco no Dashboard do Notion fica assim:
```
🤖 Status do Sistema
Última verificação: 20/06/2026 15:30
Status: ✅ Saudável
RAM: 180MB / 512MB
Uptime: 6h 23min
Workflows ativos: 18
```

---

## 📋 Checklist de Integração

### Pré-requisitos
- [ ] GitHub: Token de acesso pessoal criado
- [ ] GitHub: Repositório do vault criado
- [ ] Obsidian Git: Configurado e sincronizando
- [ ] Notion: Integration `n8n Aura Decore` criada
- [ ] Notion: Todas databases conectadas à integration
- [ ] Notion: IDs das databases documentados
- [ ] n8n: Credenciais GitHub, Notion, Z-API configuradas

### Workflows de Integração
- [ ] WF-LEAD: Lead WhatsApp → Obsidian + Notion
- [ ] WF-LOG: Conversa Lena → Log Obsidian
- [ ] WF-REPORT: Relatório diário automático (22h)
- [ ] WF-SYNC: Sync produto Notion → Obsidian
- [ ] WF-ESTOQUE: Alerta estoque baixo (09h)
- [ ] WF-HEARTBEAT: Status → Notion Dashboard (30min)

### Testes End-to-End
- [ ] Enviar mensagem teste no WhatsApp → verificar lead no Obsidian E Notion
- [ ] Criar produto no Notion → verificar nota no Obsidian
- [ ] Verificar relatório diário gerado às 22h
- [ ] Verificar heartbeat atualizando Notion Dashboard
- [ ] Simular estoque baixo → verificar alerta

---

## 🔐 Variáveis de Ambiente Necessárias

```env
# GitHub (para integração com Obsidian vault)
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
GITHUB_OWNER=seu-usuario
GITHUB_REPO=aura-decore-vault

# Notion
NOTION_API_TOKEN=ntn_xxxxxxxxxxxxxxxxxxxx
NOTION_DB_CRM=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_CATALOGO=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_CALENDARIO=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_FINANCEIRO=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_PROMPTS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DB_RELATORIOS=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Obsidian Local REST API (se n8n local)
OBSIDIAN_API_URL=http://127.0.0.1:27123
OBSIDIAN_API_KEY=sua-api-key

# WhatsApp Z-API
ZAPI_INSTANCE_ID=3F482EF30703B3E9DF097A5987414A01
ZAPI_TOKEN=seu-token
ZAPI_CLIENT_TOKEN=seu-client-token
```
