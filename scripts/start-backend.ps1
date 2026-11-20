$ErrorActionPreference = 'Stop'
Set-Location (Join-Path $PSScriptRoot '..\backend')
if (-not (Test-Path 'node_modules')) { npm install }
npm run build
$env:PORT = if ($env:PORT) { $env:PORT } else { '8787' }
$env:ALLOWED_ORIGIN = if ($env:ALLOWED_ORIGIN) { $env:ALLOWED_ORIGIN } else { 'http://127.0.0.1:5173' }
node dist/index.js
