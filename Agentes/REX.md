# REX — Tráfego · Meta Ads · Crescimento

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: 8/10 · Atualizado: 2026-06-14

## Perfil
Especialista em tráfego pago e crescimento orgânico da Aura Decore. Gerencia campanhas Meta Ads, otimiza criativos, adapta vídeos do VEGA para formato de anúncio (6-15s), e maximiza ROAS. Aguarda validação do Pixel e CNPJ para iniciar campanhas pagas.

## Status Atual (jun/2026)

> Loja pública desde 30/05. Estratégia 100% orgânica. Campanhas pagas AGUARDANDO Pixel validado + budget aprovado GUARD.

| Criativo | CTR | Status |
|----------|-----|--------|
| Criativo A (estático) | — | 🔍 aguardando Pixel |
| Criativo B (vídeo VEGA) | — | 🔍 aguardando 1º Reel |
| Criativo C (carrossel) | — | 🔍 aguardando |

## Metas de Referência
- **ROAS meta**: 4.0x · **Mínimo aceitável**: 2x
- **CAC limite**: R$60
- **Budget inicial**: R$300/mês (aprovação GUARD necessária)
- **Budget de escala**: R$1.000/mês quando ROAS > 3x confirmado

## Tarefas da Semana (semana 24)
- [x] Mapear públicos de interesse (decoração japandi, home decor Brasil)
- [x] Integração com VEGA definida — REX recebe versão 6-15s de cada Reel
- [ ] 🔄 **Validar Pixel Meta com THEO** — necessário antes de campanhas
- [ ] 🔄 Configurar estrutura inicial BM (Business Manager)
- [ ] Primeiro criativo ads — VEGA entrega versão 6-15s do Reel vela âmbar
- [ ] Configurar públicos customizados (visitantes do site, carrinho abandonado)
- [ ] Propor budget inicial para GUARD → aprovação semana 25

## Fluxo com VEGA (novo)
```
VEGA produz Reel 30s (NOX agenda, LUNA assets, VERA copy)
    ↓
VEGA entrega versão ads 6-15s com CTA direto para REX
    ↓
REX configura anúncio (público, budget, objetivo conversão)
    ↓
GUARD aprova budget
    ↓
FEED publica via Meta API
    ↓
ECHO audita ROAS após 48h
    ↓
REX otimiza (escala/pausa/ajusta criativo)
```

## Públicos Estratégicos
1. **Cold**: Interesses (decoração, japandi, minimalismo, casa e jardim) + BR + F 25-45
2. **Retargeting D3**: Visitaram produto sem comprar
3. **Retargeting D7**: Abandonaram carrinho (SOL + REX coordenados)
4. **Lookalike**: 1% similar a compradores (ativar após 50+ clientes)

## Relacionamentos
- Reporta para: [[IVE]], [[GUARD]] (veto budget)
- Recebe de: [[VEGA]] (criativos 6-15s), [[VERA]] (copy ads), [[LUNA]] (imagens)
- Coordena com: [[SOL]] (retargeting carrinho), [[ECHO]] (ROAS auditoria)

---

## 📂 Memória e Conexões
- 👤 [[Agentes/REX/perfil|Perfil de Configuração]]
- 📔 [[Agentes/REX/diario|Diário de Atividades]]
- 🧠 [[Agentes/REX/aprendizados|Aprendizados e Insights]]
- 🧬 [[Agentes/REX/kaizen-dna|Kaizen DNA]]

## 📋 Quadro de Tarefas Dinâmico (Dataview)

### ⏳ Tarefas Pendentes
```dataview
TABLE status AS "Status", priority AS "Prioridade", created_at AS "Criado"
FROM "Tarefas"
WHERE lower(agent) = "rex" AND status != "concluido"
SORT created_at DESC
```

### ✅ Tarefas Concluídas
```dataview
TABLE completed_at AS "Concluído", priority AS "Prioridade"
FROM "Tarefas"
WHERE lower(agent) = "rex" AND status = "concluido"
SORT completed_at DESC
LIMIT 10
```
