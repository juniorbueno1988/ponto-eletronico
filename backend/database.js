const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Conecta ou cria o banco de dados (será salvo como 'ponto.db' na pasta backend)
const db = new sqlite3.Database(path.join(__dirname, 'ponto.db'));

// Cria uma tabela para os registros de ponto
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS registros (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      data_hora TEXT NOT NULL,
      tipo TEXT CHECK(tipo IN ('entrada', 'saida'))
    )
  `);
});

module.exports = db;