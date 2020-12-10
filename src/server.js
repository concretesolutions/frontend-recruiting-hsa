const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/desafio-accenture-svl'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/desafio-accenture-svl/'}),
);

app.listen(process.env.PORT || 8080);