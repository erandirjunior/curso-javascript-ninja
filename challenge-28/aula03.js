(function() {

	'use strict';

	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'data/data.json');
	ajax.send(null);

	// Manipulando resposta

	console.log('carregando');

	// responseText -> retorna a resposta da requisição em formato de string

	ajax.addEventListener('readystatechange', function() {

		if (isRequestOk()) {
			//var data = JSON.parse(ajax.responseText);
			//console.log('Requisição ok', data.message);
		}
	}, false);

	function isRequestOk(argument) {
		return ajax.readyState === 4 && ajax.status === 200;
	}

	// responseXML -> retorna a resposta da requisição em formato xml

	ajax.open('GET', 'data/data.xml');
	ajax.send(null);

	ajax.addEventListener('readystatechange', function() {

		if (isRequestOk()) {
			console.log('Requisição ok', ajax.responseXML);
		}
	}, false);
	
})();