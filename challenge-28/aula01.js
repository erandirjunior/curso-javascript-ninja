(function() {

	'use strict';

	// Ajax -> Asynchronous Javascript and XML, serve para fazer requisição sem ter que recarregar a tela

	// XMLHttpRequest() -> é uma API que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor

	var ajax = new XMLHttpRequest();

	// Criando uma requisição passando o tupo da requisição e a url para ser acessada

	ajax.open('GET', 'aula01.js');

	// Enviando algum dado na requisição

	ajax.send(null);
	
})();