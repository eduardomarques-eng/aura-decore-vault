---
agent: DEV
task: dev_aspect_ratio_fix
ts: 2026-05-29 13:30
---

# DEV · Corrigir aspect ratio de imagens no tema Dawn

Para resolver o problema de imagens de produto esticadas/deformadas no tema Dawn Shopify, você precisará adicionar o seguinte CSS ao seu tema. Este CSS garante que as imagens de produto sejam exibidas em uma proporção 1:1 (quadrado), use `object-fit: cover` para preencher o espaço sem distorção, mantenha a proporção correta para thumbnails de carrossel e seja responsivo em dispositivos móveis e desktops.

**CSS a adicionar:**
```css
/* Corrigir aspect ratio 1:1 para todas as imagens de produto */
.product-media img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}

/* Garantir que thumbnails de carrossel mantenham proporção */
.product-thumbs .thumbnail img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}

/* Responsividade para mobile e desktop */
@media (max-width: 767px) {
  .product-media img {
    height: auto;
    width: 100%;
  }
  .product-thumbs .thumbnail img {
    height: auto;
    width: 100%;
  }
}
```

**Onde adicionar no tema Dawn:**

1. Acesse o seu painel de administração do Shopify.
2. Vá para **Online Store** > **Tema**.
3. Clique em **Ações** ao lado do tema Dawn e selecione **Editar código**.
4. No editor de código, navegue até o arquivo **assets/base.css** (ou **assets/style.css**, dependendo da estrutura do seu tema).
5. Adicione o CSS fornecido acima ao final desse arquivo.
6. Clique em **Salvar**.

**Observação importante:**

- Certifique-se de estar editando o tema Dawn e não um tema de backup ou um tema diferente.
- Se o seu tema tiver uma estrutura diferente, você pode precisar procurar o arquivo CSS principal que controla a estilização das imagens de produto e carrossel.
- Se as alterações não surtirem efeito imediatamente, tente limpar o cache do seu navegador ou aguarde alguns minutos para que as alterações sejam refletidas.

Este CSS deve corrigir o problema de imagens esticadas/deformadas no tema Dawn Shopify, garantindo que as imagens de produto sejam exibidas corretamente em todos os dispositivos.
