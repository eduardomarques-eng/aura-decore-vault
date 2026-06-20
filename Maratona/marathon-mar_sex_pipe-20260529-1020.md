---
agent: PIPE
task_id: mar_sex_pipe
day: sexta
area: operacoes
status: aguardando_aprovacao
created_at: 2026-05-29 10:20
---

# PIPE · Mapa de automações — n8n + integrações críticas

**MAPA COMPLETO DE AUTOMAÇÕES**

**Top 5 Automações Críticas**

1. **Novo pedido Shopify → WhatsApp Eduardo (Z-API)**
 * Trigger: Novo pedido no Shopify
 * Ação: Enviar mensagem de WhatsApp para Eduardo via Z-API
 * Ferramentas: Shopify, Z-API, n8n
 * Tempo de config estimado: 30 minutos
2. **Carrinho abandonado → email D+1/D+3/D+7 (via LENA/Klaviyo)**
 * Trigger: Carrinho abandonado no Shopify
 * Ação: Enviar email de follow-up para o cliente via LENA/Klaviyo
 * Ferramentas: Shopify, LENA/Klaviyo, n8n
 * Tempo de config estimado: 1 hora
3. **Pagamento confirmado → log no vault + notificação**
 * Trigger: Pagamento confirmado no Shopify
 * Ação: Registrar log no vault e enviar notificação para Eduardo
 * Ferramentas: Shopify, n8n, vault
 * Tempo de config estimado: 20 minutos
4. **Novo seguidor Instagram → DM de boas-vindas (ZARA)**
 * Trigger: Novo seguidor no Instagram
 * Ação: Enviar mensagem de boas-vindas via DM para o novo seguidor
 * Ferramentas: Instagram, ZARA, n8n
 * Tempo de config estimado: 40 minutos
5. **Post agendado NOX → FEED publica automaticamente**
 * Trigger: Post agendado no NOX
 * Ação: Publicar post automaticamente no FEED
 * Ferramentas: NOX, FEED, n8n
 * Tempo de config estimado: 45 minutos

**Automações já nos Workflows n8n existentes (01-10)**

* Automação 1: Novo pedido Shopify → WhatsApp Eduardo (Z-API) (Workflow 03)
* Automação 3: Pagamento confirmado → log no vault + notificação (Workflow 05)

**Configuração Manual por Eduardo**

* Configurar as credenciais de API do Z-API e do Shopify
* Configurar as regras de negócio para as automações (por exemplo, definir o tempo de envio de emails para carrinhos abandonados)
* Aprovar os textos e layouts das mensagens de WhatsApp e emails

**Roadmap de Automações com Prioridade**

1. Automação 2: Carrinho abandonado → email D+1/D+3/D+7 (via LENA/Klaviyo)
2. Automação 4: Novo seguidor Instagram → DM de boas-vindas (ZARA)

