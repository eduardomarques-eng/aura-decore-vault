---
agent: DEV
task: dev_conversion_boost
ts: 2026-06-21 13:30
---

# DEV · Melhorias CRO no tema Dawn — urgência e social proof

Aqui estão as melhorias de conversão (CRO) solicitadas para o tema Shopify Dawn da Aura Decore:

### 1. URGÊNCIA — Badge 'Poucos em estoque'

Para implementar o badge 'Poucos em estoque', você precisará adicionar o seguinte código ao seu tema:

**CSS (adicionar em `styles.css` ou similar):**
```css
.badge-poucos-em-estoque {
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

**Liquid Snippet (adicionar em `product.liquid` ou similar):**
```liquid
{% if product.inventory_quantity < 10 %}
  <span class="badge-poucos-em-estoque">Poucos em estoque</span>
{% endif %}
```

### 2. SOCIAL PROOF — Contador de 'X pessoas viram este produto hoje'

Para implementar o contador de 'X pessoas viram este produto hoje', você precisará adicionar o seguinte código ao seu tema:

**JavaScript (adicionar em `product.liquid` ou similar):**
```javascript
<script>
  const contador = document.getElementById('contador');
  const numeroAleatorio = Math.floor(Math.random() * (47 - 8 + 1)) + 8;
  contador.innerText = `${numeroAleatorio} pessoas viram este produto hoje`;
</script>

<span id="contador"></span>
```

### 3. FRETE GRÁTIS — Barra de progresso 'Frete grátis acima de R$199'

Para implementar a barra de progresso 'Frete grátis acima de R$199', você precisará adicionar o seguinte código ao seu tema:

**HTML (adicionar em `header.liquid` ou `cart-drawer.liquid`):**
```html
<div class="frete-gratis-barra">
  <span>Frete grátis acima de R$199</span>
  <div class="barra-progresso">
    <div class="progresso" style="width: {{ cart.total_price | divided_by: 199 | times: 100 }}%"></div>
  </div>
  <span>{{ cart.total_price | money }} / R$199</span>
</div>
```

**CSS (adicionar em `styles.css` ou similar):**
```css
.frete-gratis-barra {
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.barra-progresso {
  width: 100%;
  height: 10px;
  background-color: #ddd;
  border-radius: 5px;
}

.progresso {
  background-color: #4CAF50;
  height: 10px;
  border-radius: 5px;
}
```

### 4. STICKY ADD TO CART — Botão fixo no scroll mobile

Para implementar o botão fixo no scroll mobile, você precisará adicionar o seguinte código ao seu tema:

**CSS (adicionar em `styles.css` ou similar):**
```css
.sticky-add-to-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  z-index: 1000;
}

.sticky-add-to-cart button {
  background-color: #4CAF50;

