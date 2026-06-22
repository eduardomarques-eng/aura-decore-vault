# THEO — Shopify · Técnico

> **Fonte canônica:** `Agentes/THEO/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/THEO/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Implementação técnica Shopify (tema, schema, deploy, CRO técnico).

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `audit`, `seo`, `store_update`, `shopify_dev`. Pipeline MIRA→VERA→THEO.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "theo", "message": "..."}
```

## Conectores
`Agentes/THEO/perfil.md` · `Agentes/THEO/diario.md` · `Agentes/THEO/kaizen-dna.md` · `Agentes/_INDEX.md`
