# gotchas.md — Armadilhas Comuns e Soluções (Aura Decore)

> Lições aprendidas na prática. Consulte antes de mexer em algo crítico.

## n8n

**❌ Armadilha:** PUT em workflow retorna 400 silencioso.  
**✅ Solução:** Body só pode ter `name`, `nodes`, `connections`, `settings`. Remova qualquer campo extra (`active`, `id`, `tags`, etc.) antes do PUT.

**❌ Armadilha:** Editar workflow direto pela UI quebra sync.  
**✅ Solução:** Use API via `docker exec aura-n8n` e versione no Vault.

## Pollinations.ai

**❌ Armadilha:** Múltiplas requests simultâneas → rate limit / falha.  
**✅ Solução:** Rodar SEQUENCIAL, 1 req por vez, `Start-Sleep 8` entre cada node. Script: `aura-pollinations-image.mjs`.

**❌ Armadilha:** Imagens saem com estética errada (saturada, fundo branco).  
**✅ Solução:** Sempre incluir no prompt: "japandi style, neutral tones, light wood, linen, soft natural light, minimalist".

## Postiz / Publicação Social

**❌ Armadilha:** Postiz/Temporal não executa posts injetados.  
**✅ Solução:** BYPASS via `aura-publisher.cjs` no Task Scheduler — publica direto no Meta Graph API.

**❌ Armadilha:** Agente tenta publicar automaticamente.  
**✅ Solução:** Eduardo é o ÚNICO publicador. Agentes só preparam e criam card "Pronto p/ Eduardo".

## Obsidian Vault

**❌ Armadilha:** Escrever no vault errado (OneDrive legado).  
**✅ Solução:** SEMPRE usar `C:\Users\erick\AURA-decor-vault`. NUNCA `OneDrive\Documentos\Obsidian Vault`.

## Tokens / Segurança

**❌ Armadilha:** Segredos hardcoded em scripts/logs versionados (FB_PAGE_TOKEN, senha Postgres, chave n8n) vazaram para o GitHub.
**✅ Solução:** Destrackeados via `git rm --cached` + `.gitignore` (Logs/, *.cmd, scripts .cjs). Migrar segredos para `.env` (gitignored). ⚠️ **Vazamento permanece no histórico git → ROTACIONAR todos os tokens é obrigatório** (redação não desfaz o leak).

**❌ Armadilha:** IG_TOKEN expira 08/2026 e quebra todas as publicações.  
**✅ Solução:** GUARD alerta 30 dias antes (até 07/2026). FB_PAGE_TOKEN é permanente.

**❌ Armadilha:** Commitar credenciais no Obsidian (que tem git sync).  
**✅ Solução:** Segredos só em Azure Key Vault / .env servidor. `ports.txt` lista apenas referências.

## Shopify

**❌ Armadilha:** Produto criado mas não aparece na loja.  
**✅ Solução:** Publicar com `publishablePublish`. 89 produtos já 100% publicados.

## Conteúdo

**❌ Armadilha:** Conteúdo gerado em inglês ou misturado.  
**✅ Solução:** TODO conteúdo OBRIGATORIAMENTE em PT-BR.

**❌ Armadilha:** Caption sem música/CTA/hashtags.  
**✅ Solução:** Checklist obrigatório: música + CTA + auradecore.com.br + 8-12 hashtags.
