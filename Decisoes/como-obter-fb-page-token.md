# Como Obter o FB Page Token e IG User ID — Aura Decore

> ## 📌 STATUS ATUAL (28-Mai-2026)
>
> | Item | Valor / Estado |
> |------|----------------|
> | **Página correta** | **Aura Decore** — `FB_PAGE_ID=1111100822090245` |
> | **App Meta** | "Agentes Eduardo" — `META_APP_ID=2073471413233500` |
> | **FB_PAGE_TOKEN** | ✅ **Configurado e validado** (token permanente da página, obtido via `/me/accounts`) |
> | **Facebook (FacebookPostTool)** | ✅ **Pronto** — reinicie o backend para ativar |
> | **IG_USER_ID** | ⏳ **Falta 1 passo** — o token atual NÃO tem os escopos `instagram_basic` + `instagram_content_publish`, então a API não retorna a conta do Instagram vinculada |
>
> **Observação:** as IDs `1130358240160979` e `61590108358133` mencionadas em versões antigas estavam erradas. A página real do sistema é **Aura Decore = `1111100822090245`**.

**Contexto:** O agente FEED usa `FacebookPostTool` e `InstagramPostTool` em `design_tools.py`. Ambas dependem de `FB_PAGE_TOKEN` e `IG_USER_ID` no `.env`.

- **Arquivo `.env`:** `C:\Users\erick\aura-office-dashboard\backend\.env`

---

## 🔴 Por que o Instagram ainda não funciona — DIAGNÓSTICO CONFIRMADO

Verifiquei via Graph API (com o token da página, que tem `pages_show_list` + `business_management`):

```
GET /1111100822090245/instagram_accounts?fields=id,username  →  {"data":[]}
GET /1111100822090245?fields=page_backed_instagram_accounts  →  (vazio)
GET /1111100822090245?fields=instagram_business_account      →  (campo ausente)
```

O retorno **`{"data":[]}`** (array vazio, e **não** um erro de permissão) prova que:

> **Não há nenhuma conta do Instagram vinculada à página "Aura Decore".**

Isso **não** é problema de token nem de escopo — é configuração de conta. Nenhuma chamada de API, token ou permissão cria esse vínculo. Só pode ser feito por você, na interface da Meta.

### Passo 1 (OBRIGATÓRIO) — Vincular a conta do Instagram à página

A conta do Instagram precisa ser **Business/Creator** e ser vinculada à página Aura Decore:

