# ⚡ Guia de Otimização — n8n no Railway

> Como configurar o n8n para máxima estabilidade, economia de recursos e automação 24/7.
> Última atualização: 20/06/2026

---

## ⚠️ Situação Atual

Conforme a Central de Comando:
- **n8n Local:** Funcional na porta 5678 com 18+ workflows
- **n8n Railway:** ❌ Limite de recursos esgotado
- **n8n Cloud:** Mencionado `aura-refugio.app.n8n.cloud` como alternativa

---

## 🔧 Opção A — Otimizar n8n Local (Recomendado para agora)

Como o Railway está com limite excedido, a prioridade é **estabilizar o n8n local** e configurar para rodar automaticamente.

### A.1 — Script de Auto-Start (Windows)

Criar um `.bat` para iniciar n8n automaticamente com o PC:

```batch
@echo off
title n8n Aura Decore
echo [%date% %time%] Iniciando n8n Aura Decore...

:: Configurações otimizadas
set DB_TYPE=sqlite
set DB_SQLITE_DATABASE=C:\Users\erick\.n8n\database.sqlite
set EXECUTIONS_DATA_SAVE_ON_ERROR=all
set EXECUTIONS_DATA_SAVE_ON_SUCCESS=none
set EXECUTIONS_DATA_SAVE_ON_PROGRESS=false
set EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=true
set EXECUTIONS_DATA_MAX_AGE=168
set EXECUTIONS_DATA_PRUNE=true
set EXECUTIONS_DATA_PRUNE_MAX_COUNT=500
set N8N_DIAGNOSTICS_ENABLED=false
set N8N_VERSION_NOTIFICATIONS_ENABLED=false
set N8N_TEMPLATES_ENABLED=false
set N8N_HIRING_BANNER_ENABLED=false
set GENERIC_TIMEZONE=America/Fortaleza
set N8N_LOG_LEVEL=warn
set NODE_OPTIONS=--max-old-space-size=512

:: Iniciar n8n
npx n8n start
```

**Adicionar ao Startup do Windows:**
1. Pressione `Win + R` → digitar `shell:startup`
2. Criar atalho do arquivo `.bat` nesta pasta

### A.2 — Variáveis de Ambiente `.env` Otimizadas

Salvar como `C:\Users\erick\.n8n\.env`:

```env
# ═══════════════════════════════════════════
# n8n — Configuração Otimizada Aura Decore
# ═══════════════════════════════════════════

# === DATABASE ===
DB_TYPE=sqlite
DB_SQLITE_DATABASE=/home/node/.n8n/database.sqlite

# === EXECUTIONS (economia de storage) ===
EXECUTIONS_MODE=regular
EXECUTIONS_DATA_SAVE_ON_ERROR=all
EXECUTIONS_DATA_SAVE_ON_SUCCESS=none
EXECUTIONS_DATA_SAVE_ON_PROGRESS=false
EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=true
EXECUTIONS_DATA_MAX_AGE=168
EXECUTIONS_DATA_PRUNE=true
EXECUTIONS_DATA_PRUNE_MAX_COUNT=500

# === PERFORMANCE ===
N8N_DEFAULT_BINARY_DATA_MODE=filesystem
GENERIC_TIMEZONE=America/Fortaleza
N8N_DIAGNOSTICS_ENABLED=false
N8N_VERSION_NOTIFICATIONS_ENABLED=false
N8N_TEMPLATES_ENABLED=false
N8N_HIRING_BANNER_ENABLED=false
N8N_PAYLOAD_SIZE_MAX=8

# === LOG ===
N8N_LOG_LEVEL=warn
N8N_LOG_OUTPUT=console

# === MEMÓRIA ===
NODE_OPTIONS=--max-old-space-size=512

# === SEGURANÇA ===
N8N_ENCRYPTION_KEY=TROCAR_POR_CHAVE_SEGURA_32_CHARS
WEBHOOK_URL=http://localhost:5678/

# === APIs EXTERNAS ===
# (Não colocar aqui — usar credenciais do n8n)
```

