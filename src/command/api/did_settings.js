/**
 * @module did_settings
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The DidSettings endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_did_settings DidSettings endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function DidSettings () {
  DidSettings.super_.call(this);
}

util.inherits(DidSettings, commandMod.Command);

/**
 * Selects DID.
 *
 * @param {string} number
 *
 * @access public
 * @return {module:command~Command}
 */
DidSettings.prototype.forNumber = function (number) {
  return this.setArgument('id', number);
};

/**
 * Enables CNAM lookup.
 *
 * @param {integer} value
 *
 * @access public
 * @return {module:command~Command}
 */
DidSettings.prototype.enableCnam = function () {
  return this.setArgument('cnam_enabled', true);
};

/**
 * Disables CNAM lookup.
 *
 * @access public
 * @return {module:command~Command}
 */
DidSettings.prototype.disableCnam = function () {
  return this.setArgument('cnam_enabled', false);
};

/**
 * Disables autoresponder.
 *
 * @access public
 * @return {module:command~Command}
 */
DidSettings.prototype.dontAutoRespond = function () {
  return this.setArgument('autoresponder_enabled', false);
};

/**
 * Enables autoresponder.
 *
 * @param {string} text
 *
 * @access public
 * @return {module:command~Command}
 */
DidSettings.prototype.autoRespondWith = function (text) {
  this.setArgument('autoresponder_text', text);
  return this.setArgument('autoresponder_enabled', true);
};

DidSettings.prototype.endpoint = function (method) {
  var id = this.getArgument('id');
  if (!id) {
    throw new Error('DID number cant be null');
  }
  this.delArgument('id');
  return 'me/dids/' + id;
};

exports.DidSettings = DidSettings;