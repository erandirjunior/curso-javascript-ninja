// Operador Módulo % ->  retorna o resto da divisão

3 / 3; //1

4 / 2; //2

5 / 2; //2.5

5 % 2; //1

4 % 2; //0

var num = 0; //undefined

while (num <= 20) {
	if (num % 2) {
		console.log(num);
	}
	num++;
} //1 3 5 7 9 11 13 15 17 19

num = 0; //0

while (num <= 20) {
	num % 2 === 0 ? console.log(num) : '';
	num++;
} //0 2 4 6 8 10 12 14 16 18 20