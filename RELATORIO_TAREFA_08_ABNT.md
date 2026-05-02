# RELATÓRIO TÉCNICO — TAREFA 08
## Consulta de Data e Hora com API Express e Frontend Angular

**Disciplina:** Desenvolvimento Web  
**Professor:** Prof. Deivison Takatu  
**Data de Entrega:** 1 de maio de 2026  
**Aluno:** [SEU NOME]  
**Matrícula:** [SUA MATRÍCULA]

---

## 1. INTRODUÇÃO

Este relatório documenta o desenvolvimento de uma aplicação web completa, composta por uma **API REST em Express.js** (backend) e uma **aplicação Angular** (frontend) que consome essa API para exibir data e hora em tempo real. A aplicação foi desenvolvida seguindo as normas ABNT e boas práticas de engenharia de software.

### 1.1 Objetivos

- Desenvolver uma API REST que fornece informações de data e hora;
- Criar uma aplicação frontend que consome a API em tempo real;
- Realizar deploy da API no **Render** e do frontend no **Vercel**;
- Documentar todo o processo com evidências (prints e links);
- Aplicar boas práticas de controle de versão (Git/GitHub).

### 1.2 Escopo

- Backend: API Express com CORS habilitado;
- Frontend: Aplicação Angular 15 com componente reativo;
- Deploy: Render (API) e Vercel (Frontend);
- Versionamento: Repositório unificado no GitHub.

---

## 2. TECNOLOGIAS E FERRAMENTAS

| Componente | Tecnologia | Versão |
|---|---|---|
| Backend | Node.js + Express | 4.18.2 |
| Frontend | Angular | 15.0.0 |
| Linguagem | TypeScript / JavaScript | - |
| Controle de Versão | Git | - |
| Repositório | GitHub | - |
| Deploy Backend | Render | - |
| Deploy Frontend | Vercel | - |

---

## 3. ESTRUTURA DO PROJETO

```
Tarefa-08/
├── api-datetime/
│   ├── api.js                 # Servidor Express
│   ├── package.json           # Dependências da API
│   └── README.md              # Documentação da API
├── frontend-datetime/
│   ├── src/
│   │   ├── app/
│   │   │   ├── services/
│   │   │   │   └── datetime.service.ts     # Serviço HTTP
│   │   │   ├── app.component.ts           # Componente principal
│   │   │   ├── app.component.html         # Template
│   │   │   ├── app.component.css          # Estilos
│   │   │   └── app.module.ts              # Módulo
│   │   ├── environments/
│   │   │   ├── environment.ts             # Config dev
│   │   │   └── environment.prod.ts        # Config prod
│   │   ├── main.ts
│   │   └── index.html
│   ├── angular.json
│   ├── package.json
│   └── README.md
├── .gitignore
├── README.md
└── RELATORIO_TAREFA_08_ABNT.md
```

---

## 4. DESENVOLVIMENTO DA API

### 4.1 Descrição Funcional

A API fornece três endpoints principais:

| Endpoint | Método | Descrição | Resposta |
|---|---|---|---|
| `/` | GET | Status da API | JSON com endpoints disponíveis |
| `/api/datetime` | GET | Data e hora completas | JSON com data formatada, hora, timestamp e ISO |
| `/api/date` | GET | Apenas data | JSON com data |
| `/api/time` | GET | Apenas hora | JSON com hora |

### 4.2 Exemplo de Resposta

```json
{
  "status": "sucesso",
  "data": "sexta-feira, 1 de maio de 2026",
  "hora": "21:09:24",
  "timestamp": 1777680564666,
  "iso": "2026-05-02T00:09:24.666Z"
}
```

### 4.3 Código-Fonte da API

**Arquivo: `api-datetime/api.js`**

[INSIRA PRINT DO CÓDIGO DA API AQUI]

**Arquivo: `api-datetime/package.json`**

```json
{
  "name": "api-datetime",
  "version": "1.0.0",
  "description": "API Express para consulta de data e hora",
  "main": "api.js",
  "scripts": {
    "start": "node api.js",
    "dev": "node api.js"
  },
  "keywords": ["express", "api", "datetime"],
  "author": "Aluno",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

### 4.4 Execução Local da API

```bash
cd api-datetime
npm install
npm start
```

**Resultado Esperado:**

```
🚀 Servidor rodando em http://localhost:3000
📅 Acesse a API em http://localhost:3000/api/datetime
```

[INSIRA PRINT DO TERMINAL COM API RODANDO]

---

## 5. DESENVOLVIMENTO DO FRONTEND

### 5.1 Arquitetura

O frontend segue a arquitetura de componentes do Angular:

- **AppModule**: módulo raiz que importa `HttpClientModule` e declara o componente principal;
- **AppComponent**: componente que exibe data e hora em tempo real;
- **DatetimeService**: serviço que realiza requisições HTTP à API;
- **Environments**: configuração de URL da API para dev e prod.

### 5.2 Serviço HTTP

**Arquivo: `frontend-datetime/src/app/services/datetime.service.ts`**

[INSIRA PRINT DO CÓDIGO DO SERVIÇO]

### 5.3 Componente Principal

**Arquivo: `frontend-datetime/src/app/app.component.ts`**

[INSIRA PRINT DO CÓDIGO DO COMPONENTE]

**Template HTML:**

```html
<!-- Exibe data e hora em tempo real -->
<!-- Botões de recarregar e copiar -->
<!-- Tratamento de erros -->
```

### 5.4 Configuração de Ambiente

**Arquivo: `frontend-datetime/src/environments/environment.ts` (Desenvolvimento)**

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api/datetime'
};
```

