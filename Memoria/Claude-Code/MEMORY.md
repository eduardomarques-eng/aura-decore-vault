# Memory Index — Aura Decore
> Ultima sincronizacao: 2026-06-21 12:05 | Semana 25/2026

## Status do Sistema (2026-06-21)
- Backend FastAPI: ONLINE porta 8000 — 20 agentes ativos
- WPPConnect sessao 'aura-decore' CONECTADA ao WhatsApp
- n8n LOCAL ATIVO porta 5678 (22/22 workflows ativos)
- Ollama llama3.2: ONLINE porta 11434
- LLM primario: Groq llama-3.3-70b (resposta ~1.7s)
- Watchdog 24/7: watchdog_aura.py (reinicia servicos automaticamente)

## Projetos e Contextos

- [Aura Decore — sistema de agentes](project_aura_decor.md)
  22 agentes ATIVOS. LENA respondendo WhatsApp via webhook /whatsapp/webhook.
  Semana 25/2026: Backend UP, WPPConnect UP, LLM OK (Groq 70B primario).
  n8n: n8n LOCAL ATIVO porta 5678 (22/22 workflows ativos). n8n Railway OFFLINE (limite recursos).
  TikTok OAuth pendente. Pinterest manual.

- [Topologia de dominios e temas da loja](store_domain_topology.md)
  1 loja: auradecore.com.br. Tema live "Cursor Dinamico" 160266387561.
  89 produtos ACTIVE 100% publicados. Publicar = publishablePublish.

- [Postiz self-host na Azure](project_postiz_selfhost.md)
  social.auradecore.com.br ATIVO (Azure ACI). BYPASS: /social/publish-due no FastAPI.
  Tokens validos ate 2026-08-15. TikTok OAuth pendente. Azure containers ativos.

- [Criativos PT-BR + 5 canais](feedback_criativos_ptbr_multicanal.md)
  TODO criativo OBRIGATORIAMENTE em PT-BR. 5 canais. Captions ALTERNANDO profissional/humanizado.
  CTA + auradecore.com.br + 8-12 hashtags + musica em stories.

- [Publicacao autonoma sem verificacao](feedback_postagem_autonoma.md)
  Eduardo autorizou (17/06/2026): programar e postar sem pedir confirmacao. Executar direto.

- [Musica + copy + hashtags](feedback_musica_copy_hashtags.md)
  TODO conteudo SEMPRE com musica ambiente calma/moderna + copy neuromarketing + hashtags atuais.

## Regras para Antigravity/Claude Code (2026-06-21)
1. Backend rodando em http://localhost:8000 — USE para acionar agentes
2. LENA atendendo WhatsApp via /whatsapp/webhook — NAO interrompa
3. LLM cascade: Groq -> OpenRouter -> Google AI -> Anthropic -> Ollama
4. Eduardo autorizou autonomia total — executar e reportar, nao pedir confirmacao
5. Watchdog em watchdog_aura.py — reinicia servicos se caírem
6. CREWAI_TELEMETRY_OPT_OUT=true — sempre definir antes de imports
7. OPENAI_API_KEY nao necessaria — usar apenas LLM cascade proprio

## Comandos Uteis (API Backend)
```bash
# Status dos agentes
GET http://localhost:8000/health

# Acionar agente especifico
POST http://localhost:8000/agent/exec
{"agent_id": "ive", "message": "execute auditoria semanal"}

# Disparar crew
POST http://localhost:8000/crew/run
{"crew_type": "content", "context": "produto: vaso japandi"}

# Webhook LENA (simular mensagem WhatsApp)
POST http://localhost:8000/whatsapp/webhook
{"from": "5511999999@c.us", "body": "Bom dia!", "type": "chat", "fromMe": false}

# Status WPPConnect
GET http://localhost:21465/api/aura-decore/status-session
```
