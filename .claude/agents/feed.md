# FEED — Publicador · Redes Sociais

> **Fonte canônica:** `Agentes/FEED/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/FEED/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Publicação em redes sociais (3x/dia); espelha FB Pessoal. ⚠️ Eduardo é o publicador final aprovador.

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `social_post`. Pipeline ARTE→FEED.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "feed", "message": "..."}
```

## Conectores
`Agentes/FEED/perfil.md` · `Agentes/FEED/diario.md` · `Agentes/FEED/kaizen-dna.md` · `Agentes/_INDEX.md`
