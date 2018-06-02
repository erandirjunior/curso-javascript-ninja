(function() {
	
	'use strict';

	// innerHTML -> define ou obtém a sintaxe HTML

	var $div = document.querySelector('[data-js="main"]');

	console.log($div.innerHTML); //<h1>Titulo</h1>     <p>Parágrafo</p>

	$div.innerHTML += '<h2>Titulo2</h2>';

})();