/**
 * @module cnam
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Cnam endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_cnam Cnam endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Cnam () {
  Cnam.super_.call(this);
}

util.inherits(Cnam, commandMod.Command);

/**
 * Asks for CNAM info for the specific number.
 *
 * @param {string} number The target number.
 *
 * @access public
 * @return {module:command~Command}
 */
Cnam.prototype.forNumber = function (number) {
  return this.setArgument('number', number);
};

/**
 * Send a CSV file to query CNAM.
 *
 * @param {string} filename
 *
 * @access public
 * @return {module:command~Command}
 */
Cnam.prototype.csv = function (filename) {
  return this.setArgument('file', filename);
};

Cnam.prototype.endpoint = function (method) {
  var number = this.getArgument('number');
  var file = this.getArgument('file');
  if (!number && !file) {
    throw new Error('DID number cant be null');
  }
  this.delArgument('number');
  if (!number) {
    return 'cnam';
  }
  return 'cnam/' + number;
};

exports.Cnam = Cnam;
