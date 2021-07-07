(function() {

	'use strict';

	var $main = document.querySelector('.main');

	var $mainContent = document.querySelector('.main-content');

	var $mainHeader = document.querySelector('.main-header');

	var $firstText = $mainContent.firstChild;

	// appendChild() -> adiciona um filho ao final de determinado nó

	// Moveu o $mainHeader para dentro do $mainContent

	$mainContent.appendChild($mainHeader);

	// insertBefore() -> insere antes de determinado elemento

	$mainContent.insertBefore($mainHeader, $firstText);

	// cloneNode() -> clona determinado nó, podendo clonar o conteúdo ou não

	var $cloneMainHeader = $mainHeader.cloneNode(true);

	$mainContent.appendChild($cloneMainHeader);

	console.log(document.querySelectorAll('.main-header').length); //2

	// hasChildNodes() -> verifica se determinado nó tem algum filho

	console.log($mainContent.hasChildNodes()); //true

})();