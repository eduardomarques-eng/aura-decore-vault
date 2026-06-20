# 🧠 Memória Compartilhada — Overhaul da Loja (Junho 2026)

Esta nota registra a reestruturação e melhoria visual/CRO completa realizada na loja **Aura Decore** no dia 07 de Junho de 2026, alinhando a estética minimalista Japandi e trazendo os padrões de conversão premium baseados no e-commerce referência **Dcorada**.

---

## 📅 Data da Atualização
- **Data:** 2026-06-07
- **Fase:** Ajustes Finais / CRO e Design System

---

## 🛠️ Alterações e Estrutura do Tema Shopify

### 1. Cabeçalho (Header.liquid) — Inspirado na Dcorada
- **Barra de Anúncios Superior:** Faixa promocional fina com scroll horizontal e avisos dinâmicos.
- **Top Bar:** Links de atendimento ("Fale Conosco"), WhatsApp com link direto e e-mail corporativo.
- **Barra Central:** Logotipo centralizado e barra de pesquisa estendida integrada com autocomplete básico.
- **Menu de Navegação:** Suporte a menus dropdown suspensos elegantes (off-white com sombras suaves e transição premium).
- **Interações CSS:**
  - Efeito *shrink* dinâmico ao rolar a página (o cabeçalho encolhe para poupar espaço vertical).
  - Hover com transição gradual (`ease-in-out`) em todos os itens.

### 2. Rodapé (Footer.liquid) — Inspirado na Dcorada
- **Layout de 4 Colunas:**
  - **Coluna 1 (Sobre nós / Logo):** Texto da marca expressando a essência Japandi.
  - **Coluna 2 (Links de Navegação):** Links rápidos institucionais e de suporte.
  - **Coluna 3 (Fale Conosco / Atendimento):** Telefone, e-mail e horários de atendimento.
  - **Coluna 4 (Newsletter):** Campo de inscrição com bordas minimalistas.
- **Área Inferior:**
  - CNPJ oficial da marca e direitos autorais.
  - Selos de Segurança: SSL e Google Safe Browsing.
  - Selos de Formas de Pagamento: Cartões e PIX integrados graficamente em formato minimalista off-white.

### 3. Background Geral & Paleta Japandi
- **Cor Dominante:** Bege pastel suave `#F7F2EC` (background geral da loja para eliminar fundos brancos puros).
- **Cor de Destaque (Accent):** Dourado wabi-sabi `#B8976A` para CTAs e botões principais, melhorando drasticamente o contraste visual.
- **Cor de Texto:** Grafite escuro `#2A2A2A` para legibilidade sem perder a suavidade.

### 4. Banners & Cards de Produto
- **Hero Banner:** Contraste elevado nos botões de chamada para ação (CTAs preenchidos com dourado em vez de outline branco).
- **Cards de Produto:** 
  - Cantos arredondados suavizados de `8px` para `4px` (Visual clean e sofisticado).
  - Zoom de hover em `1.05` com transição `cubic-bezier(0.25, 1, 0.5, 1)` + leve clareamento do card.

### 5. Lookbook Interativo (Silêncio Dourado)
- **Hotspots (Tooltips):**
  - Três pontos interativos pulsantes que, ao passar o mouse, abrem tooltips elegantes com informações do produto:
    - **Hotspot 1:** Vaso Alma · R$ 289
    - **Hotspot 2:** Manta Ninho · R$ 349
    - **Hotspot 3:** Luminária Halo · R$ 429

### 6. Novas Seções Liquid Customizadas
- **Grid Low-Ticket (`aura-low-ticket.liquid`):** Coleção de 4 produtos de entrada baseados em rituais diários (Difusores, Velas aromáticas, Bandejas, Quadros minimalistas) com botão rápido "Adicionar ao Refúgio".
- **Seções Conceituais (`aura-conceptual.liquid`):** Três blocos intercalados de lifestyle apresentando os pilares da marca: *Neuroarquitetura*, *Biofilia* e *Design Bali*.
- **Prova Social Pop-up (`aura-social-proof.js.liquid`):** Sistema rotativo que exibe pequenas notificações de compras recentes simuladas no canto inferior esquerdo.

---

## 🧠 Alinhamento de Memória dos Agentes
- **DEV (Desenvolvedor):** É o responsável técnico por manter essas customizações no liquid e CSS, aplicando as paletas sazonais descritas no diário sem quebrar esta nova estrutura.
- **THEO (Shopify Operator):** Deve monitorar a criação de produtos e coleções garantindo que eles se integrem com os ids das coleções low-ticket e principais do menu.
- **LUNA (Designer Visual):** Deve basear os novos banners criativos na paleta bege pastel/off-white e dourada wabi-sabi.
- **VERA (Copywriter):** Continuar mantendo o tom intimista e sofisticado ("Objetos com intenção. Espaços com alma") nos textos de produtos.
