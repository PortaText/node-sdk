var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Inspect', function() {
  describe('post', function() {
    it('should be able to get the result of a job', function () {
      return helper
        .mockClientForCommand('inspect/12223334444')
        .inspect()
        .number('12223334444')
        .post()
        .should.be.fulfilled;
    });

    it('should be able to inspect a csv', function () {
      return helper
        .mockClientForCommand(
          'inspect', 'file:/tmp/a.csv', 'text/csv'
        )
        .inspect()
        .csv('/tmp/a.csv')
        .post()
        .should.be.fulfilled;
    });
  });
});
