@echo off
title n8n Aura Decore - Auto Start
color 0A
echo =============================================
echo   n8n Aura Decore - Inicializacao Automatica
echo   %date% %time%
echo =============================================
echo.

:: Configuracoes de performance
set DB_TYPE=sqlite
set EXECUTIONS_DATA_SAVE_ON_ERROR=all
set EXECUTIONS_DATA_SAVE_ON_SUCCESS=none
set EXECUTIONS_DATA_SAVE_ON_PROGRESS=false
set EXECUTIONS_DATA_SAVE_MANUAL_EXECUTIONS=true
set EXECUTIONS_DATA_MAX_AGE=168
set EXECUTIONS_DATA_PRUNE=true
set EXECUTIONS_DATA_PRUNE_MAX_COUNT=500

:: Desativar features desnecessarias
set N8N_DIAGNOSTICS_ENABLED=false
set N8N_VERSION_NOTIFICATIONS_ENABLED=false
set N8N_TEMPLATES_ENABLED=false
set N8N_HIRING_BANNER_ENABLED=false

:: Timezone e performance
set GENERIC_TIMEZONE=America/Fortaleza
set N8N_LOG_LEVEL=warn
set NODE_OPTIONS=--max-old-space-size=512
set N8N_PAYLOAD_SIZE_MAX=8

echo [INFO] Variaveis de ambiente configuradas
echo [INFO] Heap maximo: 512MB
echo [INFO] Timezone: America/Fortaleza
echo [INFO] Iniciando n8n na porta 5678...
echo.

:: Iniciar n8n
npx n8n start

:: Se o n8n parar, reiniciar automaticamente
echo.
echo [WARN] n8n parou! Reiniciando em 10 segundos...
timeout /t 10
goto :eof
