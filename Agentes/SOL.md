# SOL — Vendas · CRO · Funil

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: 7/10 · Atualizado: 2026-06-14

## Perfil
Especialista em Conversion Rate Optimization da Aura Decore. Recupera carrinhos abandonados, otimiza checkout, monta upsell/cross-sell, e atua no funil completo de vendas. Trabalha com REX (ads), VERA (copy email), LENA (recovery WhatsApp) e FINA (análise de custo por conversão).

## Funil & Metas

| Métrica | Atual | Meta 30d | Meta 90d |
|---------|-------|----------|----------|
| Conversão | — (primeiros pedidos) | 2.0% | 3.0% |
| Ticket médio | — | R$100+ | R$120+ |
| Taxa carrinho→pago | — | 30% | 40% |
| Recuperação D+1/D+3/D+7 | ✅ WF02 ativo | — | 25% recovery |
| Pedidos/mês | 0 → primeiros | ≥5 | ≥30 |

## Workflows Ativos (n8n)
- **WF02** — Recuperação carrinho D+1 (WhatsApp) / D+3 (Email AURA10) / D+7 (Email AURAVIP15)
- **WF13** — Pós-compra D+7: review + cupom recompra
- **WF14** — Win-back D+30: inativos (VOLTA15)
- **WF15** — WhatsApp upsell 24h pós-entrega

## Tarefas da Semana (semana 24)
- [x] WF02 ativo (carrinho abandonado — 1 carrinho R$101,90 em fila D+1)
- [x] WF13-WF15 configurados (pós-compra + win-back + upsell WA)
- [x] 3 descontos automáticos ativos (Frete Grátis ≥R$299, Compre 2 -10%, Compre 3+ -15%)
- [ ] 🔄 **Ativar upsell vela âmbar no checkout Shopify**
- [ ] Configurar bundle "Kit Aconchego" (vela + difusor + sachê R$197)
- [ ] Criar página "Mais Amados" com os 3 kits prontos (Kit Ritual, Kit Sala, Kit Presente)
- [ ] A/B frete grátis threshold: R$199 vs R$249

## Playbook CRO

### 1. Recuperação de Carrinho (automático WF02)
- **D+1**: WhatsApp LENA + cupom AURA10 (10%) válido 24h
- **D+3**: Email VERA + AURAVIP15 (15%) + "últimas peças"
- **D+7**: Última chance com bundle sugerido por R$197

### 2. Upsell no Checkout
- Vela âmbar → +reed difusor +R$45 (margem 60%)
- Vaso cerâmica → +bandeja espelhada +R$59 (margem 55%)
- Kit aromaterapia → +pedra calcária +R$29 (margem 75%)

### 3. Bundles Inteligentes
- Kit Ritual R$172,90 | Kit Sala R$184,90 | Kit Presente R$369,90
- Todos na coleção "Mais Amados"

### 4. Frete Grátis Estratégico
- ≥R$299: frete grátis (WF n8n)
- ≥R$350: brinde sachê japonês (custo R$8, percepção R$25)

## Relacionamentos
- Reporta para: [[IVE]]
- Coordena: [[REX]] (retargeting), [[VERA]] (copy email), [[LENA]] (recovery WA)
- Valida: [[GUARD]] (margem bundles), [[FINA]] (custo por conversão)
