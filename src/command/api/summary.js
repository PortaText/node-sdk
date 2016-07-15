/**
 * @module summary
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Summary endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_summary Summary endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Summary () {
  Summary.super_.call(this);
}

util.inherits(Summary, commandMod.Command);

/**
 * Sets the end date.
 *
 * @param {string} End date (see the API doc).
 *
 * @access public
 * @return {module:command~Command}
 */
Summary.prototype.to = function (date) {
  return this.setArgument('date_to', date);
};

/**
 * Sets the start date.
 *
 * @param {string} Start date (see the API doc).
 *
 * @access public
 * @return {module:command~Command}
 */
Summary.prototype.from = function (date) {
  return this.setArgument('date_from', date);
};

/**
 * Saves the summary to the given filename.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
Summary.prototype.saveTo = function (file) {
  return this.setArgument('accept_file', file);
};

/**
 * Sets report granularity to day.
 *
 * @access public
 * @return {module:command~Command}
 */
Summary.prototype.byDay = function () {
  return this.setArgument('granularity', 'date');
};

/**
 * Sets report granularity to month.
 *
 * @access public
 * @return {module:command~Command}
 */
Summary.prototype.byMonth = function () {
  return this.setArgument('granularity', 'month');
};

/**
 * Sets report granularity to week.
 *
 * @access public
 * @return {module:command~Command}
 */
Summary.prototype.byWeek = function () {
  return this.setArgument('granularity', 'week');
};

Summary.prototype.endpoint = function (method) {
  var endpoint = 'summary';
  var queryString = {};
  var dateFrom = this.getArgument('date_from');
  if (dateFrom) {
    queryString.date_from = dateFrom;
    this.delArgument('date_from');
  }
  var dateTo = this.getArgument('date_to');
  if (dateTo) {
    queryString.date_to = dateTo;
    this.delArgument('date_to');
  }
  var granularity = this.getArgument('granularity');
  if (granularity) {
    queryString.granularity = granularity;
    this.delArgument('granularity');
  }
  if (Object.keys(queryString).length > 0) {
    return endpoint + '?' + qs.stringify(queryString);
  }
  return endpoint;
};

exports.Summary = Summary;
