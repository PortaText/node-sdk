var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('DidSettings', function() {
  describe('get', function () {
    it('should be able to return all dids', function () {
      return helper
        .mockClientForCommand('dids')
        .didSettings()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to return one did', function () {
      return helper
        .mockClientForCommand('dids/12223334444')
        .didSettings()
        .forNumber('12223334444')
        .get()
        .should.be.fulfilled;
    });
  });

  describe('patch', function () {
    it('should be able to enable cnam', function () {
      return helper
        .mockClientForCommand('dids/12223334444', {cnam_enabled: true})
        .didSettings()
        .forNumber('12223334444')
        .enableCnam()
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to disable cnam', function () {
      return helper
        .mockClientForCommand('dids/12223334444', {cnam_enabled: false})
        .didSettings()
        .forNumber('12223334444')
        .disableCnam()
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to enable autoresponder', function () {
      return helper
        .mockClientForCommand('dids/12223334444', {
          autoresponder_text: 'Thanks for contacting us',
          autoresponder_enabled: true
        })
        .didSettings()
        .forNumber('12223334444')
        .autoRespondWith('Thanks for contacting us')
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to disable autoresponder', function () {
      return helper
        .mockClientForCommand('dids/12223334444', {
          autoresponder_enabled: false
        })
        .didSettings()
        .forNumber('12223334444')
        .dontAutoRespond()
        .patch()
        .should.be.fulfilled;
    });
  });
});
