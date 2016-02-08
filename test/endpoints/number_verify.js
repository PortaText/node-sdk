var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('NumberVerify', function() {
  describe('post', function () {
    it('should not be able to proceed without a number', function (done) {
      var obj = helper.mockClientForCommand().numberVerify();
      assert.throws(
        function() { obj.post.call(obj); },
        /Number cant be null/
      );
      done();
    });

    it('should be able to send verification code', function () {
      return helper
        .mockClientForCommand('number_verify/12223334444', {
          from: '13334445555',
          template_id: 44,
          variables: {var1: 'value'},
        })
        .numberVerify()
        .forNumber('12223334444')
        .from('13334445555')
        .useTemplate(44, {var1: 'value'})
        .post()
        .should.be.fulfilled;
    });
  });

  describe('get', function () {
    return helper
      .mockClientForCommand('number_verify/12223334444?code=123456')
      .numberVerify()
      .forNumber('12223334444')
      .verifyWith('123456')
      .get()
      .should.be.fulfilled;
  });
});
