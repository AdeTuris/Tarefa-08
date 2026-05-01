# Script para adicionar remotes e dar push (execute após criar os repositórios no GitHub)
# Substitua AdeTuris pelos dados corretos se necessário.

$base = "D:\\Desktop\\Documents\\Primeiro semestre 2026\\Desnvolvimeto Web_Prof. Deivison Takatu\\Tarefa 08"

# API
$apiPath = Join-Path $base "api-datetime"
Set-Location $apiPath
git remote remove origin 2>$null
git remote add origin https://github.com/AdeTuris/api-datetime.git
git branch -M main
git push -u origin main

# Frontend
$frontendPath = Join-Path $base "frontend-datetime"
Set-Location $frontendPath
git remote remove origin 2>$null
git remote add origin https://github.com/AdeTuris/frontend-datetime.git
git branch -M main
git push -u origin main

Write-Host "Push concluído (se os repositórios existirem e você estiver autenticado)." -ForegroundColor Green
