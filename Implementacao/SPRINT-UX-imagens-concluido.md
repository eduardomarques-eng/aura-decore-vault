# Sprint UX — Hero v3 + Imagens Editoriais ✅
**Data:** 2026-05-28
**Status:** `sprint-concluido`

---

## Entregas

### 1. Hero v3 — `sections/aura-hero.liquid`

Melhorias de conversão e profissionalismo:

| Elemento | O que mudou |
|----------|-------------|
| **Ken Burns** | `@keyframes aura-ken-burns` — zoom cinematográfico 22s ease-out forwards |
| **Overlay direcional** | Fade esquerda→direita (88%→55%→8%→0%) + vinheta no rodapé |
| **Badge** | Pílula "Nova Coleção · 2026" em terracota, acima do kicker |
| **Botão primário** | Grafite → terracota no hover |
| **Botão ghost** | Underline reveal + seta `→` com translateX no hover |
| **Trust badges** | 3 itens abaixo dos CTAs: frete · troca · embalagem |
| **Scroll hint** | Linha pulsante (scaleY + translateY) + texto vertical "scroll" |

Novos campos de schema: `badge`, `trust_1`, `trust_2`, `trust_3`

---

### 2. Imagens Profissionais — `templates/index.json`

Todas as URLs atualizadas para `model=flux` (Pollinations v3) com seeds fixos para consistência:

| Seção | Dimensão | Seed | Descrição do prompt |
|-------|----------|------|---------------------|
| Hero | 1920×1080 | 2601 | Sala japandi minimalista, luz difusa, boucle sofa, vaso cerâmica |
| Editorial Banner | 1600×900 | 2602 | Quarto santuário, manhã, cortinas linho, eucalipto seco |
| Coleções – Botânica (16:9) | 1600×900 | 2603 | Arranjo pampas + trigo + algodão, vaso terracota, fundo linho |
| Coleções – Aromáticos (1:1) | 900×900 | 2604 | Vela soja, difusor âmbar, bandeja madeira, luz dourada |
| Coleções – Lançamentos (1:1) | 900×900 | 2605 | Vaso cerâmica wabi-sabi, haste seca única, mármore |
| Coleções – Mais Amados (4:5) | 900×1125 | 2606 | Bandeja bambu, porta-vela cerâmica, linho, retrato vertical |
| Coleções – Destaques (4:5) | 900×1125 | 2607 | Outono terracota, rattan, bowl cerâmica, luz janela |
| Lookbook (3:2) | 1200×800 | 2608 | Sala editorial, sofa boucle, pampas, mesa carvalho, luz tarde |

**Trust badges configurados no Hero:**
- `trust_1`: "Frete gratis acima de R$ 299"
- `trust_2`: "Troca gratis em 30 dias"
- `trust_3`: "Embalagem presente incluida"

**Badge Hero:** "Nova Colecao · 2026"

**Newsletter:** Cupom BEMVINDO10 mencionado no corpo do texto

---

## Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

---

## Aspect Ratios por Posição

```
Hero          → 16:9  (1920×1080) — fullscreen cinematográfico
Editorial     → 16:9  (1600×900)  — banner filosófico 55vh
Col. Botânica → 16:9  (1600×900)  — card large, posição 1
Col. Aromát.  → 1:1   (900×900)   — card médio, posição 2
Col. Lançam.  → 1:1   (900×900)   — card médio, posição 3
Col. Amados   → 4:5   (900×1125)  — card retrato, posição 4
Col. Destaq.  → 4:5   (900×1125)  — card retrato, posição 5
Lookbook      → 3:2   (1200×800)  — editorial room shot
```
