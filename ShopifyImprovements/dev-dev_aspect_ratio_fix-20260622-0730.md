---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-22 07:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema de imagens de produto esticadas/deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao seu tema. Esse código irá garantir que as imagens sejam exibidas em uma proporção 1:1 (quadrado) sem distorção, utilizando `object-fit: cover` para preencher o espaço sem comprometer a qualidade da imagem.

```css
/* Corrigindo aspect ratio e adicionando object-fit para imagens de produto */
.product__image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1; /* Mantém a proporção 1:1 */
}

/* Ajustes para thumbnails de carrossel */
.product__thumbnail {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1; /* Mantém a proporção 1:1 */
}

/* Media queries para garantir responsividade */
@media (max-width: 768px) {
  .product__image, .product__thumbnail {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1; /* Mantém a proporção 1:1 */
  }
}

@media (min-width: 769px) {
  .product__image, .product__thumbnail {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    aspect-ratio: 1/1; /* Mantém a proporção 1:1 */
  }
}
```

**Localização do Arquivo no Tema Dawn Shopify:**

Para adicionar o CSS acima ao seu tema Dawn, você precisará acessar o código do tema. O local exato pode variar dependendo da estrutura do seu tema, mas geralmente, você adicionaria esse código ao arquivo `style.css.liquid` ou `styles.scss.liquid`, que é onde o tema define seus estilos principais.

1. Acesse o seu painel de administração do Shopify.
2. Vá para **Loja Online** > **Temas**.
3. Clique no botão **Ações** ao lado do seu tema ativo e selecione **Editar código**.
4. Navegue até a pasta **assets** e encontre o arquivo `style.css.liquid` ou `styles.scss.liquid`.
5. Clique no arquivo para editá-lo e adicione o código CSS fornecido acima no final do arquivo.
6. Clique em **Salvar** para aplicar as alterações.

**Observação:** Se o seu tema tiver uma estrutura de pastas ou arquivos diferentes, você pode precisar procurar os arquivos de estilos relevantes e adicionar o código CSS apropriado. Além disso, se você estiver trabalhando com uma versão mais nova do tema Dawn ou com alterações personalizadas, os nomes dos arquivos ou a estrutura podem ter mudado. Sempre faça um backup do seu tema antes de fazer alterações significativas.
