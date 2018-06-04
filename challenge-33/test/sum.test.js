'use strict';

// importação
var expect = require('chai').expect;
var sum = require('../src/sum');

describe('# SUM', function() {
	it('Should SUM module to be a function', function() {
		// espera que sum sej uma função
		expect(sum).to.be.a('function');
	});
});