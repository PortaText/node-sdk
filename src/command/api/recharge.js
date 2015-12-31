/**
 * @module recharge
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Recharge endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_recharge Recharge endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Recharge () {
  Recharge.super_.call(this);
}

util.inherits(Recharge, commandMod.Command);

/**
 * Sets the card id to use for recharge.
 *
 * @param {integer} cardId
 *
 * @access public
 * @return {module:command~Command}
 */
Recharge.prototype.withCard = function (cardId) {
  return this.setArgument('card_id', cardId);
};

/**
 * Amount of money to recharge.
 *
 * @param {float} total
 *
 * @access public
 * @return {module:command~Command}
 */
Recharge.prototype.total = function (total) {
  return this.setArgument('total', total);
};

Recharge.prototype.endpoint = function (method) {
  return 'recharge';
};

exports.Recharge = Recharge;
