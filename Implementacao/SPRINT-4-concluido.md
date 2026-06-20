# Sprint 4 — Templates de Produto & Coleção + Copy Premium ✅
**Data:** 2026-05-28
**Responsáveis:** DEV (Liquid/Templates) + VERA (Copywriter)
**Tema Staging:** `gid://shopify/OnlineStoreTheme/142691795049`
**Status:** `sprint-concluido`

---

## Entregas Realizadas

### 1. Template de Página de Coleção

**`sections/aura-collection-hero.liquid`** *(NOVO)*:
- Hero responsivo: imagem da coleção (esquerda) + título + descrição + contagem (direita)
- Fallback: layout centralizado quando coleção não tem imagem
- Tipografia: Cormorant Garamond para h1, kicker configurável

**`templates/collection.json`** *(NOVO)*:
- Seção 1: `aura-collection-hero` — banner da coleção
- Seção 2: `main-collection-product-grid`
  - 3 colunas desktop
  - Filtros laterais (filter_type: vertical)
  - Quick-add habilitado
  - 12 produtos por página
  - Imagem secundária no hover

### 2. Template de Página de Produto

**`sections/aura-product-details.liquid`** *(NOVO)* — Accordion CSS puro:
- Blocos configuráveis via admin
- Estados: fechado → aberto com cor terracota no summary
- Conteúdo padrão: Materiais, Cuidados, Entrega

**`templates/product.json`** *(NOVO)*:
- Seção 1: `main-product` (Dawn)
  - Sticky info habilitado
  - Galeria com zoom lightbox
  - Checkout dinâmico (boleto, PIX, cartão)
  - Thumbnails no mobile
- Seção 2: `aura-product-details` — accordion de detalhes
  - 3 abas: Materiais e Composição · Cuidados · Entrega e Embalagem
- Seção 3: `aura-featured-collection` — "Você também pode gostar"
  - Coleção: mais-amados-1 (4 produtos)

### 3. Copy Premium — VERA — 5 Produtos

| Produto | Destaques do Copy |
|---------|-------------------|
| Vaso Cerâmica Wabi-Sabi | Imperfeição como arte, cada peça irrepetível, tons terrosos atemporais |
| Bandeja de Bambu Zen | Ritual diário, bambu sustentável, lixada à mão, óleo natural |
| Arranjo de Pampas e Trigo | Beleza permanente sem manutenção, composição artesanal, durável |
| Difusor de Ambiente Aura | 60 dias, óleos essenciais naturais, cedro + bambu + almíscar |
| Porta-Objetos Madeira Clara | Cera natural de carnaúba, veias da madeira, organização contemplativa |

**SEO** adicionado a todos os 5 produtos:
- Meta title otimizado (marca + categoria + produto)
- Meta description (160 chars, palavras-chave japandi + decoração)

### 4. Página Sobre Nós — Manifesto Completo

**`gid://shopify/Page/121723650153`** atualizado com:
- Filosofia wabi-sabi e japandi explicada
- Missão da curadoria
- Ritual de embalagem descrito
- CTA de contato: contato@auradecore.com.br

---

## Estrutura da Home Page (11 seções — igual Dcorada)

```
1. aura-hero              → Hero 90vh + imagem CDN + parallax GSAP
2. aura-featured-collection → Lançamentos (4 produtos reais)
3. aura-editorial-banner  → "Habitar com intenção" + Pollinations.ai
4. aura-featured-collection → Mais Amados (4 produtos reais)
5. aura-colecoes-grid     → Grade 5 coleções (Dcorada-identical)
6. aura-lookbook          → Sala editorial + hotspots
7. aura-featured-collection → Destaques da Estação (4 produtos reais)
8. multicolumn            → 4 valores da marca
9. multicolumn            → 3 depoimentos
10. newsletter            → Email + 10% desconto
11. rich-text             → CTA final
```

---

## Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

---

## Próximos Passos — Sprint 5 (Final)

### Apps + QA + Go-Live

1. **Judge.me Reviews** — instalar + configurar widget nas PDPs
2. **Klaviyo** — conectar formulário de newsletter à lista
3. **Bora!** ou **Cartpanda Upsell** — upsell no carrinho
4. **Teste QA completo**:
   - Desktop + Mobile
   - Fluxo de compra completo (add to cart → checkout)
   - Filtros de coleção
   - Animações GSAP
   - Velocidade de carregamento (Core Web Vitals)
5. **Imagens dos produtos** — fotografias reais ou Pollinations lifestyle
6. **Publicar tema staging → live** (aprovação do CEO)

### SEO Técnico

- `robots.txt` + `sitemap.xml` verificados
- Google Analytics 4 + Meta Pixel instalados
- Schema.org markup de produto ativo (Dawn nativo)
