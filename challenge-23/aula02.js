(function() {
	
	'use strict';

	// Debug -> analisar o código quando houver falhas

	// Desativando break point

	function sum() {
		debugger;
		return Array.prototype.reduce.call(arguments, function(accumulated, actual) {
			return accumulated + actual;
		});
	}

	console.log(sum(1, 21, 32, 4)); //58,

	// Objeto console -> api do browser

	console.log(console);

	// debugger -> cria um break point no código, testado no chrome, precisa do console aberto para funcionar

})();