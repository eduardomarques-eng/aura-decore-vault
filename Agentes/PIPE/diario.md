# 📔 Diário — PIPE


### 2026-05-27 18:34 [groq/8b]
**Tarefa:** [PIPE] Configurar webhooks para notificar sobre atualizações nos pr
**Resultado:** **Workflow: Notificar sobre atualizações nos produtos**

**Trigger:** Webhook - Shopify (atualizações de produtos)

**Nodes:**

1. **Webhook - Shopify**
 * URL: `https://your-shopify-store.com/admin/api/2022-04/webhooks.json`
 * Secret: `seu-secreto-webhook-shopify`
 * Eventos: `product.updated`, `product.created`
 * ID do webhook: `id-do-webhook`
2. **JSON - Parse**
 * Input: mensagem recebida do webhook Shopify
 * Output: objeto JSON parseado
3. **JSON - Filter**
 * Input: objeto JSON parseado

---

### 2026-05-27 19:11 [fallback]
**Tarefa:** PIPE · Auditoria de automações e integrações
**Resultado:** ⚠️ Todos os providers LLM falharam. Verifique chaves ou suba o Ollama.

---

### 2026-05-27 19:29 [groq/8b]
**Tarefa:** Automacoes prioritarias para Aura Decore com n8n. Entregue: 1) Workflow: novo pe
**Resultado:**
Aqui estÃ£o as automaÃ§Ãµes prioritÃ¡rias para a Aura Decore utilizando n8n:

**1. Workflow: Novo pedido Shopify ? WhatsApp Eduardo**

* Trigger: Shopify > Novo Pedido
* Node 1: Conectar ao Shopify (autenticaÃ§Ã£o com API Key e Secret Key)
* Node 2: Pegar informaÃ§Ãµes do pedido (ID, cliente, produtos, etc.)
* Node 3: Enviar mensagem para o WhatsApp de Eduardo (utilizando a API do WhatsApp Business)
* Node 4: Gravar logs do pedido no n8n

**Nodes:**

- Shopify: Novo Pedido
- WhatsApp Business: Enviar Mensagem
- Logs: Gravar Log

**IntegraÃ§Ãµes:**

- Shopify (Z-API)
- WhatsApp Business (API)

**Tratamento de Erro:**

- Se houver erro ao enviar mensagem para o WhatsApp, enviar notificaÃ§Ã£o para o administrador da loja.

**JSON Resumido:**

```json
{
  "trigger": "Shopify",
  "nodes": [
    {
      "name": "Conectar ao Shopify",
      "type": "n8n-nodes-base.shopify",
      "parameters": {
        "options": {
          "endpoint": "https://auradecore.com.br/admin/shopify",
          "credentials": "shopifyCredentials"
        }
      }
    },
    {
      "name": "Pegar informaÃ§Ãµes do pedido",
      "type": "n8n-nodes-base.shopify",
      "parameters": {
        "options": {
          "endpoint": "https://auradecore.com.br/admin/shopify/pedido/{id}",
          "credentials": "shopifyCredentials",
          "rateLimitOptions": {
            "retries": 3,
            "retryDelaySeconds": 30
          }
        }
      }
    },
    {
      "name": "Enviar mensagem para o WhatsApp",
      "type": "n8n-nodes-base.whatsappBusiness",
      "parameters": {
        "options": {
          "endpoint": "https://api.whatsapp.com/send",
          "credentials": "whatsappCredentials",
          "message": "Novo pedido recebido! ID: {pedido.id}"
        }
      }
    },
    {
      "name": "Gravar logs do pedido",
      "type": "n8n-nodes-base.logs",
      "parameters": {
        "options": {
          "endpoint": "https://auradecore.com.br/admin/logs",
          "credentials": "logsCredentials",
          "data": "{pedido}"
        }
      }
    }
  ]
}
```

**2. Workflow: Post aprovado NOX ? FEED publica automaticamente**

* Trigger: NOX > Post Aprovado
* Node 1: Conectar ao NOX (autenticaÃ§Ã£o com API Key e Secret Key)
*

---


### 2026-06-03 14:00 [groq/70b]
**Tarefa:** PIPE · Auditoria de automações e integrações
**Resultado:** **AUDITORIA DE AUTOMAÇÕES**

**1. 5 Automações Mais Críticas para a Aura Decore Rodar Hoje:**

1.  **Atualização de Estoque em Tempo Real**: Integração entre o Shopify e os fornecedores (Dropi/Habitoo/AliExpress) para garantir que o estoque online esteja sempre atualizado.
2.  **Notificação de Pedido**: Envio automático de notificações para o cliente e para a equipe de vendas sobre novos pedidos, status de envio e entrega.
3.  **Gerenciamento de Inventário**: Automação para ajustar automaticamen

---

### 2026-06-13 03:34 [system]
**Tarefa:** Migração e Importação de Automações n8n
**Resultado:** Realizou a limpeza de Byte Order Marks (BOM) e tags dos 12 workflows em n8n-workflows/ready-to-import e efetuou a importação sequencial com sucesso no banco de dados do n8n local.

---
