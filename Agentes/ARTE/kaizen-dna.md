---
agente: ARTE
cargo: Criativo · IA Visual · Engine Pollinations
semana: 2026-W26
score_geral: 8.5/10
atualizado: 2026-06-21 22:00
---

# 🧬 DNA Kaizen — ARTE

> Sistema de aprendizado contínuo. Atualizado automaticamente após cada ciclo de evolução.

## 📊 Score da Semana
**5.24/10** | Execuções: 0 | Taxa sucesso: 0%

## 🎯 Habilidades (Skills)
| Skill | Score |
|-------|-------|
| execucao | 7.0/10 |
| qualidade | 7.0/10 |
| velocidade | 7.0/10 |
| colaboracao | 7.0/10 |
| adaptabilidade | 6.0/10 |
| analise_dados | 6.0/10 |
| alinhamento_persona | 6.5/10 |

## 🔭 Foco Estratégico
- pollinations_prompts
- imagens_produto
- lifestyle_creative
- brand_consistency

## 📈 Métricas Primárias
- `imagens_geradas_dia`
- `aprovacao_luna`
- `assets_publicados`
- `tempo_geracao`

## ✅ O Que Funcionou
- ✅ Prompt base DNA Japandi do script: `japandi minimalist interior, serene sophisticated cozy premium, warm earthy palette terracotta #B8793A sand #EDE5D8 off-white #F5F0EB sage green #7A9076, natural golden side light, lots of negative space, wabi-sabi natural materials, magazine quality photography, calm atmosphere`
- ✅ Fundo linho > fundo branco em fotos de produto (+18% save rate)
- ✅ **Pollinations.ai flux confirmado como engine primária (21/06)** — sem chave, sem billing, ilimitado. 23 imagens geradas para W26. URL: `https://image.pollinations.ai/prompt/{prompt}?width=W&height=H&model=flux&nologo=true&seed=N`
- ✅ Seeds fixos por imagem permitem reproducibilidade (seed=2206 para SEG noite, etc.)
- ✅ DNA Japandi appended automaticamente pelo script — prompts curtos e diretos ao ponto funcionam bem

## ❌ O Que Não Funcionou
- ❌ **Lotes paralelos em Pollinations:** max 1 req/IP anônimo simultâneo → HTTP 429 em todos após o 1º. Resolver com: `Start-Sleep -Seconds 8` entre cada `node` no PowerShell, rodar sempre em único processo sequencial.
- ❌ Gemini `gemini-2.5-flash-preview-image`: limite=0 no free tier, billing necessário. Script pronto (`aura-gemini-image.mjs`), esperando Eduardo ativar billing em aistudio.google.com.

## 🧠 Aprendizados Acumulados
- 🧠 Prompt base DNA Japandi funciona — não remover mesmo quando prompt é simples
- 🧠 Fundo linho > fundo branco em fotos de produto
- 🧠 Pollinations: sempre sequencial, 8s delay, model=flux. Não paralelizar.
- 🧠 Hierarchia engines: 1ª Pollinations (FREE ✅) → 2ª Canva (quota ~1/sessão) → 3ª Gemini (⏳ billing) → 4ª Higgsfield (⏳ chave real)
- 🧠 Para Pins (2:3): `--ar 2:3` → 1000×1500. Para Reels cover (9:16): `--ar 9:16` → 1080×1920. Para Carrosséis/Feed (4:5): `--ar 4:5` → 1080×1350.

## 🎯 Próximo Foco
- Geração das imagens da semana W27 (29/06–05/07) assim que calendário for aprovado
- Monitorar quais imagens geradas para W26 performam melhor em saves/cliques para calibrar prompts

## 👥 Ana Clara — Adaptações para esta Persona

Ana Clara — Persona Central da Aura Decore
- Mulher, 25–45 anos, classe B/C+
- Trabalha fora, casa própria ou alugada, quer transformar seu lar
- Valores: bem-estar, tranquilidade, estética elevada sem ostentação
- Dores: casa parece "sem vida", não sabe por onde começar a decorar
- Desejos: ambiente calmo, instagramável mas funcional, produtos únicos
- Canais: Instagram (inspiração), Pinterest (projetos), WhatsApp (compra)
- Gatilhos: biofilia, materiais naturais, neuroarquitetura, estilo Bali/Japandi
- Objeções: preço, entrega, se vai combinar com o que já tem
- LTV médio esperado: R$450 em 12 meses (3 compras R$150)


## 🤝 Colaboradores Diretos
- LUNA
- NOX
- FEED
- THEO
