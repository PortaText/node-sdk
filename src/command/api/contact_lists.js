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

ContactLists.prototype.endpoint = function (method) {
  var endpoint = 'contact_lists';
  var id = this.getArgument('id');
  if (id) {
    endpoint = endpoint + '/' + id;
    this.delArgument('id');
  }
  var file = this.getArgument('file');
  if (file) {
    endpoint = endpoint + '/' + 'contacts';
  }
  return endpoint;
};

exports.ContactLists = ContactLists;
