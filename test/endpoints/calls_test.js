var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Calls', function() {
  describe('post', function () {
    it('should be able to issue a call', function () {
      return helper
        .mockClientForCommand('calls', {
          from: '12223334444',
          to: '14445556666',
          outbound_trunk_id: 33,
          dial_timeout: 120,
          flow: [
            {wait: {seconds: 120}},
            {play: {sound_id: 3}}
          ]
        })
        .calls()
        .from('12223334444')
        .to('14445556666')
        .outboundTrunk(33)
        .dialTimeout(120)
        .flow([
          {wait: {seconds: 120}},
          {play: {sound_id: 3}}
        ]).post()
        .should.be.fulfilled;
    });
  });

  describe('get', function () {
    it('should be able to search for calls', function () {
      return helper
        .mockClientForCommand('calls?page=1&sort_order=asc&sort_field=date&campaign_id=1')
        .calls()
        .search({
          page: 1,
          sort_order: 'asc',
          sort_field: 'date',
          campaign_id: 1
        })
        .get()
        .should.be.fulfilled;
    });
  });
});
