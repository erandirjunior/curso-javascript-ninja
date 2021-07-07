// Estrutura Léxica -> é um conjunto de regras que vai definir o modo que escrevemos nessa linguagem

// Case Sensitive -> diferencia letras maiúsculas de minúsculas

var animal = 'cachorro'; // undefined

var Animal = 'macaco'; // undefined

animal; // 'cachorro'

Animal; // 'macaco'

animal !== Animal; // true

ANIMAL; // ReferenceError: ANIMAL is not defined

// Comentário de linha //

// a variável animal é igual a cachorro

animal; // 'cachorro'

// Comentário de bloco /**/

/* este 
é um comentário
de bloco */

/* uma linha */

// Literais -> são valores que fazem parte do core do javascript

12; // 12

'cachorro'; // 'cachorro'

true; // true

false; // false

1.2; // 1.2

"animal"; // 'animal'

null; // null

{ a: 1 }; // { a: 1 }

[1, 2]; // [ 1, 2 ]

// Identificadores -> são nomes, podem iniciar com _ ou $ letras de a a z ou A a Z, digitos de 0 a 9, mas só após o primeiro digíto e qualquer caractere unicode

var π = 3.14; // undefined

π; // 3.14

var 0 = 'arroz'; //SyntaxError: Unexpected number

// Palavras reservadas não podem utilizadas para nomear variaveis, funções, etc. ex: break, function, do, else, if...