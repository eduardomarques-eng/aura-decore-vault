# Antigravity — Integracao com o Ecossistema AURA

> Atualizado em: 2026-06-20 | Status: SINCRONIZADO

## O que e o Antigravity
O **Antigravity** e o assistente de IA da Google DeepMind (par de programacao com IA) que tem
**acesso direto** ao ecossistema AURA via filesystem e API.

## Estado Atual dos Servicos (2026-06-20 07:49)

| Servico | Porta | Status | Detalhe |
|---|---|---|---|
| Backend FastAPI | 8000 | ONLINE | 20 agentes, LLM cascade ativo |
| WPPConnect | 21465 | ONLINE | Sessao: CONNECTED |
| Ollama | 11434 | ONLINE | llama3.2 fallback local |
| n8n | 5678 | OFFLINE | 0/0 workflows ativos |

## Acesso configurado

| Recurso | O que acessa | Status |
|---|---|---|
| `filesystem` | AURA-decor-vault + projeto aura-office-dashboard | Configurado |
| `backend API` | http://localhost:8000 — 22 agentes, crews, tasks | Ativo |
| `wppconnect` | http://localhost:21465 — WhatsApp sessao aura-decore | Ativo |

## Caminhos do Ecossistema

```
C:\Users\erick\AURA-decor-vault\                <- Vault Obsidian (agentes, tarefas, metricas)
C:\Users\erick\aura-office-dashboard\           <- Projeto principal (backend, workflows, scripts)
C:\Users\erick\aura-office-dashboard\backend\  <- FastAPI (main.py, agentes, LLM engine)
C:\Users\erick\wppconnect-server\               <- Servidor WhatsApp local
```

## Portas do Ecossistema

| Servico | Porta | Funcao |
|---|---|---|
| Backend principal | 8000 | Chat IVE, crews, tasks API, webhook LENA |
| WPPConnect | 21465 | WhatsApp Business — LENA atende aqui |
| Obsidian REST API | 27123 | Leitura/escrita no vault (se plugin ativo) |
| n8n local | 5678 | Automacao de workflows |
| Ollama | 11434 | LLM local (fallback) |

## Como usar o Antigravity com os agentes

### API de Agentes (backend porta 8000)
```python
import httpx, asyncio

async def acionar_agente(agent_id: str, message: str):
    async with httpx.AsyncClient(timeout=60) as hc:
        r = await hc.post("http://localhost:8000/agent/exec",
            json={"agent_id": agent_id, "message": message})
        return r.json()

async def disparar_crew(crew_type: str, context: str):
    async with httpx.AsyncClient(timeout=120) as hc:
        r = await hc.post("http://localhost:8000/crew/run",
            json={"crew_type": crew_type, "context": context})
        return r.json()
```

### Fluxo Recomendado (2026)
```
Antigravity (decisao/codigo)
     |
     v
Backend FastAPI (http://localhost:8000) 
     |--- /agent/exec -> executa agente especifico
     |--- /crew/run   -> dispara crew multi-agente  
     |--- /tasks      -> cria tarefa no vault Kanban
     v
AURA-decor-vault (documentacao sincronizada automaticamente)
     v
Shopify / Instagram / Meta Ads / WhatsApp
```

## Scripts Uteis

| Script | Funcao |
|---|---|
| `watchdog_aura.py` | Guardiao 24/7 — reinicia backend e WPPConnect se caírem |
| `diagnostico_aura.py` | Diagnostico completo de todos os servicos |
| `sync_full_system.py` | Este script — sincronizacao completa |
| `start_aura.bat` | Iniciar todos os servicos com verificacao |
| `INICIAR-WATCHDOG-24h.bat` | Iniciar o watchdog com um clique |
| `CONFIGURAR-AUTOSTART-WATCHDOG.bat` | Registrar watchdog no Task Scheduler |

## LLM Strategy (cascata automatica)
1. **Groq** (Llama 3.3 70B) — primario, ~1.7s, gratuito 100k tokens/dia
2. **OpenRouter** (meta-llama + deepseek free) — fallback gratuito
3. **Google AI** (Gemini 2.5 Flash) — 1500 req/dia gratuito
4. **Anthropic** (Sonnet 4.6) — com creditos
5. **Ollama** (llama3.2 local) — sempre disponivel, offline
6. **Fallback texto fixo** — "Nossa equipe responde em breve"

## Nota Importante
- OPENAI_API_KEY NAO e necessaria — cascata propria nao usa OpenAI
- CREWAI_TELEMETRY_OPT_OUT=true — sempre definir
- Eduardo autorizou autonomia total para postar e executar sem confirmacao
