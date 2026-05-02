// Importar bibliotecas
const express = require('express');
const cors = require('cors');

// Criar aplicação Express
const app = express();

// Middleware CORS para permitir requisições de qualquer origem
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rota principal - Health check
app.get('/', (req, res) => {
  res.json({
    status: 'API funcionando!',
    message: 'Bem-vindo à API de Data e Hora',
    endpoints: {
      datetime: '/api/datetime',
      date: '/api/date',
      time: '/api/time'
    }
  });
});

// Rota para obter data e hora completas
app.get('/api/datetime', (req, res) => {
  try {
    const now = new Date();
    
    // Formatar data e hora no padrão brasileiro
    const dataFormatada = now.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const horaFormatada = now.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    res.json({
      status: 'sucesso',
      data: dataFormatada,
      hora: horaFormatada,
      timestamp: now.getTime(),
      iso: now.toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'erro',
      message: 'Erro ao obter data e hora',
      error: error.message
    });
  }
});

// Rota para obter apenas a data
app.get('/api/date', (req, res) => {
  try {
    const now = new Date();
    const data = now.toLocaleDateString('pt-BR');

    res.json({
      status: 'sucesso',
      data: data,
      iso: now.toISOString().split('T')[0]
    });
  } catch (error) {
    res.status(500).json({
      status: 'erro',
      message: 'Erro ao obter data',
      error: error.message
    });
  }
});

// Rota para obter apenas a hora
app.get('/api/time', (req, res) => {
  try {
    const now = new Date();
    const hora = now.toLocaleTimeString('pt-BR');

    res.json({
      status: 'sucesso',
      hora: hora,
      timestamp: now.getTime()
    });
  } catch (error) {
    res.status(500).json({
      status: 'erro',
      message: 'Erro ao obter hora',
      error: error.message
    });
  }
});

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    status: 'erro',
    message: 'Rota não encontrada',
    path: req.path
  });
});

// Porta dinâmica para o Render
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📅 Acesse a API em http://localhost:${PORT}/api/datetime`);
});
