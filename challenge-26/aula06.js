(function() {

	'use strict';

	// Atributos

	var $main = document.querySelector('.main');

	console.log($main.id); //id-main

	console.log($main.className); //main

	console.log($main.className = 'arroz'); //arroz

	// getAttribute() -> retorna sempre em string o valor de determinado atributo do elemento

	console.log($main.getAttribute('id')); //id-main

	console.log($main.getAttribute('class')); //arroz

	console.log($main.getAttribute('data-js')); //main

	console.log($main.getAttribute('data-number1') + $main.getAttribute('data-number2')); //12

	// parseFloat -> converte para valor float

	console.log(parseFloat($main.getAttribute('data-number1')) + parseFloat($main.getAttribute('data-number2'))); //3.1

	// parseInt -> converte para valor float

	console.log(parseInt($main.getAttribute('data-number1')) + parseInt($main.getAttribute('data-number2'))); //3

	// setAttribute -> adiciona um novo atributo ou modifica o valor de um atributo já existente

	$main.setAttribute('name', 'main-name');

	$main.setAttribute('class', 'main-class');

})();