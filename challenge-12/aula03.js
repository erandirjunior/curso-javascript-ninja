// Métodos de objetos

// keys() -> um array com todas as propriedades do objeto

var obj = { x:1, y:2 }; //undefined

Object.keys(obj); //[ 'x', 'y' ]

Object.keys(obj).length; //2

// isPrototypeOf() - verifica se um objeto é protótipo de outro

var obj2 = Object.create(obj); //undefined

var obj3 = Object.create(obj2); //undefined

obj.isPrototypeOf(obj2); //true

obj.isPrototypeOf(obj3); //true

obj2.isPrototypeOf(obj3); //true

obj2.isPrototypeOf(obj); //false

obj3.isPrototypeOf(obj); //false

obj3.isPrototypeOf(obj2); //false

// JSON.stringify() - retorna o objeto em formato JSON

JSON.stringify(obj); //'{"x":1,"y":2}'

obj; //{ x: 1, y: 2 }

var str = JSON.stringify(obj); //undefined

str; //'{"x":1,"y":2}'

// JSON.parse() - retorna o JSON em formato de objeto javascript

JSON.parse(str); //{ x: 1, y: 2 }

JSON.parse(true); //true

JSON.parse('true'); //true

JSON.stringify(true); //'true'

// Arrays

var arr = []; //undefined

arr.push(1); //1

arr; //[ 1 ]

arr[2] = 2; //2

arr[3] = 5; //5

arr[12] = 'doze'; //'doze'

arr; //[ 1, , 2, 5, , , , , , , , , 'doze' ]

// pop() -> remove o último item do array, retornando esse valor

arr.pop(); //'doze'

arr; //[ 1, , 2, 5, , , , , , , ,  ]

arr = []; //[]

arr.push('arroz'); //1

arr.push('feijao'); //2

arr.push('macarrao'); //3

var last = arr.pop(); //undefined

last; //'macarrao'