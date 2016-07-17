/**
 * @module sms
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Sms endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_sms SMS endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Sms () {
  Sms.super_.call(this);
}

util.inherits(Sms, commandMod.Command);

/**
 * Sets the id.
 *
 * @param {string} id
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.id = function (id) {
  return this.setArgument('id', id);
};

/**
 * Sets the message destination number.
 *
 * @param {string} to
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.to = function (to) {
  return this.setArgument('to', to);
};

/**
 * Sets the message source number.
 *
 * @param {string} from
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.from = function (from) {
  return this.setArgument('from', from);
};

/**
 * Sets the template id to use.
 *
 * @param {integer} templateId
 * @param {Object} variables
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.useTemplate = function (templateId, variables) {
  this.setArgument('template_id', templateId);
  return this.setArgument('variables', variables);
};

/**
 * Sets the message text.
 *
 * @param {string} text
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.text = function (text) {
  return this.setArgument('text', text);
};

/**
 * Set a specific custom client reference.
 *
 * @param {string} text
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.clientRef = function (clientRef) {
  return this.setArgument('client_ref', clientRef);
};

/**
 * Contact list IDs to use.
 *
 * @param {integer[]} contactLists
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.toContactLists = function (contactLists) {
  return this.setArgument('contact_list_ids', contactLists);
};

/**
 * Specify SMS Service ID to use as source.
 *
 * @param {integer} serviceId
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.fromService = function (serviceId) {
  return this.setArgument('service_id', serviceId);
};

/**
 * Searches for SMS operations
 *
 * @param {Object} Search params (see the API doc).
 *
 * @access public
 * @return {module:command~Command}
 */
Sms.prototype.search = function (params) {
  return this.setArgument('search_params', params);
};

/**
 * Schedule this sms.
 *
 * @access public
 * @return {module:command~Command}
 * @see https://github.com/PortaText/docs/wiki/REST-API#schedules
 */
Sms.prototype.schedule = function (type, details) {
  var schedule = {};
  schedule[type] = details;
  return this.setArgument('schedule', schedule);
};

Sms.prototype.endpoint = function (method) {
  var endpoint = 'sms';

  var searchParams = this.getArgument('search_params');
  if (searchParams) {
    this.delArgument('search_params');
    return endpoint + '?' + qs.stringify(searchParams);
  }
  var operationId = this.getArgument('id');
  if (operationId) {
    endpoint = endpoint + '/' + operationId;
    this.delArgument('id');
  }
  return endpoint;
};

exports.Sms = Sms;