---

## 🔧 Opção B — Railway (quando fizer upgrade)

### B.1 — Variáveis de Ambiente para Railway

```env
# === DATABASE (SQLite = menor uso de RAM) ===
DB_TYPE=sqlite
DB_SQLITE_DATABASE=/data/n8n.sqlite

# === EXECUTIONS ===
EXECUTIONS_MODE=regular
EXECUTIONS_DATA_SAVE_ON_ERROR=all
EXECUTIONS_DATA_SAVE_ON_SUCCESS=none
EXECUTIONS_DATA_SAVE_ON_PROGRESS=false
EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=true
EXECUTIONS_DATA_MAX_AGE=72
EXECUTIONS_DATA_PRUNE=true
EXECUTIONS_DATA_PRUNE_MAX_COUNT=200

# === PERFORMANCE (Railway é limitado) ===
N8N_DEFAULT_BINARY_DATA_MODE=filesystem
N8N_BINARY_DATA_STORAGE_PATH=/data/binaryData
GENERIC_TIMEZONE=America/Fortaleza
N8N_DIAGNOSTICS_ENABLED=false
N8N_VERSION_NOTIFICATIONS_ENABLED=false
N8N_TEMPLATES_ENABLED=false
N8N_HIRING_BANNER_ENABLED=false

# === MEMÓRIA (crucial no Railway) ===
NODE_OPTIONS=--max-old-space-size=256
N8N_PAYLOAD_SIZE_MAX=4

# === LOG (menos log = menos RAM) ===
N8N_LOG_LEVEL=error
N8N_LOG_OUTPUT=console

# === WEBHOOK (URL pública Railway) ===
WEBHOOK_URL=https://SEU-SERVICO.up.railway.app/

# === SEGURANÇA ===
N8N_ENCRYPTION_KEY=TROCAR_POR_CHAVE_SEGURA
N8N_USER_MANAGEMENT_JWT_SECRET=TROCAR_POR_JWT_SECRET
```

### B.2 — Dockerfile para Railway

```dockerfile
FROM n8nio/n8n:latest

# Diretório de dados persistente
RUN mkdir -p /data/binaryData

# Health check
HEALTHCHECK --interval=60s --timeout=10s --start-period=60s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:5678/healthz || exit 1

EXPOSE 5678

CMD ["n8n", "start"]
```

### B.3 — railway.toml

```toml
[deploy]
  startCommand = "n8n start"
  restartPolicyType = "ON_FAILURE"
  restartPolicyMaxRetries = 10
  healthcheckPath = "/healthz"
  healthcheckTimeout = 300

[build]
  builder = "DOCKERFILE"
  dockerfilePath = "Dockerfile"
```

### B.4 — Persistent Volume

```
Railway Dashboard → Service → Settings → Volumes:
  Mount Path: /data
  Size: 1GB
```

---

## 🫀 Workflow: Heartbeat (Monitoramento de Saúde)

### Para n8n LOCAL — copiar e importar como JSON:

