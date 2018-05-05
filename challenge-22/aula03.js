(function(argument) {

	'use strict';
	
	// Funções

	// prototype -> estende objetos

	// Valores do objeto tem prescedência aos do prototype

	function MyFunction(name, lastName) {
		this.name = name;
		this.lastName = lastName;
		this.height = 1.60;
	}

	MyFunction.prototype.fullName = function() {
		return this.name + ' ' + this.lastName;
	};

	var erandir = new MyFunction('Erandir', 'Junior');

	MyFunction.prototype.age = 22;

	console.log(erandir.fullName()); //Erandir Junior

	console.log(erandir.age); //22

	MyFunction.prototype.age = 20;

	console.log(erandir.age); //20

	MyFunction.prototype.height = 1.80;

	console.log(erandir.height); //1.6

})();