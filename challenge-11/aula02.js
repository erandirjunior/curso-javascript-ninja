// Saltos -> instruções para pular fluxos do código

// return -> retorna uma instrução

function myFunction() {
	return true;
}

console.log(myFunction()); //ture

function myFunction2() {
	var number = 10;
	if (number === 10) {
		return true;
	}
	return false
}

console.log(myFunction2()); //true

// break -> sai de uma instrução

var number = 10;

switch (number) {
	case 1: 
		console.log('1');
		break;

	case 2: 
		console.log('1');
		break;

	case 10: 
		console.log('10');
		break;

	default:
	console.log('default');
} //10

for (var i = 0; i < 10; i++) {
	if (i === 5) {
		break;
	}
	console.log(i);
} //0 1 2 3 4

// continue -> pula uma instrução

for (var i = 0; i < 10; i++) {
	if (i === 5) {
		continue;
	}
	console.log(i);
} //0 1 2 3 4 6 7 8 9