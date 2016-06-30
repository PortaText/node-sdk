var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Destinations', function() {
  describe('get', function() {
    it('should be able to get all destinations paging and sorting', function () {
      return helper
        .mockClientForCommand(
          'destinations?page=4&sort_by=destination&order=desc'
        )
        .destinations()
        .page(4)
        .sortBy('destination', 'desc')
        .get()
        .should.be.fulfilled;
    });
    it('should be able to get all destinations', function () {
      return helper
        .mockClientForCommand('destinations')
        .destinations()
        .get()
        .should.be.fulfilled;
    });
    it('should be able to export the list to a file', function () {
      return helper
        .mockClientForCommand(
          'destinations', '', 'application/json', 'text/csv'
        )
        .destinations()
        .saveTo('/tmp/destinations.csv')
        .get()
        .should.be.fulfilled;
    });
  });
});