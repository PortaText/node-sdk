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
    it('should be able to use api key', function () {
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        assert.equal(descriptor.headers['X-Api-Key'], 'an_api_key');
        return helper.mockResponse();
      };
      return client
        .setApiKey('an_api_key')
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody',
          null
        ).should.be.fulfilled;
    });

    it('should be able to use session token', function () {
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        assert.equal(descriptor.headers['X-Session-Token'], 'asessiontoken');
        return helper.mockResponse();
      };
      client.sessionToken = 'asessiontoken';
      return client
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody',
          'session_token'
        ).should.be.fulfilled;
    });

    it('should be able to use credentials', function () {
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        var authString = descriptor.headers['Authorization'].split(' ');
        authString = new Buffer(authString[1], 'base64')
          .toString("ascii")
          .split(':');
        assert.equal(authString[0], 'username');
        assert.equal(authString[1], 'password');
        return helper.mockResponse();
      };
      return client
        .setCredentials('username', 'password')
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody',
          'basic'
        ).should.be.fulfilled;
    });

    it('should be able to get a session token and retry op', function () {
      var client = new clientMod.Client();
      client.execute = function (descriptor) {

        // Assert this is a login.
        assert.equal(descriptor.headers['X-Session-Token'], undefined);
        assert.notEqual(descriptor.headers['Authorization'], undefined);
        assert.equal(descriptor.uri, client.DEFAULT_ENDPOINT + '/login');

        // Setup the mock for the next call, asserting a session token auth.
        client.execute = function (descriptor) {
          assert.equal(descriptor.headers['Authorization'], undefined);
          assert.equal(descriptor.headers['X-Session-Token'], 'asessiontoken');
          assert.equal(descriptor.uri, client.DEFAULT_ENDPOINT + '/endpoint');
          return helper.mockResponse();
        };
        return helper.mockResponse(
          null, null, {success: true, token: "asessiontoken"}
        );
      };
      return client
        .setCredentials('username', 'password')
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody'
        ).should.be.fulfilled;
    });

    it('should be able to renew a session token and retry op', function () {
      var client = new clientMod.Client();
      client.sessionToken = 'staleSessionToken';

      client.execute = function (descriptor) {
        // Assert a session token auth.
        assert.equal(
          descriptor.headers['X-Session-Token'], 'staleSessionToken'
        );
        assert.equal(descriptor.uri, client.DEFAULT_ENDPOINT + '/endpoint');

        // Setup the mock: We return 401, so we expect a login using basic auth
        // to renew the session token.
        client.execute = function (descriptor) {
          assert.equal(descriptor.headers['X-Session-Token'], undefined);
          assert.notEqual(descriptor.headers['Authorization'], undefined);
          assert.equal(descriptor.uri, client.DEFAULT_ENDPOINT + '/login');

          // This mock sets up the next mock, which is the call to the original
          // operation using the new session token.
          client.execute = function (descriptor) {
            assert.equal(
              descriptor.headers['X-Session-Token'], 'asessiontoken'
            );
            assert.equal(descriptor.uri, client.DEFAULT_ENDPOINT + '/endpoint');
            return helper.mockResponse();
          };
          return helper.mockResponse(
            null, null, {success: true, token: "asessiontoken"}
          );
        };
        return helper.mockResponse(401);
      };
      return client
        .setCredentials('username', 'password')
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody'
        ).should.be.fulfilled;
    });

    it('should fail when not able to get a session token', function () {
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        // Assert this is a login.
        assert.equal(descriptor.headers['X-Session-Token'], undefined);
        assert.notEqual(descriptor.headers['Authorization'], undefined);
        assert.equal(descriptor.uri, client.DEFAULT_ENDPOINT + '/login');
        return helper.mockResponse(401);
      };
      return client
        .setCredentials('username', 'password')
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody'
        ).should.be.rejected;
    });
  });
});