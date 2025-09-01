const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Ponto Eletrônico - Backend Ativo com SQLite!');
});

// Rota para registrar ponto
app.post('/registrar-ponto', (req, res) => {
  const { nome, tipo } = req.body;
  const data_hora = new Date().toISOString();

  if (!nome || !tipo || !['entrada', 'saida'].includes(tipo)) {
    return res.status(400).send('Nome e tipo (entrada/saída) são obrigatórios!');
  }

  db.run(
    `INSERT INTO registros (nome, data_hora, tipo) VALUES (?, ?, ?)`,
    [nome, data_hora, tipo],
    function (err) {
      if (err) {
        return res.status(500).send('Erro ao registrar ponto: ' + err.message);
      }
      res.status(201).send({ id: this.lastID, message: 'Ponto registrado!' });
    }
  );
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});