# THEO — Shopify · Técnico

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: 8/10

## Stack Técnica
- **Loja**: Shopify — `10ei3t-sf.myshopify.com` / **auradecore.com.br** · **89 produtos ACTIVE**
- **Tema válido único**: "Aura Decore - Cursor Dinâmico" (160266387561) — trabalhar SEMPRE nele
- **Pagamentos**: AppMax (Pix + Cartão) via Yampi
- **Dropshipping**: Dropi (sincronizado)
- **Pixel**: Meta Pixel — 4 eventos (Purchase, AddToCart, ViewContent, InitiateCheckout)
- **PageSpeed atual**: 87 mobile → meta 90+

## 🚨 REGRA DE PUBLICAÇÃO OBRIGATÓRIA (corrige erro de 2026-06-14)

> **Todo produto criado/ativado DEVE ser publicado nos 3 canais.** Status `ACTIVE` NÃO basta —
> sem publicar nos canais, o produto fica invisível na loja. (11 produtos ficaram invisíveis por isso.)
>
> Ao criar/importar produto, publicar via `publishablePublish` (Shopify MCP) nos canais:
> | Canal | Publication ID |
> |---|---|
> | **Loja virtual** (site) | `158976213097` |
> | **Facebook & Instagram** | `159608209513` |
> | **Google & YouTube** | `159607324777` |
>
> Conferência rápida: `products(query:"published_status:unpublished")` deve voltar VAZIO.
> Garantir também: estoque vendável (`inventoryPolicy: CONTINUE` ou `tracksInventory: false`).

## 🚨 Missão Diária — Upload de Imagens no Shopify

> THEO recebe lotes de imagens aprovados por LUNA e sobe na loja diariamente.
> Meta: 5–7 produtos/dia até todos os 89 terem imagens profissionais.

### Pipeline de Upload (por produto)
```
1. Receber de LUNA: imagens aprovadas (capa + 2 lifestyle + 3-5 fornecedor)
2. Upload via Shopify Admin API / MCP:
   - Posição 1: foto de capa profissional (800×800px WebP)
   - Posição 2–3: fotos lifestyle japandi
   - Posição 4+: fotos fornecedor clonadas
3. Converter todas para WebP (PageSpeed)
4. Definir alt text SEO (MIRA / VERA fornecem)
5. Confirmar upload e registrar produto como ✅ Atualizado
```

### Rastreador de Status (atualizar diariamente)
| Produto | Capa | Lifestyle | Fornecedor | Shopify | Status |
|---------|------|-----------|------------|---------|--------|
| Vela Âmbar | 🔄 | — | — | — | Pendente |
| Vaso Cerâmica | 🔄 | — | — | — | Pendente |
| *(demais 52)* | — | — | — | — | — |

## Tarefas da Semana
- [x] Yampi configurado
- [x] AppMax integrado
- [x] Pixel 4 eventos disparando
- [x] ✅ **11 produtos não-publicados → PUBLICADOS nos 3 canais (2026-06-14)**
- [x] ✅ Fonte do corpo do tema aumentada (body_scale 100→110) no tema live
- [ ] 🔄 **MISSÃO DIÁRIA: receber lotes LUNA + upload imagens Shopify (5–7 produtos/dia)**
- [ ] 🔄 **PageSpeed mobile → 90+ pontos** (converter imagens pendentes para WebP)
- [ ] Converter todas as imagens de produto para WebP

## Diagnóstico Atual
- LCP: 2.1s (meta: <2.5s ✅)
- CLS: 0.08 (✅)
- FID: 90ms (✅)
- Gargalo: imagens sem WebP em 3 páginas de produto
