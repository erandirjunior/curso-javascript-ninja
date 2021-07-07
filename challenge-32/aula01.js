(function() {
	
	'use strict';

	// REST Api

	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'http://localhost:3000/user');
	ajax.send();

	// abort() -> aborta a requisição

	ajax.addEventListener('readystatechange', function(e) {
		if (ajax.readyState === 2) {
			console.log('headers ok');
			ajax.abort();
		}
		if (ajax.readyState === 4) {
			console.log(ajax.responseText, ajax.status);
		}
	}, false);

})();