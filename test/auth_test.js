var clientMod = require('../src/client/client');
var assert = require('assert');
var Promise = require('promise');

describe('Client', function() {
  describe('run', function () {
    it('should be able to use api key', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor) {
        assert.equal(descriptor.headers['X-Api-Key'], 'an_api_key');
        return new Promise(function(resolve, reject) {
          resolve({
            code: 200,
            headers: {},
            body: '{"success": true}'
          })
        });
      };
      client
        .setApiKey('an_api_key')
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody',
          null,
          function (err, result) {
            done();
          }
        );
    });

    it('should be able to use session token', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        assert.equal(descriptor.headers['X-Session-Token'], 'asessiontoken');
        return new Promise(function(resolve, reject) {
          resolve({
            code: 200,
            headers: {},
            body: '{"success": true}'
          })
        });
      };
      client.sessionToken = 'asessiontoken';
      client
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody',
          'session_token',
          function (err, result) {
            done();
          }
        );
    });

    it('should be able to use credentials', function (done) {
      var client = new clientMod.Client();
      client.execute = function (descriptor, callback) {
        var authString = descriptor.headers['Authorization'].split(' ');
        authString = new Buffer(authString[1], 'base64')
          .toString("ascii")
          .split(':');
        assert.equal(authString[0], 'username');
        assert.equal(authString[1], 'password');
        return new Promise(function(resolve, reject) {
          resolve({
            code: 200,
            headers: {},
            body: '{"success": true}'
          })
        });
      };
      client
        .setCredentials('username', 'password')
        .run(
          'endpoint',
          'get',
          'text/plain',
          'abody',
          'basic',
          function (err, result) {
            done();
          }
        );
    });
  });
});