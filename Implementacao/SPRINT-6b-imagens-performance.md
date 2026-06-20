# Sprint 6b — Imagens 4K + Performance Layer ✅
**Data:** 2026-05-28
**Status:** `sprint-concluido — STAGING ATUALIZADO`

---

## O que foi feito nesta sessão

### 1. Geração de Imagens com Higgsfield (3 imagens 4K)

| Seção | Job ID | Resolução | URL |
|-------|--------|-----------|-----|
| Hero | `88103494-f9b5-44b1-a88c-34c31d4de0c0` | 5504×3072px | CloudFront min.webp |
| Editorial Banner | `be91c7c3-04fa-4ef9-a2a6-6b6de089c954` | 5504×3072px | CloudFront min.webp |
| Lookbook | `44fdd714-2700-47b7-a646-cf5b079aafbc` | 1264×848px | CloudFront min.webp |

**Modelo usado:** `cinematic_studio_2_5` (hero + banner) · `nano_banana_pro` (lookbook)

> Créditos Higgsfield esgotados após 3 imagens (plano free). Para vídeos e mais imagens 4K, upgrade necessário.

---

### 2. Collection Grid — Upgrade para flux-realism

Todos os 5 cards de coleção atualizados de `model=flux` para `model=flux-realism` com prompts aprimorados e resoluções otimizadas:

| Card | Coleção | Resolução | Proporção CSS |
|------|---------|-----------|---------------|
| 1 — Botânica Seca | botanica-seca | 1920×1080 | 16/9 (card principal 8 colunas) |
| 2 — Velas e Aromáticos | aromaticos-e-velas | 1200×1200 | 1/1 (coluna direita superior) |
| 3 — Lançamentos | chegadas-novidades | 1200×1200 | 1/1 (coluna direita inferior) |
| 4 — Mais Amados | mais-amados | 1920×1080 | ~16/9 (faixa inferior esquerda) |
| 5 — Destaques | destaque-da-estacao | 1920×1080 | ~16/9 (faixa inferior direita) |

Seeds: 3101–3105 (consistentes para regeneração futura)

---

### 3. CSS Aspect Ratio — Auditoria Completa ✅

**Resultado: Nenhum problema encontrado.** O CSS já estava correto:

| Seção | CSS Aplicado | Status |
|-------|-------------|--------|
| Hero | `object-fit: cover; object-position: center 20%` | ✅ |
| Editorial Banner | `object-fit: cover; object-position: center` | ✅ |
| Collection Grid (`.aura-cg-img`) | `position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover` | ✅ |
| Product Cards (`.aura-product-card__img`) | `width: 100%; height: 100%; object-fit: cover` dentro de `aspect-ratio: 5/6` | ✅ |
| Lookbook | `width: 100%; height: 100%; object-fit: cover` | ✅ |

**Sem esticamento em nenhuma imagem do site.**

---

### 4. Performance Layer — `assets/aura-perf.css` (NOVO)

Novo arquivo de performance criado e integrado ao `layout/theme.liquid`:

```css
/* GPU acceleration */
.aura-cg-img, .aura-product-card__img, .aura-hero__bg-img, .aura-banner__img {
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* Layout containment — CLS prevention */
.aura-product-card__media { contain: layout style; }
.aura-cg-inner           { contain: strict; }

/* prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .aura-hero__bg-img { animation: none !important; }
  ...
}

/* Touch device — quick-add sempre visível */
@media (hover: none) {
  .aura-product-card__quick-add { transform: translateY(0) !important; }
}
```

---

### 5. layout/theme.liquid — Preconnect CloudFront

Adicionado preconnect para o CDN do Higgsfield (melhora LCP):

```html
<link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" crossorigin>
```

E link para o novo arquivo de performance:
```liquid
{{ 'aura-perf.css' | asset_url | stylesheet_tag }}
```

---

## Estado Final do Staging

### Arquivos atualizados nesta sessão

```
templates/index.json           — lookbook Higgsfield + collection cards flux-realism
assets/aura-perf.css           — NOVO: performance + accessibility layer
layout/theme.liquid            — preconnect CloudFront + aura-perf.css
```

### URLs Higgsfield aplicadas no staging

```
Hero:
https://d8j0ntlcm91z4.cloudfront.net/user_3DfOYUqzo8X3qSDiA9kl7fSJsqq/hf_20260528_172435_88103494-f9b5-44b1-a88c-34c31d4de0c0_min.webp

Editorial Banner:
https://d8j0ntlcm91z4.cloudfront.net/user_3DfOYUqzo8X3qSDiA9kl7fSJsqq/hf_20260528_172616_be91c7c3-04fa-4ef9-a2a6-6b6de089c954_min.webp

Lookbook:
https://d8j0ntlcm91z4.cloudfront.net/user_3DfOYUqzo8X3qSDiA9kl7fSJsqq/hf_20260528_173401_44fdd714-2700-47b7-a646-cf5b079aafbc_min.webp
```

---

## Pendências para o Erick

### 🟡 Opcional (requer upgrade Higgsfield)

Para vídeos e mais imagens cinematic 4K:

| Plano | Preço | Créditos | Link |
|-------|-------|----------|------|
| PLUS mensal | $49/mês | 1.000 créditos | [Stripe Checkout](https://checkout.stripe.com/c/pay/cs_live_a1BZ9ewwtl6km4cOszUlqWyXwpIxX9ze6sAOsNMw2tlnsSV2CiylpBeQ22...) |
| ULTRA anual | $99/mês | 3.000 créditos | [Stripe Checkout](https://checkout.stripe.com/c/pay/cs_live_a1IxTZ3mzssjxqxPVolFAApftWkJT3OYhcqQowK3O5Du5qyEsVjZ1Yffih...) |

Quando com créditos, gerar:
- Vídeo hero (Seedance 2.0 ou Kling 3.0) — animação Ken Burns cinematográfica
- Vídeo de produto para marketing social
- Imagens de produto 4K estilo editorial

### 🔴 Obrigatório ANTES de publicar

- [ ] Verificar preview: `https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049`
  - Hero image 4K (Ken Burns animation)
  - Editorial banner 4K
  - Lookbook Higgsfield
  - Collection grid (5 cards flux-realism)
  - Product cards sem esticamento
  - Mobile 375px

- [ ] Upload do logo: Admin > Temas > Personalizar > Header
- [ ] Upload do favicon: Admin > Temas > Personalizar > Configurações
- [ ] Testar fluxo: Home → Produto → Carrinho → Checkout Yampi

### 🟢 Publicar

```
Admin > Temas > "Aura Decore — Japandi v1 [staging]" > ··· > Publicar
```

---

## Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```
