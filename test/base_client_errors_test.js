var clientMod = require('../src/client/client');
var assert = require('assert');
var Promise = require('promise');

describe('Client', function() {
  describe('run', function () {
    it('should handle a server error', function (done) {
      assertError(500, "server_error", done);
    });

    it('should handle a rate limit', function (done) {
      assertError(429, "rate_limited", done);
    });

    it('should handle an invalid media', function (done) {
      assertError(415, "invalid_media", done);
    });

    it('should handle an invalid method', function (done) {
      assertError(405, "invalid_method", done);
    });

    it('should handle a not found', function (done) {
      assertError(404, "not_found", done);
    });

    it('should handle a forbidden', function (done) {
      assertError(403, "forbidden", done);
    });

    it('should handle a payment required', function (done) {
      assertError(402, "payment_required", done);
    });

    it('should handle an invalid credentials', function (done) {
      assertError(401, "invalid_credentials", done);
    });

    it('should handle a client error', function (done) {
      assertError(400, "client_error", done);
    });
  });
});

var assertError = function(code, msg, callback) {
  var client = new clientMod.Client();
  client.execute = function (descriptor) {
    return new Promise(function (resolve, reject) {
      resolve({code: code, headers: {}, body: '{"success": false}'});
    });
  };
  client
    .setApiKey('an_api_key')
    .run(
      'some/endpoint',
      'amethod',
      'text/plain',
      'abody',
      'api_key',
      function (result) {
        assert.equal(result.code, code);
        assert.equal(result.errors.shift(), msg);
        callback();
      }
    );
};