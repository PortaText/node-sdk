var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
var qs = require('querystring');
chai.use(chaiAsPromised);
chai.should();

describe('Sounds', function() {
  describe('get', function () {
    it('should be able to get all sounds', function () {
      return helper
        .mockClientForCommand('sounds')
        .sounds()
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get one sound', function () {
      return helper
        .mockClientForCommand('sounds/44')
        .sounds()
        .id(44)
        .get()
        .should.be.fulfilled;
    });

    it('should be able to get one sound file', function () {
      return helper
        .mockClientForCommand(
          'sounds/44', '', 'application/json', 'audio/mpeg'
        )
        .sounds()
        .id(44)
        .saveTo('/tmp/sound.mp3')
        .get()
        .should.be.fulfilled;
    });
  });

  describe('delete', function () {
    it('should be able to delete a sound', function () {
      return helper
        .mockClientForCommand('sounds/44')
        .sounds()
        .id(44)
        .delete()
        .should.be.fulfilled;
    });
  });

  describe('post', function () {
    it('should be able to create a sound', function () {
      var queryString = qs.stringify({
        name: 'a sound',
        description: 'super duper sound',
      });
      return helper
        .mockClientForCommand(
          'sounds?' + queryString, 'file:/tmp/sound.mp3', 'audio/mpeg'
        )
        .sounds()
        .name('a sound')
        .description('super duper sound')
        .sound('/tmp/sound.mp3')
        .post()
        .should.be.fulfilled;
    });
  });

  describe('patch', function () {
    it('should be able to update a sound', function () {
      var queryString = qs.stringify({
        name: 'a sound',
        description: 'super duper sound',
      });
      return helper
        .mockClientForCommand(
          'sounds/44?' + queryString, 'file:/tmp/sound.mp3', 'audio/mpeg'
        )
        .sounds()
        .id(44)
        .name('a sound')
        .description('super duper sound')
        .sound('/tmp/sound.mp3')
        .patch()
        .should.be.fulfilled;
    });
    it('should be able to update a sound without sound file', function () {
      var queryString = qs.stringify({
        name: 'a sound',
        description: 'super duper sound',
      });
      return helper
        .mockClientForCommand('sounds/44?' + queryString)
        .sounds()
        .id(44)
        .name('a sound')
        .description('super duper sound')
        .patch()
        .should.be.fulfilled;
    });
  });
});
