(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Calculator(skinName){
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.addNumbers = function (firstNum, secondNum) {
  var output = firstNum + secondNum;
  return output;
};

Calculator.prototype.subNumbers = function (firstNum, secondNum) {
  var output = firstNum - secondNum;
  return output;
};

Calculator.prototype.divideNumbers = function (firstNum, secondNum) {
  var output = firstNum / secondNum;
  return output;
};

Calculator.prototype.multiplyNumbers = function (firstNum, secondNum) {
  var output = firstNum * secondNum;
  return output;
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);
