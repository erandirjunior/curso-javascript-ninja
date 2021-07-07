(function(argument) {

	'use strict';
	
	// Funções

	// call() -> invoca a função, sendo possível passar a referência do this, poe passar argumentos para a função

	function myFunction(a, b, c) {
		return 'oi';
	}

	console.log(myFunction.call()); //oi

	function myFunc(a, b, c) {
		console.log(this.lastName);
		console.log(a, b, c);
	}

	var obj = {
		lastName: 'Junior'
	};

	var obj2 = {
		lastName: 'Silva'
	};

	myFunc.call(obj); //Junior

	myFunc.call(obj2); //Silva 

	myFunc.call(obj2, 1, 2, 3); //Silva   1 2 3

	function myFunc2(a, b, c) {
		console.log(a, b, c);
	}

	myFunc2.call(null, 1, 2, 3); //1 2 3
	
	myFunc2.call({}, 1, 2, 3); //1 2 3
	
	myFunc2.call(myFunc2, 1, 2, 3); //1 2 3

	// apply() -> invoca função, passa o this representante da função, passa argumentos para a função, consegue passar array como parametro, onde cada indice do array seŕa um parametro

	var arr = [1, 2, 3];

	myFunc2.call(obj, 'a', 'b', 'c'); // Junior     a b c

	myFunc.apply(obj, arr); //Junior    1 2 3

})();