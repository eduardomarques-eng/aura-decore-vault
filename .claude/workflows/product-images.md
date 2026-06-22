# Workflow: Imagens de Produto

## Objetivo
Gerar imagens de produto consistentes no estilo Japandi, em lote, para loja e social.

## Gatilho
Demanda de novo produto/coleção ou pacote semanal de conteúdo.

## Fluxo
```
LUNA/VERA define produtos
   → IVE monta prompts Japandi (ver @skills/design.md)
      → aura-pollinations-image.mjs (SEQUENCIAL)
         → Start-Sleep 8 entre cada request
            → salvar em Conteudo/Semana-XX/imagens/
               → REX otimiza alt-text/SEO (Shopify/Pinterest)
                  → Eduardo aprova
```

## Regras Críticas (Pollinations)
- 1 req simultânea (rate limit)
- `Start-Sleep 8` obrigatório
- Sequencial, nunca paralelo
- Prompt sempre com termos Japandi

## Formatos
- Post 1080×1080 · Story/Reel 1080×1920 · Pinterest 1000×1500

## Agentes
IVE (lidera) · REX (SEO) · LUNA · VERA

## Automações
- Geração em lote sequencial (n8n / script)
- Upload para Shopify (com alt-text)

## Métricas
- Imagens/semana (meta ≥23)
- Taxa de aprovação visual
- Consistência de estilo (ECHO)

## Conectores
`@skills/design.md` `@agents/ive.md` `@gotchas.md` (Pollinations)
