/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myarray = [null, undefined, 'erandir', 10, []];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function func(arr) {
	return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(func(myarray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunc(arr, number) {
	return arr[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var otherVar = [{}, 50, null, undefined, 'string'];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunc(otherVar, 0));
console.log(myFunc(otherVar, 1));
console.log(myFunc(otherVar, 2));
console.log(myFunc(otherVar, 3));
console.log(myFunc(otherVar, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook) {
	var books = {
		'PHP Moderno': {
			quantidadePaginas: 296,
			autor: 'Josh Lockhart',
			editora: 'O\'RELLY'
		},
		'Aprendendo SQL': {
			quantidadePaginas: 368,
			autor: 'Alan Beaulieu',
			editora: 'O\'RELLY'
		},
		'NoSQL Essencial': {
			quantidadePaginas: 216,
			autor: 'Martin Fowler',
			editora: 'novatec'
		}
	};

	if (books[nameBook] === undefined) {
		return books;
	}

	return books[nameBook];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book('Aprendendo Java'));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nameBook = 'PHP Moderno';
console.log('O livro ' + nameBook + ' tem ' + book(nameBook).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O autor do livro ' + nameBook + ' é ' + book(nameBook).autor + '.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O livro ' + nameBook + ' foi publicado pela editora ' + book(nameBook).editora + '.');