var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('DidSearch', function() {
  describe('get', function () {
    it('should be able to search for local numbers', function () {
      return helper
        .mockClientForCommand('dids/search?country=JP&type=local')
        .didSearch()
        .forCountry('JP')
        .local()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to search for mobile numbers', function () {
      return helper
        .mockClientForCommand('dids/search?country=JP&type=mobile')
        .didSearch()
        .forCountry('JP')
        .mobile()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to search for toll free numbers', function () {
      return helper
        .mockClientForCommand('dids/search?country=JP&type=toll_free')
        .didSearch()
        .forCountry('JP')
        .tollFree()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to search for national numbers', function () {
      return helper
        .mockClientForCommand('dids/search?country=JP&type=national')
        .didSearch()
        .forCountry('JP')
        .national()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to search for numbers starting with', function () {
      return helper
        .mockClientForCommand(
          'dids/search?country=US&where_pattern=starts_with&pattern=305'
        )
        .didSearch()
        .forCountry('US')
        .startsWith('305')
        .get()
        .should.be.fulfilled;
    });

    it('should be able to search for numbers ending with', function () {
      return helper
        .mockClientForCommand(
          'dids/search?country=US&where_pattern=ends_with&pattern=999'
        )
        .didSearch()
        .forCountry('US')
        .endsWith('999')
        .get()
        .should.be.fulfilled;
    });

    it('should be able to search for numbers containing pattern', function () {
      return helper
        .mockClientForCommand(
          'dids/search?country=US&where_pattern=anywhere&pattern=444'
        )
        .didSearch()
        .forCountry('US')
        .contains('444')
        .get()
        .should.be.fulfilled;
    });

    it('should be able to paginate search', function () {
      return helper
        .mockClientForCommand('dids/search?country=US&page=3')
        .didSearch()
        .forCountry('US')
        .page(3)
        .get()
        .should.be.fulfilled;
    });
  });
});
