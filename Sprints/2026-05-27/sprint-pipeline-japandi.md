---
data: 2026-05-27
sprint: pipeline-completo-japandi
status: concluido
---

# Sprint 2026-05-27 — Pipeline Completo Japandi

## Infraestrutura Corrigida
- **Fix aplicado**: _FORCE_OLLAMA = False em crew_agents.py → Groq reativado nas crews
- **Fix**: groq_client = Groq(timeout=10) — evita timeout infinito no cascade
- **Fix**: cascade com fallback para llama-3.1-8b-instant quando 70B rate-limited
- **Fix**: modelo inválido claude-opus-4-7 → claude-opus-4-5

## Post Gerado — Vaso Cerâmica Japandi Flores Secas

**Headline:** Beleza Imperfeita
**Caption:** "Encontre a beleza na simplicidade. Nosso vaso cerâmico Japandi Wabi-Sabi, com flores secas, é um tributo à natureza e à elegância. Descubra mais em: auradecore.com.br"
**Imagem:** generated_images/vaso_japandi_flores_secas.jpg (1080x1080)
**Horário ideal:** 18h-20h
**Status publicação:** Aguardando FB_PAGE_TOKEN no .env

## KAI — Validação Produtos (todos APROVADOS, margem 60%)

| Produto        | Custo BRL | Preço BRL | Margem% | Status   |
|----------------|-----------|-----------|---------|----------|
| Vaso ceramica  | R$ 46,40  | R$ 116,00 | 60%     | APROVADO |
| Almofada linho | R$ 58,00  | R$ 145,00 | 60%     | APROVADO |
| Pampas seca    | R$ 34,80  | R$ 87,00  | 60%     | APROVADO |
| Bandeja bambu  | R$ 52,20  | R$ 130,50 | 60%     | APROVADO |
| Difusor        | R$ 58,00  | R$ 145,00 | 60%     | APROVADO |

## REX — Meta Ads Lançamento

- **Fase 1 (awareness):** Budget R-1.000/dia, interesses decoração/japandi/minimalismo
- **Fase 2 (conversão):** Budget R.000-2.000/dia + retargeting
- **Corte:** ROAS < 1.5x → reduzir | ROAS < 1x → pausar
- **CTR alvo:** > 0.5% | CPM máximo: R

## MIRA — SEO Keywords

| Keyword                                        | Vol/mês | Dif |
|------------------------------------------------|---------|-----|
| vaso cerâmica japandi para flores secas        | 210     | 60  |
| decoração japandi com vaso cerâmica            | 140     | 65  |
| vaso cerâmica wabi-sabi para flores secas      | 110     | 55  |
| arranjo flores secas em vaso cerâmica japandi  | 90      | 50  |
| vaso cerâmica japandi para arranjo flores secas| 70      | 45  |

## NOX — Calendário 7 Posts

- Seg 19h — Produto: "Descubra o segredo para criar um lar japonês moderno!"
- Ter 9h — Educativo: "Você sabe o que é o estilo Japandi?"
- Qua 14h — Lifestyle: "Imagine acordar todos os dias em um lar que te inspira!"
- Qui 19h — Produto: "Ilumine seu lar com estilo!" (lâmpada cedro)
- Sex 9h — Educativo: "A cor é fundamental no estilo Japandi"
- Sáb 14h — Lifestyle: "O que torna um lar Japandi tão especial?"
- Dom 19h — Promocional (pendente)

## SOL — CRO

- D+1: Email AURA10 (10% desconto, 24h)
- D+3: Urgência ("última chance de aproveitar")
- D+7: AURAVIP15 (15% desconto VIP)
- Bundle: Vaso + Pampas seca (produto natural complementar)
- Upsell: Frete grátis acima R\

## GUARD — Status Financeiro
- Alerta: 🟡 AMARELO (fase pré-lançamento)
- Ação: Implementar monitoramento diário antes de escalar ads

## PIPE — Workflow n8n (estrutura)
- Trigger: Cron 9h/14h/19h
- Node 1: Lê posts-prontos/*.md do vault
- Node 2: Extrai image_url + caption
- Node 3: POST graph.facebook.com/{page_id}/photos com retry 3x

## Imagens Geradas
- vaso_japandi_flores_secas.jpg (1080x1080) ✓
- almofada_linho_japandi.jpg (1080x1080) ✓
- bandeja_bambu_japandi.jpg (1080x1080) ✓

## Próximas Ações
1. [ ] Obter FB_PAGE_TOKEN (ver instruções em Redes Sociais/posts-prontos/)
2. [ ] Publicar post vaso ceramica (pronto em posts-prontos/)
3. [ ] Implementar workflow n8n para publicação automática
4. [ ] Configurar META_ACCESS_TOKEN para Instagram
5. [ ] Groq 70B reseta meia-noite UTC — crews voltam à velocidade normal amanhã
