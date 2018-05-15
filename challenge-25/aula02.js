(function() {
	
	'use strict';

	// Eventos

	// addEventListener() -> 3º parâmetro significa a forma como o elemento é capturado, ou seja, se for false (padrão) o evento do filho é propagado primeiro que o do pai, senão o do pai é propagado primeiro.

	function on(element, event, callback) {
		document.querySelector(element)
			.addEventListener(event, callback, false);
	}

	on('[data-js="link"]', 'click', function(event) {
		event.preventDefault();
		alert('clicou no a');
	});

	on('[data-js="div"]', 'click', function() {
			alert('clicou na div');
	});

	on('[data-js="span"]', 'click', function() {
			alert('clicou no span');
	});

})();