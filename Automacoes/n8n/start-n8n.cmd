@echo off
:: Aura Decore — n8n local com Railway Postgres DB
:: Roda os 26 workflows sem depender do Railway hosting
setlocal

:: === Banco de dados (Railway Postgres - acesso público) ===
set DB_TYPE=postgresdb
set DB_POSTGRESDB_HOST=acela.proxy.rlwy.net
set DB_POSTGRESDB_PORT=51860
set DB_POSTGRESDB_DATABASE=railway
set DB_POSTGRESDB_USER=postgres
set DB_POSTGRESDB_PASSWORD=PzjTaROWHIzlntJsCxvMFuLHhgWHlxEE
set DB_POSTGRESDB_SSL_ENABLED=true

:: === n8n Config ===
set N8N_ENCRYPTION_KEY=pCYdkG7rnDLTGjlGmKXb2WAbTDCnQJWpQ5OQiCyqvdY=
set N8N_BASIC_AUTH_ACTIVE=true
set N8N_BASIC_AUTH_USER=aura
set N8N_BASIC_AUTH_PASSWORD=AuraDecoreN8n2026!
set N8N_PORT=5678
set N8N_HOST=0.0.0.0
set N8N_PROTOCOL=http
set N8N_USER_FOLDER=C:\Users\erick\.n8n
set GENERIC_TIMEZONE=America/Sao_Paulo
set N8N_LOG_LEVEL=info
set N8N_SECURE_COOKIE=false
set N8N_EDITOR_BASE_URL=http://localhost:5678/

:: === Variáveis de integração ===
set FB_PAGE_TOKEN=EAAddz68Jp1wBRmBNg0wxfWzJrRPBajsjxv7G4dUbsbAvbSws4kHNjDS08zh6O917oUjUmVBbWKHhAcG7w9AqXAGhj5rKnWXb1liW8WMmHlsegetHfwkaZAqNto9EXFgYxQdRuTf1hQFt9yTEbmkmBaomU3KZB7NQPUDGqro8wA4ZAt6QZCZCyNbNn3t6MkeL1s5I89Lzh5p5ALFYTn6i0
set IG_USER_ID=17841442799060573
set META_PIXEL_ID=1275291704812301
set RAILWAY_URL=https://web-production-f1cb5.up.railway.app

echo [%DATE% %TIME%] Iniciando n8n local (porta 5678)...
echo Acesse: http://localhost:5678
echo Login: aura / AuraDecoreN8n2026!
echo.

n8n start
