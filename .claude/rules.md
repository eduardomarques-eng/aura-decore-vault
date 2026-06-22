# rules.md — Regras Globais do Sistema Aura Decore

## Regras de Comunicação

- Idioma: **sempre PT-BR**, nem inglês, nem mistura
- Tom: profissional e caloroso, nunca corporativo frio
- Respostas: objetivas, sem rodeios, com ação clara ao final
- Emojis: permitidos em captions de redes sociais, proibidos em relatórios técnicos

## Regras de Publicação de Conteúdo

- Eduardo é o **único publicador** — agentes preparam, ele publica
- Entregável mínimo por semana: 7 pacotes de conteúdo (1/dia)
- Cada pacote = 1 imagem estática + 1 caption + 1 sugestão de música
- Reels/vídeos = roteiro CapCut entregue, Eduardo grava e edita
- Horários recomendados: 08h, 12h, 19h (picos Instagram BR)

## Regras de Imagens

- Engine primária: **Pollinations.ai** (gratuita, rate limit: 1 req simultânea)
- Sempre rodar sequencial + `Start-Sleep 8` entre requests
- Script padrão: `aura-pollinations-image.mjs`
- Estilo visual: Japandi — tons neutros, madeira clara, verde seco, linho, off-white
- Nunca usar fundos brancos puros ou cores saturadas

## Regras de n8n e Automações

- API via `docker exec aura-n8n`
- PUT body aceita APENAS: `name`, `nodes`, `connections`, `settings`
- Campos extras na body → erro 400 silencioso
- Testar workflows em branch antes de ativar em produção
- WF26 → `/agent/exec` | WF24 → `/obsidian/log-metrics`

## Regras de Segurança (GUARD)

- Tokens FB/IG válidos até 08/2026 — alertar 30 dias antes
- NUNCA commitar credenciais em texto plano no Obsidian/GitHub
- FB_PAGE_TOKEN: permanente ✅ (não precisa renovar)
- Credenciais críticas: consultar `ports.txt` (acesso restrito)

## Regras de Memória e Rastreabilidade

- Todo aprendizado novo → registrar em `memory/lessons-learned.md`
- Toda mudança de infraestrutura → `changelog.md`
- Toda decisão estratégica → `memory/evolution-log.md`
- Auditoria ECHO semanal → `memory/weekly-kaizen.md`

## Regras de Tokens e Contexto

- Carregar apenas os arquivos relevantes para o agente ativo
- Usar referências `@arquivo.md` em vez de copiar conteúdo
- Máximo de contexto por sessão: priorizar skills sobre histórico longo
- Resumos de sessão: salvar em Obsidian ao final de cada ciclo

## Limites do Sistema

| Limite | Valor | Ação se atingido |
|--------|-------|-----------------|
| Posts/dia | 2 | Não aumentar sem teste A/B |
| SKUs low ticket | 5 (top) | Auditar mensalmente |
| Agentes simultâneos | 3 | Fila de prioridade |
| Pollinations req | 1 simultânea | Sleep 8s obrigatório |
| Tokens FB/IG | válidos 08/2026 | Renovar 30 dias antes |
