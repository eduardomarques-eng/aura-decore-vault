---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-22 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema de imagens de produto esticadas/deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao seu tema. Esse código irá garantir que as imagens de produto sejam exibidas em um formato quadrado (1:1) sem distorção, usando `object-fit: cover` para preencher o espaço sem esticar as imagens.

**CSS para adicionar:**
```css
.product-media__image {
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
  aspect-ratio: 1/1; /* Força a proporção 1:1 */
}

@media (max-width: 749px) {
  .product-media__image {
    /* Se necessário, ajustes adicionais para mobile */
  }
}

/* Para garantir que os thumbnails de carrossel mantenham a proporção */
.product-media__thumbnail {
  object-fit: cover;
  object-position: center;
  aspect-ratio: 1/1; /* Força a proporção 1:1 */
  height: 100%;
  width: 100%;
}
```

**Onde adicionar:**
No tema Dawn, você geralmente encontrará os estilos CSS em arquivos como `styles.css.liquid` ou `tailwind.css` (se estiver usando Tailwind CSS), localizados na pasta `assets` do seu tema. No entanto, para manter suas alterações organizadas e evitar sobrescrever os arquivos principais do tema, é recomendável criar um arquivo `custom.css` ou `custom.css.liquid` dentro da pasta `assets` do seu tema.

1. Acesse o seu tema Shopify via interface administrativa.
2. Vá para **Online Store** > **Tema** > **Ações** > **Editar código**.
3. Na pasta `assets`, clique em **Adicionar um novo arquivo**.
4. Nomeie o arquivo como `custom.css` ou `custom.css.liquid`.
5. Adicione o código CSS fornecido acima a este novo arquivo.
6. Salve as alterações.

Isso permitirá que você mantenha suas alterações personalizadas separadas dos arquivos principais do tema, facilitando futuras atualizações do tema sem perder suas customizações.

**Observação:** Certifique-se de que o arquivo `custom.css` ou `custom.css.liquid` seja chamado no layout do seu tema, geralmente em `layout.liquid`, para que as alterações CSS sejam aplicadas. Se você não encontrar uma referência a `custom.css` no `layout.liquid`, adicione a seguinte linha dentro da tag `<head>`:
```liquid
{{ 'custom.css' | asset_url | stylesheet_tag }}
```
Isso garante que o seu arquivo `custom.css` seja carregado pelo tema.
