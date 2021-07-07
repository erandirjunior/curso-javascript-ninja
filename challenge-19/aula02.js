// Expressões Regulares

// Métodos de string onde se pode usar regex


// match()

'junior'.match(/nior/); //["nior", index: 2, input: "junior", groups: undefined]

// split()

'111.222.333-44'.split(/\D/);
(4) ["111", "222", "333", "44"]

// search() -> retorna o indice encontrado de determinado valor

'111.222.333-44'.search(/\./); //3

'111.222.333-44'.search(/\f/); //-1 