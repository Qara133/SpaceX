const express = require('express');
const app = express();
const port = 3000;

// JSON faylını daxil edin
const data = require('./data/data.json');

// API endpoint yaradın
app.get('/api/data', (req, res) => {
  res.json(data);
});

// Serveri işə salın
app.listen(port, () => {
  console.log(`Server işə düşdü: http://localhost:${port}/api/data`);
});
