/**
 * @module me
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Me endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_me Me endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Me () {
  Me.super_.call(this);
}

util.inherits(Me, commandMod.Command);

/**
 * Sets the name.
 *
 * @param {string} first
 * @param {string} last
 *
 * @access public
 * @return {module:command~Command}
 */
Me.prototype.name = function (first, last) {
  this.setArgument('first_name', first);
  return this.setArgument('last_name', last);
};

/**
 * Sets the company.
 *
 * @param {string} company
 *
 * @access public
 * @return {module:command~Command}
 */
Me.prototype.company = function (company) {
  return this.setArgument('company', company);
};

/**
 * Sets the email.
 *
 * @param {string} email
 *
 * @access public
 * @return {module:command~Command}
 */
Me.prototype.email = function (email) {
  return this.setArgument('email', email);
};

/**
 * Sets the callback url.
 *
 * @param {string} callbackUrl
 *
 * @access public
 * @return {module:command~Command}
 */
Me.prototype.callbackUrl = function (callbackUrl) {
  return this.setArgument('callback_url', callbackUrl);
};

/**
 * Sets the timezone.
 *
 * @param {string} timezone
 *
 * @access public
 * @return {module:command~Command}
 */
Me.prototype.timezone = function (timezone) {
  return this.setArgument('timezone', timezone);
};

Me.prototype.endpoint = function (method) {
  return 'me';
};

exports.Me = Me;
