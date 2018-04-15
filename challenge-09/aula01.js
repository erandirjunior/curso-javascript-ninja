// Escopo de Funções -> funções dentro de outras funções não podem ser chamadas diretamente

function myFunction() {
	function sum() {
		return 1 + 2;
	}
	return sum();
} //undefined

console.log(myFunction()); //3

//console.log(sum()); //ReferenceError: sum is not defined

function myFunction2() {
	function sum() {
		return number1 + number2;
	}
	var number1 = 1;
	var number2 = 2;
	return sum();
}

console.log(myFunction2()); //3

function myFunction3() {
	var number1 = 1;
	var number2 = 2;
	return sum();

	function sum() {
		return number1 + number2;
	}
}

console.log(myFunction3()); //3