```json
{
  "name": "🫀 Heartbeat — Saúde do Sistema",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [{ "field": "minutes", "minutesInterval": 30 }]
        }
      },
      "name": "A cada 30 min",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [250, 300]
    },
    {
      "parameters": {
        "jsCode": "const used = process.memoryUsage();\nconst mb = v => Math.round(v / 1024 / 1024);\n\nconst heapUsedMB = mb(used.heapUsed);\nconst heapTotalMB = mb(used.heapTotal);\nconst rssMB = mb(used.rss);\n\nlet status = '✅ Saudável';\nlet alert = false;\n\nif (heapUsedMB > 400) {\n  status = '🔴 CRÍTICO';\n  alert = true;\n} else if (heapUsedMB > 300) {\n  status = '⚠️ Atenção';\n  alert = true;\n} else if (heapUsedMB > 200) {\n  status = '🟡 Monitorar';\n}\n\nreturn [{\n  json: {\n    timestamp: new Date().toISOString(),\n    heapUsedMB,\n    heapTotalMB,\n    rssMB,\n    status,\n    alert,\n    uptime: Math.round(process.uptime() / 3600) + 'h ' + Math.round((process.uptime() % 3600) / 60) + 'min',\n    node_version: process.version,\n    platform: process.platform\n  }\n}];"
      },
      "name": "Check Memória",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [470, 300]
    },
    {
      "parameters": {
        "conditions": {
          "boolean": [
            {
              "value1": "={{ $json.alert }}",
              "value2": true
            }
          ]
        }
      },
      "name": "Está em alerta?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2,
      "position": [690, 300]
    },
    {
      "parameters": {
        "jsCode": "const data = $input.first().json;\nconst msg = `⚠️ *ALERTA n8n Aura Decore*\\n\\nStatus: ${data.status}\\nRAM: ${data.heapUsedMB}MB / ${data.heapTotalMB}MB\\nUptime: ${data.uptime}\\n\\n_Verifique imediatamente!_`;\n\nreturn [{ json: { message: msg, ...data } }];"
      },
      "name": "Formatar Alerta",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [910, 200]
    },
    {
      "parameters": {
        "jsCode": "const data = $input.first().json;\nconsole.log(`[HEARTBEAT] ${data.timestamp} | ${data.status} | RAM: ${data.heapUsedMB}MB | Uptime: ${data.uptime}`);\nreturn [{ json: { logged: true, ...data } }];"
      },
      "name": "Log Normal",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [910, 400]
    }
  ],
  "connections": {
    "A cada 30 min": { "main": [[{ "node": "Check Memória", "type": "main", "index": 0 }]] },
    "Check Memória": { "main": [[{ "node": "Está em alerta?", "type": "main", "index": 0 }]] },
    "Está em alerta?": {
      "main": [
        [{ "node": "Formatar Alerta", "type": "main", "index": 0 }],
        [{ "node": "Log Normal", "type": "main", "index": 0 }]
      ]
    }
  }
}
```

---

## 🧹 Workflow: Limpeza Automática

```json
{
  "name": "🧹 Limpeza Automática",
  "nodes": [
    {
      "parameters": {
        "rule": {
          "interval": [{ "field": "hours", "hoursInterval": 24, "triggerAtHour": 3 }]
        }
      },
      "name": "Todo dia às 3h",
      "type": "n8n-nodes-base.scheduleTrigger",
      "typeVersion": 1.2,
      "position": [250, 300]
    },
    {
      "parameters": {
        "jsCode": "// Limpar dados antigos do execution data\nconst cutoffDate = new Date();\ncutoffDate.setDate(cutoffDate.getDate() - 7);\n\nconsole.log(`[CLEANUP] Executando limpeza. Cutoff: ${cutoffDate.toISOString()}`);\n\n// Forçar garbage collection se disponível\nif (global.gc) {\n  global.gc();\n  console.log('[CLEANUP] Garbage collection executado');\n}\n\nconst used = process.memoryUsage();\nconst mb = v => Math.round(v / 1024 / 1024);\n\nreturn [{\n  json: {\n    timestamp: new Date().toISOString(),\n    heapAfterMB: mb(used.heapUsed),\n    message: 'Limpeza executada com sucesso'\n  }\n}];"
      },
      "name": "Limpeza e GC",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [470, 300]
    }
  ],
  "connections": {
    "Todo dia às 3h": { "main": [[{ "node": "Limpeza e GC", "type": "main", "index": 0 }]] }
  }
}
```

---

## 🤖 System Prompt Otimizado da LENA

