(function(DOM){

  'use strict';

  // Module Pattern -> padrão de módulo

  	function app() {
  		var $formCEP = new DOM('[data-js="form"]');
	    var $inputCEP = new DOM('[data-js="input-cep"]');
	    var $logradouro = new DOM('[data-js="logradouro"]');
	    var $bairro = new DOM('[data-js="bairro"]');
	    var $cidade = new DOM('[data-js="cidade"]');
	    var $estado = new DOM('[data-js="estado"]');
	    var $cep = new DOM('[data-js="cep"]');
	    var $status = new DOM('[data-js="status"]');
	    var ajax = new XMLHttpRequest();
	    $formCEP.on('submit', handleSubmitFormCEP);

  		function handleSubmitFormCEP(event) {
		    event.preventDefault();
		    var url = getUrl();
		    ajax.open('GET', url);
		    ajax.send();
		    getMessage('loading');
		    ajax.addEventListener('readystatechange', handleReadyStateChange);
		}

		function handleReadyStateChange() {
		    if (isRequestOk()) {
		      	getMessage('ok');
		      	fillCEPFields();
		    }
		}

		function isRequestOk() {
		    return ajax.readyState == 4 && ajax.status == 200;
		}

		function getUrl() {
		    return replaceCEP('http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json');
		}

		function clearCEP() {
		    return $inputCEP.get()[0].value.replace(/\D/g, '');
		}

		function fillCEPFields() {
		    var data = parseData();

		    if (data.status === 0) {
		      	getMessage('error');
		      	data = clearData();
		    }

		    $logradouro.get()[0].textContent = data.address;
		    $bairro.get()[0].textContent = data.district;
		    $cidade.get()[0].textContent = data.city;
		    $estado.get()[0].textContent = data.state;
		    $cep.get()[0].textContent = data.code;
		}

		function clearData() {
		    return {
		      		address: '-',
			      	district: '-',
			      	city: '-',
			      	state: '-',
			      	code: '-'
		    	};
		}

		function parseData() {
		    var result;
		    try {
		      	result = JSON.parse(ajax.responseText);
		    } catch(e) {
		      	result = {status: 0};
		    }

		    return result;
		}

		function getMessage(type) {
		    var messages = {
		      	loading: 'Buscando informações para o CEP [CEP]...',
		      	ok: 'Endereço referente ao CEP [CEP]:',
		      	error: 'Não encontramos o endereço para o CEP [CEP].'
		    };
		    $status.get()[0].textContent = replaceCEP(messages[type]);
		}

		function replaceCEP(message) {
		    return message.replace('[CEP]', clearCEP());
		}
  	}

  app();

})(window.DOM);