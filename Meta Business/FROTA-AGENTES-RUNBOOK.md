# 🤖 Frota de Agentes — Aura Decore (Runbook)

> Atualizado automaticamente. Ponto único de operação: `backend/run_agents.py`

## Comando central
```bash
cd C:\Users\erick\aura-office-dashboard\backend
python run_agents.py status      # ver toda a frota
python run_agents.py all         # rodar rotina diária completa
python run_agents.py <agente>    # rodar um agente específico
```

## Agentes

| Agente | Arquivo | Função | Agenda | Estado |
|--------|---------|--------|--------|--------|
| **social** | social_agent.py | Posts diários IG/FB (Gemini) | 09:08 | 🟢 ativo (FB ok) |
| **creative** | creative_agent.py | Imagem + caption + publicação | 09:32 | 🟡 falta gerador de imagem |
| **fb-token** | get_fb_token.py | Captura/renova token FB | 08:09 health | 🟢 token válido |
| **google-status** | google_ai.py | Gemini Pro + Imagen 4 + Veo 3 | sob demanda | 🟢 texto ok; imagem/vídeo = billing |
| **meta-check** | meta_check.py | Pixel + CAPI | sob demanda | 🟡 falta Pixel ID |

## Tarefas agendadas (FleetView)
- `aura-decore-social-post-diario` — 09:08 diário
- `aura-creative-post-diario` — 09:32 diário
- `aura-fb-token-health` — 08:09 diário

## Credenciais
| Variável | Estado | Onde obter |
|----------|--------|-----------|
| GOOGLE_AI_KEY | ✅ | aistudio.google.com |
| GOOGLE_AI_KEY_2 | ✅ | fallback rate-limit |
| FB_PAGE_TOKEN | ✅ | python get_fb_token.py |
| META_ACCESS_TOKEN | ✅ | = FB_PAGE_TOKEN |
| SHOPIFY_ADMIN_API_TOKEN | ❌ | Admin → Apps → Desenvolver apps → shpat_ |
| HIGGSFIELD_API_KEY | ❌ | claude_desktop_config.json |

## Tema Shopify
- **Tema live:** `Aura Decore - v6 (Draft Edicao)` (gid 160100745321, MAIN) ✅ PUBLICADO 05/06/2026
- **Backup:** `Aura Decore - v5` (gid 142767816809, UNPUBLISHED)
- **Correções aplicadas na home (index.json):**
  - "Mais Desejados" agora com 4 produtos REAIS + preços reais
  - 2 seções `featured-product` populadas com produtos reais
  - Menu expandido para 10 itens com todas as coleções

## Status dos Agentes (05/06/2026)
| Agente | Status | Última execução |
|--------|--------|----------------|
| social | 🟢 ativo | 05/06 — FB ✅ IG ✅ (2 posts hoje) |
| creative | 🟡 falta gerador imagem | — |
| fb-token | 🟢 token válido | 05/06 |
| google-status | 🟢 texto ok | 05/06 — Gemini Flash ok |
| shopify-app | 🔴 sem shpat_ | — (MCP substitui) |

## Loja Shopify — Estado Completo (05/06/2026)
| Item | Status |
|------|--------|
| Tema ao vivo | ✅ v6 MAIN |
| Tema draft v7 | ✅ criado (conversion optimize) |
| Produtos ativos | ✅ 78 produtos |
| Alt text SEO | ✅ 78/78 atualizados (PT-BR) |
| Meta SEO (título+desc) | ✅ 78/78 atualizados |
| Copy emocional (Vera) | ✅ 25+ produtos |
| Coleções com SEO | ✅ 9/9 |
| Cupons ativos | ✅ AURA15 · RITUALAURA · INVERNO20 · BEMVINDA · KIT3 |
| Páginas | ✅ 11 páginas (Contato e Trocas melhoradas) |
| Canal FB/IG | ✅ 50 produtos publicados |
| **Imagens Canva Pro** | ✅ 18 designs editados em PT-BR (incl. Sobre Mim) |
| **Upload Shopify** | ✅ 8 imagens Canva na biblioteca |
| **Imagens nos produtos** | ✅ 17 produtos com imagem Canva Pro secundária |
| Coleção Aromáticos & Velas | ✅ Canva Pro (Vela Âmbar Serenity) |
| Coleção Cerâmicas | ✅ Canva Pro (Vaso Wabi-Sabi) |
| Coleção Minimalismo Funcional | ✅ Canva Pro (Post Feed Japandi) |
| Coleção Botânica Seca | ✅ Canva Pro (Story Inverno 2026) |
| Coleção Chegadas \| Novidades | ✅ Canva Pro (Story Japandi) |
| Coleção Mais Amados | ✅ Canva Pro (Post Feed Japandi) |
| Coleção Destaque da Estação | ✅ Canva Pro (Story Busca @auradecore) |

## Canva Pro — Designs (05/06/2026)
| Design | ID | Status |
|--------|-----|--------|
| Post Instagram Vela Âmbar | DAHJbBgnrbg | ✅ PT-BR + auradecore.com.br |
| Thumbnail Vaso Cerâmica | DAHJbJGwXcg | ✅ PT-BR + URL corrigida |
| Trust Strip Benefícios | DAHJbNTe9Vk | ✅ PT-BR + Suporte 7 dias |
| Bandeja Madeira Natural | DAHJnTxG-q8 | ✅ PT-BR |
| Difusor Aromático | DAHJnasHQ4U | ✅ Aura Decore correto |
| Pampas Naturais | DAHJnd0tEP4 | ✅ traduzido PT-BR |
| Story Japandi Decoração | DAHLkTTiKi0 | ✅ PT-BR + auradecore.com.br |
| Post Feed Japandi | DAHLkViUzZs | ✅ PT-BR + auradecore.com.br |
| Carrossel Vaso Wabi-Sabi (3p) | DAHLujj94Ro | ✅ PT-BR completo |
| Story Busca Japandi | DAHLkUoPFEY | ✅ @auradecore |
| Logo Eucalipto | DAHKZsNIBsE | ✅ Aura Decore |
| Story Coleções Inverno 2026 | DAHLka8m1kQ | ✅ @auradecore |
| Vaso Terracota | DAHJnWXnljo | ✅ Aura Decore |
| Vaso Fosco Bege Areia | DAHJnfB3XK0 | ✅ Aura Decore |
| Banner Japandi | DAHJnQS_epE | ✅ auradecore.com.br |
| Vela Âmbar Sândalo | DAHJnUWLHsU | ✅ Aura Decore |
| Sobre Mim / Institucional | DAHKZ1HaqBQ | ✅ PT-BR + auradecore.com.br (editado e exportado) |

## Desbloqueios pendentes (ação do Eduardo)
1. **Windsor↔Shopify OAuth** → abrir URL e clicar "Instalar app":
   `https://admin.shopify.com/store/10ei3t-sf/oauth/authorize?client_id=b13564b26fad4e6f533e80f9e586dee4&scope=read_customers,read_inventory,read_marketing_events,read_orders,read_products,read_returns&redirect_uri=https://onboard.windsor.ai/shopify/callback&grant_options[]=offline`
2. **Token Shopify shpat_** → Admin → Configurações → Apps → Desenvolver apps → Aura Decore → Credenciais → Revelar token
3. **Billing Google AI** (aistudio.google.com/apikey) → Imagen 4 + Veo 3 (aguarda cartão)
4. **Higgsfield key** → imagens/vídeos premium (claude_desktop_config.json)
5. **Instagram Shopping** → Meta Business Manager → conectar @auradecore + solicitar aprovação (1-5 dias úteis)
