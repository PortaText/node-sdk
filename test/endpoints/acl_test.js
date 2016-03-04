var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('ACL', function() {
  describe('get', function () {
    it('should be able to get acl', function () {
      return helper
        .mockClientForCommand('acl')
        .acl()
        .get()
        .should.be.fulfilled;
    });
  });
  describe('put', function () {
    it('should be set the acl', function () {
      return helper
        .mockClientForCommand('acl', {
          acl: [
            {
              ip: '192.168.0.1',
              netmask: 32,
              description: ''
            },
            {
              ip: '10.10.10.10',
              netmask: 24,
              description: ''
            },
            {
              ip: '172.16.0.0',
              netmask: 16,
              description: 'A description'
            }
          ]
        })
        .acl()
        .add('192.168.0.1')
        .add('10.10.10.10', 24)
        .add('172.16.0.0', 16, 'A description')
        .put()
        .should.be.fulfilled;
    });
  });
});
