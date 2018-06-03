(function() {
	
	'use strict';

	// Objeto Math -> utilizado para calculos matemáticos, todos os métodos são estáticos

	// Math.PI -> retorna o valor de PI

	console.log(Math.PI); //3.141592653589793

	// Math.abs() -> retorna o valor absoluto de um número

	console.log(Math.abs(-5)); //5

	// Math.ceil() -> retorna o valor arredondado para cima

	console.log(Math.ceil(4.1)); //5

	console.log(Math.ceil(3)); //3

	// Math.floor() -> retorna o valor arredondado para baixo

	console.log(Math.floor(4.1)); //4

	console.log(Math.floor(3.9)); //3

	// Math.round() -> retorna o valor arredondado para o mais próximo

	console.log(Math.round(4.1)); //4

	console.log(Math.round(3.9)); //4

	console.log(Math.round(7.4)); //7

	console.log(Math.round(7.5)); //8

	// Math.sqrt() -> retorna a raiz quadrada de um valor

	console.log(Math.sqrt(9)); //3

	// Math.cbrt() -> retorna a raiz cúbica de um valor

	console.log(Math.cbrt(27));	//3

	// Math.max() -> aceita n parâmetros e retorna o maior dentre eles

	console.log(Math.max(1, 2, 3, 4, 5)); //5	

	// Math.min() -> aceita n parâmetros e retorna o menor dentre eles

	console.log(Math.min(1, 2, 3, 4, 5)); //1		

	// Math.random -> retorna um valor aleatório entre 0 e 1

	console.log(Math.random());

	console.log(Math.round(Math.random() * 10));

})();