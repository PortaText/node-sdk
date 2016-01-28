var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('ContactLists', function() {
  describe('get', function() {
    it('should be able to export the contact list to a file', function () {
      return helper
        .mockClientForCommand(
          'contact_lists/33/contacts', '', 'application/json', 'text/csv'
        )
        .contactLists()
        .id(33)
        .saveTo('/tmp/contact_list.csv')
        .get()
        .should.be.fulfilled;
    });
  });

  describe('delete', function () {
    it('should be able to delete a number from a contact list', function () {
      return helper
        .mockClientForCommand('contact_lists/421/contacts/12223334444')
        .contactLists()
        .id(421)
        .withNumber('12223334444')
        .delete()
        .should.be.fulfilled;
    });

    it('should be able to delete a contact list', function () {
      return helper
        .mockClientForCommand('contact_lists/421')
        .contactLists()
        .id(421)
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('post', function () {
    it('should be able to create a contact list', function () {
      return helper
        .mockClientForCommand(
          'contact_lists', {
            name: 'this is the name',
            description: 'and this is the description'
          }
        )
        .contactLists()
        .name('this is the name')
        .description('and this is the description')
        .post()
        .should.be.fulfilled;
    });
  });

  describe('put', function () {
    it('should be able to add a number to a contact list', function () {
      return helper
        .mockClientForCommand('contact_lists/421/contacts/12223334444')
        .contactLists()
        .id(421)
        .withNumber('12223334444')
        .put()
        .should.be.fulfilled;
    });

    it('should be able to update a contact list', function () {
      return helper
        .mockClientForCommand(
          'contact_lists/421', {
            name: 'a new name',
            description: 'a new description'
          }
        )
        .contactLists()
        .id(421)
        .name('a new name')
        .description('a new description')
        .put()
        .should.be.fulfilled;
    });

    it('should be able to import contacts from a csv file', function () {
      return helper
        .mockClientForCommand(
          'contact_lists/421/contacts', 'file:/tmp/a.csv', 'text/csv'
        )
        .contactLists()
        .id(421)
        .csv('/tmp/a.csv')
        .put()
        .should.be.fulfilled;
    });
  });
  //    it('should be able to get one template', function () {
//      return helper
//        .mockClientForCommand('templates/44')
//        .templates()
//        .id(44)
//        .get()
//        .should.be.fulfilled;
//    });
//  });
//
//  describe('delete', function () {
//    it('should be able to delete a template', function () {
//      return helper
//        .mockClientForCommand('templates/44')
//        .templates()
//        .id(44)
//        .delete()
//        .should.be.fulfilled;
//    });
//  });
//
//  describe('post', function () {
//    it('should be able to create a template', function () {
//      return helper
//        .mockClientForCommand(
//          'templates', {
//            name: 'a template',
//            text: 'a template text {{and_a_variable}}',
//            description: 'super duper template'
//          }
//        )
//        .templates()
//        .name('a template')
//        .text('a template text {{and_a_variable}}')
//        .description('super duper template')
//        .post()
//        .should.be.fulfilled;
//    });
//  });
//
//  describe('put', function () {
//    it('should be able to update a template', function () {
//      return helper
//        .mockClientForCommand(
//          'templates/44', {
//            name: 'a template',
//            text: 'a template text {{and_a_variable}}',
//            description: 'super duper template'
//          }
//        )
//        .templates()
//        .id(44)
//        .name('a template')
//        .text('a template text {{and_a_variable}}')
//        .description('super duper template')
//        .put()
//        .should.be.fulfilled;
//    });
//  });
});
