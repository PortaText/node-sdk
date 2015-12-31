var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Campaigns', function() {
  describe('delete', function () {
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

describe('SmsCampaign', function() {
  describe('post', function () {
    it('should be able to create a campaign using text', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'sms',
          name: 'this is the name',
          description: 'and this is the description',
          contact_list_ids: [1, 3, 5, 7, 9],
          from: '12223334444',
          text: 'Hello world'
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

    it('should be able to create a campaign using a template', function () {
      return helper
        .mockClientForCommand('campaigns', {
          type: 'sms',
          name: 'this is the name',
          description: 'and this is the description',
          contact_list_ids: [1, 3, 5, 7, 9],
          from: '12223334444',
          template_id: 987,
          variables: {key1: 'value1'}
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
  });
});
