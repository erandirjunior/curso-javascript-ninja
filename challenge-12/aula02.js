// Objetos -> continuação

// Object.create() - //cria um novo objeto herdando as características de outro objeto

var obj = { x:1, y:2 }; //undefined

var obj2 = Object.create(obj); //undefined

obj2; //{}

obj2.prototype; //undefined

obj2.x; //1

obj2.y; //2

obj.x = 2; //2

obj2.x; //2

obj2.x = 1; //1

obj2; //{ x: 1 }

obj.x; //2

obj = Object.create({}); //{}

obj; //{}

obj.prototype; //undefined

// toString() -> converte um valor em string, é //uma propriedade do Object.prototype

obj.toString(); //'[object Object]'

obj = {}; //{}

obj.toString(); //'[object Object]'

obj.x = 1; //1

obj.y = 2; //2

obj2 = {}; //{}

obj2 = Object.create(obj); //{}

obj2.x; //1

var obj3 = Object.create(obj2); //undefined

obj3.x; //1

obj3.y; //2

obj2.x = 2; //2

obj3.x; //2

obj; //{ x: 1, y: 2 }

obj2; //{ x: 2 }

obj3; //{}

obj2 === obj3; //false

for (var prop in obj) { 
	console.log(prop);
} //x y

for (var prop in obj2) { 
	console.log(prop);
} //x y

for (var prop in obj3) { 
	console.log(prop);
} //x y

// hasOwnProperty() -> verifica se a propriedade é especifica daquele objeto

obj.hasOwnProperty('x'); //true

obj2.hasOwnProperty('x'); //true

obj2.hasOwnProperty('y'); //false

obj3.hasOwnProperty('x'); //false

obj3.hasOwnProperty('y'); //false

for (var prop in obj2) {
	if (obj2.hasOwnProperty(prop)) {
		console.log(prop);
	}
} //x