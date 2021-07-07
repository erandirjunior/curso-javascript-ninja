(function() {
	
	'use strict';

	// REST Api

	var ajax = new XMLHttpRequest();
	ajax.open('POST', 'http://localhost:3000/user');
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send('username=junior&user=Junior&age=22');

	console.log('Cadastrando usuário...');

	ajax.addEventListener('readystatechange', function(e) {
		if (ajax.readyState === 4) {
			console.log('aqui');
			console.log('Usuário Cadastrado!', ajax.responseText);
		}
	}, false);

	var ajaxGet = new XMLHttpRequest();
	ajaxGet.open('GET', 'http://localhost:3000/user/junior');
	ajaxGet.send();

	ajaxGet.addEventListener('readystatechange', function(e) {
		if (ajaxGet.readyState === 4) {
			console.log(ajaxGet.responseText);
		}
	}, false);

})();