# IVE — CEO · Estratégia

> **Fonte canônica:** `Agentes/IVE/perfil.md` · Modelo: **Claude Opus 4.7** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/IVE/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Orquestra os 22 agentes; recebe escala apenas do Diretor Eduardo. Decisões críticas de estratégia.

## Modelo & Cascata LLM
Claude Opus 4.7 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `weekly`. Orquestra todas as crews via API porta 8000.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "ive", "message": "..."}
```

## Conectores
`Agentes/IVE/perfil.md` · `Agentes/IVE/diario.md` · `Agentes/IVE/kaizen-dna.md` · `Agentes/_INDEX.md`
