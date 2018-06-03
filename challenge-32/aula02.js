(function() {
	
	'use strict';

	// REST Api

	var ajax = new XMLHttpRequest();
	ajax.open('POST', 'http://localhost:3000/user');
	ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajax.send('username=junior&age=22');

	console.log('Cadastrando usuário...');

	ajax.addEventListener('readystatechange', function(e) {
		if (ajax.readyState === 4) {
			console.log('Usuário Cadastrado!', ajax.responseText);
		}
	}, false);

	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'http://localhost:3000/user/joao');
	ajax.send();

	ajax.addEventListener('readystatechange', function(e) {
		if (ajax.readyState === 4) {
			console.log(ajax.responseText);
		}
	}, false);

})();