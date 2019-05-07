// Laços -> loops

// do/while -> executa pelo menos uma única vez

var counter = 1;

while (counter < 10) {
	console.log(counter++);
} //1 2 3 4 5 6 7 8 9

counter = 1;

do {
	console.log(counter++);
} while (counter < 10);  //1 2 3 4 5 6 7 8 9

do {
	console.log(counter++);
} while (counter < 10);  //10


// for in -> percorre propriedade de um objeto, é mais lento que o for normal

var car = {
	brand: 'AUDI',
	model: 'R8',
	year: 2018
};

for (var prop in car) {
	console.log(prop);
} // marca   modelo  ano

for (var prop in car) {
	console.log(car[prop]);
} // AUDI R8 2018

// in -> verifica se propriedade existe no objeto

console.log('brand in car?', 'brand' in car); //true

console.log('doors in car?', 'doors' in car); //false