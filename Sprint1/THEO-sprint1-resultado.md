# Sprint 1 — Resultado THEO
> **Nome oficial da loja:** Aura decore (d minúsculo — padrão adotado daqui em diante)

**Data:** 2026-05-27  
**Status:** ✅ CONCLUÍDO

---

## 1. Tema Staging — aura-japandi-v1

| Campo | Valor |
|-------|-------|
| Nome | `aura-japandi-v1` |
| ID | `gid://shopify/OnlineStoreTheme/142691795049` |
| Role | `UNPUBLISHED` (staging) |
| Base | Cópia de "Aura Decor Premium" (live) |
| Env | `SHOPIFY_STAGING_THEME_ID` atualizado no `.env` |

---

## 2. Coleções Criadas (5/5)

| # | Título | Handle | ID | Sort |
|---|--------|--------|----|------|
| 1 | Chegadas \| Novidades | `chegadas-novidades` | `gid://shopify/Collection/318649925737` | CREATED_DESC |
| 2 | Mais Amados | `mais-amados` | `gid://shopify/Collection/318649958505` | BEST_SELLING |
| 3 | Destaque da Estação | `destaque-da-estacao` | `gid://shopify/Collection/318649991273` | MANUAL |
| 4 | Botânica Seca | `botanica-seca` | `gid://shopify/Collection/318650024041` | MANUAL |
| 5 | Aromáticos & Velas | `aromaticos-e-velas` | `gid://shopify/Collection/318650056809` | MANUAL |

**URLs das coleções:**
- `/collections/chegadas-novidades`
- `/collections/mais-amados`
- `/collections/destaque-da-estacao`
- `/collections/botanica-seca`
- `/collections/aromaticos-e-velas`

---

## 3. Menu Principal — Atualizado

**Menu ID:** `gid://shopify/Menu/223737380969`  
**Handle:** `main-menu`

| # | Item | URL |
|---|------|-----|
| 1 | Novidades | `/collections/chegadas-novidades` |
| 2 | Mais Amados | `/collections/mais-amados` |
| 3 | Botânica Seca | `/collections/botanica-seca` |
| 4 | Aromáticos & Velas | `/collections/aromaticos-e-velas` |
| 5 | Destaque da Estação | `/collections/destaque-da-estacao` |
| 6 | Sobre a Aura | `/pages/sobre` |
| 7 | Revista AURA | `/blogs/revista` |

---

## 4. Próximos Passos

### Para LUNA (Sprint 2 — CSS/Tipografia):
- Aplicar CSS Japandi no tema `aura-japandi-v1`
- Fonte: Cormorant Garamond (títulos) + DM Sans (corpo)
- Paleta: Beige `#F5F0EB`, Off-white `#FAFAF8`, Terracota `#B8793A`, Verde musgo `#8B9D77`
- Variáveis CSS no `base.css` do tema staging

### Para DEV (Sprint 3 — Liquid Sections):
- Recriar as seções inspiradas na estrutura Dcorada:
  1. `section-hero-carrossel.liquid` — carrossel de 3 slides fullwidth
  2. `section-grid-novidades.liquid` — grid 4 produtos (últimos)
  3. `section-grid-categorias.liquid` — 5 cards de coleção visual
  4. `section-grid-mais-amados.liquid` — grid 4 produtos best sellers
  5. `section-grid-botanica.liquid` — grid misto 2+2 com imagem editorial
  6. `section-grid-aromaticos.liquid` — grid 3 produtos + banner lateral
  7. `section-banner-editorial.liquid` — banner 100vw com copy VERA
  8. `section-footer-japandi.liquid` — footer 4 colunas + newsletter

### Para VERA (Sprint 2 paralelo):
- Finalizar copy para as 5 coleções
- Headlines para cada grid section
- Microcopy: badges, CTAs, tooltips

---

## 5. Recursos Disponíveis

**Blogs existentes:**
- Notícias: `gid://shopify/Blog/91064631401` — `/blogs/noticias`
- Revista AURA: `gid://shopify/Blog/91095957609` — `/blogs/revista`

**Páginas existentes:**
- Sobre: `/pages/sobre`
- Manifesto: `/pages/manifesto`
- FAQ: `/pages/faq`
- Contato: `/pages/contact`

---

*Relatório gerado em 2026-05-27 pelo sistema de agentes Aura Decore*
