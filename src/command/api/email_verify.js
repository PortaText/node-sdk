/**
 * @module email_verify
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The EmailVerify endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_email_verify EmailVerify endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function EmailVerify () {
  EmailVerify.super_.call(this);
}

util.inherits(EmailVerify, commandMod.Command);

/**
 * Use this nonce to verify.
 *
 * @param {string} nonce
 *
 * @access public
 * @return {module:command~Command}
 */
EmailVerify.prototype.withNonce = function (nonce) {
  return this.setArgument('nonce', nonce);
};

EmailVerify.prototype.endpoint = function (method) {
  var endpoint = 'me/email_verify';
  var nonce = this.getArgument('nonce');
  if (nonce) {
    this.delArgument('nonce');
    endpoint = endpoint + '/' + nonce;
  }
  return endpoint;
};

exports.EmailVerify = EmailVerify;
