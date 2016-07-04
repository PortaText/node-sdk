var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('GsmCharset', function() {
  describe('get', function () {
    it('should be able to get the charset', function () {
      return helper
        .mockClientForCommand('gsm_charset')
        .gsmCharset()
        .get()
        .should.be.fulfilled;
    });
  });
});
