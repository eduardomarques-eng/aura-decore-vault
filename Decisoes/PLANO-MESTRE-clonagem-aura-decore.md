---
projeto: Clonagem Estrutural Dcorada → Aura Decore Japandi
ceo: IVE
agentes: THEO, LUNA, VERA, ARTE, DEV
data: 2026-05-27
status: plano-aprovado
---

# PLANO MESTRE — Aura Decore Japandi
> Clonagem da arquitetura de conversão da Dcorada com alma Japandi minimalista.
> **Estrutura idêntica · Visual transformado · Copy original**

---

## FASE 1 — VISÃO GERAL

### 1.1 Análise estrutural da referência (Dcorada)

Arquitetura mapeada da home: **header → hero carrossel (3 banners) → 5 grids de produtos sequenciais → footer**.

| Camada Dcorada | Função de conversão | O que mantemos |
|---|---|---|
| Header com logo + menu + ícones (busca/conta/carrinho) | Navegação direta, sempre visível | ✅ Layout idêntico |
| Hero carrossel 3 banners | Storytelling de campanha + CTA | ✅ Mesmo formato |
| Grid "Lançamentos" | Frescor / novidade | ✅ Posição #1 |
| Grid "Mais Vendidos" | Prova social | ✅ Renomear → "Mais Amados" |
| Grid "Destaques" | Curadoria editorial | ✅ Renomear → "Destaques da Estação" |
| 2 grids categóricos (náuticos / mesa na Dcorada) | Descoberta vertical | ✅ Substituir por: Botânica Seca + Aromáticos |
| Footer com social/contato/links | SEO + suporte | ✅ Layout 4 colunas |

### 1.2 Nova estrutura proposta — Aura Decore

```
┌─────────────────────────────────────────────────┐
│  HEADER (sticky, transparente → sólido no scroll)│
├─────────────────────────────────────────────────┤
│  HERO CARROSSEL — 3 slides (parallax sutil)     │
├─────────────────────────────────────────────────┤
│  📦 Grid 1 — LANÇAMENTOS                         │
│  💫 Grid 2 — MAIS AMADOS                         │
│  🍂 Grid 3 — DESTAQUES DA ESTAÇÃO                │
│  🌾 Grid 4 — BOTÂNICA SECA                       │
│  🕯️  Grid 5 — AROMÁTICOS & VELAS                 │
├─────────────────────────────────────────────────┤
│  📜 Sobre a Marca (texto contemplativo + foto)  │
│  📬 Newsletter (formulário discreto)             │
├─────────────────────────────────────────────────┤
│  FOOTER (4 colunas + manifesto)                 │
└─────────────────────────────────────────────────┘
```

### 1.3 O que transformamos

- **Visual:** alta densidade Dcorada → respiração Japandi (espaço em branco generoso)
- **Cores:** paleta vibrante → paleta pastel terrena (sem vermelho)
- **Copy:** urgência comercial → convite contemplativo
- **Fotografia:** estúdio branco → ambiente natural com sombras suaves
- **Motion:** estático → parallax e stagger discretos
- **Categorias:** náuticas/mesa → vasos, têxteis, botânica, aromáticos

### 1.4 Diferenciais competitivos
1. **Estética coerente:** cada pixel respira a mesma filosofia
2. **Curadoria narrativa:** produtos como objetos de história, não SKUs
3. **Performance Shopify:** Liquid otimizado + Pollinations.ai para zero custo de fotografia
4. **Sistema autônomo:** 15 agentes IA mantendo a loja viva

---

## FASE 2 — COMPONENTES PRINCIPAIS

### 2.1 HEADER

**Descrição:**
- Altura: 80px (mobile 64px)
- Estado inicial: fundo transparente sobre hero
- Após scroll 100px: fundo `#F5F0EB` com sombra 0 1px 8px rgba(0,0,0,.04)
- Logo centralizado (mobile) / esquerda (desktop)
- Menu horizontal com 7 itens + ícones à direita

