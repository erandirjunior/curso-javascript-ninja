// Arrays

// reduce() -> reduz um array, retorna o valor reduzido, pode receber um valor inicial

var arr = [1, 2, 3, 4, 5];

var reduce = arr.reduce(function(acumulado, atual, index, array) {
	return acumulado + atual;
}, 0);

/*
1ª - 0 + 1 = 2
2ª - 1 + 2 = 3
3ª - 3 + 3 = 6
4ª - 6 + 4 = 10
5ª - 10 + 5 = 15
*/

console.log(reduce); //15

var reduce2 = arr.reduce(function(acumulado, atual, index, array) {
	return acumulado + atual;
});

/*
1ª - 1 + 2 = 3
2ª - 3 + 3 = 6
3ª - 6 + 4 = 10
4ª - 10 + 5 = 15
*/

console.log(reduce2); //15

arr = ['E', 'r', 'a', 'n', 'd', 'i', 'r'];

var reduce2 = arr.reduce(function(acumulado, atual, index, array) {
	return acumulado + atual;
});

console.log(reduce2); //Erandir

// reduceRight() -> faz a mesma coisa que o reduce, só que dá direira para a esquerda

var reduceRight = arr.reduceRight(function(acumulado, atual, index, array) {
	return acumulado + atual;
});

console.log(reduceRight); //ridnarE