**Arquivo: `frontend-datetime/src/environments/environment.prod.ts` (Produção)**

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api-datetime-apbn.onrender.com/api/datetime'
};
```

### 5.5 Execução Local do Frontend

```bash
cd frontend-datetime
npm install
ng serve --open
```

**Resultado Esperado:**

- Navegador abre em `http://localhost:4200`
- Exibe data e hora em tempo real (atualiza a cada segundo)
- Integração com API em `http://localhost:3000`

[INSIRA PRINT DA APLICAÇÃO RODANDO NO NAVEGADOR]

---

## 6. VERSIONAMENTO E REPOSITÓRIO

### 6.1 Estrutura de Commits

```
Initial commit: API + Frontend
Remove embedded sub-repos: keep as regular folders
Frontend: use environment.apiUrl; add environment files
```

### 6.2 Comandos Git Executados

```bash
git init -b main
git add .
git commit -m "Initial commit: API + Frontend"
git remote add origin https://github.com/AdeTuris/Tarefa-08.git
git push -u origin main
```

### 6.3 Repositório GitHub

**Link do Repositório:** [https://github.com/AdeTuris/Tarefa-08](https://github.com/AdeTuris/Tarefa-08)

[INSIRA PRINT DO REPOSITÓRIO NO GITHUB]

---

## 7. DEPLOY

### 7.1 Deploy da API no Render

#### Passo 1: Conectar Repositório

[INSIRA PRINT DO PAINEL RENDER COM CONEXÃO]

#### Passo 2: Configuração do Serviço

| Configuração | Valor |
|---|---|
| Environment | Node |
| Build Command | (deixar vazio) |
| Start Command | `npm start` |

[INSIRA PRINT DAS CONFIGURAÇÕES DO RENDER]

#### Passo 3: Deploy Realizado

**URL Pública da API:**

```
https://api-datetime-apbn.onrender.com/api/datetime
```

[INSIRA PRINT DO DEPLOY SUCESSO NO RENDER]

### 7.2 Deploy do Frontend no Vercel

#### Passo 1: Conectar Repositório

[INSIRA PRINT DO PAINEL VERCEL]

#### Passo 2: Configuração do Build

| Configuração | Valor |
|---|---|
| Framework | Angular |
| Build Command | `npm run build-prod` |
| Output Directory | `dist/frontend-datetime` |

[INSIRA PRINT DAS CONFIGURAÇÕES DO VERCEL]

#### Passo 3: Deploy Realizado

**URL Pública do Frontend:**

```
https://tarefa-08-eosin.vercel.app
```

[INSIRA PRINT DA APLICAÇÃO RODANDO NA VERCEL]

---

## 8. TESTES E VALIDAÇÕES

### 8.1 Teste da API Localmente

```powershell
Invoke-RestMethod http://localhost:3000/api/datetime | ConvertTo-Json -Depth 5
```

**Resultado:**

```json
{
    "status": "sucesso",
    "data": "sexta-feira, 1 de maio de 2026",
    "hora": "21:09:24",
    "timestamp": 1777680564666,
    "iso": "2026-05-02T00:09:24.666Z"
}
```

[INSIRA PRINT DA RESPOSTA DA API]

### 8.2 Teste do Frontend Localmente

- ✅ API acessível em `http://localhost:3000`
- ✅ Frontend renderizando corretamente
- ✅ Data e hora atualizando em tempo real
- ✅ Botão de recarregar funcionando
- ✅ Botão de copiar funcionando
- ✅ Tratamento de erros funcionando

[INSIRA PRINT DO FRONTEND FUNCIONANDO]

### 8.3 Teste do Frontend em Produção (Vercel)

- ✅ Conectando à API pública do Render
- ✅ Dados sendo carregados
- ✅ Atualizações em tempo real funcionando

[INSIRA PRINT DO FRONTEND EM PRODUÇÃO]

---

## 9. CONCLUSÕES

Este projeto demonstra com sucesso:

1. **Desenvolvimento de API REST**: Implementação de endpoints com tratamento de erros e CORS;
2. **Frontend Reativo**: Componente Angular que consome API em tempo real;
3. **Boas Práticas**: Uso de Services, Environments, HttpClient e RxJS;
4. **CI/CD e Deploy**: Integração com GitHub, Render e Vercel;
5. **Documentação**: Código bem estruturado e documentado;
6. **Versionamento**: Histórico de commits organizado no Git.

### 9.1 Recomendações Futuras

- Adicionar autenticação (JWT)
- Implementar cache de respostas
- Adicionar testes unitários e E2E
- Containerizar com Docker
- Configurar monitoramento e logs

---

## REFERÊNCIAS

- [Express.js Documentation](https://expressjs.com/)
- [Angular Documentation](https://angular.io/docs)
- [Render Deployment](https://render.com/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [GitHub Guides](https://guides.github.com/)
- [Git Documentation](https://git-scm.com/doc)

---

**Assinado:**

Aluno: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
Data: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
Professor: Prof. Deivison Takatu

---

## APÊNDICE A — Links dos Repositórios e Deployments

| Recurso | Link |
|---|---|
| Repositório GitHub | [https://github.com/AdeTuris/Tarefa-08](https://github.com/AdeTuris/Tarefa-08) |
| API (Render) | https://api-datetime-apbn.onrender.com |
| Frontend (Vercel) | https://tarefa-08-eosin.vercel.app |

## APÊNDICE B — Instruções de Reprodução

### Para rodar localmente:

```bash
# Clone o repositório
git clone https://github.com/AdeTuris/Tarefa-08.git
cd Tarefa-08

# API
cd api-datetime
npm install
npm start
# Acesse http://localhost:3000/api/datetime

# Frontend (em outro terminal)
cd frontend-datetime
npm install
ng serve --open
# Acesse http://localhost:4200
```

---

*Fim do Relatório*
