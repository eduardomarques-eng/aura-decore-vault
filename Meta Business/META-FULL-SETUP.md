# 🎯 Meta Full Setup — Aura Decore
> Integração completa Meta Business (Pixel + CAPI + Catálogo + Shops)
> Atualizado: 2026-06-04

---

## ✅ STATUS ATUAL

| Item | Status | Observação |
|------|--------|------------|
| Canal Facebook & Instagram | ✅ ATIVO | Publication ID: `159608209513` |
| 78 produtos publicados no canal | ✅ CONCLUÍDO | Todos publicados em 04/06/2026 |
| Canal Google & YouTube | ✅ ATIVO | — |
| `meta_integration.py` criado | ✅ CONCLUÍDO | Backend completo |
| Rotas `/meta/*` no backend | ✅ CONCLUÍDO | FastAPI porta 8000 |
| Meta Pixel ID | ❌ PENDENTE | Ver instruções abaixo |
| Conversions API (CAPI) | ❌ PENDENTE | Aguarda Pixel ID + Token |
| FB Page Token | ❌ PENDENTE | Rodar `python get_fb_token.py` |
| Meta Business ID | ❌ PENDENTE | Ver instruções abaixo |
| Meta App Secret | ❌ PENDENTE | Ver instruções abaixo |
| Webhooks Shopify → CAPI | ❌ PENDENTE | Aguarda deploy backend |

---

## 🔑 CREDENCIAIS NECESSÁRIAS (obter 1x)

### 1. META_PIXEL_ID — ID do Pixel Meta

```
1. Acesse: https://business.facebook.com/events_manager
2. Selecione a conta da Aura Decore
3. Clique em "Fontes de Dados" > seu Pixel
4. Copie o ID numérico (ex: 1234567890123456)
5. Cole no .env: META_PIXEL_ID=SeuIDaqui
```

### 2. META_CAPI_TOKEN — Token da Conversions API

```
1. No Events Manager > seu Pixel > Configurações
2. Role até "Conversions API"
3. Clique "Gerar token de acesso"
4. Copie e cole no .env: META_CAPI_TOKEN=EAAxxxxxxxxx
```

### 3. META_BUSINESS_ID — ID do Business Manager

```
1. Acesse: https://business.facebook.com/settings/
2. Clique em "Informações do negócio"
3. Copie o "ID do Business Manager" (ex: 123456789012345)
4. Cole no .env: META_BUSINESS_ID=SeuIDaqui
```

### 4. META_APP_SECRET — Segredo do App Meta

```
1. Acesse: https://developers.facebook.com/apps/2073471413233500/settings/basic/
   (App ID já configurado: 2073471413233500)
2. Clique em "Mostrar" ao lado do App Secret
3. Cole no .env: META_APP_SECRET=SeuSecretAqui
```

### 5. META_ACCESS_TOKEN — Token de Acesso Geral

```
Pode ser o mesmo FB_PAGE_TOKEN (longo prazo).
Ou gere via Graph API Explorer com permissões business_management.
Cole no .env: META_ACCESS_TOKEN=EAAxxxxxxxxx
```

### 6. FB_PAGE_TOKEN — Token da Página (para posts automáticos)

```
Execute: cd backend && python get_fb_token.py
Acesse: http://localhost:8765
Siga o fluxo OAuth e autorize.
O token é salvo automaticamente no .env.
```

---

## 🔧 CONFIGURAÇÃO DO META PIXEL NO TEMA SHOPIFY

### Opção A — Via Shopify Admin (RECOMENDADO)

```
1. Shopify Admin > Loja virtual > Preferências
2. Role até "Facebook Pixel"
3. Cole o META_PIXEL_ID
4. Ative "Correspondência Avançada" (Advanced Matching)
5. Salvar
```

### Opção B — Via Código do Tema

```
1. Admin > Temas > ⋯ > Editar código
2. theme.liquid (ou layout/theme.liquid)
3. Cole antes do </head>:
```

```html
<!-- Meta Pixel Code — Aura Decore -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID_AQUI');
fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=SEU_PIXEL_ID_AQUI&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->
```

---

## 📦 CONFIGURAÇÃO DO CATÁLOGO DE PRODUTOS

### Verificar se o catálogo Shopify está sincronizado

```
1. Facebook Business Manager > Catálogos
   https://business.facebook.com/products/catalogs/
2. Procure "Aura Decore" ou crie um novo catálogo
3. Fontes de Dados > Adicionar Produtos > Data Feed
4. URL do feed Shopify: https://10ei3t-sf.myshopify.com/collections/all.atom
5. Configurar atualização automática: a cada 24h
```

### Via App Facebook & Instagram no Shopify

```
Shopify Admin > Apps > Facebook & Instagram
Verificar se o catálogo está sincronizado lá.
Todos os 78 produtos já foram publicados no canal.
```

---

## 🌐 CONFIGURAÇÃO DE WEBHOOKS (CAPI Server-Side)

