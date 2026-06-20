---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-05-29 10:44
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema das imagens de produto sendo esticadas ou deformadas no tema Dawn da Shopify, você precisará adicionar o seguinte CSS ao seu tema. Esse código irá garantir que as imagens mantenham uma proporção 1:1 (quadrado), usem `object-fit: cover` para preencher o espaço sem distorção, e mantenham a proporção correta tanto em dispositivos móveis quanto em desktops.

```css
/* Estilos para imagens de produto */
.product__image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

/* Para garantir que as thumbnails de carrossel mantenham a proporção */
.carousel__thumbnail {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

/* Adicional para garantir a proporção em diferentes tamanhos de tela */
@media only screen and (max-width: 768px) {
  .product__image, .carousel__thumbnail {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
}

/* Para garantir que as imagens de produto mantenham uma proporção 1:1 (quadrado) */
.product__image-wrapper {
  position: relative;
  padding-top: 100%; /* Mantém a proporção 1:1 */
}

.product__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```

**Onde adicionar o CSS no tema Dawn:**

1. Acesse o seu painel de administração da Shopify.
2. Vá para **Online Store** > **Tema** > **Ações** > **Editar código**.
3. No editor de código, localize o arquivo `styles.css.liquid` ou `styles.css` dentro da pasta `assets`.
4. Cole o código CSS fornecido acima no final do arquivo `styles.css.liquid` ou `styles.css`.
5. Se preferir organizar melhor o seu código, você também pode criar um novo arquivo CSS dentro da pasta `assets` (por exemplo, `product-images.css.liquid`), colar o código lá, e então incluir esse arquivo no layout do seu tema.

**Observação:** Certifique-se de que não há regras CSS conflitantes em outros arquivos que possam sobrescrever esses estilos. Se encontrar dificuldades, verifique o console do navegador para erros de CSS ou utilize as ferramentas de desenvolvedor do navegador para inspecionar os elementos e entender melhor como os estilos estão sendo aplicados.

Essas alterações devem ser suficientes para garantir que as imagens de produto no tema Dawn sejam exibidas corretamente, sem distorções, tanto em dispositivos móveis quanto em desktops.
