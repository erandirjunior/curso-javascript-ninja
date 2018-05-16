(function() {

	'use strict';

	// DOM -> Modelo de Objeto de Documento fornece uma representação estruturada do documento como uma árvore

	// Percorrendo o DOM

	var $main = document.querySelector('.main');

	// parentNode -> retorna o pai do nó selecionado

	console.log($main.parentNode); //<body>...</body>

	// childNodes -> retorna os filhos do nó selecionado

	console.log($main.childNodes); //NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]

	// Enter são computados como sendo text

	// firstChild -> retorna o primeiro filho do nó selecionado 

	console.log($main.firstChild); //#text

	// lastChild -> retorna o último filho do nó selecionado

	console.log($main.lastChild); //#text

	// nextSibling -> retorna o próximo irmão do nó selecionado

	console.log($main.nextSibling); //<script src="aula01.js"></script>

	// previousSibling -> retorna o irmão anterior do nó selecionado

	var $mainContent = document.querySelector('.main-content');

	console.log($mainContent.previousSibling); //#text

})();