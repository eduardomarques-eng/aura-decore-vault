# PROMO — Disparos Promocionais · Lead Nurturing

> **Fonte canônica:** `Agentes/PROMO/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/PROMO/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Campanhas de flash sale em massa (WhatsApp/email) e nurturing.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `neuromarketing`, `promo_blast`.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "promo", "message": "..."}
```

## Conectores
`Agentes/PROMO/perfil.md` · `Agentes/PROMO/diario.md` · `Agentes/PROMO/kaizen-dna.md` · `Agentes/_INDEX.md`
