var commandMod = require('../src/command/command');
var assert = require('assert');

describe('Command', function() {
  describe('endpoint', function () {
    it('should return error on abstract endpoint call', function (done) {
      var command = new commandMod.Command();
      assert.throws(command.endpoint, /not_implemented/);
      done();
    });
  });
});
