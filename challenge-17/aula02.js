// Expressões Regulares

// g -> global

// i -> ignore case sensitive

var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.';

text.match(/de/g); //(18) ["de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de", "de"]

// Termos

// \w -> caracteres alfanuméricos e _

text.match(/\w/); //["M", index: 0, input: "Manuel Marques de Sousa, Conde de Porto Alegre (Ri…arar e se tornou a nação independente do Uruguai.", groups: undefined]

text.match(/\w/g); //(613) ["M", "a", "n", "u", "e", "l", "M", "a", "r", "q", "u", "e", "s", "d", "e", "S", "o", "u", "s", "a", "C", "o", "n", "d", "e", "d", "e", "P", "o", "r", "t", "o", "A", "l", "e", "g", "r", "e", "R", "i", "o", "G", "r", "a", "n", "d", "e", "1", "3", "d", "e", "j", "u", "n", "h", "o", "d", "e", "1", "8", "0", "4", "R", "i", "o", "d", "e", "J", "a", "n", "e", "i", "r", "o", "1", "8", "d", "e", "j", "u", "l", "h", "o", "d", "e", "1", "8", "7", "5", "a", "p", "e", "l", "i", "d", "a", "d", "o", "d", "e", …]

// \d -> números

text.match(/1875/); //["1875"]

text.match(/Junior/); //null

text.match(/\d/); //["1"]

text.match(/\d/g); //(25) ["1", "3", "1", "8", "0", "4", "1", "8", "1", "8", "7", "5", "1", "1", "8", "1", "7", "1", "8", "2", "1", "1", "8", "2", "0"]

text.match(/\d\d/); //["13"]

text.match(/\d\d/g); //(12) ["13", "18", "04", "18", "18", "75", "18", "17", "18", "21", "18", "20"]

// | -> OU em regex

text.match(/de|da/); //["de"]

text.match(/de|da/g); //(24) ["de", "de", "de", "de", "de", "de", "de", "de", "de", "da", "de", "de", "de", "da", "da", "da", "da", "de", "de", "de", "de", "da", "de", "de"]

// Classe de caracteres

// [] -> funciona com o OU, fazendo match com os caracteres contidos na lista

text.match(/[abcd]/); //["a"]

text.match(/[abcd]/g); //(134) ["a", "a", "d", "a", "d", "d", "a", "d", "d", "d", "d", "a", "d", "d", "a", "d", "a", "d", "d", "a", "d", "a", "a", "a", "c", "a", "b", "c", "a", "a", "a", "b", "a", "a", "c", "a", "a", "a", "c", "a", "d", "a", "d", "a", "a", "d", "c", "a", "d", "a", "d", "a", "a", "c", "a", "a", "a", "c", "a", "a", "c", "a", "a", "c", "a", "a", "a", "a", "d", "a", "c", "a", "b", "a", "a", "d", "a", "a", "a", "c", "d", "d", "a", "b", "a", "a", "d", "a", "d", "c", "a", "d", "a", "d", "b", "a", "a", "a", "a", "a", …][0 … 99][100 … 133]length: 134__proto__: Array(0)

text.match(/[123]/g); //(13) ["1", "3", "1", "1", "1", "1", "1", "1", "1", "2", "1", "1", "2"]

// () -> agrupamento de caracteres

text.match(/(1875)|(1817)/g); //(2) ["1875", "1817"]

// Sequência de caracteres

text.match(/[a-z]/g); //(563) ["a", "n", "u", "e", "l", "a", "r", "q", "u", "e", "s", "d", "e", "o", "u", "s", "a", "o", "n", "d", "e", "d", "e", "o", "r", "t", "o", "l", "e", "g", "r", "e", "i", "o", "r", "a", "n", "d", "e", "d", "e", "j", "u", "n", "h", "o", "d", "e", "i", "o", "d", "e", "a", "n", "e", "i", "r", "o", "d", "e", "j", "u", "l", "h", "o", "d", "e", "a", "p", "e", "l", "i", "d", "a", "d", "o", "d", "e", "e", "n", "t", "a", "u", "r", "o", "d", "e", "u", "v", "a", "s", "n", "o", "t", "a", "f", "o", "i", "u", "m", …]

text.match(/[A-Z]/g); //(25) ["M", "M", "S", "C", "P", "A", "R", "G", "R", "J", "O", "C", "L", "E", "S", "G", "A", "C", "E", "C", "B", "G", "C", "N", "U"]

text.match(/[A-Za-z0-9]/g); //(613) ["M", "a", "n", "u", "e", "l", "M", "a", "r", "q", "u", "e", "s", "d", "e", "S", "o", "u", "s", "a", "C", "o", "n", "d", "e", "d", "e", "P", "o", "r", "t", "o", "A", "l", "e", "g", "r", "e", "R", "i", "o", "G", "r", "a", "n", "d", "e", "1", "3", "d", "e", "j", "u", "n", "h", "o", "d", "e", "1", "8", "0", "4", "R", "i", "o", "d", "e", "J", "a", "n", "e", "i", "r", "o", "1", "8", "d", "e", "j", "u", "l", "h", "o", "d", "e", "1", "8", "7", "5", "a", "p", "e", "l", "i", "d", "a", "d", "o", "d", "e", …]