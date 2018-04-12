// Continuação dos estudos sobre arrays

// push() -> modifica o array original, adicionando um item ao final do array e retornando o novo tamanho do array

var arr = [1, 2, 3, 4, 5]; //undefined

arr.length; //5

arr.push({ carro: 'BMW' }); //6

arr.length; //6

arr; //[ 1, 2, 3, 4, 5, { carro: 'BMW' } ]

arr[5].carro; //'BMW'

arr.push(function soma(x, y) { return x + y; }); //7

arr[6](1,2); //3

arr.push([1, 2, 4]); //8

arr.length; //8

arr; //[ 1, 2, 3, 4, 5, { carro: 'BMW' }, [Function: soma], [ 1, 2, 4 ] ]

// Estrutura de repetição for -> tem a mesma finalidade do while, gera repetições de expressões 

// for -> (inicializador; condição; expressão final)
 
for (var num = 0; num < 20; num++) {
	console.log(num); } //0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

for (var num = 2, arroz = 3; num < 5; num++) {
	console.log(num);
	console.log(arroz++);
} //2 3 3 4 4 5