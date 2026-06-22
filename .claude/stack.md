# stack.md — Stack Tecnológica REAL Aura Decore

> Valores conferidos contra `Agentes/_INDEX.md` e scripts em 21/06/2026.

## E-commerce

| Componente | Valor |
|-----------|-------|
| Loja | Shopify · `10ei3t-sf.myshopify.com` · auradecore.com.br |
| Tema live | "Aura Decore - Cursor Dinâmico" (160266387561) · body_scale 110 |
| Produtos | 89 ACTIVE · 100% publicados (loja + FB/IG + Google) |
| Pixel | Meta Pixel + CAPI (ver `Setup/meta-pixel-shopify.md`) |

## Backend & Runtime

| Componente | Valor |
|-----------|-------|
| Backend API | http://localhost:8000 (FastAPI; openapi.json) |
| Dashboard | /index.html (PC) · /mobile (executivo) |
| WhatsApp | WPPConnect porta 21465 (LENA atende) |
| Watchdog | 24/7 ativo |
| Orquestração agentes | CrewAI (20 crews) + /agent/exec |

## Cascata de LLM

1. **Groq** Llama 3.3 70B (primário, ~1.7s) → 2. **Anthropic** (Opus 4.7 IVE/GUARD · Sonnet 4.6 demais) → 3. **Ollama** llama3.2 (local) → 4. **smart_fallback**

## Automação

| Componente | Valor |
|-----------|-------|
| n8n | porta 5678 · 22/22 workflows ATIVOS |
| n8n PUT | só `name`/`nodes`/`connections`/`settings` (extras → 400) |
| Publicação | `aura-publisher.cjs` (Task Scheduler) → Meta Graph API |
| Rotas-chave | WF26→/agent/exec · WF24→/obsidian/log-metrics |

## Analytics — Windsor.ai (desde 03/06/2026)

| Endpoint | Dados |
|----------|-------|
| /windsor/status | conectores |
| /windsor/metrics?days=7 | Shopify+IG+FB+GSC |
| /windsor/campaigns | Meta Ads / ROAS |
| /windsor/social?days=7 | IG + FB orgânico |
| /windsor/seo?days=30 | Search Console |

**Conectados**: facebook, facebook_organic, instagram, instagram_public.
**Pendentes**: shopify, searchconsole, googleanalytics4.

## IA de Conteúdo

| Ferramenta | Uso | Limite |
|-----------|-----|--------|
| Pollinations.ai | imagens (ARTE) | 1 req, sleep 8s, sequencial |
| Higgsfield | imagens 6 ângulos (Fase 3) | key pendente Eduardo |
| CapCut | vídeo (Eduardo grava/edita) | — |

## Conhecimento & Versionamento

| Ferramenta | Localização |
|-----------|------------|
| Obsidian Vault | C:\Users\erick\AURA-decor-vault |
| Notion | cards semanais |
| GitHub | github.com/eduardomarques-eng/aura-decore-vault |
| Sync | Antigravity IDE + Claude Code |

## Scripts Críticos

```
aura-pollinations-image.mjs    → imagens (ARTE)
Setup/aura-gemini-image.mjs    → imagens alternativa
Automacoes/aura-publisher.cjs  → publicação Meta (⚠️ secret → migrar p/ .env)
Automacoes/n8n/start-n8n.cmd   → n8n local (⚠️ secret → migrar p/ .env)
```

## ⚠️ Segurança (ver `@gotchas.md` e `@ports.txt`)
Segredos NÃO ficam aqui nem em arquivos versionados. Tokens/senhas → `.env` (gitignored) ou Key Vault.
Itens com segredo em plaintext foram destrackeados em 21/06 — **rotação obrigatória pendente**.
