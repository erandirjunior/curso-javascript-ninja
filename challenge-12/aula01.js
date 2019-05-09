// Objetos ->são mutáveis, ou seja, podem mudar, e são manipulados por referência

var obj = { 
	prop1: 'prop1',
	prop2: 'prop2'
}; //undefined

obj; //{ prop1: 'prop1', prop2: 'prop2' }

var obj2 = { 
	prop1: 'prop1',
	prop2: 'prop2'
}; //undefined

obj.prop1 = 'propriedade 1'; //'propriedade 1'

obj; //{ prop1: 'propriedade 1', prop2: 'prop2' }

// delete -> deleta propriedades do objeto 

delete obj.prop1; //true

obj; //{ prop2: 'prop2' }

obj.prop1 = 'prop1'; //'prop1'

obj; //{ prop2: 'prop2', prop1: 'prop1' }

var name = 'erandir'; //undefined

name; //'erandir'

obj == obj2; //false

obj === obj2; //false

var objCopy = obj; //undefined

objCopy; //{ prop2: 'prop2', prop1: 'prop1' }

objCopy = obj; //{ prop2: 'prop2', prop1: 'prop1' }

objCopy.prop1; //'prop1'

objCopy.prop1 = 'propriedade do objeto copy'; //'propriedade do objeto copy'

objCopy; //{ prop2: 'prop2', prop1: 'propriedade do objeto copy' }

obj; //{ prop2: 'prop2', prop1: 'propriedade do objeto copy' }

// Criando objetos -> por meio de literais (mais rápido que o modo construtor), como construtor (new), com Object.create()

var newObj = new Object(); //undefined

newObj; //{}

Object; //[Function: Object]

// Object.prototype -> protótipo do objeto criado, é o pai de todos os objetos em javascript

Object.prototype; //{}

Array; //[Function: Array]

Date; //[Function: Date]

RegExp; //[Function: RegExp]

String; //[Function: String]