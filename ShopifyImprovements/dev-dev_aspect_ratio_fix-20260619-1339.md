---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-19 13:39
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema de imagens de produto esticadas/deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao seu tema. Isso garantirá que as imagens mantenham a proporção correta, sejam quadradas (1:1) e usem `object-fit: cover` para preencher o espaço sem distorção.

**CSS:**
```css
/* Corrigir aspect ratio 1:1 para todas as imagens de produto */
.product__image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.product__image img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

/* Garantir que thumbnails de carrossel mantenham proporção */
.product__thumbnail {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.product__thumbnail img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

/* Fix para mobile e desktop */
@media only screen and (max-width: 768px) {
  .product__image {
    height: 300px; /* Ajuste a altura para mobile */
  }
}

@media only screen and (min-width: 769px) {
  .product__image {
    height: 400px; /* Ajuste a altura para desktop */
  }
}
```

**Onde adicionar no tema Dawn:**
Você precisará adicionar este CSS ao arquivo `style.css.liquid` ou `style.css` dentro do tema Dawn. Se você estiver usando a versão mais recente do tema Dawn, o arquivo pode estar localizado em:

`assets/style.css.liquid`

Se você não encontrar o arquivo `style.css.liquid`, procure por `style.css` dentro da pasta `assets` do seu tema.

**Importante:**
Antes de fazer qualquer alteração no código do tema, certifique-se de criar uma cópia de segurança do seu tema atual. Isso garantirá que você possa reverter as alterações caso algo dê errado.

**Passos para adicionar o CSS:**

1. Acesse o seu painel de controle do Shopify e navegue até a seção "Temas" (ou "Themes" em inglês).
2. Clique no botão "Ações" (ou "Actions") ao lado do seu tema ativo e selecione "Editar código" (ou "Edit code").
3. Navegue até a pasta `assets` e localize o arquivo `style.css.liquid` (ou `style.css`).
4. Clique no arquivo para editá-lo e adicione o CSS fornecido acima no final do arquivo.
5. Clique no botão "Salvar" (ou "Save") para salvar as alterações.

Depois de adicionar o CSS, verifique se as imagens de produto estão sendo exibidas corretamente em seu tema. Se você tiver alguma dúvida ou precisar de ajuda adicional, não hesite em perguntar.
