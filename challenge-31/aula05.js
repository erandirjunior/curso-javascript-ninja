(function() {
	
	'use strict';

	// Date.now() -> método estático que retorna o número de segundos desde 1970

	console.log(Date.now());

	var date = new Date();

	// getDate() -> retorna o dia do mês

	console.log(date.getDate());

	// getDay() -> retorna o dia da semana de 0 a 6

	console.log(date.getDay());

	// getFullYear() -> retorna o ano

	console.log(date.getFullYear());

	// getYear() -> retorna o ano desde 1900

	console.log(date.getYear());

	// getHours() -> retorna a hora de 0 a 23

	console.log(date.getHours());

	// getMilliseconds() -> retorna ps milisegundos de 0 a 999

	console.log(date.getMilliseconds());

	// getMinutes() -> retorna os minutos de 0 a 59

	console.log(date.getMinutes());

	// getMonth() -> retorna os meses de 0 a 11

	console.log(date.getMonth());

	// getSeconds() -> retorna os segundos de 0 a 59

	console.log(date.getSeconds());

	// getTime() -> retorna os milisegundos desde 1/1/1970

	console.log(date.getTime());

	

})();