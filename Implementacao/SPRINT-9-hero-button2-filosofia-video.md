# Sprint 9 — Hero Triplo CTA, Filosofia Diptych & Video CTA ✅
**Data:** 2026-05-28
**Status:** `sprint-concluido — TODAS AS FUNCIONALIDADES IMPLEMENTADAS`

---

## O que foi feito nesta sessão

### 1. Hero v5 — Triplo CTA (3 botões)

**`sections/aura-hero.liquid`** atualizado (v5):

| Botão | Classe | Estilo | Label | Link |
|-------|--------|--------|-------|------|
| Primário | `.aura-hero__btn-primary` | Grafite escuro + shimmer sweep | Ir à Coleção | /collections/chegadas-novidades |
| Secundário ✨ NOVO | `.aura-hero__btn-secondary` | Outline terracota → fill no hover | Ver Produtos | /collections/all |
| Ghost | `.aura-hero__btn-ghost` | Text link + seta → terracota no hover | Nosso manifesto | /pages/manifesto |

**Novo CSS para botão secundário:**
```css
.aura-hero__btn-secondary {
  background: transparent;
  color: var(--aura-terracota, #B8793A);
  border: 1.5px solid var(--aura-terracota, #B8793A);
  /* hover: background terracota + cor off-white */
}
```

**Schema atualizado:**
- `button_label` / `button_link` → primário grafite
- `button2_label` / `button2_link` → secundário terracota (NOVO)
- `button3_label` / `button3_link` → ghost texto (era button2)

---

### 2. Seção Filosofia — Diptych Japandi & Minimalismo (NOVA)

**`sections/aura-filosofia.liquid`** — criada do zero:

Layout díptico 2 colunas com cards comparativos:

| Card | Tag | Kicker | Título | CTA |
|------|-----|--------|--------|-----|
| 1 | Japandi | Wabi-Sabi & Kanso | O silêncio que fala | Explorar Japandi → /mais-amados |
| 2 | Minimalismo | Design Intencional | A beleza do menos | Explorar Minimalismo → /minimalismo-funcional |

**Features por card (estilo `— terracota`):**
- Japandi: Materiais orgânicos / Paleta neutra / Forma que segue a função
- Minimalismo: Linhas limpas / Monocromia elegante / Espaço em branco como design

**Imagens** (Pollinations.ai flux-realism 1920×1280, aspect ratio 3:2):
- Japandi: seed 3520 — interior wabi-sabi, ceramic vessels, warm wood
- Minimalismo: seed 3521 — minimalist white interior, single object, morning light

**Schema name:** `"Filosofia — Japandi"` (19 chars ≤ 25 ✅)

**Configurado em `templates/index.json`:**
- 2 blocos: `filosofia_japandi` + `filosofia_minimalismo`
- Inserido após `mais_amados_grid`

---

### 3. Seção Video CTA Cinematográfico — já existia, agora na homepage

**`sections/aura-video-cta.liquid`** (criada no Sprint 8, não adicionada à homepage):

Agora inserida após `editorial_banner_1` com:
- **Kicker:** "A Essência Aura"
- **Heading:** "Habitar com intenção é um ato de amor próprio"
- **Subheading:** "Cada peça que trazemos para dentro de casa define como vivemos..."
- **Stats:** 500+ Peças curadas · R$0 Frete acima de R$ 299 · 30 dias Garantia de troca
- **CTA primário:** "Ver toda a coleção" → /collections/all
- **CTA ghost:** "Nosso manifesto" → /pages/manifesto
- **Imagem:** Pollinations.ai 2560×1440 (quasi-4K 16:9), seed 3530 — cinematic candlelight interior

---

### 4. Homepage — 15 seções (era 13)

Nova ordem:
```
aura_hero
→ aura_carousel
→ lancamentos_grid
→ editorial_banner_1
→ aura_video_cta     [ADICIONADO à homepage]
→ mais_amados_grid
→ aura_filosofia     [NOVO]
→ colecoes_grid
→ aura_lookbook
→ destaques_grid
→ multicolumn_values
→ testimonials
→ revista_aura
→ newsletter
→ rich_text_cta
```

---

## Arquivos criados/atualizados nesta sessão

```
sections/aura-filosofia.liquid   — NOVO: diptych Japandi & Minimalismo
sections/aura-hero.liquid        — ATUALIZADO v5: triplo CTA + btn-secondary terracota
templates/index.json             — ATUALIZADO: 15 seções + hero button2/button3
```

---

## Score de Qualidade Sprint 9

| Feature | Status |
|---------|--------|
| Hero triplo CTA | ✅ Primary (grafite) + Secondary (terracota outline) + Ghost |
| Botão "Ver Produtos" terracota | ✅ Hover: fill terracota + seta animada |
| Seção Filosofia Diptych | ✅ 2 cards — Japandi vs Minimalismo |
| Copy persuasivo Filosofia | ✅ Benefit-focused, sensorial, japandi tone |
| Video CTA na homepage | ✅ Cinematic belt com stats 500+ peças, R$0 frete |
| Imagens alta resolução | ✅ 2560×1440 (video CTA), 1920×1280 (filosofia) |
| 15 seções na homepage | ✅ Experiência completa e profissional |
| Schema válido (<25 chars) | ✅ "Filosofia — Japandi" = 19 chars |
| prefers-reduced-motion | ✅ Todos os elementos |

---

## Pendências para o Erick (USER ACTION)

### 🔴 Obrigatório ANTES de publicar

- [ ] **Preview completo:**
  ```
  https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
  ```
  - Hero: 3 botões (Ir à Coleção + Ver Produtos + Nosso manifesto)
  - Video CTA: stats + cinematic image + 2 CTAs
  - Filosofia: cards Japandi vs Minimalismo com features
  - Mobile 375px: botões empilhados corretamente

- [ ] **Upload do logo + favicon** (pendente de sprints anteriores)
- [ ] **SEO homepage** → Admin > Online Store > Preferences
- [ ] **Publicar tema** → Admin > Temas > ··· > Publicar

### 🟢 Preview

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```
