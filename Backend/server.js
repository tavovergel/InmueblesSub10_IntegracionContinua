const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send('Servidor Backend funcionando correctamente 🚀');
});


app.listen(3001, '0.0.0.0', () => {
  console.log('Servidor escuchando en http://localhost:3001');
});

