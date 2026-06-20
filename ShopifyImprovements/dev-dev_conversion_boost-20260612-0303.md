---
agent: DEV
task: dev_conversion_boost
ts: 2026-06-12 03:03
---

# DEV · Melhorias CRO no tema Dawn — urgência e social proof

Aqui estão as melhorias de conversão (CRO) solicitadas para o tema Shopify Dawn da Aura Decore:

### 1. URGÊNCIA — Badge 'Poucos em estoque'

Para adicionar um badge de "Poucos em estoque" quando o estoque é inferior a 10, você pode usar o seguinte snippet de CSS e Liquid:

**CSS (adicionar no arquivo `style.css` ou equivalente):**
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

**Liquid (adicionar no arquivo `product.liquid` ou equivalente):**
```liquid
{% if product.inventory_quantity < 10 %}
  <span class="badge-poucos-em-estoque">Poucos em estoque</span>
{% endif %}
```

### 2. SOCIAL PROOF — Contador de 'X pessoas viram este produto hoje'

Para simular um contador de pessoas que visualizaram o produto hoje, você pode usar o seguinte snippet de JavaScript:

**JavaScript (adicionar no arquivo `script.js` ou equivalente):**
```javascript
function contadorPessoas() {
  const numeroAleatorio = Math.floor(Math.random() * (47 - 8 + 1)) + 8;
  document.getElementById("contador-pessoas").innerHTML = `${numeroAleatorio} pessoas viram este produto hoje`;
}

contadorPessoas();
```

**HTML (adicionar no arquivo `product.liquid` ou equivalente):**
```html
<span id="contador-pessoas"></span>
```

### 3. FRETE GRÁTIS — Barra de progresso 'Frete grátis acima de R$199'

Para adicionar uma barra de progresso que mostre o progresso para alcançar o frete grátis, você pode usar o seguinte snippet de HTML e CSS:

**HTML (adicionar no arquivo `header.liquid` ou equivalente):**
```html
<div class="barra-frete-gratis">
  <div class="progress-bar" style="width: {{ cart.total_price | divided_by: 199 | times: 100 }}%"></div>
  <span>Frete grátis acima de R$199</span>
</div>
```

**CSS (adicionar no arquivo `style.css` ou equivalente):**
```css
.barra-frete-gratis {
  background-color: #f7f7f7;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%;
}

.progress-bar {
  background-color: #4CAF50;
  height: 10px;
  border-radius: 5px;
}

.barra-frete-gratis span {
  font-size: 12px;
  color: #666;
  margin-left: 10px;
}
```

### 4. STICKY ADD TO CART — Botão fixo no scroll mobile

Para adicionar um botão fixo de "Adicionar ao carrinho" no scroll mobile, você pode usar o seguinte snippet de CSS e JavaScript:

**CSS (adicionar no arquivo `style.css` ou equivalente):**
```css
.sticky-add-to-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  text-align: center;
  border: none;
  border-radius:
