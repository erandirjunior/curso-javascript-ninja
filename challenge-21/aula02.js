(function(win, doc) {
	
	'use strict';

	// setTimeout() -> executa determinada ação uma única vez, após o tempo determinado

	console.log('inicio'); //inicio

	setTimeout(function() {

		// Executou o console após 1s
		console.log('executou o setTimeout'); //executou o setTimeout
	}, 1000);

	console.log('fim'); //fim

	// setInterval() -> executa determinada ação infinitas vezes em tempo determinado

	console.log('inicio'); //inicio

	setInterval(function() {

		// Executa o console log inderminadas vezes a cada 1s
		console.log('executou o setInterval'); //executou o setTimeout  executou o setTimeout  executou o setTimeout...
	}, 1000);

	console.log('fim'); //fim

	// Função recursiva -> uma função que chama a si próprio

	var counter = 0;

	function timer() {
		console.log('timer', counter++);

		if (counter > 10) {
			return;
		}
		
		setTimeout(timer, 1000);
	}

	timer();

})(window, document);