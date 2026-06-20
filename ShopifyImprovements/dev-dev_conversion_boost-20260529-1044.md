---
agent: DEV
task: dev_conversion_boost
ts: 2026-05-29 10:44
---

# DEV · Melhorias CRO no tema Dawn — urgência e social proof

Aqui estão as melhorias de conversão (CRO) solicitadas para o tema Shopify Dawn da Aura Decore:

**1. URGÊNCIA — Badge 'Poucos em estoque' nas páginas de produto**

Adicione o seguinte código CSS no arquivo `styles.css`:
```css
.badge-poucos-em-estoque {
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
E adicione o seguinte código Liquid no arquivo `product.liquid`:
```liquid
{% if product.inventory_quantity < 10 %}
  <span class="badge-poucos-em-estoque">Poucos em estoque</span>
{% endif %}
```
Isso adicionará um badge laranja com o texto "Poucos em estoque" quando o estoque do produto for menor que 10.

**2. SOCIAL PROOF — Contador de 'X pessoas viram este produto hoje'**

Adicione o seguinte código JavaScript no arquivo `product.liquid`:
```javascript
<script>
  const viewsToday = Math.floor(Math.random() * 40) + 8; // número aleatório entre 8 e 47
  document.querySelector('.views-today').innerHTML = `${viewsToday} pessoas viram este produto hoje`;
</script>
```
E adicione o seguinte código HTML no arquivo `product.liquid`:
```html
<div class="views-today"></div>
```
Isso adicionará um texto que mostra o número de pessoas que viram o produto hoje, com um número aleatório entre 8 e 47.

**3. FRETE GRÁTIS — Barra de progresso 'Frete grátis acima de R$199'**

Adicione o seguinte código HTML no arquivo `header.liquid` ou `cart-drawer.liquid`:
```html
<div class="frete-gratis-barra">
  <div class="frete-gratis-progresso" style="width: {{ cart.total_price | divided_by: 199 | times: 100 }}%"></div>
  <span>Frete grátis acima de R$199</span>
</div>
```
E adicione o seguinte código CSS no arquivo `styles.css`:
```css
.frete-gratis-barra {
  background-color: #f7f7f7;
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
}

.frete-gratis-progresso {
  background-color: #4CAF50;
  height: 10px;
}

.frete-gratis-barra span {
  font-size: 12px;
  color: #666;
}
```
Isso adicionará uma barra de progresso que mostra o quanto falta para alcançar o frete grátis.

**4. STICKY ADD TO CART — Botão fixo no scroll mobile**

Adicione o seguinte código CSS no arquivo `styles.css`:
```css
.sticky-add-to-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  text-align: center;
  z-index: 1000;
}

.sticky-add-to-cart button {
  background-color: #4CAF50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
```
E ad
