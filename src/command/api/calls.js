/**
 * @module calls
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Calls endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_calls Calls endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Calls () {
  Calls.super_.call(this);
}

util.inherits(Calls, commandMod.Command);

/**
 * Sets the message destination number.
 *
 * @param {string} to
 *
 * @access public
 * @return {module:command~Command}
 */
Calls.prototype.to = function (to) {
  return this.setArgument('to', to);
};

/**
 * Sets the message source number.
 *
 * @param {string} from
 *
 * @access public
 * @return {module:command~Command}
 */
Calls.prototype.from = function (from) {
  return this.setArgument('from', from);
};

/**
 * Sets the outbound trunk id.
 *
 * @param {integer} Trunk ID.
 *
 * @access public
 * @return {module:command~Command}
 */
Calls.prototype.outboundTrunk = function (trunkId) {
  return this.setArgument('outbound_trunk_id', trunkId);
};

/**
 * Dial Timeout for Leg A.
 *
 * @param {integer} timeout In seconds.
 *
 * @access public
 * @return {module:command~Command}
 */
Calls.prototype.dialTimeout = function (timeout) {
  return this.setArgument('dial_timeout', timeout);
};

/**
 * An array of call flow objects
 *
 * @param {integer} Call flow objects.
 *
 * @access public
 * @return {module:command~Command}
 */
Calls.prototype.flow = function (callFlow) {
  return this.setArgument('flow', callFlow);
};

/**
 * Searches for Call operations
 *
 * @param {Object} Search params (see the API doc).
 *
 * @access public
 * @return {module:command~Command}
 */
Calls.prototype.search = function (params) {
  return this.setArgument('search_params', params);
};

Calls.prototype.endpoint = function (method) {
  var endpoint = 'calls';

  var searchParams = this.getArgument('search_params');
  if (searchParams) {
    this.delArgument('search_params');
    return endpoint + '?' + qs.stringify(searchParams);
  }
  return endpoint;
};

exports.Calls = Calls;
