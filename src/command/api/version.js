/**
 * @module version
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Version endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_version Version endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Version () {
  Version.super_.call(this);
}

util.inherits(Version, commandMod.Command);

Version.prototype.endpoint = function (method) {
  return 'version';
};

exports.Version = Version;
