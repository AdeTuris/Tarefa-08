# Frontend - Data e Hora com Angular

Um frontend moderno desenvolvido com Angular 15 que consome a API de Data e Hora desenvolvida em Express.js.

## Funcionalidades

- ✅ Consulta de data e hora em tempo real
- ✅ Atualização automática a cada segundo
- ✅ Interface responsiva e intuitiva
- ✅ Tratamento de erros robusto
- ✅ Copiar informações para a área de transferência
- ✅ Demonstração de práticas modernas do Angular

## Pré-requisitos

- Node.js >= 16.x
- npm >= 8.x ou yarn
- Angular CLI: `npm install -g @angular/cli`

## Instalação

```bash
npm install
```

## Desenvolvimento Local

```bash
ng serve
# ou
npm start
```

A aplicação estará disponível em `http://localhost:4200`

## Build para Produção

```bash
ng build --configuration production
# ou
npm run build-prod
```

## Configuração da URL da API

Editar o arquivo `src/app/services/datetime.service.ts`:

```typescript
private apiUrl = 'https://api-datetime.onrender.com/api/datetime';
```

## Deploy no Vercel

1. Faça o build: `npm run build-prod`
2. Crie conta no [Vercel](https://vercel.com)
3. Conecte seu repositório GitHub
4. Vercel detectará automaticamente e fará o deploy
5. Acesse seu site em: `seu-projeto.vercel.app`

## Estrutura do Projeto

```
src/
├── app/
│   ├── services/
│   │   └── datetime.service.ts    # Serviço de requisição HTTP
│   ├── app.component.ts           # Componente principal
│   ├── app.component.html         # Template HTML
│   ├── app.component.css          # Estilos CSS
│   └── app.module.ts              # Módulo da aplicação
├── index.html                      # Arquivo HTML principal
├── main.ts                         # Arquivo de entrada
└── styles.css                      # Estilos globais
```

## Conceitos Utilizados

### Angular 15
- **Componentes**: Estrutura reativa e modular
- **Services**: Camada de requisição HTTP (HttpClientModule)
- **RxJS**: Observables para requisições assíncronas
- **TypeScript**: Tipagem forte para melhor qualidade de código
- **Interfaces**: Tipagem das respostas da API

### Boas Práticas
- Tratamento de erros com try-catch
- Unsubscribe em OnDestroy
- Tipagem forte com TypeScript
- Componentes reativos e responsivos
- Clean Code e legibilidade

## Licença

MIT
