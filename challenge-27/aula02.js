(function(doc) {
	
	'use strict';

	// Posição dos scripts no HTML importa

	// DOMContentLoaded -> é acionado quando o documento inicial HTML foi completamente carregado e analisado, sem aguardar por folhas de estilo, imagens, e subframes para encerrar o carregamento

	function afterDomContentLoaded() {
		alert('DOMContentLoaded');
		var fragment = doc.createDocumentFragment();
		var childP = doc.createElement('p');
		var textChildP = doc.createTextNode('Texto da tag P!');

		childP.appendChild(textChildP);
		fragment.appendChild(childP);

		doc.body.appendChild(fragment);
	}

	doc.addEventListener('DOMContentLoaded', afterDomContentLoaded, false);

	// load -> é invocado quando o documento for completamente carregado, mas não espera por algo assíncrono

	function afterWindowsLoad() {
		alert('AfterWindowsLoad');
	}

	window.addEventListener('load', afterWindowsLoad, false);

})(document);