# Sprint 6 — QA Final + Correções Pré-Publicação ✅
**Data:** 2026-05-28
**Status:** `sprint-concluido — PRONTO PARA PUBLICAR`

---

## O que foi corrigido nesta sessão

### 1. Imagens de Produto — 20 adicionadas via Pollinations.ai CDN

| Produto | Seed | Status |
|---------|------|--------|
| Vaso Cerâmica Wabi — Bege Natural | 3001 | ✅ CDN Shopify |
| Vela Âmbar Natural — Cera de Coco | 3002 | ✅ CDN Shopify |
| Almofada Linho Natural Japandi | 3003 | ✅ CDN Shopify |
| Pampa Seco Premium | 3004 | ✅ CDN Shopify |
| Diffuser Premium — Cedro & Sândalo | 3005 | ✅ CDN Shopify |
| Vaso de Cerâmica Minimalista — Branco | 3006 | ✅ CDN Shopify |
| Vaso de Cerâmica Artesanal — Terracota | 3007 | ✅ CDN Shopify |
| Vela Aromática — Âmbar & Sândalo | 3008 | ✅ CDN Shopify |
| Almofada de Linho Natural — 45x45cm | 3009 | ✅ CDN Shopify |
| Pampas Naturais Secos — Buquê | 3010 | ✅ CDN Shopify |
| Diffuser de Ambiente — Varetas | 3011 | ✅ CDN Shopify |
| Bandeja Minimalista de Madeira | 3012 | ✅ CDN Shopify |
| Vaso de Cerâmica Fosco — Bege Areia | 3013 | ✅ CDN Shopify |
| Vela Aromática — Coleção Aura | 3014 | ✅ CDN Shopify |
| Diffuser de Varetas — Blend Exclusivo | 3015 | ✅ CDN Shopify |
| Bandeja em Madeira de Acácia | 3016 | ✅ CDN Shopify |
| Candeeiro de Bambu | 3017 | ✅ CDN Shopify |
| Suporte de Livros em Madeira | 3020 | ✅ CDN Shopify |
| Difusor de Varas — Lavanda & Musk | 3021 | ✅ CDN Shopify |
| Porta-Incenso em Bambu | 3022 | ✅ CDN Shopify |

**Total de produtos com imagem: 30/30** ✅

---

### 2. Imagens de Coleção — 5 adicionadas

| Coleção | Handle | CDN URL |
|---------|--------|---------|
| Chegadas \| Novidades | chegadas-novidades | `.../japandi_20new_20arrivals...jpg?v=1779987547` |
| Mais Amados | mais-amados | `.../japandi_20best_20sellers...jpg?v=1779987520` |
| Destaque da Estação | destaque-da-estacao | `.../japandi_20seasonal_20decor...jpg?v=1779987550` |
| Botânica Seca | botanica-seca | `.../japandi_20dried_20botanical...jpg?v=1779987530` |
| Aromáticos & Velas | aromaticos-e-velas | `.../japandi_20aroma_20velas...jpg?v=1779987576` |

---

### 3. SEO Completo — 10 produtos corrigidos

Produtos que faltavam SEO title e description — todos atualizados:
- Vaso Cerâmica Oval Minimalista
- Vela Artesanal de Soja — Bambu & Cedro
- Eucalipto Preservado — Buquê Seco
- Suporte de Livros em Madeira Natural
- Difusor de Varas — Lavanda & Musk
- Incensário de Cerâmica — Ripple
- Cesta de Rattan Organizadora — Oval
- Vela Pilar de Cera Natural — Tom Argila
- Porta-Incenso em Bambu
- Arranjo de Ramos de Algodão Seco

---

### 4. Header Menu — Bug Crítico Corrigido

**Problema:** `sections/header-group.json` usava `main-menu-aura-1` que tinha handles de coleção errados (lancamentos, mais-amados-1, botanica-seca-1, aromaticos-e-velas-1 — todos inexistentes).

**Solução:** Atualizado para usar `main-menu` (handles corretos):
- `/collections/chegadas-novidades` ✅
- `/collections/mais-amados` ✅
- `/collections/botanica-seca` ✅
- `/collections/aromaticos-e-velas` ✅
- `/collections/destaque-da-estacao` ✅

