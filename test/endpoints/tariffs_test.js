var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Tariffs', function() {
  describe('get', function () {
    it('should be able to get all tariffs', function () {
      return helper
        .mockClientForCommand('tariffs')
        .tariffs()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get one tariff', function () {
      return helper
        .mockClientForCommand('tariffs/us')
        .tariffs()
        .forCountry('us')
        .get()
        .should.be.fulfilled;
    });
  });
});
