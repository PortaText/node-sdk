/**
 * @module sms
 */
var commandMod = require('../command');
var util = require('util');

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

Sms.prototype.endpoint = function (method) {
  var endpoint = 'sms';
  var operationId = this.getArgument('id');
  if (operationId) {
    endpoint = endpoint + '/' + operationId;
    this.delArgument('id');
  }
  return endpoint;
};

exports.Sms = Sms;
