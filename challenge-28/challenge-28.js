(function(){

  'use strict';

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */

  function DOM(elements) {
    this.element = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(eventType, callback);
    });
  };

  DOM.prototype.off = function off(eventType, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(eventType, callback);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight(callback) {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every(callback) {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some(callback) {
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.prototype.is = function is(arg) {
    return Object.prototype.toString.call(arg);
  };

  DOM.prototype.isArray = function isArray(arg) {
    return DOM.prototype.is(arg) === '[object Array]';
  };

  DOM.prototype.isObject = function isObject(arg) {
    return DOM.prototype.is(arg) === '[object Object]';
  };

  DOM.prototype.isFunction = function isFunction(arg) {
    return DOM.prototype.is(arg) === '[object Function]';
  };

  DOM.prototype.isNumber = function isNumber(arg) {
    return DOM.prototype.is(arg) === '[object Number]';
  };

  DOM.prototype.isString = function isString(arg) {
    return DOM.prototype.is(arg) === '[object String]';
  };

  DOM.prototype.isBoolean = function isBoolean(arg) {
    return DOM.prototype.is(arg) === '[object Boolean]';
  };

  DOM.prototype.isNull = function isNull(arg) {
    return DOM.prototype.is(arg) === '[object Null]' || DOM.prototype.is(arg) === '[object Undefined]';
  };

  var $form = new DOM('[data-js="submit"]');
  var $message = new DOM('[data-js="message"]');
  var $show = new DOM('[data-js="show"]');

  $form.on('click', function(event) {
    event.preventDefault();

    var $cep = new DOM('[data-js="cep"]');
    var cepClean = removeCharacter($cep.get()[0].value);

    removeFirstChild($show);
    setMessage($message, 'Buscando informações para o CEP ' + cepClean + '...');

    var ajax = doRequest($cep.get()[0].value);
    ajax.addEventListener('readystatechange', function() {
      actionAfterRequest(ajax, cepClean);
    });
  });

  function actionAfterRequest(ajax, cepClean) {
    if (isRequestOk(ajax)) {
      var response = getResponse(ajax);
      if (response.status === 1) {
        setMessage($message, 'Endereço referente ao CEP '+ cepClean + ':');
        setInformationCep(response);
        return;
      }

      setMessage($message, 'Não encontramos o endereço para o CEP ' + cepClean + '.');
    }
  }

  function doRequest(data) {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', 'http://apps.widenet.com.br/busca-cep/api/cep/' + data + '.json');
    ajax.send();
    return ajax;
  }
  
  function getResponse(ajax) {
    return JSON.parse(ajax.responseText);
  }

  function setInformationCep(response) {
    var data = formatData(response);
    removeFirstChild($show);
    setMessage($show, data);
  }

  function formatData(response) {
    return response.state + ' ' + response.city + ' ' + response.district;
  }

  function removeCharacter(cep) {
    return cep.replace(/[^\d-]/g, '');
  }

  function returnNumber(string) {
    return string.replace(/\D/g, '');
  }

  function isRequestOk(ajax) {
    return ajax.readyState === 4 && ajax.status === 200;
  }

  function setMessage(element, message) {
    var fragment = createFragment(message, 'p');
    removeFirstChild(element);
    element.get()[0].appendChild(fragment);
  }

  function createFragment(message, element) {
    var fragment = document.createDocumentFragment();
    var p = document.createElement(element);
    var text = document.createTextNode(message);
    p.appendChild(text);
    fragment.appendChild(p);
    return fragment;
  }

  function removeFirstChild(element) {
    if (element.get()[0].firstChild) {
      element.get()[0].removeChild(element.get()[0].firstChild);
    }
  }

})();