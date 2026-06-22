# Skill: Técnica (Infra & Integrações)

## Objetivo
Habilidade reutilizável de operação técnica: Azure, Docker, n8n, APIs.

## Infraestrutura
- **Azure VM**: 20.246.5.1 (8 containers, HEALTHY)
- **Postiz**: Azure ACI, social.auradecore.com.br
- **Backend**: openapi.json (134 rotas)
- Próxima infra: Google Cloud (Q3/2026)

## n8n (operação)
```bash
# Acesso
docker exec aura-n8n [comando]

# PUT workflow — APENAS estes campos:
{ "name": ..., "nodes": ..., "connections": ..., "settings": ... }
# Campos extras → erro 400 silencioso!

# Rotas-chave
WF26 → /agent/exec
WF24 → /obsidian/log-metrics
```

## Pollinations (imagens)
```bash
# Sequencial, 1 req simultânea
node aura-pollinations-image.mjs
Start-Sleep 8   # entre cada request
```

## Publicação (bypass)
```
aura-publisher.cjs → Task Scheduler → Meta Graph API
(Postiz/Temporal não executa posts injetados)
```

## Checklist de Mudança Técnica
- [ ] Testar em branch antes de produção
- [ ] Versionar no Vault
- [ ] Registrar em `@changelog.md`
- [ ] Validar com GUARD (segredos)
- [ ] Confirmar com MIRA (métricas seguem fluindo)

## Usado por
OTTO (principal), GUARD, NOX, MIRA
