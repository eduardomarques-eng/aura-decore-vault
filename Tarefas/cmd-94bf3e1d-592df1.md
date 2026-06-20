---
id: cmd-94bf3e1d-592df1
title: "[PIPE] Configurar webhooks para notificar sobre atualizações nos pr"
agent: pipe
priority: alta
status: concluido
created_at: 2026-05-27 18:34
completed_at: 2026-05-27 18:34
provider: groq/8b
tags: [command, 94bf3e1d, pipe]
---

## Briefing


## Resultado
**Workflow: Notificar sobre atualizações nos produtos**

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
 * Filtro: apenas atualizações de produtos (excluindo criações e exclusões)
4. **HTTP - POST**
 * Input: objeto JSON com dados do produto atualizado
 * URL: `https://your-appmax.com/api/atualizacoes/produtos`
 * Cabeçalhos: `Content-Type: application/json`
5. **Error - Handle**
 * Input: objeto JSON com dados do produto atualizado
 * Erro: `status: 500, mensagem: "Erro ao atualizar produto"`

**Integrações:**

* Shopify: para receber atualizações de produtos
* AppMax: para armazenar as atualizações de produtos

**Tratamento de erro:**

* Se o webhook Shopify retornar um erro, o workflow será reiniciado após 1 minuto.
* Se o HTTP POST para AppMax retornar um erro, o workflow será reiniciado após 5 minutos.

**Resumo em JSON:**

```json
{
  "nome": "Notificar sobre atualizações nos produtos",
  "descricao": "Workflow para notificar sobre atualizações nos produtos",
  "trigger": {
    "type": "webhook",
    "name": "Shopify",
    "url": "https://your-shopify-store.com/admin/api/2022-04/webhooks.json",
    "secret": "seu-secreto-webhook-shopify",
    "eventos": ["product.updated", "product.created"],
    "id": "id-do-webhook"
  },
  "nodes": [
    {
      "type": "json",
      "nome": "Parse JSON",
      "input": {
        "type": "message",
        "path": "$.data"
      }
    },
    {
      "type": "json",
      "nome": "Filtro JSON",
      "input": {
        "type": "message",
        "path": "$.data"
      },
      "filtro": {
        "type": "and",
        "clausulas": [
          {
            "type": "not equal",
            "property": "$.product.action",
            "valor": "create"
          },
          {
            "type": "not equal",
            "property": "$.product.action",
            "valor": "delete"
          }
        ]
      }
    },
    {
      "type": "http",
      "nome": "POST AppMax",
      "input": {
        "type": "message",
        "path": "$.data"
      },
      "url": "https://your-appmax.com/api/atualizacoes/produtos",
      "cabeça
