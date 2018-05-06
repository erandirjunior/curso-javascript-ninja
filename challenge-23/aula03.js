(function() {
	
	'use strict';

	// Debug -> analisar o código quando houver falhas

	// time e timeEnd -> retorna o tempo da aplicação

	console.time('Calculando tempo do for');

	for (var i = 0; i < 10000; i++) {
		console.log('calculando...');
	}

	console.timeEnd('Calculando tempo do for');

	var arr = [
		{item: 'Arroz', price: 'R$ 10', weight: '1kg'},
		{item: 'Feijão', price: 'R$ 20', weight: '2kg'},
		{item: 'Macarrão', price: 'R$ 12', weight: '1.5kg'},
		{item: 'Carne', price: 'R$ 30', weight: '10kg'},
	];

	// table -> exibe o resultado em uma tabela

	console.table(arr);

})();