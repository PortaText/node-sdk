/**
 * @module contact_lists
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The ContactLists endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_contact_lists ContactLists endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function ContactLists () {
  ContactLists.super_.call(this);
}

util.inherits(ContactLists, commandMod.Command);

/**
 * Sets the id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {module:command~Command}
 */
ContactLists.prototype.id = function (id) {
  return this.setArgument('id', id);
};

/**
 * Sets the name.
 *
 * @param {string} name
 *
 * @access public
 * @return {module:command~Command}
 */
ContactLists.prototype.name = function (name) {
  return this.setArgument('name', name);
};

/**
 * Sets the description.
 *
 * @param {string} description
 *
 * @access public
 * @return {module:command~Command}
 */
ContactLists.prototype.description = function (description) {
  return this.setArgument('description', description);
};

/**
 * Send a CSV file to import contacts.
 *
 * @param {string} filename
 *
 * @access public
 * @return {module:command~Command}
 */
ContactLists.prototype.csv = function (filename) {
  return this.setArgument('file', filename);
};

/**
 * Saves the contact list to the given filename.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
ContactLists.prototype.saveTo = function (file) {
  return this.setArgument('accept_file', file);
};

/**
 * Adds or removes the given number to the given contact list.
 *
 * @param {string} number
 *
 * @access public
 * @return {module:command~Command}
 */
ContactLists.prototype.withNumber = function (number) {
  return this.setArgument('number', number);
};

ContactLists.prototype.endpoint = function (method) {
  var endpoint = 'contact_lists';
  var id = this.getArgument('id');
  if (id) {
    endpoint = endpoint + '/' + id;
    this.delArgument('id');
  }
  var number = this.getArgument('number');
  if (number) {
    this.delArgument('number');
    return endpoint + '/contacts/' + number;
  }
  var file = this.getArgument('file');
  var saveTo = this.getArgument('accept_file');
  if (file || saveTo) {
    endpoint = endpoint + '/' + 'contacts';
  }
  return endpoint;
};

exports.ContactLists = ContactLists;
