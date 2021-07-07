// Objeto RegExp

var regex = new RegExp('nior');

regex; ///nior/

'junior'.match(regex); //["nior", index: 2, input: "junior", groups: undefined]

var name = 'jun123nior';

name; //"jun123nior"

regex = new RegExp('\d'); ///d/

regex; ///d/

regex = new RegExp('\\d'); ///\d/

regex; ///\d/

name.match(regex); //["1", index: 3, input: "jun123nior", groups: undefined]

// test() -> executa uma busca por uma correspondência entre  uma expressão regular e uma string. Retorna true ou false

/\d/.test(name); //true

/z/.test(name); //false

regex = new RegExp('z'); ///z/

regex.test(name); //false

// exec() -> executa a busca por um padrão em uma determinada string. Retorna um array, ou null

regex = /\d/g; ///\d/

regex.exec(name); //["1", index: 3, input: "jun123nior", groups: undefined]

regex.exec(name); //["2", index: 4, input: "jun123nior", groups: undefined]

regex.exec(name); //["3", index: 5, input: "jun123nior", groups: undefined]

regex.exec(name); //null

regex.exec(name); //["1", index: 3, input: "jun123nior", groups: undefined]

// lastIndex -> especifica o índice no qual iniciar a próxima correspondência

regex.lastIndex; //4

regex.exec(name); //["2", index: 4, input: "jun123nior", groups: undefined]

regex.lastIndex; //5

regex.exec(name); //["3", index: 5, input: "jun123nior", groups: undefined]

regex.lastIndex; //6

regex.exec(name); //null

regex.lastIndex; //0

// Caracteres especiais de string

while (result = regex.exec(name) !== null) {
	console.log('Resultado\t:\n' + result);
} //3 Resultado		:      true

// Escapando aspas em string

console.log('Julio\'s bar'); //Julio's bar