var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Timezones', function() {
  describe('get', function () {
    it('should be able to get all timezones', function () {
      return helper
        .mockClientForCommand('timezones')
        .timezones()
        .get()
        .should.be.fulfilled;
    });
  });
});
