# 🌐 HUB CENTRAL DE REDES SOCIAIS — Aura Decore

> **Fonte única de verdade** do ecossistema social. Repaginado por **Ive Prime** em 2026-06-21.
> Substitui o fluxo de publicação automática anterior. Modelo operacional: **Loop Engineering**.
> Relacionado: [[plano-redes-sociais]] · [[Pinterest-Estrategia]] · [[_TEMPLATE-Pacote-Hub-Diario]]

---

## 🧭 0. Regras Fundamentais (ordem Eduardo — 21/06/2026)

> Estas regras **sobrepõem** qualquer automação anterior. Toda a equipe opera dentro delas.

1. **Eduardo é o único publicador.** Nenhum agente publica direto nas redes. Postiz/automação ficam em **modo rascunho/entrega**, nunca em auto-post — exceto quando Eduardo pedir explicitamente via `/social publish`.
2. **Conteúdo estático = 100% pronto.** Fotos, carrosséis, designs e Pins são entregues finalizados, na dimensão correta, prontos para Eduardo apenas baixar e postar.
3. **Vídeos e Reels = pacote de roteiro.** Eduardo edita no **CapCut**. Os agentes entregam: roteiro completo, hook (0–3s), legenda sugerida, texto na tela (timecoded), ideias de música e sugestões de edição. **Não** entregam vídeo renderizado.
4. **2 publicações por dia:** manhã (~09h) e final da tarde/noite (~19h–21h), conforme cronograma do dia.
5. **Comandos `/social`** disparam o Hub sob demanda (ver §6).
6. **Tudo em PT-BR**, DNA Japandi, com música ambiente + copy neuromarketing + 8–12 hashtags (regra fixa [[Agentes/NOX|NOX]]).

---

## 🏛️ 1. Arquitetura do Hub

```
                          ┌─────────────────────────┐
                          │   IVE — Orquestradora    │
                          │  Loop Engineering + QA   │
                          └────────────┬────────────┘
                                       │ aprova pacote
        ┌──────────────┬───────────────┼───────────────┬──────────────┐
        ▼              ▼               ▼               ▼              ▼
   ┌─────────┐   ┌─────────┐    ┌──────────┐    ┌─────────┐   ┌──────────┐
   │  MIRA   │   │  LUNA   │    │ VEGA+NOX │    │  VERA   │   │  (Loop)  │
   │Estratégia│  │ Design  │    │ Roteiros │    │  Copy   │   │ Análise  │
   │+Calendário│ │+Pins    │    │  Vídeo   │    │+Pinterest│  │perform.  │
   └─────────┘   └─────────┘    └──────────┘    └─────────┘   └──────────┘
        │              │               │               │              │
        └──────────────┴───────────────┴───────────────┴──────────────┘
                                       ▼
                    📦 PACOTE HUB DIÁRIO (2 publicações)
                                       ▼
                          👤 EDUARDO publica (manhã + noite)
                                       ▼
                    📊 Métricas → alimentam o Loop do dia seguinte
```

---

## 👥 2. Responsabilidades Repaginadas dos Agentes

| Agente | Cargo no Hub | Entrega (estática = pronta · vídeo = roteiro) |
|---|---|---|
| **MIRA** | Diretora de Estratégia, Calendário & SEO Pinterest | 2 temas/dia + calendário semanal + keywords Pinterest/SEO + boards-alvo |
| **LUNA** | Diretora de Design Visual & Pins Estéticos | Imagens, carrosséis e **Pins 1000×1500 prontos** nas dimensões corretas de cada rede |
| **VEGA** | Diretora de Videomaker & Motion | Roteiro completo de Reel/vídeo: estrutura, timing, motion, música, sugestões de edição CapCut |
| **NOX** | Diretor de Conteúdo, Hooks & Reels | Hook poderoso (0–3s), narrativa visual, texto na tela timecoded, legendas de vídeo |
| **VERA** | Diretora de Copywriting & Neuromarketing | Copy final por rede (IG, FB, TikTok) + **descrição SEO Pinterest** + hashtags 8–12 |
| **IVE** | Orquestradora, QA & Loop Engineering | Revisa, aprova, monta o Pacote Hub Diário e roda o ciclo de melhoria |

> Agentes de apoio existentes permanecem disponíveis: **ARTE** (geração de imagens via IA), **FEED** (montagem do pacote/rascunho Postiz), **ECHO** (auditoria de métricas), **REX** (versão ads — só fase paga).

