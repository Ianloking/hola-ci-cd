const express = require('express');
const app = express();

// Endpoint principal
app.get('/', (req, res) => {
  res.send('¡Hola CI/CD!');
});

// Endpoint para monitoreo
app.get('/status', (req, res) => {
  res.json({ status: 'online', message: 'Hola desde CI/CD en Vercel' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
