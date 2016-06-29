var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Operators', function() {
  describe('get', function() {
    it('should be able to get all operators paging and sorting', function () {
      return helper
        .mockClientForCommand('operators?page=4&sort_by=mcc&order=desc')
        .operators()
        .page(4)
        .sortBy('mcc', 'desc')
        .get()
        .should.be.fulfilled;
    });
    it('should be able to get all operators', function () {
      return helper
        .mockClientForCommand('operators')
        .operators()
        .get()
        .should.be.fulfilled;
    });
  });
});