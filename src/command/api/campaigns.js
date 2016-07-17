/**
 * @module campaign
 */
var commandMod = require('../command');
var util = require('util');
var qs = require('querystring');

/**
 * The Campaigns endpoint.
 *
 * @link https://github.com/PortaText/docs/wiki/REST-API#api_campaigns Campaigns endpoint.
 * @class
 * @author Marcelo Gornstein <marcelog@portatext.com>
 * @license Apache-2.0
 * @copyright 2015 PortaText
 * @extends {module:command~Command}
 */
function Campaigns () {
  Campaigns.super_.call(this);
}

util.inherits(Campaigns, commandMod.Command);

/**
 * Sets the id.
 *
 * @param {integer} id
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.id = function (id) {
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
Campaigns.prototype.name = function (name) {
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
Campaigns.prototype.description = function (description) {
  return this.setArgument('description', description);
};

/**
 * Specifies source telephone number for the campaign.
 *
 * @param {string} from
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.from = function (from) {
  return this.setArgument('from', from);
};

/**
 * Contact list IDs to use.
 *
 * @param {integer[]} contactLists
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.toContactLists = function (contactLists) {
  return this.setArgument('contact_list_ids', contactLists);
};

/**
 * Send a CSV file to import contacts.
 *
 * @param {string} filename
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.csv = function (filename) {
  return this.setArgument('file', filename);
};

/**
 * Specify all subscribers of the given SMS Service as targets.
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.allSubscribers = function () {
  return this.setArgument('all_subscribers', true);
};

/**
 * Return the specific page of results.
 *
 * @param {integer} page
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.page = function (page) {
  return this.setArgument('page', page);
};

/**
 * Saves the contacts to the given filename.
 *
 * @param {string} file
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.saveTo = function (file) {
  return this.setArgument('accept_file', file);
};

/**
 * Query campaign contacts.
 *
 * @access public
 * @return {module:command~Command}
 */
Campaigns.prototype.contacts = function () {
  return this.setArgument('contacts', true);
};

/**
 * Schedule this campaign.
 *
 * @access public
 * @return {module:command~Command}
 * @see https://github.com/PortaText/docs/wiki/REST-API#schedules
 */
Campaigns.prototype.schedule = function (type, details) {
  var schedule = {};
  schedule[type] = details;
  return this.setArgument('schedule', schedule);
};

Campaigns.prototype.endpoint = function (method) {
  var endpoint = 'campaigns';
  var id = this.getArgument('id');
  if (id) {
    this.delArgument('id');
    endpoint = endpoint + '/' + id;
  }
  var contacts = this.getArgument('contacts');
  if (contacts) {
    this.delArgument('contacts');
    endpoint = endpoint + '/contacts';
  }
  var file = this.getArgument('file');
  if (file) {
    var args = JSON.parse(JSON.stringify(this.getArguments()));
    delete args.file;
    args = {settings: JSON.stringify(args)};
    endpoint = endpoint + '?' + qs.stringify(args);
  }
  var page = this.getArgument('page');
  if (page) {
    this.delArgument('page');
    endpoint = endpoint + '?page=' + page;
  }
  return endpoint;
};

exports.Campaigns = Campaigns;
