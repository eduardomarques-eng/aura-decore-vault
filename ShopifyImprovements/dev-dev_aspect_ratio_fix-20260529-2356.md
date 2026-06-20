---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-05-29 23:56
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para corrigir o problema de imagens de produto esticadas/deformadas no tema Dawn do Shopify, precisamos adicionar o seguinte CSS:

```css
/* Corrigir aspect ratio 1:1 (quadrado) para todas as imagens de produto */
.product-card__image-wrapper {
  position: relative;
  padding-top: 100%; /* Manter a proporção 1:1 (quadrado) */
}

.product-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preencher sem distorção */
}

/* Garantir que thumbnails de carrossel mantenham proporção */
.product-card__image--carousel {
  object-fit: cover;
}

/* Fix para mobile e desktop */
@media only screen and (max-width: 767px) {
  .product-card__image-wrapper {
    padding-top: 100%; /* Manter a proporção 1:1 (quadrado) em dispositivos móveis */
  }
}

@media only screen and (min-width: 768px) {
  .product-card__image-wrapper {
    padding-top: 100%; /* Manter a proporção 1:1 (quadrado) em dispositivos de mesa */
  }
}
```

Para adicionar esse CSS ao tema Dawn, você precisa seguir os passos abaixo:

1. Acesse o seu painel de administração do Shopify e vá para a seção "Online Store" > "Tema" > "Ações" > "Editar código".
2. No editor de código, navegue até a pasta "assets" e clique no arquivo "styles.css.liquid".
3. No final do arquivo "styles.css.liquid", adicione o CSS acima.
4. Clique em "Salvar" para salvar as alterações.

O arquivo "styles.css.liquid" é o arquivo principal de CSS do tema Dawn, e é onde você deve adicionar o CSS personalizado. Lembre-se de que é importante testar as alterações em diferentes dispositivos e tamanhos de tela para garantir que o layout esteja funcionando corretamente.

**Caminho do arquivo:** `assets/styles.css.liquid`

**Observação:** Se você estiver usando uma versão mais recente do tema Dawn, o arquivo "styles.css.liquid" pode ter sido renomeado para "tailwind.css" ou "tailwind.config.js". Nesse caso, você precisará adicionar o CSS personalizado no arquivo "tailwind.css" ou "tailwind.config.js", respectivamente. Além disso, é importante lembrar que o tema Dawn é construído com Tailwind CSS, então você pode precisar adaptar o CSS personalizado para funcionar com o framework Tailwind.
