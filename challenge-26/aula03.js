(function() {

	'use strict';

	var $main = document.querySelector('.main');

	var $mainContent = document.querySelector('.main-content');

	// children -> não é padronizada, retorna uma coleção de elementos filho de um elemento, como um objeto HTMLCollection

	console.log($main.children); //HTMLCollection(3) [header.main-header, section.main-content, footer.main-footer]

	// firstElementChild -> retorna o primeiro elemento filho do nó selecionado

	console.log($main.firstElementChild); //<header class="main-header">...</header>

	// lastElementChild -> retorna o último elemento filho do nó selecionado

	console.log($main.lastElementChild); //<footer class="main-footer">...</footer>

	// nextElementSibling -> retorna o próximo elemento irmão do nó selecionado

	console.log($mainContent.nextElementSibling); //<footer class="main-footer">...</footer>

	// previousElementSibling -> retorna o elemento irmão anterior do nó selecionado

	console.log($mainContent.previousElementSibling); //<header class="main-header">...</header>

	// childElementCount -> retorna a quantidade de elementos filhos do nó selecionado

	console.log($main.childElementCount); //3

	console.log($mainContent.childElementCount); //1

	// hasAttribute() -> retorna se o elemento tem determinado atributo

	console.log($main.hasAttribute('class')); //true

	console.log($main.hasAttribute('id')); //false

	// hasAttributes() -> retorna se o elemento tem qualquer atributo

	console.log($main.hasAttributes()); //true

})();