# MIRA — SEO · Pesquisa

> **Fonte canônica:** `Agentes/MIRA/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/MIRA/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Pesquisa de keywords e SEO orgânico.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `seo`. Pipeline MIRA→VERA→THEO. Windsor: seo.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "mira", "message": "..."}
```

## Conectores
`Agentes/MIRA/perfil.md` · `Agentes/MIRA/diario.md` · `Agentes/MIRA/kaizen-dna.md` · `Agentes/_INDEX.md`
