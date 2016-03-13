var express = require('express');
var app = express();
var index = require('./routes/index.js');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', index);

app.listen(3000, function(){
  console.log("Tuning in to port: 3000");
});
