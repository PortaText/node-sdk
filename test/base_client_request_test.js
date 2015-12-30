var helper = require('./helper/client_mock');
var clientMod = require('../src/client/client');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('Client', function() {
  describe('run', function () {
    it('should be able to accept a logger', function (done) {
      var logger = function() { };
      var client = new clientMod.Client();
      client.setLogger(logger);
      assert.equal(client.logger, logger);
      done();
    });

    it('should return error on invalid auth type', function () {
      var client = new clientMod.Client();
      return client.run(
        'some/endpoint',
        'method',
        'text/plain',
        '',
        'whatever'
      ).should.eventually.be.rejectedWith('invalid_auth_type');
    });

    it('should return error on abstract execute call', function () {
      var client = new clientMod.Client();
      return client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'method',
          'text/plain',
          '',
          'api_key'
        ).should.eventually.be.rejectedWith('not_implemented');
    });

    it('should handle empty body', function () {
      var endpoint = 'http://1.1.1.1:999/path';
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        return helper.mockResponse(null, null, '');
      };
      return client
        .setEndpoint(endpoint)
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key'
        ).then(function (result) {
          expect(JSON.stringify(result.data)).to.equal('{}');
        });
    });

    it('should issue requests with the right information', function () {
      var endpoint = 'http://1.1.1.1:999/path';
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        assert.equal(descriptor.uri, endpoint + '/some/endpoint');
        assert.equal(descriptor.method, 'amethod');
        assert.equal(descriptor.headers['Content-Type'], 'text/plain');
        assert.equal(descriptor.body, 'abody');
        return helper.mockResponse(
          null,
          {
            'retheader1': 'value1',
            'retheader2': 'value2'
          }
        );
      };
      return client
        .setEndpoint(endpoint)
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key'
        ).then(function (result) {
          expect(result.code).to.equal(200);
          expect(result.headers['retheader1']).to.equal('value1');
          expect(result.headers['retheader2']).to.equal('value2');
          expect(result.data.success).to.equal(true);
        });
    });
  });
});