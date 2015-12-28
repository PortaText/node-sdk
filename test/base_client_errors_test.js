var clientMod = require('../src/client/client');
var assert = require('assert');

describe('Client', function() {
  describe('run', function () {
    it('should handle a server error', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 500, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "server_error");
            done();
          }
        );
    });

    it('should handle a rate limit', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 429, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "rate_limited");
            done();
          }
        );
    });

    it('should handle an invalid media', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 415, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "invalid_media");
            done();
          }
        );
    });

    it('should handle an invalid method', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 405, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "invalid_method");
            done();
          }
        );
    });

    it('should handle a not found', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 404, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "not_found");
            done();
          }
        );
    });

    it('should handle a forbidden', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 403, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "forbidden");
            done();
          }
        );
    });

    it('should handle a payment required', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 402, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "payment_required");
            done();
          }
        );
    });

    it('should handle an invalid credentials', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 401, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "invalid_credentials");
            done();
          }
        );
    });

    it('should handle a client error', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 400, {}, '{"success": false}');
      };
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(err, "client_error");
            done();
          }
        );
    });
  });
});