const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    lastDeploy: new Date().toISOString(),
    version: '1.0.0'
  });
});

app.listen(PORT, () => {
  console.log(`Servidor a correr na porta ${PORT}`);
});