---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-05-30 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

**Solução para o Problema de Imagens Deformadas no Tema Dawn Shopify**

Para corrigir o problema de imagens de produto esticadas/deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao seu tema. Isso garante que as imagens sejam exibidas em um formato quadrado (1:1) sem distorção, utilizando `object-fit: cover` para preencher o espaço sem perder a proporção original.

**CSS:**
```css
.product-media__image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}

.product-media__image--carousel {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}

/* Para garantir que os thumbnails de carrossel mantenham a proporção */
.product-media__thumbnail {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}
```

**Onde Adicionar o CSS:**

No tema Dawn Shopify, você pode adicionar esse CSS ao arquivo `styles.css.liquid` ou criar um novo arquivo CSS (por exemplo, `custom.css.liquid`) e incluí-lo no layout do tema.

1. **Método 1: Adicionar ao `styles.css.liquid`**
   - Vá para o seu painel de administração do Shopify.
   - Clique em **Online Store** > **Themes**.
   - Clique nos três pontos ao lado do seu tema ativo e selecione **Edit code**.
   - Navegue até o diretório `assets` e encontre o arquivo `styles.css.liquid`.
   - Adicione o CSS acima no final do arquivo `styles.css.liquid`.

2. **Método 2: Criar um Novo Arquivo CSS**
   - Se preferir manter suas alterações separadas, você pode criar um novo arquivo CSS.
   - No mesmo diretório `assets`, clique em **Add a new asset** e nomeie o arquivo como `custom.css.liquid`.
   - Cole o CSS fornecido acima nesse novo arquivo.
   - Para que o novo arquivo seja incluído no layout do tema, você precisará adicioná-lo à seção `<head>` do seu tema. Isso geralmente é feito no arquivo `layout.liquid`.
   - Navegue até o diretório `layouts` e abra o arquivo `layout.liquid`.
   - Adicione a seguinte linha dentro da tag `<head>`:
     ```liquid
     {{ 'custom.css.liquid' | asset_url | stylesheet_tag }}
     ```

**Observação:** Certifique-se de que não haja outros estilos que possam estar sobrescrevendo as alterações que você está fazendo. Se necessário, use o inspetor de elementos do navegador para verificar os estilos aplicados e fazer as ajustes necessários.

Com essas alterações, as imagens de produto no seu tema Dawn Shopify devem ser exibidas em um formato quadrado (1:1) sem distorção, tanto em dispositivos móveis quanto em desktops.
