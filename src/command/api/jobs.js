/**
 * @module jobs
 */
var commandMod = require('../command');
var util = require('util');

/**
 * The Jobs endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_jobs Jobs endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Jobs () {
  Jobs.super_.call(this);
}

util.inherits(Jobs, commandMod.Command);

/**
 * Sets the id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {module:command~Command}
 */
Jobs.prototype.id = function (id) {
  return this.setArgument('id', id);
};

/**
 * Return the specific page of results.
 *
 * @param {integer} page
 *
 * @access public
 * @return {module:command~Command}
 */
Jobs.prototype.page = function (page) {
  return this.setArgument('page', page);
};

/**
 * Used to save the file resulting of a job execution.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
Jobs.prototype.saveTo = function (file) {
  return this.setArgument('accept_any_file', file);
};

Jobs.prototype.endpoint = function (method) {
  var endpoint = 'jobs';
  var id = this.getArgument('id');
  var page = this.getArgument('page');
  this.delArgument('page');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  if (page) {
    endpoint = endpoint + '?page=' + page;
  }
  if (this.getArgument('accept_any_file')) {
    endpoint = endpoint + '/result';
  }
  return endpoint;
};

exports.Jobs = Jobs;
