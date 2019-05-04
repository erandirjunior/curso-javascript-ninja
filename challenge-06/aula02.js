// Estrutura de Repetição

// while -> executa expressões enquanto determinada expressão for atendida

var counter = 0; //undefined

while (counter < 10) {
	console.log(counter);
	counter++;
} //0 1 2 3 4 5 6 7 8 9

while(0) {
	console.log('zero');
} //undefined

counter = 10; //10

while (counter >  0) {
	console.log(counter--);
} //10 9 8 7 6 5 4 3 2 1

counter = 10; //10

while (counter--) {
	console.log(counter);
} //9 8 7 6 5 4 3 2 1 0
