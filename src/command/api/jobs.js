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

Jobs.prototype.endpoint = function (method) {
  var endpoint = 'jobs';
  var id = this.getArgument('id');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  return endpoint;
};

exports.Jobs = Jobs;
