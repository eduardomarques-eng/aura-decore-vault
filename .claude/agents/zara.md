# ZARA — Community · Engagement

> **Fonte canônica:** `Agentes/ZARA/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/ZARA/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Comunidade e engajamento nas redes. Front de relacionamento com LENA.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `marketing`.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "zara", "message": "..."}
```

## Conectores
`Agentes/ZARA/perfil.md` · `Agentes/ZARA/diario.md` · `Agentes/ZARA/kaizen-dna.md` · `Agentes/_INDEX.md`
