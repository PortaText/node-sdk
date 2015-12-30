var helper = require('../helper/client_mock');
var assert = require('assert');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var expect = require('chai').expect;
var Promise = require('promise');
chai.use(chaiAsPromised);
chai.should();

describe('CampaignLifecycle', function() {
  describe('post', function () {
    it('should not be able to proceed without a campaign id', function (done) {
      var obj = helper.mockClientForCommand().campaignLifecycle().pause();
      assert.throws(
        function() { obj.post.call(obj); },
        /Campaign id cant be null/
      );
      done();
    });

    it('should be able to start campaign', function () {
      return helper
        .mockClientForCommand('campaigns/391/lifecycle', {action: 'start'})
        .campaignLifecycle()
        .id(391)
        .start()
        .post()
        .should.be.fulfilled;
    });

    it('should be able to pause campaign', function () {
      return helper
        .mockClientForCommand('campaigns/391/lifecycle', {action: 'pause'})
        .campaignLifecycle()
        .id(391)
        .pause()
        .post()
        .should.be.fulfilled;
    });

    it('should be able to resume campaign', function () {
      return helper
        .mockClientForCommand('campaigns/391/lifecycle', {action: 'resume'})
        .campaignLifecycle()
        .id(391)
        .resume()
        .post()
        .should.be.fulfilled;
    });

    it('should be able to cancel campaign', function () {
      return helper
        .mockClientForCommand('campaigns/391/lifecycle', {action: 'cancel'})
        .campaignLifecycle()
        .id(391)
        .cancel()
        .post()
        .should.be.fulfilled;
    });
  });
});
