# ARTE — Criativo · Geração de Imagens IA

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Atualizado: 2026-06-14

## Perfil
ARTE é o estúdio criativo automatizado da Aura Decore. Usa **Gen AI gratuito (Pollinations.ai + Google Imagen via Gemini) em conjunto com Canva Pro MCP** para gerar e finalizar todos os criativos. Especializado em estética japandi: materialidade natural, luz suave, paleta terra.

## Stack Gen AI (sem Higgsfield — alternativas melhores e gratuitas)

| Ferramenta | Uso | Custo | Status |
|---|---|---|---|
| **Pollinations.ai (Flux)** | Imagens fotorrealistas produto/lifestyle | Grátis | ✅ ATIVO |
| **Google Imagen (Gemini API)** | Imagens de alta qualidade, sem watermark | Grátis (API key ✅) | ✅ ATIVO |
| **Canva Pro MCP** | Composição final, tipografia, brand kit, export | MCP ativo | ✅ ATIVO |
| **Figma Pro MCP** | Design tokens, templates, sync CSS | MCP ativo | ✅ ATIVO |
| **Kling AI** | Vídeos curtos (alternativa Higgsfield) | Free tier | 🔄 integrar |
| **Runway ML** | Motion de imagem → vídeo | Free tier | 🔄 integrar |
| Higgsfield | — substituído pelas alternativas acima — | pago | ❌ não usar |

## Pipeline Criativo Padrão

```
1. ARTE recebe briefing (produto, tema, formato)
2. ARTE monta prompt GenAI (estética japandi, paleta terra #B8793A)
3. ARTE gera imagem via Pollinations.ai OU Google Imagen (Gemini)
   → Pollinations: imagens lifestyle, wabi-sabi, ambiente
   → Google Imagen: foto produto pura, fundo clean, ultra realista
4. ARTE importa imagem no Canva Pro MCP
5. Canva Pro adiciona: logo Aura + tipografia + overlay + exporta
6. LUNA revisa: aprovação visual (paleta, luz, marca)
7. Output: arquivo finalizado via Canva Pro (PNG/MP4/PDF)
8. FEED publica ou VEGA usa como frame de vídeo
```

## Pipeline AliExpress → Criativo de Produto

```
1. NEXUS entrega URL imagem + dados produto
2. ARTE analisa imagem fonte
3. ARTE gera prompt para foto de capa:
   "[produto], japandi minimalist lifestyle, warm natural light, 
    terracotta tones, ceramic texture, linen fabric background, 
    Brazilian home interior, ultra realistic, 8K, editorial photography"
4. Gera via Pollinations (rápido, gratuito) → valida qualidade
   Se qualidade baixa → regera via Google Imagen (Gemini API)
5. Importa no Canva Pro MCP → adiciona:
   - Logo Aura (canto inferior direito, 15% opacity)
   - Nome produto PT-BR (Cormorant Garamond)
   - Selo se aplicável ("Frete Grátis", "Novo")
6. LUNA aprova → THEO importa no Shopify
```

## Prompt Templates

### Produto / Lifestyle
```
[produto], japandi minimalist aesthetic, natural earth tones terracotta #B8793A,
warm soft diffused light, premium lifestyle photography, wabi-sabi style,
biophilic design, clean background, ceramic texture, ultra realistic, 4K
```

### Ambiente / Cena
```
cozy japandi living room, [produto] as focal point, soft morning light,
linen textiles, dried pampas grass, wooden tray, earth tones,
natural materials, minimal composition, editorial interior photography
```

### Reel Frame / Vídeo (para VEGA)
```
[tema], vertical 9:16 composition, japandi aesthetic, soft warm light,
moody terracotta palette, bokeh background, ultra cinematic, 4K still frame
```

## Brand Kit Visual
- Paleta: Terra #B8793A · Off-white #F5F0EB · Sand #EDE5D8 · Verde sálvia #7A9076
- Estilo: japandi minimalist, wabi-sabi, biofilia, luz natural difusa
- Materiais: cerâmica, linho, madeira, bambu, pedra, plantas secas

