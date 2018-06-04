;(function(win) {
	'use strict';

	var number = 1;

	function init() {
		console.log('Hey', number);
	}

	init();
	win.init = init;
})(window);