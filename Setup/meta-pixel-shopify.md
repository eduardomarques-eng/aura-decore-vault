# 🎯 Meta Pixel + CAPI — Guia de Configuração · Aura Decore

> Responsável: THEO (implementação técnica) · REX (validação de campanhas) · PIPE (automação de eventos)
> Prioridade: Alta — obrigatório antes de subir campanhas pagas.

---

## Etapa 1 — Instalar Meta Pixel via Shopify (Sales Channel)

### 1.1 — Meta Sales Channel
1. No Shopify Admin → **Apps** → buscar "Facebook & Instagram"
2. Instalar o app oficial **Meta** (anteriormente Facebook Channel)
3. Conectar com a conta Business Manager do Eduardo
4. Selecionar a página **Aura Decore** (ID: `1130358240160979`)
5. Conectar o Pixel existente ou criar um novo

### 1.2 — Criar Pixel (se ainda não existir)
1. Acessar [business.facebook.com](https://business.facebook.com) → **Gerenciador de Eventos**
2. Criar novo Pixel com nome "Aura Decore Pixel"
3. Anotar o `META_PIXEL_ID` no `.env`

### 1.3 — Verificar instalação
```bash
# Testar via endpoint do backend
GET http://localhost:8000/meta/setup

# Verificar eventos disparando
POST http://localhost:8000/meta/event
{"event_name": "PageView", "test_event_code": "TEST12345"}
```

---

## Etapa 2 — Configurar Conversions API (CAPI) — Server-Side

A CAPI manda eventos diretamente do servidor para o Meta, contornando bloqueadores de anúncios e melhorando atribuição.

### 2.1 — Obter Token CAPI
1. Gerenciador de Eventos → Pixel → **Configurações** → **Conversions API**
2. Gerar token de acesso → copiar para `.env` como `META_CAPI_TOKEN`

### 2.2 — Variáveis de ambiente necessárias
```env
META_PIXEL_ID=xxxxxxxxxxxx
META_CAPI_TOKEN=EAAxxxxxxxxxxxxx
META_ACCESS_TOKEN=EAAxxxxxxxxxxxxx   # token de página (já no FB_PAGE_TOKEN)
META_BUSINESS_ID=xxxxxxxxxx
```

### 2.3 — Eventos prioritários para configurar
| Evento | Quando disparar | Via |
|--------|----------------|-----|
| `PageView` | Toda visita à loja | Pixel (automático via Shopify) |
| `ViewContent` | Página de produto | Pixel (automático) |
| `AddToCart` | Produto adicionado | Pixel (automático) |
| `InitiateCheckout` | Início do checkout | Pixel (automático) |
| `Purchase` | Compra confirmada | **CAPI + Pixel** (deduplicado) |
| `Lead` | Newsletter/cadastro | CAPI via backend |

---

## Etapa 3 — Testar via Gerenciador de Eventos

1. Acessar **Gerenciador de Eventos** → Pixel → **Testar Eventos**
2. Navegar pela loja e verificar se os eventos aparecem em tempo real
3. Verificar score de correspondência de eventos (meta: >7.0)
4. Garantir que `Purchase` vem tanto do Pixel quanto da CAPI (deduplicação via `event_id`)

---

## Etapa 4 — Endpoint CAPI no Backend (já implementado)

```python
# POST /meta/event — envia evento server-side para Meta
# POST /meta/setup — valida configuração e retorna status
```

### Exemplo de uso — enviar Purchase via CAPI
```bash
curl -X POST http://localhost:8000/meta/event \
  -H "Content-Type: application/json" \
  -d '{
    "event_name": "Purchase",
    "event_id": "order-12345",
    "value": 197.00,
    "currency": "BRL",
    "user_data": {
      "email": "cliente@email.com",
      "phone": "5511999999999"
    }
  }'
```

---

## Etapa 5 — Configuração no Shopify Theme (Dawn)

### Verificar se o Pixel está sendo injetado
1. Shopify Admin → **Loja online** → **Preferências** → **Facebook Pixel**
2. Confirmar que o Pixel ID aparece
3. Se usando Meta Sales Channel, o app injeta automaticamente

### Schema de produto (via THEO)
Adicionar `Product` schema nas páginas de produto para melhorar rastreamento:
```liquid
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "{{ product.title }}",
  "image": "{{ product.featured_image | img_url: 'grande' }}",
  "description": "{{ product.description | strip_html }}",
  "sku": "{{ product.selected_or_first_available_variant.sku }}",
  "offers": {
    "@type": "Offer",
    "url": "{{ shop.url }}{{ product.url }}",
    "priceCurrency": "BRL",
    "price": "{{ product.price | money_without_currency }}",
    "availability": "{% if product.available %}https://schema.org/InStock{% else %}https://schema.org/OutOfStock{% endif %}"
  }
}
</script>
```

---

## Checklist de Validação

- [ ] Meta Sales Channel instalado e conectado
- [ ] Pixel criado e ID anotado no `.env`
- [ ] CAPI token gerado e no `.env`
- [ ] Evento `PageView` disparando (verificar via Gerenciador de Eventos)
- [ ] Evento `Purchase` deduplicado via CAPI (score correspondência > 7.0)
- [ ] `/meta/setup` retornando status OK
- [ ] REX valida que campanhas conseguem rastrear conversões

---

## Responsabilidades

| Etapa | Agente |
|-------|--------|
| Instalação app Meta | THEO |
| Configuração CAPI token | THEO |
| Testes de eventos | THEO + REX |
| Workflow automático de Purchase → CAPI | PIPE |
| Validação atribuição nas campanhas | REX |
| Monitoramento contínuo | GUARD (custo) + REX (ROAS) |

---

*Criado: 2026-05-20 · Aura Decore · THEO responsável pela implementação*