### 🖼️ Engines de produção de imagem (hierarquia)
| Prioridade | Engine | Uso | Status |
|---|---|---|---|
| **1ª (FREE)** | **Pollinations.ai** flux (`Scripts/aura-pollinations-image.mjs`) | Fotos/cenas japandi — **grátis, sem chave, sem limite** | ✅ **ATIVO** (testado 21/06) |
| 2ª | **Canva** (MCP) | Carrosséis editáveis, texto/layout, brand templates | ✅ ativo (quota ~1 ger./sessão) |
| 3ª | **Gemini** `gemini-2.5-flash-image` (`Scripts/aura-gemini-image.mjs`) | Fotorrealismo premium | ⏳ chave OK, falta **billing** ([[../Setup/gemini-image-integration|setup]]) |
| 4ª | **Higgsfield** (MCP) | Product-photoshoot premium | ⏳ chave placeholder |

> **Pipeline free atual:** Pollinations gera a foto/cena → Canva aplica texto/layout quando precisa de carrossel ou Pin com tipografia. Zero custo.

---

## 🔁 3. Loop Engineering — o motor de melhoria contínua

O Hub não é uma lista de tarefas: é um **ciclo fechado** que aprende a cada volta.

```
   ① PLANEJAR ─────► ② GERAR ─────► ③ REVISAR ─────► ④ ENTREGAR
   (MIRA: temas      (LUNA estático  (IVE QA contra   (Pacote Hub
    + calendário)     VEGA/NOX roteiro  checklist §5)   Diário pronto)
        ▲             VERA copy)                            │
        │                                                   ▼
   ⑥ APRENDER ◄──────────────────── ⑤ MEDIR ◄──────── 👤 EDUARDO publica
   (kaizen-dna de      (ECHO coleta métricas 24–48h:
    cada agente)        saves, alcance, CTR, comentários)
```

**Regras do Loop:**
- **Cada ciclo = 1 dia.** O aprendizado do dia D vira input do planejamento do dia D+1.
- **Métrica-âncora por formato:** Reel → retenção/saves · Carrossel → saves/compartilhamentos · Pin → impressões/cliques no link · Story → respostas/cliques.
- **Vencedor replica, perdedor muta:** todo formato com performance top-20% vira template-base; bottom-20% é reescrito (hook, copy ou design) no próximo ciclo.
- **Registro:** cada agente anota o aprendizado do dia no seu `kaizen-dna.md`. IVE consolida no relatório semanal.
- **Gate de qualidade:** nenhum pacote entra no Pacote Diário sem passar o checklist §5.

---

## 📦 4. Fluxo Diário do Hub (2 publicações)

| Etapa | Responsável | Saída |
|---|---|---|
| 1. Definir os 2 temas do dia + slot manhã/noite | **MIRA** | Briefing do dia + atualização do calendário |
| 2. Gerar estáticos prontos (imagem/carrossel/Pin) | **LUNA** (+ARTE) | Arquivos finais nas dimensões corretas |
| 3. Produzir roteiro de vídeo/Reel (se houver no dia) | **VEGA + NOX** | Roteiro CapCut: hook, timing, texto na tela, música, edição |
| 4. Escrever copy por rede + descrição Pinterest + hashtags | **VERA** | Copy final IG/FB/TikTok/Pinterest |
| 5. Revisar, aprovar e montar o pacote | **IVE** | 📦 **Pacote Hub Diário** (ver template) |
| 6. Publicar (manhã + noite) | 👤 **Eduardo** | Posts no ar |
| 7. Coletar métricas e alimentar o Loop | **ECHO → IVE** | Input do ciclo D+1 |

**Distribuição padrão das 2 publicações:**
- **Manhã (~09h):** peça de maior alcance — Reel (roteiro) **ou** Pin estético + Story de bastidor.
- **Noite (~19h–21h):** peça de conversão/engajamento — Carrossel **ou** foto única + Story com enquete/CTA.

Cada peça é **multicanal**: adaptada para Instagram (@auras_decore), Facebook (Página Comercial + Perfil Pessoal), TikTok (@aurasdecore) e Pinterest (@aurasdecore).

---

## ✅ 5. Checklist de Qualidade (gate da IVE)

Nenhuma peça é aprovada sem **todos** os itens:

