// IIFE -> Immediately-Invoked Function Expression, expressão de função invocada imediatamente

function sum() {
	return 1 + 2;
}

console.log(sum()); //3

var sum2 = function() {
	return 3 + 2;
}

console.log(sum2()); //5

var sum3 = function otherSum() {
	console.log(otherSum);
	return 5 + 8;
}

console.log(sum3()); //[Function: otherSum]      13
//console.log(otherSum()); //ReferenceError: otherSum is not defined

// IIFE -> Função auto-executável, torna uma função em uma expressão

// IIFE -> criam escopo local

(function() {
	console.log(1 + 2); //3
})();

(function() {
	console.log(1 + 2); //3
}());