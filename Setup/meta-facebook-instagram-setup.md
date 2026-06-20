# Meta (Facebook + Instagram) — Setup para Agentes

## Status atual
- **FB_PAGE_ID**: 1111100822090245 ✅ configurado  
- **FB_PAGE_TOKEN**: ❌ vazio — **AÇÃO NECESSÁRIA**  
- **IG_USER_ID**: 17841442799060573 ✅ configurado  
- **META_APP_ID**: 2073471413233500 ✅ configurado  

---

## Como ativar em 5 minutos

### Passo 1 — Iniciar o servidor de autorização
```bat
cd C:\Users\erick\aura-office-dashboard\backend
python get_fb_token.py
```
Acesse: **http://localhost:8765**

### Passo 2 — Obter token no Graph Explorer

1. Acesse https://developers.facebook.com/tools/explorer/
2. **App**: selecione **Aura Decore** (App ID: 2073471413233500)
3. **User or Page**: selecione a página **Aura Decore**
4. Adicione as permissões:
   - ✅ `pages_manage_posts`
   - ✅ `pages_read_engagement`
   - ✅ `instagram_basic`
   - ✅ `instagram_content_publish`
   - ✅ `instagram_manage_comments`
   - ✅ `instagram_manage_insights`
   - ✅ `business_management`
5. Clique **Generate Access Token** e autorize
6. Execute na barra: `GET /me/accounts`
7. Na resposta, copie o `access_token` da linha da Aura Decore
8. Cole em http://localhost:8765 e clique **Salvar**

O backend salva automaticamente no `.env` e reinicia.

### Passo 3 — Verificar
```bash
curl http://localhost:8000/meta/social
```
Deve retornar `"agent_ready": true` para facebook e instagram.

---

## O que os agentes conseguem fazer após configurar

### FEED — Publicar posts
```
POST /meta/social/post
{rede: "facebook", message: "texto...", image_url: "https://..."}
{rede: "instagram", caption: "texto...", image_url: "https://...", media_type: "IMAGE"}
```

### NOX — Reels e Stories
```
POST /meta/social/post
{rede: "instagram", caption: "...", image_url: "...", media_type: "REELS"}
{rede: "instagram", caption: "...", image_url: "...", media_type: "STORIES"}
```

### ZARA — Community (resposta a comentários)
- Usa o token para ler comentários e responder via Graph API

---

## Scopes necessários (resumo)

| Escopo | Para que serve | Agente |
|--------|---------------|--------|
| `pages_manage_posts` | Criar posts no Facebook | FEED |
| `pages_read_engagement` | Ler curtidas, comentários | ZARA/ECHO |
| `instagram_basic` | Ler perfil e mídia | ZARA/ECHO |
| `instagram_content_publish` | Publicar no Instagram | FEED/NOX |
| `instagram_manage_comments` | Responder comentários | ZARA |
| `instagram_manage_insights` | Ver métricas de conteúdo | REX/ECHO |
| `business_management` | Acesso a Business Manager | GUARD |

---

## Token expira?
- Token de página (Page Access Token) é **permanente** — não expira
- O `get_fb_token.py` faz a troca automática para token permanente
- Se expirar por revogação: rodar `python get_fb_token.py` novamente

---

## Fallback dos agentes
Quando `FB_PAGE_TOKEN` não está configurado, os agentes **não travam** — eles:
1. Salvam o post em `AURA-decor-vault/Redes Sociais/posts-prontos/` como rascunho
2. Reportam `"status": "vault"` via WebSocket ao dashboard
3. Eduardo revisa e publica manualmente

---

## Links úteis
- Graph Explorer: https://developers.facebook.com/tools/explorer/
- App Aura Decore: https://developers.facebook.com/apps/2073471413233500/
- Servidor de token: http://localhost:8765
- Status dos agentes: http://localhost:8000/meta/social
