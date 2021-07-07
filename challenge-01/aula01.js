// Variáveis -> nome simbólico de valores

var x; //undefined

x; //undefined

// Tipos de Dados

// Int

x = 0; //0

x; //0

x = 1; //1

x; //1

// Float

x = 1.2; //1.2

x; //1.2

// String

x = 'hello world'; //'hello world'

x; //'hello world'

x = "hello world"; //'hello world'

x; //'hello world'

// Boolean

x = true; //true

x; //true

x = false; //false

x; //false

// Null

x = null; //null

x; //null

// Undefined

x = undefined; //undefined

x; //undefined

// Object

x = {}; //{}

x; //{}

var pessoa = {}; //undefined

pessoa = { 
	altura: 1.60,
	peso: 52
}; //{ altura: 1.6, peso: 52 }

pessoa; //{ altura: 1.6, peso: 52 }

pessoa.altura; //1.6

pessoa.peso; //52

pessoa.altura = 1.90; //1.9

pessoa; //{ altura: 1.9, peso: 52 }

pessoa.peso = 80; //80

pessoa; //{ altura: 1.9, peso: 80 }

// Array

var numeros = []; //undefined

numeros; //[]

numeros = [1, 2, 3, 4, 5, 6]; //[ 1, 2, 3, 4, 5, 6 ]

numeros; //[ 1, 2, 3, 4, 5, 6 ]

numeros[0]; //1

numeros[3]; //4

// Arrays são objetos

pessoa; //{ altura: 1.9, peso: 80 }

pessoa['altura']; //1.9

pessoa["altura"]; //1.9