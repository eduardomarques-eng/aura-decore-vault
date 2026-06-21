---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-06-21 07:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para corrigir o problema das imagens de produto esticadas/deformadas no tema Dawn Shopify, você precisará adicionar o seguinte código CSS ao arquivo `styles.css.liquid` ou `styles.css` (dependendo da estrutura do seu tema). Se o seu tema utilizar um arquivo específico para estilos de produto, como `product.css.liquid`, seria ideal adicioná-lo lá, mas `styles.css.liquid` é um local seguro e comum para adicionar estilos personalizados.

```css
/* Corrigir aspect ratio 1:1 (quadrado) para todas as imagens de produto */
.product__image {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Aspect ratio 1:1 */
}

.product__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preencher sem distorção */
}

/* Garantir que thumbnails de carrossel mantenham proporção */
.product__thumbnail {
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Aspect ratio 1:1 */
}

.product__thumbnail img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Preencher sem distorção */
}

/* Fix para mobile e desktop */
@media only screen and (max-width: 767px) {
  .product__image, .product__thumbnail {
    padding-bottom: 100%; /* Manter aspect ratio em dispositivos móveis */
  }
}

@media only screen and (min-width: 768px) {
  .product__image, .product__thumbnail {
    padding-bottom: 100%; /* Manter aspect ratio em dispositivos desktop */
  }
}
```

**Onde adicionar:**
- Abra o seu tema Shopify no editor de temas.
- Navegue até a seção de "Assets" ou "Arquivos" (varia dependendo da versão do Shopify e do tema).
- Encontre e clique em `styles.css.liquid` ou o arquivo equivalente no seu tema onde os estilos são definidos.
- Cole o código CSS fornecido acima no final do arquivo `styles.css.liquid`.
- Salve as alterações.

Se o seu tema tiver um arquivo específico para estilos de produto, como mencionado anteriormente, adicione o código lá. Caso contrário, `styles.css.liquid` é um local seguro para adicionar esses estilos.

**Observação:** Certifique-se de que não haja outros estilos conflitantes no seu tema que possam sobrescrever essas alterações. Se você encontrar problemas após adicionar esses estilos, pode ser necessário ajustar as classes CSS para corresponder exatamente às classes usadas no seu tema. Além disso, se você não se sentir confortável em realizar essas alterações diretamente no código do tema, considere criar uma cópia de segurança do seu tema antes de fazer quaisquer alterações.