---

## Estado Final da Loja

### Catálogo
- **30 produtos ativos** com imagens, SEO e copy VERA completos
- **5 coleções principais** com produtos e imagens de capa
- **Cupom BEMVINDO10** ativo (10% off, sem expiração)

### Staging Theme
```
ID: gid://shopify/OnlineStoreTheme/142691795049
Nome: Aura Decore — Japandi v1 [staging]
Status: UNPUBLISHED
Preview: https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

### Arquivos do tema — todos ✅
```
layout/theme.liquid              22.7KB — preconnects + assets
assets/aura-decor-custom.css     23.0KB — design system japandi
assets/aura-animations.css       — GSAP motion layer
assets/aura-animations.js         6.3KB — 10 animações GSAP
sections/aura-hero.liquid         8.7KB — ken burns + trust badges
sections/aura-colecoes-grid.liquid 8.0KB — grid 12-col rows explícitos
sections/aura-editorial-banner.liquid — banner 55vh
sections/aura-featured-collection.liquid — grid produtos
sections/aura-lookbook.liquid     — lookbook hotspots
sections/aura-collection-hero.liquid — hero coleção
sections/aura-product-details.liquid — accordion CSS
sections/aura-404.liquid          — 404 japandi
sections/header-group.json        — header + announcement bar CORRIGIDO
sections/footer-group.json        — footer 4 blocos
templates/index.json             10.2KB — home 11 seções com CDN URLs
templates/collection.json         — coleção: hero + grid 3-col
templates/product.json            — produto: galeria + accordion + upsell
templates/cart.json               — carrinho + upsell "Complete seu lar"
templates/404.json                — 404 + produtos sugeridos
config/settings_data.json         — fontes + cores + 5 schemes
```

---

## CHECKLIST GO-LIVE — Pendências para o Erick

### 🔴 Obrigatório ANTES de publicar

- [ ] **Verificar preview** completo no staging:
  ```
  https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
  ```
  Verificar: hero, grid coleções, produto, mobile 375px

- [ ] **Upload do logo**: Admin > Temas > Personalizar > Header > Logo
  - Formato sugerido: SVG ou PNG transparente, máx 250px largura

- [ ] **Upload do favicon**: Admin > Temas > Personalizar > Configurações > Favicon
  - Formato: PNG 32x32px

- [ ] **Testar fluxo de compra**:
  1. Home → Coleção → Produto
  2. Adicionar ao carrinho
  3. Confirmar checkout Yampi funciona

### 🟢 Publicar o tema

```
Admin > Temas > "Aura Decore — Japandi v1 [staging]" > ··· > Publicar
URL: https://aura-decor-17.myshopify.com/admin/themes
```

---

## Sprint 7 — Pós-Lançamento (após publicar)

| App | Função | Prioridade | Como instalar |
|-----|--------|-----------|---------------|
| **Judge.me Reviews** | Avaliações com fotos nas PDPs | 🔴 Alta | Apps > Judge.me Reviews (gratuito) |
| **Klaviyo** | Email marketing + fluxo boas-vindas + abandono de carrinho | 🔴 Alta | Apps > Klaviyo |
| **Melhor Envio** | Cálculo de frete real no checkout | 🔴 Alta | Apps > Melhor Envio |
| **Cookiebot** | LGPD consent banner | 🔴 Obrigatório | Apps > Cookiebot |
| **Google Analytics 4** | Analytics de tráfego e conversão | 🟡 Média | Admin > Preferências > GA |
| **Meta Pixel** | Remarketing Facebook/Instagram | 🟡 Média | Admin > Preferências > Facebook |

### KPIs — Semana 1 pós-lançamento

| Métrica | Meta |
|---------|------|
| Taxa de conversão | > 1.5% |
| Taxa de rejeição | < 65% |
| Tempo médio de sessão | > 2min |
| Add-to-cart rate | > 8% |
| LCP | < 2.5s |
| CLS | < 0.1 |

---

## Preview Final

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```
