# 🌿 Integração Canva Pro + Gemini + Postiz — Aura Decore

Este documento detalha o setup e a integração completa dos sistemas de IA e redes sociais da Aura Decore na conta `eduardo.marques.arq@gmail.com`.

---

## 1. 🎨 Canva Pro (API Connect)
A integração com o Canva Pro permite que a LUNA liste designs e que o FEED e o THEO exportem e publiquem criativos diretamente na loja Shopify e redes sociais.

### Passo a passo para obtenção do PAT:
1. Faça login em [canva.com](https://www.canva.com) com a conta **`eduardo.marques.arq@gmail.com`**.
2. Acesse as **Configurações da Conta** (Account Settings) → **Aplicativos e Integrações** (Apps & Integrations).
3. Vá para a aba **Desenvolvedor** (Develop) e clique em **Criar Nova Integração** (Create Integration).
4. Gere um **Token de Acesso Pessoal (PAT)**.
5. Certifique-se de habilitar os seguintes escopos mínimos:
   - `asset:read`
   - `asset:write`
   - `design:content:read`
   - `brand_template:content:read`
6. Copie o token gerado e cole no `.env` do backend:
   ```env
   CANVA_API_TOKEN=eyJ... (sua_chave_pat)
   ```

---

## 2. ♊ Gemini Advanced (Google AI Key)
O Gemini Advanced serve como suporte para a criação de copys iniciais, roteiros e geração de variações por agentes como a VERA e o NOX.

### Passo a passo para obtenção da API Key:
1. Acesse o [Google AI Studio](https://aistudio.google.com) usando a conta **`eduardo.marques.arq@gmail.com`**.
2. Clique em **Get API Key** (Obter Chave de API).
3. Crie uma chave de API vinculada a um projeto Google Cloud (para suporte a Imagen/Veo sem cota zerada, certifique-se de ativar o faturamento/billing no console do AI Studio).
4. Copie a chave e insira no `.env` do backend:
   ```env
   GOOGLE_AI_KEY=AIzaSy... (sua_chave_gemini)
   ```

---

## 3. 🔌 Publicação Automática (Postiz / n8n)
O agendamento automático é gerenciado no ecossistema da Aura Decore usando o workflow n8n **WF08 (Post Diário Redes Sociais)** que dispara o `social_agent.py` na cadência correta ou envia alertas em caso de tokens expirados.

### Cadência de Publicação Recorrente (Segunda a Domingo):
- **Instagram**: 21-25 publicações/semana
  - **Reels**: 7/semana (diário às 09h00)
  - **Carrosséis / Posts Estáticos**: 8-10 Carrosséis + 6-8 Single Posts (diário às 14h00/18h00)
  - **Stories**: Diários (08h00, 12h00, 17h00, 19h00, 21h00) com enquetes e CTAs.
- **Facebook**: 12-15 publicações/semana (espelhamento automático via Graph API para página comercial e Chrome/Playwright para perfil pessoal).
- **TikTok**: 15-20 vídeos/semana (VEGA + Chrome Automation Playwright ativa em `social_agent.py`).

### Pilares de Distribuição:
- **60% Inspiracional/Educacional**: Foco em neuroarquitetura, biofilia e wabi-sabi.
- **25% Lifestyle**: Ambientes montados e estética de refúgio.
- **15% Promocional Suave**: Destaques de produtos, descontos elegantes e ofertas de frete grátis.

---

## 🤖 Memória Compartilhada e Agentes Ativos
Todos os 20 agentes (incluindo IVE, LUNA, VEGA, NOX, VERA, MIRA, FEED, REX) operam sincronizados compartilhando dados em tempo real no diretório local de notas Obsidian da Aura Decore (`C:\Users\erick\AURA-decor-vault`).
- **Logs de atividade** diários são gravados em `Logs/activity-[DATA].jsonl`.
- **Estratégias sazonais** são registradas em `FullThrottle/` e `Planejamento/`.
