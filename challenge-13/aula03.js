// Arrays

// forEach() -> funciona como o for, mas de forma funcional, mais rápido que o for

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach(function(item, index, array) {
	console.log(item, index, array);
}); /*1 0 [ 1, 2, 3, 4, 5, 6, 7 ]
2 1 [ 1, 2, 3, 4, 5, 6, 7 ]
3 2 [ 1, 2, 3, 4, 5, 6, 7 ]
4 3 [ 1, 2, 3, 4, 5, 6, 7 ]
5 4 [ 1, 2, 3, 4, 5, 6, 7 ]
6 5 [ 1, 2, 3, 4, 5, 6, 7 ]
7 6 [ 1, 2, 3, 4, 5, 6, 7 ]*/

arr.forEach(function(item) {
	console.log(item);
}); //1 2 3 4 5 6 7

var sum = 0;

arr.forEach(function(item) {
	sum += item;
});

console.log(sum); //28

// every() -> aplica uma função em todos os itens do array, onde seu retorno será true (se todos os itens atenderem a determinada condição) ou false, baseado no retorna da função passada

var every = arr.every(function(item) {
	return item < 5;
});

console.log(every); //false

every = arr.every(function(item) {
	return item % 2 === 0;
});

console.log(every); //false

// some() -> faz a mesma a coisa que o método every, mas se pelo menos algum elemento atender a condição, já retorna true

var some = arr.some(function(item) {
	return item % 2 === 0; 
});

console.log(some); //true