var text = '';
var firstNumber = '';
var secondNumber = '';
var placeholderNumber = '';
var inputHolder = {
  firstNumber: '',
  secondNumber: '',
  operand: ''
};

$(document).ready(function(){
  console.log('Good to go');
  appendCalc();

  $('.numbers').on('click', calculatorNumbers);
  $('.operators').on('click', calculatorOperand);
  $('.equals').on('click', calcuate);
  $('.clear').on('click', clear);

});


function appendCalc(){
  // Builds Main Components for Calculator
  $('.container').append('<div class="screen">0</div>');
  $('.container').append('<div class="appended"></div>');

  var $el = $('.container').children().last();

  // Adds all numerical items
  for(var i = 0; i < 10; i ++){
    $el.append('<button class="numbers" data-button="' + i + '">' + i + '</button>');
  }

  // Adds the different operators
  $el.append('<button class="operators" data-button="addition">+</button>');
  $el.append('<button class="operators" data-button="subtraction">-</button>');
  $el.append('<button class="operators" data-button="division">/</button>');
  $el.append('<button class="operators" data-button="multiplication">X</button>');
  $el.append('<button class="equals" data-button="equals">=</button>');
  $el.append('<button class="clear" data-button="clear">C</button>');
}

function calculatorNumbers(){

  text += $(this).data().button;
  placeholderNumber += $(this).data().button;

  $('.screen').text(text);
}

function calculatorOperand(){
  inputHolder.firstNumber = placeholderNumber;
  inputHolder.operand = $(this).data().button;

  // Reset
  placeholderNumber = '';
  text = '';
  $('.screen').text('0');

}

function calcuate(){
  inputHolder.secondNumber = placeholderNumber;
  $.ajax({
      type: 'POST',
      url: '/add',
      data: inputHolder,
      success: function(data){
        text = data;
        console.log(text);
        $('.screen').text(text);
      }
    })
}

function clear(){
  $('.screen').text('0');
  text = '';
  firstNumber = '';
  secondNumber = '';
  placeholderNumber = '';
  inputHolder.firstNumber = '';
  inputHolder.secondNumber = '';
  inputHolder.operand = '';

}
