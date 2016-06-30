/**
 * @module operators
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Operators endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_operators Operators endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Operators () {
  Operators.super_.call(this);
}

util.inherits(Operators, commandMod.Command);

/**
 * Return the specific page of results.
 *
 * @param {integer} page
 *
 * @access public
 * @return {module:command~Command}
 */
Operators.prototype.page = function (page) {
  return this.setArgument('page', page);
};

/**
 * Return the specific page of results.
 *
 * @param {string} 'country' or 'mcc'.
 * @param {string} 'asc' or 'desc'.
 *
 * @access public
 * @return {module:command~Command}
 */
Operators.prototype.sortBy = function (sortBy, order) {
  this.setArgument('sortBy', sortBy);
  return this.setArgument('order', order);
};

/**
 * Saves the list to the given filename.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
Operators.prototype.saveTo = function (file) {
  return this.setArgument('accept_file', file);
};

Operators.prototype.endpoint = function (method) {
  var endpoint = 'operators'
  var queryString = {};
  if (this.getArgument('page')) {
    queryString.page = this.getArgument('page');
    this.delArgument('page');
  }
  if (this.getArgument('sortBy')) {
    queryString.sort_by = this.getArgument('sortBy');
    this.delArgument('sortBy');
  }
  if (this.getArgument('order')) {
    queryString.order = this.getArgument('order');
    this.delArgument('order');
  }

  if (Object.keys(queryString).length > 0) {
    endpoint += '?' + qs.stringify(queryString);
  }
  return endpoint;
};

exports.Operators = Operators;
