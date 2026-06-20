---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-17 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

**Solução para o Problema de Imagens Deformadas no Tema Dawn Shopify**

Para corrigir o problema das imagens de produto sendo esticadas ou deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao seu tema. Isso garantirá que as imagens sejam exibidas em uma proporção 1:1 (quadrado) sem distorção, utilizando `object-fit: cover` para preencher o espaço disponível sem esticar as imagens.

**CSS para Adicionar:**
```css
/* Corrigir aspect ratio 1:1 para todas as imagens de produto */
.product__image-wrapper {
  position: relative;
  padding-bottom: 100%; /* Proporção 1:1 */
}

.product__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Manter proporção para thumbnails de carrossel */
.product__thumbnail {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

/* Fix para mobile e desktop */
@media only screen and (max-width: 768px) {
  .product__image-wrapper {
    padding-bottom: 100%; /* Manter proporção em dispositivos móveis */
  }
}

@media only screen and (min-width: 769px) {
  .product__image-wrapper {
    padding-bottom: 100%; /* Manter proporção em dispositivos de mesa */
  }
}
```

**Onde Adicionar o CSS:**

No tema Dawn Shopify, você pode adicionar o CSS acima ao arquivo `styles.css.liquid` ou `styles.css` localizado na pasta `assets` do seu tema. Se você preferir manter as alterações organizadas, pode criar um novo arquivo chamado `custom.css` na pasta `assets` e adicionar o CSS lá. Em seguida, você precisará incluir esse arquivo no layout do seu tema.

Para incluir o novo arquivo `custom.css` no seu tema, vá para `layout.liquid` e adicione a seguinte linha dentro da tag `<head>`:
```liquid
{{ 'custom.css' | asset_url | stylesheet_tag }}
```
Isso garantirá que as alterações de CSS sejam aplicadas ao seu tema.

**Observações:**

- Certifique-se de que as classes `.product__image-wrapper` e `.product__image` estejam presentes no seu HTML para que o CSS possa ser aplicado corretamente. Se as classes forem diferentes, ajuste o CSS para corresponder às classes usadas no seu tema.
- Se você estiver usando um tema personalizado ou uma versão mais antiga do Dawn, os nomes das classes podem variar. Nesse caso, você precisará inspecionar o elemento no navegador para identificar as classes corretas e ajustar o CSS de acordo.
- Sempre faça um backup do seu tema antes de fazer alterações significativas.

Espero que isso ajude a resolver o problema de imagens deformadas no seu tema Dawn Shopify. Se tiver mais alguma dúvida ou precisar de ajuda adicional, não hesite em perguntar!
