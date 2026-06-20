---
tipo: sistema-kaizen
versao: 1.0
criado: 2026-06-14
---

# 🧬 Sistema Kaizen — Aura Decore

## O Que É

O Sistema Kaizen é o mecanismo de **aprendizado contínuo e evolução** de todos os 20 agentes da Aura Decore.
Inspirado na filosofia japonesa Kaizen ("melhoria contínua"), cada agente:

1. **Memoriza** o que funcionou e o que não funcionou
2. **Atualiza** suas skills com base em métricas reais
3. **Aprende** com o comportamento da persona Ana Clara
4. **Compartilha** aprendizados com toda a equipe
5. **Melhora** automaticamente semana a semana

## Como Funciona

### Arquivos por Agente
Cada agente tem em `Agentes/{NOME}/`:
- `perfil.md` — Identidade e responsabilidades
- `diario.md` — Registro de todas as execuções
- `aprendizados.md` — Lições aprendidas ao longo do tempo
- `kaizen-dna.md` — **DNA de evolução** com scores, o que funciona, próximo foco

### Arquivos Globais
- `Memoria/Compartilhada/dna-aprendizado.md` — DNA compartilhado entre todos os agentes
- `Memoria/Compartilhada/metricas.md` — Métricas globais da empresa
- `Kaizen/{NOME}-kaizen.json` — Dados estruturados de evolução (lidos pelo sistema)
- `Relatorios/Semanais/kaizen-*.md` — Relatório semanal de evolução

## Comando Principal

```
/agents evolve
```

Ou via API:
```
POST /agents/evolve
{"context": "Contexto adicional de Eduardo"}
```

## Métricas de Cada Agente (Skills)

| Skill | Descrição |
|-------|-----------|
| execucao | Quão bem completa as tarefas atribuídas |
| qualidade | Qualidade dos outputs produzidos |
| velocidade | Eficiência no tempo de execução |
| colaboracao | Qualidade da interação com outros agentes |
| adaptabilidade | Capacidade de se ajustar a novos contextos |
| analise_dados | Uso de dados reais para decisões |
| alinhamento_persona | Quão bem serve a persona Ana Clara |

Score 0-10 por skill. Score geral = média ponderada.

## Ciclo de Evolução Semanal

```
Domingo 20h (ECHO auditoria semanal)
    ↓
Segunda 8h (/agents evolve automático)
    ↓
Análise de performance da semana anterior
    ↓
IVE via Claude Opus gera aprendizados para cada agente
    ↓
Skills atualizados, DNA escrito no vault
    ↓
DNA compartilhado atualizado com aprendizados globais
    ↓
Relatório executivo para Eduardo
```

## Integração com n8n

**Workflow 07 (Scheduler crews)** — pode ser configurado para chamar `/agents/evolve` toda segunda-feira 8h.

Adicionar nó HTTP Request no n8n:
- URL: `{RAILWAY_URL}/agents/evolve`
- Método: POST
- Body: `{"context": "Início de semana — ciclo automático"}`

## Ana Clara — Persona Central

Todos os aprendizados dos agentes são filtrados pela perspectiva da persona:
- Mulher 25–45 anos, classe B/C+
- Quer transformar seu lar em refúgio de paz
- Compra às 19h–22h, decide no Instagram, finaliza no WhatsApp
- Gatilhos: biofilia, neuroarquitetura, estética japandi, minimalismo Bali

## 20 Agentes no Sistema Kaizen

| # | Agente | Cargo | Modelo |
|---|--------|-------|--------|
| 1 | IVE | CEO · Estratégia | Opus 4.7 |
| 2 | GUARD | CFO · Protetor Financeiro | Opus 4.7 |
| 3 | NEXUS | Mineração · Produtos | Sonnet 4.6 |
| 4 | KAI | Produtos · Curadoria | Sonnet 4.6 |
| 5 | VERA | Copy · Textos | Sonnet 4.6 |
| 6 | LUNA | Design · Visual | Sonnet 4.6 |
| 7 | NOX | Conteúdo · Reels | Sonnet 4.6 |
| 8 | REX | Tráfego · Meta Ads | Sonnet 4.6 |
| 9 | THEO | Shopify · Técnico | Sonnet 4.6 |
| 10 | ECHO | Auditor · Semanal | Sonnet 4.6 |
| 11 | LENA | Atendimento · CX | Sonnet 4.6 |
| 12 | SOL | Vendas · CRO | Sonnet 4.6 |
| 13 | ZARA | Community · Instagram | Sonnet 4.6 |
| 14 | MIRA | SEO · Pesquisa | Sonnet 4.6 |
| 15 | PIPE | Automação · n8n | Sonnet 4.6 |
| 16 | ARTE | Criativo · IA Visual | Sonnet 4.6 |
| 17 | FEED | Publicador · Redes Sociais | Sonnet 4.6 |
| 18 | DEV | Desenvolvedor · Shopify | Sonnet 4.6 |
| 19 | VEGA | Videomaker · Motion Director | Sonnet 4.6 |
| 20 | FINA | Finanças Operacional · PJ | Sonnet 4.6 |
