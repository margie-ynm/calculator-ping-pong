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
