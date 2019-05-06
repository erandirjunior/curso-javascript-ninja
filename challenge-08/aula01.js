// Funções

// Sempre nomear funções -> facilita o debug

// name -> propriedade que retorna o nome da função

var func = function() {
	return 'hi';
} //undefined

func(); //'hi'

func.name; //'func'

var func = function func() {
	return 'hi';
} //undefined

func.name;
'func'

function myFunction() {
	return 'function2';
} //undefined

myFunction(); //'function2'

myFunction.name; //'myFunction'