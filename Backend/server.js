const express = require('express');
const app = express();
const PORT = 3001;

// Ruta simple para probar conexión
app.get('/', (req, res) => {
  res.send('Servidor Backend funcionando correctamente 🚀');
});

// Inicia el servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});


