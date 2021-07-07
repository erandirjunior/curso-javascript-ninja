(function(win) {

	// Passando parâmetros para um IIFE

	'use strict';

	console.log(win === window); //true

	// if / while / for -> essas estuturas com apenas uma linha não precisam de chaves

	if (win === window)
		console.log('win é igual a window'); //win é igual a window
		console.log('Exibição após o if'); //Exibição após o if

	for (var i = 0; i < 10; i++)
		console.log(i); //1 2 3 4 5 6 7 8 9 

	// Métodos do Objeto window -> npodem ser chamados diretamente

	// alert() -> exibe uma mensagem em uma popup, bloquea a navegação enquanto está sendo exibido

	window.alert('Eu sou um alert');

	alert('Alert sem precisar chamar o window');

	// prompt() -> faz uma "pergunta", esperando uma resposta, pode retorna null, vazio ou a resposta do usuário

	var idade = prompt('Qual a sua idade?');
	
	console.log(idade); //22

})(window);