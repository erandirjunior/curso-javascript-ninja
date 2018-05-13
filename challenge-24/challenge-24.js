(function(window, document) {

  'use strict';

  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  var $visor = getQuerySelector('[data-js="visor"]');
  var $buttonsNumbers = getQuerySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = getQuerySelectorAll('[data-js="button-operation"]');
  var $buttonCE = getQuerySelector('[data-js="button-ce"]');
  var $buttonEqual = getQuerySelector('[data-js="button-equal"]');

  addEventElementsArray($buttonsNumbers, handleClickNumber);
  addEventElementsArray($buttonsOperations, handleClickOperation);

  addEvent($buttonCE, handleClickCE);
  addEvent($buttonEqual, handleClickEqual);

  function handleClickNumber() {
    addValue(this.value);
  }

  function handleClickOperation() {
    setOverlapValue(removeLastItemIfItIsAnOperator($visor.value));
    addValue(this.value);
  }

  function handleClickCE() {
    setOverlapValue(0);
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = getLastValue(number);
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return getPieceValue(number);
    }
    return number;
  }

  function handleClickEqual() {
    setOverlapValue(removeLastItemIfItIsAnOperator($visor.value));
    $visor.value = doOperation();
  }

  function getQuerySelector(element) {
    return document.querySelector(element);
  }

  function getQuerySelectorAll(element) {
    return document.querySelectorAll(element);
  }

  function addEvent(attribute, callback) {
    attribute.addEventListener('click', callback, false);
  }

  function addEventElementsArray(array, callback) {
    Array.prototype.forEach.call(array, function(button) {
      addEvent(button, callback);
    });
  }

  function getPieceValue(value) {
    return value.slice(0, -1);
  }

  function getLastValue(attribute) {
    return attribute.split('').pop();
  }

  function addValue(value) {
    $visor.value += value;
  }

  function setOverlapValue(value) {
    $visor.value = value;
  }

  function getMatch(regex) {
    return $visor.value.match(regex);
  }

  function doOperation() {
    var allValues = getMatch(/\d+[+x÷-]?/g);
    return allValues.reduce(function(accumulated, actual) {
      var firstValue = getPieceValue(accumulated);
      var operator = getLastValue(accumulated);
      var lastValue = removeLastItemIfItIsAnOperator(actual);
      var lastOperator = isLastItemAnOperation(actual) ? getLastValue(actual) : '';
      return doCalc(operator, firstValue, lastValue) + lastOperator;
    });
  }

  function doCalc(operator, firstValue, secondValue) {
    var calculator = {
      '+': function(firstValue, secondValue) {
        return Number(firstValue) + Number(secondValue);
      },
      '-': function(firstValue, secondValue) {
        return Number(firstValue) - Number(secondValue);
      },
      '*': function(firstValue, secondValue) {
        return Number(firstValue) * Number(secondValue);
      },
      '÷': function(firstValue, secondValue) {
        return Number(firstValue) / Number(secondValue);
      }
    }
    return calculator[operator](firstValue, secondValue);
  }

})(window, document);