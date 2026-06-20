# 🛍️ Auditoria Completa — Loja Shopify Aura Decore

> Auditoria executada em 2026-06-02 · Tema MAIN: "Aura Decore — Todas Páginas Belíssimas PRONTO v5" (ID 142767816809)

## ✅ Estado geral: loja praticamente 100% completa

### Páginas (11/11 publicadas) ✓
| Página | Handle | Status |
|--------|--------|--------|
| Manifesto AURA | `/manifesto` | ✅ |
| Sobre Nós — A Filosofia | `/sobre-nos` | ✅ |
| Ambientes — Inspire-se | `/ambientes` | ✅ |
| Neuroarquitetura & Bem-Estar | `/neuroarquitetura` | ✅ |
| Design de Interiores Bali | `/design-bali` | ✅ |
| FAQ | `/faq` | ✅ |
| Fale com a Aura Decore | `/contato` | ✅ |
| Trocas & Devoluções | `/trocas-devolucoes` | ✅ |
| Frete & Entrega | `/frete-entrega` | ✅ |
| Política de Privacidade | `/politica-de-privacidade` | ✅ |
| Termos de Serviço | `/termos-de-servico` | ✅ |

### Coleções (11/11 com imagem) ✓
Acessórios (5), Aromáticos & Velas (11), Botânica Seca (7), Cerâmicas (6),
Chegadas/Novidades (13), Destaque da Estação (10), Iluminação (6),
Mais Amados (12), Minimalismo Funcional (23, smart), Têxteis (7), Página inicial (14).

### Home (16 seções profissionais) ✓
Hero → Marquee → Grid Categorias → Lançamentos → Trust Bar → Cerâmicas →
Editorial Bali → Têxteis → Iluminação → Vídeo CTA → Acessórios → Mais Amados →
Promessa → Depoimentos → Newsletter → Rich Text CTA.

### Imagens de produtos ✓
26 produtos tiveram fotos Pexels genéricas substituídas por imagens IA Japandi
(sessão 2026-06-02). Duplicata Mini Kit Zen / Kit Ritual corrigida. 18 vendors
padronizados para "Aura Decore".

---

## ⚠️ ÚNICO ponto de incoerência: 2 banners da home usam Pexels stock

O hero e os 5 cards de categoria usam imagens IA Japandi coerentes. Mas 2 banners
editoriais ainda usam fotos Pexels genéricas que destoam da identidade:

### Banner 1 — "Editorial Bali" (seção `editorial_banner_1`)
- **Atual (Pexels):** `images.pexels.com/photos/32512266/...`
- **Substituir por (IA Japandi coerente):**
```
https://image.pollinations.ai/prompt/serene%20bali%20japandi%20living%20room%20interior%2C%20rattan%20pendant%20lamp%2C%20bamboo%20furniture%2C%20handmade%20ceramic%20vases%2C%20dried%20pampas%20botanical%2C%20linen%20textiles%2C%20large%20windows%20soft%20daylight%2C%20tropical%20calm%20minimalist%2C%20cinematic%20wide%20editorial%20interior%20photography%2C%20japandi%20wabi-sabi%20aesthetic%2C%20natural%20earth%20tones%20terracotta%20off-white%20sand%2C%20warm%20soft%20natural%20light%2C%20premium%20magazine%20quality%2C%20calm%20serene%20atmosphere?width=1920&height=1080&seed=42001&nologo=true&enhance=true&model=flux
```

### Banner 2 — "Vídeo CTA" (seção `aura_video_cta`)
- **Atual (Pexels):** `images.pexels.com/photos/28256945/...`
- **Substituir por (IA Japandi coerente):**
```
https://image.pollinations.ai/prompt/beautiful%20intentional%20japandi%20living%20room%20at%20golden%20morning%20light%2C%20ceramic%20vase%20with%20dried%20flowers%2C%20linen%20sofa%20terracotta%20cushions%2C%20warm%20wood%2C%20plants%2C%20peaceful%20inviting%20home%20sanctuary%2C%20cinematic%20wide%20editorial%20interior%20photography%2C%20japandi%20wabi-sabi%20aesthetic%2C%20natural%20earth%20tones%20terracotta%20off-white%20sand%2C%20warm%20soft%20natural%20light%2C%20premium%20magazine%20quality%2C%20calm%20serene%20atmosphere?width=1920&height=1080&seed=42002&nologo=true&enhance=true&model=flux
```
*(Ambos já testados — geram JPEG 1920×1080, ~82 KB, HTTP 200)*

### Como trocar (2 min, sem risco, preview ao vivo)
1. Admin Shopify → **Loja virtual → Temas → Personalizar** (tema v5)
2. Na home, clique na seção **"Editorial Bali"** → campo **Imagem de fundo / bg_url** → cole a URL do Banner 1
3. Clique na seção **"Vídeo CTA"** (Por que a Aura Decore?) → **Imagem de fundo** → cole a URL do Banner 2
4. **Salvar**

> Nota técnica: a escrita direta no tema MAIN é bloqueada via API (proteção do
> Shopify contra alterações acidentais em produção). Por isso a troca é manual no
> editor visual — mais seguro e com preview imediato.

---

## 🔴 Pendências de credenciais (ação manual)

1. **E-mail MCP conectado à conta ERRADA.** O Gmail MCP está autenticado em
   `eduardo.marques.arq@gmail.com` (pessoal), não em `auras.de@gmail.com` (loja).
   Para gerenciar o e-mail da Aura: reautorizar o conector Gmail com a conta
   `auras.de@gmail.com`.

2. **Token Shopify Admin** = `atkn_...` (token de tema, não Admin API). Backend dá
   401. Gerar `shpat_...` em Admin → Apps → Develop apps.

3. **Token Facebook Page** — ainda User token sem Página vinculada.
   Ver `renovar-tokens.md`.
