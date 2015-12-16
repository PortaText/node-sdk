var clientMod = require('../src/client/client');
var assert = require('assert');

describe('Client', function() {
  describe('run', function () {
    it('should be able to accept a logger', function (done) {
      var logger = function() { };
      var client = new clientMod.Client();
      client.setLogger(logger);
      assert.equal(client.logger, logger);
      done();
    });

    it('should return error on invalid auth type', function (done) {
      var client = new clientMod.Client();
      client.run(
        'some/endpoint',
        'method',
        'text/plain',
        '',
        'whatever',
        function (err) {
          assert.equal(err, 'invalid_auth_type');
          done();
        }
      );
    });

    it('should return error on abstract execute call', function (done) {
      var client = new clientMod.Client();
      client
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'method',
          'text/plain',
          '',
          'api_key',
          function (err) {
            assert.equal(err, 'not_implemented');
            done();
          }
        );
    });

    it('should handle empty body', function (done) {
      var endpoint = 'http://1.1.1.1:999/path';
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        callback(undefined, 777, {}, '');
      };
      client
        .setEndpoint(endpoint)
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(JSON.stringify(result.body), '{}');
            done();
          }
        );
    });

    it('should issue requests with the right information', function (done) {
      var endpoint = 'http://1.1.1.1:999/path';
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        assert.equal(descriptor.uri, endpoint + '/some/endpoint');
        assert.equal(descriptor.method, 'amethod');
        assert.equal(descriptor.headers['Content-Type'], 'text/plain');
        assert.equal(descriptor.body, 'abody');
        callback(undefined, 777, {
          'retheader1': 'value1',
          'retheader2': 'value2'
        }, '{"success": true}');
      };
      client
        .setEndpoint(endpoint)
        .setApiKey('an_api_key')
        .run(
          'some/endpoint',
          'amethod',
          'text/plain',
          'abody',
          'api_key',
          function (err, result) {
            assert.equal(result.code, 777);
            assert.equal(result.headers['retheader1'], 'value1');
            assert.equal(result.headers['retheader2'], 'value2');
            assert.equal(result.body.success, true);
            done();
          }
        );
    });
  });
});