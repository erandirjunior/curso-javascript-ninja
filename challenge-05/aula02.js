// Parâmetros de funções -> passando arrays e objetos

var arr = [1, 2, 3]; //undefined

function myFunction(arg) {
	return arg;
} //undefined

myFunction(); //undefined

myFunction(arr); //[ 1, 2, 3 ]

function myFunction2(arg) {
	return arg[0];
} //undefined

myFunction2(arr); //1

myFunction2() //TypeError: Cannot read property '0' of undefined

myFunction2([10, 100, 1000]); //10

myFunction2(['erandir', 'junior']); //'erandir'

myFunction(['erandir', 'junior']); //[ 'erandir', 'junior' ]

var obj = {
	propriedade: 'junior',
	curso: 'Javascript Ninja',
	ninja: true
}; //undefined

obj; //{ propriedade: 'junior', curso: 'Javascript Ninja', ninja: true }

function myFunc(arg) {
	return arg;
} //undefined

myFunc(1); //1

myFunc(obj); //{ propriedade: 'junior', curso: 'Javascript Ninja', ninja: true }

myFunc(obj).propriedade; //'junior'

function myFunc1(arg) {
	return arg.curso;
} //undefined

myFunc1(); //TypeError: Cannot read property 'curso' of undefined

myFunc1(obj); //'Javascript Ninja'