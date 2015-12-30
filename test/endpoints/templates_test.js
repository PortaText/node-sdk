var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Timezones', function() {
  describe('get', function () {
    it('should be able to get all templates', function () {
      return helper
        .mockClientForCommand('templates')
        .templates()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get one template', function () {
      return helper
        .mockClientForCommand('templates/44')
        .templates()
        .id(44)
        .get()
        .should.be.fulfilled;
    });
  });

  describe('delete', function () {
    it('should be able to delete a template', function () {
      return helper
        .mockClientForCommand('templates/44')
        .templates()
        .id(44)
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('post', function () {
    it('should be able to create a template', function () {
      return helper
        .mockClientForCommand(
          'templates', {
            name: 'a template',
            text: 'a template text {{and_a_variable}}',
            description: 'super duper template'
          }
        )
        .templates()
        .name('a template')
        .text('a template text {{and_a_variable}}')
        .description('super duper template')
        .post()
        .should.be.fulfilled;
    });
  });

  describe('put', function () {
    it('should be able to update a template', function () {
      return helper
        .mockClientForCommand(
          'templates/44', {
            name: 'a template',
            text: 'a template text {{and_a_variable}}',
            description: 'super duper template'
          }
        )
        .templates()
        .id(44)
        .name('a template')
        .text('a template text {{and_a_variable}}')
        .description('super duper template')
        .put()
        .should.be.fulfilled;
    });
  });
});
