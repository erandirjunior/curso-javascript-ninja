(function() {
	
	'use strict';

	// Closure -> uma função guarda a referência interna e externa

	var scope = 'global scope';

	function checkScope() {
		var scope = 'local scope';
		function func() {
			return scope;
		}
		return func;
	}

	console.log(checkScope()()); //local scope
	console.log(scope); //global scope

	var counter = 0;

	//function increment() {
	//	return counter++;
	//}

	var increment = (function(){
		var counter = 0;
		return function () {
			return counter++;
		}
	})();

	function otherFunction() {
		counter = 150;
	}

	otherFunction();

	console.log(increment()); //0
	console.log(increment()); //1
	console.log(increment()); //2

	// Manipulando css

	// style -> modifica o css de determinado elemento em forma inline

	var $div = document.querySelector('div');
	$div.style.width = '100px';
	$div.style.height = '100px';
	$div.style.backgroundColor = '#fc0';

	//$div.setAttribute('style', 'border: 1px solid black');

	// classList -> funciona como um get

	var $divMain = document.querySelector('.main');

	// contains() -> verifica se existe determinada classe naquele elemento

	console.log($divMain.classList.contains('main')); //true

	// add() -> adiciona uma classe em determinado elemento

	$divMain.classList.add('blue');

	// toggle() -> aplica uma classe no elemento caso essa classe não estaja no elementp, se já estiver, ele remove

	$divMain.addEventListener('click', function() {
		$divMain.classList.toggle('blue');
	}, false);

	// remove() -> remove classe no elemento

	$divMain.addEventListener('contextmenu', function() {
		$divMain.classList.toggle('container');
	}, false);

})();