var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Trunks', function() {
  describe('get', function () {
    it('should be able to get all trunks', function () {
      return helper
        .mockClientForCommand('trunks')
        .trunks()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get one trunk', function () {
      return helper
        .mockClientForCommand('trunks/44')
        .trunks()
        .id(44)
        .get()
        .should.be.fulfilled;
    });
  });

  describe('delete', function () {
    it('should be able to delete a trunk', function () {
      return helper
        .mockClientForCommand('trunks/44')
        .trunks()
        .id(44)
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('post', function () {
    it('should be able to create a trunk', function () {
      return helper
        .mockClientForCommand(
          'trunks', {
            name: 'a trunk',
            ip: '1.2.3.4'
          }
        )
        .trunks()
        .name('a trunk')
        .ip('1.2.3.4')
        .post()
        .should.be.fulfilled;
    });
  });

  describe('put', function () {
    it('should be able to update a trunk', function () {
      return helper
        .mockClientForCommand(
          'trunks/44', {
            name: 'a trunk',
            ip: '1.2.3.4'
          }
        )
        .trunks()
        .id(44)
        .name('a trunk')
        .ip('1.2.3.4')
        .put()
        .should.be.fulfilled;
    });
  });
});
