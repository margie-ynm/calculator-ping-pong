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
