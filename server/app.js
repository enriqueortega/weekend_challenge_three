var express = require('express');
var app = express();
var index = require('./routes/index.js');
var bodyParser = require('body-parser');


//Not sure what this does
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);


//Not sure what this does
app.set("port", process.env.PORT || 3000);

app.listen(3000, function(){
  console.log("Tuning in to port: 3000");
});
