(function() {
	
	'use strict';

	// REST Api

	var ajax = new XMLHttpRequest();
	ajax.open('GET', 'http://localhost:3000/user/junior');
	ajax.send();

	ajax.addEventListener('readystatechange', function(e) {
		if (ajax.readyState === 4) {
			console.log(ajax.responseText, ajax.status);
		}
	}, false);

})();