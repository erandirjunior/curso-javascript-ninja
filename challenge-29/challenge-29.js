(function($) {

  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  var app = (function() {
    var $informationSite = $('[data-js="site-information"]');
    var $form = $('[data-js="form"]');
    var $tableBody = $('[data-js="body-table"]');
    var $fragment = document.createDocumentFragment('tr');
    var ajax = new XMLHttpRequest();
    $informationSite.on('load', handleInformationSite);
    $form.on('submit', handleFormCar);

    function handleFormCar(event) {
      event.preventDefault();
      $tableBody.get()[0].appendChild(createDataTableFragment());
      clearForm();
    }

    function handleInformationSite() {
      ajax.open('GET', '/company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function handleReadyStateChange() {
      if (isRequestOk()) {
        var data = loadData();
        $informationSite.get()[0].textContent = data.name;
        $informationSite.get()[1].textContent = data.phone;      
      }
    }

    function createDataTableFragment() {
      $fragment.appendChild(handleTrTdTable());
      return $fragment;
    }

    function handleTrTdTable() {
      var $tr = createElement('tr');
      var $tdImage = createElement('td');
      var $tdBrand = createElement('td');
      var $tdYear = createElement('td');
      var $tdPlate = createElement('td');
      var $tdColor = createElement('td');
      var $image = createElement('img');

      $image.setAttribute('src', $form.get()[0][0].value);
      $tdImage.appendChild($image);
      $tdBrand.textContent = $form.get()[0][1].value;
      $tdYear.textContent = clearAge();
      $tdPlate.textContent = $form.get()[0][3].value;
      $tdColor.textContent = $form.get()[0][4].value;

      $tr.appendChild($tdImage);
      $tr.appendChild($tdBrand);
      $tr.appendChild($tdYear);
      $tr.appendChild($tdPlate);
      $tr.appendChild($tdColor);

      return $tr;
    }

    function clearForm() {
      $form.get()[0][0].value = '';
      $form.get()[0][1].value = '';
      $form.get()[0][2].value = '';
      $form.get()[0][3].value = '';
      $form.get()[0][4].value = '';
    }

    function clearAge() {
      return $form.get()[0][2].value.replace(/\D/g, '');
    }

    function createElement(element) {
      return document.createElement(element);
    }

    function loadData() {
      return JSON.parse(ajax.responseText);
    }

    function isRequestOk() {
      return ajax.readyState == 4 && ajax.status == 200;
    }

    return {
      init: handleInformationSite
    }
  })();

  app.init();

})(window.DOM);
