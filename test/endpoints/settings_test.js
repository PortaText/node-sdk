var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Settings', function() {
  describe('get', function () {
    it('should be able to get settings', function () {
      return helper
        .mockClientForCommand('me/settings')
        .settings()
        .get()
        .should.be.fulfilled;
    });
  });

  describe('patch', function () {
    it('should be able to alert on low credit', function () {
      return helper
        .mockClientForCommand('me/settings', {alert_when_credit_less_than: 100})
        .settings()
        .alertWhenCreditLessThan(100)
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to disable alert on low credit', function () {
      return helper
        .mockClientForCommand('me/settings', {alert_when_credit_less_than: null})
        .settings()
        .dontAlertOnLowCredit()
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to enable autorecharges', function () {
      return helper
        .mockClientForCommand('me/settings', {
          autorecharge_enabled: true,
          autorecharge_total: 150,
          autorecharge_when_credit: 100
        })
        .settings()
        .enableAutoRecharges(100, 150)
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to set default credit card', function () {
      return helper
        .mockClientForCommand('me/settings', {
          default_card_id: 66543221
        })
        .settings()
        .defaultCreditCard(66543221)
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to disable autorecharges', function () {
      return helper
        .mockClientForCommand('me/settings', {autorecharge_enabled: false})
        .settings()
        .disableAutoRecharges()
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to enable email on inbound', function () {
      return helper
        .mockClientForCommand('me/settings', {email_on_inbound_sms: 'john@doe.com'})
        .settings()
        .sendInboundByEmail('john@doe.com')
        .patch()
        .should.be.fulfilled;
    });

    it('should be able to disable email on inbound', function () {
      return helper
        .mockClientForCommand('me/settings', {email_on_inbound_sms: null})
        .settings()
        .dontSendInboundByEmail()
        .patch()
        .should.be.fulfilled;
    });
  });
});
