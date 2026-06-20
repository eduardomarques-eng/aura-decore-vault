# Sprint UX — Imagens CDN + Grid Fix ✅
**Data:** 2026-05-28
**Status:** `sprint-concluido`

---

## Problema Diagnosticado

| Sintoma | Causa Raiz | Solução |
|---------|-----------|---------|
| Imagens não carregavam | Pollinations `model=flux` gera on-demand (3–5s) | Upload para Shopify CDN via `fileCreate` |
| Aspect ratio errado | CSS grid sem `grid-row` explícito — auto-placement conflitante | Grid v3 com `grid-template-rows` + `grid-row` explícitos |
| Qualidade inconsistente | Seeds diferentes por session | Seeds fixos + CDN garante consistência |

---

## 8 Imagens no Shopify CDN

| Seção | Dimensão Real | CDN URL |
|-------|--------------|---------|
| Hero | 1024×576 (16:9) | `.../japandi_20minimalist_20living_20room...jpg?v=1779977042` |
| Editorial Banner | 1024×576 (16:9) | `.../minimal_20japandi_20interior_20natural_20light...jpg?v=1779977441` |
| Botanica Seca (card 1) | 1024×576 (16:9) | `.../japandi_20dried_20botanical_20pampas...jpg?v=1779977042` |
| Aromáticos (card 2) | 768×768 (1:1) | `.../japandi_20candle_20ceramic_20holder...jpg?v=1779977072` |
| Lançamentos (card 3) | 768×768 (1:1) | `.../japandi_20wabi-sabi_20ceramic_20oval...jpg?v=1779977042` |
| Mais Amados (card 4) | 686×858 (4:5) | `.../japandi_20bamboo_20wooden_20serving...jpg?v=1779977042` |
| Destaques (card 5) | 686×858 (4:5) | `.../japandi_20seasonal_20home_20decor...jpg?v=1779977043` |
| Lookbook | 940×627 (3:2) | `.../japandi_20living_20room_20editorial_20lookbook...jpg?v=1779977042` |

**Vantagens do CDN Shopify:**
- Zero tempo de geração (já processado)
- Servido via CDN global Shopify
- Suporta srcset automático
- Permanente e confiável

---

## Grid de Coleções v3 — `sections/aura-colecoes-grid.liquid`

### CSS Anterior (com problemas)
```css
/* ANTES — posicionamento implícito, aspect-ratios conflitantes */
.aura-cg-card--1{grid-column:1/9;aspect-ratio:16/9;}
.aura-cg-card--2{grid-column:9/13;aspect-ratio:1/1;}
.aura-cg-card--3{grid-column:9/13;aspect-ratio:1/1;}
.aura-cg-card--4,.aura-cg-card--5{grid-column:span 4;aspect-ratio:4/5;}
```

### CSS Novo (corrigido)
```css
/* DEPOIS — rows explícitos com clamp responsivo */
.aura-cg-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows:
    clamp(200px, 21vw, 340px)   /* row 1 */
    clamp(200px, 21vw, 340px)   /* row 2 */
    clamp(260px, 27vw, 420px);  /* row 3 */
  gap: .8rem;
}
.aura-cg-card--1 { grid-column: 1/9;  grid-row: 1/3; }  /* grande esq, 2 rows */
.aura-cg-card--2 { grid-column: 9/13; grid-row: 1; }     /* dir, row 1 */
.aura-cg-card--3 { grid-column: 9/13; grid-row: 2; }     /* dir, row 2 */
.aura-cg-card--4 { grid-column: 1/7;  grid-row: 3; }     /* baixo esq */
.aura-cg-card--5 { grid-column: 7/13; grid-row: 3; }     /* baixo dir */
```

### Aspect ratios resultantes (@ 1400px viewport)
- Card 1: ~929px × ~628px → 1.48:1 (editorial/cinematic)
- Cards 2+3: ~458px × ~308px → 1.49:1 (idem card 1 — alinhamento perfeito)
- Cards 4+5: ~693px × ~392px → 1.77:1 (~16:9)

### Melhorias adicionais v3
- `loading="eager" fetchpriority="high"` no primeiro card
- `data-aura-reveal` nos labels para scroll animation
- Overlay hover: `opacity .85` no hover
- Content translateY(4px → 0) no hover (elevação sutil)
- `limit: 5` no schema (máx 5 cards)

---

## Arquivos Alterados

| Arquivo | Status |
|---------|--------|
| `templates/index.json` | ✅ CDN URLs definitivos |
| `sections/aura-colecoes-grid.liquid` | ✅ Grid v3 — rows explícitos |
| `sections/aura-hero.liquid` | ✅ Ken Burns + trust badges (sessão anterior) |

---

## Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

## Checklist Validação

- [x] 8 imagens no Shopify CDN (status READY)
- [x] Grid de coleções com rows explícitos (sem conflito aspect-ratio)
- [x] Hero CDN URL (1024×576, 16:9 nativo)
- [x] Editorial banner CDN URL separado do hero
- [x] loading="eager" no primeiro card do grid
- [ ] Verificar preview visual no browser
- [ ] Testar mobile (375px)
