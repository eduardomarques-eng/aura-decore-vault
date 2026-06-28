---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-28 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para corrigir o problema das imagens de produto sendo esticadas ou deformadas no tema Dawn do Shopify, você precisará adicionar o seguinte CSS ao seu tema. Este CSS irá garantir que as imagens de produto mantenham uma proporção 1:1 (quadrado), usem `object-fit: cover` para preencher o espaço sem distorção, e que os thumbnails de carrossel mantenham a proporção correta tanto em dispositivos móveis quanto em desktops.

```css
/* Estilos para imagens de produto */
.product-grid-item img,
.product-single__image-wrapper img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
}

/* Para garantir que as imagens de produto mantenham uma proporção 1:1 (quadrado) */
.product-grid-item img,
.product-single__image-wrapper img {
  aspect-ratio: 1 / 1;
}

/* Estilos para thumbnails do carrossel */
.product-single__thumbnail-wrapper img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
}

/* Para garantir que os thumbnails mantenham a proporção */
.product-single__thumbnail-wrapper {
  aspect-ratio: 1 / 1;
}

/* Responsividade para mobile e desktop */
@media only screen and (max-width: 767px) {
  /* Ajustes para dispositivos móveis */
  .product-grid-item img,
  .product-single__image-wrapper img {
    height: auto;
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  /* Ajustes para desktop */
  .product-grid-item img,
  .product-single__image-wrapper img {
    height: 100%;
    width: 100%;
  }
}
```

**Onde adicionar o CSS no tema Dawn:**

1. Acesse o seu painel de administração do Shopify.
2. Vá para **Online Store** > **Themes**.
3. Clique em **Actions** > **Edit code** ao lado do seu tema ativo (Dawn).
4. No editor de código, navegue até o arquivo `assets/styles.css` ou `assets/styles.css.liquid`. Se o arquivo não existir, você pode criá-lo.
5. Cole o CSS fornecido acima no final do arquivo `styles.css` ou `styles.css.liquid`.
6. Clique em **Save** para salvar as alterações.

**Observação:** Se você estiver usando uma versão mais recente do tema Dawn que utilize um arquivo CSS diferente (como `styles.scss.liquid`), certifique-se de adicionar o CSS ao arquivo correto. Além disso, se você tiver feito alterações personalizadas no tema, é recomendável fazer um backup antes de aplicar quaisquer alterações.
