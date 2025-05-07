const express = require('express');
const app = express();

app.get('/api/status', (req, res) => {
  res.json({ status: 'online', message: 'Hola desde Vercel Serverless' });
});

module.exports = app;
