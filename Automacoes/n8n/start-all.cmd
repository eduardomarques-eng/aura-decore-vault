@echo off
:: Aura Decore — Inicialização Completa: n8n + Tunnel + Webhooks + WPPConnect
:: Executar ao ligar o PC ou use a Task AuraDecoreStartAll
setlocal
set LOGDIR=C:\Users\erick\AURA-decor-vault\Logs
set CF_EXE=C:\Users\erick\AURA-decor-vault\Automacoes\cloudflared.exe
set N8N_CMD=C:\Users\erick\AURA-decor-vault\Automacoes\n8n\start-n8n.cmd
set WPP_DIR=C:\Users\erick\wppconnect-server

if not exist "%LOGDIR%" mkdir "%LOGDIR%"

echo [%DATE% %TIME%] === INICIANDO AURA DECORE STACK ===

:: 1. Matar instâncias anteriores
taskkill /f /im cloudflared.exe 2>nul

:: 2. Iniciar WPPConnect em background
echo [%DATE% %TIME%] Iniciando WPPConnect...
start "AuraWPP" /min cmd /c "cd /d "%WPP_DIR%" && set WEBHOOK_URL=https://web-production-f1cb5.up.railway.app/whatsapp/webhook && node ./dist/server.js >> "%LOGDIR%\wppconnect.log" 2>&1"
timeout /t 8 /nobreak >nul

:: 3. Iniciar n8n em background
echo [%DATE% %TIME%] Iniciando n8n...
start "AuraN8n" /min cmd /c "call "%N8N_CMD%" >> "%LOGDIR%\n8n-runtime.log" 2>&1"
timeout /t 15 /nobreak >nul

:: 4. Iniciar cloudflared tunnel
echo [%DATE% %TIME%] Iniciando tunnel cloudflared...
start "AuraTunnel" /min cmd /c ""%CF_EXE%" tunnel --url http://localhost:5678 --logfile "%LOGDIR%\cloudflared.log" --loglevel info"
timeout /t 12 /nobreak >nul

:: 5. Atualizar webhooks com a nova URL do tunnel
echo [%DATE% %TIME%] Atualizando webhooks...
powershell -ExecutionPolicy Bypass -File "C:\Users\erick\AURA-decor-vault\Automacoes\n8n\update-webhooks.ps1" >> "%LOGDIR%\webhooks-update.log" 2>&1

echo [%DATE% %TIME%] === STACK INICIADA ===
echo.
echo WPPConnect: http://localhost:21465  (key: AuraDecoreWpp2026!)
echo n8n:        http://localhost:5678   (login: aura / AuraDecoreN8n2026!)
echo Tunnel:     ver %LOGDIR%\cloudflared.log para URL publica
echo.
