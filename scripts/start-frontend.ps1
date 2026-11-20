$ErrorActionPreference = 'Stop'
Set-Location (Join-Path $PSScriptRoot '..\frontend')
if (-not (Test-Path 'node_modules')) { npm install }
$env:VITE_BACKEND_URL = if ($env:VITE_BACKEND_URL) { $env:VITE_BACKEND_URL } else { 'ws://127.0.0.1:8787' }
npm run dev
