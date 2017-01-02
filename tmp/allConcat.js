var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  $("#add").submit(function(event){
    event.preventDefault();
    var addFirst = parseInt($("#addFirst").val());
    var addSecond = parseInt($("#addSecond").val());
    var simpleCalculator = new Calculator("red");
    var output = simpleCalculator.addNumbers(addFirst, addSecond);
    $("#solution").append("Your answer is: " + output + ".");
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("#divide").submit(function(event) {
    event.preventDefault();
    var divideFirst = parseInt($("#divideFirst").val())
    var divideSecond = parseInt($("#divideSecond").val())
    var simpleCalculator = new Calculator("yellow")
    var output = simpleCalculator.divideNumbers(divideFirst, divideSecond);
    $("#solution").append("Your answer is " + output + ".");
  });

});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("#multiply").submit(function(event) {
    event.preventDefault();
    var multiplyFirst = parseInt($("#multiplyFirst").val())
    var multiplySecond = parseInt($("#multiplySecond").val())
    var simpleCalculator = new Calculator("yellow")
    var output = simpleCalculator.multiplyNumbers(multiplyFirst, multiplySecond);
    $("#solution").append("Your answer is " + output + ".");
  });

});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("green");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("#subtract").submit(function(event) {
    event.preventDefault();
    var subFirst = parseInt($("#subtractFirst").val())
    var subSecond = parseInt($("#subtractSecond").val())
    var simpleCalculator = new Calculator("yellow")
    var output = simpleCalculator.subNumbers(subFirst, subSecond);
    $("#solution").append("Your answer is " + output + ".");
  });

});
