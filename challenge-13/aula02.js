// Arrays

// slice() -> retorna o pedaço selecionado do array, não modifica o array principal

var arr = [1, 2, 3, 4, 5]; //undefined

arr.slice(1); //[ 2, 3, 4, 5 ]

arr; //[ 1, 2, 3, 4, 5 ]

arr.slice(); //[ 1, 2, 3, 4, 5 ]

arr.slice(0); //[ 1, 2, 3, 4, 5 ]

arr.slice(0, 2); //[ 1, 2 ]

arr.slice(1, 4); //[ 2, 3, 4 ]

arr; //[ 1, 2, 3, 4, 5 ]

arr.slice(-2); //[ 4, 5 ]

arr; //[ 1, 2, 3, 4, 5 ]

arr.slice(2); //[ 3, 4, 5 ]

arr.slice(2, 1); //[]

arr.slice(2, -1); //[ 3, 4 ]

// splice() -> se passado até dois parâmetros, remove itens do array, se passado 3 ou mais, adiciona itens no array, modifica o array principal

arr.splice(3); //[ 4, 5 ]

arr; //[ 1, 2, 3 ]

arr.push(4, 5, 6, 7); //7

arr; //[ 1, 2, 3, 4, 5, 6, 7 ]

arr.splice(1, 3); //[ 2, 3, 4 ]

arr; //[ 1, 5, 6, 7 ]

arr.splice(1, 0, 'a'); //[]

arr; //[ 1, 'a', 5, 6, 7 ]

arr.splice(1, 0, 'b', 'c', 'd'); //[]

arr; //[ 1, 'b', 'c', 'd', 'a', 5, 6, 7 ]

arr.splice(1,3); //[ 'b', 'c', 'd' ]

arr.splice(2, 0, 'b', 'c', 'd'); //[]

arr; //[ 1, 'a', 'b', 'c', 'd', 5, 6, 7 ]

arr.splice(1, 4, 2, 3, 4); //[ 'a', 'b', 'c', 'd' ]

arr; //[ 1, 2, 3, 4, 5, 6, 7 ]