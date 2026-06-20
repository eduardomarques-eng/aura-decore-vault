---
agent: PIPE
task_id: mar_sex_pipe
day: sexta
area: operacoes
status: aguardando_aprovacao
created_at: 2026-05-29 09:52
---

# PIPE · Mapa de automações — n8n + integrações críticas

**MAPA COMPLETO DE AUTOMAÇÕES PARA O LANÇAMENTO**

**Top 5 Automações CRÍTICAS para ter rodando antes de lançar:**

1. **Novo pedido Shopify → WhatsApp Eduardo (Z-API)**
 * Trigger: Novo pedido recebido no Shopify
 * Ação: Enviar notificação via Z-API WhatsApp para Eduardo
 * Ferramentas: Shopify Webhooks, Z-API WhatsApp
 * Tempo de config estimado: 2 horas
2. **Carrinho abandonado → email D+1/D+3/D+7 (via LENA/Klaviyo)**
 * Trigger: Carrinho abandonado no Shopify
 * Ação: Enviar email automático via LENA/Klaviyo para os clientes que abandonaram o carrinho
 * Ferramentas: Shopify Webhooks, LENA/Klaviyo
 * Tempo de config estimado: 3 horas
3. **Pagamento confirmado → log no vault + notificação**
 * Trigger: Pagamento confirmado no Shopify
 * Ação: Registrar o pagamento no vault e enviar notificação para os responsáveis
 * Ferramentas: Shopify Webhooks, Vault de dados
 * Tempo de config estimado: 2 horas
4. **Novo seguidor Instagram → DM de boas-vindas (ZARA)**
 * Trigger: Novo seguidor no Instagram
 * Ação: Enviar DM de boas-vindas via ZARA para os novos seguidores
 * Ferramentas: Instagram API, ZARA
 * Tempo de config estimado: 2 horas
5. **Post agendado NOX → FEED publica automaticamente**
 * Trigger: Post agendado no NOX
 * Ação: Publicar automaticamente o conteúdo no feed do Facebook
 * Ferramentas: NOX, API do Facebook
 * Tempo de config estimado: 2 horas

**Automations já estão nos workflows n8n existentes (01-10):**

- N8N-01: Envio de email de boas-vindas para novos clientes
- N8N-02: Notificação de pagamento confirmado para os responsáveis
- N8N-03: Envio de email de cancelamento de pedido para clientes
- N8N-04: Atualização automática do status do pedido no Shopify
- N8N-05: Envio de email de reembolso para clientes
- N8N-06: Notificação de entrega para os clientes
- N8N-07: Atualização automática do estoque no Shopify
- N8N-08: Envio de email de promoção para os clientes
- N8N-09: Notificação de cancelamento de pedido para os clientes
- N8N
