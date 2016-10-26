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
    it('should be able to send to contact lists', function () {
      return helper
        .mockClientForCommand('sms', {
          from: '12223334444',
          contact_list_ids: [1, 2],
          template_id: 44,
          variables: {var1: 'value'},
          client_ref: 'custom_client_ref'
        })
        .sms()
        .from('12223334444')
        .toContactLists([1, 2])
        .useTemplate(44, {var1: 'value'})
        .clientRef('custom_client_ref')
        .post()
        .should.be.fulfilled;
    });

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

    it('should be able to schedule an sms', function () {
      return helper
        .mockClientForCommand('sms', {
          from: '12223334444',
          to: '15556667777',
          text: 'hello world',
          schedule: {
            any_day: {
              from: "15:00",
              to: "17:30"
            }
          }
        })
        .sms()
        .from('12223334444')
        .to('15556667777')
        .text('hello world')
        .schedule('any_day', {
          from: '15:00',
          to: '17:30'
        })
        .post()
        .should.be.fulfilled;
    });

    it('should be able to send an sms using a list as from', function () {
      return helper
        .mockClientForCommand('sms', {
          from: ['12223334444', '12223334445', '12223334446'],
          to: '15556667777',
          text: 'hello world'
        })
        .sms()
        .from(['12223334444', '12223334445', '12223334446'])
        .to('15556667777')
        .text('hello world')
        .post()
        .should.be.fulfilled;
    });

    it('should be able to send an sms using "any" as from', function () {
      return helper
        .mockClientForCommand('sms', {
          from: 'any',
          to: '15556667777',
          text: 'hello world'
        })
        .sms()
        .from('any')
        .to('15556667777')
        .text('hello world')
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

    it('should be able to send an sms from an sms service', function () {
      return helper
        .mockClientForCommand('sms', {
          service_id: 55,
          to: '15556667777',
          text: 'hello world',
          client_ref: 'custom_client_ref'
        })
        .sms()
        .fromService(55)
        .to('15556667777')
        .text('hello world')
        .clientRef('custom_client_ref')
        .post()
        .should.be.fulfilled;
    });
  });

  describe('get', function () {
    it('should be able to search for sms operations', function () {
      return helper
        .mockClientForCommand('sms?page=3&date_from=2015-01-01T00%3A00%3A00')
        .sms()
        .search({
          page: 3,
          date_from: '2015-01-01T00:00:00'
        })
        .get()
        .should.be.fulfilled;
    });

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
