/**
 * @module gsm_charset
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The GsmCharset endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_gsm_charset GsmCharset endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function GsmCharset () {
  GsmCharset.super_.call(this);
}

util.inherits(GsmCharset, commandMod.Command);

GsmCharset.prototype.endpoint = function (method) {
  return 'gsm_charset';
};

exports.GsmCharset = GsmCharset;
