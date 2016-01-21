/**
 * @module variables
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Variables endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_variables Variables endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Variables () {
  Variables.super_.call(this);
}

util.inherits(Variables, commandMod.Command);

/**
 * Use this contact number.
 *
 * @param {string} number
 *
 * @access public
 * @return {module:command~Command}
 */
Variables.prototype.forContact = function (number) {
  return this.setArgument('number', number);
};

/**
 * Specify only a variable name.
 *
 * @param {string} name
 *
 * @access public
 * @return {module:command~Command}
 */
Variables.prototype.name = function (name) {
  return this.setArgument('name', name);
};

/**
 * Sets the given variable.
 *
 * @param {string} name
 * @param {string} value
 *
 * @access public
 * @return {module:command~Command}
 */
Variables.prototype.set = function (name, value) {
  this.setArgument('name', name);
  return this.setArgument('value', value);
};

/**
 * Sets all the given variables.
 *
 * @param {Object} variables
 *
 * @access public
 * @return {module:command~Command}
 */
Variables.prototype.setAll = function (variables) {
  var vars = [];
  for (var k in variables) {
    vars.push({key: k, value: variables[k]});
  }
  return this.setArgument('variables', vars);
};

Variables.prototype.endpoint = function (method) {
  var number = this.getArgument('number');
  this.delArgument('number');
  var endpoint = 'contacts/' + number + '/variables';
  var name = this.getArgument('name');
  if (name) {
    this.delArgument('name');
    endpoint = endpoint + '/' + name;
  }
  return endpoint;
};

exports.Variables = Variables;
