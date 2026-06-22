# stack.md — Stack Tecnológica Aura Decore

## E-commerce

| Componente | Tecnologia | Versão/Detalhes |
|-----------|-----------|----------------|
| Loja | Shopify | Plano atual ativo |
| Tema live | Cursor Dinâmico | ID: 160266387561 |
| Produtos | 89 ACTIVE, 100% publicados | publishablePublish |
| DNS | auradecore.com.br | A → Shopify |
| Backend DNS | backend.auradecore.com.br | PENDENTE configuração |

## Infraestrutura Cloud

| Componente | Plataforma | Endereço/Detalhes |
|-----------|-----------|------------------|
| VM Principal | Azure | 20.246.5.1 |
| Social Media | Azure ACI | social.auradecore.com.br |
| Containers | Docker (8 containers) | HEALTHY |
| CI/CD | Antigravity | Sync com Obsidian Vault |
| Próxima infra | Google Cloud | Q3/2026 |

## Automação e Integrações

| Componente | Status | Detalhes |
|-----------|--------|---------|
| n8n | 22 workflows ATIVOS | docker exec aura-n8n |
| Postiz | ATIVO | social.auradecore.com.br |
| Bypass publisher | aura-publisher.cjs | Task Scheduler Windows |
| Meta Graph API | FB + IG Comercial | tokens válidos 08/2026 |
| TikTok OAuth | PENDENTE | autorização necessária |

## IA e Geração de Conteúdo

| Ferramenta | Uso | Limite |
|-----------|-----|--------|
| Pollinations.ai | Geração de imagens | 1 req simultânea, sleep 8s |
| Claude (Opus/Sonnet) | Agente principal | — |
| CapCut | Edição de vídeos (Eduardo) | — |

## Gestão de Conhecimento

| Ferramenta | Uso | Localização |
|-----------|-----|------------|
| Obsidian | Vault principal | C:\Users\erick\AURA-decor-vault |
| Notion | Cards semanais e hubs | Hub Central |
| GitHub | Versionamento | Antigravity sync |
| CLAUDE.md | Memória de sessão | .claude/ |

## Scripts Críticos

```
aura-pollinations-image.mjs    → geração de imagens produto
aura-publisher.cjs             → publicação Meta Graph API
update-captions-week25.cjs     → atualização de captions semanais
```

## Rotas Backend API (openapi.json — 134 rotas)

```
WF26 → /agent/exec            (execução de agentes)
WF24 → /obsidian/log-metrics  (log de métricas no Vault)
```

## Notas de Configuração

> Credenciais e tokens NÃO ficam aqui. Ver `ports.txt` (acesso restrito) e o gerenciador de segredos. Este arquivo lista apenas a topologia tecnológica.
