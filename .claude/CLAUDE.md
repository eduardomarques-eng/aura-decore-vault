# CLAUDE.md — Arquivo Mestre Aura Decore
> Cérebro técnico, estratégico e operacional do projeto. Leia SEMPRE antes de qualquer ação.

## DNA da Empresa

**Nome**: Aura Decore  
**Nicho**: Decoração estilo Japandi (minimalismo japonês + conforto escandinavo)  
**Modelo**: E-commerce Shopify + Low Ticket + Dropshipping selecionado  
**URL**: auradecore.com.br  
**Público-alvo**: Mulheres 25–45, classe B/C, sensíveis a estética, buscam ambiente calmo e organizado  
**Persona cliente**: Ana Clara — arquiteta de interiores amadora, cuida do lar como expressão de identidade  

## Infraestrutura Atual

| Serviço | Status | Endpoint |
|---------|--------|----------|
| Shopify | ATIVO | auradecore.com.br |
| Backend API | HEALTHY | 20.246.5.1 (Azure VM) |
| n8n | 22 WFs ATIVOS | docker exec aura-n8n |
| Postiz | ATIVO | social.auradecore.com.br |
| Obsidian Vault | CORRETO | C:\Users\erick\AURA-decor-vault |
| Notion | ATIVO | Hub de cards semanais |

## Sistema de Agentes (11 Agentes Ativos)

| ID | Nome | Papel |
|----|------|-------|
| IVE | Agente de Imagens | Geração e edição de fotos de produto |
| LENA | Agente de Cópia | Copywriting PT-BR magnético |
| LUNA | Agente de Conteúdo | Planejamento e calendário de posts |
| VERA | Agente de Vendas | Funil low ticket e conversão |
| VEGA | Agente de Estratégia | Roadmap e decisões táticas |
| NOX | Agente Noturno | Relatórios, análise e auditoria |
| REX | Agente de SEO | Otimização Shopify e Pinterest |
| MIRA | Agente de Métricas | KPIs, dashboards e alertas |
| OTTO | Agente de Automação | n8n, webhooks e integrações |
| ECHO | Agente Kaizen | Auditoria semanal e melhoria contínua |
| GUARD | Agente de Segurança | Tokens, credenciais e compliance |

## Regras Globais Obrigatórias

1. **TODO conteúdo em PT-BR** — sem exceção
2. **Publicação**: Eduardo é o ÚNICO publicador nas redes sociais
3. **Imagens**: usar Pollinations.ai (sequencial, 1 req simultânea, sleep 8s entre)
4. **Captions**: alternar profissional/humanizado + CTA + auradecore.com.br + 8-12 hashtags
5. **Música**: sempre incluir sugestão de música calma/moderna em stories e reels
6. **n8n API**: PUT aceita apenas name/nodes/connections/settings (extras → 400)
7. **Vault Obsidian**: SEMPRE usar C:\Users\erick\AURA-decor-vault (NUNCA OneDrive)
8. **Tokens FB/IG**: expiram 08/2026 — monitorar e renovar com 30 dias de antecedência

## Loop Engineering + Kaizen

```
PLAN → BUILD → MEASURE → LEARN → OPTIMIZE → PLAN
 ↑_____________________________________________↓
```

- Ciclos semanais: toda segunda-feira às 09h
- Auditoria ECHO: toda segunda-feira às 10h (pós ciclo)
- Métricas obrigatórias: alcance, engajamento, CTR, vendas, ROI/post
- Kaizen mínimo: 1 melhoria implementada por ciclo

## Contexto Financeiro

- **Estoque Low Ticket**: TOP 5 SKUs (150 unidades)
- **Bundles**: 4 bundles prontos no Vault `Low Ticket/`
- **Meta vendas Q3/2026**: primeira venda real (atualmente 0 vendas reais)
- **Próxima auditoria**: 28/06/2026 — ECHO

## Conectores Ativos

- `@agents/` — perfis completos de cada agente
- `@skills/` — habilidades reutilizáveis por qualquer agente
- `@hooks/` — templates de estrutura de conteúdo
- `@memory/` — memória institucional permanente
- `@workflows/` — fluxos documentados e rastreáveis
- `@rules.md` — limites e boas práticas
- `@stack.md` — tecnologia atual
- `@gotchas.md` — armadilhas conhecidas
