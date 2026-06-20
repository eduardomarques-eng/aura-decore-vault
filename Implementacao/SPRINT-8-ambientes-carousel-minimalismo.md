# Sprint 8 — Ambientes, Carrossel & Minimalismo ✅
**Data:** 2026-05-28
**Status:** `sprint-concluido — TODAS AS FUNCIONALIDADES IMPLEMENTADAS`

---

## O que foi feito nesta sessão

### 1. Seção Carrossel Banner (NOVA)

**`sections/aura-carousel-banner.liquid`** — criada do zero:

- **5 slides** com imagens 1920×1080 (aspect ratio 16:9 correto) via Pollinations.ai flux-realism
- **Motion premium**: fade cross com zoom-out na entrada (scale 1.06 → 1.0)
- **Reveal animations**: kicker, heading, sub-copy e CTA entram em cascata (stagger 0.15s)
- **Shimmer no CTA**: `::before` sweep animado sobre o botão
- **Seta animada**: translateX(5px) no hover
- **Barra de progresso**: linha terracota embaixo indicando avanço automático
- **Dots**: escalonados com active state oval (border-radius: 4px)
- **Navegação**: setas prev/next com backdrop-filter blur
- **Touch**: swipe suporte com threshold 60px
- **A11y**: aria-roledescription, role="tab", keyboard ArrowLeft/Right
- **prefers-reduced-motion**: todas as animações desativadas

**Slides configurados em `templates/index.json`:**

| Slide | Tema | Seed | CTA |
|-------|------|------|-----|
| 1 | Curadoria Japandi | 3400 | Ir à Coleção → /chegadas-novidades |
| 2 | Design Minimalista | 3401 | Explorar Minimalismo → /all |
| 3 | Botânica Seca & Natural | 3402 | Ver Botânica Seca → /botanica-seca |
| 4 | Rituais de Aroma | 3403 | Ver Aromáticos & Velas |
| 5 | Filosofia Wabi-Sabi | 3404 | Descobrir a Curadoria → /mais-amados |

---

### 2. Hero CTA — "Ir à Coleção" com Motion Premium

**`sections/aura-hero.liquid`** atualizado (v4):

**Botão primário — novas features:**
- SVG arrow icon (`→`) ao lado do texto
- `gap: 1.2rem` entre texto e ícone
- `::before` shimmer sweep: `aura-hero-shimmer` 3.5s infinite
- Ícone: `translateX(5px)` no hover
- `position: relative; overflow: hidden` para shimmer
- `prefers-reduced-motion`: shimmer e icon transition desativados

**Copy atualizado em `templates/index.json`:**
- `badge`: "Japandi & Minimalismo · 2026" (antes: "Nova Coleção · 2026")
- `kicker`: "Curadoria Japandi & Minimalismo" (antes: "Curadoria Japandi")
- `button_label`: "Ir à Coleção" (antes: "Descobrir a Coleção")

---

### 3. Página "Ambientes" — Japandi & Minimalismo

**`sections/aura-ambientes.liquid`** — criada do zero:

Layout alternado (image ↔ copy) com 5 ambientes:

| # | Ambiente | Tag | Kicker | CTA → Coleção |
|---|---------|-----|--------|---------------|
| 1 | Sala de Estar | Japandi Living | A sala onde o tempo desacelera | mais-amados |
| 2 | Quarto Zen | Zen Bedroom | O quarto que prepara para o sono profundo | aromaticos-e-velas |
| 3 | Escritório Minimalista | Minimal Workspace | O espaço onde a clareza produz | chegadas-novidades |
| 4 | Varanda Verde | Green Balcony | A varanda que respira com você | botanica-seca |
| 5 | Banheiro Sereno | Spa at Home | O ritual que começa pela manhã | aromaticos-e-velas |

Imagens geradas: Pollinations.ai flux-realism 1200×800 (aspect ratio 3:2), seeds 3410–3414.

**Copy de alto impacto** em cada ambiente:
- Benefit-focused (o que o produto faz pelo usuário, não o que é)
- Linguagem sensorial e emocional (Japandi philosophy)
- 3 features por ambiente com estilo "— destaque" em terracota
- CTA com hover: background terracota + arrow translateX

---

### 4. Template e Página Shopify

**`templates/page.ambientes.json`** — template com 5 blocos de ambiente pré-configurados

**Página Shopify criada:**
```
ID: gid://shopify/Page/121734529129
Handle: ambientes
Título: Ambientes — Inspire-se
Template: page.ambientes
URL: /pages/ambientes
```