Após configurar o backend no Railway ou localmente:

```
Shopify Admin > Configurações > Notificações > Webhooks

Adicionar webhook 1:
  Evento: Pedido criado
  URL: https://aura-office-dashboard-production.up.railway.app/meta/webhook/order
  Formato: JSON

Adicionar webhook 2:
  Evento: Checkout criado
  URL: https://aura-office-dashboard-production.up.railway.app/meta/webhook/checkout
  Formato: JSON
```

---

## 🧪 TESTAR EVENTOS (após configurar credenciais)

### Via terminal:
```bash
cd backend
python meta_integration.py status           # diagnóstico geral
python meta_integration.py test-events      # testa todos os eventos CAPI
python meta_integration.py pixel-snippet    # exibe snippet do pixel
python meta_integration.py list-catalogs    # lista catálogos Meta
```

### Via API do backend:
```
GET  http://localhost:8000/meta/status
GET  http://localhost:8000/meta/test-events?test_code=TEST_AURA_001
GET  http://localhost:8000/meta/pixel-snippet
GET  http://localhost:8000/meta/catalogs
GET  http://localhost:8000/meta/feed-url
POST http://localhost:8000/meta/event/purchase
```

### No Meta Event Manager:
```
1. https://business.facebook.com/events_manager
2. Seu Pixel > Testar Eventos
3. Use o código: TEST_AURA_001
4. Os eventos aparecerão em tempo real
```

---

## 📊 EVENTOS CONFIGURADOS

### Eventos Padrão Meta (Standard)
| Evento | Disparo | Método |
|--------|---------|--------|
| PageView | Toda página | Pixel JS + CAPI |
| ViewContent | Página de produto | Pixel JS + CAPI |
| AddToCart | Clique "Adicionar ao carrinho" | Pixel JS + CAPI |
| InitiateCheckout | Início do checkout | Pixel JS + CAPI |
| Purchase | Pedido confirmado | CAPI (webhook) |
| Search | Busca na loja | CAPI |
| AddToWishlist | Favoritar produto | CAPI |
| CompleteRegistration | Cadastro newsletter | CAPI |
| Contact | WhatsApp/formulário | CAPI |

### Eventos Customizados Decoração
| Evento | Disparo |
|--------|---------|
| ViewInspiration | Galeria de inspiração |
| BrowseCollection | Navegar em coleção |

---

## 🎯 CONFIGURAÇÃO DE ANÚNCIOS

### Após configurar Pixel + CAPI:

#### Pixel de Acompanhamento de Conversão
```
Gerenciador de Anúncios > Criar campanha
Objetivo: Conversões (ou Vendas de catálogo)
Pixel: Aura Decore Pixel
Evento de otimização: Purchase
```

#### Remarketing Dinâmico
```
Objetivo: Vendas do Catálogo
Catálogo: Aura Decore
Público: Visitantes que não compraram (últimos 30 dias)
```

#### Lookalike de Compradores
```
Públicos > Criar público > Público Semelhante
Base: Clientes que realizaram Purchase
Localização: Brasil
Tamanho: 1-2%
```

#### Advanced Matching (via CAPI)
```
✅ Email (hash SHA-256)
✅ Telefone (hash SHA-256)
✅ Nome/Sobrenome (hash SHA-256)
✅ Cidade/Estado/CEP (hash SHA-256)
✅ fbc (cookie _fbc)
✅ fbp (cookie _fbp)
```

---

## 🔄 INTEGRAÇÃO INSTAGRAM SHOPPING

```
1. Instagram > Configurações > Negócios > Instagram Shopping
2. Conectar catálogo do Facebook Business Manager
3. Aguardar aprovação (1-3 dias úteis)
4. Ativar marcação de produtos nos posts
```

---

## 📁 ARQUIVOS DO SISTEMA

| Arquivo | Função |
|---------|--------|
| `backend/meta_integration.py` | Módulo principal Meta |
| `backend/get_fb_token.py` | OAuth para FB Page Token |
| `backend/main.py` | Rotas `/meta/*` FastAPI |
| `backend/.env` | Variáveis de ambiente |

---

## ✅ CHECKLIST FINAL

- [ ] Configurar META_PIXEL_ID no .env
- [ ] Configurar META_CAPI_TOKEN no .env
- [ ] Configurar META_BUSINESS_ID no .env
- [ ] Configurar META_APP_SECRET no .env
- [ ] Rodar `python get_fb_token.py` para FB_PAGE_TOKEN
- [ ] Instalar pixel no tema Shopify (Preferências ou código)
- [ ] Verificar catálogo sincronizado no Facebook Business Manager
- [ ] Configurar webhooks no Shopify Admin
- [ ] Testar eventos com `python meta_integration.py test-events`
- [ ] Verificar eventos no Meta Event Manager (painel)
- [ ] Configurar Instagram Shopping
- [ ] Criar primeira campanha de remarketing

---

*Módulo gerado automaticamente pelo sistema de agentes Aura Decore — 2026-06-04*
