var clientMod = require('../src/client/client');
var assert = require('assert');
var Promise = require('promise');

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
      client.execute = function (descriptor) {
        return new Promise(function(resolve, reject) {
          resolve({
            code: 777,
            headers: {},
            body: ''
          })
        });
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
          function (result) {
            assert.equal(JSON.stringify(result.data), '{}');
            done();
          }
        );
    });

    it('should issue requests with the right information', function (done) {
      var endpoint = 'http://1.1.1.1:999/path';
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        assert.equal(descriptor.uri, endpoint + '/some/endpoint');
        assert.equal(descriptor.method, 'amethod');
        assert.equal(descriptor.headers['Content-Type'], 'text/plain');
        assert.equal(descriptor.body, 'abody');
        return new Promise(function(resolve, reject) {
          resolve({
            code: 777,
            headers: {
              'retheader1': 'value1',
              'retheader2': 'value2'
            },
            body: '{"success": true}'
          })
        });
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
          function (result) {
            assert.equal(result.code, 777);
            assert.equal(result.headers['retheader1'], 'value1');
            assert.equal(result.headers['retheader2'], 'value2');
            assert.equal(result.data.success, true);
            done();
          }
        );
    });
  });
});