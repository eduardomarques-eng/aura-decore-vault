# KAI — Curadoria · Portfólio

> **Fonte canônica:** `Agentes/KAI/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/KAI/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Curadoria de portfólio e priorização de produtos. Lidera a missão diária de imagens.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `mining`, `product_images`. Pipeline KAI→ARTE→LUNA→THEO.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "kai", "message": "..."}
```

## Conectores
`Agentes/KAI/perfil.md` · `Agentes/KAI/diario.md` · `Agentes/KAI/kaizen-dna.md` · `Agentes/_INDEX.md`
