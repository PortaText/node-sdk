/**
 * @module templates
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Templates endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_templates Templates endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {Command}
 */
function Templates () {
  Templates.super_.call(this);
}

util.inherits(Templates, commandMod.Command);

Templates.prototype.endpoint = function (method) {
  var endpoint = 'templates';
  var id = this.getArgument('id');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  return endpoint;
};

/**
 * Sets the name.
 *
 * @param {string} name
 *
 * @access public
 * @return {Command}
 */
Templates.prototype.name = function (name) {
  return this.setArgument('name', name);
};

/**
 * Sets the description.
 *
 * @param {string} description
 *
 * @access public
 * @return {Command}
 */
Templates.prototype.description = function (description) {
  return this.setArgument('description', description);
};

/**
 * Sets the template text.
 *
 * @param {string} text
 *
 * @access public
 * @return {Command}
 */
Templates.prototype.text = function (text) {
  return this.setArgument('text', text);
};

/**
 * Sets the id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {Command}
 */
Templates.prototype.id = function (id) {
  return this.setArgument('id', id);
};

exports.Templates = Templates;
