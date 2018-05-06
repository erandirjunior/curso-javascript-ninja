(function(window, document) {

	'use strict';

	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:

	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;

	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/

	var $inputDisplay = document.querySelector('[data-js="display"]');

	var $buttonOne 		= document.querySelector('[data-js="1"]');
	var $buttonTwo 		= document.querySelector('[data-js="2"]');
	var $buttonThree 	= document.querySelector('[data-js="3"]');
	var $buttonFour 	= document.querySelector('[data-js="4"]');
	var $buttonFive 	= document.querySelector('[data-js="5"]');
	var $buttonSix 		= document.querySelector('[data-js="6"]');
	var $buttonSeven 	= document.querySelector('[data-js="7"]');
	var $buttonEight 	= document.querySelector('[data-js="8"]');
	var $buttonNine 	= document.querySelector('[data-js="9"]');
	var $buttonZero 	= document.querySelector('[data-js="0"]');

	var $buttonSum 				= document.querySelector('[data-js="sum"]');
	var $buttonSubtract 		= document.querySelector('[data-js="subtract"]');
	var $buttonMultiplication 	= document.querySelector('[data-js="multiplication"]');
	var $buttonDivision 		= document.querySelector('[data-js="division"]');

	var $buttonResult 	= document.querySelector('[data-js="result"]');
	var $buttonReset 	= document.querySelector('[data-js="reset"]');

	$inputDisplay.value = 0;

	$buttonOne.addEventListener('click', addValueCalculate, false);
	$buttonTwo.addEventListener('click', addValueCalculate, false);
	$buttonThree.addEventListener('click', addValueCalculate, false);
	$buttonFour.addEventListener('click', addValueCalculate, false);
	$buttonFive.addEventListener('click', addValueCalculate, false);
	$buttonSix.addEventListener('click', addValueCalculate, false);
	$buttonSeven.addEventListener('click', addValueCalculate, false);
	$buttonEight.addEventListener('click', addValueCalculate, false);
	$buttonNine.addEventListener('click', addValueCalculate, false);
	$buttonZero.addEventListener('click', addValueCalculate, false);

	$buttonSum.addEventListener('click', operation, false);
	$buttonSubtract.addEventListener('click', operation, false);
	$buttonMultiplication.addEventListener('click', operation, false);
	$buttonDivision.addEventListener('click', operation, false);

	$buttonResult.addEventListener('click', calculate, false);
	$buttonReset.addEventListener('click', resetCalculate, false);

	function calculate(event) {
		event.preventDefault();

		if (verifyLastValue($inputDisplay.value)) {
			return replaceValue('');
		}

		var values = $inputDisplay.value.split(/(\d+)/);

		var operator = {

			'+': function(number1, number2) {
				return +number1 + +number2;
			},
			'-': function(number1, number2) {
				return +number1 - +number2;
			},
			'*': function(number1, number2) {
				return +number1 * +number2;
			},
			'*': function(number1, number2) {
				return +number1 * +number2;
			}
		}

		$inputDisplay.value = operator[values[2]](values[1], values[3]);
	}

	function resetCalculate(event) {
		event.preventDefault();
		$inputDisplay.value = 0;		
	}

	function operation(event) {
		event.preventDefault();

		if (verifyLastValue($inputDisplay.value)) {
			return replaceValue(this.value);
		}

		$inputDisplay.value += this.value;
	}

	function addValueCalculate(event) {
		event.preventDefault();

		if ($inputDisplay.value == 0) {
			$inputDisplay.value = '';
		}

		$inputDisplay.value += this.value;
	}

	function replaceValue(value) {
		$inputDisplay.value = $inputDisplay.value.replace(/[+\-*/]$/, value);
	}

	function verifyLastValue(str) {
		return str.match(/([+\-*/])$/g);
	}

})(window, document);