var expect  = require('chai').expect;
var assert = require('chai').assert
var sinon = require('sinon');
var CalculatePrice = require('./BuyCoins');


describe('calculatePrice', function(){
    it('Check that the first argument is either buy or sell and is a string', function(){
      var calculatePrice = CalculatePrice('sell', 2,350)
      expect(calculatePrice).to.equal(true);
    })

  })