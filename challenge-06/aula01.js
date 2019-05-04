// Operador virgula -> separa algumas expressões e junta em uma única expressão

function myFunc() {
    var a = 1, b = 2, c = 3;
    return [a, b, c];
} //undefined

myFunc(); //[ 1, 2, 3 ]

a; //ReferenceError: a is not defined

b; //ReferenceError: b is not defined

c; //ReferenceError: c is not defined

function myFunc2() {
    var x = 0;
    return (x +=1, x);
} //undefined

myFunc2(); //1

// switch -> estrutura condicional

function myFunc3(x) {
    switch(x) {
        case 1:
            console.log('x é 1');
            break;
        case 2:
            console.log('x é 2');
            break;
        default: 
            console.log('x não é nem 1 nem 2');
    }
} //undefined

myFunc3(); //x não é nem 1 nem 2

myFunc3(1); //x é 1
