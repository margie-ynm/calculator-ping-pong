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
