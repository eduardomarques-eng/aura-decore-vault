# Execute Tudo — Entregáveis Finais ✅
**Data:** 2026-05-28
**Status:** `completo`

---

## Tudo Executado

### 1. Cupom de Desconto
| Campo | Valor |
|-------|-------|
| Código | `BEMVINDO10` |
| Desconto | 10% em todos os produtos |
| Público | Todos os clientes |
| Início | 28/05/2026 |
| Validade | Sem expiração |
| ID | `gid://shopify/DiscountCodeNode/1913297829993` |

→ Announcement bar atualizada: "USE BEMVINDO10 E GANHE 10% NA PRIMEIRA COMPRA"

---

### 2. Páginas de Política — Atualizadas com Copy Japandi

| Página | Handle | Status |
|--------|--------|--------|
| Política de Privacidade | `/pages/politica-de-privacidade` | ✅ Atualizado |
| Frete e Entrega | `/pages/politica-de-entrega` | ✅ Atualizado |
| Trocas e Devoluções | `/pages/politica-de-trocas` | ✅ Atualizado |
| Termos de Serviço | `/pages/termos-de-servico` | ✅ Atualizado |
| FAQ | `/pages/faq` | ✅ Atualizado com 10 perguntas |

---

### 3. Header & Footer Atualizados

**`sections/header-group.json`**:
- Announcement bar — 3 mensagens rotativas:
  1. "FRETE GRATIS ACIMA DE R$ 299 · ENTREGA EM TODO O BRASIL"
  2. "CURADORIA JAPANDI · PECAS QUE HABITAM COM INTENCAO"
  3. "USE BEMVINDO10 E GANHE 10% NA PRIMEIRA COMPRA"

**`sections/footer-group.json`**:
- Block Coleções → menu `main-menu-aura-1`
- Block Informações → menu `footer` (políticas + FAQ + manifesto)
- Block Contato → atendimento@auradecore.com.br · Seg-Sex 9h–18h
- Newsletter "Novidades com alma"

---

### 4. Catálogo Expandido — 10 Novos Produtos

| Produto | Preço | Tags | Coleção Principal |
|---------|-------|------|-------------------|
| Vaso Cerâmica Oval Minimalista | R$149 | lancamento, destaque-estacao | Lançamentos |
| Vela Artesanal Soja — Bambu & Cedro | R$89 | aromatico, vela, mais-amado | Aromáticos e Velas |
| Eucalipto Preservado — Buquê Seco | R$79 | botanica-seca, mais-amado | Botânica Seca |
| Suporte de Livros Madeira Natural | R$129 | mais-amado, destaque-estacao | Destaques da Estação |
| Difusor de Varas — Lavanda & Musk | R$109 | aromatico, difusor, mais-amado | Aromáticos e Velas |
| Incensário de Cerâmica — Ripple | R$69 | aromatico, mais-amado | Aromáticos e Velas |
| Cesta de Rattan Oval (G/P) | R$79–119 | mais-amado, destaque-estacao | Destaques da Estação |
| Vela Pilar Cera Natural — Argila (P/G) | R$59–89 | vela, mais-amado | Aromáticos e Velas |
| Arranjo de Algodão Seco | R$89 | botanica-seca, lancamento | Botânica Seca |
| Porta-Incenso em Bambu | R$49 | aromatico, mais-amado | Lançamentos |

**Total no catálogo: 15 produtos ativos**

---

### 5. Coleções — Status Final

| Coleção | Regra | Produtos esperados |
|---------|-------|--------------------|
| Lançamentos | tag = lancamento | 8+ produtos |
| Mais Amados | tag = mais-amado | 10+ produtos |
| Destaques da Estação | tag = destaque-estacao | 7+ produtos |
| Botânica Seca | tags botanica-seca / planta-seca / arranjo-seco | 4+ produtos |
| Aromáticos e Velas | tags vela / aromatico / difusor | 7+ produtos |

---

## Estado Final da Loja

### Preview Staging
```
https://aura-decor-17.myshopify.com/?preview_theme_id=142691795049
```

### Checklist Go-Live (ações manuais)
- [ ] Verificar preview completo no staging
- [ ] Testar fluxo de compra até checkout Yampi
- [ ] Fazer upload do logo no header
- [ ] Fazer upload do favicon
- [ ] Publicar tema: Admin > Temas > "Aura Decore — Japandi v1 [staging]" > `···` > **Publicar**

### Pós-Lançamento (Sprint 6)
- [ ] Instalar Judge.me Reviews
- [ ] Instalar Klaviyo + configurar automação boas-vindas
- [ ] Instalar Melhor Envio (frete)
- [ ] Instalar Cookiebot (LGPD)
- [ ] Fotografias reais dos produtos
- [ ] Google Analytics 4 + Meta Pixel
