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
  });
});