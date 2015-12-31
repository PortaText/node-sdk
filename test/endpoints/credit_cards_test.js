var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('CreditCards', function() {
  describe('get', function () {
    it('should be able to get all credit cards', function () {
      return helper
        .mockClientForCommand('me/credit_cards')
        .creditCards()
        .get()
        .should.be.fulfilled;
    });
  });

  describe('delete', function () {
    it('should be able to delete a credit card', function () {
      return helper
        .mockClientForCommand('me/credit_cards/44')
        .creditCards()
        .id(44)
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('post', function () {
    it('should be able to create a credit card', function () {
      return helper
        .mockClientForCommand('me/credit_cards', {
          first_name: 'John',
          last_name: 'Doe',
          address: '1234 NW 12TH STREET',
          city: 'Miami',
          state: 'FL',
          zip: '339943',
          country: 'US',
          card_number: '400000000000011',
          card_expiration_date: '2015-12',
          card_code: '432'
        })
        .creditCards()
        .nameOnCard('John', 'Doe')
        .address('1234 NW 12TH STREET', 'Miami', 'FL', '339943', 'US')
        .cardInfo('400000000000011', '2015-12', '432')
        .post()
        .should.be.fulfilled;
    });
  });
});
