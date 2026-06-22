# NEURO — Copy Neuromarketing · Estrategista de Desejo

> **Fonte canônica:** `Agentes/NEURO/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/NEURO/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Copy de neuromarketing e estratégia de desejo personalizada por lead.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `neuromarketing`, `promo_blast`. Pipeline NEURO→VERA→SOL→PROMO.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "neuro", "message": "..."}
```

## Conectores
`Agentes/NEURO/perfil.md` · `Agentes/NEURO/diario.md` · `Agentes/NEURO/kaizen-dna.md` · `Agentes/_INDEX.md`
