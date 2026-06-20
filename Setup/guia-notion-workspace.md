# 🔵 Guia Completo — Notion Workspace Aura Decore

> Como configurar o workspace do Notion para integração perfeita com Obsidian e n8n.
> Última atualização: 20/06/2026

---

## 📐 Filosofia de Divisão

| Ferramenta | Função | Quando Usar |
|------------|--------|-------------|
| **Obsidian** | Cérebro profundo, conhecimento interligado, velocidade | Pensar, criar, documentar, conectar ideias |
| **Notion** | Visão estratégica, dashboards, colaboração | Visualizar, compartilhar, gerenciar equipe |
| **n8n** | Motor de automação, cola entre ferramentas | Sincronizar, automatizar, monitorar |

> **Regra:** Obsidian é onde você PENSA. Notion é onde você GERENCIA. n8n é o que CONECTA.

---

## 🏗️ Passo a Passo: Criar o Workspace

### Passo 1 — Criar Conta/Workspace
1. Acesse [notion.so](https://www.notion.so)
2. Criar workspace: **"Aura Decore"**
3. Plano: **Free** (suficiente para começar) ou **Plus** ($10/mês para APIs e databases ilimitadas)

### Passo 2 — Criar Páginas Raiz (Sidebar)

Criar estas páginas na sidebar do Notion:

```
🏠 Aura Decore HQ          ← Página principal com callouts e links
📊 Dashboard Principal      ← Linked databases e widgets
📋 CRM & Vendas             ← DATABASE
📦 Catálogo de Produtos     ← DATABASE
📅 Calendário Editorial     ← DATABASE
💰 Controle Financeiro      ← DATABASE
🎯 Roadmap & OKRs           ← Página com timeline
📖 Wiki da Marca            ← Páginas estáticas com guias
🤖 Central de IA            ← Status agentes + Lena
📚 Biblioteca de Prompts    ← DATABASE
📈 Relatórios               ← DATABASE com relatórios auto
⚙️ SOPs & Processos         ← Procedimentos operacionais
```

---

### Passo 3 — Criar Database: CRM & Vendas

**Tipo:** Full-page Database

**Propriedades:**

| Propriedade | Tipo | Opções/Config |
|-------------|------|---------------|
| Nome | Title | — |
| Status | Select | `Novo`, `Contatado`, `Qualificado`, `Proposta Enviada`, `Negociando`, `Fechado ✅`, `Perdido ❌` |
| Origem | Select | `WhatsApp`, `Instagram`, `Site`, `Indicação`, `Pinterest`, `Facebook`, `Google` |
| Valor Estimado | Number | Format: `R$` Brazilian Real |
| Produto de Interesse | Relation | → Catálogo de Produtos |
| Data do Contato | Date | Include time |
| Próximo Follow-up | Date | Include time |
| Atendido por | Select | `Lena`, `Erick`, `SOL`, `Manual` |
| Telefone | Phone | — |
| Email | Email | — |
| Prioridade | Select | `🔴 Alta`, `🟡 Média`, `🟢 Baixa` |
| Score | Number | 0-10 |
| Notas | Rich Text | — |
| Obsidian Synced | Checkbox | — |

**Views a criar:**

1. **📋 Pipeline (Board)** — Agrupar por `Status`, colorir por `Prioridade`
2. **📅 Calendário** — Por `Data do Contato`
3. **📊 Todos os Leads (Table)** — Todos os campos, filtro nenhum
4. **🔥 Follow-up Hoje** — Filtro: `Próximo Follow-up` = Today
5. **💰 Por Valor** — Ordenar por `Valor Estimado` DESC
6. **📱 Por Origem** — Agrupar por `Origem`

---

### Passo 4 — Criar Database: Catálogo de Produtos

**Propriedades:**

| Propriedade | Tipo | Opções/Config |
|-------------|------|---------------|
| Nome do Produto | Title | — |
| Imagem | Files & media | — |
| Categoria | Select | `Vasos`, `Almofadas`, `Quadros`, `Iluminação`, `Têxtil`, `Acessórios`, `Velas`, `Organizadores` |
| Estilo | Multi-select | `Japandi`, `Escandinavo`, `Minimalista`, `Boho`, `Industrial` |
| Preço de Venda | Number | R$ |
| Custo | Number | R$ |
| Margem (%) | Formula | `round((prop("Preço de Venda") - prop("Custo")) / prop("Preço de Venda") * 100)` |
| Estoque | Number | — |
| Status | Select | `Ativo`, `Esgotado`, `Descontinuado`, `Em produção`, `Em teste` |
| Fornecedor | Select | Nomes dos fornecedores |
| SKU | Text | — |
| Shopify ID | Text | — |
| Tags | Multi-select | `Premium`, `Promoção`, `Novo`, `Bestseller`, `Frete Grátis` |
| Link Shopify | URL | — |
| Leads interessados | Relation | → CRM & Vendas |

**Views:**

1. **🏪 Galeria** — Group by `Categoria`, show `Imagem`
2. **📊 Tabela Completa** — Todos os campos
3. **⚠️ Estoque Crítico** — Filtro: `Estoque` < 5 AND `Status` = Ativo
4. **💰 Por Margem** — Ordenar por `Margem (%)` DESC
5. **🆕 Lançamentos** — Filtro: `Status` = Em produção

---

### Passo 5 — Criar Database: Calendário Editorial

**Propriedades:**

| Propriedade | Tipo | Opções/Config |
|-------------|------|---------------|
| Título do Post | Title | — |
| Plataforma | Multi-select | `Instagram Feed`, `Instagram Stories`, `Reels`, `TikTok`, `Pinterest`, `Facebook`, `Blog` |
| Status | Select | `💡 Ideia`, `✏️ Rascunho`, `🎨 Em produção`, `📅 Agendado`, `✅ Publicado` |
| Data de Publicação | Date | Include time |
| Horário | Select | `09:00`, `14:00`, `19:00` |
| Tipo de Conteúdo | Select | `Produto`, `Dica`, `Inspiração`, `Bastidores`, `Depoimento`, `Promoção`, `Educativo`, `Trend` |
| Copy | Rich Text | — |
| Hashtags | Rich Text | — |
| Mídia | Files & media | — |
| Produto | Relation | → Catálogo de Produtos |
| Agente Responsável | Select | `NOX`, `VERA`, `LUNA`, `ARTE`, `FEED` |
| Engajamento | Number | — |
| Alcance | Number | — |

**Views:**

1. **📅 Calendário** — Por `Data de Publicação`
2. **📋 Board** — Agrupar por `Status`
3. **📱 Por Plataforma** — Agrupar por `Plataforma`
4. **📊 Performance** — Ordenar por `Engajamento` DESC

---

### Passo 6 — Criar Database: Controle Financeiro

**Propriedades:**

| Propriedade | Tipo | Opções/Config |
|-------------|------|---------------|
| Descrição | Title | — |
| Tipo | Select | `💚 Receita`, `🔴 Despesa Fixa`, `🟡 Despesa Variável`, `🔵 Investimento` |
| Categoria | Select | `Produto`, `Marketing/Ads`, `Ferramentas/SaaS`, `Operacional`, `Impostos`, `Frete`, `Embalagem`, `Domínio/Hosting` |
| Valor | Number | R$ |
| Data | Date | — |
| Recorrente | Checkbox | — |
| Frequência | Select | `Mensal`, `Trimestral`, `Anual`, `Único` |
| Status | Select | `✅ Pago`, `⏳ Pendente`, `🔴 Atrasado` |
| Comprovante | Files & media | — |
| Meio de Pagamento | Select | `PIX`, `Cartão PJ`, `Boleto`, `Débito` |

**Views:**

1. **📊 Tabela** — Todos os dados, ordenado por Data DESC
2. **📈 Por Mês** — Agrupar por mês da `Data`
3. **💚 Receitas** — Filtro: Tipo = Receita
4. **🔴 Despesas** — Filtro: Tipo ≠ Receita
5. **⏳ Pendentes** — Filtro: Status = Pendente

---

### Passo 7 — Criar Database: Biblioteca de Prompts

**Propriedades:**

| Propriedade | Tipo | Opções/Config |
|-------------|------|---------------|
| Nome do Prompt | Title | — |
| Agente | Select | Lista dos 22 agentes |
| Categoria | Select | `Copy`, `Atendimento`, `SEO`, `Análise`, `Conteúdo`, `Vendas`, `Design`, `Estratégia` |
| Prompt | Rich Text | O prompt completo |
| Modelo Recomendado | Select | `GPT-4`, `Claude Sonnet`, `Claude Opus`, `Groq Llama`, `Gemini` |
| Temperatura | Number | 0-2 |
| Testado | Checkbox | — |
| Qualidade | Select | `⭐`, `⭐⭐`, `⭐⭐⭐`, `⭐⭐⭐⭐`, `⭐⭐⭐⭐⭐` |
| Tags | Multi-select | — |

---

### Passo 8 — Wiki da Marca

Criar como **página estática** com sub-páginas:

```
📖 Wiki da Marca
├── 🎨 Identidade Visual
│   ├── Logo (principal + variações)
│   ├── Paleta de Cores
│   │   ├── Primária: #C4A97D (dourado warm)
│   │   ├── Secundária: #2D2D2D (preto premium)
│   │   ├── Terciária: #F5F1EB (bege natural)
│   │   └── Accent: #8B7355 (bronze)
│   ├── Tipografia
│   │   ├── Headlines: Playfair Display / Cormorant Garamond
│   │   └── Body: Inter / Lato
│   └── Elementos visuais (ícones, patterns)
│
├── 🎙️ Tom de Voz
│   ├── Personalidade da marca
│   ├── Palavras para USAR: sofisticado, aconchegante, curadoria, exclusivo
│   ├── Palavras para EVITAR: barato, genérico, chinês, cópia
│   └── Exemplos de copy por canal
│
├── 👤 Persona / ICP (Ideal Customer Profile)
│   ├── Dados demográficos
│   ├── Dores e desejos
│   ├── Comportamento de compra
│   └── Canais preferidos
│
├── 🏷️ Posicionamento
│   ├── Proposta de valor
│   ├── Diferencial competitivo
│   ├── Concorrentes mapeados
│   └── Matriz de posicionamento
│
├── 📋 Guia de Atendimento (para LENA e equipe)
│   ├── Framework HERO
│   ├── Respostas padrão
│   ├── Escalação
│   └── FAQ
│
├── 📸 Guia Fotográfico
│   ├── Estilo de fotos (Japandi, clean, natural light)
│   ├── Composições recomendadas
│   ├── Apps e tools (Lightroom presets)
│   └── Tamanhos por plataforma
│
└── ❓ FAQ Interno
    ├── Sobre a marca
    ├── Sobre produtos
    ├── Sobre entregas
    └── Sobre trocas/devoluções
```

---

### Passo 9 — Configurar Notion API (para n8n)

1. **Acessar** [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. **"New Integration"**:
   - Name: `n8n Aura Decore`
   - Associated workspace: `Aura Decore`
   - Type: Internal
   - Capabilities: ✅ Read, ✅ Update, ✅ Insert content
3. **Copiar** o Internal Integration Token (começa com `ntn_...`)
4. **Conectar cada database** à integration:
   - Abrir cada database → `...` → `Connections` → `n8n Aura Decore`
   - Repetir para: CRM, Catálogo, Calendário, Financeiro, Prompts, Relatórios

5. **Pegar IDs das databases** (necessário para n8n):
   - Abrir database em full page
   - A URL será: `notion.so/[workspace]/[DATABASE_ID]?v=...`
   - Copiar o DATABASE_ID (32 caracteres hex)

| Database | ID (preencher) |
|----------|----------------|
| CRM & Vendas | `________________________________` |
| Catálogo de Produtos | `________________________________` |
| Calendário Editorial | `________________________________` |
| Controle Financeiro | `________________________________` |
| Biblioteca de Prompts | `________________________________` |
| Relatórios | `________________________________` |

---

### Passo 10 — Dashboard Principal

Criar a página `📊 Dashboard Principal` com layout em colunas:

**Layout sugerido:**

```
┌──────────────────────────────────────────────────────────┐
│  📊 DASHBOARD AURA DECORE — Visão em Tempo Real          │
│  Atualizado automaticamente via n8n                       │
├────────────────────────────┬─────────────────────────────┤
│                            │                             │
│  🔥 LEADS NOVOS HOJE      │  💰 FATURAMENTO DO MÊS     │
│  Linked DB: CRM           │  Linked DB: Financeiro      │
│  Filter: Status=Novo      │  Filter: Tipo=Receita       │
│  View: List               │  View: Table summary        │
│                            │                             │
├────────────────────────────┼─────────────────────────────┤
│                            │                             │
│  📅 POSTS ESTA SEMANA     │  📦 ESTOQUE CRÍTICO         │
│  Linked DB: Calendário    │  Linked DB: Catálogo        │
│  View: Calendar           │  Filter: Estoque<5          │
│                            │  View: Table                │
│                            │                             │
├────────────────────────────┼─────────────────────────────┤
│                            │                             │
│  🤖 STATUS LENA (24h)     │  📊 KPIs DO MÊS            │
│  Texto atualizado via n8n │  Métricas consolidadas      │
│  (heartbeat embed)        │  (atualizado semanalmente)  │
│                            │                             │
├────────────────────────────┴─────────────────────────────┤
│                                                          │
│  ⚙️ WORKFLOWS N8N — Status                              │
│  Tabela com status de cada workflow                      │
│  (atualizado pelo heartbeat)                             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Como montar:**
1. Criar a página `📊 Dashboard Principal`
2. Adicionar `/linked database` para cada database
3. Configurar os filtros e views conforme acima
4. Usar `/column` para layout lado a lado
5. Adicionar ícones e callouts para visual premium

---

## 🔗 Integração Notion ↔ Obsidian (via n8n)

### Dados que fluem Notion → Obsidian
- **Nada automático** (Obsidian é a fonte primária de conhecimento)
- Consultas manuais se necessário

### Dados que fluem Obsidian → Notion (via n8n)
- Leads novos criados via WhatsApp/Lena
- Status de workflows e agentes
- Relatórios gerados
- Métricas de saúde do sistema

### Dados que fluem n8n → Notion
- Heartbeat/status do sistema
- Leads do WhatsApp → CRM
- Relatórios automáticos → Database Relatórios
- Alertas de estoque

---

## ✅ Checklist de Setup Notion

- [ ] Workspace criado
- [ ] Database CRM & Vendas configurada com todas as propriedades e views
- [ ] Database Catálogo de Produtos configurada
- [ ] Database Calendário Editorial configurada
- [ ] Database Controle Financeiro configurada
- [ ] Database Biblioteca de Prompts configurada
- [ ] Wiki da Marca criada com todas as sub-páginas
- [ ] Dashboard Principal montado com linked databases
- [ ] API Integration criada (`n8n Aura Decore`)
- [ ] Todas as databases conectadas à integration
- [ ] IDs das databases documentados
- [ ] Token salvo no `.env` do n8n
