var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Me', function() {
  describe('get', function () {
    it('should be able to get me', function () {
      return helper
        .mockClientForCommand('me')
        .me()
        .get()
        .should.be.fulfilled;
    });
  });
  describe('put', function () {
    it('should be set me', function () {
      return helper
        .mockClientForCommand('me', {
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@doe.com',
          company: 'Mr. spiffy',
          callback_url: null,
          timezone: 'UTC',
          language: 'es'
        })
        .me()
        .name('John', 'Doe')
        .email('john@doe.com')
        .company('Mr. spiffy')
        .callbackUrl(null)
        .timezone('UTC')
        .language('es')
        .put()
        .should.be.fulfilled;
    });
  });
});
