# Skill: Low Ticket (Motor de Vendas)

## Objetivo
Habilidade reutilizável do Motor Low Ticket — produto de entrada barato, alto volume, gateway para recompra.

## Estado Atual
- **ATIVADO**: 21/06/2026, Ciclo 1 completo
- **TOP 5 SKUs** (150 unidades em estoque)
- **4 bundles** prontos (Vault `Low Ticket/`)
- **0 vendas reais** (1 pedido expirado) → meta: primeira venda

## Lógica Low Ticket
```
Produto barato (porta de entrada)
   → cliente compra com baixo atrito
      → experiência positiva
         → upsell / cross-sell / recompra
            → aumento do LTV
```

## Táticas
- **Âncora de preço**: mostrar valor cheio riscado
- **Bundle**: combo com desconto percebido
- **Frete grátis** acima de threshold
- **Urgência ética**: estoque real, sem mentira
- **Pós-venda**: oferta de recompra automática

## Estrutura de Bundle
```
Nome do bundle
Itens: [SKU1 + SKU2 + SKU3]
Preço cheio: R$ XX | Preço bundle: R$ YY
Economia: Z%
Gatilho: [frete grátis / brinde / edição limitada]
```

## Métricas
- Vendas reais (meta primária ≥1)
- Conversão, ticket médio, taxa de recompra
- Giro dos TOP 5

## Cadência
- Auditoria mensal de SKUs (VERA + MIRA)
- Próxima auditoria: 28/06/2026 (ECHO)

## Usado por
VERA (principal), VEGA, MIRA, LENA
