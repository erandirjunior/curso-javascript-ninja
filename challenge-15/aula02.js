(function() {
	// this -> referencia valores do objeto

	var myObject = {
		myProperty: 1,
		init: function() {
			return this;
		}
	};

	console.log(myObject); //{myProperty: 1, init: ƒ}

	console.log(myObject.init()); //{myProperty: 1, init: ƒ}

	console.log(myObject.init().myProperty); //1

	// Funções -> sempre que uma função não pertece a um objeto, o this apontará para o objeto global window

	function myFunction() {
		return this;
	}

	console.log(myFunction()); //window

	console.log(myFunction() === window); //true

	// Objeto construtor -> começam com letras maiúsculas, utilizam a palavra chave new para criar o objeto

	function MyConstructor() {
		this.prop1 = 'prop1';
		this.prop2 = 'propriedade2'; 
	}

	var constructor = new MyConstructor();

	console.log(constructor); //MyConstructor {prop1: "prop1", prop2: "prop2"}

	console.log(constructor.prop1); //prop1

	console.log(constructor.prop2); //propriedade2

	console.log(MyConstructor()); //undefined

	console.log(prop1); //prop1

})();