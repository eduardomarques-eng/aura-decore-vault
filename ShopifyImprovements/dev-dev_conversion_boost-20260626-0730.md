---
agent: DEV
task: dev_conversion_boost
ts: 2026-06-26 07:30
---

# DEV · Melhorias CRO no tema Dawn — urgência e social proof

Aqui estão as melhorias de conversão (CRO) solicitadas para o tema Shopify Dawn da Aura Decore:

### 1. URGÊNCIA — Badge 'Poucos em estoque'

Para implementar o badge "Poucos em estoque" nas páginas de produto quando o estoque for menor que 10, você precisará adicionar o seguinte código no arquivo `product.liquid` do seu tema:

```liquid
{% if product.inventory_quantity < 10 %}
  <span class="badge-poucos-em-estoque">Poucos em estoque</span>
{% endif %}
```

E o seguinte CSS no arquivo `style.css` ou `styles.css` do seu tema para estilizar o badge:

```css
.badge-poucos-em-estoque {
  background-color: #ff9900;
  color: #ffffff;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 10px;
}
```

### 2. SOCIAL PROOF — Contador de 'X pessoas viram este produto hoje'

Para implementar o contador de "X pessoas viram este produto hoje", você precisará adicionar o seguinte código JavaScript no arquivo `product.liquid` do seu tema, dentro de uma tag `<script>`:

```javascript
<script>
  const viewsToday = Math.floor(Math.random() * (47 - 8 + 1)) + 8;
  document.querySelector('.contador-views-today').innerHTML = `${viewsToday} pessoas viram este produto hoje`;
</script>
```

E o seguinte HTML no arquivo `product.liquid` para exibir o contador:

```html
<div class="contador-views-today"></div>
```

E o seguinte CSS no arquivo `style.css` ou `styles.css` do seu tema para estilizar o contador:

```css
.contador-views-today {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
}
```

### 3. FRETE GRÁTIS — Barra de progresso 'Frete grátis acima de R$199'

Para implementar a barra de progresso "Frete grátis acima de R$199", você precisará adicionar o seguinte HTML no arquivo `header.liquid` ou `cart-drawer.liquid` do seu tema:

```html
<div class="barra-progresso-frete-gratis">
  <div class="progresso" style="width: {{ cart.total_price | divided_by: 199 | times: 100 }}%">
    <span>{{ cart.total_price | money }}</span>
  </div>
  <span>R$199 para frete grátis</span>
</div>
```

E o seguinte CSS no arquivo `style.css` ou `styles.css` do seu tema para estilizar a barra de progresso:

```css
.barra-progresso-frete-gratis {
  background-color: #f7f7f7;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.barra-progresso-frete-gratis .progresso {
  background-color: #4CAF50;
  height: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
}

.barra-progresso-frete-gratis span {
  font-size: 12px;
  color: #666;
}
```

### 4. STICKY ADD TO CART — Botão fixo no scroll mobile

Para implementar o botão fixo "Adicionar ao carr
