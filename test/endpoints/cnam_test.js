var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Cnam', function() {
  describe('post', function () {
    it('should be able to query cnam with a csv', function () {
      return helper
        .mockClientForCommand(
          'cnam', 'file:/tmp/a.csv', 'text/csv'
        )
        .cnam()
        .csv('/tmp/a.csv')
        .post()
        .should.be.fulfilled;
    });

    it('should not be able to proceed without a number', function (done) {
      var obj = helper.mockClientForCommand().cnam();
      assert.throws(
        function() { obj.post.call(obj); },
        /DID number cant be null/
      );
      done();
    });

    it('should be able to get cnam info for a DID', function () {
      return helper
        .mockClientForCommand('cnam/12223334444')
        .cnam()
        .forNumber('12223334444')
        .post()
        .should.be.fulfilled;
    });
  });
});
