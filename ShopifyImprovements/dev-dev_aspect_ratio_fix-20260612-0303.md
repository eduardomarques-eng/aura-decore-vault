---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-12 03:03
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para corrigir o problema das imagens de produto sendo esticadas ou deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao seu tema. Isso vai garantir que as imagens sejam exibidas em uma proporção 1:1 (quadrado) sem distorção, usando `object-fit: cover` para preencher o espaço disponível sem alterar a proporção da imagem.

```css
/* Corrigir aspect ratio 1:1 para imagens de produto */
.product-grid-item__image,
.product-single__image {
  position: relative;
  width: 100%;
  padding-top: 100%; /* Mantém a proporção 1:1 */
}

.product-grid-item__image img,
.product-single__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preenche o espaço sem distorção */
}

/* Garantir que thumbnails de carrossel mantenham proporção */
.product-single__thumbnail {
  position: relative;
  width: 100%;
  padding-top: 100%; /* Mantém a proporção 1:1 */
}

.product-single__thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preenche o espaço sem distorção */
}

/* Fix para mobile e desktop */
@media only screen and (max-width: 768px) {
  /* Ajustes para dispositivos móveis, se necessário */
}

@media only screen and (min-width: 769px) {
  /* Ajustes para dispositivos desktop, se necessário */
}
```

**Onde adicionar o CSS:**

Para adicionar o CSS acima ao tema Dawn, você precisará acessar o arquivo `styles.css.liquid` ou `styles.css` (dependendo da versão do tema Dawn que você está usando) e acrescentar o código fornecido acima.

1. Acesse o seu painel de administração do Shopify.
2. Vá para **Online Store** > **Themes**.
3. Clique no botão **Actions** ao lado do tema Dawn e selecione **Edit code**.
4. Na pasta `assets`, encontre o arquivo `styles.css.liquid` (ou `styles.css`).
5. Abra o arquivo e adicione o CSS fornecido acima no final do arquivo.
6. Clique em **Save** para salvar as alterações.

Observação: Caso você esteja usando uma versão mais recente do tema Dawn ou tenha feito alterações significativas no código, os nomes das classes podem ter mudado. Nesse caso, você precisará identificar as classes corretas para as imagens de produto e carrossel e ajustar o CSS de acordo.

Lembre-se de que é sempre uma boa prática fazer um backup do seu tema antes de fazer alterações no código. Além disso, se você não se sentir confortável em fazer essas alterações sozinho, considere consultar a documentação oficial do Shopify ou buscar ajuda de um desenvolvedor especializado.
