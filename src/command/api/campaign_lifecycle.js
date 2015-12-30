/**
 * @module campaign_lifecycle
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The CampaignLifecycle endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_campaigns_lifecycle CampaignLifecycle endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function CampaignLifecycle () {
  CampaignLifecycle.super_.call(this);
}

util.inherits(CampaignLifecycle, commandMod.Command);

/**
 * Sets the campaign id.
 *
 * @access public
 * @return {module:command~Command}
 */
CampaignLifecycle.prototype.id = function (id) {
  return this.setArgument('id', id);
};

/**
 * Starts a campaign.
 *
 * @access public
 * @return {module:command~Command}
 */
CampaignLifecycle.prototype.start = function () {
  return this.setArgument('action', 'start');
};

/**
 * Resumes a campaign.
 *
 * @access public
 * @return {module:command~Command}
 */
CampaignLifecycle.prototype.resume = function () {
  return this.setArgument('action', 'resume');
};

/**
 * Pauses a campaign.
 *
 * @access public
 * @return {module:command~Command}
 */
CampaignLifecycle.prototype.pause = function () {
  return this.setArgument('action', 'pause');
};

/**
 * Cancels a campaign.
 *
 * @access public
 * @return {module:command~Command}
 */
CampaignLifecycle.prototype.cancel = function () {
  return this.setArgument('action', 'cancel');
};

CampaignLifecycle.prototype.endpoint = function (method) {
  var id = this.getArgument('id');
  if (!id) {
    throw new Error('Campaign id cant be null');
  }
  this.delArgument('id');
  return 'campaigns/' + id + '/lifecycle';
};

exports.CampaignLifecycle = CampaignLifecycle;
