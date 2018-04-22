(function() {

	'use strict';

	// Não permite o uso do with -> serve para diminuir o tamanho de um objeto

	var obj = {
		prop1: {
			prop2: {
				prop3: {
					prop31: 'prop31',
					prop32: 'prop32',
					prop33: 'prop33'
				}
			}
		}
	};

	console.log(obj.prop1.prop2.prop3); //{prop31: "prop31", prop32: "prop32", prop33: "prop33"}

	/*with (obj.prop1.prop2.prop3) { //Uncaught SyntaxError: Strict mode code may not include a with statement
		console.log(prop31, prop32, prop33); //prop31 prop32 prop33
	}*/

	// Não permite o this para o objeto global window

	console.log(this); //undefined
	
})();