# 🖼️ Integração Gemini — Produção de Imagens do Hub

> Integrado por **Ive Prime** — 2026-06-21 · Conta: **eduardo.marques.arq@gmail.com**
> Engine **primária** de imagens do [[../Redes Sociais/HUB-CENTRAL|Hub Central]]. Script: `Scripts/aura-gemini-image.mjs`.

## Por que Gemini
- **Sem limite de quota por sessão** (diferente do Canva, que travou após 1 geração).
- Modelo **`gemini-2.5-flash-image`** (Nano Banana) — fotorrealismo forte, ótimo para cenas japandi de produto/ambiente.
- Custo baixo por imagem, API direta, roda local (Node 24 já instalado).

## Hierarquia de engines no Hub (nova)
| Prioridade | Engine | Uso |
|---|---|---|
| 1ª | **Gemini** (`aura-gemini-image.mjs`) | Geração principal de fotos/cenas (estáticos prontos) |
| 2ª | **Canva** (MCP) | Layout com texto, carrosséis editáveis, brand templates |
| 3ª | **Higgsfield** (MCP/CLI) | Premium product-photoshoot — quando a chave real for configurada |

## ⚙️ Setup (você faz uma vez — 2 min)
1. Acesse **https://aistudio.google.com/apikey** logado como `eduardo.marques.arq@gmail.com`.
2. **Create API key** → copie.
3. No PowerShell:
   ```powershell
   setx GEMINI_API_KEY "SUA_CHAVE_AQUI"
   ```
   Feche e reabra o terminal.
4. Teste:
   ```powershell
   node "C:\Users\erick\AURA-decor-vault\Scripts\aura-gemini-image.mjs" "vela âmbar acendendo em canto japandi, fumaça suave" teste.png --ar 9:16
   ```

## Uso no fluxo diário
```powershell
# Frame do Reel (9:16)
node Scripts\aura-gemini-image.mjs "close de vela âmbar acendendo, fumaça suave, canto japandi" reel-frame.png --ar 9:16

# Pin do Pinterest (2:3)
node Scripts\aura-gemini-image.mjs "vaso cerâmica wabi-sabi com flores secas em estante minimalista" pin.png --ar 2:3

# Slide de carrossel (4:5)
node Scripts\aura-gemini-image.mjs "bandeja de mármore com difusor de aromas na sala" slide.png --ar 4:5
```

O **DNA Japandi** (paleta, luz, estética) é anexado automaticamente a todo prompt — use `--no-dna` só se quiser desligar.

## Papel dos agentes
- **ARTE** dispara o script com os prompts da cena do dia.
- **LUNA** revisa o resultado contra o checklist de qualidade do Hub e leva para o Canva só quando precisa de texto/layout sobreposto.
- **IVE** valida no QA do pacote.

## Status
- [x] Script criado e pronto (`Scripts/aura-gemini-image.mjs`)
- [x] Documentado no workflow do Hub
- [x] `GEMINI_API_KEY` configurada (setx) — **chave válida, autenticação OK** (21/06)
- [ ] ⚠️ **BLOQUEIO: billing.** Teste retornou HTTP 429 `free_tier_requests limit: 0` para `gemini-2.5-flash-preview-image`. Modelos de imagem do Gemini **não rodam no free tier** — exigem faturamento ativo no projeto Google Cloud.
  - **Destravar:** https://aistudio.google.com/ → projeto da chave → **Set up Billing / Enable billing** (vincular cartão). Custo de imagem é baixo (centavos por imagem). Após ativar, o script funciona na hora, sem mudança de código.
  - Alternativa sem billing: continuar gerando estáticos via **Canva MCP** (limite ~1 geração/sessão).
