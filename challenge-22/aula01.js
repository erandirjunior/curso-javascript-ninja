(function(argument) {

	'use strict';
	
	// Funções

	// length -> retorna a quantidade de parâmetros que a função recebe

	function myFunction(a, b, c) {
		return 'oi';
	}

	console.log(myFunction.length); //3

	// toString() -> retorna a função em forma de string

	console.log(myFunction.toString()); //function myFunction(a, b, c) { return 'oi; }

	// call() -> invoca a função, sendo possível passar a referência do this

	console.log(myFunction.call()); //oi

	function myFunc(a, b, c) {
		return this.lastName;
	}

	var obj = {
		lastName: 'Junior'
	};

	var obj2 = {
		lastName: 'Silva'
	};

	console.log(myFunc.call(obj)); //Junior

	console.log(myFunc.call(obj2)); //Silva 

})();