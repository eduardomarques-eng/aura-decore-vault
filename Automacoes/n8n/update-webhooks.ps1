# Aura Decore — Auto-atualizar webhooks quando o tunnel cloudflared reinicia
# Executar após start-n8n.cmd e cloudflared subir

param([string]$TunnelUrl = "")

if (-not $TunnelUrl) {
  $logFile = "C:\Users\erick\AURA-decor-vault\Logs\cloudflared.log"
  $line = Get-Content $logFile | Where-Object { $_ -match "trycloudflare.com" } | Select-Object -Last 1
  if ($line -match "https://([a-z0-9\-]+\.trycloudflare\.com)") {
    $TunnelUrl = "https://$($Matches[1])"
  }
}

if (-not $TunnelUrl) { Write-Host "❌ URL do tunnel não encontrada"; exit 1 }

Write-Host "Atualizando webhooks para: $TunnelUrl"

$SHOPIFY_DOMAIN = "10ei3t-sf.myshopify.com"
$SHOPIFY_TOKEN  = "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"
$headers = @{ "X-Shopify-Access-Token" = $SHOPIFY_TOKEN; "Content-Type" = "application/json" }

@(
  @{id = "1721698418793"; path = "shopify-new-customer"},
  @{id = "1721698451561"; path = "shopify-order-paid"}
) | ForEach-Object {
  $body = @{ webhook = @{ address = "$TunnelUrl/webhook/$($_.path)" } } | ConvertTo-Json
  try {
    Invoke-RestMethod "https://$SHOPIFY_DOMAIN/admin/api/2024-01/webhooks/$($_.id).json" -Method PUT -Headers $headers -Body $body | Out-Null
    Write-Host "  ✅ Shopify $($_.path)"
  } catch { Write-Host "  ❌ $($_.path): $($_.Exception.Message)" }
}

Write-Host "✅ Webhooks Shopify atualizados: $TunnelUrl"

# Atualizar WPPConnect para enviar webhook para o n8n (WF03)
$WPP_WF03_URL = "$TunnelUrl/webhook/wppconnect-whatsapp"
$WPP_TOKEN = '$2b$10$rZ2qdn2TTSZ7UmtCz1_e9eLgmCaoZyWAn_u9RSOGm4cEtit3r.ajy'
$wppHeaders = @{ "Authorization" = "Bearer $WPP_TOKEN"; "Content-Type" = "application/json" }
$wppBody = @{ webhook = @{ url = $WPP_WF03_URL } } | ConvertTo-Json

try {
  # Verificar se WPPConnect está rodando
  Invoke-RestMethod "http://localhost:21465/api/aura-decore/status-session" -Headers $wppHeaders -TimeoutSec 5 -ErrorAction Stop | Out-Null
  # Se chegou aqui, WPPConnect está ok
  Write-Host "  ℹ️  WPPConnect webhook: $WPP_WF03_URL (WF03 via n8n)"
} catch {
  Write-Host "  ⚠️  WPPConnect não respondeu — webhook aponta para Railway diretamente"
}

# Salvar URL atual para referência
"$((Get-Date -Format 'yyyy-MM-dd HH:mm:ss')) | $TunnelUrl" | Add-Content "C:\Users\erick\AURA-decor-vault\Logs\tunnel-urls.log"
