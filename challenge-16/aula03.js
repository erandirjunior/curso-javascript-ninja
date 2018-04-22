(function() {

	'use strict';

	// caso não consiga deletar, lança um erro

	var obj = {
		prop1: 'prop1',
		prop2: 'prop2',
		prop3: 'prop3' 
	};

	console.log(obj); //{prop1: "prop1", prop2: "prop2", prop3: "prop3"}

	console.log(delete obj.prop1); //true

	console.log(obj); //{prop2: "prop2", prop3: "prop3"}

	var myVar = 10;

	//console.log(delete myVar); //Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.

	// Não permite propriedade com nomes iguais

	var obj2 = {
		prop1: 'prop1',
		prop1: 'prop2',
		prop3: 'prop3' 
	};

	// Existe um bug, por isso o erro não é mostrado

	console.log(obj2); //{prop1: "prop2", prop3: "prop3"}

	// Não permite nomes de parâmetros duplicados

	function myFunc(a, a, b) { //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
		return a;
	}

	console.log(myFunc(1, 2, 3));
	
})();