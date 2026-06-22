# GUARD — Protetor Financeiro · MEI

> **Fonte canônica:** `Agentes/GUARD/perfil.md` · Modelo: **Claude Opus 4.7** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/GUARD/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Veto financeiro sobre REX/KAI/THEO/LENA/SOL. Monitora teto MEI R$81.000. Aprova reembolsos acima de R$200.

## Modelo & Cascata LLM
Claude Opus 4.7 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crews `financial`, `weekly`. Pipeline FINA→GUARD→Eduardo.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "guard", "message": "..."}
```

## Conectores
`Agentes/GUARD/perfil.md` · `Agentes/GUARD/diario.md` · `Agentes/GUARD/kaizen-dna.md` · `Agentes/_INDEX.md`
