var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Simulate', function() {
  describe('get', function () {
    it('should not be able to proceed without a country', function (done) {
      var obj = helper.mockClientForCommand().simulate();
      assert.throws(
        function() { obj.post.call(obj); },
        /Country cant be null/
      );
      done();
    });

    it('should be able to simulate an sms using a template', function () {
      var qs = 'country=us&template_id=44&variables=%7B%22var1%22%3A%22value%22%7D';
      return helper
        .mockClientForCommand('simulate?' + qs)
        .simulate()
        .country('us')
        .useTemplate(44, {var1: 'value'})
        .get()
        .should.be.fulfilled;
    });

    it('should be able to simulate an sms using a text', function () {
      return helper
        .mockClientForCommand('simulate?country=us&text=hello%20world')
        .simulate()
        .country('us')
        .text('hello world')
        .get()
        .should.be.fulfilled;
    });
  });
});