**Universal**
- [ ] PT-BR, DNA Japandi (sereno, minimalista, premium, quente)
- [ ] Paleta correta: Terra `#B8793A` · Terracota `#D4A574` · Areia `#EDE5D8` · Off-white `#F5F0EB` · Verde sálvia `#7A9076`
- [ ] Copy com neuromarketing sutil (resolve dor → cria desejo), sem urgência forçada
- [ ] 8–12 hashtags magnéticas (nicho + volume médio + produto + trending + marca)
- [ ] CTA claro + `auradecore.com.br`
- [ ] Música ambiente indicada (calma/moderna/lofi-japandi)

**Estático (entregar 100% pronto)**
- [ ] Dimensão correta da rede (ver §7)
- [ ] Logo Aura sutil (≈15% opacidade, canto inferior direito)
- [ ] Resolução alta, sem ruído, fundo neutro

**Vídeo/Reel (entregar roteiro CapCut)**
- [ ] Hook nos primeiros 3 segundos
- [ ] Estrutura timecoded: Hook → Problema → Solução → Prova → CTA
- [ ] Texto na tela com timecodes
- [ ] 2 sugestões de música + sugestões de transição/edição
- [ ] Legenda final pronta para colar

**Pinterest**
- [ ] Pin vertical 1000×1500 (2:3)
- [ ] Título SEO (≤100 chars) + descrição rica com 2–3 keywords
- [ ] Board-alvo definido + link da loja

---

## ⚡ 6. Comandos Rápidos do Hub

| Comando | O que faz | Quem dispara |
|---|---|---|
| `/social day` | Gera o pacote completo das 2 publicações do dia | MIRA→LUNA→VEGA/NOX→VERA→IVE |
| `/social week` | Calendário editorial + pacotes da semana | MIRA lidera |
| `/social theme [tema]` | Pacote completo para um tema específico | Pipeline full |
| `/social pinterest` | Pins prontos (verticais) + descrições SEO + ideias de boards | LUNA + VERA + MIRA |
| `/social review` | IVE revisa e aprova o pacote do dia (checklist §5) | IVE |
| `/social publish today` | Prepara/publica onde permitido (só sob ordem de Eduardo) | FEED (rascunho) |
| `/social hub status` | Relatório do status atual do Hub | IVE |
| `/social loop` | Ativa o Loop Engineering (medir → aprender → ajustar) | IVE + ECHO |

> Os comandos mapeiam para o pipeline de agentes da Aura. Saída sempre em `Redes Sociais/posts-prontos/` (estáticos) e roteiros de vídeo no mesmo pacote diário.

---

## 📐 7. Especificações por Rede

| Rede | Conta | Formatos principais | Dimensões |
|---|---|---|---|
| **Instagram** | @auras_decore | Reel · Carrossel · Foto · Story | Reel 9:16 (1080×1920) · Feed 1:1 (1080×1080) e 4:5 (1080×1350) · Story 9:16 |
| **Facebook** | Página Comercial + Perfil Pessoal | Foto · Carrossel · Reel · Story | Igual IG; link clicável na legenda |
| **TikTok** | @aurasdecore | Vídeo curto (roteiro CapCut) | 9:16 (1080×1920), 15–45s |
| **Pinterest** | @aurasdecore | **Pin estático vertical** · Idea Pin | 2:3 — **1000×1500** (foco em descoberta orgânica) |

---

## 🌲 8. Estratégia Pinterest (resumo — detalhe em [[Pinterest-Estrategia]])

Pinterest é canal de **tráfego orgânico de longo prazo** — cada Pin é um ativo permanente de SEO visual.
- **3 Pins/dia** (TER/QUI/SÁB prioritários), horário de pico 19h–21h.
- **Boards temáticos:** Japandi · Wabi-Sabi · Minimalismo · Refúgio em Casa · Rituais & Aromas · Antes & Depois · Presentes Aura.
- **Cada Pin:** imagem 1000×1500 + texto sobreposto sutil + título SEO + descrição com keywords + link direto do produto.
- **Loop Pinterest:** MIRA monitora impressões/cliques por board e realimenta keywords no ciclo seguinte.

---

## 📊 9. Painel do Loop (preencher a cada ciclo)

| Data | Tema manhã | Tema noite | Formato vencedor | Métrica-âncora | Aprendizado → D+1 |
|---|---|---|---|---|---|
| _ex 21/06_ | _Reel ritual_ | _Carrossel 5 objetos_ | _Carrossel_ | _saves +18%_ | _Carrossel "lista" performa → repetir formato_ |

> ECHO atualiza após 24–48h. IVE consolida tendências no relatório semanal e ajusta o calendário da MIRA.

---

*Hub vivo. Repaginado por Ive Prime — 2026-06-21. Próxima revisão estrutural: mensal.*
