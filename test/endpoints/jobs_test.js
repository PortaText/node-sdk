var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Jobs', function() {
  describe('delete', function () {
    it('should be able to cancel a job', function () {
      return helper
        .mockClientForCommand('jobs/987')
        .jobs()
        .id(987)
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('get', function () {
    it('should be able to get a job result', function () {
      return helper
        .mockClientForCommand(
          'jobs/55/result', '', 'application/json', '*/*'
        ).jobs()
        .id(55)
        .saveTo('/tmp/result.zip')
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get all jobs paginated', function () {
      return helper
        .mockClientForCommand('jobs?page=55')
        .jobs()
        .page(55)
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get all jobs', function () {
      return helper
        .mockClientForCommand('jobs')
        .jobs()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get one job', function () {
      return helper
        .mockClientForCommand('jobs/987')
        .jobs()
        .id(987)
        .get()
        .should.be.fulfilled;
    });
  });
});
