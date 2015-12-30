/**
 * @module settings
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Settings endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_settings Settings endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Settings () {
  Settings.super_.call(this);
}

util.inherits(Settings, commandMod.Command);

/**
 * Dont send an alert by email on low credit.
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.dontAlertOnLowCredit = function () {
  return this.setArgument('alert_when_credit_less_than', null);
};

/**
 * Sends an alert by email when credit reaches the given threshold.
 *
 * @param {integer} value
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.alertWhenCreditLessThan = function (value) {
  return this.setArgument('alert_when_credit_less_than', value);
};

/**
 * Don't send emails on inbound messages.
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.dontSendInboundByEmail = function () {
  return this.setArgument('email_on_inbound_sms', null);
};

/**
 * Set email where to send inbound messages to.
 *
 * @param {string} email
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.sendInboundByEmail = function (email) {
  return this.setArgument('email_on_inbound_sms', email);
};

/**
 * Disables auto recharges.
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.disableAutoRecharges = function () {
  return this.setArgument('autorecharge_enabled', false);
};

/**
 * Enables auto recharges.
 *
 * @param {integer} whenCredit
 * @param {integer} cardId
 * @param {number} total
 *
 * @access public
 * @return {module:command~Command}
 */
Settings.prototype.enableAutoRecharges = function (whenCredit, cardId, total) {
  this.setArgument('autorecharge_enabled', true);
  this.setArgument('autorecharge_card_id', cardId);
  this.setArgument('autorecharge_total', total);
  return this.setArgument('autorecharge_when_credit', whenCredit);
};

Settings.prototype.endpoint = function (method) {
  return 'me/settings';
};

exports.Settings = Settings;