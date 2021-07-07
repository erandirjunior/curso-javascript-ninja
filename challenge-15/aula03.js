(function() {
	
	// arguments -> representa todos os argumentes passados para a função, é um objeto array-like, funciona na forma de array, mas não é um array, aparece implicitamente detro de funções

	function myFunction() {
		return arguments;
	}

	console.log(myFunction()); //Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]

	function myFunction2(arg1, arg2) {
		return arguments;
	}

	console.log(myFunction2(1, 2)); //Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]

	function myFunction3() {
		return arguments;
	}

	console.log(myFunction3(1, 2)); //Arguments(2) [1, 2, callee: ƒ, Symbol(Symbol.iterator): ƒ]

	function myFunction4() {
		return arguments[1];
	}

	console.log(myFunction4(1, 2)); //2

})();