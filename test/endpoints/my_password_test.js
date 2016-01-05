var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('MyPassword', function() {
  describe('post', function () {
    it('should be able to ask to reset a password', function () {
      return helper
        .mockClientForCommand('me/password/reset', {
          email: 'john@doe.com'
        })
        .myPassword()
        .reset()
        .forEmail('john@doe.com')
        .post()
        .should.be.fulfilled;
    });
  });

  describe('put', function () {
    it('should be able to reset password', function () {
      return helper
        .mockClientForCommand('me/password/reset/a_nonce', {
          new_password: 'newPassword33%'
        })
        .myPassword()
        .reset()
        .withNonce('a_nonce', 'newPassword33%')
        .put()
        .should.be.fulfilled;
    });

    it('should be able to change password', function () {
      return helper
        .mockClientForCommand('me/password', {
          old_password: 'my_current_password',
          new_password: 'some_new_password'
        })
        .myPassword()
        .change('my_current_password', 'some_new_password')
        .put()
        .should.be.fulfilled;
    });
  });
});
