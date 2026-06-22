# ADR-001: Consolidação e Limpeza do Vault Aura Decore

**Status:** Proposed (aguardando aprovação de Eduardo)
**Date:** 2026-06-21
**Deciders:** Eduardo (Diretor), VEGA, ECHO

## Context

O vault cresceu organicamente para **51 pastas na raiz**, com forte duplicação e pastas-esqueleto criadas em 27/05/2026 (scaffold inicial nunca usado). Isso dificulta navegação, polui contexto dos agentes e desperdiça tokens. A nova estrutura `.claude/` (47 arquivos) passa a ser o cérebro central — o vault precisa de governança equivalente.

## Decision

Consolidar pastas duplicadas, arquivar/remover esqueletos legados e padronizar a raiz do vault, **sem perder conteúdo real** (git protege; mover antes de apagar).

## Diagnóstico (dados de 21/06/2026)

### 🟥 Vazias (0 arquivos) — remover ou repropósito
`Vendas` · `Conhecimento` · `Reunioes` · `Daily Notes` · `_CANVAS` · `_ASSETS` · `Marketing`

### 🟨 Legado scaffold "27/05" (5 arquivos, intocadas desde) — arquivar
`Pesquisa-Mercado` · `Estrategia` · `Conteudo-Social` · `SEO-Blog` · `Design-Criativo` · `Copy-Marketing` · `Parcerias` · `Loja-Shopify` · `Tecnologia` · `Processos` · `Sprints`

### 🟦 Duplicatas — consolidar no destino ativo
| Origem (legado) | Destino (ativo) |
|-----------------|-----------------|
| `Conteudo-Social` | `Conteudo` |
| `Social` | `Redes Sociais` |
| `Copy-Marketing` + `Marketing` | `Conteudo` / `Redes Sociais` |
| `Workflows` (1 arq, 20/05) | `Automacoes` |
| `Sprint1` + `Sprints` | `Tarefas` |
| `Estrategia` + `Planejamento` | `Decisoes` |
| `Tecnologia` + `Integrações` + `Scripts` | `Setup` |
| `Loja-Shopify` | `ShopifyImprovements` |

### 🟩 Manter (ativas e substanciais)
`Redes Sociais` (164) · `Tarefas` (139) · `Agentes` (113) · `Maratona` (94) · `FullThrottle` (61) · `Logs` (28) · `ShopifyImprovements` (25) · `Kaizen` (20) · `Setup` (18) · `Relatorios` (17) · `Implementacao` (15) · `_TEMPLATES` (14) · `Decisoes` (12) · `Prompts` (12) · `Memoria` (11) · `Atendimento` (10) · `Juridico` (10) · `Financeiro` (8) · `Conteudo` (6) · `Low Ticket` (3)

### ⚠️ Anomalia a investigar
`Automacoes` = **52 MB** (vs média de KB). Provável `node_modules`/binários commitados — deveria entrar no `.gitignore`.

## Opções Consideradas

### Opção A: Arquivar primeiro (mover para `_ARCHIVE/`), depois decidir
| Dimensão | Avaliação |
|----------|-----------|
| Risco | **Baixo** (nada é apagado) |
| Reversibilidade | Total |
| Esforço | Médio |

**Prós:** seguro, reversível, git limpo. **Contras:** mantém volume até a faxina final.

### Opção B: Deletar direto as vazias + legado
| Dimensão | Avaliação |
|----------|-----------|
| Risco | **Médio** (git recupera, mas atrito) |
| Reversibilidade | Via git |
| Esforço | Baixo |

**Prós:** raiz limpa imediatamente. **Contras:** risco de remover algo ainda útil.

## Trade-off Analysis
A Opção A protege dados reais de negócio (vendas, jurídico, financeiro) ao custo de uma etapa extra. Dado que há **0 vendas reais** e o histórico institucional é o principal ativo, **segurança > velocidade**. Recomenda-se **Opção A**.

## Consequences
- ✅ Raiz do vault de 51 → ~22 pastas ativas
- ✅ Contexto dos agentes mais limpo (menos tokens)
- ✅ Nada perdido (arquivado + git)
- ⚠️ Necessário revisar `_ARCHIVE/` em 30 dias e então deletar definitivamente
- ⚠️ Resolver os 52 MB de `Automacoes` no `.gitignore`

## Action Items
1. [ ] Aprovar escopo (Eduardo)
2. [ ] Criar `_ARCHIVE/` e mover vazias + legado scaffold
3. [ ] Consolidar duplicatas nos destinos ativos
4. [ ] Investigar e gitignore os 52 MB de `Automacoes`
5. [ ] Commit: "chore(vault): consolida estrutura (ADR-001)"
6. [ ] Revisar `_ARCHIVE/` em 21/07/2026 → deletar definitivamente
