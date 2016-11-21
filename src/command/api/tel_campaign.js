/**
 * @module tel_campaign
 */
var campaignMod = require('./campaigns');
var util = require('util');

/**
 * The Campaigns endpoint (Telephony).
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_campaigns Campaigns endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function TelCampaign () {
  TelCampaign.super_.call(this);
  this.setArgument('type', 'telephony');
}

util.inherits(TelCampaign, campaignMod.Campaigns);

/**
 * Sets the total number of iterations.
 *
 * @param {integer} iterations
 *
 * @access public
 * @return {module:command~Command}
 */
TelCampaign.prototype.iterations = function (iterations) {
  return this.setSetting('iterations', iterations);
};

/**
 * Sets the total number of agents.
 *
 * @param {integer} agents
 *
 * @access public
 * @return {module:command~Command}
 */
TelCampaign.prototype.agents = function (agents) {
  return this.setSetting('agents', agents);
};

/**
 * Sets the post work duration for each agent after each call.
 *
 * @param {integer} seconds
 *
 * @access public
 * @return {module:command~Command}
 */
TelCampaign.prototype.postCallWorkDuration = function (seconds) {
  return this.setSetting('post_call_work_duration', seconds);
};

/**
 * Minimum time to wait before attempting to recontact a target.
 *
 * @param {integer} minutes
 *
 * @access public
 * @return {module:command~Command}
 */
TelCampaign.prototype.minIterationTime = function (minutes) {
  return this.setSetting('min_iteration_time', minutes);
};

/**
 * Sets the outbound trunk id.
 *
 * @param {integer} Trunk ID.
 *
 * @access public
 * @return {module:command~Command}
 */
TelCampaign.prototype.outboundTrunk = function (trunkId) {
  return this.setSetting('outbound_trunk_id', trunkId);
};

/**
 * Dial Timeout for Leg A.
 *
 * @param {integer} timeout In seconds.
 *
 * @access public
 * @return {module:command~Command}
 */
TelCampaign.prototype.dialTimeout = function (timeout) {
  return this.setSetting('dial_timeout', timeout);
};

/**
 * An array of call flow objects
 *
 * @param {integer} Call flow objects.
 *
 * @access public
 * @return {module:command~Command}
 */
TelCampaign.prototype.flow = function (callFlow) {
  return this.setSetting('flow', callFlow);
};

exports.TelCampaign = TelCampaign;
