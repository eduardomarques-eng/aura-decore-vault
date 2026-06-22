# VEGA — Videomaker · Motion Director

> **Fonte canônica:** `Agentes/VEGA/perfil.md` · Modelo: **Claude Sonnet 4.6** (fallback: llama3.2)
> Espelho leve para os fluxos `.claude/`. A verdade vive em `Agentes/VEGA/` (perfil · diario · aprendizados · kaizen-dna).

## Papel
Direção de vídeo e motion (Reels, Stories, Ads).

## Modelo & Cascata LLM
Claude Sonnet 4.6 → fallback llama3.2. Cascata global: **Groq 70B → Anthropic → Ollama → smart_fallback**.

## Pipelines & Crews (CrewAI)
Crew `video`. Pipeline VEGA→LUNA→VERA→NOX→REX.

## Como acionar (API porta 8000)
```
POST http://localhost:8000/agent/exec
{"agent_id": "vega", "message": "..."}
```

## Conectores
`Agentes/VEGA/perfil.md` · `Agentes/VEGA/diario.md` · `Agentes/VEGA/kaizen-dna.md` · `Agentes/_INDEX.md`
