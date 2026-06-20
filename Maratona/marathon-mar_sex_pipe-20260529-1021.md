---
agent: PIPE
task_id: mar_sex_pipe
day: sexta
area: operacoes
status: aguardando_aprovacao
created_at: 2026-05-29 10:21
---

# PIPE · Mapa de automações — n8n + integrações críticas


# 🗺️ MAPA COMPLETO DE AUTOMAÇÕES - MARATONA FIM DE SEMANA

## 🚨 TOP 5 AUTOMAÇÕES CRÍTICAS (Prioridade de Execução)

### 1. Novo Pedido Shopify → WhatsApp Eduardo (Z-API)
- **Trigger:** Webhook Shopify - novo pedido
- **Ação:** Enviar mensagem via Z-API WhatsApp para contato cadastrado
- **Ferramentas:** Shopify, Z-API, n8n
- **Tempo de config:** 45 minutos
- **Payload essencial:** Número do pedido, cliente, valor, produto

### 2. Carrinho Abandonado → Email D+1/D+3/D+7 (LENA/Klaviyo)
- **Trigger:** Shopify - carrinho abandonado
- **Ação:** Série de 3 emails automáticos em intervalos específicos
- **Ferramentas:** Shopify, LENA/Klaviyo, n8n
- **Tempo de config:** 2 horas (criação dos templates + sequência)
- **Observação:** Recomendo migrar para Klaviyo se LENA não tiver integração direta

### 3. Pagamento Confirmado → Log no Vault + Notificação
- **Trigger:** Webhook Shopify - pagamento aprovado
- **Ação:** Salvar no vault + enviar notificação
- **Ferramentas:** Shopify, Vault (AWS/S3), n8n
- **Tempo de config:** 30 minutos
- **Payload:** ID transação, valor, cliente, data

### 4. Novo Seguidor Instagram → DM de Boas-Vindas (ZARA)

