(function() {
	
	'use strict';

	// innerHTML -> problemas de segurança, sempre tratar os valores do innerHTML

	var $div = document.querySelector('[data-js="main"]');
	var $textarea = document.querySelector('[data-js="textarea"]');
	var $form = document.querySelector('[data-js="form"]');

	$form.addEventListener('submit', function(event) {
		event.preventDefault();
		$div.innerHTML = $textarea.value;
	})

})();