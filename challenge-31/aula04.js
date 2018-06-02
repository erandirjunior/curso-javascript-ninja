(function() {
	
	'use strict';

	// Objeto date -> objeto para trabalhar com data

	var date = new Date();

	console.log(date); //Sat Jun 02 2018 20:40:31 GMT-0300 (-03)

	// Criando uma data

	var year = 2018;
	var month = 5; // de 0 a 11
	var day = 2;
	var hour = 20;
	var minute = 44;
	var sec = 20;

	var newDate = new Date(year, month, day, hour, minute, sec);

	console.log(newDate); //Sat Jun 02 2018 20:44:20 GMT-0300 (-03)

})();