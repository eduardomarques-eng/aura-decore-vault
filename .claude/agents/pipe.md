# PIPE — Automação · n8n

> **Fonte canônica:** `Agentes/PIPE/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/PIPE/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Desenha e orquestra workflows n8n que disparam outros agentes. PUT n8n só aceita name/nodes/connections/settings.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `automation`.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "pipe", "message": "..."}
```

## Conectores
`Agentes/PIPE/perfil.md` · `Agentes/PIPE/diario.md` · `Agentes/PIPE/kaizen-dna.md` · `Agentes/_INDEX.md`
