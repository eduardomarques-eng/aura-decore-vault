---
name: project_postiz_selfhost
description: "Postiz self-host na Azure (agendador social p/ Aura Decore via MCP) — estado, infra e bloqueio HTTPS/OAuth"
metadata: 
  node_type: memory
  type: project
  originSessionId: 20cacc82-13bf-4752-b57d-03b84e6b836a
---

Auto-hospedagem do **Postiz** (agendador de redes sociais, `ghcr.io/gitroomhq/postiz-app:latest`) para centralizar publicação das contas da Aura Decore (IG, FB Comercial, FB Pessoal @auras.decore, Pinterest, TikTok) — ver [[project_aura_decor]] e [[feedback_criativos_ptbr_multicanal]]. Objetivo final: publicar via MCP. Ponte GRÁTIS até ~jul/2026 quando o Railway será upgradado.

**Infra (Azure ACI, região southcentralus, resource group `postiz-rg`):**
- Container `postiz`: imagem postiz-app:latest, 2 CPU/4GB, porta 5000, dns label `postiz-aura` → `postiz-aura.southcentralus.azurecontainer.io:5000`. IP público muda a cada recreate (atual 135.233.165.200).
- Container `temporal-server`: `ghcr.io/eduardomarques-eng/temporal-auto-setup:1.28.1` (espelhado do Docker Hub via GitHub Actions p/ evitar rate limit), `20.94.170.88:7233`, com `BIND_ON_IP=0.0.0.0` e `SKIP_ADD_CUSTOM_SEARCH_ATTRIBUTES=true`.
- Postgres em Railway (DBs: postiz, temporal, temporal_visibility). Redis em Upstash (free).
- Admin criado: eduardo.marques.arq@gmail.com / AuraDecore2026! (registro exige campo `provider:"LOCAL"`).

**Resolvido:** login API funciona após `NOT_SECURED=true` no env do container (Postiz dropa flags Secure/SameSite=None do cookie e manda token no header `auth` — caminho oficial p/ deploy HTTP). Frontend serve 200.

**HTTPS RESOLVIDO (16/06):** URL estável **https://social.auradecore.com.br** funcionando, login persiste com cookie Secure normal (NOT_SECURED removido). Solução: CNAME `social.auradecore.com.br` → `postiz-aura.southcentralus.azurecontainer.io` (aditivo no DNS Hostinger, zero risco à loja) + sidecar **Caddy** (`caddy:2`, command `caddy reverse-proxy --from social.auradecore.com.br --to localhost:5000`) no grupo ACI com portas 80/443/5000. Caddy emite cert Let's Encrypt automático (http-01). Grupo ACI agora tem 2 containers: postiz (1.5cpu/3.5gb) + caddy (0.5/0.5). YAML em `C:\Users\erick\AppData\Local\Temp\postiz-aci-https.yaml`. NÃO usou Cloudflare (Cloudflare não faz proxy na porta 5000). IP do Azure muda a cada recreate mas CNAME→FQDN acompanha.

**IG + FB Comercial CONECTADOS (2026-06-17):** OAuth do Meta está bloqueado para admin do app (Meta exibe warning de scopes deprecated → redireciona para /v25.0/dialog/close/). Solução: injeção direta no DB Railway PostgreSQL. Script: `C:\Users\erick\AppData\Local\Temp\insert-postiz-channels.mjs`. Tokens válidos até 2026-08-15. Integração IDs: FB `ee17965c-deaa-4791-8c6b-95a40e27d847`, IG `4c254daa-f5f3-4201-be9f-8d68fec861c0`. postingTimes: `[540,600,1080,1140]` (minutos, = 09h/10h/18h/19h). Canais visíveis na sidebar do Postiz Calendar.

**TikTok CONFIGURADO (2026-06-17):**
- Dev portal: `https://developers.tiktok.com/app/7651535055701837845/pending` — App "Postagem Aura Decore", Client key `awtsruq7fn4r5ktj`, Client secret `Yp5H7XSt4hzeoEpXl5ToLTzdlKcL9Jll`.
- Produtos adicionados: Kit de Login + API de Publicação de Conteúdo. Postagem direta habilitada.
- Redirect URI registrado: `https://social.auradecore.com.br/integrations/social/tiktok` (aba Web).
- Domínio `auradecore.com.br` verificado via TXT record Hostinger.
- Escopos automáticos: user.info.basic, video.publish, video.upload, user.info.profile, user.info.stats, video.list.
- ACI container recriado (2026-06-17) com TIKTOK_CLIENT_ID + TIKTOK_CLIENT_SECRET. Caddy espelhado para `ghcr.io/eduardomarques-eng/caddy:2` (workflow `aura-decor-hq/.github/workflows/mirror-caddy.yml`). YAML atualizado: `C:\Users\erick\AppData\Local\Temp\postiz-tiktok.yaml`.
- **Pendente:** Eduardo precisa fazer OAuth no Postiz UI → social.auradecore.com.br → Settings → Channels → Add TikTok. App ainda em status Rascunho (não submetido para revisão).

