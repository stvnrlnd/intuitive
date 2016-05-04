'use strict';

// ------ Require packages
var express = require('express');

// ------ Configure application
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dev'));

// ------ Build routes
app.get('/', function(req, res) {
  res.sendfile('dev/index.html');
});

// ------ Serve
app.listen(port, function() {
  console.log("Running on port " + port);
});
