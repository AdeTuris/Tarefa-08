# Projeto: Consulta de Data e Hora

Repositório com a API (Express) e o frontend (Angular) para consulta de data e hora.

Estrutura:

- `api-datetime/` — API em Express que expõe `/api/datetime`, `/api/date` e `/api/time`.
- `frontend-datetime/` — Aplicação Angular que consome a API e exibe data/hora em tempo real.

Como rodar localmente

API:

```powershell
cd api-datetime
npm install
npm start
# API disponível em http://localhost:3000
```

Frontend:

```powershell
cd frontend-datetime
npm install
ng serve --open
# Frontend disponível em http://localhost:4200
```

Inicializar repositório Git (local) e push para GitHub

Com GitHub CLI (`gh`):

```powershell
cd "d:/Desktop/Documents/Primeiro semestre 2026/Desnvolvimeto Web_Prof. Deivison Takatu/Tarefa 08"
git init -b main
git add .
git commit -m "Initial commit: API + Frontend"
# Crie o repo no GitHub e execute:
# gh repo create seu-usuario/consulta-datetime --public --source . --remote origin --push
```

Sem `gh` (manual):

1. Crie um repositório no GitHub (via web).
2. Execute localmente:

```powershell
git remote add origin https://github.com/SEU_USUARIO/REPO.git
git branch -M main
git push -u origin main
```

Próximos passos sugeridos

- Mover URL da API para `environment.ts` do Angular e usar `environment.apiUrl` no `DatetimeService`.
- Preparar deploy: conectar `api-datetime` no Render (Start Command: `npm start`) e `frontend-datetime` no Vercel (build command: `ng build --configuration production`).
- Gerar documento ABNT (WHOD) com prints e links.
