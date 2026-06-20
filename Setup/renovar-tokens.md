# 🔑 Guia de Renovação de Tokens — Aura Decore

> Última atualização: 2026-06-02

## ⚠️ Quando renovar?
- **Token Facebook expirou**: FEED não publica → erros OAuthException code 190
- **Token Shopify expirou**: sync ERP falha → erros 401 na API

---

## 1. Token Facebook + Instagram (mesma operação)

O FB_PAGE_TOKEN é usado para postar no Facebook **E** no Instagram (via Graph API).

### Método automático (recomendado)
```cmd
cd C:\Users\erick\aura-office-dashboard\backend
python get_fb_token.py
```
- Abre `http://localhost:8765` no browser automaticamente
- Cole o token do Graph API Explorer na página
- Token é salvo em `.env` automaticamente

### ⚠️ CAUSA RAIZ MAIS COMUM (diagnosticado em 2026-06-02)

Se o token "funciona" (passa no teste `/me`) mas **não consegue postar**, e
`/me/accounts` retorna vazio, o problema é quase sempre este:

> **A Página NÃO foi selecionada na hora de gerar o token.**

No diagnóstico via `debug_token`, os `granular_scopes` aparecem **sem `target_ids`**
("sem restrição"). Isso prova que as permissões foram concedidas no abstrato,
mas **nenhuma Página/conta IG foi vinculada** ao token. Resultado: o token é de
*usuário pessoal* (ID 122094678957336945), não da Página, e não posta em lugar nenhum.

### Como obter o token CORRETO no Graph Explorer
1. Acesse: https://developers.facebook.com/tools/explorer/
2. App: **Agentes Eduardo** (ID: 2073471413233500)
3. Clique **"Generate Access Token"**
4. **CRÍTICO** — quando aparecer a janela do Facebook perguntando
   *"Quais Páginas você quer usar com Agentes Eduardo?"*:
   - Escolha **"Optar por incluir Páginas atuais e futuras"** OU
   - Marque explicitamente a Página **Aura Decore** na lista
   - ⚠️ Se a Página **NÃO aparecer na lista**, o problema é de Business Manager
     (veja a seção abaixo) — pastar outro token NÃO resolve.
5. Conceda as permissões:
   - `pages_manage_posts`, `pages_read_engagement`, `pages_show_list`
   - `instagram_basic`, `instagram_content_publish`
6. No dropdown azul do Explorer, **troque de "User Token" para o token da Página
   Aura Decore** (aparece logo abaixo do User Token quando a Página foi vinculada)
7. Copie esse **Page Token** (não o User Token)
8. Cole na página `http://localhost:8765/start` → botão **Salvar**

### Se a Página não aparece na lista (Business Manager / New Pages Experience)
A Página Aura Decore está num Portfólio de Negócios (Business Manager). Para o app
enxergá-la:
1. Acesse https://business.facebook.com/settings
2. **Contas → Páginas** → confirme que **Aura Decore** está lá
3. **Contas → Apps** → adicione o app **Agentes Eduardo** (ID 2073471413233500)
4. **Usuários → Pessoas** → confirme que Eduardo tem acesso de **administrador** à Página
5. Em **Páginas → Aura Decore → Acessar ativos / Adicionar pessoas**, conceda ao app
   as tarefas de **Criar conteúdo** e **Gerenciar Página**
6. Volte ao Graph Explorer e gere o token novamente — agora a Página aparecerá

### Verificar se o token é realmente da Página (não do usuário)
```powershell
$t = (Get-Content .env | Select-String "^FB_PAGE_TOKEN=(.+)").Matches[0].Groups[1].Value
# Deve retornar o NOME e ID da PÁGINA, e /me/accounts deve listar a página
Invoke-RestMethod "https://graph.facebook.com/v20.0/me?access_token=$t"
```

### Verificar se o IG_USER_ID ainda é válido
```cmd
python get_ig_id.py
```
Se mudar, salva automaticamente no `.env`.

### Após renovar — reiniciar backend
```cmd
cd C:\Users\erick\aura-office-dashboard\backend
python -m uvicorn main:app --host 0.0.0.0 --port 8000
```

---

## 2. Token Shopify Admin

Usado pelo ERP, agente THEO e atualização automática de produtos.

### Passos
1. Acesse: `https://auradecore.myshopify.com/admin/settings/apps`
2. Clique em **"Develop apps"** → **"Create an app"** (ou abra o existente)
3. Na aba **API credentials** → **Configure Admin API scopes**
4. Habilite:
   - `read_products` + `write_products`
   - `read_orders` + `write_orders`
   - `read_inventory` + `write_inventory`
   - `read_customers`
5. Clique **"Install app"** → copie o **Admin API access token**
6. Atualize no `.env`:
   ```
   SHOPIFY_ADMIN_TOKEN=shpat_NOVO_TOKEN_AQUI
   ```
7. Reinicie o backend

### Variáveis do .env para verificar
```
SHOPIFY_DOMAIN=10ei3t-sf.myshopify.com
SHOPIFY_ADMIN_TOKEN=shpat_...  ← renova aqui
```

---

## 3. Verificação rápida de status

```powershell
# Testa FB token
$token = (Get-Content .env | Select-String "^FB_PAGE_TOKEN=(.+)").Matches[0].Groups[1].Value
Invoke-RestMethod "https://graph.facebook.com/v20.0/me?access_token=$token"

# Testa Shopify token  
$t = (Get-Content .env | Select-String "^SHOPIFY_ADMIN_TOKEN=(.+)").Matches[0].Groups[1].Value
Invoke-RestMethod "https://10ei3t-sf.myshopify.com/admin/api/2025-01/shop.json" -Headers @{"X-Shopify-Access-Token"=$t}
```

---

## Checklist pós-renovação

- [ ] `python get_fb_token.py` → token salvo em `.env`
- [ ] `python get_ig_id.py` → IG_USER_ID confirmado
- [ ] Novo Shopify token no `.env`
- [ ] Backend reiniciado
- [ ] Teste de post: `POST http://localhost:8000/social/post` com mensagem de teste
- [ ] Verificar log: `backend.log` confirma post publicado

---

*Gerado automaticamente pelo sistema de agentes Aura Decore*
