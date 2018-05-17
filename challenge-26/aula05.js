(function() {

	'use strict';

	var $main = document.querySelector('.main');

	var $mainContent = document.querySelector('.main-content');

	var $mainHeader = document.querySelector('.main-header');

	var $cloneMainHeader = $mainHeader.cloneNode(true);

	var $mainFooter = document.querySelector('.main-footer');

	var $firstText = $mainContent.firstChild;

	// removeChild() -> remove determinado filho do nó

	$mainContent.removeChild($firstText);

	// replaceChild() -> substitui determinado filho do nó por outro elemento

	$main.replaceChild($cloneMainHeader, $mainFooter);

	// createTextNode() -> cria um elemento de texto

	var newTextNode = document.createTextNode('Opa!');

	$main.appendChild(newTextNode);

	// createElement - cria um novo elemento

	var $newP = document.createElement('p');

	$newP.appendChild(newTextNode);

	$main.appendChild($newP);

})();