// Hoisting -> elevação, variáveis e funções são elevadas ao início da função 

// Funções literais -> estão disponíveis em todo o escopo da função

function myFunction() {
	var number1 = 1;
	var number2 = 2;
	return sum();

	// A sum função é elevado ao início da função
	function sum() {
		return number1 + number2;
	}
}

console.log(myFunction()); //3

// Variáveis -> que não sejam declaradas no início da função, são elevadas e inicializadas com undefined

function myFunction2() {
	var number1 = 1;
	var number2 = 2;

	// Retorna a invocação da variável sum como função, mas dá erro pois a variável sum está como undefined
	return sum();

	// A variável sum é elevada e inicializada com undefined, ou seja, não é passada uma função para ela
	var sum = function sum() {
		return number1 + number2;
	}
}

//console.log(myFunction2()); //TypeError: sum is not a function

function myFunction3() {
	console.log('ANTES DE DECLARAR', number1);
	var number1 = 10;
	console.log('DEPOIS DE DECLARAR', number1);
}

console.log(myFunction3()); //ANTES DE DECLARAR undefined      DEPOIS DE DECLARAR 10

function myFunction4() {
	console.log('ANTES DE DECLARAR', number1);
	console.log('NUMBER2', number2);
	var number1 = 10;
	console.log('DEPOIS DE DECLARAR', number1);
}

//console.log(myFunction4()); //ANTES DE DECLARAR undefined       ReferenceError: number2 is not defined

// Declarar sempre variáveis no início da função, depois, criar as funções literais

function myFunction5() {
	var number1 = 10;
	var number2 = 20;

	function sum() {
		return number1 + number2;
	}

	return sum();
}

console.log(myFunction5()); //30