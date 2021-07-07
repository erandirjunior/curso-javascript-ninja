(function(win, doc) {
	
	'use strict';

	// UTILIZAR SETTIMEOUT RECURSIVO AO INVÉS DO SETINTERVAL

	var counter = 0;

	function timer() {
		console.log('timer', counter++); //timer 0 timer 1 timer 2 timer 3 timer 4 timer 5 timer 6 timer 7 timer 8 timer 9 timer 10

		if (counter > 10) {
			return;
		}
		
		setTimeout(timer, 1000);
	}

	timer();

	var counter2 = 0;

	function timer2() {
		if (counter2 > 10) {
			return;
		}

		console.log('timer2', counter2++); //timer2 0 timer2 1 timer2 2 timer2 3 timer2 4 timer2 5 timer2 6 timer2 7 timer2 8 timer2 9 timer2 10
	}

	setInterval(timer2, 1000);

	// clearTimeout() -> limpa o setTimeout

	var counter3 = 0;

	var $button = doc.querySelector('[data-js="button"]');

	var temporizador;

	function timer3() {
		console.log('timer3', counter3++);

		if (counter3 > 20) {
			return;
		}
		
		temporizador = setTimeout(timer3, 1000);
	}

	timer3();

	$button.addEventListener('click', function() {
		clearTimeout(temporizador);
	}, false);

	// clearInterval() -> limpa o setInterval

	var counter4 = 0;

	var $button2 = doc.querySelector('[data-js="button2"]');

	function timer4() {
		console.log('timer4', counter4++);	
	}

	var temporizador2 = setInterval(timer4, 1000);

	$button2.addEventListener('click', function() {
		clearInterval(temporizador2);
	}, false);


})(window, document);