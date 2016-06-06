/**
 * @module trunks
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Trunks endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_trunks Trunks endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Trunks () {
  Trunks.super_.call(this);
}

util.inherits(Trunks, commandMod.Command);

/**
 * Sets the name.
 *
 * @param {string} name
 *
 * @access public
 * @return {module:command~Command}
 */
Trunks.prototype.name = function (name) {
  return this.setArgument('name', name);
};

/**
 * Sets the ip address.
 *
 * @param {string} ip
 *
 * @access public
 * @return {module:command~Command}
 */
Trunks.prototype.ip = function (ip) {
  return this.setArgument('ip', ip);
};

/**
 * Sets the id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {module:command~Command}
 */
Trunks.prototype.id = function (id) {
  return this.setArgument('id', id);
};

Trunks.prototype.endpoint = function (method) {
  var endpoint = 'trunks';
  var id = this.getArgument('id');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  return endpoint;
};

exports.Trunks = Trunks;
