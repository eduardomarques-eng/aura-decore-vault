# Memory: Lições Aprendidas

> Registro permanente de aprendizados. Toda lição nova entra aqui (ECHO).
> Formato: `[data] LIÇÃO — contexto → aprendizado → ação`.

## Infraestrutura

- `[2026-06]` **Railway não escalou** → migração total para Azure VM (8 containers) → ZERO Railway, backend HEALTHY em 20.246.5.1.
- `[2026-06]` **n8n PUT 400 silencioso** → body só aceita name/nodes/connections/settings → sempre limpar campos extras antes do PUT (ver `@gotchas.md`).
- `[2026-06]` **Postiz/Temporal não executa posts injetados** → bypass via aura-publisher.cjs no Task Scheduler.

## Conteúdo & Imagens

- `[2026-06]` **Pollinations rate limit** → 1 req simultânea → rodar sequencial + Start-Sleep 8.
- `[2026-06]` **Imagens saíam genéricas** → adicionar termos Japandi explícitos no prompt → estilo consistente.
- `[2026-06]` **Conteúdo precisa ser 100% PT-BR** → padrão obrigatório em todos os agentes.

## Publicação

- `[2026-06-17]` Eduardo autorizou publicação autônoma.
- `[2026-06-21]` **SOBRESCRITO**: Eduardo é o ÚNICO publicador nas redes sociais → agentes só preparam + card "Pronto p/ Eduardo".

## Vendas

- `[2026-06]` **0 vendas reais** (1 pedido expirado) → motor low ticket ativado para destravar primeira venda.

## Vault & Organização

- `[2026-06]` **Vault duplicado** (OneDrive legado) → usar SEMPRE C:\Users\erick\AURA-decor-vault.
- `[2026-06-21]` **Vault com 50+ pastas e duplicações** → necessária consolidação (ADR em andamento).

## Como adicionar uma lição
```
[AAAA-MM] **Título** → contexto → aprendizado → ação tomada (link gotcha/rule)
```
