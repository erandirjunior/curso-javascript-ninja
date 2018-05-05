(function(win, doc) {

	'use strict';

	// Métodos do Objeto window 

	// confirm() -> exibe uma mensagem de confimação para o usuário, retorna true ou false

	var del = confirm('Deseja realmente excluir?');

	if (del) {
		console.log('Excluido com sucesso!', del); //Excluido com sucesso! true
	} else {
		console.log('Ação cancelada!', del); //Ação cancelada! false
	}

	// DOM -> Document Object Model

	// document -> é um objeto que representa o documento

	// getElementById() -> seleciona um elemento pelo seu id

	console.log(doc.getElementById('my-link')); //<a id="my-link">My Text</a>

	// getElementsByClassName() -> seleciona elementos pela classe, retorna um HTMLCollection (array-like)

	console.log(doc.getElementsByClassName('my-link')); //HTMLCollection(3) [a.my-link, a.my-link, a.my-link]

	// getElementsByTagName() -> seleciona elementos pela tag, retorna um HTMLCollection (array-like)

	console.log(doc.getElementsByTagName('a')); //HTMLCollection(4) [a#my-link, a.my-link, a.my-link, a.my-link, my-link: a#my-link]

})(window, document);