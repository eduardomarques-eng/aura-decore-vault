# ⚠️ ALERTA CRÍTICO — TOKEN FACEBOOK EXPIRADO
**Data:** 2026-06-15 | **Urgência:** ALTA | **Responsável:** FEED + IVE

---

## Situação
O token de acesso do Facebook expirou em **13/06/2026 às 01:00**.
FEED não consegue publicar no Facebook até renovação.

## Impacto
- Posts no Facebook estão bloqueados
- Instagram (Graph API) pode ser afetado dependendo do token
- Publicações de Segunda 16/06 podem falhar se não resolvido HOJE

## Ação Necessária (Eduardo)
1. Acessar: https://developers.facebook.com/tools/explorer/
2. Gerar novo token de usuário com permissões: `pages_manage_posts`, `pages_read_engagement`, `instagram_basic`, `instagram_content_publish`
3. Estender token para 60 dias via `fb_token_renew.py`
4. Atualizar `.env` na Railway com novo `FB_ACCESS_TOKEN`

## Script de renovação disponível
```
cd C:\Users\erick\aura-office-dashboard\backend
python fb_token_renew.py
```

## Monitoramento
FEED alertará IVE se 2 publicações consecutivas falharem.

---
*Gerado automaticamente · GUARD/ECHO · 2026-06-15*
