/**
 * @module plans
 */
var commandMod = require('../command');
var util = require('util');

/**
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_plans Plans endpoint.
 * @class
 * @author Laura Corvalan <laura@portatext.com>
 * @license Apache-2.0
 * @copyright 2015- PortaText
 * @extends {module:command~Command}
 */
function Plans () {
  Plans.super_.call(this);
}

util.inherits(Plans, commandMod.Command);

Plans.prototype.endpoint = function (method) {
  return 'plans';
};

exports.Plans = Plans;