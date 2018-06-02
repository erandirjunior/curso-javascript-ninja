(function() {
	
	'use strict';

	// insertAdjacentHTML() -> faz o que o innerHTML faz, mas pode ser escolhido a posição onde será inserido o código

	var $form = document.querySelector('[data-js="form"]');
	
	$form.insertAdjacentHTML('beforebegin', '<h1>Meu formulário</h1>');

	$form.insertAdjacentHTML('afterbegin', '<h1>Meu formulário 2</h1>');

	$form.insertAdjacentHTML('beforeend', '<h1>Meu formulário 3</h1>');

	$form.insertAdjacentHTML('afterend', '<h1>Meu formulário 4</h1>');

	// outerHTML -> retorna o conteudo do elemento em formato string

	$form.insertAdjacentHTML('beforebegin', $form.outerHTML);

	// Exibe o elemento como objeto

	console.dir($form);

})();