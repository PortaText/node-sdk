/**
 * @module sms_campaign
 */
var campaignMod = require('./campaigns');
var util = require('util');

/**
 * The Campaigns endpoint (SMS).
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_campaigns Campaigns endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function SmsCampaign () {
  SmsCampaign.super_.call(this);
  this.setArgument('type', 'sms');
}

util.inherits(SmsCampaign, campaignMod.Campaigns);

/**
 * Sets the template id to use.
 *
 * @param {integer} templateId
 * @param {Object} variables
 *
 * @access public
 * @return {module:command~Command}
 */
SmsCampaign.prototype.useTemplate = function (templateId, variables) {
  this.setSetting('template_id', templateId);
  return this.setSetting('variables', variables);
};

/**
 * Sets the message text.
 *
 * @param {string} text
 *
 * @access public
 * @return {module:command~Command}
 */
SmsCampaign.prototype.text = function (text) {
  return this.setSetting('text', text);
};

/**
 * Specify SMS Service ID to use as source.
 *
 * @param {integer} serviceId
 *
 * @access public
 * @return {module:command~Command}
 */
SmsCampaign.prototype.fromService = function (serviceId) {
  return this.setArgument('service_id', serviceId);
};

exports.SmsCampaign = SmsCampaign;
