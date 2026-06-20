# 📦 Guia de Integração DSers + AliExpress — Aura Decore

> Responsável: KAI (portfólio e fornecedores) · THEO (sincronização técnica) · PIPE (fluxos n8n)
> Prioridade: Alta — essencial para automatizar o envio de pedidos e atualização de estoque.

---

## ⚡ O que é o DSers?
O **DSers** é o aplicativo oficial parceiro do AliExpress para dropshipping na Shopify. Ele substitui o antigo Oberlo e permite processar centenas de pedidos em lote com um único clique, além de sincronizar preços e estoque automaticamente.

---

## Passo 1 — Instalar e Conectar o App
1. Acesse o **Shopify Admin** da Aura Decore (`aura-decor-17.myshopify.com`).
2. Vá em **Apps** → buscar por **DSers AliExpress Dropshipping** e clique em **Instalar**.
3. Escolha o plano **Basic (Gratuito)** — ele permite até 3 lojas e 3.000 produtos, mais que suficiente para a fase atual.
4. Crie sua conta no DSers ou faça login com o e-mail da loja (`auras.de@gmail.com`).

---

## Passo 2 — Vincular a conta AliExpress
1. No painel do DSers, acesse **Configurações** (engrenagem no canto inferior esquerdo).
2. Vá na aba **AliExpress** → clique em **Link AliExpress Account**.
3. Faça login com a conta AliExpress criada para a Aura Decore e clique em **Autorizar**.
4. Certifique-se de que a conta está ativa no **Remessa Conforme** para garantir a isenção de impostos federais até $50 e o cálculo do ICMS direto no checkout do AliExpress.

---

## Passo 3 — Configurações Críticas no DSers (Segurança e Marca)

Para garantir que o cliente receba uma embalagem premium e "limpa" (sem panfletos chineses ou preços do fornecedor), configure as seguintes regras no painel do DSers:

### 3.1 — Mensagem Automática ao Fornecedor
Esta mensagem é enviada automaticamente a cada pedido feito no AliExpress:
1. Acesse **Configurações** → **AliExpress Order**.
2. No campo **Leave a message to the supplier**, cole o seguinte texto em inglês:
   > *“We are dropshipping. Please DO NOT include any invoice, QR code, promotional materials, or your brand logo in the package. Please ship as soon as possible. Thank you for your cooperation!”*

### 3.2 — Métodos de Envio Preferenciais (Shipping Rules)
O método de envio para o Brasil deve ser rápido e rastreável pelos Correios:
1. Vá em **Configurações** → **Shipping**.
2. Crie uma regra de envio para o **Brasil**.
3. Defina o método prioritário como: **AliExpress Standard Shipping** (média de 12 a 20 dias, com rastreio de final `BR` ativo).

---

## Passo 4 — Mapeamento de Produtos & Fornecedores (ERP Sincronizado)

No banco de dados local do nosso **ERP Aura Decore** (`aura_erp.db`), atualizamos as relações de fornecedores de todos os **48 produtos ativos** para bater com os IDs do AliExpress vinculados no DSers:

| ID Fornecedor ERP | Nome do Fornecedor | Tipo | Categoria Associada | Prazo Médio |
|---|---|---|---|---|
| **4** | AliExpress - Wabi-Sabi Ceramic Store | Dropshipping | Vasos, potes e cerâmicas | 20 dias |
| **6** | AliExpress - Halo Lighting Co., Ltd. | Dropshipping | Luminárias e abajures LED | 18 dias |
| **2** | Importação Dropshipping - Aromas & Decor | Dropshipping | Difusores, incensos e sachês | 20 dias |
| **1** | Fornecedor Nacional - Artesanato MG | Nacional | Bandejas e caixas de madeira | 7 dias |
| **5** | Fornecedor Nacional - Estofados Premium SC | Nacional | Poltronas, almofadas e mantas | 12 dias |
| **3** | Fornecedor Nacional - Botânicos Secos | Nacional | Buquês de pampas e eucalipto | 5 dias |

### Como Mapear no Painel DSers:
1. Vá no menu **Open Orders** ou **Import List** no DSers.
2. Clique no produto e selecione **Mapping Details**.
3. Adicione a URL do produto fornecedor correspondente do AliExpress para cada variante (cor, tamanho).
4. O DSers usará essa URL para preencher os dados de envio automaticamente na hora de comprar.

---

## Passo 5 — Como Processar um Pedido (Fluxo Diário)
Quando um cliente comprar na Aura Decore:
1. O pedido cai no Shopify e é importado automaticamente para o **n8n** (Workflow `01-novo-pedido-shopify.json`).
2. O pedido aparece no painel do DSers em **Open Orders** → status **Awaiting Payment**.
3. Clique em **Order** (ou selecione múltiplos e clique em **Bulk Order**).
4. O DSers abre o AliExpress, insere o endereço do cliente e adiciona o produto ao carrinho de forma 100% automatizada.
5. Você só precisa clicar em **Pagar** no AliExpress (via Pix ou Cartão de Crédito).
6. Assim que o fornecedor enviar e gerar o código de rastreio, o DSers puxa o código e atualiza a Shopify, que avisa o cliente automaticamente por e-mail e ativa a LENA para notificar por WhatsApp.

---

## Checklist de Validação DSers

- [x] App instalado e integrado à loja Shopify
- [x] Conta do AliExpress vinculada com sucesso
- [x] Mensagem anti-panfleto dropshipping configurada no AliExpress Order
- [x] AliExpress Standard Shipping definido como frete padrão
- [x] Todos os 48 produtos mapeados para os respectivos fornecedores no ERP
- [ ] Testar pedido teste de R$1,00 para validar o fluxo de preenchimento de endereço
