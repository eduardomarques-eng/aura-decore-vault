---
agent: PIPE
task_id: mar_sex_pipe
day: sexta
area: operacoes
status: aguardando_aprovacao
created_at: 2026-05-30 10:31
---

# PIPE · Mapa de automações — n8n + integrações críticas

Fala, Eduardo. **PIPE na área.** 

Para a **Maratona Fim de Semana (29/05/2026)**, não podemos ter gargalo operacional. O objetivo aqui é: **vender no automático e avisar o time em tempo real**. Se o pedido cair e você não souber, perdemos o timing do pós-venda.

Abaixo, o mapa tático de automações.

---

### 🗺️ ROADMAP DE AUTOMAÇÕES: MARATONA FIM DE SEMANA

#### 1. Top 5 Automações CRÍTICAS (Prioridade Máxima)

| Prioridade | Automação | Trigger (Gatilho) | Ação (O que acontece) | Ferramentas | Config. Est. |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **01** | **Alerta de Venda Real-time** | Webhook `orders/paid` (Shopify) | Envia mensagem formatada para seu WhatsApp com: Valor, Produto e Cliente. | Shopify $\to$ n8n $\to$ Z-API | 2h |
| **02** | **Recuperação de Carrinho** | Evento `Checkout Created` $\to$ No Purchase | Sequência de e-mails persuasivos para resgate da venda. | Shopify $\to$ Klaviyo/LENA | 4h |
| **03** | **Vault de Vendas** | Webhook `orders/paid` (Shopify) | Grava dados da venda em planilha/banco para controle financeiro e CRM. | Shopify $\to$ n8n $\to$ Google Sheets/Airtable | 2h |
| **04** | **Boas-vindas Automática** | New Follower (Instagram) | DM personalizada convidando para o grupo da Maratona. | Instagram $\to$ ManyChat/ZARA $\to$ WhatsApp | 3h |
| **05** | **Sincronização de Conteúdo** | Agendamento NOX | Publicação automática nos canais de distribuição (Feed/Stories). | NOX $\to$ API Instagram/FB | 2h |

---

#### 2. Detalhamento Técnico (Fluxo de Execução)

**A) Novo pedido Shopify $\to$ WhatsApp Eduardo**
*   **Fluxo:** `Shopify Webhook` $\to$ `n8n (Filter: Paid)` $\to$ `Z-API (Send Text)`.
*   **Objetivo:** Dopamina imediata e controle de estoque/logística instantâneo.

**B) Carrinho Abandonado (D+1/D+3/D+7)**
*   **Fluxo:** `Shopify` $\to$ `Klaviyo (Trigger: Abandoned Cart)`.
*   **Régua:** 
    *   D+1: Lembrete suave.
    *   D+3: Quebra de objeção (Prova Social).
    *   D+7: Última chamada / Cupom de urgência.

**C) Pagamento Confirmado $\to$ Log no Vault**
*   **Fluxo:** `Shopify` $\to$ `n8n` $\to$ `Google Sheets`.
*   **Objetivo:** Ter um "espelho" das vendas fora do Shopify para análise de ROI rápida sem precisar abrir o admin.

**D) Novo Seguidor Instagram $\to$ DM Boas-vindas**
*   **Fluxo:** `Instagram Webhook` $\to$ `ManyChat/ZARA` $\to$ `Mensagem de Boas-vindas`.
*   **Objetivo:** Transformar o seguidor frio em lead quente no WhatsApp imediatamente.

**E) Post Agendado NOX $\to$ Feed**
*   **Fluxo:** `NOX Planner` $\to$ `API Graph` $\to$ `Instagram Feed`.
*   **Objetivo:** Zero trabalho manual de postagem durante a maratona.

---

#### 3. Auditoria de Workflows Existentes (01-10)

Analisando a biblioteca atual de n8n, a situação é a seguinte:

*   **✅ Já Implementado (Workflows 01-04):** A estrutura de recebimento de webhooks do Shopify já está montada. A conexão com a Z-API está ativa.
*   **⚠️ Parcialmente Implementado (Workflow 07):** O log de vendas existe, mas precisa de atualização para os novos produtos da Maratona.
*   **❌ Pendente (Novos):** A integração de novos seguidores (ZARA) e a régua específica de e-mails da Maratona precisam ser criadas do zero.

---

#### 4. Checklist de Configuração Manual (Eduardo)

Para que eu possa subir as automações, preciso que você:

1.  **Klaviyo/LENA:** Aprovar os textos/copy dos e-mails de recuperação de carrinho.
2.  **ZARA/ManyChat:** Definir a frase de boas-vindas para os novos seguidores.
3.  **Shopify:** Confirmar se as tags de produtos da Maratona estão corretas para a filtragem do Vault.
4.  **NOX:** Validar as datas e horários do calendário de postagens.

---

### 🚀 Próximos Passos:

Eduardo, a **Prioridade 01 (Alerta de Vendas)** e a **Prioridade 02 (Carrinho Abandonado)** são as que trazem dinheiro direto para o bolso. 

**Posso dar o "start" na implementação dessas duas agora?** 

No aguardo do seu OK.
