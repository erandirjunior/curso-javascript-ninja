// Escopo de Variáveis e Funções

// Escopo Global -> declaração de variáveis fora de funções 

var myvar = 1; //undefined

myvar; //1

function myFunction() { 
    return myvar;
} //undefined

myFunction(); //1

// Escopo Local -> variáveis criadas dentro de funções

function otherFunction() {
    var otherVar = true;
    return otherVar;
} //undefined

otherFunction(); //true

otherVar; //ReferenceError: otherVar is not defined

// Sempre utilizar a palavra chave 'var' para criar variáveis -> a não utilização cria variáveis globais, mesmo dentro de funções

function newFunction() {
    newVar = 'Variável global';
    return newVar;
} //undefined

newVar; //ReferenceError: newVar is not defined

newFunction(); //'Variável global'

newVar; //'Variável global'

// Argumentos de funções tem escopo local

function outraFuncao(a, b, c) {
    return a;
} //undefined

outraFuncao(1); //1

a; //ReferenceError: a is not defined
