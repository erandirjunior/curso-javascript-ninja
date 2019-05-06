// Functional Programming -> programação funcional

// Uma forma de de programar baseado em funções ou nas características que as funções tem

// Funções -> objetos ou 'cidadãos' de primeira classe, funções tem o mesmo tramamento que objetos, o que se consegue fazer com objetos também é possível fazer com funções

var obj = {}; //undefined

obj; //{}

var func = function func() {}; //undefined

func(); //undefined

func.name; //'func'

// Retornando objetos

function person() {
    return {
        name: 'Erandir',
        lastName: 'Junior'
    };
} //undefined

person(); //{ name: 'Erandir', lastName: 'Junior' }

function person2() {
    var info = {
        name: 'Erandir',
        lastName: 'Junior'
        };
    return info;
} //undefined

person2(); //{ name: 'Erandir', lastName: 'Junior' }

person().name; //'Erandir'

person2().lastName; //'Junior'