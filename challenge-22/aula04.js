(function(argument) {

	'use strict';
	
	// Array-like como Arrays

	// prototype -> estende objetos

	function myFunction() {
		Array.prototype.forEach.call(arguments, function(item, index) {
			console.log(item); //1 2 3 4 5 6
		});

		var result = Array.prototype.reduce.call(arguments, function(acumulado, atual, index) {
			return acumulado + atual;
		});

		console.log(result); //21
	}

	myFunction(1, 2, 3, 4, 5, 6);

})();