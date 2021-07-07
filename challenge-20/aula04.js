(function(win, doc) {

	'use strict';

	// Formulários

	// value -> retorna/modifica o valor do campo

	var $inputUsername = doc.querySelector('#username');

	var $inputPassword = doc.querySelector('#password');

	console.log($inputUsername.value); //erandir

	console.log($inputPassword.value); //123

	$inputUsername.value = 'Erandir Junior';

	$inputPassword.value = 'minhasenha';

	console.log($inputUsername.value); //Erandir Junior

	console.log($inputPassword.value); //minhasenha

	// Introdução a eventos -> ação no elemento

	// addEventListener() -> adiciona um evento a um elemento

	// preventDefault() -> evita a ação principal de um elemento

	var $button = doc.querySelector('.button');

	$button.addEventListener('click', function(event) {

		event.preventDefault();

		console.log($inputUsername.value); //Antonio Erandir

		console.log($inputPassword.value); //123456
	}, false);

})(window, document);