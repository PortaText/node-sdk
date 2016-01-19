/**
 * @module command
 */

/**
 * A base command.
 *
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 */
function Command () {
  /**
   * @property {Object} - Arguments for this command.
   * @default {}
   * @readonly
   */
  this.args = {};
}

/**
 * Sets the given argument to the given value.
 *
 * @param {HttpMethod} method
 *
 * @access protected
 * @return {module:command~Command}
 */
Command.prototype.setArgument = function (key, value) {
  this.args[key] = value;
  return this;
};

/**
 * Deletes an argument.
 *
 * @param {HttpMethod} method
 *
 * @access protected
 * @return {module:command~Command}
 */
Command.prototype.delArgument = function (key) {
  delete this.args[key];
  return this;
};

/**
 * Returns the value for the given argument name.
 *
 * @param {HttpMethod} method
 *
 * @access protected
 * @return {...*}
 */
Command.prototype.getArgument = function (key) {
  return this.args[key];
};

/**
 * Returns an associative array with the arguments.
 *
 * @param {HttpMethod} method
 *
 * @access protected
 * @return {Object}
 */
Command.prototype.getArguments = function () {
  return this.args;
};

/**
 * Returns a string with the endpoint for the given command.
 *
 * @param {HttpMethod} method
 *
 * @access public
 * @abstract
 * @return {string}
 */
Command.prototype.endpoint = function (method) {
  throw new Error('not_implemented');
};

/**
 * Returns the body for this endpoint.
 *
 * @param {HttpMethod} method
 *
 * @access public
 * @return {string}
 */
Command.prototype.body = function (method) {
  var file = this.args.file;
  if (file) {
    return 'file:' + file;
  }
  if (Object.keys(this.args).length > 0) {
    return JSON.stringify(this.args);
  }
  return '';
};

/**
 * Returns the content type for this endpoint.
 *
 * @param {HttpMethod} method
 *
 * @access public
 * @return {string}
 */
Command.prototype.contentType = function (method) {
  var file = this.args.file;
  if (file) {
    return 'text/csv';
  }
  return 'application/json';
};

/**
 * Returns the Accept header for this endpoint.
 *
 * @param {HttpMethod} method
 *
 * @access public
 * @return {string}
 */
Command.prototype.acceptContentType = function (method) {
  var file = this.args.accept_file;
  if (file) {
    return 'text/csv';
  }
  return 'application/json';
};

/**
 * Runs this command with a GET method and returns the result.
 *
 * @access public
 * @return {Promise}
 */
Command.prototype.get = function () {
  return this.run('get');
};

/**
 * Runs this command with a POST method and returns the result.
 *
 * @access public
 * @return {Promise}
 */
Command.prototype.post = function () {
  return this.run('post');
};

/**
 * Runs this command with a PATCH method and returns the result.
 *
 * @access public
 * @return {Promise}
 */
Command.prototype.patch = function () {
  return this.run('patch');
};

/**
 * Runs this command with a DELETE method and returns the result.
 *
 * @access public
 * @return {Promise}
 */
Command.prototype.delete = function () {
  return this.run('delete');
};

/**
 * Runs this command with a PUT method and returns the result.
 *
 * @access public
 * @return {Promise}
 */
Command.prototype.put = function () {
  return this.run('put');
};

/**
 * Runs this command with the given method and returns the result.
 *
 * @param {HttpMethod} method
 *
 * @access private
 * @return {Promise}
 */
Command.prototype.run = function (method) {
  var endpoint = this.endpoint(method);
  var cType = this.contentType(method);
  var aCType = this.acceptContentType(method);
  var file = this.args.accept_file;
  delete this.args.accept_file;
  var body = this.body(method);
  return this.client.run(endpoint, method, cType, aCType, body, file);
};

/**
 * Returns a command to use.
 *
 * @param {module:client~Client} client
 *
 * @access public
 * @return {module:command~Command}
 */
Command.prototype.setClient = function (client) {
  this.client = client;
  return this;
};

exports.Command = Command;
exports.KnownCommands = [
  ['Timezones'],
  ['Templates'],
  ['Tariffs'],
  ['Acl'],
  ['Me'],
  ['Blacklist'],
  ['Sms'],
  ['Cnam'],
  ['Jobs'],
  ['Settings'],
  ['Recharge'],
  ['Campaigns'],
  ['Variables'],
  ['DidSearch', 'did_search'],
  ['EmailVerify', 'email_verify'],
  ['CreditCards', 'credit_cards'],
  ['ContactLists', 'contact_lists'],
  ['SmsCampaign', 'sms_campaign'],
  ['CampaignLifecycle', 'campaign_lifecycle'],
  ['DidSettings', 'did_settings'],
  ['MyPassword', 'my_password']
];
