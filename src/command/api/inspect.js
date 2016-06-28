/**
 * @module inspect
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Inspect endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_inspect Inspect endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Inspect () {
  Inspect.super_.call(this);
}

util.inherits(Inspect, commandMod.Command);

/**
 * Inspects the given number.
 *
 * @param {string} number
 *
 * @access public
 * @return {module:command~Command}
 */
Inspect.prototype.number = function (number) {
  return this.setArgument('number', number);
};

/**
 * Send a CSV file to inspect numbers.
 *
 * @param {string} filename
 *
 * @access public
 * @return {module:command~Command}
 */
Inspect.prototype.csv = function (filename) {
  return this.setArgument('file', filename);
};

Inspect.prototype.endpoint = function (method) {
  var endpoint = 'inspect';
  var number = this.getArgument('number');
  if (number) {
    endpoint = endpoint + "/" + number;
    this.delArgument('number');
  }
  return endpoint;
};

exports.Inspect = Inspect;
