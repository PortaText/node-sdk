/**
 * @module timezones
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Timezones endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_timezones Timezones endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {Command}
 */
function Timezones () {
  Timezones.super_.call(this);
}

util.inherits(Timezones, commandMod.Command);

Timezones.prototype.endpoint = function (method) {
  return 'timezones';
};

exports.Timezones = Timezones;