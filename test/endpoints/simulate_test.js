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
    it('should be able to simulate an sms using a template', function () {
      return helper
        .mockClientForCommand('simulate', {
          country: 'us',
          template_id: 44,
          variables: {var1: 'value'}
        })
        .simulate()
        .country('us')
        .useTemplate(44, {var1: 'value'})
        .get()
        .should.be.fulfilled;
    });

    it('should be able to simulate an sms using a text', function () {
      return helper
        .mockClientForCommand('simulate', {
          country: 'us',
          text: 'hello world'
        })
        .simulate()
        .country('us')
        .text('hello world')
        .get()
        .should.be.fulfilled;
    });
  });
});
