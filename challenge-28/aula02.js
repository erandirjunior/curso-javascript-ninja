(function() {

	'use strict';

	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'aula01.js');
	ajax.send(null);

	// onreadystatechange -> verifica quando o estado mudou

	// readyState -> retorna o estado atual

	/*
	0: Não enviado
	1: Conexão Aberta
	2: Headers recebidos
	3: Carregando o corpo da requisição
	4: Concluído
	*/

	// status -> retorna o status da requisição

	ajax.addEventListener('readystatechange', function() {
		console.log('Terminou a requisição', ajax.readyState, ajax.status); //Terminou a requisição 2 200   Terminou a requisição 3 200    Terminou a requisição 4 200
	}, false);
	
})();