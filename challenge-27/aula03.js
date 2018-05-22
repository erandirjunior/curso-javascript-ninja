(function(doc) {
	
	'use strict';

	// Técnicas Ninja

	// Copiando arrays

	// Array.prototype.slice

	var arr = [1, 2, 3, 4, 5];
	var arr2 = arr.slice();

	console.log(arr); //[1, 2, 3, 4, 5]
	console.log(arr2); //[1, 2, 3, 4, 5]
	console.log(arr === arr2); //false

	var $divs = doc.querySelectorAll('div');
	var $divsCopy = Array.prototype.slice.call($divs);

	console.log($divs); //NodeList(2) [div#id-main.main, div.entry]

	console.log($divsCopy); //(2) [div#id-main.main, div.entry]
	
	console.log($divs === $divsCopy); //false

	// Sabendo tipo de dado real

	// Object.prototype.toString

	console.log(Object.prototype.toString.call(arr)); //[object Array]
	console.log({}.toString()); //[object Object]

	function myFunc() {
		console.log(Object.prototype.toString.call(arguments));
	}

	console.log(Object.prototype.toString.call(myFunc)); //[object Function]

	myFunc(); //[object Arguments]

})(document);