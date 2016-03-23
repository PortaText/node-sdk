/**
 * @module sms_services
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The SMS Services endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_sms_services SMS Services endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Services () {
  Services.super_.call(this);
}

util.inherits(Services, commandMod.Command);

/**
 * Sets the id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {module:command~Command}
 */
Services.prototype.id = function (id) {
  return this.setArgument('id', id);
};

/**
 * Saves the subscriber list to the given filename.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
Services.prototype.saveTo = function (file) {
  return this.setArgument('accept_file', file);
};

/**
 * Return the specific page of results.
 *
 * @param {integer} page
 *
 * @access public
 * @return {module:command~Command}
 */
Services.prototype.page = function (page) {
  return this.setArgument('page', page);
};

Services.prototype.endpoint = function (method) {
  var endpoint = 'sms_services';
  var id = this.getArgument('id');
  if (id) {
    endpoint = endpoint + '/' + id;
    this.delArgument('id');
  }
  var saveTo = this.getArgument('accept_file');
  if (saveTo) {
    endpoint = endpoint + '/' + 'subscribers';
  }
  var page = this.getArgument('page');
  if (page) {
    endpoint = endpoint + '/subscribers?page=' + page;
    this.delArgument('page');
    return endpoint;
  }
  return endpoint;
};

exports.Services = Services;
