# INSTRUÇÕES: GitHub, Render e Vercel

## PARTE 1: Criar Repositório no GitHub

### Passo 1: Acessar GitHub
1. Acesse: https://github.com/AdeTuris/repositories
2. Procure pelo botão **"New"** (verde, canto superior direito)
3. Clique em **"New repository"**

### Passo 2: Preencher o Formulário
Na página **"Create a new repository"**, preencha:

| Campo | Valor |
|-------|-------|
| **Repository name** | `Tarefa-08` |
| **Description** | Projeto acadêmico: API Express + Frontend Angular |
| **Visibility** | ◉ Public |
| **Initialize this repository with** | ❌ DEIXE DESMARCADO (não marque README, .gitignore, ou license) |

### Passo 3: Criar
Clique em **"Create repository"** (botão verde no final da página).

Após criar, você verá a página do repositório com instruções. **Copie a URL**:
```
https://github.com/AdeTuris/Tarefa-08.git
```

---

## PARTE 2: Fazer Push do Código Local

Após criar o repositório, abra **PowerShell** e execute (na pasta `Tarefa-08`):

```powershell
cd "d:/Desktop/Documents/Primeiro semestre 2026/Desnvolvimeto Web_Prof. Deivison Takatu/Tarefa 08"

git remote set-url origin https://github.com/AdeTuris/Tarefa-08.git

git branch -M main

git push -u origin main
```

**O Git pode pedir suas credenciais GitHub.** Use:
- **Username:** seu usuário GitHub (`AdeTuris`)
- **Password:** seu **Personal Access Token** (PAT) — não use sua senha!

### Como gerar um Personal Access Token (PAT):
1. GitHub → Settings (canto superior direito)
2. Developer settings → Personal access tokens → Tokens (classic)
3. New token (classic)
4. Scopes necessários: ✅ `repo`
5. Gerar e copiar o token
6. Cole como "password" no terminal

Após o push, abra https://github.com/AdeTuris/Tarefa-08 e confirme se o código está lá!

---

## PARTE 3: Deploy da API no Render

### Passo 1: Acessar Render
1. Acesse: https://render.com/
2. Faça login ou crie conta (pode usar GitHub para logar)
3. Clique em **"New +"** → **"Web Service"**

### Passo 2: Conectar Repositório
1. Selecione **"Deploy an existing repository"**
2. Conecte sua conta GitHub (primeira vez)
3. Procure por **"Tarefa-08"** e conecte

### Passo 3: Configurar o Serviço

| Campo | Valor |
|-------|-------|
| **Name** | `api-datetime` (ou qualquer nome) |
| **Environment** | `Node` |
| **Build Command** | (deixe vazio) |
| **Start Command** | `npm start` |
| **Plan** | Free (para testes) |

### Passo 4: Deploy
Clique em **"Create Web Service"**. Render iniciará o build e deploy automaticamente.

### Resultado
Após sucesso, copie a URL pública, ex.:
```
https://api-datetime-abc123.onrender.com
```

Você terá dois endpoints funcionando:
- `https://api-datetime-abc123.onrender.com/` (Health check)
- `https://api-datetime-abc123.onrender.com/api/datetime` (Data e Hora)

**⚠️ IMPORTANTE:** Copie a URL completa da sua API no Render (será usada no frontend).

---

## PARTE 4: Deploy do Frontend no Vercel

### Passo 0: Atualizar URL da API
Antes de fazer deploy, atualize a URL da API em produção:

**Arquivo:** `frontend-datetime/src/environments/environment.prod.ts`

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api-datetime-abc123.onrender.com/api/datetime'  // ← Substitua pela sua URL do Render
};
```

Depois, faça commit e push:

```powershell
cd frontend-datetime
git add src/environments/environment.prod.ts
git commit -m "Update API URL for production"
git push origin main
```

### Passo 1: Acessar Vercel
1. Acesse: https://vercel.com/
2. Faça login ou crie conta (pode usar GitHub)
3. Clique em **"Add New ..."** → **"Project"**

### Passo 2: Importar Repositório
1. Clique em **"Import Git Repository"**
2. Procure por **"Tarefa-08"** e selecione

### Passo 3: Configurar Build
Na seção "Framework Preset", Vercel pode detectar automaticamente como **"Angular"**.

Se não detectar, preencha manualmente:

| Campo | Valor |
|-------|-------|
| **Build Command** | `npm run build-prod` |
| **Output Directory** | `dist/frontend-datetime` |
| **Install Command** | `npm install` |

### Passo 4: Deploy
Clique em **"Deploy"**. Vercel iniciará o build e deployment.

### Resultado
Após sucesso, você terá uma URL, ex.:
```
https://seu-projeto-abc123.vercel.app
```

Acesse essa URL no navegador e confirme que a aplicação está funcionando!

---

## Links Finais

Após completar todos os passos, você terá:

| Recurso | Link |
|---------|------|
| **Repositório GitHub** | https://github.com/AdeTuris/Tarefa-08 |
| **API (Render)** | https://api-datetime-abc123.onrender.com/api/datetime |
| **Frontend (Vercel)** | https://seu-projeto-abc123.vercel.app |

---

## Teste de Funcionamento

1. **API Render:** Acesse a URL da API no navegador, deve retornar JSON com data e hora
2. **Frontend Vercel:** Acesse a URL do frontend, deve exibir data e hora em tempo real, atualizando a cada segundo
3. **Integração:** Frontend deve estar consumindo dados da API em produção (Render)

---

## Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Código enviado com `git push` 
- [ ] API deployada no Render
- [ ] Frontend deployada no Vercel
- [ ] URL da API atualizada em `environment.prod.ts`
- [ ] Frontend consumindo API pública (Render)
- [ ] Testes realizados e funcionando
- [ ] Links documentados no relatório ABNT

---

**Pronto!** Após completar, compartilhe os links do GitHub, Render e Vercel no relatório ABNT (`RELATORIO_TAREFA_08_ABNT.md`).
