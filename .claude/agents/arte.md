# ARTE — Criativo · Geração de Imagens IA

> **Fonte canônica:** `Agentes/ARTE/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/ARTE/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Geração de imagens IA (Pollinations sequencial + Higgsfield). Estilo Japandi.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `design`, `social_post`, `store_update`, `product_images`, `shopify_dev`, `seasonal_update`. Pipeline ARTE→FEED.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "arte", "message": "..."}
```

## Conectores
`Agentes/ARTE/perfil.md` · `Agentes/ARTE/diario.md` · `Agentes/ARTE/kaizen-dna.md` · `Agentes/_INDEX.md`
