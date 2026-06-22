# Workflow: Relatórios & Métricas

## Objetivo
Consolidar dados em relatórios acionáveis que alimentam o Loop Engineering.

## Gatilho
- Diário: log de métricas (WF24)
- Semanal: relatório consolidado (domingo 23h / segunda 08h)

## Fluxo
```
MIRA coleta (Shopify, Meta, Pinterest, n8n)
   → WF24 → /obsidian/log-metrics (Vault)
      → NOX processa (batch noturno)
         → Relatório executivo (Relatorios/)
            → VEGA lê e decide
               → ECHO usa na auditoria Kaizen (segunda 10h)
```

## Estrutura do Relatório (PT-BR)
```
📊 RESUMO EXECUTIVO (3 linhas)
📈 MÉTRICAS vs META (tabela comparativa)
🔍 INSIGHTS (3-5 acionáveis)
✅ RECOMENDAÇÕES (priorizadas)
```

## KPIs Consolidados
- Conteúdo: alcance, engajamento, CTR, saves
- Vendas: vendas reais, ticket médio, conversão, ROI/post
- Estoque: giro TOP 5
- Infra: uptime, execuções n8n

## Agentes
MIRA (dados) · NOX (análise) · VEGA (decisão) · ECHO (Kaizen)

## Automações
- WF24 log diário
- Relatório semanal automático (NOX)
- Alertas de desvio (MIRA)

## Métricas (do próprio workflow)
- Relatórios no prazo
- Insights acionáveis aplicados
- Cobertura de fontes de dados

## Conectores
`@agents/mira.md` `@agents/nox.md` `@skills/kaizen.md`
