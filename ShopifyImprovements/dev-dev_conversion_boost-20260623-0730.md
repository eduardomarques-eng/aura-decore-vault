---
agent: DEV
task: dev_conversion_boost
ts: 2026-06-23 07:30
---

# DEV · Melhorias CRO no tema Dawn — urgência e social proof

Aqui estão os snippets implementados para melhorar a conversão no tema Shopify Dawn da Aura Decore:

### 1. URGÊNCIA — Badge 'Poucos em estoque'

Adicione o seguinte código no arquivo `product.liquid` dentro da seção de produto:
```liquid
{% if product.inventory_quantity < 10 %}
  <span class="badge-urgencia">Poucos em estoque</span>
{% endif %}
```
E adicione o seguinte CSS no arquivo `styles.css`:
```css
.badge-urgencia {
  background-color: #FFC107;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 10px;
}
```
### 2. SOCIAL PROOF — Contador de 'X pessoas viram este produto hoje'

Adicione o seguinte código no arquivo `product.liquid` dentro da seção de produto:
```liquid
<div id="contador-vistas"></div>

<script>
  const contadorVistas = document.getElementById('contador-vistas');
  const numeroVistas = Math.floor(Math.random() * (47 - 8 + 1)) + 8;
  contadorVistas.innerHTML = `${numeroVistas} pessoas viram este produto hoje`;
</script>
```
E adicione o seguinte CSS no arquivo `styles.css`:
```css
#contador-vistas {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
}
```
### 3. FRETE GRÁTIS — Barra de progresso 'Frete grátis acima de R$199'

Adicione o seguinte código no arquivo `header.liquid` ou `cart-drawer.liquid`:
```html
<div class="barra-frete-gratis">
  <span>Frete grátis acima de R$199</span>
  <div class="progress-bar">
    <div class="progress" style="width: {{ cart.total_price | divided_by: 199 | times: 100 }}%"></div>
  </div>
</div>
```
E adicione o seguinte CSS no arquivo `styles.css`:
```css
.barra-frete-gratis {
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.progress-bar {
  width: 100%;
  height: 5px;
  background-color: #ddd;
  border-radius: 5px;
}

.progress {
  background-color: #4CAF50;
  height: 5px;
  border-radius: 5px;
}
```
### 4. STICKY ADD TO CART — Botão fixo no scroll mobile

Adicione o seguinte código no arquivo `product.liquid` dentro da seção de produto:
```html
<button class="sticky-add-to-cart" id="sticky-add-to-cart">
  Adicionar ao carrinho
</button>

<script>
  const stickyAddToCart = document.getElementById('sticky-add-to-cart');
  const productForm = document.querySelector('form.product-form');

  window.addEventListener('scroll', () => {
    if (window.scrollY > productForm.offsetTop + productForm.offsetHeight) {
      stickyAddToCart.classList.add('fixed');
    } else {
      stickyAddToCart.classList.remove('fixed');
    }
  });
</script>
```
E adicione o seguinte CSS no arquivo `styles.css`:
```css
.sticky-add-to-cart {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20
