// Arrays

var arr = [1, 2, 3]; //undefined

arr; //[ 1, 2, 3 ]

arr.length; //3

arr.push(4); //4

arr; //[ 1, 2, 3, 4 ]

// toString() -> retorna o array convertido em string

arr.toString(); //'1,2,3,4'

arr; //[ 1, 2, 3, 4 ]

// concat() -> concatena valores ao array, não modifica o array principal, não quebra array multimensional em unimensional

arr.concat(5); //[ 1, 2, 3, 4, 5 ]

arr; //[ 1, 2, 3, 4 ]

arr.concat([5, 6, 7, 8]); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

arr.concat([5, 6, 7, 8], [9, 10, 11]); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]

arr.concat([5, 6, 7, 8], [[9, 10, 11]]); //[ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10, 11 ] ]

// unshift() -> adiciona itens no inicio do array e retorna o tamanho atualizado do  array, modifica o array principal

arr; //[ 1, 2, 3, 4 ]

arr.unshift(0); //5

// shift() -> retorna e remove o primeiro item do array, modifica o array principal

arr.shift(); //0

arr; //[ 1, 2, 3, 4 ]