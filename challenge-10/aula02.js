// TypeOf -> testa o tipo do valor

typeof undefined; //'undefined'

typeof function() {}; //'function'

typeof {}; //'object'

typeof []; //'object'

typeof 'string'; //'string'

// Erro na implementação do null
typeof null; //'object'

typeof 10; //'number'

typeof NaN; //'number'

typeof true; //'boolean'

// Utilizar somente para valores primitivos

function sum(num1, num2) {
	return num1 + num2;
} //undefined

sum(10, 2); //12

sum('JS', 2); //'JS2'

function sum(num1, num2) {
	if (typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	}
} //undefined

sum(10, 2); //12

sum({}, []); //undefined