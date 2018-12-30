var express = require('express');

var app = express();

app.get('/', function (req, res) {
  res.send('hello bellow nodejs from production server from sanjay');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
