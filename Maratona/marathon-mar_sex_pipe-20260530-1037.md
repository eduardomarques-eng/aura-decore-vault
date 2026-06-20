---
agent: PIPE
task_id: mar_sex_pipe
day: sexta
area: operacoes
status: aguardando_aprovacao
created_at: 2026-05-30 10:37
---

# PIPE · Mapa de automações — n8n + integrações críticas

**MAPA COMPLETO DE AUTOMAÇÕES para o lançamento**

**Top 5 automações CRÍTICAS para ter rodando antes de lançar:**

1. **Novo pedido Shopify → WhatsApp Eduardo (Z-API)**
 * Trigger: Webhook Shopify - "Pedido criado"
 * Ação: Enviar mensagem via Z-API WhatsApp
 * Ferramentas: Shopify, n8n, Z-API
 * Tempo de config estimado: 4 horas
 * Observação: Essa automação é crítica pois garante que Eduardo seja notificado imediatamente sobre novos pedidos.

2. **Carrinho abandonado → email D+1/D+3/D+7 (via LENA/Klaviyo)**
 * Trigger: Webhook Shopify - "Carrinho abandonado"
 * Ação: Enviar email via LENA/Klaviyo
 * Ferramentas: Shopify, n8n, LENA/Klaviyo
 * Tempo de config estimado: 6 horas
 * Observação: Essa automação ajuda a recuperar vendas abandonadas e é importante para o sucesso do negócio.

3. **Pagamento confirmado → log no vault + notificação**
 * Trigger: Webhook Shopify - "Pagamento aprovado"
 * Ação: Registrar log no vault + notificar via email
 * Ferramentas: Shopify, n8n, vault
 * Tempo de config estimado: 3 horas
 * Observação: Essa automação garante que os logs de pagamento sejam registrados e notificados.

4. **Novo seguidor Instagram → DM de boas-vindas (ZARA)**
 * Trigger: API Instagram - "Novo seguidor"
 * Ação: Enviar DM de boas-vindas via ZARA
 * Ferramentas: Instagram, n8n, ZARA
 * Tempo de config estimado: 5 horas
 * Observação: Essa automação ajuda a estabelecer uma conexão com os seguidores do Instagram.

5. **Post agendado NOX → FEED publica automaticamente**
 * Trigger: API NOX - "Post agendado"
 * Ação: Publicar feed automaticamente
 * Ferramentas: NOX, n8n, FEED
 * Tempo de config estimado: 4 horas
 * Observação: Essa automação garante que os post sejam publicados automaticamente.

**Automações que já estão nos workflows n8n existentes (01-10):**

- Workflow 01: Novo pedido Shopify → log no vault (já existe)
- Workflow 03: Pagamento confirmado → log no vault (já existe)
- Workflow 05: Novo seguidor Instagram → log no banco de dados (
