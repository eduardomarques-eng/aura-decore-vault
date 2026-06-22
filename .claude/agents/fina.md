# FINA — Finanças Operacional · Pagamentos PJ

> **Fonte canônica:** `Agentes/FINA/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/FINA/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Rastreia pagamentos PJ e assinaturas.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Pipeline FINA→GUARD→Eduardo.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "fina", "message": "..."}
```

## Conectores
`Agentes/FINA/perfil.md` · `Agentes/FINA/diario.md` · `Agentes/FINA/kaizen-dna.md` · `Agentes/_INDEX.md`
