(function() {

	'use strict';

	var $main = document.querySelector('.main');

	// nodeType -> retorna o tipo do nó

	/*
	9 = Document
	1 = Element
	3 = Text
	8 = Comments
	22 = documentFragment
	*/

	console.log($main.nodeType); //1

	console.log($main.firstChild.nodeType); //3

	// nodeValue -> retorna ou define o valor do nó

	var $mainContent = document.querySelector('.main-content');

	console.log($mainContent.firstChild.nodeValue); //Texto1

	console.log($mainContent.firstChild.nextSibling.nodeValue); //comentário

	// nodeName -> retorna o nome do nó

	console.log($main.nodeName); //DIV

	console.log($mainContent.firstChild.nodeName); //#text

	console.log($mainContent.firstChild.nextSibling.nodeName); //#comment

	// caniuse.com -> site para checar quais browsers suportam determinadas propriedades

})();