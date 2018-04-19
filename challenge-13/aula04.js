// Arrays

// map() -> percorre todo o array e retorna um novo array com os valores retornados

var arr = [1, 2, 3, 4, 5];

var map = arr.map(function(item, index, array) {
	return item;
});

console.log(map); //[ 1, 2, 3, 4, 5 ]

map = arr.map(function(item, index, array) {
	return item + 1;
});

console.log(map); //[ 2, 3, 4, 5, 6 ]

map = arr.map(function(item, index, array) {
	return { index: index, item: item };
});

console.log(map); //[ { index: 0, item: 1 }, { index: 1, item: 2 }, { index: 2, item: 3 }, { index: 3, item: 4 }, { index: 4, item: 5 } ]

// Utilizando forEach
var newArr = [];
arr.forEach(function(item, index, array) {
	newArr.push({ index: index, item: item });
});

console.log(newArr); //[ { index: 0, item: 1 }, { index: 1, item: 2 }, { index: 2, item: 3 }, { index: 3, item: 4 }, { index: 4, item: 5 } ]

// filter() -> retorna um novo array filtrado 

var filter = arr.filter(function(item, index, array) {
	return item > 2;
});

console.log(filter); //[ 3, 4, 5 ]

// Encadeando métodos

var mapFilter = arr.map(function(item) {
	return item + 10;
}).filter(function(item) {
	return item > 13;
});

console.log(mapFilter); //[ 14, 15 ]