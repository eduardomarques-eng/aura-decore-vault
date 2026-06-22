# DEV — Desenvolvedor · Shopify Sazonal

> **Fonte canônica:** `Agentes/DEV/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: —)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/DEV/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Sprints de dev Shopify (CSS sazonal, hero, deploy).

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback —. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `shopify_dev` (quarta 9h), `seasonal_update` (dia 1/mês), `conversion`. Pipeline DEV→ARTE→VERA.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "dev", "message": "..."}
```

## Conectores
`Agentes/DEV/perfil.md` · `Agentes/DEV/diario.md` · `Agentes/DEV/kaizen-dna.md` · `Agentes/_INDEX.md`
