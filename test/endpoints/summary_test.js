var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Summary', function() {
  describe('get', function () {
    it('should be able to get summary with day granularity', function () {
      return helper
        .mockClientForCommand('summary?granularity=date')
        .summary()
        .byDay()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get summary with month granularity', function () {
      return helper
        .mockClientForCommand('summary?granularity=month')
        .summary()
        .byMonth()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get summary with week granularity', function () {
      return helper
        .mockClientForCommand('summary?granularity=week')
        .summary()
        .byWeek()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get summary with a date range', function () {
      return helper
        .mockClientForCommand(
          'summary?date_from=2015-01-01T00%3A00%3A00&date_to=2015-05-01T00%3A00%3A00'
        )
        .summary()
        .from('2015-01-01T00:00:00')
        .to('2015-05-01T00:00:00')
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get a summary', function () {
      return helper
        .mockClientForCommand('summary')
        .summary()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to export the summary to a file', function () {
      return helper
        .mockClientForCommand(
          'summary', '', 'application/json', 'text/csv'
        )
        .summary()
        .saveTo('/tmp/summary.csv')
        .get()
        .should.be.fulfilled;
    });
  });
});
