var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
var qs = require('querystring');
chai.use(chaiAsPromised);
chai.should();

describe('Campaigns', function() {
  describe('delete', function () {
    it('should be able to cancel a contact', function () {
      return helper
        .mockClientForCommand('campaigns/451/contacts/12223334444')
        .campaigns()
        .id(451)
        .contact('12223334444')
        .delete()
        .should.be.fulfilled;
    });

    it('should be able to delete campaign', function () {
      return helper
        .mockClientForCommand('campaigns/451')
        .campaigns()
        .id(451)
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('get', function () {
    it('should be able to paginate campaigns', function () {
      return helper
        .mockClientForCommand('campaigns?page=44')
        .campaigns()
        .page(44)
        .get()
        .should.be.fulfilled;
    });
    it('should be able to paginate contacts', function () {
      return helper
        .mockClientForCommand('campaigns/123/contacts?page=44')
        .campaigns()
        .id(123)
        .contacts()
        .page(44)
        .get()
        .should.be.fulfilled;
    });
    it('should be able to export all contacts to csv', function () {
      return helper
        .mockClientForCommand(
          'campaigns/123/contacts', '', 'application/json', 'text/csv'
        )
        .campaigns()
        .id(123)
        .contacts()
        .saveTo('/tmp/contacts.csv')
        .get()
        .should.be.fulfilled;
    });
    it('should be able to get all campaigns', function () {
      return helper
        .mockClientForCommand('campaigns')
        .campaigns()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get a campaign', function () {
      return helper
        .mockClientForCommand('campaigns/429')
        .campaigns()
        .id(429)
        .get()
        .should.be.fulfilled;
    });
  });
});

describe('TelCampaign', function() {
  describe('post', function () {
    it('should be able to create a telephony campaign', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'telephony',
          name: 'this is the name',
          description: 'and this is the description',
          contact_list_ids: [1, 3, 5, 7, 9],
          from: '12223334444',
          settings: {
            agents: 20,
            iterations: 3,
            post_call_work_duration: 15,
            min_iteration_time: 5,
            outbound_trunk_id: 33,
            dial_timeout: 120,
            flow: [
              {wait: {seconds: 120}},
              {play: {sound_id: 3}}
            ]
          }
        })
        .telCampaign()
        .name('this is the name')
        .description('and this is the description')
        .toContactLists([1, 3, 5, 7, 9])
        .from('12223334444')
        .agents(20)
        .iterations(3)
        .postCallWorkDuration(15)
        .minIterationTime(5)
        .outboundTrunk(33)
        .dialTimeout(120)
        .flow([
          {wait: {seconds: 120}},
          {play: {sound_id: 3}}
        ]).post()
        .should.be.fulfilled;
    });
  });
});

describe('SmsCampaign', function() {
  describe('post', function () {
    it('should be able to create a sms campaign using a csv file', function () {
      var settings = qs.stringify({settings: JSON.stringify({
        type: 'sms',
        name: 'this is the name',
        description: 'and this is the description',
        from: '12223334444',
        settings: {
          text: 'Hello world'
        }
      })});
      return helper
        .mockClientForCommand(
          'campaigns?' + settings, 'file:/tmp/contacts.csv', 'text/csv'
        )
        .smsCampaign()
        .name('this is the name')
        .description('and this is the description')
        .csv('/tmp/contacts.csv')
        .from('12223334444')
        .text('Hello world')
        .post()
        .should.be.fulfilled;
    });

    it('should be able to schedule a sms campaign', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'sms',
          name: 'this is the name',
          description: 'and this is the description',
          contact_list_ids: [1, 3, 5, 7, 9],
          from: '12223334444',
          settings: {
            text: 'Hello world'
          },
          schedule: {
            any_day: {
              from: '13:45',
              to: '21:22'
            }
          }
        })
        .smsCampaign()
        .name('this is the name')
        .description('and this is the description')
        .toContactLists([1, 3, 5, 7, 9])
        .from('12223334444')
        .text('Hello world')
        .schedule('any_day', {from: '13:45', to: '21:22'})
        .post()
        .should.be.fulfilled;
    });

    it('should be able to use multiple dids as source', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'sms',
          name: 'this is the name',
          description: 'and this is the description',
          contact_list_ids: [1, 3, 5, 7, 9],
          from: ['12223334444', '12223334445'],
          settings: {
            text: 'Hello world'
          }
        })
        .smsCampaign()
        .name('this is the name')
        .description('and this is the description')
        .toContactLists([1, 3, 5, 7, 9])
        .from(['12223334444', '12223334445'])
        .text('Hello world')
        .post()
        .should.be.fulfilled;
    });

    it('should be able to create a sms campaign using text', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'sms',
          name: 'this is the name',
          description: 'and this is the description',
          contact_list_ids: [1, 3, 5, 7, 9],
          from: '12223334444',
          settings: {
            text: 'Hello world'
          }
        })
        .smsCampaign()
        .name('this is the name')
        .description('and this is the description')
        .toContactLists([1, 3, 5, 7, 9])
        .from('12223334444')
        .text('Hello world')
        .post()
        .should.be.fulfilled;
    });

    it('should be able to create a sms campaign using a template', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'sms',
          name: 'this is the name',
          description: 'and this is the description',
          contact_list_ids: [1, 3, 5, 7, 9],
          from: '12223334444',
          settings: {
            template_id: 987,
            variables: {key1: 'value1'}
          }
        })
        .smsCampaign()
        .name('this is the name')
        .description('and this is the description')
        .toContactLists([1, 3, 5, 7, 9])
        .from('12223334444')
        .useTemplate(987, {key1: 'value1'})
        .post()
        .should.be.fulfilled;
    });

    it('should be able to create a sms campaign using an sms service', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'sms',
          name: 'this is the name',
          description: 'and this is the description',
          service_id: 55,
          all_subscribers: true,
          settings: {
            template_id: 987,
            variables: {key1: 'value1'}
          }
        })
        .smsCampaign()
        .name('this is the name')
        .description('and this is the description')
        .fromService(55)
        .allSubscribers()
        .useTemplate(987, {key1: 'value1'})
        .post()
        .should.be.fulfilled;
    });
  });
});
