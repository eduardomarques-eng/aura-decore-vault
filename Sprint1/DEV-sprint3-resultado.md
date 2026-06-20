# Sprint 3 — Resultado DEV
**Data:** 2026-05-28  
**Status:** ✅ CONCLUÍDO  
**Tema:** Aura Decore — Japandi v1 [staging]  
**ID:** `gid://shopify/OnlineStoreTheme/142691795049`

---

## Seções Liquid Criadas (6 seções)

| Arquivo | Tamanho | Descrição |
|---------|---------|-----------|
| `sections/aura-hero.liquid` | 6.2 KB | Hero fullwidth: imagem + parallax + kicker + título serif + 2 botões + scroll hint |
| `sections/aura-featured-collections.liquid` | 5.0 KB | Grid de coleções 12 colunas: 1 destaque + 2 laterais + 3 na base |
| `sections/aura-product-grid.liquid` | 6.7 KB | Grid de produtos: 4 colunas desktop, 2 mobile, stagger GSAP, quick-add |
| `sections/aura-editorial-banner.liquid` | 4.7 KB | Banner editorial 56vh: overlay configurável, parallax, copy VERA |
| `sections/aura-newsletter-minimal.liquid` | 4.4 KB | Newsletter: input underline, form nativo Shopify, tags automáticas |
| `sections/aura-text-divider.liquid` | 1.0 KB | Divisor editorial: linha fina + frase serif centralizada |

**Total:** 28 KB de Liquid customizado

---

## Estrutura da Homepage Recomendada

```
1. aura-hero          → Hero principal (imagem + "O espaço que respira")
2. aura-text-divider  → "objeto com alma"
3. aura-featured-collections → 5 coleções em grid
4. aura-product-grid  → "Mais Amados" — 8 produtos
5. aura-editorial-banner → "Habitar com intenção." (foto editorial)
6. aura-product-grid  → "Chegadas | Novidades" — 8 produtos  
7. aura-text-divider  → "silêncio que fala"
8. aura-newsletter-minimal → Newsletter curadoria
```

---

## Destaques Técnicos por Seção

### aura-hero.liquid
- `{% schema %}` com: image_picker, range height (vh), kicker, richtext heading, 2 CTAs configuráveis
- Parallax via `.aura-parallax-img` + GSAP ScrollTrigger (Sprint 2)
- Overlay em gradiente beige (não preto) — mantém leveza Japandi
- `scroll hint` animado com CSS keyframe
- Responsive: min-height mobile configurável

### aura-featured-collections.liquid
- Suporta até 6 blocks do tipo `collection_card`
- Fallback automático para as coleções da loja
- `custom_title` e `subtitle` por card
- Grid CSS 12 colunas com layout Dcorada replicado
- `aura-stagger__item` → animação GSAP em cascata

### aura-product-grid.liquid
- Fonte: `collection` picker com fallback para `collections.all`
- Colunas desktop configuráveis (2–5)
- Badges dinâmicos: sale e esgotado
- `.aura-fade-up` com CSS delay customizado por item
- Quick-add form nativo Shopify
- Link "Ver todos" com toggle

### aura-editorial-banner.liquid
- Overlay com opacidade configurável (0–80%)
- Textos brancos automáticos quando há imagem
- Hover parallax via CSS `.aura-banner__img`
- Heights configuráveis: desktop + mobile + mínimo
- Copy totalmente editável no painel

### aura-newsletter-minimal.liquid
- Form nativo `{% form 'customer' %}` — compatível com Email Marketing do Shopify
- Tags automáticas: `newsletter, aura-decore`
- Input com underline (sem borda) — estilo Japandi
- Mensagem de sucesso configurável
- Nota de privacidade no rodapé

### aura-text-divider.liquid
- 1KB apenas — ultra-leve
- Frase customizável + data-aura-reveal (fade-in no scroll)
- Flexível para separar seções mantendo respiro

---

## Como Adicionar à Homepage

1. Acesse: **Shopify Admin → Online Store → Themes**
2. Clique em **"Aura Decore — Japandi v1 [staging]"** → Customize
3. Na homepage, clique **"Add section"**
4. As seções `Aura Hero`, `Aura Coleções Grid`, `Aura Grid de Produtos`, `Aura Banner Editorial`, `Aura Newsletter`, `Aura Divisor de Texto` aparecem na lista
5. Adicione na ordem recomendada acima
6. Configure cada seção: imagem, textos, coleção

---

## Próximos Passos — Sprint 4

### VERA (Copywriting)
Escrever copy final para cada seção:
- [ ] Headline hero: 3 linhas max, última em itálico
- [ ] Kicker do banner: 3 palavras em maiúsculas
- [ ] Frase do divisor: máx 4 palavras
- [ ] Subject da newsletter: contemplativo, sem urgência

### Imagens (ARTE)
Configurar no Shopify Files e atribuir às seções:
- [ ] hero-banner-principal.jpg → `aura-hero`
- [ ] botanica-hero.jpg → collection card Botânica Seca
- [ ] aromaticos-hero.jpg → collection card Aromáticos & Velas
- [ ] banner-especial.jpg → `aura-editorial-banner`

### Go-live (Sprint 5)
- [ ] QA mobile (iPhone 14 Pro + Samsung S23)
- [ ] Core Web Vitals: LCP < 2.5s
- [ ] Publicar tema staging como live
- [ ] Atualizar `.env` `SHOPIFY_LIVE_THEME_ID`

---

*Relatório gerado em 2026-05-28 | Aura Decore — Sistema de Agentes*
