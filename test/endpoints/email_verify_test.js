var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('EmailVerify', function() {
  describe('put', function () {
    it('should be able to verify an email', function () {
      return helper
        .mockClientForCommand('me/email_verify/one_big_nonce')
        .emailVerify()
        .withNonce('one_big_nonce')
        .put()
        .should.be.fulfilled;
    });
  });

  describe('post', function () {
    it('should be able to request an email verification', function () {
      return helper
        .mockClientForCommand('me/email_verify')
        .emailVerify()
        .post()
        .should.be.fulfilled;
    });
  });
});
