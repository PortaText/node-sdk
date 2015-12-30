/**
 * @module blacklist
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Blacklist endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#https://github.com/PortaText/docs/wiki/REST-API#blacklistnumber Blacklist endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Blacklist () {
  Blacklist.super_.call(this);
}

util.inherits(Blacklist, commandMod.Command);

/**
 * Sets the number.
 *
 * @param {string} number
 *
 * @access public
 * @return {module:command~Command}
 */
Blacklist.prototype.number = function (number) {
  return this.setArgument('number', number);
};

/**
 * Send a CSV file to blacklist contacts.
 *
 * @param {string} filename
 *
 * @access public
 * @return {module:command~Command}
 */
Blacklist.prototype.csv = function (filename) {
  return this.setArgument('file', filename);
};

Blacklist.prototype.endpoint = function (method) {
  var endpoint = 'blacklist/contacts';
  var number = this.getArgument('number');
  if (number) {
    endpoint = 'blacklist/' + number;
    this.delArgument('number');
    return endpoint;
  }
  return endpoint;
};

exports.Blacklist = Blacklist;
