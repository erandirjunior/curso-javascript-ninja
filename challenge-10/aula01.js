// Wrapper Objects

// Construtores -> criam novos objetos

var name = new String('Erandir'); //undefined

name; //[String: 'Erandir']

name.length; //7

// valueOf() -> retorna o valor exato, valor literal //do objeto
undefined

name.valueOf(); //'Erandir'

var age = new Number(22); //undefined

age; //[Number: 22]

age.valueOf(); //22

// Quando não se utiliza o new, converte um valor para determinado tipo

var myVar = String(10); //undefined

myVar; //'10'

var myVar = Number('152'); //undefined

myVar; //152

myVar + 2; //154

var myVar = Boolean(0); //undefined

myVar; //false

var myVar = Boolean({}); //undefined

myVar; //true

// Javascript -> tem tipagem dinâmica