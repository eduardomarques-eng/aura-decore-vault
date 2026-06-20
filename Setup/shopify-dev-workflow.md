# Shopify Dev Workflow — Aura Decore

## Visão Geral

Sistema de atualização automática da loja Shopify, controlado pelo agente DEV com suporte de ARTE e VERA. Opera em dois ciclos:

1. **Sprint semanal** (quarta-feira, 9h) — melhorias de design e conversão
2. **Atualização sazonal** (dia 1 de cada mês, 7h) — troca de paleta e conteúdo sazonal

---

## Arquitetura

```
n8n Workflow 11
├── Cron: quarta 9h  → POST /crew/run {crew_type: "shopify_dev"}
└── Cron: dia 1 7h   → POST /crew/run {crew_type: "seasonal_update"}
                        → POST /crew/run {crew_type: "conversion"}

FastAPI (main.py)
├── shopify_dev_scheduler()    — quarta 9h
├── seasonal_update_scheduler() — dia 1 7h
└── /crew/run endpoint         — disparo manual

crew_agents.py
├── build_shopify_dev_crew()     — DEV + ARTE + VERA
├── build_seasonal_update_crew() — DEV + ARTE + VERA
└── build_conversion_crew()      — DEV + SOL + VERA

shopify_dev_tools.py
├── ShopifyThemeAsset    — lê/escreve CSS, Liquid, JSON
├── ShopifyThemeSettings — settings_data.json
├── ShopifyCollection    — coleções sazonais
├── ShopifyCSSInjector   — CSS sazonal com variáveis
├── ShopifyAnnouncement  — banner de anúncio
├── ShopifyPublishTheme  — staging → live
├── SeasonDetector       — detecta estação atual
└── ShopifyDevReport     — auditoria completa
```

---

## Configuração Inicial

### 1. Obter SHOPIFY_ADMIN_TOKEN

1. Acesse: `Shopify Admin` > `Settings` > `Apps and sales channels`
2. Clique em `Develop apps`
3. Crie um app chamado "Aura Decore Backend"
4. Em `Configuration`, adicione as permissões de Admin API:
   - `write_themes` / `read_themes`
   - `write_products` / `read_products`
   - `write_collections` / `read_collections`
5. Instale o app e copie o **Admin API access token**
6. Adicione no arquivo `.env`:
   ```
   SHOPIFY_ADMIN_TOKEN=shpat_XXXXXXXXXXXXX
   ```

### 2. Verificar IDs de Tema

No `.env` já estão configurados:
```
SHOPIFY_STAGING_THEME_ID=gid://shopify/OnlineStoreTheme/142526644329
SHOPIFY_LIVE_THEME_ID=gid://shopify/OnlineStoreTheme/142376337513
```

Para confirmar, acesse: `Shopify Admin > Online Store > Themes`

### 3. Importar Workflow n8n

Arquivo: `n8n-workflows/11-shopify-dev-pipeline.json`

No n8n cloud:
1. `Workflows` > `Import from file`
2. Selecione o arquivo
3. Ative o workflow

---

## Disparo Manual via API

```bash
# Sprint de desenvolvimento
curl -X POST http://localhost:8000/crew/run \
  -H "Content-Type: application/json" \
  -d '{"crew_type": "shopify_dev", "context": "melhorar hero e CTAs"}'

# Atualização sazonal
curl -X POST http://localhost:8000/crew/run \
  -H "Content-Type: application/json" \
  -d '{"crew_type": "seasonal_update", "context": ""}'

# Otimização de conversão
curl -X POST http://localhost:8000/crew/run \
  -H "Content-Type: application/json" \
  -d '{"crew_type": "conversion", "context": "melhorar taxa de checkout"}'
```

---

## CSS Sazonal

O `ShopifyCSSInjector` injeta variáveis CSS globais no arquivo `assets/aura-seasonal.css`:

```css
:root {
  --accent-color: #B8793A;   /* cor accent da estação */
  --accent-dark:  #8B5A2B;   /* 20% mais escuro */
  --accent-light: #E5A96A;   /* 20% mais claro */
}
```

O tema deve referenciar `var(--accent-color)` em botões, links e destaques.

---

## Estações do Ano (Japandi + Brasil)

| Meses | Estação | Accent | Produtos Foco |
|-------|---------|--------|---------------|
| Jan–Fev | Começo de Ano | `#8B9E8E` | Organização, prateleiras, cestos |
| Mar–Abr | Outono Japandi | `#B8793A` | Vasos cerâmica, texturas terra |
| Mai–Jun | Inverno Aconchego | `#6B7280` | Velas, texteis, lanterna |
| Jul–Ago | Renovação do Lar | `#A67B5B` | Madeira, plantas, quadros |
| Set–Out | Primavera Bloom | `#9DB88A` | Floral, verde, leveza |
| Nov–Dez | Natal Japandi | `#8B6F5C` | Presentes premium, festivo íntimo |

---

## Monitoramento

- Logs em tempo real via WebSocket `ws://localhost:8000/ws`
- Status dos agents no dashboard: `http://localhost:3000`
- Agent ID no dashboard: `dev` (Desenvolvedor Shopify)
