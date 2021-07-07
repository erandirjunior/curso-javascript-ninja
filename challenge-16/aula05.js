// Objeto String

// substring() -> faz a mesma coisa que o slice

var name = 'Erandir';

name.substring(3); //'ndir'

name.substring(4, 6); //'di'

name.substring(6, 2); //'andi'

// toLowerCase() -> retorna a string em caixa baixa

name.toLowerCase(); //'erandir'

// toUpperCase() -> retorna a string em caixa alta

name.toUpperCase(); //'ERANDIR'

name = 'erandir'; //'erandir'

name.charAt(0).toUpperCase() + name.slice(1); //'Erandir'