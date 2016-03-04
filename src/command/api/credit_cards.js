/**
 * @module credit_cards
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The CreditCards endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_credit_cards CreditCards endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function CreditCards () {
  CreditCards.super_.call(this);
}

util.inherits(CreditCards, commandMod.Command);

/**
 * Sets the credit card id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {module:command~Command}
 */
CreditCards.prototype.id = function (id) {
  return this.setArgument('id', id);
};

/**
 * Set name on card.
 *
 * @param {string} firstname
 * @param {string} lastname
 *
 * @access public
 * @return {module:command~Command}
 */
CreditCards.prototype.nameOnCard = function (firstname, lastname) {
  this.setArgument('first_name', firstname);
  return this.setArgument('last_name', lastname);
};

/**
 * Set card information.
 *
 * @param {string} number
 * @param {string} expirationDate In format: YYYY-MM.
 * @param {string} code
 *
 * @access public
 * @return {module:command~Command}
 */
CreditCards.prototype.cardInfo = function (number, expirationDate, code) {
  this.setArgument('card_number', number);
  this.setArgument('card_expiration_date', expirationDate);
  return this.setArgument('card_code', code);
};

/**
 * Set card billing address.
 *
 * @param {string} streetAddress
 * @param {string} city
 * @param {string} state
 * @param {string} zip
 * @param {string} country
 *
 * @access public
 * @return {module:command~Command}
 */
CreditCards.prototype.address = function (
  streetAddress, city, state, zip, country
) {
  this.setArgument('address', streetAddress);
  this.setArgument('city', city);
  this.setArgument('state', state);
  this.setArgument('zip', zip);
  return this.setArgument('country', country);
};

CreditCards.prototype.endpoint = function (method) {
  var endpoint = 'credit_cards';
  var id = this.getArgument('id');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  return endpoint;
};

exports.CreditCards = CreditCards;
