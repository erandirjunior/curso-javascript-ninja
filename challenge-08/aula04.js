// Functional Programming -> continuação

// Passando objetos por parâmetro

var car = {
    color: 'yellow'
}; //undefined

function getCarColor(mycar) {
    return mycar.color;
} //undefined

getCarColor(car); //'yellow'

// Passando funções por parâmetro

function showOtherFunction(func) {
    return func();
} //undefined

function returnedFunction() {
    return 'returned function';
} //undefined


showOtherFunction(returnedFunction); //'returned function'

showOtherFunction(function() {
    return 'Functional JS Ninja!';
}); /'Functional JS Ninja!'