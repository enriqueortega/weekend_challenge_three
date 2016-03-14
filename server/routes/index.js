var express = require('express');
var router = express.Router();
var path = require('path');

router.post('/add', function(req, res){

  var firstNumber = parseInt(req.body.firstNumber);
  var secondNumber = parseInt(req.body.secondNumber);
  var operand = req.body.operand;
  var result;

  switch (operand){
    case 'addition':
      console.log("addin");
      result = firstNumber + secondNumber;
      res.send(result.toString());
      break;
    case 'subtraction':
      console.log("Subbin");
      result = firstNumber - secondNumber;
      res.send(result.toString());
      break;
    case 'division':
      console.log("Divin");
      result = firstNumber / secondNumber;
      res.send(result.toString());
      break;
    case 'multiplication':
      console.log("Multin");
      result = firstNumber * secondNumber;
      res.send(result.toString());
      break;
    default:
  }
});

router.get('/*', function(req, res){
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;