**Liquid (sections/header.liquid):**
```liquid
<header class="aura-header" data-scroll-header>
  <div class="container">
    <button class="menu-toggle" aria-label="Menu">
      <svg width="20" height="20" viewBox="0 0 20 20" stroke="currentColor" fill="none">
        <line x1="3" y1="6"  x2="17" y2="6"  stroke-width="1.2"/>
        <line x1="3" y1="10" x2="17" y2="10" stroke-width="1.2"/>
        <line x1="3" y1="14" x2="17" y2="14" stroke-width="1.2"/>
      </svg>
    </button>

    <a href="{{ shop.url }}" class="logo">
      {% if section.settings.logo %}
        {{ section.settings.logo | image_url: width: 200 | image_tag }}
      {% else %}
        <span>aura decore</span>
      {% endif %}
    </a>

    <nav class="primary-nav">
      <ul>
        {% for link in linklists.main-menu.links %}
          <li class="{% if link.links %}has-mega{% endif %}">
            <a href="{{ link.url }}">{{ link.title }}</a>
            {% if link.links %}
              <div class="mega-menu">
                {% for sub in link.links %}
                  <a href="{{ sub.url }}">{{ sub.title }}</a>
                {% endfor %}
              </div>
            {% endif %}
          </li>
        {% endfor %}
      </ul>
    </nav>

    <div class="header-icons">
      <button aria-label="Buscar"><svg>…</svg></button>
      <a href="{{ routes.account_url }}" aria-label="Conta"><svg>…</svg></a>
      <a href="{{ routes.cart_url }}" aria-label="Carrinho">
        <svg>…</svg>
        <span class="cart-count">{{ cart.item_count }}</span>
      </a>
    </div>
  </div>
</header>
```

**CSS chave:**
```css
.aura-header{position:fixed;top:0;left:0;right:0;z-index:50;
  background:transparent;transition:all .4s ease;padding:1.5rem 0;}
.aura-header.scrolled{background:#F5F0EB;box-shadow:0 1px 8px rgba(0,0,0,.04);padding:.75rem 0;}
.primary-nav a{font-family:'DM Sans',sans-serif;font-size:.875rem;
  letter-spacing:.08em;text-transform:uppercase;color:#3A3530;}
.primary-nav a:hover{color:#B8793A;transition:color .3s;}
```

**Menu de navegação (7 itens):**
1. Todos os Produtos
2. Vasos & Cerâmicas (mega-menu: vasos, potes, escultura)
3. Têxteis (almofadas, mantas, tapetes, naperons)
4. Botânica Seca (pampas, ramos, flores secas, ramalhetes)
5. Aromáticos (velas, difusores, incensos)
6. Iluminação (luminárias mesa, pendentes, abajures)
7. Cozinha Japandi (tábuas, jarras, utensílios)

---

### 2.2 HERO BANNER (Carrossel 3 slides)

**Descrição:**
- Altura: 90vh desktop / 70vh mobile
- 3 slides, autoplay 6s, transição fade 1.2s
- Parallax: imagem se move 20% mais lenta que o scroll
- Texto entra com stagger (fade + translateY)

**Copy dos 3 slides:**

| Slide | Headline | Subheadline | CTA |
|---|---|---|---|
| 1 | Onde o silêncio mora | Decoração Japandi para casas que respiram | Descobrir coleção |
| 2 | A beleza da pausa | Vasos, cerâmicas e linhos para o ritual do cotidiano | Ver vasos |
| 3 | O cantinho que você precisa | Crie um refúgio com botânica seca e velas naturais | Compor ambiente |

**Motion (motion.js):**
```javascript
// Parallax discreto
document.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-image');
  if (hero) hero.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});

// Stagger entrada do texto
gsap.from('.hero-title', {y:40,opacity:0,duration:1.2,ease:'power3.out'});
gsap.from('.hero-subtitle', {y:30,opacity:0,duration:1.2,delay:.2,ease:'power3.out'});
gsap.from('.hero-cta', {y:20,opacity:0,duration:1.0,delay:.4,ease:'power3.out'});
```

---

### 2.3 HOME PAGE — 5 GRIDS DE PRODUTOS

