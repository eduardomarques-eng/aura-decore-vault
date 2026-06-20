# Sprint 1 — Concluído ✅
**Data:** 2026-05-28
**Responsável:** IVE (CEO) + THEO (Shopify Expert) + VERA (Copywriter)
**Status:** `sprint-concluido`

---

## Entregas Realizadas

### 1. Coleções Criadas (5/5) ✅

| Coleção | ID Shopify | Handle | Tipo | Regra de Tag |
|---------|-----------|--------|------|-------------|
| Lançamentos | `318706188393` | `/collections/lancamentos` | Smart | `tag = lancamento` |
| Mais Amados | `318706221161` | `/collections/mais-amados-1` | Smart | `tag = mais-amado` |
| Destaques da Estação | `318706253929` | `/collections/destaques-da-estacao` | Smart | `tag = destaque-estacao` |
| Botânica Seca | `318706286697` | `/collections/botanica-seca-1` | Smart | `tags: botanica-seca, planta-seca, arranjo-seco` (OR) |
| Aromáticos e Velas | `318706319465` | `/collections/aromaticos-e-velas-1` | Smart | `tags: vela, aromatico, difusor` (OR) |

---

### 2. Menu de Navegação Criado ✅

**ID:** `gid://shopify/Menu/224519094377`
**Handle:** `main-menu-aura-1`
**Título:** Menu Principal — Aura Decore

| # | Item | Tipo | URL |
|---|------|------|-----|
| 1 | Lançamentos | COLLECTION | `/collections/lancamentos` |
| 2 | Mais Amados | COLLECTION | `/collections/mais-amados-1` |
| 3 | Destaques da Estação | COLLECTION | `/collections/destaques-da-estacao` |
| 4 | Botânica Seca | COLLECTION | `/collections/botanica-seca-1` |
| 5 | Aromáticos e Velas | COLLECTION | `/collections/aromaticos-e-velas-1` |
| 6 | Todos os Produtos | CATALOG | `/collections/all` |
| 7 | Sobre Nós | PAGE | `/pages/sobre-nos` |

---

### 3. Página "Sobre Nós" Criada ✅

**ID:** `gid://shopify/Page/121723650153`
**Handle:** `sobre-nos`
**Copy:** VERA — tom Japandi contemplativo, filosofia wabi-sabi, identidade da marca

---

### 4. Produtos Hero Criados (5/5) ✅

| Produto | ID Shopify | Preço | Tags | Coleção Associada |
|---------|-----------|-------|------|-------------------|
| Vaso Cerâmica Wabi-Sabi | `7795242270825` | R$129-139 | lancamento, destaque-estacao | Lançamentos |
| Bandeja de Bambu Zen | `7795242303593` | R$79-139 | mais-amado, lancamento | Mais Amados |
| Arranjo de Pampas e Trigo Seco | `7795242401897` | R$69-119 | botanica-seca, lancamento | Botânica Seca |
| Difusor de Ambiente Aura | `7795242500201` | R$119 | aromatico, difusor, lancamento | Aromáticos e Velas |
| Porta-Objetos Madeira Clara | `7795242598505` | R$94-104 | mais-amado, destaque-estacao | Mais Amados |

---

## Próximos Passos — Sprint 2

### LUNA — Design System Japandi

1. **CSS Custom** — implementar paleta de cores no tema staging:
   - `--color-primary: #F5F0E8` (off-white bege)
   - `--color-accent: #C8B89A` (caramelo suave)
   - `--color-text: #5C5148` (marrom quente)
   - `--color-earth: #B8937A` (terracota)
   - `--color-moss: #7D8B6E` (verde musgo)

2. **Tipografia** — fontes via Google Fonts:
   - Cormorant Garamond (serif — headings)
   - DM Sans (sans — corpo)

3. **10 Imagens Pollinations.ai** — banners hero, lifestyle, categorias

### DEV — Seções Liquid

1. Duplicar tema para staging `aura-japandi-v1`
2. Reconstruir seção Hero com carrossel
3. Criar 5 grids de produto conforme estrutura Dcorada

---

## IDs de Referência

```
SHOPIFY_DOMAIN=aura-decor-17.myshopify.com
STAGING_THEME_ID=gid://shopify/OnlineStoreTheme/142526644329
LIVE_THEME_ID=gid://shopify/OnlineStoreTheme/142376337513

MENU_PRINCIPAL=gid://shopify/Menu/224519094377

COL_LANCAMENTOS=gid://shopify/Collection/318706188393
COL_MAIS_AMADOS=gid://shopify/Collection/318706221161
COL_DESTAQUES=gid://shopify/Collection/318706253929
COL_BOTANICA=gid://shopify/Collection/318706286697
COL_AROMATICOS=gid://shopify/Collection/318706319465

PAGE_SOBRE=gid://shopify/Page/121723650153
```
