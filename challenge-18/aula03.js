// Expressões Regulares

var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas",[nota 1] foi um militar, político, abolicionista e monarquista brasileiro. Ele nasceu em uma família rica e de tradição militar, entrando no exército em 1817 quando ainda era criança. Sua iniciação militar ocorreu na Guerra contra Artigas, que teve seu território anexado e se tornou em 1821 a província brasileira da Cisplatina. Ele ficou envolvido durante boa parte da década de 1820 no esforço brasileiro para manter a Cisplatina como parte de seu território, primeiro durante a independência do Brasil e depois na Guerra da Cisplatina. No final a província conseguiu se separar e se tornou a nação independente do Uruguai.';

// Repetidores continuação

// intervalo aberto {n,} -> intem anterio n ou mais vezes

text.match(/\d{1,}/g); //(8) ["13", "1804", "18", "1875", "1", "1817", "1821", "1820"]

text.match(/\d{5,}/g); //null

text.match(/\d{4,}/g); //(5) ["1804", "1875", "1817", "1821", "1820"]

// {n} -> item anterior exatamente n vezes

text.match(/\d{4}/g); //(5) ["1804", "1875", "1817", "1821", "1820"]

text.match(/\d{2}/g); //(12) ["13", "18", "04", "18", "18", "75", "18", "17", "18", "21", "18", "20"]

text.match(/\d{3}/g); //(5) ["180", "187", "181", "182", "182"]

text.match(/\d{0}/g); //(782)

// ? -> opcional, zero ou uma ocorrência do item anterior

text.match(/\d\d?/g); //(13) ["13", "18", "04", "18", "18", "75", "1", "18", "17", "18", "21", "18", "20"]

text.match(/\d\d\d?/g); //(7) ["13", "180", "18", "187", "181", "182", "182"]

// + -> uma ou mais ocorrência do item anterior

text.match(/\d+/g); //(8) ["13", "1804", "18", "1875", "1", "1817", "1821", "1820"]

text.match(/\w+/g); //(144)

// * -> zero ou mais ocorrência do item anterior

text.match(/\w*/g); //(313)

text.match(/\d*/g); //(765)

var text2 = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';


// Validando uma url

var url = 'http://www.google.com.br		htp://chinleo.		https://google.com		http://www.globo.org';

url.match(/https?:\/\/\w+[.\w]+/); //["http://www.google.com.br", index: 0, input: "http://www.google.com.br		htp://chinleo.		https://google.com		http://www.globo.org", groups: undefined]

// Validando um email

email.match(/[\w+]+@\w+\.\w+([.\w]+)?/); //(2) ["erandir@email.com", undefined, index: 0, input: "erandir@email.com		jose@hotmail.com		maria@casadajoana.com.br", groups: undefined]

var queryString = '?s=lala&b=bebe&c=cce';

queryString.replace(/[?&](\w+)=(\w+)/g, function(regex, key, value) {
	console.log(key, value);
}); //s lala  b bebe  c cce