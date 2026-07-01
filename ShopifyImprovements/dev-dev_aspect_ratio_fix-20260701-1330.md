---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-07-01 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema das imagens de produto sendo esticadas/deformadas no tema Dawn do Shopify, você precisará adicionar o seguinte CSS ao seu tema. O objetivo é garantir que as imagens mantenham uma proporção 1:1 (quadrado) sem distorção, utilizando `object-fit: cover` para preencher o espaço sem deformar as imagens.

```css
/* Adicione este CSS para corrigir a proporção das imagens de produto */
.product-grid-item img,
.product-single__image-wrapper img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.product-grid-item,
.product-single__image-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Mantém a proporção 1:1 (quadrado) */
}

/* Para garantir que os thumbnails de carrossel mantenham a proporção */
.product-single__thumbnail-wrapper img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.product-single__thumbnail-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Mantém a proporção 1:1 (quadrado) */
}

/* Media queries para ajustes específicos em dispositivos móveis e desktop */
@media only screen and (max-width: 768px) {
  /* Ajustes para dispositivos móveis, se necessário */
}

@media only screen and (min-width: 769px) {
  /* Ajustes para desktop, se necessário */
}
```

**Onde adicionar o CSS no tema Dawn:**

1. Acesse o seu painel de administração do Shopify.
2. Vá para **Online Store** > **Themes**.
3. Clique no botão **Actions** ao lado do seu tema Dawn e selecione **Edit code**.
4. No editor de código, navegue até o arquivo `assets/base.css` ou `assets/theme.css`, dependendo da estrutura do seu tema. Geralmente, o arquivo `base.css` é o local mais adequado para adicionar estilos personalizados que afetam todo o tema.
5. Cole o CSS fornecido acima no final do arquivo escolhido.
6. Clique em **Save** para salvar as alterações.

**Observações:**

- Certifique-se de que não há outras regras CSS conflitantes que possam sobrescrever esses estilos.
- Se o seu tema tiver uma estrutura de pastas e arquivos diferente, você pode precisar ajustar o caminho para o arquivo CSS.
- Os media queries fornecidos são exemplos e podem precisar ser ajustados de acordo com as necessidades específicas do seu tema e design.

Essas alterações devem ajudar a corrigir o problema das imagens de produto sendo esticadas ou deformadas no tema Dawn do Shopify, garantindo uma melhor experiência de usuário em diferentes dispositivos.
