(function() {
	
	'use strict';

	// Sync -> síncrono, um comando após o outro, sequência de comandos

	console.log(1); //1

	console.log(2); //2

	console.log(3); //3

	// Async -> assíncrono, eventos, aguardar uma ação do usuário ou temporizador na tela

	console.log('inicio'); //inicio

	document.addEventListener('click', function() {
		console.log('clicou no documento'); //clicou no documento
	}, false);

	console.log('fim'); //fim

})();