---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-25 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema de imagens de produto esticadas/deformadas no tema Dawn do Shopify, você precisará adicionar o seguinte CSS ao seu tema. Isso garantirá que as imagens mantenham a proporção correta, sejam quadradas e usem `object-fit: cover` para evitar distorções.

```css
/* CSS para corrigir o aspecto das imagens de produto */
.product-grid-item img,
.product-single__photo img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
}

/* Para garantir que as imagens sejam quadradas */
.product-grid-item img,
.product-single__photo img {
  aspect-ratio: 1 / 1;
}

/* Manter a proporção nos thumbnails de carrossel */
.product-single__thumbnail img {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  aspect-ratio: 1 / 1;
}

/* Fix para mobile e desktop */
@media only screen and (max-width: 768px) {
  .product-grid-item img,
  .product-single__photo img,
  .product-single__thumbnail img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%;
    aspect-ratio: 1 / 1;
  }
}
```

**Onde adicionar o CSS:**

No tema Dawn do Shopify, você pode adicionar este CSS ao arquivo `style.css.liquid` ou `style.css` (se estiver editando o tema diretamente), que geralmente se encontra na seção "Assets" do editor de temas do Shopify.

1. Acesse o seu painel de administração do Shopify.
2. Vá para "Online Store" > "Themes".
3. Clique no botão "Actions" ao lado do seu tema ativo e selecione "Edit code".
4. Na pasta "assets", procure pelo arquivo `style.css.liquid` ou `style.css`.
5. Abra o arquivo e adicione o CSS fornecido acima no final do arquivo.
6. Clique em "Save" para salvar as alterações.

**Observação:** Se o seu tema tiver uma estrutura de arquivos CSS diferente, como arquivos separados para layout, produto, etc., você pode precisar adicionar o CSS em um arquivo específico relacionado às imagens de produtos ou ao layout do produto. No entanto, para a maioria dos casos, o `style.css.liquid` será o local mais apropriado.
