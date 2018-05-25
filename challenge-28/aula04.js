(function() {

	'use strict';

	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'data/data.xml');
	ajax.send(null);

	console.log('carregando');

	// throw -> dispara um erro

	// try/catch -> tenta executar alguma coisa, caso aconteça algum erro, vai para o catch
	var response = '';

	ajax.addEventListener('readystatechange', function() {

		if (isRequestOk()) {			
			try {
				response = JSON.parse(ajax.responseText);
				throw new Error('Mensagem de erro');
			} catch(e) {
				response = ajax.responseText;
			}
			console.log(response);
		}
	}, false);


	function isRequestOk(argument) {
		return ajax.readyState === 4 && ajax.status === 200;
	}
	
})();