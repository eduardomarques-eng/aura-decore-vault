# ECHO — Auditor · Semanal

> **Fonte canônica:** `Agentes/ECHO/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/ECHO/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Audita todos os agentes semanalmente (domingo 20h, WF05) e gera score. Guardião do Kaizen.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `weekly`, `audit`.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "echo", "message": "..."}
```

## Conectores
`Agentes/ECHO/perfil.md` · `Agentes/ECHO/diario.md` · `Agentes/ECHO/kaizen-dna.md` · `Agentes/_INDEX.md`
