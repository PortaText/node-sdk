/**
 * @module contacts
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Contacts endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_all_contacts Contacts endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Contacts () {
  Contacts.super_.call(this);
}

util.inherits(Contacts, commandMod.Command);

/**
 * Use this contact number.
 *
 * @param {string} number
 *
 * @access public
 * @return {module:command~Command}
 */
Contacts.prototype.id = function (number) {
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
Contacts.prototype.name = function (name) {
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
Contacts.prototype.set = function (name, value) {
  this.setArgument('name', name);
  return this.setArgument('value', value);
};

/**
 * Include contact list ids in the export.
 *
 * @access public
 * @return {module:command~Command}
 */
Contacts.prototype.withContactLists = function () {
  return this.setArgument('with_contact_lists', true);
};

/**
 * Return the specific page of results.
 *
 * @param {integer} page
 *
 * @access public
 * @return {module:command~Command}
 */
Contacts.prototype.page = function (page) {
  return this.setArgument('page', page);
};

/**
 * Sets all the given variables.
 *
 * @param {Object} variables
 *
 * @access public
 * @return {module:command~Command}
 */
Contacts.prototype.setAll = function (variables) {
  var vars = [];
  for (var k in variables) {
    vars.push({key: k, value: variables[k]});
  }
  return this.setArgument('variables', vars);
};

/**
 * Saves the variables to the given filename.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
Contacts.prototype.saveTo = function (file) {
  return this.setArgument('accept_file', file);
};

/**
 * Send a CSV file to import variables from.
 *
 * @param {string} filename
 *
 * @access public
 * @return {module:command~Command}
 */
Contacts.prototype.csv = function (filename) {
  return this.setArgument('file', filename);
};

Contacts.prototype.endpoint = function (method) {
  var queryString = {};
  if (this.getArgument('with_contact_lists')) {
    queryString.with_contact_lists = 'true';
    this.delArgument('with_contact_lists');
  }
  var page = this.getArgument('page');
  if (page) {
    queryString.page = page;
    this.delArgument('page');
  }

  var number = this.getArgument('number');
  if (!number) {
    return 'contacts?' + qs.stringify(queryString);
  }
  this.delArgument('number');
  var endpoint = 'contacts/' + number + '/variables';
  var name = this.getArgument('name');
  if (name) {
    this.delArgument('name');
    endpoint = endpoint + '/' + name;
  }
  return endpoint;
};

exports.Contacts = Contacts;
