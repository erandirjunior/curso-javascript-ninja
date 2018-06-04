'use strict';

function sum(num1, num2) {
	if (!num1 || !num2) {
		return new Error('Passe dois números por parâmetro');
	}
	return num1 + num2;
}

// exportando uma função
module.exports = sum;