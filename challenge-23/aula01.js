(function() {
	
	'use strict';

	// Debug -> analisar o código quando houver falhas

	// Debugando a função abaixo no browser

	// Break point -> ponto de parada

	function sum() {
		return Array.prototype.reduce.call(arguments, function(accumulated, actual) {
			return accumulated + actual;
		});
	}

	console.log(sum(1, 21, 32, 4)); //58

})();