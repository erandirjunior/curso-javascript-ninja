// Retorno de funções com arrays e objetos

// Retorno de funções -> com tipos primitivos

function myFunction() {
	return 1;
} //undefined

myFunction(); //1

function myFunction2() {
	return 'string';
} //undefined

myFunction2(); //'string'

function myFunction3() {
	return true;
} //undefined

myFunction3(); //true

function myFunction4() {
	return undefined;
} //undefined

myFunction4(); //undefined

function myFunction5() {
	return null;
} //undefined

myFunction5(); //null

// Retorno de funções -> com tipos não primitivos

function myFunc() {
	return [1, 2, 3];
} //undefined

myFunc(); //[ 1, 2, 3 ]

myFunc()[0]; //1

myFunc()[1]; //2

myFunc()[2]; //3

myFunc()[5]; //undefined

function myFunc1() {
	return {
		prop1: 1,
		prop2: 'junior',
		prop3: function() {
			return 'prop3';
		}
	};
} //undefined

myFunc1(); //{ prop1: 1, prop2: 'junior', prop3: [Function: prop3] }

myFunc1().prop1; //1

myFunc1().prop3(); //'prop3'

var values = myFunc1(); //undefined

values.prop2; //'junior'

values.prop3; //[Function: prop3]