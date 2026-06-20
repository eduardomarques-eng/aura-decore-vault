---
agent: PIPE
task_id: mar_sex_pipe
day: sexta
area: operacoes
status: aguardando_aprovacao
created_at: 2026-05-29 23:56
---

# PIPE · Mapa de automações — n8n + integrações críticas

**MAPA COMPLETO DE AUTOMAÇÕES**

**Top 5 Automações CRÍTICAS para ter rodando antes de lançar:**

1. **Novo pedido Shopify → WhatsApp Eduardo (Z-API)**
 * Trigger: Webhook de novo pedido no Shopify
 * Ação: Enviar mensagem de confirmação de pedido para Eduardo via Z-API WhatsApp
 * Ferramentas: Shopify, Z-API WhatsApp, n8n
 * Tempo de config estimado: 2 horas
 * Observação: Automatizar a comunicação de pedidos novos para Eduardo garante que ele esteja sempre atualizado sobre os novos pedidos.

2. **Carrinho abandonado → email D+1/D+3/D+7 (via LENA/Klaviyo)**
 * Trigger: Webhook de carrinho abandonado no Shopify
 * Ação: Enviar email de reengajamento para o cliente em dias 1, 3 e 7 após o carrinho ter sido abandonado
 * Ferramentas: Shopify, LENA, Klaviyo, n8n
 * Tempo de config estimado: 3 horas
 * Observação: Automatizar a comunicação de carrinho abandonado ajuda a recuperar vendas perdidas e melhorar a experiência do cliente.

3. **Pagamento confirmado → log no vault + notificação**
 * Trigger: Webhook de pagamento confirmado no Shopify
 * Ação: Registrar o pagamento no vault e enviar notificação para Eduardo
 * Ferramentas: Shopify, vault, n8n
 * Tempo de config estimado: 1 hora
 * Observação: Automatizar a gravação de pagamentos garante que os dados estejam sempre atualizados e que as notificações sejam enviadas de forma eficiente.

4. **Novo seguidor Instagram → DM de boas-vindas (ZARA)**
 * Trigger: Webhook de novo seguidor no Instagram
 * Ação: Enviar DM de boas-vindas para o novo seguidor
 * Ferramentas: Instagram, ZARA, n8n
 * Tempo de config estimado: 2 horas
 * Observação: Automatizar a comunicação de novos seguidores ajuda a criar uma experiência mais pessoal e atraente para os seguidores.

5. **Post agendado NOX → FEED publica automaticamente**
 * Trigger: Post agendado no NOX
 * Ação: Publicar o post automaticamente no FEED
 * Ferramentas: NOX, FEED, n8n
 * Tempo de config estimado: 2 horas
 * Observação: Automatizar a publicação de posts ajuda a manter o conteúdo atualizado e a atração de seguidores.


