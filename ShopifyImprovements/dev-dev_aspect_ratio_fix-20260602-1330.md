---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-02 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

**Solução para corrigir imagens de produto no tema Dawn Shopify**

Para corrigir o problema de imagens de produto esticadas/deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao arquivo `styles.css.liquid` do tema.

**Localização do arquivo:**
`config > temas > Dawn > assets > styles.css.liquid`

**Código CSS:**
```css
/* Corrigir aspect ratio 1:1 (quadrado) para todas as imagens de produto */
.product-card__image,
.product-card__image img {
  aspect-ratio: 1/1;
}

/* Usar object-fit: cover para preencher sem distorção */
.product-card__image img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

/* Garantir que thumbnails de carrossel mantenham proporção */
.product-card__image--carousel {
  aspect-ratio: 1/1;
}

/* Fix para mobile e desktop */
@media only screen and (max-width: 768px) {
  .product-card__image,
  .product-card__image img {
    height: 100%;
  }
}

@media only screen and (min-width: 769px) {
  .product-card__image,
  .product-card__image img {
    height: 100%;
  }
}
```
**Explicação:**

* `aspect-ratio: 1/1` define a proporção das imagens de produto como quadradas (1:1).
* `object-fit: cover` garante que as imagens sejam preenchidas sem distorção, mantendo a proporção original.
* `object-position: center` centraliza as imagens dentro do container.
* `width: 100%` e `height: 100%` definem a largura e altura das imagens como 100% do container.
* As media queries (`@media`) garantem que as imagens sejam exibidas corretamente em dispositivos móveis e desktop.

**Importante:** Certifique-se de que o arquivo `styles.css.liquid` esteja sendo carregado corretamente no seu tema Dawn Shopify. Se você tiver algum problema, verifique se o arquivo está sendo compilado corretamente e se não há erros de sintaxe.
