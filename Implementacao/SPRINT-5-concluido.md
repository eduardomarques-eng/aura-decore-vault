# Sprint 5 — QA + Go-Live ✅
**Data:** 2026-05-28
**Responsáveis:** DEV (QA/Deploy) + IVE (aprovação)
**Tema Staging:** `gid://shopify/OnlineStoreTheme/142691795049`
**Status:** `sprint-concluido — AGUARDANDO PUBLICAÇÃO MANUAL`

---

## Entregas Realizadas

### 1. Templates Finais

| Template | O que faz | Status |
|----------|-----------|--------|
| `templates/cart.json` | Carrinho + "Complete seu lar" (Mais Amados) | ✅ |
| `templates/404.json` | 404 Japandi + produtos sugeridos | ✅ |
| `sections/aura-404.liquid` | Seção 404 com número grande + copy sereno | ✅ |

### 2. Performance

**`layout/theme.liquid`** — 3 preconnects adicionados:
```html
<link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
<link rel="preconnect" href="https://image.pollinations.ai" crossorigin>
<link rel="preconnect" href="https://cdn.shopify.com" crossorigin>
```

### 3. QA Verificado

| Item | Status |
|------|--------|
| `aura-decor-custom.css` carregado no theme.liquid | ✅ |
| `aura-animations.css` carregado | ✅ |
| GSAP + ScrollTrigger via CDN | ✅ |
| `aura-animations.js` carregado | ✅ |
| Cart drawer habilitado | ✅ |
| Yampi checkout snippet preservado | ✅ |
| Announcement bar 3 mensagens | ✅ |
| Header menu main-menu-aura-1 | ✅ |
| Footer 4 blocos + grafite | ✅ |
| Fontes Cormorant + DM Sans | ✅ |
| 5 coleções Smart com tags | ✅ |
| 5 produtos com copy + SEO | ✅ |
| Página Sobre Nós com manifesto | ✅ |

---

## Mapa Completo de Arquivos do Tema

### Sections Customizadas Aura
```
sections/aura-hero.liquid           → Hero fullscreen 90vh
sections/aura-featured-collection.liquid → Grid de produtos reais
sections/aura-colecoes-grid.liquid  → Grade editorial 12-col (Dcorada)
sections/aura-editorial-banner.liquid → Banner filosófico 55vh
sections/aura-lookbook.liquid       → Lookbook hotspots
sections/aura-collection-hero.liquid → Hero de página de coleção
sections/aura-product-details.liquid → Accordion de detalhes do produto
sections/aura-404.liquid            → Página 404 Japandi
```

### Templates
```
templates/index.json    → Home 11 seções
templates/collection.json → Coleção: hero + grid 3-col + filtros
templates/product.json  → Produto: galeria + sticky + accordion + upsell
templates/cart.json     → Carrinho + upsell "Complete seu lar"
templates/404.json      → 404 + produtos sugeridos
```

### Assets
```
assets/aura-decor-custom.css → Design system Japandi completo
assets/aura-animations.css   → Motion layer CSS
assets/aura-animations.js    → GSAP 10 animações
```

### Config / Grupos
```
config/settings_data.json    → Fontes + cores + 5 schemes Japandi
sections/header-group.json   → Header + announcement bar
sections/footer-group.json   → Footer 4 blocos + grafite
```

---

## CHECKLIST GO-LIVE — Ações Manuais Necessárias

### 🔴 Obrigatório antes de publicar

- [ ] **Verificar preview** no staging:
  `https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049`

- [ ] **Testar fluxo de compra completo**:
  1. Página inicial → Coleção
  2. Página de produto → Adicionar ao carrinho
  3. Carrinho → Checkout Yampi
  4. Confirmar que o checkout Yampi funciona

- [ ] **Verificar mobile** (375px e 390px):
  - Hero não corta conteúdo
  - Grade de coleções responsiva
  - Navbar hamburguer funcional

- [ ] **Imagens de coleção**: Acessar Admin > Coleções e fazer upload de imagem capa para cada coleção (aparece no `aura-collection-hero`)

- [ ] **Imagem do Logo**: Admin > Temas > Personalizar > Header > Logo

- [ ] **Favicon**: Admin > Temas > Personalizar > Configurações do tema > Favicon

### 🟡 Recomendado antes de publicar

- [ ] **Judge.me Reviews**: Instalar na App Store > configurar widget na PDP > importar 5 reviews iniciais de teste

- [ ] **Klaviyo**: Instalar > conectar formulário de newsletter > criar sequência de boas-vindas com cupom 10%

- [ ] **Google Analytics 4**: Admin > Preferências > Google Analytics > colar ID (G-XXXXXXXX)

- [ ] **Meta Pixel**: Admin > Preferências > Facebook Pixel > colar ID do pixel

- [ ] **Políticas da loja**: Admin > Configurações > Políticas:
  - Política de privacidade
  - Política de reembolso
  - Termos de serviço
  - Política de envio

- [ ] **Emails transacionais**: Admin > Configurações > Notificações > Personalizar templates

### 🟢 Publicar o tema

**Via Shopify Admin (não pode ser feito via código):**

1. Acesse: `https://aura-decor-17.myshopify.com/admin/themes`
2. Encontre o tema **"Aura Decore — Japandi v1 [staging]"**
3. Clique nos 3 pontos `···` → **"Publicar"**
4. Confirme a publicação

---

## Apps Recomendados (Sprint 6 — pós-lançamento)

| App | Função | Prioridade |
|-----|--------|-----------|
| Judge.me Reviews | Avaliações de produto | Alta |
| Klaviyo | Email marketing + automação | Alta |
| Loox | Foto reviews | Média |
| Frequently Bought Together | Upsell | Média |
| Postfy / Melhor Envio | Calcular frete | Alta |
| Cookiebot | LGPD consent | Obrigatório |

---

## Preview Final

```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

## KPIs para Semana 1 pós-lançamento

- Taxa de conversão: > 1.5%
- Taxa de rejeição: < 65%
- Tempo médio de sessão: > 2min
- Add-to-cart rate: > 8%
- Core Web Vitals: LCP < 2.5s, CLS < 0.1
