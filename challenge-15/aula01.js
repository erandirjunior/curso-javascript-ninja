var name = 'Global';

// IIFE -> vai impedir que outros arquivos modifiquem os valores de determinadas variáveis
(function() {
	var name = 'Local';
	console.log(name); //Local
})();

console.log(name); //Global