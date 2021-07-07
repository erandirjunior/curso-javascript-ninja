// Funções -> blocos de código JavaScript nomeados, e que podem ser invocados usando o operador ()

function nome() {} //undefined

nome(); //undefined

nome; //[Function: nome]

var x = 1; //undefined

function soma() { 
    x = x + 1;
} //undefined

x; //1

soma(); //undefined

x; //2

soma(); //undefined

x; //3

soma; //[Function: soma]

// Funções criam escopo

function qualquer() { 
    var junior = 'junior';
} //undefined

junior; //ReferenceError: junior is not defined

qualquer(); //undefined

junior; //ReferenceError: junior is not defined

// Funções podem retornar valor

function qualquer2() { 
    var junior = 'junior';
    return junior;
} //undefined

qualquer2(); //'junior'

var y = 4; //undefined

function cinco() { 
    return 5;
} //undefined

cinco(); //5

y; //4

y + cinco(); //9

// Funções podem receber argumentos (ou parametros)

function soma (x, y) { 
    return x + y;
} //undefined

soma(); //NaN

soma(1, 2); //3
