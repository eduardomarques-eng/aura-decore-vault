# ECHO — Auditor · Performance Semanal

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: 10/10 · Atualizado: 2026-06-14

## Perfil
Auditor semanal da Aura Decore. Avalia todos os 20 agentes usando metodologia Kaizen, calcula scores de 0-10, identifica gargalos e propõe 1 melhoria por agente por semana. Reporta diretamente a IVE todo domingo às 20h.

## Próxima Auditoria
**Domingo 15/06/2026 às 20h** — workflow n8n WF05 automatizado

## Score de Referência (semana 24 — primeira semana operacional)

| Agente | Função | Score | Observação |
|--------|--------|-------|--------|
| IVE | CEO | 9/10 | VEGA + FINA integrados nesta semana |
| GUARD | CFO | 9/10 | Monitora MEI. Aguarda dados de ROAS |
| NEXUS | Mineração | 7/10 | AliExpress pipeline pendente tokens |
| THEO | Shopify | 8/10 | 54 produtos ACTIVE, PT-BR OK |
| KAI | Curadoria | 7/10 | Aguarda primeiros dados de venda |
| VERA | Copy | 9/10 | 29 produtos atualizados VERA-style |
| LUNA | Design | 8/10 | 11 produtos com foto. Canva API pendente |
| NOX | Conteúdo | 7/10 | Integração VEGA concluída |
| REX | Ads | 6/10 | Sem campanhas ainda. Pixel pendente validação |
| ECHO | Auditor | 10/10 | Auditoria em operação |
| LENA | CX | 8/10 | CSAT ~94%, WA ativo |
| SOL | Vendas/CRO | 7/10 | WF02 ativo. Sem dados de conversão |
| ZARA | Community | 6/10 | Instagram bloqueado pendente Eduardo |
| MIRA | SEO | 6/10 | GSC + GA4 pendentes de conexão |
| PIPE | Automação | 8/10 | 17 workflows ATIVOS |
| ARTE | Visual IA | 7/10 | Higgsfield API pendente |
| FEED | Publicador | 7/10 | FB ativo. IG bloqueado |
| DEV | Shopify Dev | 8/10 | CSS sazonal + CRO pro implementados |
| VEGA | Videomaker | novo | Integrado 14/06. 1º Reel pendente |
| FINA | Pagamentos PJ | novo | Integrado 14/06. Banco PJ pendente |

## Tarefas da Semana (semana 24)
- [x] Atualizar framework de auditoria para 20 agentes (antes: 14)
- [x] Definir critérios de score por função
- [ ] 🔄 **Auditoria semanal domingo 15/06 às 20h** — WF05 n8n
- [ ] Primeiro relatório de performance com dados reais de vendas
- [ ] Calcular score VEGA após 1º vídeo publicado
- [ ] Calcular score FINA após 1º relatório financeiro

## Critérios de Score por Função
| Função | Critério Principal |
|---|---|
| CEO/CFO | Decisões com dados + alerta precoce |
| Vendas/CRO | Conversão + ticket médio |
| Conteúdo | Views + saves + engajamento |
| Ads | ROAS + CTR + CPM |
| CX | CSAT + tempo de resposta |
| SEO | Tráfego orgânico crescente |
| Design | Aprovação de criativos + tempo |
| Vídeo | Watch time + salvamentos + CTR |
| Financeiro | Precisão de registros + alertas a tempo |

## Relacionamentos
- Reporta para: [[IVE]]
- Audita: todos os 20 agentes
- Informa: [[GUARD]] (métricas financeiras), [[IVE]] (score geral semanal)
