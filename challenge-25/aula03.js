(function() {
	
	'use strict';

	// Eventos

	function on(element, event, callback) {
		document.querySelector(element)
			.addEventListener(event, callback, false);
	}

	function off(element, event, callback) {
		document.querySelector(element)
			.removeEventListener(event, callback, false);
	}

	function handleClick(event) {
		event.preventDefault();
		alert('clicou no a');
	}

	function handleClick2(event) {
		event.preventDefault();
		alert('novo evento de clique no a');
	}

	on('[data-js="link"]', 'click', handleClick);
	off('[data-js="link"]', 'click', handleClick);

	on('[data-js="link"]', 'click', handleClick2);
	off('[data-js="link"]', 'click',handleClick2);

	// input -> é disparado sincronicamente quando o valor de um elemento <input>, <select>, ou <textarea> é alterado

	on('[data-js="input"]', 'input', function (event) {
		console.log('input', this.value);
	});

	// keyup -> é acionado quando uma tecla é liberada

	on('[data-js="input"]', 'keyup', function (event) {
		console.log('keyup', this.value);
	});

	// keydown -> é disparado quando uma tecla é pressionada

	on('[data-js="input"]', 'keydown', function (event) {
		console.log('keydown', this.value);
	});

	// change -> é acionado para os elementos <input>, <select> e <textarea> quando uma alteração no valor do elemento é confirmada pelo usuário. Ao contrário do evento input, o change não é necessariamente acionado para cada alteração de um elemento

	on('[data-js="select"]', 'change', function (event) {
		console.log(this.value);
		document.querySelector('[data-js="input"]').value = this.value;
	});

})();