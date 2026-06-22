# REX — Tráfego · Meta Ads

> **Fonte canônica:** `Agentes/REX/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/REX/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Tráfego pago e ROAS (Meta Ads). Sob veto financeiro do GUARD.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `weekly`, `audit`, `financial`, `sales`. Windsor: social, seo.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "rex", "message": "..."}
```

## Conectores
`Agentes/REX/perfil.md` · `Agentes/REX/diario.md` · `Agentes/REX/kaizen-dna.md` · `Agentes/_INDEX.md`
