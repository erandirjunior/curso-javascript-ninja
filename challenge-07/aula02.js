// Arrays -> são objetos disfarçados, possuem propriedades e métodos


// length -> retorna a quantidade de itens de um array

var arr = ['Erandir', null, true, [], {}]; //undefined

arr.length; //5

var qtd = arr.length; //undefined

qtd; //5

while (qtd > 0) {
	console.log(arr[qtd--]);
} //undefined {} [] true null undefined

qtd = arr.length; //undefined

while (qtd >= 0) {
	console.log(arr[--qtd]);
} //{} [] true null Erandir undefined

qtd = arr.length; //5

while (qtd > 0) {
	console.log(arr[--qtd]);
} // {} [] true null Erandir