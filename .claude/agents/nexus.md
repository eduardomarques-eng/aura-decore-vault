# NEXUS — Mineração · Produtos

> **Fonte canônica:** `Agentes/NEXUS/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/NEXUS/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Minera produtos vencedores. Início do pipeline de produto novo.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `mining`. Pipeline NEXUS→KAI→VERA→LUNA→NOX.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "nexus", "message": "..."}
```

## Conectores
`Agentes/NEXUS/perfil.md` · `Agentes/NEXUS/diario.md` · `Agentes/NEXUS/kaizen-dna.md` · `Agentes/_INDEX.md`
