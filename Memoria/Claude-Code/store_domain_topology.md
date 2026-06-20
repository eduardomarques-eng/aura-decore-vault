---
name: store-domain-topology
description: "Aura Decore Shopify domains, redirects and live/staging theme IDs — clears up the \"different theme on different domains\" confusion"
metadata: 
  node_type: memory
  type: project
  originSessionId: d8d982a3-8f30-42ae-b26c-e70a51febaa3
---

A loja Aura Decore é **uma única loja Shopify** (plano Basic, BRL). Os domínios abaixo são aliases da MESMA loja — NÃO são lojas diferentes:

- **auradecore.com.br** = domínio primário (canônico). Serve a loja diretamente (HTTP 200).
- **10ei3t-sf.myshopify.com** → 301 → auradecore.com.br
- **aura-decor-17.myshopify.com** → 301 → auradecore.com.br (subdomínio myshopify antigo, mesma loja)

Todos servem o MESMO tema publicado. Verificado em 2026-06-14 por curl (HTML bruto), API Admin autenticada e Chrome do Eduardo.

**Temas (loja 10ei3t-sf) — atualizado 2026-06-14:**
- LIVE / MAIN: `160266387561` "Aura Decore - Cursor Dinâmico" (base Dawn 15.4.1) ✅ — **único tema válido, trabalhar SEMPRE nele**
- Eduardo DELETOU todos os temas antigos/backups: `160138428521` (Versão Dcorada Clone), `160286408809`, `160286933097`, e os antigos `142526644329`/`142376337513`/`142767816809`. NÃO referenciar mais.

**Backup obrigatório antes de qualquer mudança no tema:**
```
cd aura-office-dashboard/backend && python backup_live_theme.py
```
Salva todos os assets em `backend/theme-backups/<nome>-<timestamp>/` + `_manifest.json`. Primeiro backup feito 2026-06-14 21h10.

`.env`: `SHOPIFY_LIVE_THEME_ID=160266387561` ✅. `SHOPIFY_STAGING_THEME_ID=` vazio (staging deletado — recriar duplicando o LIVE no admin quando precisar testar).

**Tipografia do tema:** fontes Cormorant (títulos) + Assistant (corpo). `heading_scale: 120`, `body_scale: 110` (aumentado de 100 em 2026-06-14 para legibilidade). Editar via `config/settings_data.json` → `current.body_scale`. Script: `backend/bump_font_size.py`. Escala de fonte do corpo via var CSS `--font-body-scale` (Dawn).

**Loja:** 89 produtos ACTIVE, todos publicados nos canais Loja virtual (158976213097) + Facebook&Instagram (159608209513) + Google&YouTube (159607324777). Publicar produto = `publishablePublish` (status ACTIVE sozinho NÃO torna visível na loja).

**Se o Eduardo vir "tema antigo" em algum domínio:** é cache do navegador dele ou link de preview (`?preview_theme_id=160138428521`), NÃO divergência de servidor. Fix: hard refresh (Ctrl+Shift+R) ou aba anônima. Relacionado: [[project-aura-decor]].
