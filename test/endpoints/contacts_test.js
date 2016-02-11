var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Contacts', function() {
  describe('delete', function() {
    it('should be able to delete all variables', function () {
      return helper
        .mockClientForCommand('contacts/12223334444/variables')
        .contacts()
        .id('12223334444')
        .delete()
        .should.be.fulfilled;
    });
    it('should be able to delete one variable', function () {
      return helper
        .mockClientForCommand('contacts/12223334444/variables/first_name')
        .contacts()
        .id('12223334444')
        .name('first_name')
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('get', function() {
    it('should be able to paginate contacts', function () {
      return helper
        .mockClientForCommand('contacts?page=44')
        .contacts()
        .page(44)
        .get()
        .should.be.fulfilled;
    });
    it('should be able to export all variables to csv with contact lists', function () {
      return helper
        .mockClientForCommand(
          'contacts?with_contact_lists=true', '', 'application/json', 'text/csv'
        )
        .contacts()
        .saveTo('/tmp/contacts.csv')
        .withContactLists()
        .get()
        .should.be.fulfilled;
    });
    it('should be able to export all variables to csv', function () {
      return helper
        .mockClientForCommand(
          'contacts?', '', 'application/json', 'text/csv'
        )
        .contacts()
        .saveTo('/tmp/contacts.csv')
        .get()
        .should.be.fulfilled;
    });
    it('should be able to get all variables', function () {
      return helper
        .mockClientForCommand('contacts/12223334444/variables')
        .contacts()
        .id('12223334444')
        .get()
        .should.be.fulfilled;
    });
    it('should be able to get one variable', function () {
      return helper
        .mockClientForCommand('contacts/12223334444/variables/first_name')
        .contacts()
        .id('12223334444')
        .name('first_name')
        .get()
        .should.be.fulfilled;
    });
  });

  describe('put', function() {
    it('should be able to import all variables from csv', function () {
      return helper
        .mockClientForCommand(
          'contacts?', 'file:/tmp/contacts.csv', 'text/csv'
        )
        .contacts()
        .csv('/tmp/contacts.csv')
        .put()
        .should.be.fulfilled;
    });
    it('should be able to put all variables', function () {
      return helper
        .mockClientForCommand(
          'contacts/12223334444/variables', {
            variables: [
              {key: 'first_name', value: 'John'},
              {key: 'last_name', value: 'Doe'}
            ]
          }
        )
        .contacts()
        .id('12223334444')
        .setAll({
          first_name: 'John',
          last_name: 'Doe'
        })
        .put()
        .should.be.fulfilled;
    });
    it('should be able to put one variable', function () {
      return helper
        .mockClientForCommand(
          'contacts/12223334444/variables/first_name', {value: 'John'}
        )
        .contacts()
        .id('12223334444')
        .set('first_name', 'John')
        .put()
        .should.be.fulfilled;
    });
  });
});
