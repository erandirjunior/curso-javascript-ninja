// Objeto String

// length - retorna a quantidade de caracteres numa string

var name = 'Erandir';

name.length; //7

// charAt() -> retorna o caractere do indice passado

name.charAt(0); //'E'

name.charAt(3); //'n'

name.charAt(10); //''

// concat() -> concatena valores na string, não modifica a string principal

name.concat('junior', 'str1'); //'Erandirjuniorstr1'

name; //'Erandir'

// indexOf() -> retorna o indice de determinado caractere

name.indexOf('d'); //4

name.indexOf('z'); //-1

name.indexOf('ndir'); //3

// lastIndexOf() -> faz a mesma coisa que o indexOf mas buscando de trás para frente

name.lastIndexOf('ndir'); //3

name.lastIndexOf('a'); //2
// replace() -> substitui determinado valor por outro, não modifica a string principal

name.replace('a', 'o'); //'Erondir'

name; //'Erandir'

// slice -> retorna parte da string

name.slice(2, 4); //'an'

name.slice(4); //'dir'
// split() -> retorna a string em array, não modifica a string principal 

name.split(); //[ 'Erandir' ]

name.split(''); //[ 'E', 'r', 'a', 'n', 'd', 'i', 'r' ]

name.split('n'); //[ 'Era', 'dir' ]

var arr = name.split('n'); //undefined

arr; //[ 'Era', 'dir' ]

arr.join('n'); //'Erandir'

name.split('r').join('b'); //'Ebandib'
