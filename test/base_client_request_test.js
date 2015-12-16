var clientMod = require('../src/client');
var assert = require('assert');

describe('Client', function() {
  describe('run', function () {
    it('should return error on abstract execute call', function (done) {
      var client = new clientMod.Client();
      client.run(
        'some/endpoint',
        'method',
        'text/plain',
        '',
        undefined,
        function (err) {
          assert.equal(err, 'not_implemented');
          done();
        });
    });

    it('should issue requests with the right information', function (done) {
      var client = new clientMod.Client();
      var endpoint = 'http://1.1.1.1:999/path';
      client.setEndpoint(endpoint);
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
      client.run(
        'some/endpoint',
        'amethod',
        'text/plain',
        'abody',
        undefined,
        function (err, result) {
          assert.equal(result.code, 777);
          assert.equal(result.headers['retheader1'], 'value1');
          assert.equal(result.headers['retheader2'], 'value2');
          assert.equal(result.body.success, true);
          done();
        });
    });
  });
});