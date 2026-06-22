# VERA — Copy · Textos

> **Fonte canônica:** `Agentes/VERA/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/VERA/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Copywriting de produtos e campanhas em PT-BR. Hub de texto de quase todas as crews.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `content`, `sales`, `marketing`, `seo`, `design`, `video`, `neuromarketing`, `promo_blast`.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "vera", "message": "..."}
```

## Conectores
`Agentes/VERA/perfil.md` · `Agentes/VERA/diario.md` · `Agentes/VERA/kaizen-dna.md` · `Agentes/_INDEX.md`
