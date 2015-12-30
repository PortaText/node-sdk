var helper = require('./helper/client_mock');
var clientMod = require('../src/client/client');
var assert = require('assert');
var expect = require('chai').expect;
var Promise = require('promise');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();

describe('Client', function() {
  describe('run', function () {
    it('should handle a server error', function () {
      return assertError(500, "server_error");
    });

    it('should handle a rate limit', function () {
      return assertError(429, "rate_limited");
    });

    it('should handle an invalid media', function () {
      return assertError(415, "invalid_media");
    });

    it('should handle an invalid method', function () {
      return assertError(405, "invalid_method");
    });

    it('should handle a not found', function () {
      return assertError(404, "not_found");
    });

    it('should handle a forbidden', function () {
      return assertError(403, "forbidden");
    });

    it('should handle a payment required', function () {
      return assertError(402, "payment_required");
    });

    it('should handle an invalid credentials', function () {
      return assertError(401, "invalid_credentials");
    });

    it('should handle a client error', function () {
      return assertError(400, "client_error");
    });
  });
});

var assertError = function(code, msg) {
  var client = new clientMod.Client();
  client.execute = function (descriptor) {
    return helper.mockResponse(code, null);
  };
  return client
    .setApiKey('an_api_key')
    .run(
      'some/endpoint',
      'amethod',
      'text/plain',
      'abody',
      'api_key'
    ).then(function (result) {
      assert.fail(result, undefined, 'Should have failed');
    }, function (err) {
      expect(err.code).to.equal(code);
      expect(err.errors.shift()).to.equal(msg);
    });
};