/**
 * @module simulate
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Simulate endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_simulate Simulate endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Simulate () {
  Simulate.super_.call(this);
}

util.inherits(Simulate, commandMod.Command);

/**
 * Sets the destination country.
 *
 * @param {string} country 2-letter ISO code.
 *
 * @access public
 * @return {module:command~Command}
 */
Simulate.prototype.country = function (country) {
  return this.setArgument('country', country);
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
Simulate.prototype.useTemplate = function (templateId, variables) {
  this.setArgument('template_id', templateId);
  return this.setArgument('variables', variables);
};

/**
 * Sets the message text.
 *
 * @param {string} text
 *
 * @access public
 * @return {module:command~Command}
 */
Simulate.prototype.text = function (text) {
  return this.setArgument('text', text);
};

Simulate.prototype.endpoint = function (method) {
  var endpoint = 'simulate';

  return endpoint;
};

exports.Simulate = Simulate;
