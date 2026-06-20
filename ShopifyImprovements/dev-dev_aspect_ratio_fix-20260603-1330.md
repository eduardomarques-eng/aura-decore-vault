---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-03 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema das imagens de produto sendo esticadas/deformadas no tema Dawn da Shopify, você precisará adicionar o seguinte CSS ao seu tema. Este CSS visa garantir que as imagens sejam exibidas em uma proporção 1:1 (quadrado), use `object-fit: cover` para preencher o espaço sem distorção, e mantenham a proporção nos thumbnails de carrossel, tanto em dispositivos móveis quanto em desktops.

**CSS:**
```css
/* Corrigir aspect ratio 1:1 para imagens de produto */
.product__image-wrapper img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  aspect-ratio: 1/1;
}

/* Manter proporção nos thumbnails de carrossel */
.product__thumb {
  aspect-ratio: 1/1;
}

/* Ajustes para garantir que as imagens sejam exibidas corretamente em diferentes tamanhos de tela */
@media (max-width: 768px) {
  .product__image-wrapper img {
    height: 100%;
    width: 100%;
  }
}

@media (min-width: 769px) {
  .product__image-wrapper img {
    height: 100%;
    width: 100%;
  }
}
```

**Onde adicionar o CSS:**

No tema Dawn da Shopify, você pode adicionar este CSS ao arquivo `styles.scss.liquid` ou `styles.css` (se você não estiver usando Sass), que geralmente pode ser encontrado na seção "Assets" do seu editor de tema Shopify. 

1. Acesse o seu painel de administração da Shopify.
2. Vá para "Online Store" > "Themes".
3. Clique em "Actions" > "Edit code" para o seu tema atual.
4. Na pasta "assets", procure o arquivo `styles.scss.liquid` (ou `styles.css` se aplicável).
5. Abra o arquivo e adicione o CSS fornecido acima no final do arquivo.
6. Clique em "Save" para salvar as alterações.

**Observação:** Se você não estiver confortável em editar arquivos de código, é recomendável criar uma cópia de segurança do seu tema antes de fazer qualquer alteração. Além disso, se você estiver usando uma versão personalizada do tema Dawn ou tiver feito muitas alterações, o caminho para o arquivo pode variar. Sempre é uma boa ideia testar as alterações em um ambiente de teste antes de aplicá-las ao seu site ao vivo.
