# API de Data e Hora

Uma API REST simples desenvolvida com Express.js que fornece informações de data e hora.

## Endpoints

- `GET /` - Status da API
- `GET /api/datetime` - Retorna data e hora completas
- `GET /api/date` - Retorna apenas a data
- `GET /api/time` - Retorna apenas a hora

## Instalação

```bash
npm install
```

## Execução Local

```bash
npm start
```

A API estará disponível em `http://localhost:3000`

## Exemplo de Resposta

```json
{
  "status": "sucesso",
  "data": "quinta-feira, 30 de abril de 2026",
  "hora": "14:30:45",
  "timestamp": 1746086445000,
  "iso": "2026-04-30T14:30:45.000Z"
}
```

## Deploy no Render

1. Faça push do projeto para o GitHub
2. Crie uma nova conta/projeto no Render
3. Conecte ao repositório
4. Configure: `Start Command: npm start`
5. Deploy!
