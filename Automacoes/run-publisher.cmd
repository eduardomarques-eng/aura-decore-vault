@echo off
set NODE_PATH=C:\Users\erick\AppData\Roaming\npm\node_modules
set PUBLISHER=C:\Users\erick\AURA-decor-vault\Automacoes\aura-publisher.cjs
set LOGDIR=C:\Users\erick\AURA-decor-vault\Logs
set LOGFILE=%LOGDIR%\publisher-%DATE:~6,4%%DATE:~3,2%%DATE:~0,2%.log

if not exist "%LOGDIR%" mkdir "%LOGDIR%"

echo [%DATE% %TIME%] Iniciando publisher... >> "%LOGFILE%"
node "%PUBLISHER%" >> "%LOGFILE%" 2>&1
echo [%DATE% %TIME%] Publisher finalizado. >> "%LOGFILE%"
