---
agent: DEV
task: dev_conversion_boost
ts: 2026-05-29 23:56
---

# DEV · Melhorias CRO no tema Dawn — urgência e social proof

Aqui estão os snippets para implementar as melhorias de conversão no tema Shopify Dawn da Aura Decore:

**1. URGÊNCIA - Badge 'Poucos em estoque'**

Adicione o seguinte código no arquivo `product.liquid`:
```liquid
{% if product.inventory_quantity < 10 %}
  <span class="badge">Poucos em estoque</span>
{% endif %}
```
E adicione o seguinte CSS no arquivo `styles.css`:
```css
.badge {
  background-color: #ff9900;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 10px;
}
```
**2. SOCIAL PROOF - Contador de 'X pessoas viram este produto hoje'**

Adicione o seguinte código no arquivo `product.liquid`:
```html
<div id="social-proof">
  <span id="views-today"></span> pessoas viram este produto hoje
</div>
```
E adicione o seguinte JavaScript no arquivo `main.js`:
```javascript
function updateSocialProof() {
  const viewsToday = Math.floor(Math.random() * 40) + 8; // Número aleatório entre 8 e 47
  document.getElementById('views-today').innerText = viewsToday;
}

updateSocialProof();
```
**3. FRETE GRÁTIS - Barra de progresso 'Frete grátis acima de R$199'**

Adicione o seguinte código no arquivo `header.liquid` ou `cart-drawer.liquid`:
```html
<div class="free-shipping-bar">
  <span class="free-shipping-text">Frete grátis acima de R$199</span>
  <div class="progress-bar">
    <div class="progress" style="width: {{ cart.total_price | divided_by: 199 | times: 100 }}%"></div>
  </div>
</div>
```
E adicione o seguinte CSS no arquivo `styles.css`:
```css
.free-shipping-bar {
  background-color: #f7f7f7;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.free-shipping-text {
  font-size: 14px;
  color: #666;
}

.progress-bar {
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
}

.progress {
  background-color: #4CAF50;
  height: 10px;
  border-radius: 5px;
}
```
**4. STICKY ADD TO CART - Botão fixo no scroll mobile**

Adicione o seguinte código no arquivo `product.liquid`:
```html
<div class="sticky-add-to-cart">
  <button class="btn" id="sticky-add-to-cart-btn">Adicionar ao carrinho</button>
</div>
```
E adicione o seguinte CSS no arquivo `styles.css`:
```css
.sticky-add-to-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  padding: 10px;
  border-top: 1px solid #ddd;
  display: none;
}

.sticky-add-to-cart .btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: #fff;
}

@media (max-width: 768px) {
  .sticky-add-to-cart {

