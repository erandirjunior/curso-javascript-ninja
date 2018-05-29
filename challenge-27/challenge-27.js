(function() {

	'use strict';

	/*
	Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
	métodos semelhantes aos que existem no array, mas que sirvam para os
	elementos do DOM selecionados.
	Crie os seguintes métodos:
	- forEach, map, filter, reduce, reduceRight, every e some.

	Crie também métodos que verificam o tipo do objeto passado por parâmetro.
	Esses métodos não precisam depender de criar um novo elmento do DOM, podem
	ser métodos estáticos.

	Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
	no objeto, como nos exemplos abaixo:
	DOM.isArray([1, 2, 3]); // true
	DOM.isFunction(function() {}); // true
	DOM.isNumber('numero'); // false

	Crie os seguintes métodos para verificação de tipo:
	- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	O método isNull deve retornar `true` se o valor for null ou undefined.
	*/

	function DOM(elements) {
		this.element = document.querySelectorAll(elements);
	}

	DOM.prototype.on = function on(eventType, callback) {
		Array.prototype.forEach.call(this.element, function(element) {
			element.addEventListener(eventType, callback);
		});
	};

	DOM.prototype.off = function off(eventType, callback) {
		Array.prototype.forEach.call(this.element, function(element) {
			element.removeEventListener(eventType, callback);
		});
	};

	DOM.prototype.get = function get() {
		return this.element;
	};

	DOM.prototype.forEach = function forEach() {
		return Array.prototype.forEach.apply(this.element, arguments);
	};

	DOM.prototype.map = function map() {
		return Array.prototype.map.apply(this.element, arguments);
	};

	DOM.prototype.filter = function filter() {
		return Array.prototype.filter.apply(this.element, arguments);
	};

	DOM.prototype.reduce = function reduce() {
		return Array.prototype.reduce.apply(this.element, arguments);
	};

	DOM.prototype.reduceRight = function reduceRight(callback) {
		return Array.prototype.reduceRight.apply(this.element, arguments);
	};

	DOM.prototype.every = function every(callback) {
		return Array.prototype.every.apply(this.element, arguments);
	};

	DOM.prototype.some = function some(callback) {
		return Array.prototype.some.apply(this.element, arguments);
	};

	DOM.prototype.is = function is(arg) {
		return Object.prototype.toString.call(arg);
	};

	DOM.prototype.isArray = function isArray(arg) {
		return DOM.prototype.is(arg) === '[object Array]';
	};

	DOM.prototype.isObject = function isObject(arg) {
		return DOM.prototype.is(arg) === '[object Object]';
	};

	DOM.prototype.isFunction = function isFunction(arg) {
		return DOM.prototype.is(arg) === '[object Function]';
	};

	DOM.prototype.isNumber = function isNumber(arg) {
		return DOM.prototype.is(arg) === '[object Number]';
	};

	DOM.prototype.isString = function isString(arg) {
		return DOM.prototype.is(arg) === '[object String]';
	};

	DOM.prototype.isBoolean = function isBoolean(arg) {
		return DOM.prototype.is(arg) === '[object Boolean]';
	};

	DOM.prototype.isNull = function isNull(arg) {
		return DOM.prototype.is(arg) === '[object Null]' || DOM.prototype.is(arg) === '[object Undefined]';
	};

})();