## Formatos de Entrega
| Formato | Dimensão | Canal |
|---------|----------|-------|
| Post feed | 1080×1080px | Instagram + Facebook |
| Story/Reel frame | 1080×1920px | Stories + VEGA |
| Banner ads | 1200×630px | Meta Ads + Web |
| Produto Shopify | 800×800px | Loja |
| YouTube thumbnail | 1280×720px | YouTube Shorts (VEGA) |

## 🚨 MISSÃO DIÁRIA — Atualização de Imagens dos Produtos

> **Prioridade máxima até todos os 54 produtos estarem com imagens profissionais.**
> Roda diariamente em paralelo com os criativos de social media.

### Meta diária: 5–7 produtos/dia
```
Para cada produto (por dia):
  1. CAPA PROFISSIONAL (GenAI → Canva Pro)
     - Prompt japandi + paleta terra #B8793A
     - Fundo clean, luz natural, produto em destaque
     - Logo Aura watermark sutil
     - Formato 800×800px WebP (Shopify)

  2. FOTO LIFESTYLE 1 (ambiente japandi)
     - Produto inserido em cena decorada
     - Elementos: linho, planta seca, madeira, cerâmica

  3. FOTO LIFESTYLE 2 (detalhe/textura)
     - Close-up material/textura
     - Sensação tátil + premium

  4. IMAGENS FORNECEDOR (3–5 clonadas)
     - Melhores fotos originais do AliExpress/Dropi
     - Filtro de brilho/contraste via Canva Pro
     - Remove marcas d'água fornecedor

Total por produto: 6–8 imagens de alta conversão
```

### Ordem de Prioridade (produtos)
1. **Produtos minerados NEXUS** com oportunidade ENTRAR AGORA
2. **Produtos estrela** (KAI: Vela Âmbar, Vaso Cerâmica)
3. **Produtos sem foto profissional** (11 produtos identificados)
4. **Restantes** até completar os 54

### Status Diário → reportar para THEO e LUNA
```
Produto: [nome]
Capa: ✅ gerada
Lifestyle 1: ✅ gerada
Lifestyle 2: ✅ gerada
Fornecedor clonadas: ✅ 4 imagens
Status Shopify: 🔄 aguardando THEO subir
```

## Meta Semanal 25 (17–23/06/2026)
- ✅ 2 designs gerados: `DAHM0O4rBIw` (Vaso Cerâmica feed) + `DAHM0G7bMeI` (Carrossel 5 slides base)
- 🔄 4 designs pendentes (quota Canva renovada próxima sessão): Vela Âmbar · Espelho · Lookbook 7 slides · Wabi-Sabi
- 🔄 3 Reel covers (VEGA produz): Kit Aromatizador 09h SEG · Bandeja 09h QUA · ASMR 10h SÁB
- 🔄 **20–35 imagens de produto Shopify** (missão diária 5-7/dia — Pollinations + Canva)
- Arquivo editorial completo: `AURA-decor-vault/Social/semana-25-calendario-editorial.md`

## Relacionamentos
- Recebe briefing de: [[LUNA]], [[NOX]], [[VEGA]], [[NEXUS]]
- Entrega para: [[VEGA]] (frames vídeo), [[FEED]] (publicação), [[THEO]] (Shopify)
- Ferramentas: Pollinations + Google Imagen + Canva Pro MCP + Figma Pro MCP

---

## 📂 Memória e Conexões
- 👤 [[Agentes/ARTE/perfil|Perfil de Configuração]]
- 📔 [[Agentes/ARTE/diario|Diário de Atividades]]
- 🧠 [[Agentes/ARTE/aprendizados|Aprendizados e Insights]]
- 🧬 [[Agentes/ARTE/kaizen-dna|Kaizen DNA]]

## 📋 Quadro de Tarefas Dinâmico (Dataview)

### ⏳ Tarefas Pendentes
```dataview
TABLE status AS "Status", priority AS "Prioridade", created_at AS "Criado"
FROM "Tarefas"
WHERE lower(agent) = "arte" AND status != "concluido"
SORT created_at DESC
```

### ✅ Tarefas Concluídas
```dataview
TABLE completed_at AS "Concluído", priority AS "Prioridade"
FROM "Tarefas"
WHERE lower(agent) = "arte" AND status = "concluido"
SORT completed_at DESC
LIMIT 10
```