**Padrão de cada grid:**
- Título centralizado (Cormorant Garamond 36px) + linha decorativa abaixo
- Subtítulo discreto (DM Sans 14px, cor #847B70)
- Grid 4 colunas desktop / 2 mobile, gap 32px
- 8 produtos por seção + link "Ver tudo →"
- Stagger no scroll: cada card entra com delay 80ms

**Cópia de cada grid:**

```markdown
### Grid 1 — LANÇAMENTOS
**Título:** Recém-chegados ao refúgio
**Subtítulo:** Peças novas selecionadas com cuidado

### Grid 2 — MAIS AMADOS
**Título:** Os preferidos da casa
**Subtítulo:** O que nossos visitantes mais levam para casa

### Grid 3 — DESTAQUES DA ESTAÇÃO
**Título:** O que pede esta estação
**Subtítulo:** Curadoria para o momento presente

### Grid 4 — BOTÂNICA SECA
**Título:** Natureza em pausa
**Subtítulo:** Pampas, ramos e flores que duram

### Grid 5 — AROMÁTICOS & VELAS
**Título:** O perfume do silêncio
**Subtítulo:** Velas de coco, cedro e sândalo
```

**Card de produto (Liquid):**
```liquid
<a href="{{ product.url }}" class="product-card" data-aos="fade-up">
  <div class="product-image-wrap">
    {{ product.featured_image | image_url: width:600 | image_tag:
       loading:'lazy', class:'product-image' }}
    <div class="product-overlay">
      <button class="quick-add">Adicionar</button>
    </div>
  </div>
  <div class="product-info">
    <h3 class="product-title">{{ product.title }}</h3>
    <p class="product-price">{{ product.price | money }}</p>
  </div>
</a>
```

**CSS — Card minimalista Japandi:**
```css
.product-card{display:block;text-decoration:none;color:inherit;
  transition:transform .6s ease;}
.product-card:hover{transform:translateY(-4px);}
.product-image-wrap{position:relative;aspect-ratio:1/1;
  background:#EDE5D8;overflow:hidden;border-radius:2px;}
.product-image{width:100%;height:100%;object-fit:cover;
  transition:transform .8s ease;}
.product-card:hover .product-image{transform:scale(1.04);}
.product-overlay{position:absolute;inset:auto 0 0 0;padding:1rem;
  background:linear-gradient(0deg,rgba(245,240,235,.95),transparent);
  opacity:0;transition:opacity .4s;}
.product-card:hover .product-overlay{opacity:1;}
.product-title{font-family:'DM Sans';font-weight:400;font-size:.95rem;
  margin:1rem 0 .25rem;letter-spacing:.02em;}
.product-price{font-size:.875rem;color:#847B70;}
```

---

### 2.4 PÁGINA DE CATEGORIA

**Layout completo:**

```
┌─────────────────────────────────────────────┐
│ Breadcrumb: Home / Vasos & Cerâmicas        │
├─────────────────────────────────────────────┤
│ Hero pequeno da categoria (40vh)            │
│ Título + descrição contemplativa (60 palavras)│
├─────────────────────────────────────────────┤
│ Sidebar (24%) │ Grid produtos (76%)         │
│ - Filtros     │ - 4 col desktop / 2 mobile  │
│ - Preço       │ - 24 produtos por página    │
│ - Cor         │ - Paginação minimalista     │
│ - Material    │                             │
├─────────────────────────────────────────────┤
│ Sub-categorias relacionadas (grid 4 cards)  │
└─────────────────────────────────────────────┘
```

**Filtros (estilo Japandi):**
- Sem cores de alerta, apenas checkbox circular #B8793A
- Faixas de preço: até R$ 80 / R$ 80–200 / R$ 200–500 / acima
- Materiais: Cerâmica, Linho, Madeira clara, Vidro fosco, Bambu
- Cores: cards visuais com swatches da paleta da loja

---

### 2.5 PÁGINA DE PRODUTO

**Layout completo:**

```
┌───────────────────────────────────────────────┐
│ Breadcrumb                                    │
├──────────────────────┬────────────────────────┤
│  GALERIA (60%)       │  INFO (40%)            │
│  - Imagem principal  │  Nome poético          │
│  - Thumbnails verticais│ R$ XXX,XX em 6x      │
│  - Zoom ao hover     │  Descrição (3 linhas)  │
│  - Vídeo opcional    │  Cor: [swatches]       │
│                      │  Quantidade [−][1][+]  │
│                      │  [ADICIONAR AO CARRINHO]│
│                      │  ♡ Salvar  ⤴ Compartilhar│
│                      │  Frete: CEP [____] Calcular│
│                      │  Acordeão:             │
│                      │   ▸ Descrição completa │
│                      │   ▸ Materiais          │
│                      │   ▸ Cuidados           │
│                      │   ▸ Dimensões          │
│                      │   ▸ Entrega & troca    │
├───────────────────────────────────────────────┤
│ COMBINE COM (upsell — 4 produtos sugeridos)   │
├───────────────────────────────────────────────┤
│ HISTÓRIA DA PEÇA (texto longo + foto ambiente)│
├───────────────────────────────────────────────┤
│ AVALIAÇÕES (Judge.me — estilo japandi)        │
├───────────────────────────────────────────────┤
│ VOCÊ TAMBÉM PODE GOSTAR (cross-sell)          │
└───────────────────────────────────────────────┘
```

**Copy dos 5 produtos hero:**

| Produto | Nome poético | Headline | Bullets |
|---|---|---|---|
| Vaso Cerâmica Wabi | O Vaso que Acolhe | A imperfeição como gesto | Cerâmica artesanal · Acabamento fosco · Encaixa pampas |
| Vela Âmbar Coco | Luz que Pausa | Aroma de noites quietas | Cera de coco · 40h de queima · Vidro reutilizável |
| Almofada Linho Natural | Toque de Linho | Conforto que respira | 100% linho lavado · Capa removível · Tons terra |
| Diffuser Cedro & Sândalo | Bosque em Casa | Madeira no ar | Essência natural · 90 dias · Varetas de bambu |
| Pampa Seco Premium | Plumas do Pampa | A natureza em pausa | Coloração natural · Dura 5+ anos · 70cm |

---

### 2.6 FOOTER

**Layout 4 colunas + manifesto:**

```
┌─────────────────────────────────────────────────┐
│  Manifesto (centralizado, 12 palavras):         │
│  "Acreditamos que toda casa merece um canto     │
│   onde o tempo respira."                        │
├──────────┬──────────┬──────────┬────────────────┤
│ AURA     │ EXPLORE  │ AJUDA    │ ASSINE         │
│ Sobre nós│ Vasos    │ Atendimento│ [email_____] │
│ Filosofia│ Têxteis  │ Trocas   │ [ Receber →]   │
│ Blog     │ Botânica │ Frete    │ ──────────     │
│ Imprensa │ Aromáticos│ FAQ     │ Instagram      │
│          │ Iluminação│         │ Pinterest      │
│          │          │         │ Facebook       │
├──────────┴──────────┴──────────┴────────────────┤
│ © 2026 Aura Decore · CNPJ XX · auradecore.com.br│
│ Pagamentos: Pix/Visa/Master/Elo  Selo seguro    │
└─────────────────────────────────────────────────┘
```

**Liquid (sections/footer.liquid):**
```liquid
<footer class="aura-footer">
  <div class="footer-manifesto">
    <p>Acreditamos que toda casa merece um canto onde o tempo respira.</p>
  </div>
  <div class="footer-grid">
    <div class="col">
      <h4>Aura</h4>
      <a href="/pages/sobre">Sobre nós</a>
      <a href="/pages/filosofia">Filosofia</a>
      <a href="/blogs/diario">Diário</a>
    </div>
    <div class="col">
      <h4>Explore</h4>
      {% for link in linklists.footer-categorias.links %}
        <a href="{{ link.url }}">{{ link.title }}</a>
      {% endfor %}
    </div>
    <div class="col">
      <h4>Ajuda</h4>
      <a href="/pages/atendimento">Atendimento</a>
      <a href="/policies/refund-policy">Trocas</a>
      <a href="/pages/frete">Frete</a>
      <a href="/pages/faq">FAQ</a>
    </div>
    <div class="col">
      <h4>Assine o nosso refúgio</h4>
      <p class="small">Inspirações Japandi todo domingo.</p>
      {% form 'customer', class:'newsletter' %}
        <input type="email" name="contact[email]" placeholder="seu@email.com" required>
        <button type="submit">Receber →</button>
      {% endform %}
      <div class="socials">
        <a href="#" aria-label="Instagram">IG</a>
        <a href="#" aria-label="Pinterest">PIN</a>
        <a href="#" aria-label="Facebook">FB</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <small>© 2026 Aura Decore · auradecore.com.br · CNPJ XX.XXX.XXX/0001-XX</small>
  </div>
</footer>
```

---

## FASE 3 — ASSETS VISUAIS

### 3.1 Paleta de cores (com hex codes)

**Primárias**
- `#B8793A` Terracota Aura — botões primários, links, logo
- `#F5F0EB` Off-white quente — fundo principal
- `#EDE5D8` Areia clara — cards, seções alternadas

**Secundárias**
- `#A8896C` Madeira clara — divisores, ícones
- `#7C8A6F` Musgo claro — badges de novidade, sucesso
- `#D9C9B0` Bege pastel — fundos hover
- `#C4A57B` Sand caramelo — destaques editoriais

**Neutros**
- `#3A3530` Carvão suave — texto principal
- `#847B70` Pedra — texto secundário
- `#FFFFFF` Branco puro — apenas em zoom de produto

**Estados (sem vermelho)**
- Sucesso: `#7C8A6F` (musgo)
- Info: `#A8896C` (madeira)
- Atenção: `#C4A57B` (caramelo)
- Erro suave: `#9B6F4F` (terracota escura — em lugar de vermelho)

### 3.2 Tipografia

```css
:root{
  --font-heading: 'Cormorant Garamond', serif;  /* serifa contemplativa */
  --font-body: 'DM Sans', sans-serif;           /* sans humanista */
  --font-mono: 'JetBrains Mono', monospace;     /* preços, códigos */
}
```

**Escala tipográfica (responsive clamp):**

| Token | Desktop | Mobile | Uso |
|---|---|---|---|
| h1 | 64px | 40px | Hero headline |
| h2 | 48px | 32px | Títulos de seção |
| h3 | 32px | 24px | Subseções, produtos |
| h4 | 24px | 20px | Cards |
| body-lg | 18px | 16px | Texto destacado |
| body | 16px | 15px | Padrão |
| small | 14px | 13px | Metadados |
| micro | 12px | 11px | Legais, badges |

**Pesos:** 300 (light), 400 (regular), 500 (medium). Evitar 700+ — quebra a serenidade.

**Espaçamentos de letra:**
- Headings: -0.01em (compacto, elegante)
- Body: 0
- Buttons/links de menu: 0.08em (espaçado, premium)

### 3.3 Moodboard conceitual

**10 palavras-chave:**
ma (間) · wabi-sabi · refúgio · respiração · linho lavado · madeira sem verniz · cerâmica fosca · sombra suave · pausa · contemplação

**Referências visuais (descrição):**
- Casas tradicionais japonesas com shoji branco e madeira escurecida
- Cerâmicas de Hasegawa Yumi (orgânicas, imperfeitas)
- Linhos belgas em tons de aveia
- Fotografias de Norm Architects (Copenhagen + Kyoto)
- Calligrafia sumi-e (preto sobre creme)

**Texturas obrigatórias:**
- Linho lavado natural
- Madeira clara sem verniz (carvalho/freixo)
- Cerâmica fosca terracota
- Papel washi
- Pedra calcária

### 3.4 Prompts Pollinations.AI (10 prompts em inglês)

**Banners hero (1920×800):**

```
1. Minimalist Japandi living room interior, soft morning light filtering through paper shoji screens, light oak coffee table with single ceramic vase holding dried pampas grass, beige linen sofa, off-white walls with subtle texture, terracotta accent pillow, wide shot, photorealistic, calm contemplative atmosphere, natural shadows, muted earth tones, 4k, editorial photography

2. Close-up still life of handmade matte ceramic vase in soft terracotta tone on raw linen tablecloth, scattered dried eucalyptus branches, single burning beeswax candle, golden hour light from window, shallow depth of field, organic imperfection wabi-sabi aesthetic, warm muted palette, fine art photography, 4k

3. Empty japandi bedroom corner at dawn, low natural oak bed frame with cream linen bedding, paper lantern pendant casting soft warm glow, single dried flower arrangement on bedside, wooden floor with soft shadow patterns, sense of calm refuge, photorealistic interior photography, muted earth tones
```

**Imagens de produto (1500×1500):**

```
4. Single ceramic vase, terracotta matte finish, irregular hand-thrown shape with subtle crackle texture, holding three dried pampas plumes, plain off-white background, soft diffused light from left, gentle shadow, product photography japandi style, no people, centered composition

5. Amber glass candle with coconut wax, golden flame, placed on light wood surface, scattered dried lavender sprigs, beige linen runner partially visible, warm cozy atmosphere, top-down 45° angle, japandi minimal styling, soft natural light

6. Stacked linen pillows in natural beige, cream and soft terracotta tones, gentle creases showing texture, light oak bench partially visible, off-white wall background, side lighting creating subtle shadows, japandi textile product shot

7. Brown bamboo reed diffuser with carved wooden cap, glass bottle with amber liquid, on raw linen surface beside small ceramic bowl with cedar chips, natural light, muted palette, japandi product photography

8. Tall arrangement of natural-tone dried pampas grass plumes in beige clay pot, against off-white textured wall, single shadow falling diagonally, minimal styling, warm afternoon light, japandi botanical aesthetic, fine art product photography
```

**Lifestyle (2400×1200):**

```
9. Wide ambient shot of japandi dining nook, low light wood table set for two with linen napkins, small ceramic vase with single dried branch as centerpiece, two minimal stoneware plates, paper lantern overhead, light filtering through bamboo blinds, calm intimate atmosphere, editorial photography

10. Reading corner with curved beige linen armchair, small light oak side table holding lit ceramic candle and stack of three books, sheer linen curtains diffusing afternoon light, dried botanical wall arrangement, japandi minimalism, evocative warm tones, lifestyle photography
```

**Uso:** `https://image.pollinations.ai/prompt/{PROMPT_URL_ENCODED}?width=1920&height=800&nologo=true`

---

## FASE 4 — IMPLEMENTAÇÃO

### 4.1 Plano passo a passo Shopify

**Semana 1 — Fundação (THEO + DEV)**
1. Duplicar tema atual para `aura-japandi-v1` (staging)
2. Criar coleções: lancamentos, mais-amados, destaques-estacao, botanica-seca, aromaticos
3. Configurar menu principal com 7 itens + submenus
4. Subir 5 produtos hero com descrições da VERA
5. Configurar `settings_schema.json` com a paleta

**Semana 2 — Visual (LUNA + ARTE)**
6. Aplicar paleta global via `theme.css.liquid`
7. Carregar fontes (Cormorant Garamond + DM Sans via Google Fonts)
8. Gerar 10 imagens Pollinations e fazer upload em `assets/`
9. Substituir todas as imagens placeholder pelos assets gerados
10. Refazer favicon e meta-imagens (1200×630 OG)

**Semana 3 — Seções (DEV)**
11. Construir `sections/hero-carousel.liquid` com 3 slides + parallax
12. Construir `sections/product-grid.liquid` reutilizável (5 instâncias)
13. Reconstruir `sections/header.liquid` e `sections/footer.liquid`
14. Página de produto: novo `sections/main-product.liquid` com acordeão
15. Página de categoria: filtros estilizados + grid 4 cols

**Semana 4 — Motion + Apps (DEV + Motion)**
16. Adicionar GSAP via CDN (`https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js`)
17. Implementar parallax no hero
18. Adicionar stagger nas entradas de grid (intersection observer)
19. Hover refinado em produtos (scale 1.04 + overlay)
20. Smooth scroll global

**Semana 5 — Conversão (DEV + ZARA)**
21. Instalar e estilizar Judge.me (cores Japandi)
22. Instalar Loox para fotos de review estilo lifestyle
23. Configurar popup discreto de newsletter (após 30s, frequência 7d)
24. Pixel Facebook + GA4
25. Cart drawer minimalista (deslizante da direita)

### 4.2 Apps Shopify recomendados

| App | Função | Custo |
|---|---|---|
| Judge.me Reviews | Avaliações | Free / $15 |
| Loox | Photo reviews + UGC | $9.99 |
| Boost AI Search | Busca inteligente | $25 |
| Klaviyo | Email marketing | Free até 250 |
| Privy | Popup newsletter | Free |
| Recart | Recuperação carrinho | $29 |
| ReConvert | Upsell pós-compra | $4.99 |
| LangShop | i18n (futuro EN/ES) | $12 |

### 4.3 Configurações de tema (settings_schema.json — campos chave)

```json
{
  "name": "Aura Decore Japandi",
  "settings": [
    { "type": "header", "content": "Identidade Visual" },
    { "type": "color", "id": "color_primary",   "label": "Terracota Aura",  "default": "#B8793A" },
    { "type": "color", "id": "color_bg",        "label": "Off-white quente","default": "#F5F0EB" },
    { "type": "color", "id": "color_bg_alt",    "label": "Areia clara",     "default": "#EDE5D8" },
    { "type": "color", "id": "color_text",      "label": "Texto principal", "default": "#3A3530" },
    { "type": "color", "id": "color_text_alt",  "label": "Texto secundário","default": "#847B70" },
    { "type": "color", "id": "color_accent",    "label": "Musgo (sucesso)", "default": "#7C8A6F" },

    { "type": "header", "content": "Tipografia" },
    { "type": "font_picker", "id": "font_heading", "label": "Fonte títulos",  "default": "cormorant_garamond_n4" },
    { "type": "font_picker", "id": "font_body",    "label": "Fonte texto",    "default": "dm_sans_n4" },

    { "type": "header", "content": "Layout" },
    { "type": "range", "id": "section_spacing",   "label": "Espaço entre seções (px)", "min": 40, "max": 160, "step": 8, "default": 96 },
    { "type": "range", "id": "container_max",     "label": "Largura máx. (px)",        "min": 1200, "max": 1600, "step": 40, "default": 1400 },

    { "type": "header", "content": "Motion" },
    { "type": "checkbox", "id": "enable_parallax", "label": "Parallax no hero", "default": true },
    { "type": "checkbox", "id": "enable_stagger",  "label": "Stagger nos grids", "default": true }
  ]
}
```

---

## FASE 5 — COORDENAÇÃO & MÉTRICAS

### 5.1 Roadmap (14 dias úteis)

| Dia | Fase | Responsável | Entregável |
|---|---|---|---|
| 1–3 | Fundação | THEO + DEV | Tema duplicado + coleções + produtos |
| 4–7 | Design | LUNA + ARTE | Paleta aplicada + fontes + 10 imagens |
| 8–10 | Seções | DEV | Header/Hero/Grids/Footer reconstruídos |
| 11–12 | Copy | VERA | Todas as páginas com texto final |
| 13 | Motion | DEV | GSAP + parallax + stagger |
| 14 | QA + Launch | IVE + ECHO | Testes + go-live |

### 5.2 Riscos e mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Pollinations gerar imagem fora do estilo | Média | Curadoria humana + 3 retries com prompt refinado |
| Performance Lighthouse <80 | Média | WebP + lazy-load + minificação CSS |
| Cor parecer "fechada"/triste | Baixa | A/B test claridade fundo (#F5F0EB vs #FAF6F0) |
| Cliente não entender "Japandi" | Alta | Página educativa "O que é Japandi" no menu |
| Conversão inicial baixa (<1%) | Média | Hotjar nos primeiros 30 dias para mapear fricção |

### 5.3 KPIs de sucesso

**Lançamento (mês 1):**
- Visitas únicas: 3.000+
- Taxa de conversão: ≥1.5%
- Ticket médio: R$ 220
- Bounce rate: <55%
- Tempo médio na página de produto: >90s

**Qualidade (mês 3):**
- NPS: ≥70
- Reviews 4.5+: ≥80% dos pedidos
- Taxa de devolução: <3%
- LCP (Lighthouse): <2.5s
- CLS: <0.1

---

## ANEXO — Microcopy Japandi

**Carrinho vazio:** *"Seu refúgio aguarda os primeiros objetos."*
**Busca sem resultado:** *"Não encontramos — talvez essa peça ainda esteja por chegar."*
**Produto adicionado:** *"Adicionado ao seu refúgio."*
**Pedido confirmado:** *"Sua escolha está a caminho. Logo o silêncio chega."*
**Erro de pagamento:** *"Algo pausou seu pedido. Vamos tentar outro caminho?"*
**Newsletter sucesso:** *"Bem-vindo ao nosso pequeno domingo."*

---

> **Status:** plano aprovado pelo CEO (IVE). Pronto para Sprint 1.
> **Próximo passo:** THEO inicia duplicação do tema em staging.
