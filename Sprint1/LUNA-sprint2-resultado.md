# Sprint 2 — Resultado LUNA
**Data:** 2026-05-28  
**Status:** ✅ CONCLUÍDO  
**Tema:** Aura Decore — Japandi v1 [staging]  
**ID:** `gid://shopify/OnlineStoreTheme/142691795049`

---

## Filosofia Aplicada
> **Japandi × Minimalismo** — calor japonês (wabi-sabi) + funcionalidade escandinava + só o essencial.  
> "Menos, mas melhor. Silêncio que fala."

---

## Arquivos Criados/Atualizados no Tema Staging

| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `assets/aura-decor-custom.css` | 23 KB | Sistema de design completo: tokens, tipografia, componentes, grid, responsive |
| `assets/aura-animations.css` | 2.8 KB | Estados de reveal, parallax, stagger, micro-interactions |
| `assets/aura-animations.js` | 3.4 KB | GSAP engine: scroll reveal, hero parallax, card stagger, image hover |
| `config/settings_data.json` | 4.9 KB | Paleta e configurações do painel Dawn corrigidas |

---

## Paleta Japandi Aplicada (5 Schemes)

| Scheme | Cor de Fundo | Uso |
|--------|-------------|-----|
| `scheme-1` | `#FAFAF8` (off-white) | Fundo principal, header |
| `scheme-2` | `#F2EDE6` (cream) | Cards de produto, grids |
| `scheme-3` | `#3D3D3B` (grafite) | Footer, seções escuras |
| `scheme-4` | `#F5F0EB` (beige) | Seções alternadas |
| `scheme-5` | `#B8793A` (terracota) | Badges de oferta, CTAs |

**Gradiente vermelho/laranja removido** do scheme-1 anterior ✅

---

## Tipografia

| Fonte | Uso | Variantes |
|-------|-----|-----------|
| Cormorant Garamond | Títulos, H1-H4, logotipo | 300, 400, 500 + itálicos |
| DM Sans | Corpo, nav, botões, captions | 300, 400, 500 |

- Font header: `cormorant_n4` (Shopify setting)
- Font body: `dm_sans_n4` (Shopify setting)
- Google Fonts: importado via @import no CSS custom

---

## Tokens de Design

### Tipografia (variáveis CSS)
```css
--t-hero: clamp(4rem, 7vw, 8rem)
--t-64: 6.4rem  --t-48: 4.8rem  --t-36: 3.6rem
--t-28: 2.8rem  --t-22: 2.2rem  --t-18: 1.8rem
--t-15: 1.5rem  --t-13: 1.3rem  --t-11: 1.1rem
```

### Espaçamento (múltiplos de 8px)
```css
--s-4: 0.4rem   --s-8: 0.8rem   --s-16: 1.6rem
--s-24: 2.4rem  --s-32: 3.2rem  --s-48: 4.8rem
--s-64: 6.4rem  --s-96: 9.6rem  --s-128: 12.8rem
```

### Motion
```css
--ease-gentle:  cubic-bezier(0.25, 0.1, 0.25, 1)
--ease-reveal:  cubic-bezier(0.16, 1, 0.3, 1)
--dur-fast: 180ms  --dur-mid: 360ms  --dur-slow: 560ms
```

---

## Configurações Dawn (Minimalismo)

| Configuração | Antes | Depois |
|-------------|-------|--------|
| `card_corner_radius` | 8px | **0px** |
| `media_radius` | 8px | **0px** |
| `badge_corner_radius` | 4px | **0px** |
| `popup_corner_radius` | 8px | **0px** |
| `variant_pills_radius` | 40px | **0px** |
| `card_shadow_opacity` | 5% | **0%** |
| `spacing_grid_horizontal` | 12px | **8px** |
| `spacing_grid_vertical` | 12px | **8px** |
| `animations_reveal_on_scroll` | — | **true** |

---

## Componentes CSS Entregues

1. **Hero** — min-height 90vh, parallax img, overlay gradiente suave, kicker + título serif + desc
2. **Grid de coleções** — 12 colunas com destaque 8col, dois cards 4col, faixa 3×4col
3. **Cards de produto** — sem borda, sem radius, hover lift + image zoom via GSAP
4. **Botões** — 3 variantes: sólido, outline, ghost com underline animado
5. **Badges** — sem radius, terracota (sale) e grafite (soldout)
6. **Título de seção** — grid com linha divisória editorial
7. **Banner editorial** — 56vh, parallax on hover
8. **Footer** — fundo grafite, links terracota on hover
9. **Newsletter** — input underline minimalista
10. **Loading shimmer** — gradiente cream/linen animado

---

## GSAP Animations

- **Scroll reveal**: `IntersectionObserver` para `.aura-fade-up`, `.aura-fade-in`, `.aura-scale-in`
- **Parallax hero**: `ScrollTrigger`, `yPercent: 18`, `scrub: 1.2`
- **Card stagger**: `.product-grid` e `.aura-stagger` com `stagger: 0.09`
- **Image hover**: `scale(1.055)` em `mouseenter/mouseleave`
- **Cursor custom**: `.aura-cursor` (ativado via JS na página)

---

## Próximos Passos — Sprint 3

### DEV (Seções Liquid)
Criar em `sections/` do tema staging:
1. `aura-hero-video.liquid` — hero com autoplay video + overlay
2. `aura-featured-collections.liquid` — grid Dcorada com CSS acima
3. `aura-product-grid.liquid` — 4 colunas com stagger GSAP
4. `aura-editorial-banner.liquid` — fullwidth com copy VERA
5. `aura-botanica-grid.liquid` — grid 2+2 editorial
6. `aura-newsletter-minimal.liquid` — formulário com input underline

### VERA (Copy)
Escrever para cada seção:
- Hero: headline 3 linhas + desc + CTA
- Kickers das 5 coleções
- Banner editorial: claim central
- Newsletter: headline + microcopy opt-in

---

*Relatório gerado em 2026-05-28 | Aura Decore — Sistema de Agentes*
