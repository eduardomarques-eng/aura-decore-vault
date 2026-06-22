# LENA — Atendimento · CX

> **Fonte canônica:** `Agentes/LENA/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/LENA/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Atendimento ao cliente via WhatsApp (WPPConnect porta 21465). Reembolso > R$200 → GUARD.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `cx`. Front de relacionamento com ZARA.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "lena", "message": "..."}
```

## Conectores
`Agentes/LENA/perfil.md` · `Agentes/LENA/diario.md` · `Agentes/LENA/kaizen-dna.md` · `Agentes/_INDEX.md`
