# Workflow: Social Hub (Conteúdo Semanal)

## Objetivo
Produzir 7 pacotes de conteúdo/semana, prontos para Eduardo publicar.

## Gatilho
Segunda-feira 09h (início do ciclo Loop Engineering).

## Fluxo
```
VEGA define tema da semana
   → LUNA monta calendário (7 pacotes, 5 canais)
      → IVE gera imagens (Pollinations sequencial + sleep 8s)
         → LENA escreve captions (PT-BR, CTA, hashtags, música)
            → Hub cria card Notion "Pronto p/ Eduardo"
               → Eduardo publica (único publicador)
                  → MIRA loga métricas (WF24)
                     → ECHO audita (segunda 10h)
```

## Entregáveis por Pacote
- [ ] Imagem estática Japandi
- [ ] Caption PT-BR (alternando profissional/humanizado)
- [ ] CTA + auradecore.com.br
- [ ] 8-12 hashtags
- [ ] Sugestão de música
- [ ] Card Notion criado

## Agentes
LUNA (orquestra) · IVE · LENA · MIRA · ECHO

## Automações
- Geração em lote (n8n / Pollinations sequencial)
- Sync Notion (cards)
- WF24 log de métricas

## Métricas
- 7 pacotes entregues/semana
- Tempo de produção por pacote
- Engajamento médio pós-publicação

## Conectores
`@hooks/posts.md` `@hooks/reels.md` `@hooks/stories.md` `@hooks/pinterest.md`
