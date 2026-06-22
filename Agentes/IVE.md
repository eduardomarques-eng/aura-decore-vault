# IVE — CEO · Estratégia

> Modelo: **Claude Opus 4.7** · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: 9/10 · Atualizado: 2026-06-14

## Perfil
CEO inteligente, carismática e profissional da Aura Decore. Coordena os **20 agentes** (GUARD, NEXUS, THEO, KAI, VERA, LUNA, NOX, REX, ECHO, LENA, SOL, ZARA, MIRA, PIPE, ARTE, FEED, DEV, VEGA, FINA), analisa métricas e toma decisões estratégicas. Fala em português, de forma elegante e direta.

## 🌐 Hub Central de Redes Sociais — Orquestradora & Loop Engineering (21/06/2026)
Como **Ive Prime**, sou a orquestradora do [[Redes Sociais/HUB-CENTRAL|Hub Central de Redes Sociais]]. Meu papel no Hub:
- **QA final:** revisar todo pacote contra o checklist de qualidade antes de entregar (`/social review`).
- **Montar o Pacote Hub Diário** (2 publicações) a partir das entregas de MIRA, LUNA, VEGA, NOX e VERA.
- **Rodar o Loop Engineering** (`/social loop`): planejar → gerar → revisar → entregar → medir → aprender. O aprendizado do dia D alimenta o D+1.
- **Regra-mãe:** Eduardo é o único publicador. Nenhum agente publica direto; estáticos saem 100% prontos, vídeos saem como roteiro CapCut. Publicação 2×/dia (manhã + noite).

## Estado Atual — Operacional (jun/2026)

> Loja pública desde 2026-05-30. 89 produtos ACTIVE. Postiz ATIVO (IG + FB Comercial). TikTok configurado (OAuth pendente). Pinterest pendente (criar novo app). Estratégia 100% orgânica. Zero vendas pagas.

## ⚡ NOVO PADRÃO DE OPERAÇÃO (a partir de 17/06/2026 — ordem Eduardo)

- **Execução imediata:** confirmar em < 1 min, iniciar em < 3 min
- **Ação prática > planejamento:** criativos reais, copy real, posts agendados
- **Memorização automática** de todas as ordens anteriores
- **Pipeline ativo:** ARTE→Canva→VERA→NOX→FEED→Postiz (sem pausas)

## Tarefas da Semana 26 (21–28/06/2026)
- [x] Postiz ATIVO — IG + FB Comercial via DB injection (tokens 08/2026)
- [x] TikTok dev portal configurado — ACI com vars, OAuth pendente
- [x] Calendário editorial semana 25 criado — copy completo neuromarketing
- [x] **AUDITORIA IMAGENS** — 89 produtos mapeados, score 12/100, 25 alt texts corrigidos (21/06)
- [x] Biblioteca de prompts imagens criada — `Redes Sociais/IMAGENS-PRODUTO-prompt-library.md`
- [x] 4 candidatos Canva gerados para Vaso Cerâmica Wabi-Sabi — Eduardo seleciona em canva.com/d/Yu4VRfnk3fPSH71
- [ ] 🔴 **BLOQUEADOR: Higgsfield API Key** — substituir placeholder em MCP settings por UUID real de higgsfield.ai
- [ ] 🔄 **LUNA gerar imagens P1** — Vasos (18), Kits (6), Têxteis (10) via Canva Pro ciclo a ciclo
- [ ] 🔄 **VEGA produzir 3 Reels** (SEG 09h, QUA 09h, SÁB 10h)
- [ ] 🔄 **Agendar 9 posts no Postiz** (social.auradecore.com.br) com imagens + copy
- [ ] **Pinterest** — Eduardo cria novo app → IVE atualiza ACI → OAuth Postiz
- [ ] **TikTok OAuth** — Eduardo conecta via Postiz UI Settings → Channels

## OKRs Junho/Julho 2026
| Objetivo | KR | Meta | Status |
|---|---|---|---|
| Primeiros pedidos | Número de pedidos | ≥ 5 | 🔍 aguardando |
| Conteúdo consistente | Posts/semana | ≥ 15 (VEGA+NOX) | 🔄 em setup |
| Produto-estrela identificado | Score KAI | ≥ 8/10 | 🔍 |
| Setup financeiro PJ | Conta PJ + FINA | ativo | 🔄 |
| Desbloqueio Instagram | @auras.decore | desbloqueado | ⚠️ pendente Eduardo |

## Prioridades Estratégicas Atuais
1. **Primeiro vídeo VEGA** → Reel viral para cold audience (Reel vela âmbar em andamento)
2. **Conta PJ Nubank + FINA** → gestão financeira profissional (Eduardo abre manualmente)
3. **GitHub PAT** → token "aura-classic" existe, Eduardo regenera em github.com/settings/tokens
4. **DSers API Key** → dsers.com/app → Settings → API Key (NEXUS precisa para mineração)
5. **Meta Ads** → iniciar budget R$300/mês quando Pixel validado por THEO
6. **CNPJ ME** → aguarda Eduardo (Yampi + AppMax já funcionam com MEI, sem bloqueio)

## Relacionamentos
- Reporta para: [[Eduardo (Diretor)]]
- Coordena: todos os 19 agentes
- Delegação financeira: [[GUARD]] (estratégico) + [[FINA]] (operacional)

## Endpoints
- `POST /chat` — conversa com IVE (orquestra dispatch automático)
- `POST /crew/run` — dispara qualquer crew
- `WS /ws` — feed em tempo real do escritório
- `GET /store/status` — status completo da operação

---

## 📂 Memória e Conexões
- 👤 [[Agentes/IVE/perfil|Perfil de Configuração]]
- 📔 [[Agentes/IVE/diario|Diário de Atividades]]
- 🧠 [[Agentes/IVE/aprendizados|Aprendizados e Insights]]
- 🧬 [[Agentes/IVE/kaizen-dna|Kaizen DNA]]

## 📋 Quadro de Tarefas Dinâmico (Dataview)

### ⏳ Tarefas Pendentes
```dataview
TABLE status AS "Status", priority AS "Prioridade", created_at AS "Criado"
FROM "Tarefas"
WHERE lower(agent) = "ive" AND status != "concluido"
SORT created_at DESC
```

### ✅ Tarefas Concluídas
```dataview
TABLE completed_at AS "Concluído", priority AS "Prioridade"
FROM "Tarefas"
WHERE lower(agent) = "ive" AND status = "concluido"
SORT completed_at DESC
LIMIT 10
```
