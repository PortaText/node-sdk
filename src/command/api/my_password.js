/**
 * @module my_password
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Me/Password endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_me_password Me/Password endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function MyPassword () {
  MyPassword.super_.call(this);
}

util.inherits(MyPassword, commandMod.Command);

/**
 * Use this nonce to reset a password.
 *
 * @param {string} nonce
 * @param {string} newPassword
 *
 * @access public
 * @return {module:command~Command}
 */
MyPassword.prototype.withNonce = function (nonce, newPassword) {
  this.setArgument('new_password', newPassword);
  return this.setArgument('nonce', nonce);
};

/**
 * Ask to reset the password for this email.
 *
 * @param {string} email
 *
 * @access public
 * @return {module:command~Command}
 */
MyPassword.prototype.forEmail = function (email) {
  return this.setArgument('email', email);
};

MyPassword.prototype.reset = function () {
  return this.setArgument('reset', true);
};

/**
 * Sets the name.
 *
 * @param {string} oldPassword
 * @param {string} newPassword
 *
 * @access public
 * @return {module:command~Command}
 */
MyPassword.prototype.change = function (oldPassword, newPassword) {
  this.setArgument('old_password', oldPassword);
  return this.setArgument('new_password', newPassword);
};

MyPassword.prototype.endpoint = function (method) {
  var endpoint = 'me/password';
  var reset = this.getArgument('reset');
  var nonce = this.getArgument('nonce');
  if (reset) {
      endpoint = endpoint + '/reset';
      this.delArgument('reset');
  }
  if (nonce) {
      endpoint = endpoint + '/' + nonce;
      this.delArgument('nonce');
  }
  return endpoint;
};

exports.MyPassword = MyPassword;
