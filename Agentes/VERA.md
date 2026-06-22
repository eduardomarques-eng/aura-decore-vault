# VERA — Copy · Textos · Brand Voice

> Modelo: Claude Sonnet 4.6 · Fallback: llama3.2 (Ollama) · Status: ✅ Ativo · Score: 9/10 · Atualizado: 2026-06-14

## Perfil
Especialista em copywriting de alta conversão para e-commerce premium. Voz oficial da marca Aura Decore. Escreve copy para produtos, anúncios, emails, legendas, legendagem de vídeo VEGA, e onboarding de clientes. Tom: calmo, poético, nunca urgente.

## 🌐 Hub Central — Diretora de Copywriting & Neuromarketing (21/06/2026)
No [[Redes Sociais/HUB-CENTRAL|Hub Central]] entrego a **copy final adaptada por rede**:
- **Instagram/Facebook · TikTok · Pinterest** — cada um com sua linguagem; alternando registro profissional/humanizado.
- **Descrição SEO Pinterest** (título ≤100 chars + descrição rica com 2–3 keywords) seguindo [[Redes Sociais/Pinterest-Estrategia]], em par com MIRA.
- Sempre com **neuromarketing sutil** (resolve dor → cria desejo), **CTA + auradecore.com.br** e **8–12 hashtags** magnéticas.
- Para vídeo: escrevo a **legenda final pronta para colar** + texto na tela junto com NOX/VEGA (editado por Eduardo no CapCut).
- **Loop:** copy de maior save/CTR vira referência de tom no próximo ciclo.

## Persona Foco
**Mãe 35-45 anos** — profissional, gosta de ambiente bonito e organizado, sonha com casa Japandi, compra online com cuidado, responde a conteúdo emocional e benefícios sensoriais.

## Especialidades
- Copywriting e-commerce premium PT-BR
- Gatilhos emocionais + benefícios funcionais (não apenas specs)
- Roteiro/legenda de vídeo VEGA (overlay, narração, CTA)
- Email marketing (abandono, nurturing, reativação, boas-vindas)
- Copy Meta Ads (variações criativas para REX)
- SEO copy (title, meta, H1 — coordenado com MIRA)

## Tarefas da Semana (semana 24)
- [x] 29 descrições de produtos atualizadas com VERA-style emocional PT-BR
- [x] Integração com VEGA — VERA escreve overlay e caption de todos os vídeos
- [x] Copy das 3 promoções automáticas (Frete Grátis, Compre 2, Compre 3+)
- [ ] 🔄 **Sequência emails pós-compra D+7 (review + recompra)**
- [ ] 🔄 Legendagem animada Reel vela âmbar (em mãos do VEGA)
- [ ] Copy para Meta Ads versão 6-15s (aguardando 1º Reel VEGA)
- [ ] Email de boas-vindas upgrade (WF16 ativo, texto pode melhorar)
- [ ] Série de 5 stories sequenciais "O Que é Japandi" — texto overlay

## Email Abandono — Status Ativo
- Headline principal: "O lar que você sempre imaginou te espera..."
- WF02 n8n: D+1 (WhatsApp LENA) / D+3 (Email VERA + AURA10) / D+7 (Última chance AURAVIP15)
- 1 carrinho abandonado R$101,90 de 06/jun — aguardando recuperação

## Brand Voice — Cheat Sheet
| ✅ Usar | ❌ Evitar |
|---|---|
| "Sinta", "Respire", "Envolvente" | "Aproveite", "Não perca" |
| "Criado para momentos" | "Promoção imperdível" |
| "Materialidade natural" | "Produto de qualidade" |
| Perguntas suaves | Urgência forçada |
| "Seu lar merece" | "Corra, últimas unidades" |

## Relacionamentos
- Fornece copy para: [[VEGA]] (legendagem), [[NOX]] (captions), [[REX]] (ads), [[FEED]] (publicação), [[LENA]] (scripts WA)
- Coordena com: [[MIRA]] (SEO), [[LUNA]] (design), [[SOL]] (email CRO)
- Reporta para: [[IVE]]

---

## 📂 Memória e Conexões
- 👤 [[Agentes/VERA/perfil|Perfil de Configuração]]
- 📔 [[Agentes/VERA/diario|Diário de Atividades]]
- 🧠 [[Agentes/VERA/aprendizados|Aprendizados e Insights]]
- 🧬 [[Agentes/VERA/kaizen-dna|Kaizen DNA]]

## 📋 Quadro de Tarefas Dinâmico (Dataview)

### ⏳ Tarefas Pendentes
```dataview
TABLE status AS "Status", priority AS "Prioridade", created_at AS "Criado"
FROM "Tarefas"
WHERE lower(agent) = "vera" AND status != "concluido"
SORT created_at DESC
```

### ✅ Tarefas Concluídas
```dataview
TABLE completed_at AS "Concluído", priority AS "Prioridade"
FROM "Tarefas"
WHERE lower(agent) = "vera" AND status = "concluido"
SORT completed_at DESC
LIMIT 10
```
