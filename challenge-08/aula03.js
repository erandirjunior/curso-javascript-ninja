// Functional Programming -> continuação

// Retornando funções

function adder(x) {
	return function(y) {
		return x + y;
	};
} //undefined

var add2 = adder(2); //undefined

add2; //[Function]

add2(3); //5

adder(2)(3); //5