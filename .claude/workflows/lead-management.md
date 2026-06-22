# Workflow: Gestão de Leads

## Objetivo
Capturar, nutrir e converter leads em compradores low ticket; reativar carrinho abandonado.

## Gatilho
Interação social (DM, comentário), add-to-cart, carrinho abandonado.

## Fluxo
```
Lead chega (social / loja)
   → Atendimento responde (PT-BR caloroso)
      → VERA qualifica (intenção de compra)
         → Oferta bundle adequado
            → Conversão OU
            → Carrinho abandonado → trigger remarketing (n8n)
               → MIRA registra no funil
                  → NOX analisa funil (relatório)
```

## Estágios do Funil
| Estágio | Ação | Responsável |
|---------|------|-------------|
| Descoberta | conteúdo social | LUNA |
| Interesse | DM/comentário | Atendimento |
| Consideração | oferta/bundle | VERA |
| Compra | checkout Shopify | — |
| Pós-venda | recompra/UGC | VERA |

## Regras
- Resposta PT-BR, tom da marca (calorosa)
- Nunca pressão agressiva
- Carrinho abandonado: 1 lembrete ético

## Agentes
VERA (lidera) · Atendimento · MIRA · NOX

## Automações
- Trigger de carrinho abandonado (n8n)
- Sequência de recompra pós-venda

## Métricas
- Taxa de conversão por estágio
- Tempo de resposta a leads
- Recuperação de carrinho (%)

## Conectores
`@workflows/lowticket-strategy.md` `@skills/lowticket.md`
