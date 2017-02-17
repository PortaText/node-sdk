var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Plans', function() {
  describe('get', function () {
    it('should be able to get all plans', function () {
      return helper
        .mockClientForCommand('plans')
        .plans()
        .get()
        .should.be.fulfilled;
    });
  });
});