---

### 5. Coleção "Minimalismo Funcional" (NOVA)

**Smart collection** criada automaticamente via regras:
- TITLE CONTAINS "Minimal" OR "Wabi" OR "Bambu"
- **14 produtos** identificados automaticamente ✅
- SEO: "Minimalismo Funcional — Design Intencional para o Lar | Aura Decore"
- Imagem: Pollinations flux-realism seed 3500 (1920×1080)

```
ID: gid://shopify/Collection/318736367721
Handle: minimalismo-funcional
Produtos: 14 (auto-atualizados)
```

---

### 6. Navegação Atualizada — 9 itens

**`main-menu`** agora tem:

| # | Item | URL |
|---|------|-----|
| 1 | Novidades | /collections/chegadas-novidades |
| 2 | Mais Amados | /collections/mais-amados |
| 3 | Botânica Seca | /collections/botanica-seca |
| 4 | Aromáticos & Velas | /collections/aromaticos-e-velas |
| 5 | Destaque da Estação | /collections/destaque-da-estacao |
| 6 | **Minimalismo** ✨ NOVO | /collections/minimalismo-funcional |
| 7 | **Ambientes** ✨ NOVO | /pages/ambientes |
| 8 | Sobre a Aura | /pages/sobre |
| 9 | Revista AURA | /blogs/revista |

---

### 7. Homepage Atualizada — 13 seções

Nova ordem:
```
aura_hero → aura_carousel [NOVO] → lancamentos_grid → editorial_banner_1
→ mais_amados_grid → colecoes_grid → aura_lookbook → destaques_grid
→ multicolumn_values → testimonials → revista_aura → newsletter → rich_text_cta
```

---

## Arquivos criados/atualizados nesta sessão

```
sections/aura-carousel-banner.liquid   — NOVO: carousel 5 slides motion premium
sections/aura-ambientes.liquid          — NOVO: página ambientes alternating layout
sections/aura-hero.liquid               — ATUALIZADO: shimmer CTA + icon animado
templates/page.ambientes.json          — NOVO: template da página ambientes
templates/index.json                   — ATUALIZADO: carousel + hero copy Minimalismo
```

## Recursos criados via API

```
Página:    /pages/ambientes (gid://shopify/Page/121734529129)
Coleção:   /collections/minimalismo-funcional (gid://shopify/Collection/318736367721)
Navegação: main-menu atualizado com Minimalismo + Ambientes
```

---

## Score de Qualidade Sprint 8

| Feature | Status |
|---------|--------|
| Carousel banner 5 slides | ✅ Motion premium + shimmer + progress bar |
| Hero "Ir à Coleção" | ✅ Shimmer + SVG arrow + animation |
| Conceito Minimalismo | ✅ Badge, kicker, coleção, carousel slide |
| Página Ambientes | ✅ 5 ambientes com copy de alto impacto |
| Navegação | ✅ 9 itens (Minimalismo + Ambientes adicionados) |
| Imagens carousel | ✅ 1920×1080 (16:9 correto) flux-realism |
| Imagens ambientes | ✅ 1200×800 (3:2 correto) flux-realism |
| Coleção Minimalismo | ✅ 14 produtos auto-selecionados + SEO |
| Copy persuasivo | ✅ Benefit-focused, sensorial, japandi tone |
| Acessibilidade | ✅ prefers-reduced-motion em todas as animações |

---

## Pendências para o Erick (USER ACTION)

### 🔴 Obrigatório ANTES de publicar

- [ ] **Verificar preview completo:**
  ```
  https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
  ```
  - Hero: botão "Ir à Coleção" com shimmer + seta animada
  - Carousel: 5 slides com auto-advance 6s + dots + progress bar
  - Ambientes: /pages/ambientes — layout alternado 5 ambientes
  - Minimalismo: /collections/minimalismo-funcional — 14 produtos
  - Mobile 375px: todos os carrosséis responsivos

- [ ] **SEO da loja (homepage):** Admin > Online Store > Preferences
- [ ] **Upload do logo + favicon** (pendente de sprints anteriores)
- [ ] **Testar fluxo:** Home → Carousel → Coleção → Produto → Carrinho → Yampi
- [ ] **Publicar:**
  ```
  Admin > Temas > "Aura Decore — Japandi v1 [staging]" > ··· > Publicar
  ```

### 🟢 Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```
