/**
 * @module number_verify
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Number Verify endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_number_verify Number Verify endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function NumberVerify () {
  NumberVerify.super_.call(this);
}

util.inherits(NumberVerify, commandMod.Command);

/**
 * Sets the target number.
 *
 * @param {string} countryIso 2-letter ISO code.
 *
 * @access public
 * @return {module:command~Command}
 */
NumberVerify.prototype.forNumber = function (number) {
  return this.setArgument('number', number);
};

/**
 * Uses the given code to verify the phone number.
 *
 * @param {string} to
 *
 * @access public
 * @return {module:command~Command}
 */
NumberVerify.prototype.verifyWith = function (code) {
  return this.setArgument('code', code);
};

/**
 * Sets the message source number.
 *
 * @param {string} from
 *
 * @access public
 * @return {module:command~Command}
 */
NumberVerify.prototype.from = function (from) {
  return this.setArgument('from', from);
};

/**
 * Sets the template id to use.
 *
 * @param {integer} templateId
 * @param {Object} variables
 *
 * @access public
 * @return {module:command~Command}
 */
NumberVerify.prototype.useTemplate = function (templateId, variables) {
  this.setArgument('template_id', templateId);
  return this.setArgument('variables', variables);
};


NumberVerify.prototype.endpoint = function (method) {
  var number = this.getArgument('number');
  if (!number) {
    throw new Error('Number cant be null');
  }
  this.delArgument('number');
  var code = this.getArgument('code');
  var endpoint = 'number_verify/' + number;
  if (code) {
    endpoint = endpoint + '?code=' + code;
  }
  return endpoint;
};

exports.NumberVerify = NumberVerify;
