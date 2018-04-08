// Métodos de Objeto

var myvar = function() {
    return 'variável myvar';
}; //undefined

myvar; //[Function: myvar]

myvar(); //'variável myvar'

var pessoa = {nome: 'Junior', idade: 22, peso: 53, altura: 1.61}; //undefined

pessoa; //{ nome: 'Junior', idade: 22, peso: 53, altura: 1.61 }

var pessoa = {nome: 'Junior', idade: 22, peso: 53, altura: 1.61, sexo: 'masculino'}; //undefined

pessoa.cor = 'pardo'; //'pardo'

pessoa; //{ nome: 'Junior', idade: 22, peso: 53, altura: 1.61, sexo: 'masculino', cor: 'pardo' }

pessoa.cor; //'pardo'

// Adicionando métodos a um objeto

pessoa.andar = function() {
    return 'pessoa andando';
}; //[Function]

pessoa; //{ nome: 'Junior', idade: 22, peso: 53, altura: 1.61, sexo: 'masculino', cor: 'pardo', andar: [Function] }

// Invocando métodos de um objeto

pessoa.andar(); //'pessoa andando'

pessoa.idade; //22

pessoa.aniversario = function() {
    pessoa.idade++;
}; //[Function]

pessoa; //{ nome: 'Junior', idade: 22, peso: 53, altura: 1.61, sexo: 'masculino', cor: 'pardo', andar: [Function], aniversario: [Function] }

pessoa.aniversario(); //undefined

pessoa; //{ nome: 'Junior',   idade: 23,   peso: 53, altura: 1.61, sexo: 'masculino', cor: 'pardo', andar: [Function], aniversario: [Function] }