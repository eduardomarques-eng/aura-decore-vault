# DSers — Integração AliExpress Dropshipping

> Status: ✅ Instalado e ativo · Confirmado: 2026-06-14 · Última atividade: Produtos 1h atrás · Pedidos 2 dias · Clientes 2 dias

## O que é o DSers
Aplicativo Shopify para importar e gerenciar produtos do AliExpress. Sincroniza estoque, preços e pedidos automaticamente. Permite importar produtos em massa com um clique.

## Status da Instalação
- ✅ App instalado há ~2 semanas na loja auradecore.com.br
- ✅ Conta AliExpress conectada (ativa)
- ✅ Sincronização rodando (última: Produtos 1h, Pedidos 2 dias, Clientes 2 dias)
- ⏳ **Tokens API pendentes** — Eduardo precisa copiar do painel DSers e salvar no `.env`

## Próximos Passos (pós-confirmação)
1. Acessar **dsers.com/app** → Settings → API Keys → copiar `API Key` e `API Secret`
2. Copiar `Store ID` na aba Account
3. Salvar em `C:\Users\erick\backend\.env` (ver seção Tokens abaixo)
4. Configurar Pricing Rules (ver seção abaixo)
5. Ativar Auto Sync conforme configurações recomendadas

## Configurações Recomendadas
```
Pricing Rules:
- Multiplier: 2.5x (custo × 2.5 = preço venda)
- Arredondamento: .99 (R$49.99, R$79.99, R$129.99)
- Shipping: incluir no preço (frete oculto)

Auto Update:
- Sync estoque: diário às 6h
- Sync preços: semanal
- Notificar se esgotado: SIM

Import Settings:
- Idioma título: PT (traduzir automaticamente)
- Remover fundo imagem: SIM (quando disponível)
- Manter imagens originais: SIM (ARTE processa depois)
```

## Fluxo com Agentes (após instalação)
```
NEXUS identifica produto AliExpress
    ↓
NEXUS clona URL imagem + dados (nome, preço, fornecedor)
    ↓
ARTE gera imagem capa profissional (prompt japandi)
    ↓
LUNA aprova visual
    ↓
THEO importa via DSers API ou admin manual:
  - Título PT-BR magnético (VERA escreve)
  - Descrição com gatilhos emocionais (VERA)
  - Preço: custo × 2.5 (GUARD valida margem ≥ 60%)
  - Imagem capa = criativo ARTE
    ↓
DEV ativa produto + adiciona à coleção correta
```

## Tokens DSers (preencher após instalação)
```
DSERS_API_KEY=
DSERS_API_SECRET=
DSERS_STORE_ID=
```
Guardar em: `C:\Users\erick\backend\.env`

## Links Úteis
- App Store: apps.shopify.com/dsers
- Dashboard DSers: dsers.com/app
- AliExpress Dropship Center: dropshipping.aliexpress.com
