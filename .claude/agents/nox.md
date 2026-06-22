# NOX — Conteúdo · Reels

> **Fonte canônica:** `Agentes/NOX/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/NOX/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Produção de conteúdo e roteiros de Reels.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `content`, `marketing`, `social_post`, `video`.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "nox", "message": "..."}
```

## Conectores
`Agentes/NOX/perfil.md` · `Agentes/NOX/diario.md` · `Agentes/NOX/kaizen-dna.md` · `Agentes/_INDEX.md`
