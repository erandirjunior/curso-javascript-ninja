(function() {
	
	'use strict';

	function on(element, event, callback) {
		document.querySelector(element)
			.addEventListener(event, callback, false);
	}

	on('[data-js="input"]', 'focus', function() {
		console.log('elemento recebeu foco');
	});

	on('[data-js="input"]', 'blur', function() {
		console.log('elemento perdeu foco');
	});

	on('[data-js="input"]', 'contextmenu', function() {
		console.log('botão direito clicado');
	});

	on('[data-js="input"]', 'copy', function() {
		console.log('copiou:', this.value);
	});

	on('[data-js="input"]', 'cut', function() {
		console.log('recortou:', this.value);
	});

	on('[data-js="input"]', 'paste', function() {
		console.log('colou:', this.value);
	});

	on('[data-js="input"]', 'mouseover', function() {
		console.log('mouse por cima do elemento');
	});

	on('[data-js="input"]', 'mouseout', function() {
		console.log('mouse saiu do elemento');
	});

})();