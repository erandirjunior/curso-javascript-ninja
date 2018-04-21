// Arrays

// indexOf() -> procura se existe determinado valor no array, retornando o indice do valor encontrado, caso não exista, retorna -1, pode receber o valor de ínnicio da busca

var arr = [1, 2, 3, 4, 5];

console.log(arr.indexOf(3)); //2

console.log(arr.indexOf(6)); //-1

arr = ['J', 'u', 'n', 'i', 'o', 'r'];

console.log(arr.indexOf('f')); //-1

console.log(arr.indexOf('u')); //1

console.log(arr.indexOf('u', 2)); //-1

console.log(arr.indexOf('u', 1)); //1

console.log(arr.indexOf('n') > -1); //true

// lastIndexOf() -> faz a mesma coisa que o indexOf, mas procura do final para o início

var indice = arr.lastIndexOf('i'); //3

console.log(arr[indice]); //i

console.log(arr.lastIndexOf('i', 2)); //-1

// Array.isArray() -> retorna um booleano informado se determinado valor é um array ou não

console.log(Array.isArray(arr)); //true

console.log(Array.isArray(1)); //false