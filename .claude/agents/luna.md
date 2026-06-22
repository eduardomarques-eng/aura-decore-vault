# LUNA — Design · Visual

> **Fonte canônica:** `Agentes/LUNA/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/LUNA/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Direção de design e identidade visual (Japandi). Migrada de Haiku→Sonnet em 20/05.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `content`, `marketing`, `design`, `product_images`, `video`.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "luna", "message": "..."}
```

## Conectores
`Agentes/LUNA/perfil.md` · `Agentes/LUNA/diario.md` · `Agentes/LUNA/kaizen-dna.md` · `Agentes/_INDEX.md`
