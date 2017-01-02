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
