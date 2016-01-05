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
  return 'me/password';
};

exports.MyPassword = MyPassword;
