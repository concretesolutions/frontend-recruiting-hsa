const path = require('path');
const express = require('express');
const app = express();

// Serve static files
app.use(express.static(dirname + '/dist/app-angular'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(dirname + '/dist/app-angular/index.html'));
});

// default Heroku port
app.listen(process.env.PORT || 5000);


