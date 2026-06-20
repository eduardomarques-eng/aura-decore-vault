# Sprint 3 — Header, Footer, GSAP Motion + Imagens ✅
**Data:** 2026-05-28
**Responsáveis:** DEV (Liquid) + LUNA (Design/Imagens)
**Tema Staging:** `gid://shopify/OnlineStoreTheme/142691795049`
**Status:** `sprint-concluido`

---

## Entregas Realizadas

### 1. Sistema de Motion — GSAP 10 Animações

**`assets/aura-animations.js`** — rebuild completo:
| # | Animação | Trigger |
|---|----------|---------|
| 1 | Hero parallax | scroll (yPercent: 18, scrub: 1.2) |
| 2 | Hero content entrance | page load (kicker→title→desc→actions stagger) |
| 3 | `[data-aura-reveal]` scroll reveals | ScrollTrigger |
| 4 | Product grid stagger | ScrollTrigger (stagger: 0.12) |
| 5 | Collection grid stagger | ScrollTrigger (stagger: 0.08) |
| 6 | Editorial banner parallax | scroll (yPercent: 12, scrub: 1.5) |
| 7 | Section title animations | ScrollTrigger |
| 8 | Scroll progress bar | scroll (terracota, fixed top) |
| 9 | Collection card hover | GSAP scale override |
| 10 | Footer stagger | ScrollTrigger |

### 2. Design System Global

**`config/settings_data.json`** — configuração Japandi completa:
- Fontes: `cormorant_n4` + `dm_sans_n4`
- Page width: 1400px
- 5 Color schemes Japandi (#FAFAF8 → #3D3D3B)
- `animations_reveal_on_scroll: true`
- Sociais: Instagram, TikTok, Pinterest, Facebook

### 3. Header Configurado

**`sections/header-group.json`**:
- Logo: posição centro (`middle-center`)
- Menu: `main-menu-aura-1` (7 itens das 5 coleções)
- Menu type desktop: `dropdown`
- Sticky: `on-scroll-up`
- Announcement bar: 3 mensagens rotativas
  - "✦ FRETE GRÁTIS ACIMA DE R$ 299 · ENTREGA EM TODO O BRASIL"
  - "✦ CURADORIA JAPANDI · PEÇAS QUE HABITAM COM INTENÇÃO"
  - "✦ CADASTRE-SE E GANHE 10% NA PRIMEIRA COMPRA"

### 4. Footer Configurado

**`sections/footer-group.json`**:
- Block 1: Brand text + logo
- Block 2: Coleções (links via main-menu-aura-1)
- Block 3: Info (footer menu)
- Block 4: Contato
- `color_scheme: scheme-3` (grafite dark)
- Newsletter + Social + Pagamentos habilitados

### 5. Seções Atualizadas com Suporte a URL de Imagem

| Arquivo | Adição | Status |
|---------|--------|--------|
| `sections/aura-hero.liquid` | Campo `bg_url` (texto) | ✅ |
| `sections/aura-editorial-banner.liquid` | Campo `bg_url` (texto) | ✅ |
| `sections/aura-lookbook.liquid` | Campo `image_url` (texto) | ✅ |
| `sections/aura-colecoes-grid.liquid` | Campo `image_url` por bloco | ✅ |

### 6. Imagens Conectadas via `templates/index.json`

| Seção | Imagem | Fonte |
|-------|--------|-------|
| Hero | `0001-5032150870304921231.jpg` | Shopify CDN |
| Editorial Banner | Japandi interior contemplative | Pollinations.ai |
| Lookbook | japandi living room editorial lookbook | Shopify CDN |
| Grade Botânica Seca | Dried botanicals pampas grass | Pollinations.ai |
| Grade Velas & Aromáticos | Soy candles amber glass | Pollinations.ai |
| Grade Lançamentos | Ceramic wabi-sabi vase | Pollinations.ai |
| Grade Mais Amados | Bamboo tray wooden accessories | Pollinations.ai |
| Grade Destaques | Seasonal decor autumn textures | Pollinations.ai |

---

## URL de Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

---

## Próximos Passos — Sprint 4

### VERA — Copy Final + Refinamentos

1. **Página de Produto** — copy completo: título, descrição, benefícios, materiais, guia de cuidados
2. **Página Sobre Nós** — expansão com manifesto wabi-sabi completo
3. **Metafields de produto** — "material", "origem", "dimensões" via admin
4. **SEO** — meta titles e descriptions para todas as páginas

### DEV — Refinamentos UI

1. **Página de Coleção** — custom template com filtros laterais + grid 3-col
2. **Página de Produto** — galeria com zoom + sticky add-to-cart + upsell
3. **Quick-add modal** — drawer lateral (carrinho fly-out)
4. **Badge dinâmico** — "Chegou há X dias" para Lançamentos

### Apps a Instalar (Sprint 5)

- Judge.me Reviews (avaliações)
- Klaviyo (email marketing)
- Frequently Bought Together (upsell)
- Loox (foto reviews)
