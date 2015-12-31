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
 * @param {string} countryIso 2-letter ISO code.
 *
 * @access public
 * @return {module:command~Command}
 */
Cnam.prototype.forNumber = function (number) {
  return this.setArgument('number', number);
};

Cnam.prototype.endpoint = function (method) {
  var number = this.getArgument('number');
  if (!number) {
    throw new Error('DID number cant be null');
  }
  this.delArgument('number');
  return 'cnam/' + number;
};

exports.Cnam = Cnam;