**Pinterest (2026-06-17):** Conta @auradecoracao JÁ É Business (confirmado via settings/account-settings — opção "Converter em conta pessoal" visível). App 1581128 "Aura Decore Social" tem "Acesso Trial negado" — sem Secret Key disponível. Diagnóstico: Trial negado por razão desconhecida, possivelmente app criado sem informações completas. **Ação necessária (Eduardo):** ir a developers.pinterest.com/apps/ → "Conectar aplicativo" → criar app "Aura Decore Postiz" com redirect URI `https://social.auradecore.com.br/integrations/social/pinterest` → copiar App ID + Chave Secreta → solicitar Standard Access (para pins:write). YAML com placeholders em `C:\Users\erick\AppData\Local\Temp\postiz-pinterest.yaml`. Quando credenciais disponíveis: substituir SUBSTITUIR_PELO_APP_ID e SUBSTITUIR_PELA_CHAVE_SECRETA e recriar ACI. Standard Access pode levar 1-5 dias úteis para aprovação pelo Pinterest.

**BYPASS PUBLISHER (2026-06-17) — Postiz/Temporal não publicam posts injetados via DB:**
Posts injetados via SQL ficam em QUEUE para sempre (Postiz usa Temporal para scheduling; injeção direta não cria workflow). Solução: `aura-publisher.cjs` — publisher autônomo que consulta DB, publica via Meta Graph API e atualiza estado. Script permanente em `C:\Users\erick\AURA-decor-vault\Automacoes\aura-publisher.cjs`. Wrapper: `run-publisher.cmd`. Logs em `C:\Users\erick\AURA-decor-vault\Logs\publisher-YYYYMMDD.log`. **Windows Task Scheduler** criou 4 tarefas diárias (StartWhenAvailable=true para recuperar posts se PC estava desligado):
- `AuraPublisher-0905` → 09:05 BRT
- `AuraPublisher-1205` → 12:05 BRT  
- `AuraPublisher-1905` → 19:05 BRT
- `AuraPublisher-2105` → 21:05 BRT
Status semana 25 (17/06): 8 PUBLISHED (17/06 todos — porém stories foram ao FEED por bug), 48 QUEUE (18-23/06). **CORRIGIDO 17/06**: `publishIGStory()` + `publishFBStory()` adicionados ao publisher. Stories IG usam `media_type=STORIES` (API confirmada). FB stories tentam `photo_stories` e fazem fallback para feed. Janela de captura: 90min atrás → 5min à frente (recupera posts se PC estava desligado).

**Programação real:** 9 posts/semana por canal (SEG 09+19h, TER 18h, QUA 09+19h, QUI 18h, SEX 18h, SÁB 10h, DOM 10h). Configurado em Postiz DB + FEED.md + NOX.md + social_agent.py WEEKLY_CALENDAR.

**Renovar tokens quando expirar (2026-08-15):** obter novo Page Access Token via Graph API (`/me/accounts?access_token=<user_token>`) → re-executar `insert-postiz-channels.mjs` com novo PAGE_TOKEN. A criptografia EVP_BytesToKey/AES-256-CBC/hex com JWT_SECRET=`AuraDecorePostizJWT2026SecretKeyForSecurity` permanece a mesma.

**Operacional:** `az` não está no PATH; usar `C:\Program Files\Microsoft SDKs\Azure\CLI2\wbin\az.cmd`. Sub Azure `4dc267ad-f648-4c97-8701-4e966f1d21ab`. `az container exec` quebra com quoting no PowerShell → usei exec via WebSocket REST API com helper Node `C:\Users\erick\AppData\Local\Temp\ws-exec.mjs` (pacote `ws` instalado em %TEMP%). YAML do container exportável via `az container export`; remover `provisioningTimeoutInSeconds`/`isCustomProvisioningTimeout`/`apiVersion` antes de recriar.
