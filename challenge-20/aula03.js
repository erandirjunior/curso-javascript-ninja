(function(win, doc) {

	'use strict';

	// getElementsByName() -> seleciona elementos pelo atributo name, retorna um NodeList (array-like)

	console.log(doc.getElementsByName('username')); //NodeList [input]

	// Variáveis que referenciam ao DOM, é uma boa prática iniciarem com $

	var $inputs = doc.getElementsByTagName('input');

	console.log($inputs); //HTMLCollection(2) [input, input, username: input, password: input]

	// getElementById(), getElementsByClassName(), getElementsByTagName() e getElementsByName() -> são métodos dinâmicos

	// querySelector() -> faz a seleção de elementos a partir de uma estrutura css, retorna um único elemento, é estático

	console.log(doc.querySelector('input')); //<input type="text" name="username">

	// querySelectorAll() -> faz a seleção de elementos a partir de uma estrutura css, retorna um NodeList (array-like), é estático

	console.log(doc.querySelectorAll('input')); //NodeList(2) [input#username, input#password]

	console.log(doc.querySelectorAll('[type=text]')); //NodeList [input#username]
	
	console.log(doc.querySelectorAll('.button')); //NodeList [button.button]

	console.log(doc.querySelector('#password')); //<input type="password" name="password" id="password">

})(window, document);