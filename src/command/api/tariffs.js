/**
 * @module tariffs
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Timezones endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_tariffs Tariffs endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Tariffs () {
  Tariffs.super_.call(this);
}

util.inherits(Tariffs, commandMod.Command);

/**
 * Sets the tariff country ISO code.
 *
 * @param {string} countryIso 2-letter ISO code.
 *
 * @access public
 * @return {module:command~Command}
 */
Tariffs.prototype.forCountry = function (countryIso) {
  return this.setArgument('id', countryIso);
};

Tariffs.prototype.endpoint = function (method) {
  var endpoint = 'tariffs';
  var id = this.getArgument('id');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  return endpoint;
};

exports.Tariffs = Tariffs;