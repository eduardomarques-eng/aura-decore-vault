# Sprint 2 — Design System Japandi + Seções Liquid ✅
**Data:** 2026-05-28
**Responsáveis:** LUNA (Design) + DEV (Liquid)
**Tema Staging:** `gid://shopify/OnlineStoreTheme/142691795049`
**Status:** `sprint-concluido`

---

## Entregas Realizadas

### 1. Seções Liquid Criadas / Atualizadas

| Arquivo | Descrição | Status |
|---------|-----------|--------|
| `sections/aura-featured-collection.liquid` | Grid de produtos reais Shopify — 4 colunas, hover quick-add, badges | ✅ Novo |
| `sections/aura-colecoes-grid.liquid` | Grade editorial 12-col (igual Dcorada): 1 grande + 2 laterais + 3 inferiores | ✅ Novo |
| `sections/aura-hero.liquid` | Hero fullscreen — parallax, dual buttons, scroll hint | ✅ Existia |
| `sections/aura-editorial-banner.liquid` | Banner fullwidth editorial 55vh | ✅ Existia |
| `sections/aura-lookbook.liquid` | Lookbook com hotspots interativos | ✅ Existia |

### 2. Home Page Reconstruída — 11 Seções (estrutura Dcorada)

```
1. aura-hero              → Hero fullscreen 90vh com parallax
2. aura-featured-collection → Grid Lançamentos (4 produtos reais)
3. aura-editorial-banner  → Banner filosófico "Habitar com intenção"
4. aura-featured-collection → Grid Mais Amados (4 produtos reais)
5. aura-colecoes-grid     → Grade editorial 5 coleções (idêntica Dcorada)
6. aura-lookbook          → Sala editorial com hotspots
7. aura-featured-collection → Grid Destaques da Estação (4 produtos reais)
8. multicolumn            → 4 valores da marca
9. multicolumn            → 3 depoimentos
10. newsletter            → Email com 10% desconto
11. rich-text CTA         → "Transforme sua casa em um refúgio"
```

### 3. Design System Japandi — Já aplicado em `aura-decor-custom.css`

**Paleta completa:**
- `#FAFAF8` — Off-white (background)
- `#F5F0EB` — Beige
- `#F2EDE6` — Cream
- `#EDE7DC` — Linen
- `#B8793A` — Terracota (accent)
- `#D4A574` — Madeira
- `#8B9D77` — Musgo
- `#3D3D3B` — Grafite (texto)

**Tipografia:**
- `Cormorant Garamond` — headings, serifa elegante
- `DM Sans` — corpo, navegação, botões

**Motion:**
- GSAP + ScrollTrigger carregados via CDN
- `data-aura-reveal` — fade + translateY no scroll
- Hover: scale 1.04–1.06 nas imagens
- Quick-add: translateY(0) no hover do card

### 4. Produtos Reais nas Coleções

As seções `aura-featured-collection` agora puxam produtos reais:
- **Lançamentos** → `/collections/lancamentos` (5 produtos com tag)
- **Mais Amados** → `/collections/mais-amados-1` (produtos com tag mais-amado)
- **Destaques da Estação** → `/collections/destaques-da-estacao`

---

## Próximos Passos — Sprint 3

### DEV — Header/Footer + Imagens Hero

1. **Upload de imagem hero** via Shopify admin → definir `aura-hero` image picker
2. **Header** — configurar menu `main-menu-aura-1` no tema
3. **Footer** — links para coleções, políticas, redes sociais
4. **Imagens das coleções** — upload para preencher `aura-colecoes-grid`

### LUNA — Imagens Pollinations.ai

10 prompts para geração:
1. Hero background — living room japandi
2. Coleção Botânica Seca
3. Coleção Aromáticos e Velas
4. Lookbook editorial
5–10. Imagens de produtos lifestyle

### Motion — GSAP refinado

- Stagger nas grids de produto
- Parallax no hero image
- Smooth scroll entre seções

---

## URL de Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

Ou pelo Shopify Admin → Temas → "Aura Decore — Japandi v1 [staging]" → Preview