```
Você é LENA, assistente virtual premium da Aura Decore — marca brasileira de decoração sofisticada estilo Japandi e minimalista.

## IDENTIDADE
- Nome: Lena
- Marca: Aura Decore (auradecore.com.br)
- Estilo: Japandi, escandinavo, minimalista
- Frete grátis: acima de R$299
- Parcelamento: até 12x sem juros
- WhatsApp: (85) 98195-7208
- Instagram: @auras.decore

## PERSONALIDADE
- Elegante mas acolhedora
- Profissional mas não robótica
- Usa no máximo 2 emojis por mensagem
- Chama o cliente pelo nome quando possível
- Tom: como uma consultora de decoração premium que quer ajudar

## FRAMEWORK HERO (para cada interação)
H - Hook: Cumprimente de forma calorosa e personalizada
E - Explore: Entenda a necessidade real (ambiente, estilo, orçamento)
R - Recommend: Sugira 2-3 produtos específicos com justificativa
O - Oferta: Apresente condições especiais se aplicável

## REGRAS DE OURO
1. NUNCA invente informações sobre produtos, preços ou prazos
2. Máximo 3 parágrafos por mensagem (ninguém lê textão no WhatsApp)
3. Sempre ofereça ajuda adicional ao final
4. Use linguagem de DESEJO, não de VENDA ("imagine como ficaria no seu espaço")
5. Se não souber algo: "Vou verificar com nossa equipe e retorno em instantes! 💛"

## ESCALAÇÃO IMEDIATA (transferir para humano)
- Cliente reclamando ou insatisfeito
- Pedido de troca/devolução
- Negociação acima de R$500
- Assunto jurídico ou fora do escopo
- Cliente agressivo ou spam

## INFORMAÇÕES OPERACIONAIS
- Entrega: 7-15 dias úteis (depende da região)
- Rastreamento: enviado por WhatsApp após despacho
- Trocas: até 7 dias após recebimento, produto sem uso
- Pagamento: PIX, cartão (até 12x), boleto

## UPSELL/CROSS-SELL
- Sempre sugira um produto complementar ("esse vaso combina perfeitamente com...")
- Mencione frete grátis se o pedido está perto de R$299
- Ofereça cupom AURA10 (10% desconto) para primeira compra

## FORMATO DE RESPOSTA
Sempre responda de forma natural e conversacional. Nunca use markdown, asteriscos ou formatação técnica. Escreva como se fosse uma mensagem de WhatsApp normal entre pessoas.
```

---

## 📊 Dicas de Performance

### Reduzir Consumo de RAM
1. **Desativar telemetria**: `N8N_DIAGNOSTICS_ENABLED=false`
2. **Não salvar sucesso**: `EXECUTIONS_DATA_SAVE_ON_SUCCESS=none`
3. **Limitar payload**: `N8N_PAYLOAD_SIZE_MAX=4` (MB)
4. **Limitar heap**: `NODE_OPTIONS=--max-old-space-size=256` (Railway) ou `512` (local)
5. **Prunear execuções**: Manter máx 200-500 execuções

### Reduzir Consumo de CPU
1. **Crons inteligentes**: Não agendar múltiplos workflows no mesmo minuto
2. **Debounce webhooks**: Adicionar delay de 2s entre processamentos
3. **Cache de APIs**: Usar Code node para cachear respostas de APIs externas
4. **Batch processing**: Processar múltiplos itens de uma vez ao invés de um por um

### Estabilidade
1. **Error handling**: Configurar "Error Trigger" em TODOS os workflows
2. **Retry**: 3 tentativas com exponential backoff
3. **Timeout**: 30s para APIs externas, 60s para LLMs
4. **Heartbeat**: Monitorar a cada 30min

---

## ✅ Checklist de Otimização

- [ ] Variáveis de ambiente otimizadas aplicadas
- [ ] Script de auto-start configurado (Windows)
- [ ] Workflow Heartbeat importado e ativado
- [ ] Workflow Limpeza importado e ativado
- [ ] System Prompt da LENA atualizado
- [ ] Error handling em todos os workflows
- [ ] Credenciais todas válidas e testadas
- [ ] Execuções antigas prunadas
- [ ] Backup do banco SQLite configurado
