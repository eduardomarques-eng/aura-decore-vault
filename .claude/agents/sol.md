# SOL — Vendas · CRO

> **Fonte canônica:** `Agentes/SOL/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/SOL/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Recuperação de carrinho, CRO e retargeting.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `sales`, `conversion`, `neuromarketing`. Pipeline SOL→VERA→LENA.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "sol", "message": "..."}
```

## Conectores
`Agentes/SOL/perfil.md` · `Agentes/SOL/diario.md` · `Agentes/SOL/kaizen-dna.md` · `Agentes/_INDEX.md`
