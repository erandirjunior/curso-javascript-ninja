// Expressões Regulares

// ^ -> inicio de string

var text = '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>';

text.match(/^</); //["<"]

// $ -> fim de string

text.match(/>$/); //[">"]

text.match(/^<.+>$/); //["<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"]

// m -> flag multiline

// ? -> repetição não gulosa (se usado após repetidores)

text.match(/y?/g); //(75) [""]

text.match(/(<\w+>).+?(<\/\w+>)/g); //(3) ["<h1>Título da página</h1>", "<p>Este é um parágrafo</p>", "<footer>Rodapé</footer>"]

// (?:) -> somente agrupamento, sem capturar

text2.match(/ju(?:n|l)ho/g); //(2) ["julho", "julho"]

// \1, \2 -> referência dentro de regex

text.match(/<(\w+)>.+<\/(\1)>/g); //(3) ["<h1>Título da página</h1>", "<p>Este é um parágrafo</p>", "<footer>Rodapé</footer>"]