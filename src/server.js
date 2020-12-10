const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/desafio-accenture-svl'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/desafio-accenture-svl/index.html'));
});

app.listen(process.env.PORT || 5000);