- **Pelo Facebook (computador):** Página Aura Decore → **Configurações → Contas vinculadas → Instagram → Conectar conta**.
- **Ou pela Meta Business Suite:** [business.facebook.com](https://business.facebook.com) → **Configurações → Contas do Instagram** → adicionar e associar à página Aura Decore.
- **Ou pelo app Instagram:** Perfil → Editar perfil → **Página** → conectar à página Aura Decore (a conta precisa estar como Profissional).

### Passo 2 — Gerar token com escopos de Instagram

Depois de vinculada, gere um token novo COM os escopos de Instagram:

1. [Graph API Explorer](https://developers.facebook.com/tools/explorer/) → app **"Agentes Eduardo"**.
2. Adicione as permissões **`instagram_basic`** e **`instagram_content_publish`**.
3. **Generate Access Token** → autorize.
4. Rode `GET /me/accounts?fields=id,name,access_token` → copie o `access_token` da página **Aura Decore**.
5. Cole em `FB_PAGE_TOKEN` no `.env`.

### Passo 3 — Obter o IG_USER_ID automaticamente

```bash
cd C:\Users\erick\aura-office-dashboard\backend
python get_ig_id.py
```

O script lê o `FB_PAGE_ID` do `.env`, consulta a Graph API e grava o `IG_USER_ID`. Reinicie o backend.

> **Enquanto isso:** o `InstagramPostTool` já degrada com elegância — salva os posts em
> `AURA-decor-vault\Redes Sociais\posts-prontos\` para publicação manual. O agente FEED não quebra.

---

## Pré-requisitos

1. Você é **administrador** da Página do Facebook `1130358240160979`.
2. Você tem acesso ao **Meta Developer Portal:** https://developers.facebook.com
3. O app Meta já existe (ou você vai criar um neste guia).

---

## Passo 1 — Criar / Acessar o App no Meta Developer Portal

1. Acesse https://developers.facebook.com e faça login com a conta que administra a página.
2. Clique em **My Apps → Create App**.
3. Escolha o tipo **Business** (ou "Other" → "Business").
4. Preencha o nome do app (ex: `AuraDecorePublisher`) e clique em **Create App**.
5. No painel do app, anote o **App ID** e o **App Secret** (Settings → Basic).

---

## Passo 2 — Adicionar o Produto "Facebook Login"

1. No painel do app, vá em **Add a Product** → **Facebook Login** → **Set Up**.
2. Escolha **Web** e coloque qualquer URL (ex: `https://auradecore.com.br`).
3. Em **Facebook Login → Settings**, adicione `https://developers.facebook.com/tools/explorer/` como **Valid OAuth Redirect URI**.
4. Salve as alterações.

---

## Passo 3 — Gerar o User Access Token (curta duração) via Graph API Explorer

1. Acesse: https://developers.facebook.com/tools/explorer/
2. Selecione o seu app no menu superior direito.
3. Clique em **Generate Access Token**.
4. Na tela de permissões, marque **obrigatoriamente**:
   - `pages_manage_posts`
   - `pages_read_engagement`
   - `pages_show_list`
   - `instagram_basic`
   - `instagram_content_publish`
   - `business_management` *(se necessário pelo app)*
5. Autorize e copie o **User Access Token** gerado (começa com `EAA...`).

---

## Passo 4 — Converter para User Access Token de Longa Duração

O token do Explorer dura apenas 1 hora. Execute esta chamada para obter um token de **60 dias**:

```
GET https://graph.facebook.com/v19.0/oauth/access_token
  ?grant_type=fb_exchange_token
  &client_id={APP_ID}
  &client_secret={APP_SECRET}
  &fb_exchange_token={USER_SHORT_TOKEN}
```

**Exemplo com curl:**
```bash
curl "https://graph.facebook.com/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=SEU_APP_ID&client_secret=SEU_APP_SECRET&fb_exchange_token=TOKEN_CURTO_DO_EXPLORER"
```

A resposta será:
```json
{
  "access_token": "EAAxxxx...",
  "token_type": "bearer",
  "expires_in": 5183944
}
```

Guarde esse `access_token` — é o **User Long-Lived Token**.

---

## Passo 5 — Obter o FB Page Token de Longa Duração

Use o User Long-Lived Token para buscar o token específico da página `1130358240160979`:

```bash
curl "https://graph.facebook.com/v19.0/61590108358133?fields=access_token&access_token=USER_LONG_LIVED_TOKEN"
```

A resposta será:
```json
{
  "access_token": "EAAxxxx...",
  "id": "61590108358133"
}
```

Este `access_token` é o **FB Page Token permanente** (não expira enquanto o usuário não revogar o acesso). Copie-o.

---

## Passo 6 — Obter o IG_USER_ID (Instagram Business Account ID)

A conta do Instagram precisa estar vinculada como **Instagram Business/Creator** à página `1130358240160979`.

```bash
curl "https://graph.facebook.com/v19.0/61590108358133?fields=instagram_business_account&access_token=FB_PAGE_TOKEN"
```

A resposta será:
```json
{
  "instagram_business_account": {
    "id": "17841XXXXXXXXX"
  },
  "id": "61590108358133"
}
```

O valor `"id"` dentro de `instagram_business_account` é o seu **IG_USER_ID**.

> Se o campo `instagram_business_account` não aparecer, a conta do Instagram não está vinculada à página. Vá em **Configurações da Página → Instagram** no Facebook e conecte a conta.

---

## Passo 7 — Verificar o Token (opcional mas recomendado)

```bash
curl "https://graph.facebook.com/v19.0/debug_token?input_token=FB_PAGE_TOKEN&access_token=APP_ID|APP_SECRET"
```

Confirme que:
- `"is_valid": true`
- `scopes` inclui `pages_manage_posts` e `instagram_content_publish`
- `"expires_at": 0` (0 = nunca expira — token de página permanente)

---

## Passo 8 — Inserir os Valores no .env

Abra `C:\Users\erick\aura-office-dashboard\backend\.env` e preencha:

```dotenv
FB_PAGE_ID=1130358240160979
FB_PAGE_TOKEN=EAAxxxx...   # Token obtido no Passo 5
IG_USER_ID=17841XXXXXXXXX  # ID obtido no Passo 6
```

Reinicie o backend após salvar.

---

## Resumo das Chamadas API

| Etapa | Endpoint | Token usado |
|-------|----------|-------------|
| 4 — Long-lived User Token | `GET /oauth/access_token?grant_type=fb_exchange_token` | Short User Token |
| 5 — Page Token | `GET /61590108358133?fields=access_token` | Long-lived User Token |
| 6 — IG User ID | `GET /61590108358133?fields=instagram_business_account` | FB Page Token |
| 7 — Debug/verificação | `GET /debug_token?input_token=...` | `APP_ID\|APP_SECRET` |

---

## Troubleshooting

| Erro | Causa provável | Solução |
|------|---------------|---------|
| `OAuthException #200` | Permissão faltando no token | Regenerar token no Explorer com todas as permissões do Passo 3 |
| `instagram_business_account` ausente | Instagram não vinculado à página | Vincular em Configurações da Página → Instagram |
| `Error validating access token` | Token expirou ou foi revogado | Repetir Passos 3–5 |
| Post criado mas não publicado no IG | `IG_USER_ID` errado | Verificar com a chamada do Passo 6 |

---

*Criado em 2026-05-27 — Aura Decore internal docs*
