/**
 * @module did_search
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The DidSearch endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_dids_search DidSearch endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function DidSearch () {
  DidSearch.super_.call(this);
}

util.inherits(DidSearch, commandMod.Command);

/**
 * Searches for DIDs for this specific country.
 *
 * @param {string} countryIso 2-letter ISO code.
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.forCountry = function (countryIso) {
  return this.setArgument('country', countryIso);
};

/**
 * Search only for toll free numbers.
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.tollFree = function () {
  return this.setArgument('type', 'toll_free');
};

/**
 * Search only for local numbers.
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.local = function () {
  return this.setArgument('type', 'local');
};

/**
 * Search only for national numbers.
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.national = function () {
  return this.setArgument('type', 'national');
};

/**
 * Search only for mobile numbers.
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.mobile = function () {
  return this.setArgument('type', 'mobile');
};

/**
 * Return the specific page of results.
 *
 * @param {integer} page
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.page = function (page) {
  return this.setArgument('page', page);
};

/**
 * Searches numbers that start with the specific pattern.
 *
 * @param {string} pattern
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.startsWith = function (pattern) {
  this.setArgument('where_pattern', 'starts_with');
  return this.setArgument('pattern', pattern);
};

/**
 * Searches numbers that ends with the specific pattern.
 *
 * @param {string} pattern
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.endsWith = function (pattern) {
  this.setArgument('where_pattern', 'ends_with');
  return this.setArgument('pattern', pattern);
};

/**
 * Searches numbers that contains the specific pattern.
 *
 * @param {string} pattern
 *
 * @access public
 * @return {module:command~Command}
 */
DidSearch.prototype.contains = function (pattern) {
  this.setArgument('where_pattern', 'anywhere');
  return this.setArgument('pattern', pattern);
};

DidSearch.prototype.body = function (method) {
  return '';
};

DidSearch.prototype.endpoint = function (method) {
  return 'dids/search?' + qs.stringify(this.getArguments());
};

exports.DidSearch = DidSearch;
