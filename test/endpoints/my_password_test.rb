var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('MyPassword', function() {
  describe('pud', function () {
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
