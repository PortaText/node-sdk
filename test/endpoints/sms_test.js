var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Sms', function() {
  describe('post', function () {
    it('should be able to send an sms using a template', function () {
      return helper
        .mockClientForCommand('sms', {
          from: '12223334444',
          to: '15556667777',
          template_id: 44,
          variables: {var1: 'value'},
          client_ref: 'custom_client_ref'
        })
        .sms()
        .from('12223334444')
        .to('15556667777')
        .useTemplate(44, {var1: 'value'})
        .clientRef('custom_client_ref')
        .post()
        .should.be.fulfilled;
    });

    it('should be able to send an sms using a text', function () {
      return helper
        .mockClientForCommand('sms', {
          from: '12223334444',
          to: '15556667777',
          text: 'hello world',
          client_ref: 'custom_client_ref'
        })
        .sms()
        .from('12223334444')
        .to('15556667777')
        .text('hello world')
        .clientRef('custom_client_ref')
        .post()
        .should.be.fulfilled;
    });
  });

  describe('get', function () {
    it('should be able to get an sms operation', function () {
      return helper
        .mockClientForCommand('sms/763')
        .sms()
        .id('763')
        .get()
        .should.be.fulfilled;
    });
  });
});