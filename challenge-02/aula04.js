// Instrução Condicional

// if -> define ou toma uma decisão se determinada condição for válida

var x = 3; //undefined

var y = 7; //undefined

x; //3

y; //7

if (x === 3) { 
	y = 3;
}

y; //3

if (x === y && x === 3) { 
	x = 5;
	y = 2;
}

x; //5

y; //2

if (x === 5 || y === 1) { 
	x = 1;
	y = 1;
}

x; //1

y; //1

if (x === 2) { 
	x = 5;
	y = 5;
}

x; //1

y; //1

// else -> é acessado se determinada condição for contrária ao if

if (x === 2) { 
	y = 2;
} else {
	y = 10;
}

y; //10

// else if -> testa outras condições

if (x === 2) { 
	y = 2;
} else if (y === 3) {
	x = 3;
} else if (x === y) {
	x = 10;
	y = 100;
} else {
	x = 0;
	y = 0;
}

x; //0

y; //0
