---
agent: DEV
task: dev_conversion_boost
ts: 2026-07-02 07:30
---

# DEV · Melhorias CRO no tema Dawn — urgência e social proof

Segue abaixo as melhorias de conversão solicitadas para o tema Shopify Dawn da Aura Decore:

### 1. URGÊNCIA — Badge 'Poucos em estoque'

Para implementar o badge de "Poucos em estoque", você precisará adicionar um snippet de CSS e Liquid ao seu tema. Este badge será exibido nas páginas de produto quando o estoque for menor que 10.

**CSS (adicionar ao arquivo `styles.css` ou equivalente):**
```css
.badge-poucos-em-estoque {
  background-color: #ff9900;
  color: #fff;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 10px;
}
```

**Liquid (adicionar ao arquivo `product.liquid` ou equivalente):**
```liquid
{% if product.inventory_quantity < 10 and product.inventory_quantity > 0 %}
  <span class="badge-poucos-em-estoque">Poucos em estoque</span>
{% endif %}
```

### 2. SOCIAL PROOF — Contador de 'X pessoas viram este produto hoje'

Para simular o contador de pessoas que viram o produto, você pode usar um snippet de JavaScript. Este script gera um número aleatório entre 8 e 47 para simular o número de visualizações.

**JavaScript (adicionar ao arquivo `theme.js` ou equivalente):**
```javascript
function contadorVisualizacoes() {
  const numeroVisualizacoes = Math.floor(Math.random() * (47 - 8 + 1)) + 8;
  document.getElementById('visualizacoes-hoje').innerHTML = `${numeroVisualizacoes} pessoas viram este produto hoje`;
}

// Chamada inicial
contadorVisualizacoes();

// Atualiza a cada 10 minutos (opcional)
setInterval(contadorVisualizacoes, 600000); // 10 minutos
```

**HTML (adicionar ao arquivo `product.liquid` ou equivalente):**
```html
<p id="visualizacoes-hoje"></p>
```

### 3. FRETE GRÁTIS — Barra de progresso 'Frete grátis acima de R$199'

Para implementar a barra de progresso do frete grátis, você precisará de HTML, CSS e um pouco de JavaScript para calcular o progresso. Este exemplo é para exibir a barra no header ou cart drawer.

**HTML (adicionar ao arquivo `header.liquid` ou `cart.liquid`):**
```html
<div class="frete-gratis-barra">
  <div class="progresso" id="progresso-frete-gratis"></div>
  <span id="valor-frete-gratis">Frete grátis acima de R$199</span>
</div>
```

**CSS (adicionar ao arquivo `styles.css` ou equivalente):**
```css
.frete-gratis-barra {
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
  width: 200px;
  position: relative;
}

.progresso {
  background-color: #4CAF50;
  height: 10px;
  width: 0%;
  border-radius: 5px;
  transition: width 0.5s;
}
```

**JavaScript (adicionar ao arquivo `theme.js` ou equivalente):**
```javascript
function atualizaBarraFreteGratis() {
  const subtotal = {{ cart.total_price | divided_by: 100 }}; // Ajuste de acordo com a forma como o subtotal é calculado
  const metaFreteGratis = 
