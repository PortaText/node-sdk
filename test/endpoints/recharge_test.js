var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Recharge', function() {
  describe('post', function () {
    it('should be able to recharge', function () {
      return helper
        .mockClientForCommand('recharge', {card_id: 445522, total: 150})
        .recharge()
        .withCard(445522)
        .total(150)
        .post()
        .should.be.fulfilled;
    });
  });
});
