var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('ACL', function() {
  describe('put', function () {
    it('should be able to blacklist a number', function () {
      return helper
        .mockClientForCommand('blacklist/12223334444')
        .blacklist()
        .number('12223334444')
        .put()
        .should.be.fulfilled;
    });

    it('should be able to blacklist a csv', function () {
      return helper
        .mockClientForCommand(
          'blacklist/contacts', 'file:/tmp/a.csv', 'text/csv'
        )
        .blacklist()
        .csv('/tmp/a.csv')
        .put()
        .should.be.fulfilled;
    });
  });

  describe('delete', function () {
    it('should be able to unblacklist a number', function () {
      return helper
        .mockClientForCommand('blacklist/12223334444')
        .blacklist()
        .number('12223334444')
        .delete()
        .should.be.fulfilled;
    });
  });
});
